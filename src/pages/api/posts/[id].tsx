const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method === 'GET'){
        const { id } = req.query

        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET, async function(err, decoded) {
        if (err) {
        res.status(401).json({error: 'Token expired'});
        }
        else {
            await prisma.post.findUnique({
                where: {
                    id: id
                }
            }).then((post) => {
                res.status(200).json({post});
            }).catch((err) => {})
        }
        });
        
            

        
    } 

    
    
}

