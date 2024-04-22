import { NextFunction } from "express";

const jwt = require('jsonwebtoken');

const verifyToken = (req: any, res: any, next: NextFunction) => {
    console.log("verify jwt token middleware");
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.sendStatus(401); // Unauthorized if no token is provided
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err: Error, user: any) => {
        if (err) {
            return res.sendStatus(403); // Forbidden if token is invalid
        }
        req.user = user;
        next();
    });
};

module.exports = verifyToken;
