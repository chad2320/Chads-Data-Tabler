const { dataStreamer } = require('../helpers/dataStreamer');
const controls = require('../models/controls')
require('dotenv').config();

const initializeControls = async (req, res, next) =>{
    try{
      let finalObject = {data:{},status:'init'}

      //Query for an existing control object
      const controlObject = await controls.findOne({})

      //If there is no control object. Create one from rawdata.
      if(!controlObject || !controlObject.controlsObject){
        //console.log('No controls found. Building new control object.')
        let theData = await dataStreamer();
        if(!theData){
          //console.log('No object found. Add data to rawData collection')
          finalObject.status = 'No Data'
          res.send(finalObject).status(200)
          return
        }else if(theData){
          //console.log('Sending to client for edits.')
          finalObject.data = theData
          finalObject.status = 'Create'//Since there was no control object, we create one.
          res.send(finalObject).status(200)
        }
      }
      //If we find one we send it to client for edits.
      if(controlObject){
        if(controlObject.controlsObject){
          //console.log('Found an existing control object. Sending to client.')
          finalObject._id = controlObject._id
          finalObject.data = Object.values(controlObject.controlsObject)
          finalObject.status = 'Edit'//Since we found one. User will edit it.
          //console.log(finalObject)
          res.send(finalObject).status(200)
        }
      }

       
    } catch(error){
      //console.log(error)
    } finally {
      //Once done, close the db connection.
      //client.close()
    }

}

module.exports = {
  initializeControls
}