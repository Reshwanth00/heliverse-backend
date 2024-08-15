const express = require('express');
const router = express.Router();
const { checkUser , registerUser } = require("../service/login");

router.post('/check', async (req, res) => {
    try {
        const user = await checkUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/register',async (req,res) => {
    try{
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;