/* Grabs and formats data from state to be used in search */
export const setupSearchParameters = (x,y) => {
      let searchObject ={}

      x.map((filter)=>{
        if(filter.type === 'range'){
          searchObject[filter.path] = {
            $gte:Number(y[filter.path].data[0]),
            $lte:Number(y[filter.path].data[1])
          }
        } else if(y[filter.path].data !== null) { //If data is null dont include
          searchObject[filter.path] = y[filter.path].data
        }
      })
      
      return searchObject
}