"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("../config/database");
const Course_1 = require("../entities/Course");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
exports.coursesRouter = router;
const courseRepository = database_1.AppDataSource.getRepository(Course_1.Course);
// Configure multer for image uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.join(__dirname, '../../public/img'));
    },
    filename: (req, file, cb) => {
        const courseId = req.params.id;
        cb(null, `course${courseId}.png`);
    }
});
const upload = (0, multer_1.default)({ storage });
// GET /api/courses
router.get('/', async (req, res) => {
    try {
        console.log('GET /api/courses - Starting request');
        console.log('Repository status:', {
            exists: !!courseRepository,
            metadata: courseRepository.metadata
        });
        console.log('Attempting to find courses...');
        const courses = await courseRepository.find();
        console.log('Courses query completed:', {
            success: true,
            count: courses === null || courses === void 0 ? void 0 : courses.length,
            firstCourse: courses === null || courses === void 0 ? void 0 : courses[0]
        });
        res.json(courses);
    }
    catch (error) {
        console.error('Detailed error in GET /api/courses:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            query: error.query,
            parameters: error.parameters // TypeORM specific
        });
        res.status(500).json({
            message: 'Error fetching courses',
            error: error.message,
            name: error.name
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
    }
    catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Error updating course' });
    }
});
// Update course image
router.post('/:id/image', upload.single('image'), async (req, res) => {
    try {
        const course = await courseRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        course.image_url = `/img/course${course.id}.png`;
        await courseRepository.save(course);
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating course image' });
    }
});
