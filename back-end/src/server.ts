import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4001;

app.listen(port);
console.log('listening at', port);
