const express = require('express');
const router = express.Router();
const { getTeachers } = require('../service/teacher');
const { getStudents } = require('../service/student');
const { deleteUser , updateUser } = require("../service/login");

router.get('/getTeachers', async (req, res) => {
    try {
        const getAllTeachers = await getTeachers();
        res.status(201).json(getAllTeachers);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/getStudents',async (req,res) => {
    try{
        const getAllStudents = await getStudents();
        res.status(201).json(getAllStudents);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Extract the id from the path variable
        const deleteduser = await deleteUser(id);  // Pass the id to the deleteUser function
        res.status(200).json(deleteduser);
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
});

router.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { user } = req.body;  // Extract the id from the path variable
        const updateuser = await updateUser({ id , user });  // Pass the id to the deleteUser function
        res.status(200).json(updateuser);
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
});

router.post( "/students/assign" , async(req,res) => {
    try {

        const assignstudenttoteacher = await assignStudentToTeacher();
        res.status(200).json(assignstudenttoteacher);


    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
})

router.post( "/classrooms" , async(req,res) => {
    try {

        const assignstudenttoteacher = await createClassroom(req.body);
        res.status(200).json(assignstudenttoteacher);

    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
})

router.post( "/teacher/assign" , async(req,res) => {
    try {
        const { teacherId , classroomId } = req.body;
        const assignclassroom = await assignClassroom({ teacherId , classroomId });
        res.status(200).json(assignclassroom);

    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
})

router.get('/getClassrooms',async (req,res) => {
    try{
        const getclassrooms = await getClassrooms();
        res.status(201).json(getclassrooms);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});





module.exports = router;