//will import User model
import User from '../../models/User'
const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import dbConnect from '../../libs/DbConnect'


export default async (req, res) => {


     if(req.method === 'DELETE'){
        await dbConnect();

            //get user from token
            const token = req.headers.authorization.split(' ')[1];
            jwt.destroy(token);

            res.status(200).json({message: 'Token destroyed'});
    }
    else{
        res.status(405).json({message: 'Method not allowed'});
    }
}

