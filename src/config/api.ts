// API base URL - use environment variable for flexibility
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// In production, this will be:
// https://api.mastertherobots.com

// API endpoints
export const API_ENDPOINTS = {
    courses: `${API_BASE_URL}/courses`,
    podcasts: `${API_BASE_URL}/podcasts`,
    resources: `${API_BASE_URL}/resources`,
    profiles: `${API_BASE_URL}/profiles`,
};
