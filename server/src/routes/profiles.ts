import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Profile } from '../entities/Profile';

const router = Router();

// GET /profiles
router.get('/', async (req, res) => {
    try {
        console.log('Attempting to get profiles...');
        const profileRepository = AppDataSource.getRepository(Profile);
        console.log('Got repository');
        const profiles = await profileRepository.find();
        console.log('Found profiles:', profiles);
        res.json(profiles);
    } catch (error) {
        console.error('Error fetching profiles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
