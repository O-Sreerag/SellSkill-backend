import jwt from "jsonwebtoken"
// import mongoose from "mongoose"
import { JWT, JWT_Admin } from "../entities/interface"

export const generateAccessToken = ({ _id, role }: JWT) => {
    const expiresIn = "12h"
    const token = jwt.sign({ _id, role }, process.env.JWT_ACCESS_SECRET as jwt.Secret, { expiresIn })
    console.log("accestoken", token);

    return token
}

export const generateAccessAdminToken = ({ _id, email, role }: JWT_Admin) => {
    const expiresIn = "12h"
    const adminToken = jwt.sign({ _id, email, role }, process.env.JWT_ACCESS_SECRET as jwt.Secret, { expiresIn })
    console.log("accestoken", adminToken);

    return adminToken
}

export default jwt

// export const generateRefreshToken=(_id:mongoose.Types.ObjectId,role:string)=>{
// const expiresIn="30m"
// const jwtRefreshToken="Refresh-Secret-Key"
// const RefreshToken=jwt.sign({_id,role},jwtRefreshToken,{expiresIn});
// return RefreshToken
// }