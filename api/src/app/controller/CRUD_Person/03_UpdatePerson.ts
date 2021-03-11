import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Person from '../../model/02_Person';

export default {
    async update(request: Request, response: Response)  {
        /*const person = await getRepository(Person).findOne(request.params.id)

        if(person) {
            getRepository(Person).update(person, request.body)
            const results = getRepository(Person).save(person)
            return response.json(results)
        }
        return response.status(401).json({message: "User not found"})*/
        
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
    
    },
    
    async password(request: Request, response: Response) {
        
    }
}
