function addNullIfNone(arr) {
    if (!arr.includes(null)) {
      arr.push(null);
    }
    return arr;
  }
  
  module.exports = {
      addNullIfNone
  }