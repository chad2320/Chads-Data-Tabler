const myModel = require('../models/searchModel');
require('dotenv').config();

const stringSearch = async (req, res) => {
  const { inputValue, key } = req.query;
  try {
    const results = await myModel.aggregate([
      {
        $search: {
          index: process.env.INDEX_NAME,
          autocomplete: { query: inputValue, path: key }
        }
      },
      {
        $project: {
          _id: 0,
          [key]: 1
        }
      },
      {
        $group: {
          _id: `$${key}`,
          result: { $first: '$$ROOT' }
        }
      },
      {
        $sort: {
          score: { $meta: 'textScore' },
        }
      },
      {
        $limit: 5
      }
    ]);
    res.json(results.map(result => result.result));
  } catch (error) {
    console.error('Error searching by key:', error);
    res.status(500).json({ error: 'An error occurred while searching.' });
  }
};

module.exports = {
  stringSearch,
};


