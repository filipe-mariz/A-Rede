import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Professional from '../../model/01_Professional';

export default {
    async delete(request: Request, response: Response) {
        const delet = await getRepository(Professional).delete(request.params.id)

        return response.json({mesage: "User successfully deleted"})
    }
}
