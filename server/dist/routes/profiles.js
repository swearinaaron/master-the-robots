"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesRouter = void 0;
const express_1 = require("express");
const database_1 = require("../config/database");
const Profile_1 = require("../entities/Profile");
const router = (0, express_1.Router)();
exports.profilesRouter = router;
// GET /api/profiles/:userId
router.get('/:userId', async (req, res) => {
    try {
        const profileRepository = database_1.AppDataSource.getRepository(Profile_1.Profile);
        const profile = await profileRepository.findOne({
            where: { user_id: req.params.userId }
        });
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(profile);
    }
    catch (err) {
        const error = err;
        console.error('Error fetching profile:', {
            error: error.name,
            message: error.message
        });
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});
