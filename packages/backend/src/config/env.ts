import dotenv from 'dotenv';

dotenv.config();

export const config = {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '5000'),
    apiVersion: process.env.API_VERSION || 'v1',

    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432'),
        name: process.env.DB_NAME || 'mqr_db',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '',
    },

    jwt: {
        secret: process.env.JWT_SECRET || 'change-this-secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },

    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD,
    },

    urls: {
        frontend: process.env.FRONTEND_URL || 'http://localhost:3000',
        backend: process.env.BACKEND_URL || 'http://localhost:5000',
    },
};

export default config;