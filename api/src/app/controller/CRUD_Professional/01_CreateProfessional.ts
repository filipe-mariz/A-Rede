import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Professional from '../../model/01_Professional';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      born,
      activity,
      email,
      whatsapp,
      country,
      state,
      city,
      district,
      street,
      complement,
      number,
      bio,
      days,
      hours,
      userName,
      password,
    } = request.body;

    const professionalRepository = getRepository(Professional);

    const requestImages = request.files as Express.Multer.File[];
    const professionalImage = requestImages.map((image) => ({ path: image.filename }));

    const emailExists = professionalRepository.findOne({ where: { email } });
    const wppExists = professionalRepository.findOne({where: { whatsapp } });
    const userExists = professionalRepository.findOne({where: { userName } });

    if (emailExists) {
      return response.status(409).json({message: "This E-mail is already in use"})
    }
    if (wppExists) {
      return response.status(409).json({message: "This WhatsApp is already in use"})
    }
    if (userExists) {
      return response.status(409).json({message: "User already exists"})
    }

    const data = {
      name,
      born,
      activity,
      email,
      whatsapp,
      country,
      state,
      city,
      district,
      street,
      complement,
      number,
      bio,
      days,
      hours,
      userName,
      password,
      professionalImage,
    };

    const schemma = Yup.object().shape({
      name: Yup.string().required(),
      born: Yup.string().required(),
      activity: Yup.string().required(),
      email: Yup.string().required(),
      whatsapp: Yup.string().required(),
      country: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      district: Yup.string().required(),
      street: Yup.string().required(),
      complement: Yup.string().required(),
      number: Yup.string().required(),
      bio: Yup.string().required(),
      days: Yup.string().required(),
      hours: Yup.string().required(),
      userName: Yup.string().required(),
      password: Yup.string().required(),
      professionalImage: Yup.array(Yup.object().shape({
        path: Yup.string().required(),
      })),
    });

    await schemma.validate(data, {
      abortEarly: false,
    });

    const professional = professionalRepository.create(data);
    await professionalRepository.save(professional);
    response.status(201).json({ professional });
    
  }

};
