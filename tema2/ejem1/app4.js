const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

const { id, fullName: { firstName }} = user;

console.log(id);
console.log(firstName);