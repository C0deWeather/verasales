import { verifyToken } from "../utils/jwt.js"

export default function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("Authorization header is required");
    }

    const authHeaderValue = authHeader.split(" ");

    if ( authHeaderValue[0] !== "Bearer") {
        throw new Error("Invalid authorizatin header");
    }

    const token = authHeaderValue[1];
    const payload = verifyToken(token);

    req.user = payload;

    next();
}
