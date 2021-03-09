import { Router } from 'express';
import multer from 'multer';
import createprofessional from '../app/controller/CRUD_Professional/01_CreateProfessional';
import readProfessional from '../app/controller/CRUD_Professional/02_ReadProfessional';
import updateprofessional from '../app/controller/CRUD_Professional/03_UpdateProfessional';
import deleteprofessional from '../app/controller/CRUD_Professional/04_DeleteProfessional';
import uploadConfig from '../config/uploads';

const professional = Router();
const upload = multer(uploadConfig);

professional.post('/createprofessional', upload.array('images'), createprofessional.create);
professional.get('/viewprofessional', readProfessional.view);
professional.get('/viewprofessional/:id', readProfessional.show);
professional.put('/updateprofessional/:id', updateprofessional.update);
professional.delete('/deleteprofessional/:id', deleteprofessional.delete);

export default professional;
