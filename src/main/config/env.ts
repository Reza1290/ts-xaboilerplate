import 'dotenv/config';

export const env = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'default-secret-key-for-dev',
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/xaboilerplate'
};
