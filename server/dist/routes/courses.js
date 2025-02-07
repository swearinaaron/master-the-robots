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
const Course_1 = require("../entities/Course");
const router = (0, express_1.Router)();
// GET /courses
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Attempting to get courses...');
        const courseRepository = database_1.AppDataSource.getRepository(Course_1.Course);
        console.log('Got repository');
        const courses = yield courseRepository.find();
        console.log('Found courses:', courses);
        res.json(courses);
    }
    catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// POST /courses
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, image_url, difficulty_level } = req.body;
        // Validate required fields
        if (!title || !description || !image_url || !difficulty_level) {
            return res.status(400).json({
                error: 'Missing required fields: title, description, image_url, difficulty_level'
            });
        }
        const courseRepository = database_1.AppDataSource.getRepository(Course_1.Course);
        const newCourse = courseRepository.create({
            title,
            description,
            image_url,
            difficulty_level
        });
        yield courseRepository.save(newCourse);
        res.status(201).json(newCourse);
    }
    catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
