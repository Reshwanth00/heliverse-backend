const mongoose = require('mongoose');

// Define the Classroom Schema
const classroomSchema = new mongoose.Schema({
    classId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    teacherId: {
        type: String,
        required: true,
    },
    studentIds: {
        type: [String],
        default: [],
    },
    timetable: {
        type: Map,
        of: String, // You can define the structure more specifically if needed
        default: {},
    },
}, { timestamps: true });

// Create the Classroom Model
const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
