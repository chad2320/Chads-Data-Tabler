const controls = require('../models/controls')
const asyncWrapper = require('../middleware/async')



const getFilters = asyncWrapper(async (req, res, next) =>{
try {
  const filters = await controls.findOne({}) //grab from db
  res.json(filters).status(200)
  //console.log('Succesfully grabbed filters')
  } catch (error) {
    //console.log(error)
  }
})

module.exports = {getFilters}
