import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Person from '../../model/02_Person';
import PersonView from '../../view/02_Person';
import personImage from '../../view/02_PersonImage';

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
      passwordHash,
    } = request.body;

    const personRepository = getRepository(Person);

    const requestImages = request.files as Express.Multer.File[];
    const personImage = requestImages.map((image) => ({ path: image.filename }));

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
      passwordHash,
      personImage,
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
      passwordHash: Yup.string().required(),
      personImage: Yup.array(Yup.object().shape({
        path: Yup.string().required(),
      })),
    });

    await schemma.validate(data, {
      abortEarly: false,
    });

    const person = personRepository.create(data);
    await personRepository.save(person);
    response.status(201).json({ person });
  },

  async view(request: Request, response: Response) {

  },

  async show(request: Request, response: Response) {

  },

  async update(requeste: Request, response: Response) {

  },

  async delete(requeste: Request, response: Response) {

  },
};
