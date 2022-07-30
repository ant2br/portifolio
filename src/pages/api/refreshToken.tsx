//will import User model
import User from '../../models/User'
const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import dbConnect from '../../libs/DbConnect'


export default async (req, res) => {


     if(req.method === 'GET'){
        await dbConnect();




            //get user from token
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded)
            const userId = decoded.id;     

        User.findById(userId, function(err, user){
            if(err){
                res.status(404).json({error: 'User not found'});
            }
            if(user){
                res.status(200).json({user});
            }
            
        })
    }
    else{
        res.status(405).json({message: 'Method not allowed'});
    }
}

