import jsonwebtoken from 'jsonwebtoken';
const { verify } = jsonwebtoken;
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";

export async function protect(req, res, next) {
    let token;

    const headers = req.headers[`authorization`];

    if (headers && headers.startsWith("Bearer")) {
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDFlYTFmNWEwOWJiZDZmNTQ1MmEwZiIsImlhdCI6MTY2NTI2NDE1OSwiZXhwIjoxNjY1MjY0NzU5fQ.f6Mm729KQicnx6YXdr7TFESSQgzRDJ3qBPPdY7OYGKQ
        token = headers.split(" ")[1];
    }

    if(!token) {
        return next(new ErrorResponse("No signed-token found!, Not authorized to access this route.", 401));
    }

    try {
        const decoded = verify(String(token), process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if (!user) {
            return next(new ErrorResponse("No user found with this given ID.", 404));
        }

        const { altid, username, email } = user;
        req.user = { altid, username, email };

        console.log(`Retrieving User [REQ.USER]:`, req.user);

        next();
    } catch (error) {
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }
}

export async function AdminProtect(req, res, next) {
    const { altid } = req.user;
    const { role } = await User.findOne({ altid });

    try {
        
        if (role !== `admin`) {
            return next(new ErrorResponse(`You are not authorized access this route only admins are allow!`, 403));
        }
        next();
    } catch (error) {
        return next(new ErrorResponse(`You are in a state which no role options in database!`, 500));
    }

}