import { User } from './src/entity/User';
import { Role } from './src/enum/Role';
import { JWTService } from './src/service/JWTService';


// Example user
const user = new User();
user.tgid = '123456789';
user.name = 'John Doe';
user.phone = '1234567890';
user.role = Role.ADMIN;  // Set the role

// Generate the token
const token = JWTService.generateToken(user);
console.log('Generated Token:', token);

// Verify and decode the token
const decoded = JWTService.verifyToken(token);
console.log('Decoded Token:', decoded);
