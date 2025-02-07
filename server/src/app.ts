import express from 'express';
import cors from 'cors';
import { AppDataSource } from './config/database';
import coursesRouter from './routes/courses';
import podcastsRouter from './routes/podcasts';
import resourcesRouter from './routes/resources';
import profilesRouter from './routes/profiles';
import path from 'path';

const app = express();

// Configure CORS to allow requests from frontend domain
app.use(cors({
    origin: [
        'https://mastertherobots.com',
        'https://www.mastertherobots.com',
        // Include localhost for development
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true
}));

// Middleware
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../dist')));

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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

export default app; 