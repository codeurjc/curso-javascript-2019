module.exports = class Chat {

    constructor(name, mediaServer) {
        this.name = name;
        this.users = [];
        this.mediaServer = mediaServer;
    }

    addUser(user) {
        if (this.mediaServer) {
            if (!this.mediaServer.allowMoreUsers()) {
                throw new Error('MediaServer does not allow more users');
            }
            this.mediaServer.addUser(user);
        }

        for (let u of this.users) {
            u.newUserInChat(this.name, user.name);
        }
        this.users.push(user);
    }

    removeUser(user) {
        if (this.mediaServer) {
            this.mediaServer.removeUser(user);
        }
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

