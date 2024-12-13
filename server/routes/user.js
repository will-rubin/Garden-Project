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
        const user = await User.login(req.body.username, req.body.password);
        const token = await User.generateToken(user);
        res.send(token);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.post('/register', async (req, res) => {
    try {
        const user = await User.registerUser(req.body.username, req.body.password, req.body.email, req.body.location);
        res.send(...user, password = undefined);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.put('/update', async (req, res) => {
    try {
        const user = await User.updateUser(req.body.username, req.body.password, req.body.email, req.body.location);
        res.send(user);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.delete('/delete', async (req, res) => {
    try {
        const user = await User.deleteUser(req.body.username);
        res.send(user);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

module.exports = router;