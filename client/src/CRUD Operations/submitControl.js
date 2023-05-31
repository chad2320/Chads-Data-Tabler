const submitControls = async (x) => {
    let final = x

    try {
      const response = await fetch(`${process.env.REACT_APP_Express_Connection}addControlObject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(final)
      });
      const data = await response.json();
      console.log(data.message); // Object created successfully
      return true
    } catch (err) {
      console.log(err.message);
      return false
    }
  };


export default submitControls
  