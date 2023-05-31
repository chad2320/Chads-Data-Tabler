import React, { useEffect,useState } from "react";
import { Box,TextField,AccordionSummary,AccordionDetails,
        Accordion} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmallTogglesBox from "./smallTogglesBox";
import EditorCombiner from "./editors/editorCombiner";
import TypeSelector from "./typeSelector";



const SingleFilter = ({editControlObject,item}) =>{
    let {title,columnable,sortable,type,options,data,visible,limits,
        isColumn} = item


    //Local State
    const [step2,setStep] = useState(1)
    const [type2,setType] = useState(type)
    const [visible2,setVisible] = useState(visible)
    const [isColumn2,setIsColumn] = useState(isColumn)
    const [title2,setTitle] = useState(title)
    const [data2,setData] = useState(data)
    const [columnable2,setColumnable] = useState(columnable)
    const [sortable2,setSortable] = useState(sortable)
    const [disabled,setDisabled] = useState(false) //disables inputs when true
    
    //State Packages for components
    let typeSelectorPackage = {type2,setType}
    let smallTogglesBoxPackage = {setColumnable,setSortable ,setVisible,setIsColumn,
        columnable2,sortable2,visible2,isColumn2,disabled,title,editControlObject}
    let rangePackage = {step2,setStep,disabled,setData,data2,limits,title}
    let dropdownPackage = {title,setData,data2,disabled,options}
    let booleanPackage = {title,setData,data2,disabled}
    let editorCombinerPackage = {booleanPackage,dropdownPackage,rangePackage,type2,options}
    
    //When local or childrens change detected, add that change to higher state.
    
    useEffect(()=>{
        editControlObject(title,'title',title2)
    },[title2,title,editControlObject])
    useEffect(()=>{
        editControlObject(title,'type',type2
        )},[type2,title,editControlObject])
    useEffect(()=>{
        editControlObject(title,'data',data2)
    },[data2,title,editControlObject])
    useEffect(()=>{
        editControlObject(title,'step',step2)
        
    },[step2,title,editControlObject])
    
    //Set Disabled When Type is Omit, Value, Search or image
    useEffect(()=>{
        if(type2 === 'omit' || type2 === 'value' || type2 === 'image' || type2 === 'search'){
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    },[type2])
    

    return(
        <Box
        sx={{
            width:'100%',
            pl:2,
            pr:2,
            m:0.5
        }}
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
        >
            {/* Type Dropdown Selector */}
            <TypeSelector
                typeSelectorPackage={typeSelectorPackage}
            />

            {/* Accordions width is set by the following box */}
            <Box
                sx={{
                    width:'80%',
                }}
            ><Accordion>
                <AccordionSummary
                    sx={{
                        backgroundColor: type === 'check'? 'warning.dark' : 'neutral.main',
                        borderColor: 'primary'
                    }}
                    expandIcon={<ExpandMoreIcon />}
                >

                    {/* Title Input/Edit Field */}
                    <TextField
                        sx={{minWidth:200}}
                        disabled={disabled}
                        id="outlined-controlled"
                        label="Title"
                        variant='standard'
                        size='small'
                        value={title2}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />

                </AccordionSummary>

                <AccordionDetails
                    sx={{
                        backgroundColor: type === 'check'? 'warning.main' : 'neutral.dark',
                    }}
                >
                    <Box
                        sx={{
                            ml:3,
                            mr:4
                        }}
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                    >
                        {/* Checkmark toggles box */}
                        <SmallTogglesBox smallTogglesBoxPackage={smallTogglesBoxPackage}/>

                        {/* Editor Combiner.Renders A Dropdown, Range or Boolean.
                            Depending on type */}
                        <EditorCombiner
                            editorCombinerPackage={editorCombinerPackage}
                        />
                        
                    </Box>
                </AccordionDetails>

            </Accordion></Box>

        </Box>
    )
}

export default SingleFilter