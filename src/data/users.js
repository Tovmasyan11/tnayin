import users from './mock/users.json';

export const findUser = (username) => {
    const user = users.find(user => user.username === username);

    return user;
};