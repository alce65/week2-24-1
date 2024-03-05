# Control de flujo

1. Condicionales
    1. If
    2. Switch - Case
    3. Operador ternario
2. Iteraciones Incondicionales
    1. for
    2. for in
    3. for of
    4. sentencias break y continue
3. Iteraciones condicionales
    1. do y while
4. Control de excepciones (errores)

## Condicionales

### If

Se evalúan una o distintas condiciones y en caso de cumplirse, se ejecuta un bloque de código.

```js
  const sayByAge = (age = 0) => {
    let msg = '';
    if (age < 12) {
      msg = 'Todavía eres muy pequeño';
    } else if (age < 19) {
      msg = 'Eres un adolescente';
    } else if (age < 35) {
      msg = 'Aun sigues siendo joven';
    } else {
      msg = 'Piensa en cuidarte un poco más';
    }
    return msg;
  };

  console.log(sayByAge(12));
  console.log(sayByAge(22));
  console.log(sayByAge(40));
```

Dentro de una función las condiciones pueden incluir directamente el retorno, con lo que se obvia cualquier comprobación posterior

```js
  const sayByAge = (age = 0) => {
    if (age < 12) {
      return 'Todavía eres muy pequeño';
    }
    if (age < 19) {
      return 'Eres un adolescente';
    }
    if (age < 35) {
      return 'Aun sigues siendo joven';
    }
    return 'Piensa en cuidarte un poco más';
  };

  console.log(sayByAge(12));
  console.log(sayByAge(22));
  console.log(sayByAge(40));
```

La **expresión** que acompaña al if entre paréntesis **siempre** se evalúa a **boolean**, incluso si no incluye ningún operador relacional

```js
  const isTrue = (value) => {
    const msg = `El valor ${value} se evalúa a `;
    if (value) return `${msg} verdadero`;
    return `${msg} falso`;
  };

  console.log(isTrue('Hola'));
  console.log(isTrue(''));
```

Cuando el bloque de código correspondiente a un if es un **return de una sola línea**, se pueden dejar de acotarlo mediante llaves ({})

### Operador ternario

En casos sencillos como el anterior, la evaluación de la condición puede hacerse mediante el uso del operador ternario

```js
  const isTrue = (value) => {
    const msg = `El valor ${value} se evalúa a `;
    if (value) return `${msg} verdadero`;
    return `${msg} falso`;
  };

  console.log(isTrue('Hola'));
  console.log(isTrue(''));
```

Al ser una expresión, la comparación mediante el operador ternario puede utilizarse directamente allí donde se espera una expresión, por ejemplo en un template string

```js
  const isTrue = (value) => {
    return `El valor ${value} se evalúa a ${value ? 'verdadero' : 'falso'}`;
  };

  console.log(isTrue('Hola'));
  console.log(isTrue(''));
```

### Switch - Case

Para realizar comprobaciones múltiples y tomar decisiones complejas, si estas dependen siempre dela misma variable, el repetido uso de if es redundante y puede sustituirse mediante la estructura de control switch

- La variable siempre la misma se indica al principio
- Cada case corresponde a un valor posible de dicha variable
- Si el case no incluye un break o un return, continuaran evaluándose los siguientes valores
- La inclusión de default es opcional
- La evaluación sigue el orden en que se escribe el código, por lo que dicho orden es determinante

```js

  const saySeason = (month) => {
    let season;
    switch (month) {
      case 'Octubre':
      case 'Noviembre':
      case 'Diciembre':
        season = 'Otoño';
        break;
      case 'Enero':
      case 'Febrero':
      case 'Marzo':
        season = 'Invierno';
        break;
      default:
        season = 'Primavera o Verano';
        break;
    }
    return season;
  };

  console.log(saySeason('Enero'));
  console.log(saySeason('Agosto'));
```

Si las condiciones forman parte de una función, el final de cada bloque de ejecución puede ser también un return, como ocurre en el caso de los if

```js
  const saySeason = (month) => {
    switch (month) {
      case 'Octubre':
      case 'Noviembre':
      case 'Diciembre':
        return 'Otoño';
      case 'Enero':
      case 'Febrero':
      case 'Marzo':
        return 'Invierno';
    }
    return 'Primavera o Verano';
  };

  console.log(saySeason('Enero'));
  console.log(saySeason('Agosto'));
```

La omisión del break permite agrupar código válido para varios valores, aunque esto mismo puede hacerse con el operador OR (||)

```js
  const saySeason = (month) => {
    switch (month) {
      case 'Octubre' || 'Noviembre' || 'Diciembre':
        return 'Otoño';
      case 'Enero' || 'Febrero' || 'Marzo':
        return 'Invierno';
    }
    return 'Primavera o Verano';
  };

  console.log(saySeason('Enero'));
  console.log(saySeason('Agosto'));
```

## Iteraciones incondicionales

Hay varios mecanismos de iteración (bucles) que se inician con un número de vueltas predefinidos en el código

### for

El bucle for recibe

- un contador, generalmente llamado i de índice
- un límite, que hace de condición de salida del bucle
- la actualización del contador al final de cada iteración

```js
  const mensaje = 'Hola, estoy dentro de un bucle';

  for (let i = 0; i < 5; i++) {
    console.log(mensaje, `en la vuelta ${i + 1}`);
  }
```

Las iteraciones son usadas con frecuencia para recorres estructuras iterables, como los strings y sobre todo los **arrays**

```js
  const weekDays = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  for (let i = 0; i < weekDays.length; i++) {
    console.log(weekDays[i]);
  }

  for (let i = weekDays.length - 1; i >= 0; i--) {
    console.log(weekDays[i]);
  }
```

### for of

[_🗓️ES2015_]

Es una variante del bucle for que apareció en ES6 y, de alguna manera, oculta su implementación, creando una variable (iterator) que va tomando sucesivamente el valor de cada uno de los items del array.

Podría decirse que es el equivalente del método foreach de los arrays.

```js
  const accumulate = (data) => {
    let accumulator = 0;
    for (const iterator of numbers) {
      console.log(iterator);
      accumulator += iterator;
    }
    return accumulator;
  };

  const numbers = [1, 2, 3, 4, 5, 6];

  console.log('El total es', accumulate(numbers)); // 21
```

### for in

Esta estructura permite recorrer un objeto, que en si no es iterable, obteniendo cada una de las claves o identificadores de las propiedades.
A partir de ahí, gracias a la notación [], se puede obtener cada uno de los correspondientes valores.

```js
  const showObject = (obj) => {
    for (const key in obj) {
      const value = obj[key];
      console.log(`La propiedad '${key}' vale ${value}`);
    }
  };

  const user = {
    name: 'Pepe',
    age: 22,
    course: 'Angular',
  };
  showObject(user);
```

Otra forma de permitir la iteración en objetos es convertirlos primero en arrays de pares clave valor, usando para ello el método Object.entries

```js
  const showObject = (obj) => {
    const entries = Object.entries(obj);

    for (const [key, value] of entries) {
      console.log(`La propiedad '${key}' vale ${value}`);
    }
  };

  const user = {
    name: 'Pepe',
    age: 22,
    course: 'Angular',
  };
  showObject(user);
```

El bucle for in también puede aplicarse a un array, siendo  en ese caso el indice del item lo que se recibe como key en cada una de las iteraciones, aunque sin garantizar que se respete el orden de los índices numéricos, por lo que este bucle no suele usarse con arrays.

```js
  const accumulate = (data) => {
    let accumulator = 0;
    for (const i in numbers) {
      console.log(data[i]);
      accumulator += data[i];
    }
    return accumulator;
  };

  const numbers = [10, 20, 30, 40, 50, 60];

  console.log('El total es', accumulate(numbers));
```

### sentencias break y continue

Permiten manipular el comportamiento normal de los bucles for, for-in y for-of

- break permite terminar de forma abrupta un bucle
- continue permite saltarse una repetición del bucle, pasando a la siguiente.

```js
  const useBreak = (text) => {
    let result = '';
    for (const item of text) {
      if (item === 'a') {
        break;
      }
      result += item;
    }
    return result;
  };
  const useContinue = (text) => {
    let result = '';
    for (const i in text) {
      if (text[i] == 'a') {
        continue;
      }
      result += text[i];
    }
    return result;
  };

  const text = 'En un lugar de la Mancha...';
  console.log(useBreak(text)); // En un lug
  console.log(useContinue(text)); // En un lugr de l Mnch...
```

## Iteraciones condicionales

Las iteraciones se ejecutan siempre que se siga cumpliendo la condición evaluada a partir de una expresión condicional

### do

La expresión condicional en previa a las iteraciones:
el bucle se ejecutan ninguna o más veces, dependiendo de la condición indicada

```js
  let resultado = 1;
  let numero = 5;
  do {
    resultado *= numero;
    numero--;
  } while (numero > 0);

  console.log(resultado); // 120
```

### while

La expresión condicional es posterior a cada una de las iteraciones:
el bucle se ejecutan una o más veces, ya que lo hace al menos la primera vez.

```js
  let resultado = 0;
  const numero = 100;
  let i = 0;
  while (i <= numero) {
    resultado += i;
    i++;
  }
  console.log(resultado); // 5050
```

## Control de excepciones (errores)

Los errores o excepciones son las situaciones que el interprete (engine) de JavaScrip no puede resolver, por lo que interrumpe la ejecución del código y muestra en consola la información correspondiente al error.

```js
// La función no existe
foo();

// foo();
// ^
// ReferenceError: foo is not defined
//     at file:///c:/Desarrollo/SkyLab/bootcamp-2023-07-mad/learn-JS/7-make-error.js:2:1     
//     at ModuleJob.run (node:internal/modules/esm/module_job:192:25)
```

Las gestión de errores o excepciones permite evitar que estas acaben descontroladas poniendo fin a la ejecución del programa. Para ello se utiliza la estructura try-catch

```js
  try {
    // La función no existe
    foo();
  } catch (error) {
    console.log(error.name); // ReferenceError
    console.log(error.message); // foo is not defined
  }
  console.log('Fin del programa'); // Fin del programa
```

La instrucción **try** delimita un bloque de código y captura cualquier error o excepción que se produzca, almacenándola en memoria para pasársela a la clausula catch .

La clausula **catch** define un parámetro de tipo **objeto Error** que recogerá los datos de la excepción.
Estos objetos incluyen las propiedades name, message y stack

### Excepciones provocadas

La instrucción **throw** permite desencadenar (raise) una excepción en respuesta a cualquier circunstancia elegida por el desarrollador

throw va seguido de una expresión que puede debe ser un **objeto Error**, creado como new Error() con el mensaje del error como parámetro, aunque también podría ser

- un literal con el mensaje del error
- un objeto literal con el nombre del error y el correspondiente mensaje 

La excepción desencadenada se comporta igual que cualquier error de javaScript, por lo que debe encontrarse dentro de un bloque try, para pasar el control a la clausula catch, qhe recibirá como para´metro el objeto error

```js
  const validateNumber = (x) => {
    if (x == '') throw new Error('empty');
    if (isNaN(x)) throw new Error('not a number');
    if (x > 10) throw new Error('too high');
    if (x < 5) throw new Error('too low');
    return x;
  };

  try {
    console.log(validateNumber(10)); // 10
    console.log(validateNumber(11)); // Error: too high
  } catch (error) {
    console.log('Error:', error.message);
  }
```
