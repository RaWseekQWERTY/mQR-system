import app from './app';
import { config } from './config/env';
import pool from './config/database';

const PORT = config.port;

async function startServer() {
    try {
        // Test database connection
        await pool.query('SELECT NOW()');
        console.log('✅ Database connection verified');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            console.log(`📝 Environment: ${config.env}`);
            console.log(`🔗 API: http://localhost:${PORT}/api/${config.apiVersion}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
}

startServer();