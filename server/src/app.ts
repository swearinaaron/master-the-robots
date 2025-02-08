import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courses";
import podcastRoutes from "./routes/podcasts";
import resourceRoutes from "./routes/resources";
import profileRoutes from "./routes/profiles";

const app = express();

// Update CORS configuration
app.use(cors({
    origin: [
        'https://mastertherobots.com',
        'https://www.mastertherobots.com',
        'http://localhost:5173', // For local development
        'http://localhost:3000'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/podcasts", podcastRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/profiles", profileRoutes);

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

export default app; 