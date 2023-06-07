import { Box, Typography,Slide } from "@mui/material";
import LineItem from "./lineItem";
import React, { useState, useEffect } from 'react';
import { useSearch } from "../../../../utils/filterSearch";
import { TransitionGroup } from 'react-transition-group';

const ListDisplay = () => {
    const { tableData, controls, data } = useSearch();
    const [copiedElements, setCopiedElements] = useState([]);

    useEffect(() => { //Update the rendered array with a delay for each element
        let index = 0;
        const copyElementsWithInterval = () => {
        if (index < tableData.length) {
            const element = tableData[index];
            setCopiedElements(prevElements => [...prevElements, element]);
            index++;
            setTimeout(copyElementsWithInterval, 300); // Wait for 1 second before copying the next element
        }
        };
        copyElementsWithInterval(); // Start copying elements
        // Clean up removed elements
        setCopiedElements(prevElements =>
        prevElements.filter(element => tableData.some(item => item._id === element._id))
        );
    }, [tableData]); // Run the effect when tableData changes

    if (tableData !== undefined) {
        return (
        <TransitionGroup>
            {copiedElements.map((x, index) =>
                <Slide 
                direction='right'
                key={x._id} timeout={300} mountOnEnter unmountOnExit appear>
                    <div>
                    <LineItem
                        key={x._id}
                        tableData={x}
                        data={data}
                        controls={controls}
                        />
                    </div>
                </Slide>
            )}
        </TransitionGroup>
        )
    } else { //Handling for no results
        return (
        <Box align='center'><Typography>Nothing Matched Your Search</Typography></Box>
        )
    }
}

export default ListDisplay;

