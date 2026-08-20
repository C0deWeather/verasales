import { verifyToken } from "../utils/jwt.js"
import { ClientError } from "../utils/errors.js"

export default function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new ClientError("Authorization header is required", 401);
    }

    const [scheme, token] = authHeader.split(" ");

    if ( scheme !== "Bearer" || !token ) {
        throw new ClientError("Invalid authorization header", 401);
    }

    try {
        const payload = verifyToken(token);
        req.user = payload;
    } catch(error) {
        throw new ClientError("Invalid or expired token", 401);
    }

    next();
}
