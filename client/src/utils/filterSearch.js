import React,{useState,useEffect,createContext,useContext} from 'react'
import getTableData from '../CRUD Operations/getTableData';
import useFetchFilters from './filterSearch/useFetchFilters';

const SearchContext = createContext(null)

export const SearchProvider = ({children}) => {
  const {data,setData} = useFetchFilters()
/* ------------------------------------Search Functionality------------------- */
                            /* This data is built with
                            the main filterbox and used within
                            datatable. */

    //Data received from search
    const [tableData, setTableData] = useState([])
    //Secondary information used/comes with/from search
    const [previousSearch,setPreviousSearch] = useState({})
    const [searchCountTotal,setSearchCountTotal] = useState(0)
    const [haveWeSearchedYet,setHaveWeSearchedYet] = useState(false)
    const [loading,setLoading] = useState(false)

  /* Function that runs the filters page search */
      const searchDatabase = async (isSearch) => {
        
        //Sets page to 0 if we are running a new search
          if(isSearch){
            let temp = controls
            temp.page = 0
            setControls(temp)
          }

        //Get formatted data
        let search = grabData(data)

        //Combine controls info with filters info. To be passed into fetch
        const combinedSearch = combineFiltersWithControls(search,controls)
        //console.log('Combined Search Looks Like',combinedSearch)

        //Check if search is the same as previous search
        let sameDataCheck = identicalRequestCheck(combinedSearch,previousSearch)

        //Perform the search if conditions are correct
        if(!sameDataCheck && (isSearch || haveWeSearchedYet)){
          setLoading(true)
          //Encode the combinedSearch object so we can pass objects to api.
          const theSearch = `?searchParams=${encodeURIComponent(JSON.stringify(combinedSearch))}`
          //console.log(`${process.env.REACT_APP_Data_Collection}`+theSearch)
          const data = await getTableData(theSearch)
          //console.log('Data received from db',data)
          setHaveWeSearchedYet(true)
          if(data.tableData[0].data.length > 0){
            setTableData(data.tableData[0].data)
            setSearchCountTotal(data.tableData[0].count[0].Total)
            setPreviousSearch(combinedSearch)
          }else{
            setSearchCountTotal(-1)
          }
          setLoading(false)
        } else {console.log('This request was the same as the last one.')}
      } 

/* --------------------------End of search functionality---------------------- */

/* -----------------------Filter Values "Default Box" State-------------------- */
                
                            /*This data is used in search. If
                            nothing is changed then it uses a
                            blank object.
                            
                            The toggle sections control the display
                            of controls. But this section handles
                            the modification of the grabbed objects
                            actual data we use to grab stuff from db.
                            */

                /*-------- Modify filters object search data.--------*/
  const modifyData = (id,type,change) => {
    let update = data
    update[id][type] = change
    //console.log(typeof update[id][type])
    setData(current => {
        return{
        ...current,...update
        }
    })
  }
/* ---------------------End Filter Values "Default Box" State------------------ */

/* ---------------------Columns Box / Sort Toggle Info------------------------ */
 
                        /* This section controls which
                        columns are displayed. The components
                        allow users to set sort for search. */

    //Columns data for datatable
    const [controls,setControls] = useState({
        limit:10,
        page: 0,
        sort1: false,
        sort2: false,
    })

    useEffect(()=>{
      if(haveWeSearchedYet){
        searchDatabase(false)
      }
    },[controls.sort1,controls.sort2])
  /* -----------------------End Columns Box Toggle Info------------------------- */
  return (
    <SearchContext.Provider value={{
      tableData,setTableData,
      searchCountTotal,setSearchCountTotal,
      haveWeSearchedYet,setHaveWeSearchedYet,
      searchDatabase,
      data,setData,modifyData,
      controls,setControls,
      loading
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchContext)
}

/* Grabs and formats data from state to be used in search */
const grabData = (x) => {
  //console.log('grabdata starts with',x)
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
    //console.log('Grab Data Formats To:\n',searchObject)
    return searchObject
  }
  
  function identicalRequestCheck(obj1, obj2) {
        // Get the keys of the objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Check if the objects have the same number of keys
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if the objects have the same key-value pairs
    for (const key of keys1) {
      const val1 = obj1[key];
      const val2 = obj2[key];
  
      // Check if the values are objects, and if so, recursively check if they are equal
      if (typeof val1 === 'object' && typeof val2 === 'object') {
        if (!identicalRequestCheck(val1, val2)) {
          return false;
        }
      }
      // If the values are not objects, check if they are equal
      else if (val1 !== val2) {
        return false;
      }
    }
  
    // If all tests pass, the objects are equal
    return true;
    }
  
  
  function combineFiltersWithControls(search,controls){
    return {
      filters:{...search},
      controls:{
        limit:controls.limit,
        page:controls.page,
        sort1Path:controls.sort1.path,
        sort1Data:controls.sort1.val,
        sort2Path:controls.sort2.path,
        sort2Data:controls.sort2.val,
      } 
    }
  }