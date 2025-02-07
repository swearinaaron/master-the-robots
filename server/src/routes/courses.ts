import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Course } from '../entities/Course';

const router = Router();

// GET /courses
router.get('/', async (req, res) => {
    try {
        console.log('Attempting to get courses...');
        const courseRepository = AppDataSource.getRepository(Course);
        console.log('Got repository');
        const courses = await courseRepository.find();
        console.log('Found courses:', courses);
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /courses
router.post('/', async (req, res) => {
    try {
        const { title, description, image_url, difficulty_level } = req.body;

        // Validate required fields
        if (!title || !description || !image_url || !difficulty_level) {
            return res.status(400).json({ 
                error: 'Missing required fields: title, description, image_url, difficulty_level' 
            });
        }

        const courseRepository = AppDataSource.getRepository(Course);
        const newCourse = courseRepository.create({
            title,
            description,
            image_url,
            difficulty_level
        });

        await courseRepository.save(newCourse);
        res.status(201).json(newCourse);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
