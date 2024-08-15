const user = require('../model/user');

const getStudents = async () => {
    try {
        const students = await user.find({ role: 'Student' });
        return students;
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw new Error(error.message);
    }
};



module.exports = {
    getStudents
};