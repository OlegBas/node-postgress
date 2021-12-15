const db = require('../db')
const modelUser = require('../models/user.model')
class UserController{
    async createUser(req,res){
        const {username} = req.body;

        // try {
        //     await db.authenticate();
        //     console.log('Connection has been established successfully.');
        //   } catch (error) {
        //     console.error('Unable to connect to the database:', error);
        //   }

        // const newUser = await db.query(`INSERT INTO users (username) VALUES ($1) returning *`, [username])
        modelUser.create({
            username:username
        })
        res.json('ok')
    }

    async getUsers(req,res){

    }

    async getOneUser(req,res){
        
    }

    async updateUser(req,res){
        
    }

    async deleteUser(req,res){
        
    }
}

module.exports = new UserController();