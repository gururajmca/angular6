const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  creareUser: () => {
    const user = {
      firstName: 'Gururaj',
      lastName: 'Naik'
    };
    return user;
  },
  getAllUsers: () => {
    const users = ['gururaj', 'aditi', 'ambika'];
    return users;
  },
  fetchUser: () => axios
                    .get('https://jsonplaceholder.typicode.com/users/1')
                    .then( (res) => res.data)
                    .catch(err => 'error not able to find'),
  fetchData: () => axios
                    .get('https://jsonplaceholder.typicode.com/users/2')
                    .then( (res) => res.data.username)
                    .catch(err => 'error not able to find')
}
module.exports = functions;
