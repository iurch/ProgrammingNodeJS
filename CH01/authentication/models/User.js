var db = require('../lib/db')


var UserSchema = new db.Schema({
    username: { type: String },
    password: String
})

var MyUser = db.mongoose.model('User',UserSchema)


module.exports.addUser = addUser


function addUser(username,password,callback) {
    var instance = new MyUser()
    instance.username = username
    instance.password = password
    instance.save(function(e){
        if (e) {
            callback(e)
        } else {
            callback(null,instance)
        }
    })
}