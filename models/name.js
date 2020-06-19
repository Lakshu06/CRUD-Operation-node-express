const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NameSchema = new Schema({

    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
});

const NameD = mongoose.model('name', NameSchema);

module.exports = NameD;