const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts_list_db');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error in connect to db'));

db.once('open',function(){
    console.log('Connected db');
})