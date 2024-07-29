import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config();

 const jwtsec = process.env.JWT_token
 const jwt_time= '60m'
 const  tokengenration = async(user_id) =>{
    return  jwt.sign({id:user_id},jwtsec,{
        expiresIn:jwt_time })

 }

 export const verifytoken =(token)=>{
    try{
    const decode =  jwt.verify(token,jwtsec)
     console.log(decode)
    }
    catch(error){
        console.log("jwt error")
    }

 }
 export const comparepassword = async (password, hashedpassword) => {
    try {
        const result = await bcrypt.compare(password, hashedpassword);
        console.log(`Password comparison result: ${result}`); // Debugging statement
        return result;
    } catch (error) {
        console.error('Error comparing passwords:', error); // Debugging statement
        return false;
    }
};
 export default tokengenration