const user = require("../model/user");

const getTeachers = async () => {
    try {
        const teachers = await user.find({ role: 'Teacher' });
        return teachers;
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw new Error(error.message);
    }
};

module.exports = {
    getTeachers  
};