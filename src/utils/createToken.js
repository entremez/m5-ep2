import jwt from 'jsonwebtoken';

export default function createToken(user){
    const token = jwt.sign(user, 'secret');
    return token;
}