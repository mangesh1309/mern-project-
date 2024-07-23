import User from './../models/user-model.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Convert SALT_ROUNDS to an integer
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hash });
        await newUser.save();

        res.status(201).json("USER CREATED SUCCESSFULLY");
    } catch (error) {
        next(error);
    }
};
