import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Podcast } from '../entities/Podcast';

const router = Router();

// GET /podcasts
router.get('/', async (req, res) => {
    try {
        console.log('Attempting to get podcasts...');
        const podcastRepository = AppDataSource.getRepository(Podcast);
        console.log('Got repository');
        const podcasts = await podcastRepository.find();
        console.log('Found podcasts:', podcasts);
        res.json(podcasts);
    } catch (error) {
        console.error('Error fetching podcasts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /podcasts
router.post('/', async (req, res) => {
    try {
        const { title, description, audio_url, duration } = req.body;

        // Validate required fields
        if (!title || !description || !audio_url || !duration) {
            return res.status(400).json({ 
                error: 'Missing required fields: title, description, audio_url, duration' 
            });
        }

        const podcastRepository = AppDataSource.getRepository(Podcast);
        const newPodcast = podcastRepository.create({
            title,
            description,
            audio_url,
            duration
        });

        await podcastRepository.save(newPodcast);
        res.status(201).json(newPodcast);
    } catch (error) {
        console.error('Error creating podcast:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
