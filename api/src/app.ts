import express from 'express';
import cors from 'cors'
import routes from './routes/routes';
import path from 'path';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler)

export default app;
