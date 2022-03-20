import bcrypt from "bcryptjs";

import User from '../model/userSchema.js';

export const userSignIn = async(req, res) => {
    const { username, password } = req.body;
 
    try {
        const existingUser = await User.findOne({ username });
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist" });
 
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid passowrd" });
        
        res.status(200).json({ result: existingUser }); 
     } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
 };

export const userSignUp = async(req, res) => {
    const { name, username, email, password, phone } = req.body;

    try {
        const existingUsername = await User.findOne({ username });
        if(existingUsername) return res.status(400).json({ message: "Username already exist" });
        
        const existingEmail = await User.findOne({ email });
        if(existingEmail) return res.status(400).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ name, username, email, password: hashedPassword, phone });

        res.status(201).json("User is registered successfully");  
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};