import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Person from '../../model/02_Person';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      contact,
      city, 
      district,
      street,
      complement,
      number,
      help,
      lat,
      long,
      userName,
      password,
    } = request.body;

    const personRepository = getRepository(Person);    

    const requestImages = request.files as Express.Multer.File[];
    const image = requestImages.map(image => {
      return { path: image.filename }
    })
    /*
    const contactExists = personRepository.findOne({ where: {contact}})
    const userNameExists = personRepository.findOne({ where: {userName}})
    if (contactExists) {
      return response.sendStatus(409).json({message: "This number is already in use"})      
    }
    if (userNameExists) {
      return response.sendStatus(409).json({message: "User already exist"})
    }*/

    const data = {
      name,
      contact,
      city,
      district,
      street,
      complement,
      number,
      help,
      lat,
      long,
      userName,
      password,
      image,
    };

    const schemma = Yup.object().shape({
      name: Yup.string().required(),
      contact: Yup.string().required(),
      city: Yup.string().required(),
      district: Yup.string().required(),
      street: Yup.string().required(),
      complement: Yup.string().required(),
      number: Yup.string().required(),
      help: Yup.string().required(),
      lat: Yup.number().required(),
      long: Yup.number().required(),
      userName: Yup.string().required(),
      password: Yup.string().required(),
      image: Yup.array(Yup.object().shape({
        path: Yup.string().required()
      }))
    });

    await schemma.validate(data, {
      abortEarly: false,
    });

    const person = personRepository.create(data);

    await personRepository.save(person);
    response.status(201).json({ person });
  }
  
};
