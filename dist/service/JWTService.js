"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class JWTService {
    // Generate token with necessary parts of the user (tgid, name, phone)
    static generateToken(user) {
        const payload = {
            tgid: user.tgid,
            name: user.name,
            phone: user.phone,
        };
        // Sign the token with the payload and the secret key
        const token = jsonwebtoken_1.default.sign(payload, this.secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
        return token;
    }
    // Verify the token and return the decoded information
    static verifyToken(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, this.secretKey);
            return decoded;
        }
        catch (error) {
            console.error('Invalid or expired token');
            return null;
        }
    }
}
exports.JWTService = JWTService;
JWTService.secretKey = process.env.JWT_SECRET_KEY || 'your_secret_key'; // Use environment variable for secret key
