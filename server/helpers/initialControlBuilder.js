const {theTyper} = require("./initialBuilder/controlTyper")
const {addNullIfNone} = require('./initialBuilder/addNullIfNone')
const {getLowestAndHighest} = require('./initialBuilder/getLowestAndHighest')
const {getTypeCounts} = require('./initialBuilder/getTypeCounts')
const {getDistinctValues} = require('./initialBuilder/getDistinctValues')

const initialBuilder = async (rawDataObject,allTheKeys) =>{
  //Get all the keys. Including nested keys with their path as their key.
  const allKeys = Object.keys(allTheKeys)
  //console.log('allthekeys keys',allKeys)
  let finalArray = []

  //For each key, build our control object.
  allKeys.forEach((key)=>{

    //Get all distinct values for each key
    let thisKeysDistinct = getDistinctValues(rawDataObject,key)

    //Count the types of distinct values.
    let theTypes = getTypeCounts(thisKeysDistinct)

    //Guess the type based off count of data types
    let theGuessedType = theTyper(theTypes)

    //Assembling the final object that will be pushing into an array
    let thisControlsObject = {
      title: key,
      type: theGuessedType,
      data: theGuessedType == 'range' ? getLowestAndHighest(thisKeysDistinct):null,
      visible: false,
      columnable: true,
      isColumn: false,
      sortable: true,
      limits: theGuessedType == 'range' ? getLowestAndHighest(thisKeysDistinct):null,
      step: theGuessedType == 'range' ? 1 : null,
      options: theGuessedType == 'dropdown' ? addNullIfNone(thisKeysDistinct) : null,
      path: key,
      category: null,
    }
    
    finalArray.push(thisControlsObject)
    
  })
  
  console.log(`Total of ${allKeys.length} values.`)
  return finalArray
}

module.exports = {
    initialBuilder
}