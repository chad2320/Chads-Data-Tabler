import React,{useEffect} from 'react'
import { Checkbox,Box, Typography,Tooltip } from '@mui/material'
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SortIcon from '@mui/icons-material/Sort';

const SmallTogglesBox = (props) => {
    let {setColumnable,setSortable ,setVisible,setIsColumn,
        columnable2,sortable2,visible2,isColumn2,disabled,title,
        editControlObject} = props.smallTogglesBoxPackage

    function handleColumnable(){setColumnable(!columnable2)}
    function handleSortable(){setSortable(!sortable2)}
    function handleVisible(){setVisible(!visible2)}
    function handleColumn(){setIsColumn(!isColumn2)}

    useEffect(()=>{editControlObject(title,'columnable',columnable2)},[columnable2,title,editControlObject])
    useEffect(()=>{editControlObject(title,'sortable',sortable2)},[sortable2,title,editControlObject])
    useEffect(()=>{editControlObject(title,'visible',visible2)},[visible2,title,editControlObject])
    useEffect(()=>{editControlObject(title,'isColumn',isColumn2)},[isColumn2,title,editControlObject])
    
    return (
        <Box
            sx={{
                width:180,
                minwidth:130
            }}
            display='flex'
            justifyContent='space-evenly'
            flexDirection='row'
            alignItems='center'
        >
                {/* Columns Checkmark Field */}
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Tooltip 
                    title='Can this be a column on the datatable?'
                    placement='top'
                >
                    <ViewWeekIcon 
                        sx={{
                            color:disabled ? 'neutral' : 'primary',
                            width:24,
                            height:30
                        }}
                    />
                </Tooltip>

                <Checkbox 
                    checked={columnable2} 
                    onChange={handleColumnable} 
                    disabled={disabled}
                />
            </Box>

                {/* Sortable Checkmark Field */}
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <Tooltip 
                    title='Can we sort a data table by this?'
                    placement='top'
                >
                    <SortIcon 
                        sx={{
                            color:disabled ? 'neutral' : 'primary',
                            width:24,
                            height:30
                        }}
                    />
                </Tooltip>
                <Checkbox 
                    checked={sortable2} 
                    onChange={handleSortable} 
                    disabled={disabled}
                />
            </Box>

                {/* Default Visible Checkmark Field */}
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Tooltip 
                    title='Should this filter be visible by default?'
                    placement='top'
                >
                    <VisibilityIcon 
                        sx={{
                            color:disabled ? 'neutral' : 'primary', 
                            width:24,
                            height:30
                        }}
                    />
                </Tooltip>
                <Checkbox 
                    checked={visible2} 
                    onChange={handleVisible} 
                    disabled={disabled}
                />
            </Box>
                {/* Default Column Checkmark Field */}
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Tooltip
                    title='Should this be a default column?'
                    placement='top'
                >
                    <Typography 
                        color={disabled ? 'neutral' : 'primary'}
                        align='center'
                        sx={{
                            fontWeight:600,
                            fontSize:20,
                            width:24,
                            height:30
                        }}
                    >
                        D
                    </Typography>
                </Tooltip>

                <Checkbox 
                    checked={isColumn2} 
                    onChange={handleColumn} 
                    disabled={disabled}
                />
            </Box>
        </Box>
    )
}

export default SmallTogglesBox