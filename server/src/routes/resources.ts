import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Resource } from '../entities/Resource';
import express from 'express';

const router = express.Router();

// GET /api/resources
router.get('/', async (req, res) => {
    try {
        const resourceRepository = AppDataSource.getRepository(Resource);
        const resources = await resourceRepository.find();
        res.json(resources);
    } catch (err) {
        const error = err as Error;
        console.error('Error fetching resources:', {
            error: error.name,
            message: error.message
        });
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});

export { router as resourcesRouter }; 