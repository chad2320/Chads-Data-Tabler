export function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function getFeetInches(x){
    var feet = Math.floor(x/12)
    var inches = x-(feet*12)
    return `${feet}'${inches}"`
}

export function flattenObject(obj, prefix = '') {
    let flattenedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = prefix === '' ? key : prefix + '.' + key;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
          Object.assign(flattenedObj, flattenObject(obj[key], newKey));
        } else {
          flattenedObj[newKey] = obj[key];
        }
      }
    }
    return flattenedObj;
}

