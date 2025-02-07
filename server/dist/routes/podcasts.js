"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../config/database");
const Podcast_1 = require("../entities/Podcast");
const router = (0, express_1.Router)();
// GET /podcasts
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Attempting to get podcasts...');
        const podcastRepository = database_1.AppDataSource.getRepository(Podcast_1.Podcast);
        console.log('Got repository');
        const podcasts = yield podcastRepository.find();
        console.log('Found podcasts:', podcasts);
        res.json(podcasts);
    }
    catch (error) {
        console.error('Error fetching podcasts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// POST /podcasts
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, audio_url, duration } = req.body;
        // Validate required fields
        if (!title || !description || !audio_url || !duration) {
            return res.status(400).json({
                error: 'Missing required fields: title, description, audio_url, duration'
            });
        }
        const podcastRepository = database_1.AppDataSource.getRepository(Podcast_1.Podcast);
        const newPodcast = podcastRepository.create({
            title,
            description,
            audio_url,
            duration
        });
        yield podcastRepository.save(newPodcast);
        res.status(201).json(newPodcast);
    }
    catch (error) {
        console.error('Error creating podcast:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
