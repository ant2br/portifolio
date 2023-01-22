//will import User model
import User from '../../models/User'


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default async (req, res) => {


     if(req.method === 'POST'){

        const { username, password, email } = req.body;


        await prisma.user.findFirst({
            where: {
              email: email,
            },
          }).then((user) => {

            if(user){
                res.status(400).json({message: 'User already exists'});
            }
            else{
                const hash = bcrypt.hashSync(password, salt);

                prisma.user.create({
                    data: {
                        name: username,
                        email: email,
                        password: hash,
                        role: 'USER',
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }}).then((user) => {
                        res.status(200).json({message: 'User created'});
                    }).catch((err) => {});
            }

          }).catch((err) => {
            res.status(400).json({message: 'Tente novamente mais tarde'});
          })
     } else {
        res.status(405).json({message: 'Method not allowed'});
     }
}

