import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Professional from '../model/01_Professional';
import professional from '../view/01_Professional';
import professionalImage from '../view/01_ProfessionalImage';

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
            password
        } = request.body;

        const professionalRepository = getRepository(Professional)

        const requestImages = request.files as Express.Multer.File[];
        const professionalImage = requestImages.map(image => {
            return { path: image.filename }
        })

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
            professionalImage
        }

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
                path: Yup.string().required()
            }))
        })

        await schemma.validate(data, {
            abortEarly: false
        })

        const professional = professionalRepository.create(data);
        await professionalRepository.save(professional);
        response.status(201).json({ professional })

    },

    async view(request: Request, response: Response) {

    },

    async show(request: Request, response: Response) {

    },

    async update(requeste: Request, response: Response) {

    },

    async delete(requeste: Request, response: Response) {

    }
}
