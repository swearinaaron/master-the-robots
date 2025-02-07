import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Resource } from '../entities/Resource';

const router = Router();

// GET /resources
router.get('/', async (req, res) => {
    try {
        console.log('Attempting to get resources...');
        const resourceRepository = AppDataSource.getRepository(Resource);
        console.log('Got repository');
        const resources = await resourceRepository.find();
        console.log('Found resources:', resources);
        res.json(resources);
    } catch (error) {
        console.error('Error fetching resources:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /resources
router.post('/', async (req, res) => {
    try {
        const { title, description, type, url } = req.body;

        // Validate required fields
        if (!title || !description || !type || !url) {
            return res.status(400).json({ 
                error: 'Missing required fields: title, description, type, url' 
            });
        }

        const resourceRepository = AppDataSource.getRepository(Resource);
        const newResource = resourceRepository.create({
            title,
            description,
            type,
            url
        });

        await resourceRepository.save(newResource);
        res.status(201).json(newResource);
    } catch (error) {
        console.error('Error creating resource:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
