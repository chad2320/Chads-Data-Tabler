import {useState,useEffect} from 'react'
import getFilters from '../../CRUD Operations/getFilters';

    /* ------------Grab Filters From DB------------ */

const useFetchFilters = () => {
    //Filters from mongodb controls collection
    const [data,setData] = useState(null)

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

    return {data,setData}
}

export default useFetchFilters