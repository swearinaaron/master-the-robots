import express from 'express';
import { AppDataSource } from '../config/database';
import { Course } from '../entities/Course';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();
const courseRepository = AppDataSource.getRepository(Course);

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../../public/img');
if (!fs.existsSync(uploadDir)) {
    console.log('Creating upload directory:', uploadDir);
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer with safety limits
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('Processing upload to directory:', uploadDir);
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Use the original filename
        cb(null, file.originalname);
    }
});

// Add file filter and limits
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
        files: 1 // Only 1 file at a time
    },
    fileFilter: (req, file, cb) => {
        console.log('Checking file:', file.originalname, 'Type:', file.mimetype);
        
        // Accept only images
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed'));
        }
        
        // Accept only specific formats
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Only JPG, PNG and GIF files are allowed'));
        }
        
        cb(null, true);
    }
});

// GET /api/courses
router.get('/', async (req, res) => {
    try {
        console.log('=== GET /api/courses START ===');
        console.log('Repository check:', {
            exists: !!courseRepository,
            metadata: courseRepository?.metadata?.tableName
        });

        console.log('Attempting database query...');
        const rawQuery = await AppDataSource.query('SELECT COUNT(*) FROM courses');
        console.log('Raw query result:', rawQuery);

        console.log('Attempting TypeORM query...');
        const courses = await courseRepository.find();
        console.log('TypeORM query result:', {
            success: true,
            count: courses?.length,
            sample: courses?.[0]?.id
        });

        console.log('=== GET /api/courses END ===');
        res.json(courses);
    } catch (error: any) {
        console.error('=== GET /api/courses ERROR ===', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            query: error.query,
            driverError: error.driverError
        });
        res.status(500).json({ 
            message: 'Error fetching courses',
            error: error.message,
            type: error.name
        });
    }
});

// Update course text fields
router.patch('/:id', async (req, res) => {
    try {
        console.log(`Updating course with ID: ${req.params.id}`);
        const course = await courseRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        Object.assign(course, req.body);
        await courseRepository.save(course);
        console.log('Course updated:', course);
        res.json(course);
    } catch (error: any) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Error updating course' });
    }
});

// Update course image
router.post('/:id/image', upload.single('image'), async (req, res) => {
    try {
        const { id } = req.params;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Save the original filename to the database
        const imagePath = `/img/${file.originalname}`;
        await courseRepository.update(id, { image_url: imagePath });

        res.json({ message: 'Image uploaded successfully', path: imagePath });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Error uploading image' });
    }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Received DELETE request for course ID: ${id}`);

        const course = await courseRepository.findOneBy({ id: parseInt(id) });
        console.log('Course found:', course);

        if (!course) {
            console.log('Course not found, returning 404');
            return res.status(404).json({ message: 'Course not found' });
        }

        await courseRepository.remove(course);
        console.log('Course deleted:', course);
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Error deleting course' });
    }
});

export { router as coursesRouter }; 