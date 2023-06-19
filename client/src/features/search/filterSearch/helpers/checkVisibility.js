export function checkVisibility(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }
    
    for (let key in obj) {
      if (key === 'visible' && obj[key] === true) {
        return true;
      } else if (typeof obj[key] === 'object') {
        if (checkVisibility(obj[key])) {
          return true;
        }
      }
    }
    
    return false;
}