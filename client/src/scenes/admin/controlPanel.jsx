import React,{useState} from 'react'
import { Box,Button,Divider,Typography,Fade,LinearProgress, IconButton,Collapse } from '@mui/material'
import InitializeControls from '../../components/admin/filterSetupPage/initializeControls'
import SubmitControls from '../../components/admin/filterSetupPage/submitControlButton'
import dbEditor from "../../CRUD Operations/dbEditCall";
import deleteControls from "../../CRUD Operations/deleteControls";
import TuneIcon from '@mui/icons-material/Tune';

const ControlPanel = (props) => {

    const [loading,setLoading] = useState(false)
    const [advanced,setAdvanced] = useState(false)

    async function handleEdit(){
        let response = await dbEditor()
        console.log(response)
    }
    async function handleDelete(){
        let response = await deleteControls()
        console.log(response)
        props.setControlObject(null)
    }
    async function handleAdvanced(){
        setAdvanced(!advanced)
    }
    return(
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            sx={{
                width:'100%',
            }}
        >

        <Box 
            display='flex' 
            flexDirection='row'
            sx={{
                border:1,
                borderRadius:1,
                width:'50%',
                minHeight:50,
                minWidth:400,
                maxWidth:800,
                m:0.5,
                p:1
            }}
        >
            <Box
                sx={{
                    width:'100%'
                }}
                display='flex'
                alignItems='center'
                flexDirection='row'
            >
                <Typography
                    sx={{
                        minWidth:130,
                        mr:1
                    }}
                    noWrap
                >
                    Initialize Controls
                </Typography>
                
                <InitializeControls 
                    controlObject={props.controlObject} 
                    setControlObject={props.setControlObject}
                    action={props.grabRawData}
                    setLoading={setLoading}
                />

                <Divider
                    sx={{
                        ml:1,
                        mr:1,
                    }}
                    flexItem
                    orientation='vertical'
                />
                <Box
                    sx={{
                        width:'100%'
                    }}
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                >
                {loading ? <LinearProgress sx={{width:'100%',ml:0.25,mr:0.25}}/> : null}
                {props.controlObject !== null ?
                    props.controlObject.status === 'Create' ?
                    <Fade in timeout={2000}>
                        <Typography>
                            Creating Controls
                        </Typography>
                    </Fade>
                    :
                    <Fade in timeout={2000}>
                        <Typography>
                            Editing Controls
                        </Typography>
                    </Fade>
                    :
                    null
                }
                {props.controlObject !== null ?
                    <SubmitControls
                    controlObject={props.controlObject}
                    setControlObject={props.setControlObject}
                    />
                    :
                    null
                }
                
                </Box>
            </Box>
        </Box>
        <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-start'
            sx={{
                width:'50%',
                minWidth:400,
                maxWidth:800,
            }}
        >
            <IconButton
                onClick={handleAdvanced}
            >
                <TuneIcon/>
            </IconButton>
            <Collapse 
                orientation='horizontal' 
                in={advanced} 
            >
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                        border:1,
                        borderRadius:1,
                        width:'100%',
                        minHeight:50,
                        p:1
                    }}
                >
                    <Typography noWrap>
                        Advanced Settings
                    </Typography>
                    <Divider
                        sx={{
                            ml:1,
                            mr:3,
                        }}
                        flexItem
                        orientation='vertical'
                    />
                    <Button
                        sx={{ml:0.5,width:120}}
                        variant='outlined'
                        size='small'
                        color='warning'
                        onClick={handleEdit}
                        >
                        Run DB Edit Code
                    </Button>
                    <Button
                        sx={{ml:0.5,width:120}}
                        variant='outlined'
                        color='warning'
                        size='small'
                        onClick={handleDelete}
                        >
                        Delete Controls
                    </Button>
                    
                </Box>
            </Collapse>
        </Box>
        </Box>

    )
}

export default ControlPanel