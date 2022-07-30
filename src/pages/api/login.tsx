//will import User model
import User from '../../models/User'
const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
import dbConnect from '../../libs/DbConnect'


export default async (req, res) => {


     if(req.method === 'POST'){
        await dbConnect();

        const { email, password } = req.body;
        

        User.findOne({email: email}, function(err, user){
            if(err){
                res.status(400).json({error: 'User or password incorrect'});
            }
            if(user){
                const compare = bcrypt.compareSync(password, user.password);

                if(compare){
                    console.log(compare)
                    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1m'});

                    const refreshToken = jwt.sign({id: user._id, refreshToken: true}, process.env.JWT_SECRET, {expiresIn: '1d'});

                    res.status(200).json({token: token, refreshToken: refreshToken, email: user.email, name: user.name, role: user.role});
                } else {
                    res.status(400).json({message: 'User or password incorrect'});
                }
            }
            
        })
    }
    else{
        //res.status(405).json({message: 'Method not allowed'});
    }
}

