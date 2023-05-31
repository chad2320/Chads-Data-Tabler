import {useState,useEffect} from 'react'
import {useSearch} from '../filterSearch'

/* This section controls the display of filters in the default box. */

const useSelectFilters = () => {
    const {data,setData} = useSearch()
    //State used in the autocomplete for filters box.
    const [filtersAutocomplete, setFiltersAutocomplete] = useState([]);
    const [filtersList,setfiltersList] = useState(null)

    //Build Option List From Data
    useEffect(()=>{
        if(data){
            let temp = Object.keys(data)
            .filter((item)=> 
                data[item].type === 'range' ||
                data[item].type === 'boolean' || 
                data[item].type === 'dropdown'
            )
            .map((item)=>data[item]);
            setfiltersList(temp)
        }
    },[])

    function addFilter(newVal){
        //Set Value For AutoComplete
        setFiltersAutocomplete(newVal)
    }

    useEffect(()=>{
        handleSetFiltersDisplayed(filtersAutocomplete)
    },[filtersAutocomplete])

    //Used To Set Selected Filters As Visible. 
    //Since data and filterslist are seperate states.
    function handleSetFiltersDisplayed(x){
        let update = data
        Object.keys(update).forEach((item)=>{
            update[item].visible = false
        });
        x.forEach((item)=>{
            update[item.path].visible = true
        });
        setData(current =>{
        return{
        ...current,...update
        }
        });
    }

    return {
        filtersAutocomplete, setFiltersAutocomplete,
        handleSetFiltersDisplayed,
        filtersList,addFilter
    }
}

export default useSelectFilters