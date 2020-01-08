var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const url = "mongodb://localhost:27017/sampleApp";

var User;

async function createSampleUsers() {
    await addUser('user1', 'pass1');
    await addUser('user2', 'pass2');
    await addUser('user3', 'pass3');
}

async function addUser(username, password) {
    var passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(8), null);

    var user = await User.findOne({ username }).exec();

    if(!user){
        user = new User({ username, passwordHash });
    } else { 
        user.passwordHash = passwordHash;
    }

    await user.save();
}

exports.init = async function() {

    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log("Connected to Mongo");

    User = mongoose.model('User', new mongoose.Schema({
        username: String,
        passwordHash: String
    }));

    createSampleUsers();
}

exports.find = async function (username) {
    return await User.findOne({ username }).exec();
}

exports.verifyPassword = async function (user, password) {
    return await bcrypt.compare(password, user.passwordHash);
}

