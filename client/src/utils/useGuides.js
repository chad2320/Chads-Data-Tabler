import React, { useState, useEffect, createContext, useContext } from "react";
import { useSelector } from "react-redux";


const GuideContext = createContext();

export const GuideProvider = ({ children }) => {
    let {visibleFilters} = useSelector((state) => state.filters)
    const [guide, _setGuide] = useState(
        {
        enabled: getGuideFromLocalStorage(),
        current: 'addFilter'
        }
    );
    /* 
    Possible guide.current are:
    addFilter,useFilter
    */
    
    function setGuide(target,value){
        _setGuide(previous => ({...previous,[target]: value}))
    }

    useEffect(() => {
        if(guide.enabled !== getGuideFromLocalStorage()){//Handle Storage
            localStorage.setItem("guide", JSON.stringify(guide.enabled))
        };
        if(visibleFilters && guide.current !== 'useFilter'){
            setGuide('current','useFilter')
        } else if(!visibleFilters && guide.current !== 'addFilter'){
            setGuide('current','addFilter')
        }
    }, [guide,visibleFilters]);

    function getGuideFromLocalStorage() {
        let tempGuide = localStorage.getItem("guide");
        let localGuide = JSON.parse(tempGuide);
        if (localGuide === null) {
        return true;
        } else {
        return localGuide;
        }
    }

    return (
        <GuideContext.Provider value={{ guide, setGuide }}>
        {children}
        </GuideContext.Provider>
    );
};

export const useGuideInformation = () => {
  return useContext(GuideContext);
};
