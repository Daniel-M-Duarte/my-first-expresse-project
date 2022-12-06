const mongoose = require('mongoose');

const connectToDatabase = async () =>{
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hxmkipn.mongodb.net/?retryWrites=true&w=majority` , (error) =>{
        if(error){
            return console.log('Erro ao conectar com o banco de dados: ', error);
        }

        return console.log('Conexão com o banco realizada com sucesso!');    
    })
}

module.exports = connectToDatabase;