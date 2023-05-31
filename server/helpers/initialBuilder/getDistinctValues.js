// Returns an array of distinct values for a given key in an array of objects
const getDistinctValues = (data, key) => {
    // Use a set to store distinct values, which eliminates duplicates automatically
    const distinctValues = new Set();
    
    // Iterate over each object in the data array
    data.forEach(item => {
      // Get the value for the given key
      const value = item[key];
      
      // If the value is an array, iterate over each element and add it to the distinct values set
      if (Array.isArray(value)) {
        value.forEach(element => distinctValues.add(element));
      } else {
        // If the value is not an array, add it directly to the set
        distinctValues.add(value);
      }
    });
    
    // Convert the set to an array and return it
    return Array.from(distinctValues);
  };
  
  module.exports = {
      getDistinctValues
  }