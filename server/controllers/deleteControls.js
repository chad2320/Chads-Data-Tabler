const asyncWrapper = require('../middleware/async')
const controls = require('../models/controls')

const deleteControls = asyncWrapper(async (req, res, next) =>{
    try{
        const document = await controls.findOne()
        //console.log(document)
        if(!document){console.log('No document found');return}

        document.controlsObject = undefined
        await document.save()
        res.status(201).json({message:'Succesfully deleted controls.'})
    } catch (error){
        //console.error()
    }
})

module.exports = {
    deleteControls
}