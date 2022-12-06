const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    console.log(`Método: ${req.method} na aba: ${req.url} at ${new Date()}`);
    next();
});

app.post('/users', async (req, res) =>{
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.mesage);
    }

});

app.get('/users', async (req, res) =>{
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.send(500).send(error.mesage)
    }
});

app.get('/users/:id', async(req, res) =>{
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.mesage);
    }
});

app.delete('/users/:id', async(req, res) =>{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.mesage);
    }
});

app.patch('/users/:id', async(req, res) =>{
    try {
        const id = req.params.id;

        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.mesage);
    }
})




const port = 8080;
app.listen(port, ()=>console.log(`Rodando na porta ${port}`));