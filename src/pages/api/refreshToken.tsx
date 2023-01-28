//will import User model
import User from '../../models/User'
const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import dbConnect from '../../libs/DbConnect'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default async (req, res) => {


     if(req.method === 'POST'){

            //get user from token
            const token = req.headers.authorization.split(' ')[1];
            const refreshToken = req.body.token;

            try{
                jwt.verify(token, process.env.JWT_SECRET);

            } catch (error) {

                try {
                    var refresh = jwt.verify(refreshToken, process.env.JWT_SECRET);
                    const decoded = jwt.decode(token)
                    if(decoded.id == refresh.id && refresh.refreshToken === true){
                        var user = await prisma.user.findFirst({
                            where: {
                              id: decoded.id,
                            },
                          })

                        if(!user){
                            res.status(401).json({message: 'Unauthorized'});
                        }

                        const newToken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '15m'});
                        res.status(200).json({token: newToken});
                    }

                } catch(error) {
                    res.status(401).json({message: 'Unauthorized'});
                }
                



                
            }

    }
    else{
        res.status(405).json({message: 'Method not allowed'});
    }
}

