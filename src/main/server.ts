import express from 'express';
import mongoose from 'mongoose';
import { router } from './http/routes/index.js';
import { env } from './config/env.js';
import { MongoHelper } from '../infrastructure/database/mongodb/mongo-helper.js';

const app = express();

app.use(express.json());
app.use('/api', router);

MongoHelper
    .connect(env.mongoUrl)
    .then(() => {
        console.log('Successfully connected to MongoDB.');
        app.listen(env.port, () =>
            console.log(`🚀 Server running at http://localhost:${env.port}`)
        );
    })
    .catch((err) => console.error('Could not connect to MongoDB.', err));
