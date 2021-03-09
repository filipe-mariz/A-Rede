import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import professionalView from '../../view/01_Professional';
import Professional from '../../model/01_Professional';

export default {
    async view(request: Request, response: Response) {
        const professionalRepository = getRepository(Professional)

        const professional = await professionalRepository.find({
            relations: ['image']
        });

        return response.json(professionalView.renderMany(professional));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params

        const professionalRepository = getRepository(Professional)

        const professional = await professionalRepository.findOneOrFail(id, {
            relations: ['image']
        });

        return response.json(professionalView.Render(professional));
        
    }

}