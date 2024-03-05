# Des-estructuración (Destructuring)

[_🗓️ES2015_]

En el proceso de declaración de las variables y parámetros, si el valor asignado es un objeto (o array), pueden recogerse por separado sus propiedades o items en variables completamente independientes 

## Des-estructuración en la declaración de variables

```js
  const createArray = () => [1, 2];
  const createObject = () => ({
    name: 'Pepe',
    age: 22,
  });

  const [first, second] = createArray();
  const { name, age } = createObject();

  console.log(first, second);
  console.log(name, age);
```

## Des-estructuración en la declaración de parámetros

```js
const useArray = ([first, second]) => {
    console.log(first);
    console.log(second);
  };

  useArray([1, 2]);

  const useObject = ({ name, age }) => {
    console.log(name);
    console.log(age);
  };

  useObject({
    name: 'Pepe',
    age: 22,
  });
```

## Operador spread (extendido)

Permite la expansión de iterables (arrays y strings) y objetos

- un iterable (arrays y strings) puede ser expandido 
  - en llamadas de función con cero o más argumentos esperados
  - en arrays literales, donde se esperan nuevos elementos

```js
  const addTwoNumbers = (a, b) => a + b;
  const numbers = [1, 2];
  const numbersB = [...numbers];

  console.log(numbersB); // [1,2]

  const result = addTwoNumbers(...numbers);

  console.log(result); // 3

```

- un objeto puede ser expandido en lugares donde son esperados cero o más pares de valores clave (para literales tipo Objeto) [_🗓️ES2018_]

```js
  const obj = { name: 'Pepe', age: 22 };
  const objB = { ...obj, age: 23 };

  console.log(objB); // { name: 'Pepe', age: 23 }
```

El spread operator se convierte así en un mecanismo para la clonación de objetos (incluidos arrays): obtener una nueva instancia con las mismas propiedades o incluso con la mutación de algunas

Este mecanismo no afecta a niveles anidados, es decir a arrays de arrays o propiedades de tipo objeto

### Deep clone

Para conseguir un deep clone pueden usarse 2 técnicas

- uso de los métodos estáticos de JSON (stringify y parse)
- uso del la nueva función global structuredClone incluida en las APIs del browser y node (desde su versión 11)

```js
  const user = {
    name: {
      firstName: 'Pepe',
      surname: 'Perez',
    },
    age: 22,
  };

  const userB = JSON.parse(JSON.stringify(user));
  console.log(userB);

  const userC = structuredClone(userB);
  console.log(userC);
```

## Operador rest

El operador rest al usarse en la sintaxis de los parámetros de una función le permite recibir un número indefinido de argumentos como un array, permitiendo así representar funciones 'variadicas' (variadic functions) en JavaScript

```js
  const sumNumbers = (...numbers) => {
    let accumulator = 0;
    for (const iterator of numbers) {
      accumulator += iterator;
    }
    return accumulator;
  };

  console.log(sumNumbers(2, 5, 3, 5, 2, 7, 7)); // 31
```

También puede emplearse el operador rest como parte del proceso de des-estructuración

```js
  const numbers = [1, 2, 3, 4, 5];
  const [first, second, ...others] = numbers;
  console.log(others); // [ 3, 4, 5 ]
  
```

Esté último caso puede igualmente ocurrir con objetos [_🗓️ES2018_]

```js
  const { first, second, ...others } = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
  };

  console.log(first); // 1
  console.log(second); // 2
  console.log(others); // { third: 3, fourth: 4, fifth: 5 }
```
