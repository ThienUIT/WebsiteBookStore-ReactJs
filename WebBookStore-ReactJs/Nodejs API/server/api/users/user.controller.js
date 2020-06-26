const { create, getUser, getUserByUsername } = require('./user.services')
const {hashSync, genSaltSync, compareSync} = require('bcrypt')
// const { sign } = require('crypto')
const { sign } = require('jsonwebtoken')

module.exports = {
    createUser: (req, res) =>{
        const body = req.body
        //encrypt password
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        create( body, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connetion error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        } )
    },
    getUser: (req,res) =>{
        getUser((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return  res.json({
                success: 1,
                data: results
            });
        })
    },
    userLogin: (req, res) =>{
        const body = req.body;
        getUserByUsername(body.username,(err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return  res.json({
                    success: 0,
                    data: "invalid Username or Password!!!"
                });
            }
            const result = compareSync(body.password, results.passWord);
            if(result){
                results.passWord = undefined;
                const jsontoken = sign({ result: results }, " qwe1235 ",{
                    expiresIn: "1h"
                });
                return  res.json({
                    success: 1,
                    message: "login Successfully",
                    token: jsontoken
                });
            } 
            else{
                return  res.json({
                    success: 0,
                    data: "Invalid Username or Password"
                });
            }

        })
    }
}