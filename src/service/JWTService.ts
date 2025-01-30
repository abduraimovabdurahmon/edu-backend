import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from './../entity/User'; // Adjust the import based on your file structure

dotenv.config();

export class JWTService {
  private static secretKey = process.env.JWT_SECRET_KEY || 'your_secret_key'; // Use environment variable for secret key

  // Generate token with necessary parts of the user (tgid, name, phone)
  static generateToken(user: User): string {
    const payload = {
      tgid: user.tgid,
      name: user.name,
      phone: user.phone,
    };

    // Sign the token with the payload and the secret key
    const token = jwt.sign(payload, this.secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

    return token;
  }

  // Verify the token and return the decoded information
  static verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      console.error('Invalid or expired token');
      return null;
    }
  }
}
