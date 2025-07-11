const express = require("express");
const User = require("../models/user");
const router = express.Router();

router
.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.get('/getUserById', async (req, res) => {
    try {
        const user = await User.getUserById(req.query.id);
        res.send(user);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.get('/userExists', async (req, res) => {
    try {
        const user = await User.userExists(req.query.username);
        res.send(user);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.post('/login', async (req, res) => {
    try {
        const user = await User.loginUser(req.body.username, req.body.password);
        user.password = undefined;
        console.log("user logged in: ", user);
        const token = await User.generateToken(user);
        res.send({ user, token });
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.post('/registerUser', async (req, res) => {
    try {
        await User.registerUser(req.body.username, req.body.password, req.body.email, req.body.location);  
    } catch (error) {
        res.status(401).send({ message: error.message });
    }   
})

.put('/updateUser', async (req, res) => {
    try {
        const user = await User.updateUser(req.body.username, req.body.password, req.body.email, req.body.location);
        res.send(user);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.delete('/deleteUser', async (req, res) => {
    try {
        const user = await User.deleteUser(req.body.username);
        res.send(user);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

module.exports = router;