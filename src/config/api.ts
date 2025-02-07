// API base URL - use environment variable for flexibility
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://master-the-robots-fe5cf20dff5e.herokuapp.com';

// Debug environment variables and API URL usage
console.log('API Configuration:', {
    NODE_ENV: import.meta.env.MODE,
    VITE_API_URL: import.meta.env.VITE_API_URL,
    API_BASE_URL,
});

// API endpoints
export const API_ENDPOINTS = {
    courses: `${API_BASE_URL}/api/courses`,
    podcasts: `${API_BASE_URL}/api/podcasts`,
    resources: `${API_BASE_URL}/api/resources`,
    profiles: `${API_BASE_URL}/api/profiles`,
};
