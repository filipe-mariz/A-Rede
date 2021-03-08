import { Router } from 'express';
import multer from 'multer';
import createPerson from '../app/controller/CRUD_Person/01_CreatePerson';
import readPerson from '../app/controller/CRUD_Person/02_ReadPerson';
import updatePerson from '../app/controller/CRUD_Person/03_UpdatePerson';
import deletePerson from '../app/controller/CRUD_Person/04_DeletePerson';
import uploadConfig from '../config/uploads';

const person = Router();
const upload = multer(uploadConfig);

person.post('/createperson', upload.array('images'), createPerson.create);
person.get('/viewperson', readPerson.view);
person.get('/viewperson/:id', readPerson.show);
person.put('/updateperson/:id', updatePerson.update);
person.delete('/deleteperson/:id', deletePerson.delete);

export default person;
