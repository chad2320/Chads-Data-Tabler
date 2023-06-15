/* Grabs and formats data from state to be used in search */
export const setupSearchParameters = (x) => {
    //console.log('Starts with',x)
      let searchObject ={}
      Object.keys(x).forEach(item =>{
        if(
          (x[item].type === 'dropdown' || 
          x[item].type === 'range' || 
          x[item].type === 'boolean') &&
          x[item].visible === true //If not visible in ui, wont be included.
        ){
          let moddedData = x[item].data
          if(x[item].type === 'range'){
            moddedData = {
              $gte:Number(x[item].data[0]),
              $lte:Number(x[item].data[1])
            }
          }
          if(moddedData !== null){
            searchObject[item] = moddedData
          }
          //Add an object with the data and type with a key that is
          
        }
      })
      //console.log('Formats To:\n',searchObject)
      return searchObject
}