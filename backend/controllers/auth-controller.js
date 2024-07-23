import User from './../models/user-model.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
// Load environment variables from .env file
import { errorHandler } from "../utils/error.js";
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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
  
      const validPassword = await bcrypt.compare(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Invalid credentials!'));
  
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      const { password: pass, ...rest } = validUser._doc;
  
      res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', 
          sameSite: 'strict', 
        })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  };
