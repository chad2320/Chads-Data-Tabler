const controls = require('../models/controls')
const asyncWrapper = require('../middleware/async')



const editThemeObject = asyncWrapper(async (req, res, next) =>{
  /* Attempt to update document in database. */
  try {
    //console.log('Req Body\n', req.body);
    const result = await controls.updateOne({}, { theme: req.body });
    
    if (result.modifiedCount === 1) {
      //console.log('Saved new theme colors.');
      res.status(200).json({ message: 'Theme updated successfully' });
    } else if(matchedCount === 0) {
      //console.log('No documents matched the filter.');
      let newTheme = controls({theme:req.body})
      await newTheme.save();
      res.status(200).json({ message: 'Theme created successfully' });
    } else {
      res.status(200).json({message: 'No changes detected.'})
    }
  } catch (error) {
    //console.log(error);
    res.status(500).send('Internal Server Error');
  }
})

module.exports = {editThemeObject}