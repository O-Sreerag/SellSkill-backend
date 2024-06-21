import { Request, Response, NextFunction } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { config } from "dotenv";
config();

interface DecodedJwtPayload {
    _id: string;
    email: string;
    role: string;
}

const verifyAdminToken = async (req: any, res: any, next: NextFunction) => {
    try {
        console.log("verifyAdminToken middleware");

        console.log("headers")
        console.log(req.headers)

        // Extract adminToken from request headers
        const adminToken = req.headers['accesstoken'];
        console.log(adminToken);

        if (!adminToken) {
            return res.status(401).json({ message: 'No adminToken provided' });
        }

        // Verify adminToken
        const decoded: any = jwt.verify(adminToken as string, process.env.JWT_ACCESS_SECRET as string);
        console.log(decoded)
        req.adminId = decoded?._id;
        req.role = decoded?.role;

        if (!decoded?.role || !decoded?._id) {
            return res.status(401).json({ message: 'token verification failed!!' });
        } else if (decoded?.role && decoded?.role != "admin") {
            return res.status(401).json({ message: 'token verification failed!! role != admin' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid adminToken' });
    }
};

export default verifyAdminToken;
