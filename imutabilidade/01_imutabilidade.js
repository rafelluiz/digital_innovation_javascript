const user = {
  name:'Rafael',
  lastName:'Andrade'
};

function getUserWithFullName(user) {
  return{
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName,user)