import { Router } from 'express';
import { AppDataSource } from '../config/database';
import { Profile } from '../entities/Profile';

const router = Router();

// GET /api/profiles/:userId
router.get('/:userId', async (req, res) => {
    try {
        const profileRepository = AppDataSource.getRepository(Profile);
        const profile = await profileRepository.findOne({
            where: { user_id: req.params.userId }
        });
        
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        
        res.json(profile);
    } catch (err) {
        const error = err as Error;
        console.error('Error fetching profile:', {
            error: error.name,
            message: error.message
        });
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});

export { router as profilesRouter }; 