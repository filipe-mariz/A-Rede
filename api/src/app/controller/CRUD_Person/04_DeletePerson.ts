import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Person from '../../model/02_Person';

export default {
    async delete(request: Request, response: Response) {
        const results = await getRepository(Person).delete(request.params.id)

        return response.json({mesage: "User successfully deleted"})
    }
}
