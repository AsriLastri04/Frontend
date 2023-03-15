const users = [
    {name : "Jonas", age : 15},
    {name : "Michael", age :40},
    {name : "Hannah", age : 35},
];

const index = () => {
    users.forEach(function (user) {
        console.log(user);
    });
};
const store = () => {
    users.push(user);
};

const main = () => {
    const user = {name: "Martha", age: 20};
    index();
    store(users);
};
main();