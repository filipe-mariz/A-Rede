import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Professional from '../../model/01_Professional';

export default {
    async update(request: Request, response: Response) {
        const professional = await getRepository(Professional).findOne(request.params.id);

        if(professional) {
            getRepository(Professional).merge(professional, request.body)
            const results = await getRepository(Professional).save(professional)
            return response.json({results})
        }

        return response.send(401).json({message: "User not found"})
    }
}
