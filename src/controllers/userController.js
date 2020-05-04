import express from 'express';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';
import registerValidation from '../validation/registerValidation';

export default {
    register: async(req, res) => {
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const { email } = req.body;
        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                message: 'Email already exists'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role,
        });


        try {
            const savedUser = await user.save();
            res.send({
                status: 201,
                message: "User successfully registered",
                user: user._id,
            });

        } catch (err) {
            res.status(400).json(err);
        }
    },
};