import express from 'express';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
app.use(express.json());

app.use('/feedback', feedbackRoutes);

export default app;
