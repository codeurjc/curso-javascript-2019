var bcrypt  = require('bcrypt');

const users = new Map();

async function createSampleUsers(){
    await addUser('user1', 'pass1');
    await addUser('user2', 'pass2');
    await addUser('user3', 'pass3');    

    console.log(users);
}

createSampleUsers();

exports.find = async function(username){
    return users.get(username);
}

exports.verifyPassword = async function(user, password){
    return await bcrypt.compare(password, user.passwordHash);
}

async function addUser(username, password){
    var passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(8), null);
    users.set(username, { username, passwordHash });
}