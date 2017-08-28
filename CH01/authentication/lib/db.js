var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports.mongoose = mongoose
module.exports.Schema = Schema

var username = ''
var password = ''
var address = 'localhost:27017'

connect()

function connect() {
    var url = `mongodb://${address}/nockmarket`
    mongoose.connect(url)
}

function disconnect() {
    mongoose.disconnect()
}