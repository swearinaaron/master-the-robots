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
const Resource_1 = require("../entities/Resource");
const router = (0, express_1.Router)();
// GET /resources
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Attempting to get resources...');
        const resourceRepository = database_1.AppDataSource.getRepository(Resource_1.Resource);
        console.log('Got repository');
        const resources = yield resourceRepository.find();
        console.log('Found resources:', resources);
        res.json(resources);
    }
    catch (error) {
        console.error('Error fetching resources:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// POST /resources
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, type, url } = req.body;
        // Validate required fields
        if (!title || !description || !type || !url) {
            return res.status(400).json({
                error: 'Missing required fields: title, description, type, url'
            });
        }
        const resourceRepository = database_1.AppDataSource.getRepository(Resource_1.Resource);
        const newResource = resourceRepository.create({
            title,
            description,
            type,
            url
        });
        yield resourceRepository.save(newResource);
        res.status(201).json(newResource);
    }
    catch (error) {
        console.error('Error creating resource:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
