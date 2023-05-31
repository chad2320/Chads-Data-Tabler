async function dbEditor() {
    const response = await fetch(`${process.env.REACT_APP_Express_Connection}dbEdit`);
    return response.json();
  }

export default dbEditor