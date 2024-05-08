import { Request, Response, NextFunction } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { config } from "dotenv";
config();

interface DecodedJwtPayload {
    _id: string;
    role: string;
    // Add other properties if needed
}

const verifyTokenAndEmail = async (req: any, res: any, next: NextFunction) => {
    try {
        console.log("verifyTokenAndEmail middleware");

        console.log("headers")
        console.log(req.headers)
        
        // Extract token from request headers
        const token = req.headers['accesstoken'];
        console.log(token);

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Verify token
        const decoded: any = jwt.verify(token as string, process.env.JWT_ACCESS_SECRET as string); 
        console.log(decoded)

        req.userId = decoded._id;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default verifyTokenAndEmail;
