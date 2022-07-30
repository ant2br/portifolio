//will import User model
import User from '../../models/User'


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import dbConnect from '../../libs/DbConnect'


export default async (req, res) => {


     if(req.method === 'POST'){
        await dbConnect();

        const { username, password, email } = req.body;

        User.findOne({email: email}, function(err, user){
            if(err){
                res.status(500).json({error: err});
            }
            if(user){
                res.status(400).json({message: 'User already exists'});
            }
            else{
                const hash = bcrypt.hashSync(password, salt);
                var user = new User({
                    email: email,
                    name: username,
                    password: hash
                });
                user.save(function(err){
                    if(err){
                        res.status(500).json({error: err});
                    }
                    res.status(200).json({message: 'User created'});
                });
            }
        })
     } else {
        res.status(405).json({message: 'Method not allowed'});
     }
}

