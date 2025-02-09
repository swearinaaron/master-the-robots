import express from "express";
import cors from "cors";
import path from "path";
import { coursesRouter } from "./routes/courses";
import { podcastsRouter } from "./routes/podcasts";
import { resourcesRouter } from "./routes/resources";
import { profilesRouter } from "./routes/profiles";

const app = express();

// CORS configuration
app.use(cors({
    origin: true, // Allow all origins in development
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    credentials: true,
    maxAge: 86400 // Cache preflight requests for 24 hours
}));

// Middleware
app.use(express.json());

// Add before routes
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// Routes
app.use("/api/courses", coursesRouter);
app.use("/api/podcasts", podcastsRouter);
app.use("/api/resources", resourcesRouter);
app.use("/api/profiles", profilesRouter);

// Serve static files
app.use('/img', express.static(path.join(__dirname, '../public/img')));

// Add health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    service: 'master-the-robots-api',
    version: process.env.npm_package_version || '1.0.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
});

// Add test route before export
app.get('/test', (req, res) => {
    console.log('Test route hit');
    res.json({ message: 'Test route working' });
});

export default app; 