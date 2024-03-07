const user1 = {
  name: 'Pepe',
  age: 22,
  greeting() {
    console.log(`Hola, soy ${this.name}`);
  },
};

const user2 = {
  name: 'Ernestina',
  age: 23,
  greeting() {
    console.log(`Hola, soy ${this.name}`);
  },
};

user1.greeting();
user2.greeting();

console.log(user1);
console.log(user2);
