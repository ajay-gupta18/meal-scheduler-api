import { config } from "../config/index.js";
import { verifyJwt } from "../utils/common.js";

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

        // Expect: "Bearer <token>"
        const parts = authHeader.split(" ");

        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({ message: "Invalid authorization format" });
        }

        const token = parts[1];
        const decoded = verifyJwt(token, config.accessTokenSecret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default authMiddleware;
