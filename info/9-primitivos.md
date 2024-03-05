# Tipos primitivos y objetos envolventes

- Los valores de tipo primitivo **NO** son objetos
- Los valores de tipo primitivo string, number y boolean **SE COMPORTAN** como objetos

Para comprobar lo primero basta intentar asignarle valor a una propiedad de un valor de tipo primitivo, con lo que se dispara un TypeError que indica claramente el tipo del dato que carece de la capacidad de declarar propiedades

```js

  const assignProp = (x) => {
    try {
      x.prop = 1;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  };

  assignProp(22); // Cannot create property 'prop' on number '22'
  assignProp('Pepe'); // Cannot create property 'prop' on string 'Pepe'
  assignProp(true); // Cannot create property 'prop' on boolean 'true'
  assignProp(22n); // Cannot create property 'prop' on bigint '22'
  assignProp(Symbol('s')); // Cannot create property 'prop' on symbol 'Symbol(s)'
  assignProp(undefined); // Cannot set properties of undefined (setting 'prop')
  assignProp(null); // Cannot set properties of null (setting 'prop')
```

En el tipo null, que no es un object aunque lo indique por error typeof, se obtiene un error muy similar al de null

## Wrapper Objects


Para cada uno de los primitivos mencionados existe un tipo objeto, basado en las funciones constructoras String, Number y Boolean. Es posible, aunque poco frecuente crear de forma explícita estos objetos, invocando los constructores String(), Number(), o Boolean()

```js
  const s = new String('Pepe');
  const n = new Number(22);
  const b = new Boolean(true);
  console.log(s); // [String: 'Pepe']
  console.log(n); // [Number: 22]
  console.log(b); // [Boolean: true]
```

Si estas funciones String(), Number(), o Boolean() se utilizan al margen del patrón constructor (sin new), permiten provocar el casting (conversión explicita) al correspondiente tipo de dato cuando es necesario.

Los valores de tipo primitivo string, number y boolean **SE COMPORTAN** como objetos porque JS los 'envuelve' temporalmente en un objeto (wrapper object) cuando se necesita que se comporten como objetos

En términos mas técnicos se produce una coerción (conversión implícita) como consecuencia de los requerimientos de las expresiones que tratan al valor primitivo como si fuera un objeto, por ejemplo utilizando el operado punto (.) para intentar acceder a una propiedad

```js
{
  const text = 'Texto';
  console.log(text.length); // 5
  console.log(typeof text)
}
```

- la variable text es de tipo primitivo y no tiene propiedades
- la expresión `text.length` dispara la coercion al tipo String
- se instancia el objeto correspondiente a `new String(text)`
- el objeto si tiene una propiedad length con un valor de 5
- Una vez que la expresión ha devuelto el resultado, se descarta el objeto creado de forma transitoria igual que sucedería en cualquier caso de coerción o casting

## Características de los tipos primitivos

### String

Probablemente el objeto más complejo de JavaScript, con decenas de métodos y utilidades, que se utilizan para operaciones con strings, gracias a la creación automática de objetos envolventes de este tipo

### Boolean

En general no se utilizan porque su comportamiento no siempre es idéntico al de los tipos de datos primitivos ya que en una operación lógica, cualquier objeto que exista se convierte a true, independientemente de su valor.

Su único método, valueOf, devuelve el valor boolean (true o false)

### Number

Además del método valueOf, igual al caso anterior, tiene varios valores de conversión a string con diversos formatos numéricos

- toString(): devuelve un string con el número
- toLocaleString(): devuelve un string con el formato de la localización del sistema o la indicada
- toExponential(): devuelve un string redondeando la mantisa a n decimales.
- toFixed(): devuelve un string redondeando a n decimales
- toPrecision(): devuelve un string redondeando a n dígitos

```js
  const number = 22.1;
  console.log(number.valueOf()); // 22.1 (Number)
  console.log(number.toString()); // 22.1;
  console.log(number.toLocaleString()); // 22,1;
  console.log(number.toExponential()); //  2.21e1;
  console.log(number.toFixed(2)); // 22.10
  console.log(number.toPrecision(2)); // 22;
```

## El tipo String

- `length`, es el atributo que almacena la longitud de una cadena de texto
- `concat(): string` o el operador +, se emplea para concatenar varias cadenas de texto
- `split(separator): string[]`, convierte una cadena de texto en un array de cadenas de texto.
  Es el opuesto de la función join(separador), propia de los arrays

```js
  let text = 'Texto';
  console.log(text.length); // 5
  console.log(text.concat(' second')); // Texto second
  console.log(text.split('')); // [ 'T', 'e', 'x', 't', 'o' ]
```

- `toUpperCase(): string` o `toLocaleUpperCase(): string`, transforma todos los caracteres de la cadena a sus correspondientes caracteres en mayúsculas
- `toLowerCase(): string` o `toLocaleLowerCase(): string`, transforma todos los caracteres de la cadena a sus correspondientes caracteres en minúsculas

```js
  text = 'Cañón';
  console.log(text.toLowerCase()); // texto
  console.log(text.toLocaleLowerCase()); // texto
  console.log(text.toUpperCase()); // TEXTO
  console.log(text.toLocaleUpperCase()); // TEXTO
```

- `slice(start, end): string`, `substring(start, end): string`
devuelven una porción de una cadena de texto, sin modificar el original
- `repeat(number): string`: repite la cadena el número de veces indicados

```js
  text = 'Ornitorrinco';
  console.log(text.slice(0, 6)); // Ornito
  console.log(text.substring(6)); // rrinco
  
```

- `padEnd(number, characters?): string`: añade el string del segundo parámetro o caracteres blanco ('') al final de la cadena, hasta que ésta alcance la longitud indicada [_🗓️ES2017_]
- `padStart(number, characters?): string`: añade el string del segundo parámetro o caracteres blanco ('') al principio de la cadena, hasta que ésta alcance la longitud indicada [_🗓️ES2017_]

```js
  text = 'test';
  console.log(text.padEnd(12, '*')); // test********
  console.log(text.padStart(12, '*')); // ********test
  text = text.padStart(12);
  text = text.padEnd(18);
  console.log(text, '|'); //       test  
```

- `trimEnd(): string`: elimina caracteres blancos (' ') al final de la cadena [_🗓️ES2019_]
- `trimStart(): string`: elimina caracteres blancos (' ') al principio de la cadena [_🗓️ES2019_]
- `trim(): string`: elimina caracteres blancos (' ') al principio y al final de la cadena

```js
  console.log(text.trimEnd(), '|'); //      test |
  console.log(text.trimStart(), '|'); // test       |
  text = text.trim();
  console.log(text); // test
```

- `match(regExp): RegExpMatchArray`, busca las coincidencias con una expresión regular y las devuelve como un array
- `matchAll(regExp): IterableIterator<RegExpMatchArray>` [_🗓️ES2020_], busca todas las coincidencias con una expresión regular y retorna un generador
- `search(expression): number`, busca una cadena o expresión regular y devuelve la posición en que comienza la coincidencia o -1 si no la hay
- `replace(expression1, expression2): string`, busca una cadena o expresión regular y devuelve una cadena en que la sustituye por la segunda expresión
- `replaceAll(expression1, expression2): string` [_🗓️ES2021_], busca las apariciones una cadena o expresión regular y devuelve una cadena en que sustituye todas ellas por la segunda expresión

```js
  text = 'Ornitorrinco';
  console.log(text.match(/o/gi)); // [ 'O', 'o', 'o' ]
  console.log(text.matchAll(/o/gi)); // Object [RegExp String Iterator] {}
  console.log(text.search(/o/i)); // 0
  console.log(text.replace(/O/i, 'u')); // urnitorrinco
  console.log(text.replaceAll(/[oi]/gi, 'u')); // urnuturruncu
```

- `charAt(position): string`, obtiene el carácter que se encuentra en la posición indicada. Equivale a acceder a una posición mediante corchetes
- `at(position): string`, igual al anterior, pero admite parámetros negativos para buscar la posición desde el final [_🗓️ES2022_]
- `indexOf(character): number`, calcula la posición en la que se encuentra el carácter indicado dentro de la cadena de texto.
- `lastIndexOf(character): number`, calcula la última posición en la que se encuentra el carácter indicado dentro de la cadena de texto.

```js
  console.log(text.charAt(0)); // O
  console.log(text.at(0)); // O
  console.log(text.at(-1)); // o
  console.log(text.indexOf('i')); // 3
  console.log(text.lastIndexOf('i')); // 8
```

- `charCodeAt(position): number`, `codePointAt(position): number`, obtiene el Unicode del carácter que se encuentra en la posición indicada
  - `String.fromCharCode(numero): string`, convierte un valor numérico en el carácter Unicode correspondiente

```js
  text = 'Texto';
  console.log(text.charCodeAt(1)); // 101
  console.log(text.codePointAt(1)); //101
  console.log(String.fromCharCode(101)); // e
```

- `startsWith(characters): boolean`: comprueba si la cadena de texto empieza por los caracteres recibidos como parámetro [_🗓️ES2015_]
- `endsWith(characters): boolean`: comprueba si la cadena de texto termina por los caracteres recibidos como parámetro [_🗓️ES2015_]
- `includes(characters): boolean`: comprueba si la cadena de texto incluye los caracteres recibidos como parámetro [_🗓️ES2015_]

```js
  console.log(text.startsWith('t')); // false
  console.log(text.endsWith('t')); // false
  console.log(text.includes('t')); // true
```

- `normalice(): string` retorna un string con elementos de la codificación de los signos diacríticos, como los acentos, ajustado a determinadas normas (Unicode Normalization Forms)

```js
  const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
  const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
  console.log(name1, name2); // Amélie Amélie
  console.log(name1 === name2); // false
  console.log(name1.normalize() === name2.normalize()); //true
```

- `localeCompare(characters, ...): number`: compara la cadena con la cadena recibida teniendo en cuenta los aspectos de localización indicados

```js
  const a = 'coerción';
  const b = 'coercion';
  console.log(a.localeCompare(b)); // 1
  console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
```
