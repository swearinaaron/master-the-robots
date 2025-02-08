// API base URL - use environment variable for flexibility
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://master-the-robots.herokuapp.com';

// Debug environment variables and API URL usage
console.log('API Configuration Details:', {
    NODE_ENV: import.meta.env.MODE,
    VITE_API_URL: import.meta.env.VITE_API_URL,
    API_BASE_URL,
    import_meta_env: import.meta.env,
});

console.log('Course API URL:', `${API_BASE_URL}/api/courses`);

// API endpoints
export const API_ENDPOINTS = {
    base: process.env.NODE_ENV === 'production' 
        ? 'https://master-the-robots.herokuapp.com'
        : 'http://localhost:5173',
    courses: `${API_BASE_URL}/api/courses`,
    podcasts: `${API_BASE_URL}/api/podcasts`,
    resources: `${API_BASE_URL}/api/resources`,
    profiles: `${API_BASE_URL}/api/profiles`,
};

// Log final endpoints
console.log('Final API Endpoints:', API_ENDPOINTS);
