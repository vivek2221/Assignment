import { ModelRegister } from "./mongooseValidation.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const cookieOptions = {
    httpOnly: true,
    secure: false,
    signed: true,
    maxAge: 24 * 60 * 60 * 1000
};

export const Register = async (req, res) => {
        const contents = req.body;
        const find = await ModelRegister.findOne({ email: contents.email });
        
        if (find) {
            return res.status(409).json({ mess: 'already exists' });
        }

        const hashPassword = await bcrypt.hash(contents.password, 10);
        const newUser = await ModelRegister.create({
            fullName: contents.fullName,
            email: contents.email,
            password: hashPassword,
            role: contents.role
        });

        const token = jwt.sign(
            { id: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        res.cookie('token', token, cookieOptions);
        res.status(201).json({ mess: 'registered Succesfully' });

}
export const Login = async (req, res) => {
        const { email, password } = req.body;
        const user = await ModelRegister.findOne({ email });

        if (!user) {
            return res.status(401).json({ mess: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ mess: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        res.cookie('token', token, cookieOptions);
        
        res.status(200).json({
            mess: 'Login successful',
            user: {
                email: user.email,
                name: user.fullName,
                role: user.role
            }
        })
}

export const Logout = async (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: false,
        signed: true
    })
    res.status(200).json({ mess: 'Logged out successfully' })
}