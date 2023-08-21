import app from './app';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4000;
app.use(cors({ origin: ['*', 'http://localhost:3000/'] }));
app.listen(port);
console.log('Server is up!');
