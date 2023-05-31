async function getFilters() {
    const response = await fetch(`${process.env.REACT_APP_Express_Connection}filters`);
    return response.json();
  }

export default getFilters