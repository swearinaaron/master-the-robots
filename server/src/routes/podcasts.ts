import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Podcast } from '../entities/Podcast';

const router = Router();

// GET /api/podcasts
router.get('/', async (req, res) => {
    try {
        const podcastRepository = AppDataSource.getRepository(Podcast);
        const podcasts = await podcastRepository.find();
        res.json(podcasts);
    } catch (err) {
        const error = err as Error;
        console.error('Error fetching podcasts:', {
            error: error.name,
            message: error.message
        });
        res.status(500).json({ error: 'Failed to fetch podcasts' });
    }
});

export { router as podcastsRouter }; 