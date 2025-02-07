// API base URL - use environment variable for flexibility
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.mastertherobots.com';

// Debug environment variables and API URL usage
console.log('API Configuration:', {
    NODE_ENV: import.meta.env.MODE,
    VITE_API_URL: import.meta.env.VITE_API_URL,
    API_BASE_URL,
    courses_url: `${API_BASE_URL}/courses`
});

// API endpoints
export const API_ENDPOINTS = {
    courses: `${API_BASE_URL}/courses`,
    podcasts: `${API_BASE_URL}/podcasts`,
    resources: `${API_BASE_URL}/resources`,
    profiles: `${API_BASE_URL}/profiles`,
};
