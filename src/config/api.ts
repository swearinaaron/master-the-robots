interface ImportMetaEnv {
  MODE: string;
  VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// API endpoints - use relative URLs to avoid CORS and connection issues
export const API_ENDPOINTS = {
    base: '',
    courses: '/api/courses',
    podcasts: '/api/podcasts',
    resources: '/api/resources',
    profiles: '/api/profiles',
};

// Log final endpoints
console.log('API Configuration:', {
    endpoints: API_ENDPOINTS,
    mode: import.meta.env.MODE
});
