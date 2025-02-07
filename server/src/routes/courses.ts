import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Course } from '../entities/Course';

const router = Router();

// GET /api/courses
router.get('/', async (req, res) => {
    try {
        const courseRepository = AppDataSource.getRepository(Course);
        const courses = await courseRepository.find();
        res.json(courses);
    } catch (err) {
        const error = err as Error;
        console.error('Error fetching courses:', {
            error: error.name,
            message: error.message
        });
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});

export default router; 