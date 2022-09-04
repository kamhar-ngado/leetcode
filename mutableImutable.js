// lowercase user data stored in an object by mutating the values
const user1 = { firstname: "John", lastname: "DOE" };

console.log(user1); // logs { firstname: ‘John’, lastname: ‘DOE’ }

const lowerCaseUserData = function (user) {
  user.firstname = user.firstname.toLowerCase();
  user.lastname = user.lastname.toLowerCase();
};

lowerCaseUserData(user1);

console.log(user1); // logs { firstname: ‘john’, lastname: ‘doe’ } - has changed
