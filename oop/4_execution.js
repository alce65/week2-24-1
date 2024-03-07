/* eslint-disable no-new */
/* eslint-disable new-cap */
// Patrones de ejecución

function foo() {
  console.log('Soy foo');
}

// Function

foo();

// Method

const obj = {
  foo, // Eq. foo: foo
};

obj.foo();

// Constructor

new foo();

// Apply

const obj2 = {};

foo.apply(obj2);

/* Constructor 

1 - Crea un objeto 
2 - se lo pasa a la función como this
3 - devuelve el objeto 

*/
