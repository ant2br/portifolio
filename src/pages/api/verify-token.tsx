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


            try{
                jwt.verify(token, process.env.JWT_SECRET);
                res.status(200).json({message: 'Authorized'});

            } catch (error) {

                    res.status(401).json({message: 'Unauthorized'});
                
                
            }

    }
    else{
        res.status(405).json({message: 'Method not allowed'});
    }
}

