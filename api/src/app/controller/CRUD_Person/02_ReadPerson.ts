import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import personView from '../../view/02_Person';
import Person from '../../model/01_Professional';

export default {
    async view(request: Request, response: Response) {
        const personRepository = getRepository(Person);

        const person = await personRepository.find({
            relations: ['image']
        })

        return response.json(personView.renderMany(person))

    },

    async show(request: Request, response: Response) {
        
    }
}