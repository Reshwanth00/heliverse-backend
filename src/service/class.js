const user = require('../model/user');

router.get('/:id/students',async (req,res) => {
    try{
        const getstudentsinclass = await getStudentsInClass();
        res.status(201).json(getstudentsinclass);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id',async (req,res) => {
    try{
        const getclassroomdetails = await getClassroomDetails();
        res.status(201).json(getclassroomdetails);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});



module.exports = {
    getStudents
};