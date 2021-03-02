import 'reflect-metadata';
import './database/connection';
import app from './app';

app.listen(3333, () => console.log('server is run'));
