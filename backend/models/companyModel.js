const { Types } = require('mongoose')
const { Schema, model } = require('../connection')
const mySchema = new Schema({
    name: String,
    type: String,
    departments: String,
    working: String,
    address: String,
    contact: Number,
    email: String,
    user : {type : Types.ObjectId, ref: 'users'}

})



module.exports = model('profile', mySchema)