import { Router } from 'express';
import multer from 'multer';
import personController from '../app/controller/CRUD_Person/01_Create';
import uploadConfig from '../config/uploads';

const person = Router();
const upload = multer(uploadConfig);

person.post('/createperson', upload.array('images'), personController.create);
person.get('/viewperson', personController.view);
person.get('/viewperson/:id', personController.show);
person.put('/updateperson/:id', personController.update);
person.delete('/deleteperson/:id', personController.delete);

export default person;
