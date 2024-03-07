function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greeting = function () {
  console.log(`Hola, soy ${this.name}`);
};

User.foo = function () {
  console.log('Método estático');
};

const user1 = new User('Pepe', 33);
const user2 = new User('Ernestina', 22);
const user3 = new User('Ramon', 45);

user1.greeting();
user2.greeting();

User.foo();

user1.surname = 'Perez';
delete user1.age;

console.log(user1);
console.log(user2);
console.log(user3);
