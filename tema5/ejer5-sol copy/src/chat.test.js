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