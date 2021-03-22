import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Professional from '../../model/01_Professional';

export default {
    async login(request: Request, response: Response) {
        
        const professionalRepository = await getRepository(Professional)
        const {
            email,
            password
        } = request.body;

        const professional = await getRepository(Professional).findOne({ where: { email } })
        if (!professional) {
            return response.status(401).json({ message: "User not found"});
        }
        const passwordCheck = await bcrypt.compare(password, professional.password)
        if (!passwordCheck) {
            return response.status(401).json({ message: "Password incorrect"});
        }

        
        const token = jwt.sign({ id: professional.id }, process.env.TOKEN, {expiresIn: '1d'} );
         

        return response.status(200).json({
            message: "User successfully logged in",
            token
        })


    }
}
