//Tiny helper function used in dataStreamer

// Flattens an object with nested properties into a flat object with dot notation keys
const flattenObject = (data) => {
    const start = data._doc
    const result = {};
    
    const recurse = (current, path) => {
      // Iterate over each key in the current object
      Object.keys(current).forEach(key => {
        const value = current[key];
        const newPath = path ? `${path}.${key}` : key;
        
        // If the value is an object, recurse with the new path
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          recurse(value, newPath);
        } else {
          // If the value is not an object, add it to the result with the new path as the key
          result[newPath] = value;
        }
      });
    };
    
    // Start the recursion with an empty path
    recurse(start, '');
    
    // Return the flattened object
    return result;
};

module.exports = {
    flattenObject
}