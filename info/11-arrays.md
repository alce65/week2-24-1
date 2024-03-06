# Arrays

Los arrays son un tipo de objeto, en el que la  agrupación de diversas variables (propiedades) tiene un carácter secuencial, en lugar del carácter asociativo de la clase Object().
En este caso cada propiedad no esta asociada a un nombre sino a una posición numérica dentro del array, siempre contando desde 0. Esto los convierte en **elementos iterables**, que pueden ser recorridos en base a un índice numérico, como también sucede con los strings, aunque solo en modo de lectura.

Finalmente, los arrays no suelen incorporar propiedades con nombre ni por tanto métodos.

Este concepto se diferencia de las listas o arrays de otros lenguajes, que tienen una dimensión predefinida en el momento en que se crean.

Como el resto de los objetos de JS, los arrays son mutables, por lo que sus items pueden ser creados, modificados y eliminados, pudiendo así alterarse en cualquier momento la longitud inicial del array

## Creación de Arrays

Como los otros tipos de objetos de JS, existe una función constructora (clase) Array

- puede ser usada con el patron constructor para crear un Array
- contiene en su prototipo los métodos accesibles de forma transparente por todas las instancias de Array
- contiene una serie de métodos estáticos accesibles directamente a traves de la función (clase)

Como constructor, la función Array esta sobrecargada: se comporta de forma diferente según los parámetros que recibe

- sin parámetro retorna un array vacío
- un parámetro number indica la longitud del Array, con lo que se instancia un array de tantas posiciones vacías como el número indicado
- mas de un parámetro, se crea un array con los sucesivos parámetros como items

```js
  let data = new Array();
  console.log(data); // []

  data = new Array(20);
  console.log(data); // [ <20 empty items> ]

  data = new Array(1, 2, 3, 4);
  console.log(data); // [ 1, 2, 3, 4 ]
```

En la practica, lo habitual es crear los arrays de forma literal. englobando los items en corchetes

```js
  const data = [10, 20, 30];
  console.log(data); // [ 10, 20, 30 ]
```

## Items de los arrays. Iteración

Los items de un array tienen siempre un índice numérico, comenzando por 0, que permite acceder a cualquier item indicándolo entre corchetes. Además de leer el valor, esto permite asignarle un valor nuevo.

```js
  const data = [10, 20, 30];
  console.log(data); // [ 10, 20, 30 ]

  console.log(data[2]); // 30
  data[1] = 22;
  console.log(data); // [ 10, 22, 30 ]
```

Si se lee una posición que no existe, el valor devuelto es undefined.

Si se asigna valor a una posición que no existe, esta se crea, junto con los "empty items" necesarios para llegar hasta la posición indicada.

```js
  const data = [10, 20, 30];
  console.log(data); // [ 10, 20, 30 ]

  console.log(data[3]); // undefined
  data[10] = 100;
  console.log(data); // [ 10, 20, 30, <7 empty items>, 100 ]
```

el operador delete de los objetos no elimina la posición indicada, sino que la transforma en "empty item"

```js
  const data = [10, 20, 30];
  console.log(data); // [ 10, 20, 30 ]
  delete data[2];
  console.log(data); // [ 10, 20, <1 empty item> ]
  console.log(data.length); // 3
```

La propiedad length indica la longitud del array, incluyendo "empty items" si los hubiera

Al empezar los índices por 0, el valor length corresponde siempre al item siguiente al último, por lo que puede usarse para añadir nuevos items. 

```js
  const data = [10, 20, 30];
  data[data.length] = 40;
  console.log(data); // [ 10, 20, 30, 40 ]
```

En la practica las mutaciones que añaden o eliminan items al array suelen llevarse a cabo con los métodos que luego veremos.

La propiedad **length** es de **lectura y escritura** por lo que puede asignarse una nueva longitud a un array

- si sobran posiciones se eliminan
- si faltan posiciones se completan como 'empty items'

Teniendo en cuenta el valor length es sencillo utilizar un bucle for para iterar a lo largo de todo el array. Otra alternativa es utilizar el bucle for-of, incorporado en ES6.

El bucle for-in no suele usarse con arrays porque itera todas las posiciones, como si fueran propiedades de cualquier objeto, sin garantizar que se respete el orden de los índices numéricos.

## El objeto Array

- `length`, como hemos visto, es el atributo que almacena la longitud del array

### Propiedades implementadas como mutables

Mutan (modifican) el array que las invoca

- `push(item)`, añade un elemento (o n) al final del array y devuelve la longitud final del array
- `unshift(item)`, añade un elemento (o n) al principio del array y devuelve la longitud final del array
- `pop()`, elimina el último elemento del array y lo devuelve
- `shift()`, elimina el primer elemento del array y lo devuelve

```js
let data = [10, 20, 30];
console.log('push return', data.push(40)); // 4
console.log('mutated array', data); // [ 10, 20, 30, 40 ]
console.log('unshift return', data.unshift(50)); // 5
console.log('mutated array', data); // [ 50, 10, 20, 30, 40 ]

console.log('pop return', data.pop()); // 40
console.log('mutated array', data); // [ 50, 10, 20, 30 ]
console.log('shift return', data.shift()); // 50
console.log('mutated array', data); // [ 10, 20, 30 ]
```

- `sort()`, Ordena alfabéticamente los elementos de un array. 
Por defecto el orden es alfabético y ascendente (A -> Z)
Opcionalmente podemos pasar como argumento una función 'comparadora', cuyos dos argumentos determinaran el orden, según devuelva positivo, 0 o negativo,.
- `reverse()`, modifica un array colocando sus elementos en el orden inverso a su posición original:

- `splice(inicio,cuantos, valor, valor,…)`, extrae parte de un array,  eliminando, a partir de donde inicia la extracción, los valores indicados en el segundo parámetro, y en su lugar introduce los valores que le indicamos (si los hay). Si el segundo parámetro es 0, no extrae nada, sólo añade

```js
  data = [20, 10, 60, 30];
  console.log('sort return', data.sort((a, b) => a - b)); // [ 10, 20, 30, 60 ]
  console.log('mutated array', data); // [ 10, 20, 30, 60 ]
  console.log('reverse return', data.reverse()); // [ 60, 30, 20, 10 ]
  console.log('mutated array', data); // [ 60, 30, 20, 10 ]
  console.log('splice return', data.splice(2)); // [ 20, 10 ]
  console.log('mutated array', data); // [ 60, 30 ]
```

Como se ve más adelante, recientemente se han incorporado versiones implementadas como inmutables de estas 3 funciones [_🗓️ES2023_]

### Propiedades implementadas como inmutables

No mutan (modifican) el array que las invoca; en muchos casos devuelven un nuevo array

- `concat(array2)`, devuelve un array en el que se concatenan el original y el/los recibidos por parámetros
(+ los concatena como strings)

- `join(separador)`,  devuelve una cadena de texto en la que une todos los elementos de un array, separados por el argumento de la función. El separador por defecto es 'coma' (,)
  - `string.split(separador)`, es la función contraria a join(): convierte una cadena de texto en un array de cadenas de texto.
  Combinados join y split pueden servir para clonar un array

- `slice(inicio,fin)`, extrae parte de un Array (desde el primer parámetro hasta el segundo, sin incluirlo) devolviéndolo en un nuevo objeto Array, sin modificar el original.

```js
  console.log([1, 2, 3]);
  console.log('Concat', [1, 2, 3].concat([4, 5])); // [ 1, 2, 3, 4, 5 ]
  console.log('Concat', [1, 2, 3].concat([4, 5], [6, 7])); // [1, 2, 3, 4, 5, 6, 7];
  console.log('Join', [1, 2, 3].join()); // 1,2,3 (string)
  console.log('Slice', [10, 20, 30, 40].slice(1, 2)); // [20]
```

- `indexOf(value)`, devuelve el indice correspondiente a la primera vez que encuentra el parámetro, o -1 si no lo encuentra
- `lastIndexOf(value)`,  devuelve el indice correspondiente a la última vez que encuentra el parámetro, o -1 si no lo encuentra

```js
  console.log('IndexOf', [10, 20, 30, 40].indexOf(10)); // 0
  console.log('LastIndexOf', [10, 20, 30, 40, 10].lastIndexOf(10)); // 4
```

Progresivamente se han ido incorporando nuevas funciones con este patron de inmutabilidad del array original

- `includes(value)`, devuelve un valor booleano para indicar si el parámetro es alguno de los items del array [_🗓️ES2016_]

- `at(number)`, devuelve el valor de la posición indicada empezando desde 0; admite parámetros negativos para buscar la posición desde el final [_🗓️ES2022_]
  
```js
  console.log('Includes', [10, 20, 30, 40].includes(20)); // true
  console.log([10, 20, 30, 40].at(2)); // 30
```

- `fill(value, start, end)`, devuelve un array sustituyendo con el primer parámetro las posiciones indicadas en los segundos
- `copyWithin(target, start, end)`, devuelve un array sustituyendo, a partir de la posición indicada en el primer parámetro, por los valores del array de las posiciones indicadas en los otros parámetros
- `flat()` [_🗓️ES2019_], aplana un array de arrays devolviendo un array unidimensional

```js
console.log('CopyWithin', [10, 20, 30, 40].copyWithin(2, 0, 2)); // [ 10, 20, 10, 20 ]
console.log('Fill', [10, 20, 30, 40].fill(null, 1, 2)); // [ 10, null, 30, 40 ]
console.log('Flag', [[10, 20],[30, 40]].flat()); 
// [ 10, 20, 30, 40 ]
```

- `toReversed()`, `toSorted()`, `toSpliced()` reproducen como implementación inmutable los metodos mutables correspondientes

```js
  console.log([20, 10, 60, 30].toReversed()); // [30, 60, 10, 20];
  console.log([20, 10, 60, 30].toSorted((a, b) => a - b)); // [ 10, 20, 30, 60 ]
  data = [10, 20, 30, 60];
  console.log(data.toSpliced(2)); // [ 10, 20 ]
  console.log('data', data);
```

### Propiedades de orden superior implementadas como inmutables

Aparecen el ES 5 (2009) y son funciones de orden superior (HOF) dado que reciben una función **callback**, es decir una función que es pasada como parámetro para que el método la utilice iterativamente de la forma en que tiene previamente definida. Los parámetros de dicha función son (element, index, array)

- `forEach()` permite indicar cualquier función , booleana o no, que modifique o no los elementos, pero que en cualquier caso se aplica sobre cada uno de ellos.
- `map()` una proyección (como select en C#): el argumento es una función que transforma cada uno de los elementos.

```js
  let acc = 0;
  [1, 2, 3].forEach((item) => {
    acc += item;
  });
  console.log('acc:', acc); // 6

  console.log([1, 2, 3].map((item) => item ** 2)); // [ 1, 4, 9 ]
```

- `filter()` tiene como argumento una función lambda que evalúa cada elemento del array y devuelve un booleano. Se devuelve un nuevo array sólo con los elementos que hayan dado verdadero en la función callback
- `find()` igual a filter pero devuelve el primer elemento que cumpla la condición, o undefined si no lo encuentra
- `findIndex()`, igual a find pero devuelve la posición en el array del elemento encontrado, o -1 si no encuentra ninguno

```js
  const data = [
    { name: 'Pepe', age: 22, gender: 'M' },
    { name: 'Ernestina', age: 22, gender: 'F' },
    { name: 'Luisa', age: 23, gender: 'F' },
    { name: 'Ramón', age: 25, gender: 'M' },
  ];
  console.log(data.filter((item) => item.gender === 'F'));
  // [{ name: 'Ernestina', age: 22, gender: 'F' },
  //  { name: 'Luisa', age: 23, gender: 'F' } ]
  console.log(data.find((item) => item.age === 23));
  // { name: 'Luisa', age: 23, gender: 'F' }
  console.log(data.findIndex((item) => item.age === 23));

```

- `some()` y `every()` utilizan funciones del mismo tipo para evaluar si el array en su conjunto las cumple, y devolver en consecuencia verdadero a falso.
  - `some()` devuelve verdadero si algún elemento del array lo devuelve
  - `every()` devuelve verdadero si todos los elementos del array lo devuelven

```js
  console.log(data.some((item) => item.age === 20)); // false
  console.log(data.every((item) => item.age > 20)); // true
```

- flatMap()  [_🗓️ES2019_] aplana un array multidimensional, tomando cada array interno como entrada del callback que recibe

```js
  console.log(
    [
      [1, 2],
      [3, 4],
    ].flatMap((item) => item.map((item) => item ** 2))
  ); // [ 1, 4, 9, 16 ]

```

- `reduce()`, aplica una función simultáneamente a pares de valores del array. desde la izquierda a la derecha, sucesivas veces, hasta reducir el array a un único valor

- `reduceRight()`, realiza el mismo proceso desde la derecha a la izquierda,  de nuevo sucesivas veces, hasta reducir el array a un único valor

```js
  console.log([10, 20, 30].reduce((prev, current) => prev + current)); // 60
  console.log([10, 20, 30].reduceRight((prev, current) => prev + current)); // 60
  console.log([10, 20, 30].reduce((prev, current) => prev - current)); // -40
  console.log([10, 20, 30].reduceRight((prev, current) => prev - current)); // 0

```

### Métodos estáticos del objeto Array

- `Array.isArray(value)` determina si el valor recibido es una instancia de Array, devolviendo el booleano correspondiente
- `Array.of(value...)` devuelve un array con la sucesión de valores recibidos como items
- `Array.from(value)` devuelve un nuevo array clonando el array recibido

```js
  console.log(Array.isArray([])); // true
  console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
  console.log(Array.from([1, 2, 3])); // [ 1, 2, 3 ]
```
