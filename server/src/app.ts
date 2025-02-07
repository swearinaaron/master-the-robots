import express from 'express';
import cors from 'cors';
import { AppDataSource } from './config/database';
import coursesRouter from './routes/courses';
import podcastsRouter from './routes/podcasts';
import resourcesRouter from './routes/resources';
import profilesRouter from './routes/profiles';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/courses', coursesRouter);
app.use('/podcasts', podcastsRouter);
app.use('/resources', resourcesRouter);
app.use('/profiles', profilesRouter);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Initialize database connection
AppDataSource.initialize()
    .then(() => {
        console.log("Database connection initialized");
    })
    .catch((error) => {
        console.error("Error initializing database:", error);
    });

export default app; 