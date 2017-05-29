var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pools = new Schema({
    title: String,
    author: {
        id: String,
        displayName: String
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    options: [{
        description: String,
        votes: Number
    }]
});

Pools.methods.findAllByAuthor = function (id, cb) {
    this.model('Pools').find( {author: { id : id }}, cb );
}

module.exports = mongoose.model('Pools', Pools);
