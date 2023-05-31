const express = require('express')
const router = express.Router()
const {getData} = require ('../controllers/getTableData')
const {getFilters} = require('../controllers/getFilters')
const {initializeControls} = require('../controllers/initializeControls')
const {addControlObject} = require('../controllers/addControlObject')
const {editThemeObject} = require('../controllers/editThemeObject')
const {dbEdit} = require('../controllers/dbCleaner')
const { deleteControls } = require('../controllers/deleteControls')
const {userAuth} = require('../controllers/userAuth')

//Website Stuff
router.route('/tableData').get(getData)
router.route('/filters').get(getFilters)

//Admin Stuff
router.route('/initializeControls').get(initializeControls)
router.route('/addControlObject').post(addControlObject)
router.route('/editThemeObject').post(editThemeObject)
router.route('/userAuth').post(userAuth)
router.route('/dbEdit').get(dbEdit)
router.route('/deleteControls').get(deleteControls)

module.exports = router