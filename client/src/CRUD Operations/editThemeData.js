async function editThemeData(data) {
    const response = await fetch(`${process.env.REACT_APP_Express_Connection}editThemeObject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

export default editThemeData