const myModel = require('../models/searchModel')

async function stringToArray(data){
    for (let i = 0; i < data.length;i++){
        try {
          let current = await myModel.findOne({ _id: data[i]._doc._id.toString() });
          let updatedObject = splitStringValues(data[i]._doc);
          //console.log(updatedObject);
          current.set(updatedObject);
          await current.save();
            
        } catch (error) {
            console.log('error updating',error)
        }
        console.log(`Completion Count ${i}`)
    }
}

function splitStringValues(obj) {
    const newObj = {};
  
    for (let key in obj) {
      if (typeof obj[key] === 'string' && obj[key].includes('||')) {
        newObj[key] = obj[key].split('||');
      } else {
        newObj[key] = obj[key];
      }
    }
  
    return newObj;
}

module.exports = {
    stringToArray
}