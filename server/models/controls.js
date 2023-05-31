const mongoose = require('mongoose')

const controlsSchema = new mongoose.Schema({
    controlsObject:{
    },
    theme:{
    }
})

module.exports = mongoose.model('controls',controlsSchema)