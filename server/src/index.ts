import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes'; 
import messageRoutes from './routes/message.routes';
import linkRoutes from './routes/link.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/links', linkRoutes);


app.get('/', (_req, res) => {
  res.send('🚀 Under Belle API is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
