const getTypeCounts = (arr) => {
    let types = {};
    arr.forEach((el) => {
      let type = typeof el;
      Array.isArray(el) ? type = 'array' : type
      el === null ? type = 'null' : type
      types[type] = types[type] ? types[type] + 1 : 1;
    });
    return types;
  };
  
  module.exports = {
      getTypeCounts
  }