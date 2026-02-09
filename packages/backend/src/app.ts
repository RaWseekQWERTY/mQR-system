import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { config } from './config/env';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(cors({
    origin: config.urls.frontend,
    credentials: true,
}));
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API routes will be added here
app.get(`/api/${config.apiVersion}`, (req, res) => {
    res.json({ message: 'mQR API v1' });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            ...(config.env === 'development' && { stack: err.stack }),
        },
    });
});

export default app;