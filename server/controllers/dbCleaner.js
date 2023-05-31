const asyncWrapper = require('../middleware/async')
const myModel = require('../models/searchModel')
const {stringToArray} = require('../dbCleaners/stringToArray')

const dbEdit = asyncWrapper(async (req, res, next) =>{
    //console.log('Requesting Data.')
    let data = await myModel.find({})
    //console.log('Received Data. Editing Now.')

    //Add Editor Calls Here
    await stringToArray(data) //Cut strings seperated by || into an array of strings

    res.status(201).json(
        {message:`Successfully edited ${data.length} objects.`
    })
})

module.exports = {
    dbEdit
}