async function getTableData(theSearch) {
  //console.log(`${process.env.REACT_APP_Express_Connection}tableData${theSearch}`)
    const response = await fetch(`${process.env.REACT_APP_Express_Connection}tableData${theSearch}`);
    return response.json();
  }

export default getTableData