export function identicalRequestCheck(obj1, obj2) {
    // Get the keys of the objects
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

// Check if the objects have the same number of keys
if (keys1.length !== keys2.length) {
  return false;
}

// Check if the objects have the same key-value pairs
for (const key of keys1) {
  const val1 = obj1[key];
  const val2 = obj2[key];

  // Check if the values are objects, and if so, recursively check if they are equal
  if (typeof val1 === 'object' && typeof val2 === 'object') {
    if (!identicalRequestCheck(val1, val2)) {
      return false;
    }
  }
  // If the values are not objects, check if they are equal
  else if (val1 !== val2) {
    return false;
  }
}

// If all tests pass, the objects are equal
return true;
}