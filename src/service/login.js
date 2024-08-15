const user = require('../model/user');
const bcrypt = require('bcrypt');


const checkUser = async (req ) => {
    try {
        const { email, password } = req;
        const foundUser = await user.findOne({ email: email });
        if (foundUser) {
            const isPasswordCorrect = await bcrypt.compare(password, foundUser.password);
            if (isPasswordCorrect) {
                return { message: 'Login successful', data: foundUser };
            } else {
                return { error: 'Password is incorrect' };
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new user({
                email: email,
                password: hashedPassword,
                role: 'New'
            });
            await newUser.save();
            return { message: 'User created successfully', user: newUser };
        }
    } catch (error) {
        console.error("Error processing user:", error);
        throw new Error(error.message);
    }
};

const registerUser = async (req) => {
    try {
        const { id, name , role } = req;
        const userToUpdate = await user.findOne({ id });
        if (!userToUpdate) {
            throw new Error(`User with id ${id} not found`);
        }
        userToUpdate.role = role;
        userToUpdate.name = name;
        const updatedUser = await userToUpdate.save();
        return updatedUser;
    } catch (error) {
        console.error("Error updating user role:", error);
        throw new Error(error.message);
    }
};

const deleteUser = async (req) => {
    try {
        const { id } = req;
        const userToDelete = await user.findOne({ id });
        if (!userToDelete) {
            throw new Error(`User with id ${id} not found`);
        }
        await user.deleteOne({ id });
        return { message: `User with id ${id} has been deleted successfully.` };
    } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error(error.message);
    }
};

const updateUser = async ({ id , body }) => {
    try {
        const { id } = req;
        const userToUpdate = await user.findOne({ id });
        if (!userToDelete) {
            throw new Error(`User with id ${id} not found`);
        }
        userToUpdate.name = body.name;
        userToUpdate.email = body.email;
        const updateuser = await userToUpdate.save();
        return { message:" okay ", data: updateuser };
    } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error(error.message);
    }
};


module.exports = {
    checkUser,
    registerUser,
    deleteUser,
    updateUser
};