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
  }
}
module.exports = functions;
