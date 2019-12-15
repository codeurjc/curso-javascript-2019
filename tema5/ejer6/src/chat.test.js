const Chat = require('./chat');

test('User is notified when new user is added to chat', () => {

    let chat = new Chat('Test');

    let user1 = {
        newUserInChat: jest.fn()
    };

    let user2 = { name: 'Pepe' }

    chat.addUser(user1);
    chat.addUser(user2);

    expect(user1.newUserInChat).toBeCalledWith(chat.name, user2.name);

});

test('User is notified when existing user exists from chat', () => {

    let chat = new Chat("Test");
    let user1 = {
        name: 'Pepe',
        newUserInChat: jest.fn()
    }

    let user2 = {
        userExitedFromChat: jest.fn(),
        newUserInChat: jest.fn()
    }

    chat.addUser(user1);
    chat.addUser(user2);

    chat.removeUser(user1);

    expect(user2.userExitedFromChat).toBeCalledWith(chat.name, user1.name);
});

test('Users are notified when a message is sent', () => {

    let chat = new Chat("Test");
    let user1 = {
        name: 'Pepe',
        onMessage: jest.fn(),
        newUserInChat: jest.fn()
    }
    let user2 = {
        onMessage: jest.fn(),
        newUserInChat: jest.fn()
    }

    chat.addUser(user1);
    chat.addUser(user2);

    chat.sendMessage(user1, "Hello");

    expect(user2.onMessage).toBeCalledWith(chat.name, user1.name, "Hello");
    expect(user1.onMessage).not.toBeCalled();
});

test('Add user allowed by mediaServer', () => {

    let mediaServer = {
        allowMoreUsers: jest.fn(() => true),
        addUser: jest.fn()
    }

    let chat = new Chat("Test", mediaServer);

    chat.addUser({});

    expect(mediaServer.allowMoreUsers).toBeCalled();
});


test('Try to add user not allowed by mediaServer', () => {

    let mediaServer = {
        allowMoreUsers: jest.fn(() => false),
        addUser: jest.fn()
    }

    let chat = new Chat("Test", mediaServer);

    expect(() => { 
        chat.addUser({}) 
    }).toThrowError('MediaServer does not allow more users');

    expect(mediaServer.allowMoreUsers).toBeCalled();
});

test('Add first user allowed by mediaServer and 2nd one not allowed', () => {

    let mediaServer = {
        allowMoreUsers: jest.fn()
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false),
        addUser: jest.fn()
    }

    let chat = new Chat("Test", mediaServer);

    chat.addUser({});

    expect(mediaServer.allowMoreUsers).toBeCalled();

    mediaServer.allowMoreUsers.mockClear();

    expect(() => { 
        chat.addUser({}) 
    }).toThrowError('MediaServer does not allow more users');

    expect(mediaServer.allowMoreUsers).toBeCalled();

});