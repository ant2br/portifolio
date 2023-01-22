//will import User model
import User from '../../models/User'
const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default async (req, res) => {


     if(req.method === 'POST'){
        

        const { email, password } = req.body;


        await prisma.user.findFirst({
            where: {
              email: email,
            },
          }).then((user) => {
            const compare = bcrypt.compareSync(password, user.password);

            if(compare){
                console.log(compare)
                const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1m'});

                const refreshToken = jwt.sign({id: user.id, refreshToken: true}, process.env.JWT_SECRET, {expiresIn: '1d'});

                res.status(200).json({token: token, refreshToken: refreshToken, email: user.email, name: user.name, role: user.role});
            } else {
                res.status(400).json({message: 'User or password incorrect'});
            }
          }).catch((err) => {
            res.status(400).json({message: 'User or password incorrect'});
          })
        
    }
    else{
        res.status(405).json({message: 'Method not allowed'});
    }
}

