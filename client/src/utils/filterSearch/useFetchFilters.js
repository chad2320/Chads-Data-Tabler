import {useState,useEffect} from 'react'
import getFilters from '../../CRUD Operations/getFilters';

const getSearchKeyValuePairs = (obj) => { //Used for setting search value
    const searchKeyValuePairs = [];
  
    const traverse = (obj, path = '') => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          traverse(obj[key], path ? `${path}.${key}` : key);
        } else if (key === 'type' && obj[key] === 'search') {
          searchKeyValuePairs.push({ key: path, value: obj });
        }
      }
    };
  
    traverse(obj);
    return searchKeyValuePairs;
};

const useFetchFilters = () => { //Grabs information from db and provides it to app
    //Filters from mongodb controls collection
    const [data,setData] = useState(null)
    const [searchValue,setSearchValue] = useState(null)
    //Grab the filters from mongo if none are present
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await getFilters();
            if (response != null) {
                setData(response.controlsObject);
            }
            } catch (error) {
            console.error('Error fetching filters:', error);
            }
        };

        if (data == null) {
            fetchData();
        }
    }, []);

    useEffect(()=>{
        setSearchValue(getSearchKeyValuePairs(data))
    },[data])

    return {data,setData,searchValue}
}

export default useFetchFilters