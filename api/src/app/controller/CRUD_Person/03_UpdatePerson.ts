import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Person from '../../model/01_Professional';

export default {
    async update(request: Request, response: Response) {
        const person = await getRepository(Person).findOne(request.params.id)

        if(person) {
            getRepository(Person).update(person, request.body)
            const results = getRepository(Person).save(person)
            return response.json(results)
        }

        return response.status(401).json({message: "User not found"})        
    }
}