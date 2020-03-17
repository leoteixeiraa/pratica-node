const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/norest', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose