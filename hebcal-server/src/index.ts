import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import zmanimRoutes from './routes/zmanim';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/zmanim', zmanimRoutes);

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server is live on port ${PORT}`);
  console.log(`📂 Serving static files from: ${publicPath}`);
});