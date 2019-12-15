module.exports = class Chat {

    constructor(name) {
        this.name = name;
        this.users = [];
    }

    addUser(user) {
        for (let u of this.users) {
            u.newUserInChat(this.name, user.name);
        }
        this.users.push(user);
    }

    removeUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
        for (let u of this.users) {
            u.userExitedFromChat(this.name, user.name);
        }
    }

    sendMessage(user, message) {
        for (let u of this.users) {
            if (u !== user) {
                u.onMessage(this.name, user.name, message);
            }
        }
    }
}

