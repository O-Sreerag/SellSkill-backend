import { Request, Response, NextFunction } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { config } from "dotenv";
config();
import repositories from '../frameworks/repositories/mongo';

const {
    applicantRepository,
    recruiterRepository
} = repositories

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
        req.role = decoded.role;

        let user
        if(decoded?._id && decoded?.role == "recruiter") {
            user = await recruiterRepository.get(decoded._id);
        } else if(decoded?._id && decoded?.role == "applicant") {
            user = await applicantRepository.get(decoded._id);
        }

        if(user && user?.status == true) {
            console.log("user block status is true")
            return res.status(403).json({ message: 'User is blocked' });
        } else {
            console.log("user is not blocked")
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default verifyTokenAndEmail;
