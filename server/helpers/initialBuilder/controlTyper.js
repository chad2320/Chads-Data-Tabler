
//Determine what kind of data we are dealing with based on type and count.
let theTyper = (valueTypes)=>{
    let valueTypePrimary = getHighestValueKey(valueTypes)
    
    //Initial determinations based on valueTypes. Note null shows as object in some cases
    if(valueTypePrimary == 'boolean'){
        return 'boolean'
    } else if(valueTypePrimary == 'string' && valueTypes.string < 30){
        return 'dropdown'
    } else if(valueTypePrimary == 'string' && valueTypes.string <= 30){
        return 'check'
    } else if(valueTypePrimary == 'number'){
        return 'range'
    } else { return 'check'}

}

const getHighestValueKey = (obj) => {
    let highestKey = null;
    let highestValue = -Infinity;
    
    Object.entries(obj).forEach(([key, value]) => {
      if (value > highestValue) {
        highestKey = key;
        highestValue = value;
      }
    });
    
    return highestKey;
  };

module.exports = {
    theTyper
}