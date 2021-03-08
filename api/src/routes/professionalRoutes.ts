import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/uploads';
import professionalController from '../app/controller/CRUD_Professional/01_Create';

const professional = Router();
const upload = multer(uploadConfig);

professional.post('/createprofessional', upload.array('images'), professionalController.create);
professional.get('/viewprofessional', professionalController.view);
professional.get('/viewprofessional/:id', professionalController.show);
professional.put('/updateprofessional/id', professionalController.update);
professional.delete('/deleteprofessional/:id', professionalController.delete);

export default professional;
