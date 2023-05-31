const getLowestAndHighest = (arr) => {
    const filtered = arr.filter(val => val != null);
    const sorted = filtered.filter((el)=>el !== '').sort((a, b) => a - b);
    let lowest = sorted[0];
    const highest = sorted[sorted.length - 1];
    return [lowest, highest];
  };
  
  
  
  module.exports = {
      getLowestAndHighest
  }