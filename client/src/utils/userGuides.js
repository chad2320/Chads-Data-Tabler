import React, { useState, useEffect, createContext, useContext } from "react";

const GuideContext = createContext();

export const GuideProvider = ({ children }) => {
    const [guide, setGuide] = useState(getGuideFromLocalStorage());

    useEffect(() => {
        localStorage.setItem("guide", JSON.stringify(guide));
    }, [guide]);

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
