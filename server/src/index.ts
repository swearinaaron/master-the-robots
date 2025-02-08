import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import app from './app';
import { connectDatabase } from './config/database';

// Load environment variables
dotenv.config();

// Initialize express app
const PORT = parseInt(process.env.PORT || '3000', 10);

// Database connection
const pool = new Pool(
  process.env.DATABASE_URL 
    ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USERNAME,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT || '5432'),
      }
);

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy' });
});

// Courses routes
app.get('/api/courses', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Podcasts routes
app.get('/api/podcasts', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM podcasts');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch podcasts' });
  }
});

// Resources routes
app.get('/api/resources', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM resources');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

// Profile routes
app.get('/api/profile/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

connectDatabase()
    .then(() => {
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`);
            console.log(`Frontend URL: ${process.env.CORS_ORIGIN || 'http://localhost:5173'}`);
            console.log(`Database URL: ${process.env.DATABASE_URL ? 'Set' : 'Not set'}`);
            console.log(`Environment: ${process.env.NODE_ENV}`);
        });
    })
    .catch((error) => {
        console.error('Failed to start server:', error);
        process.exit(1);
    });

// Global error handling
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
});
