"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.podcastsRouter = void 0;
const express_1 = require("express");
const database_1 = require("../config/database");
const Podcast_1 = require("../entities/Podcast");
const router = (0, express_1.Router)();
exports.podcastsRouter = router;
// GET /api/podcasts
router.get('/', async (req, res) => {
    try {
        const podcastRepository = database_1.AppDataSource.getRepository(Podcast_1.Podcast);
        const podcasts = await podcastRepository.find();
        res.json(podcasts);
    }
    catch (err) {
        const error = err;
        console.error('Error fetching podcasts:', {
            error: error.name,
            message: error.message
        });
        res.status(500).json({ error: 'Failed to fetch podcasts' });
    }
});
