import React,{createContext,useContext,useState,useEffect} from 'react'
import getFilters from '../../CRUD Operations/getFilters';

const getSearchKeyValuePairs = (obj) => { //Helper used for setting search value
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

function checkVisibility(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  
  for (let key in obj) {
    if (key === 'visible' && obj[key] === true) {
      return true;
    } else if (typeof obj[key] === 'object') {
      if (checkVisibility(obj[key])) {
        return true;
      }
    }
  }
  
  return false;
}

const FiltersContext = createContext();

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};

export const FiltersProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [hasVisibleFilters, setHasVisibleFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

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

  useEffect(() => {
    setSearchValue(getSearchKeyValuePairs(data));
    setHasVisibleFilters(checkVisibility(data));
  }, [data]);

  return (
    <FiltersContext.Provider value={{ data, setData, searchValue, hasVisibleFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};