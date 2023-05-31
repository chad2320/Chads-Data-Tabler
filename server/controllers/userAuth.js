const asyncWrapper = require('../middleware/async')
require('dotenv').config();

const userAuth = asyncWrapper(async (req, res, next) =>{
    //console.log('hello',req.body)
    let {username,password} = req.body
    try {
        if(username === process.env.USER_USERNAME && password === process.env.USER_PASSWORD){
            res.send(true).status(201)
        } else{
            res.send(false).status(201)
        }
    } catch (error) {
        //console.log(error)
        res.status(500)
    }
})

module.exports = {userAuth}