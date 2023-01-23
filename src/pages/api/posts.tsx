import User from '../../models/User'
const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import dbConnect from '../../libs/DbConnect'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {

    console.log(req)


     if(req.method === 'GET'){
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET, async function(err, decoded) {
                if (err) {
                    res.status(401).json({error: 'Token expired'});
                } else {

                    await prisma.post.findMany().then((posts) => {
                        res.status(200).json({posts});
                    }).catch((err) => {})
                }
              });
            

        
    } else if (req.method === 'POST'){
        console.log(req.body)
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET, async function(err, decoded) {
            if (err) {
                console.log()
                res.status(401).json({error: 'Token expired'});
            } else {
                const { title, content, description, image } = req.body;
                console.log(`Valido`)
                await prisma.post.create({
                    data: {
                      title: title,
                      content: content,
                      description: description,
                      image: image,
                      authorId: decoded.id,
                      createdAt: new Date(),
                      updatedAt: new Date(),
                    }}).then((post) => {
                        res.status(200).json({post});
                    }).catch((err) => {})
                }
            })


    

    }
    
}

