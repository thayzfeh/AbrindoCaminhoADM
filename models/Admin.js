const mongoose = require('mongoose');

const Admin = mongoose.model('Admin',{
    username: String,
    password: String,
});


module.exports = Admin;