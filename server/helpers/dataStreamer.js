const { Transform } = require('stream');
const { flattenObject } = require('./dataStreamer/flattenObject');
const { objectMerger } = require('./dataStreamer/objectMerger');
const { initialBuilder } = require('./initialControlBuilder');
const myModel = require('../models/searchModel')
require('dotenv').config();


const dataStreamer = async () => {
  console.log('Beginning Data Stream');
  const transformStream = new Transform({
    objectMode: true, // Required for MongoDB object processing
    transform(doc, encoding, callback) {
      // Perform data transformation on the document
      const transformedDoc = flattenObject(doc);

      // Pass the transformed document to the next stream in the pipeline
      callback(null, transformedDoc);
    },
  });
  
  const cursor = myModel.find().cursor(); // Create a cursor

  let allKeys = {};
  let allData = [];

  cursor.pipe(transformStream).on('data', (doc) => {
    // Process each transformed document as it is streamed in
    objectMerger(doc, allKeys);
    allData.push(doc);
    //console.log(doc);
  });

  return new Promise((resolve, reject) => {
    cursor.on('end', () => {
      // All documents have been streamed in
      console.log('All documents streamed in');
      //console.log('The following object shows how many keys there are, and how many instances of that key are in the db.\n',allKeys)
      let theData = initialBuilder(allData, allKeys);
      resolve(theData);
    });

    cursor.on('error', (err) => {
      // Handle any errors that occur
      console.error(err);
      reject(err);
    });
  });
};

module.exports = {
  dataStreamer,
};