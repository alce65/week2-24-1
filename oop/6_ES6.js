// ES
export class User {
  static brand = 'ISDI';

  static foo = function () {
    console.log('Método estático');
  };

  name;
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  greeting() {
    console.log(`Hola, soy ${this.name} y tengo ${this.#age} años`);
  }
}

const user1 = new User('Pepe', 33);
const user2 = new User('Ernestina', 22);
const user3 = new User('Ramon');

user1.greeting();
user2.greeting();

console.log(User.brand);

User.foo();
user1.surname = 'Perez';
delete user1.age;

console.log(user1);
console.log(user2);
console.log(user3);

export class Student extends User {
  constructor(name, age, course = 'Angular') {
    super(name, age);
    this.course = course;
  }

  greeting() {
    super.greeting();
    console.log(`Estudio ${this.course}`);
  }
}

const s1 = new Student('Elena', 34, 'Node');
s1.greeting();
console.log(s1);

// Array.isArray([0]);
// Object.is(8, 8);
// Math.trunc();
// JSON.parse();
// JSON.stringify();
