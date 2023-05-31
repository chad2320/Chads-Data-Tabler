const asyncWrapper = require('../middleware/async')
const controlModel = require('../models/controls')

const addControlObject = asyncWrapper(async (req, res, next) =>{
    try {
        //Modify and format incoming data
        const newItem = {controlsObject:convertArrayToObject(req.body.data)}
        

        //Apply it to our blank model tied to the our collection
        const newObj = new controlModel(newItem)
        //console.log(req.body.status)

        //Check if we have anything in control
        let check = null
        let temp = await controlModel.findOne()
        if(temp){check = temp._doc}
        //Attempt to create or edit the control object.
        if(!check){ //If new, post to db.
            await newObj.save()
            res.status(201).json({
                message:'Created brand new control object.'
            })
        } else if(check.controlsObject){ //If not new, add edits to db.
            await controlModel.findOneAndUpdate(
                {},//Filter for finding original
                {$set:{controlsObject:convertArrayToObject(req.body.data)}
            })
            res.status(201).json(
                {message:'Successfully edited control object.'
            })
        } else if (check && !check.controlsObject ){
            await controlModel.findOneAndUpdate(
                {},//Filter for finding original
                {$set:{controlsObject:convertArrayToObject(req.body.data)}
            })
            res.status(201).json(
                {message:'Successfully added control object to existing controls.'}
            )
        }
    } catch (error) {
        //console.log(error)
        res.status(500).json({ message: error.message });
    }

})

function convertArrayToObject(x){
    let result = {}

    x.forEach((obj,index) => {
      result[obj.path] = obj
    });
    
    return result
  }

module.exports={addControlObject}