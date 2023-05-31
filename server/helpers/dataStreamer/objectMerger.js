//Tiny helper function used in dataStreamer

const objectMerger = (obj1,obj2) => {
        for (const key in obj1) {
          if (!obj2.hasOwnProperty(key)) {
            obj2[key] = 1;
          } else {
            obj2[key] = obj2[key] + 1
          }
        }
        //Returns object with all keys in db and count of objects with that key
        return obj2;
}

module.exports = {
    objectMerger
}