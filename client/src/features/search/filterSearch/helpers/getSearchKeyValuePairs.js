export const getSearchKeyValuePairs = (obj) => { //Helper used for setting search value
    const searchKeyValuePairs = [];
  
    const traverse = (obj, path = '') => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          traverse(obj[key], path ? `${path}.${key}` : key);
        } else if (key === 'type' && obj[key] === 'search') {
          searchKeyValuePairs.push({ key: path, value: obj });
        }
      }
    };
  
    traverse(obj);
    return searchKeyValuePairs[0].key;
};