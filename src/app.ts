import express from 'express';
import bodyParser from 'body-parser';
import eventRoutes from './routes/eventRoutes';
import { syncDatabase } from './models';

const app = express();

app.use(bodyParser.json());
app.use('/api', eventRoutes);

syncDatabase(); // Ensure the database is synchronized

export default app;
