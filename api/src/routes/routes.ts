import express from 'express';
import person from './person.Routes';
import professional from './professional.Routes';

const routes = express();

export default routes.use(
  person,
  professional,
);
