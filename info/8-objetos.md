# Objetos

## Creación y tipos de objetos

- Datos de tipo referenciado
- Incluyen propiedades que a su vez corresponden a dato de cualquier tipo: primitivos, objetos o funciones
  - En el caso de los arrays, los identificadores de las propiedades son indices numéricos que permiten la iteración a lo largo del array

Cuando una propiedad es de tipo función se denomina método.

- Acceden de forma transparente al objeto al que apunta la propiedad "__ proto __". Este suele ser el prototype de la función constructora del objeto. De esta forma se aplica el **patrón prototype** para conseguir una relación entre objetos asimilable a las **clases** de otros lenguajes de programación

Los objetos pueden declararse:

- literalmente
- con el patron constructor

### Objetos literales

JS permite crear de forma literal objetos, arrays y expresiones regulares (RegExp),
todos ellos variaciones del tipo **object**

```js
  const user = {
    name: 'Pepe',
    age: 22,
  };

  // Array
  const numbers = [1, 2, 3, 4];

  // Regular Expression (RegExp)
  const regExp = /a/i;

  console.log(user); // { name: 'Pepe', age: 22 }
  console.log(numbers); // [ 1, 2, 3, 4 ]
  console.log(regExp) // /a/i
```

Esta forma de notación se conoce con **JavaScrip Object Notation (JSON)** y ha dado lugar a un formato de **ficheros, json**, convertido prácticamente en el estándar de intercambio de datos entre distintas capas de software (servidores, clientes...)

- se utilizan siempre dobles comillas (")
- las claves o propiedades siempre van entre comillas, al igual que los valores de tipo string

El formato literal es solo una notación.
Los objetos obtenidos son exactamente los mismos que los que resultarían del patron constructor: instancias de la misma función constructora y con el mismo prototipo, del que pueden tomar las propiedades comunes a todas las instancias de dicha función constructora (clase)

```js
  const user = {
    name: 'Pepe',
    age: 22,
  };

  // Array
  const numbers = [1, 2, 3, 4];

  // Regular Expression (RegExp)
  const regExp = /a/i;

  console.log(user);
  console.log(user.constructor); // [Function: Object]
  console.log(Object.getPrototypeOf(user)); // [Object: null prototype] {}
  console.log(user instanceof Object); // true

  console.log(numbers);
  console.log(numbers.constructor); // [Function: Array]
  console.log(Object.getPrototypeOf(numbers)); // Object(0) []
  console.log(numbers instanceof Object); // true
  console.log(numbers instanceof Array); // true

  console.log(regExp);
  console.log(regExp.constructor); // [Function: RegExp]
  console.log(Object.getPrototypeOf(regExp)); // {}
  console.log(regExp instanceof Object); // true
  console.log(regExp instanceof RegExp); // true
```

### Objetos literales y prototipos

Se puede crear un objeto literal que tenga como prototipo (__ proto __) cualquier otro objeto

```js
  const organization = {
    brand: 'ISDI',
  };

  const user = Object.create(organization);

  user.name = 'Pepe';
  user.age = 22;

  console.log(user);
  console.log(user.brand);
```

De esa forma el nuevo objeto podrá acceder de forma transparenta a las propiedades de su prototipo, siempre que no existan en el mismo objeto

### Objetos construidos o instancias

Desde la aparición de JS, Los objetos pueden crearse como nuevas **instancias** resultantes de emplear el patron constructor (new) con una **función constructora**, de forma similar a como otros lenguajes utilizan las clases.

A partir de ES6, comienza a usarse la palabra reservada **class** y se habla de **clases** para referirse al proceso antes mencionado, de creación de instancias a partir de funciones constructoras (ahora con apariencia de clases)

```js

  const user = new Object({
    name: 'Pepe',
    age: 22,
  });

  console.log(user); // { name: 'Pepe', age: 22 }

  // Array
  const numbers = new Array(1, 2, 3, 4);
  console.log(numbers); // [ 1, 2, 3, 4 ]

  // Regular Expression (RegExp)
  const regExp = new RegExp(/a/i);
  console.log('RegExp new', regExp); // /a/i 

  // Date
  const date = new Date();
  console.log(date); // 2023-08-19T11:56:56.079Z

  // Error
  const error = new Error('Some error');
  console.log(error); // Error: Some error
```

## Clase Object. Propiedades

Cualquiera que sea la forma en que se han creado, los objetos tienen propiedades a las que se puede acceder mediante dos formas de notación

- puntos (dot notation)
- corchetes (bracket notation)

```js
  {
    const user = {
      name: 'Pepe',
    };
    console.log(user['name']); // Pepe

    const property = 'name';
    console.log(user[property]); // Pepe
  }
```

La notación de corchetes solo se utiliza si el **nombre de la propiedad** es una **variable**, que debe ser evaluada para luego acceder a la propiedad correspondiente al valor de la variable

Con ambas notaciones es posible leer, modificar crear y eliminar propiedades.

```js
  const obj = {
    name: 'Pepe',
    age: 22
  }
  // Añadimos propiedades
  obj.lastName = 'Perez'
  // Modificamos propiedades
  obj.name = 'Jose'
  // Eliminamos propiedades
  delete obj.age
  console.log(obj)
```

Todos estos cambios se enmarcan en el concepto de **mutabilidad** de los objetos

### Niveles

Las propiedades de los objetos pueden ser otros objetos, dando lugar a tantos niveles de anidamiento o profundidad como sea necesario.

Así se refleja tanto en su creación como en el acceso a las propiedades en cualquiera de las notaciones.

```js
  const user = {
    name: {
      firstName: 'Pepe',
      surname: 'Perez',
    },
  };
  user.address = {};
  user.address.street = 'c/ del Pez';
  user['address'].number = '22 3ª C';
  user['address']['city'] = 'Teruel';

  console.log(user);
  // { name: { firstName: 'Pepe', surname: 'Perez' },
  // address: { street: 'c/ del Pez', number: '22 3ª C', city: 'Teruel' } }
```

#### Anidamiento y propiedades undefined

Si se accede a cualquier propiedad de un objeto que no existe, el valor devuelto es undefined

Sin embargo si se intenta acceder a una propiedad de una propiedad que no existe, de desencadena un TypeError.

Para evitarlo puede usarse el operador **optional chaining** (?.), que no continua a un siguiente nivel de anidamiento cuando obtiene un undefined o null en el anterior, devolviendo en ese caso un undefined

```js
  const obj = {
    name: 'Pepe',
    age: 22,
  };
  console.log(obj.address); // undefined
  try {
    console.log(obj.address.city);
  } catch (error) {
    console.log(error.name); // TypeError
    console.log(error.message); // Cannot read properties of undefined (reading 'city')
  }
  console.log(obj.address?.city); // undefined
```

#### Anidamiento y clonación

Este posible anidamiento debe tenerse en cuenta al plantear el proceso de clonación o deep copy de un objeto, consistente en crear una instancia nueva.

Algunas de las formas de obtener este resultado no lo hacen en profundidad, y solo crean una shallow copy de las estructuras anidadas:

- Object.assign()
- {...Object}

Existen otras alternativas que si crean una deep copy a todos los niveles:

- JSON.parse(JSON.stringify(object))
- structuredClone()

### Iteraciones

Los objetos no son iterables, como arrays y strings, por lo que no pueden recorrerse en base a un índice numérico, como hacen for y for-of.

Las iteraciones en los objetos de JS pueden realizarse con la estructura for-in, que ya conocemos.

### Propiedades del prototipo

El prototipo de los objetos incluye una serie de propiedades y métodos accesibles de forma transparente por todos los objetos, que en general no se utilizan demasiado 

```js 
  const obj = new Object({
    name: 'Pepe',
    age: 22,
  });

  console.log(obj.constructor);
  console.log(obj.hasOwnProperty('name')); // true
  console.log(obj.isPrototypeOf({})); // false
  console.log(obj.propertyIsEnumerable('name')); // true
  console.log(obj.toString()); // [object Object]
  console.log(obj.toLocaleString()); // [object Object]
  console.log(obj.valueOf()); // { name: 'Pepe', age: 22 }
```
