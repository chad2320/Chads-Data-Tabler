async function deleteControls() {
    const response = await fetch(`${process.env.REACT_APP_Express_Connection}deleteControls`);
    return response.json();
  }

export default deleteControls