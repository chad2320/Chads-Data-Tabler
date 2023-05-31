const controls = require('../models/controls')
const asyncWrapper = require('../middleware/async')



const editThemeObject = asyncWrapper(async (req, res, next) =>{
  /* Attempt to update document in database. */
  try {
    //console.log('Req Body\n', req.body);
    const result = await controls.updateOne({}, { theme: req.body });

    if (result.nModified === 1) {
      //console.log('Saved new theme colors.');
      res.status(200).json({ message: 'Theme updated successfully' });
    } else {
      //console.log('No documents matched the filter.');
      res.status(404).json({ message: 'Theme not found' });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).send('Internal Server Error');
  }
})

module.exports = {editThemeObject}