const grabRawControlsData = async () =>{
    try{
        let response = await fetch(`${process.env.REACT_APP_Express_Connection}initializeControls`)
        let data = await response.json()
        return data
    } catch(err){
        console.log(err)
    }
}

//Used in initializeControls.jsx
export default grabRawControlsData
