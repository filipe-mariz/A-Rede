import express from 'express'
import person from './personRoutes'
import professional from './professionalRoutes';

const routes = express();

export default routes.use(
    person,
    professional
);

