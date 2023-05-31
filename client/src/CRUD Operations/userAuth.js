const userAuth = async (x,y) => {
    let final = {username:x,password:y}

    try {
      const response = await fetch(`${process.env.REACT_APP_Express_Connection}userAuth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(final)
      });
      const data = await response.json();
      return data
    } catch (err) {
      console.log(err.message);
      return false
    }
  };


export default userAuth