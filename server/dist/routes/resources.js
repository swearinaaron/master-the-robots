"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourcesRouter = void 0;
const database_1 = require("../config/database");
const Resource_1 = require("../entities/Resource");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.resourcesRouter = router;
// GET /api/resources
router.get('/', async (req, res) => {
    try {
        const resourceRepository = database_1.AppDataSource.getRepository(Resource_1.Resource);
        const resources = await resourceRepository.find();
        res.json(resources);
    }
    catch (err) {
        const error = err;
        console.error('Error fetching resources:', {
            error: error.name,
            message: error.message
        });
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});
