# Módulos

[_🗓️ES2015_]

En ES6 se incorpora un nuevo formato de módulos ESM, que viene a sustituir al formato CommonJS Module, utilizado por algunas aplicaciones como Node. 

Para usarlo en **HTML** es necesario indicar el **type=module** del script

```html
  <script src="index.js" type="module">
```

Para usarlo en **Node** es necesario indicar el **type=module** en el fichero de configuración del proyecto, **package.json**

```json
  //package.json
  {
    "type": "module",
  }
```

Los módulos son archivos que exportan funciones (y/o variables).
Los elementos exportados pueden serlo de dos formas

- por defecto (sin nombre) se puede exportar un sólo elemento
- por su nombre se pueden exportar todos los elementos deseados
- los elementos de uso interno del módulo no se exportan

```js
  export const foo1 = () => {
    fooInternal();
    console.log('Soy foo1');
  };

  export const foo2 = () => {
    fooInternal();
    console.log('Soy foo2');
  };

  export const foo3 = () => {
    console.log('Soy foo3');
  };

  const fooInternal = () => {
    console.log('Soy fooInternal');
  };

  export default foo1;
```

Los módulos pueden ser **importados** en otros módulos que necesitan hacer uso de su funcionalidad

Al igual que en la exportación, hay dos tipos de import:

- Sin nombre, importa lo exportado por defecto
- Con nombre, importa lo exportado con nombre

```js
import foo1, { foo2, foo3 } from './5-module.js';

foo1();
foo2();
foo3();
// Soy fooInternal
// Soy foo1
// Soy fooInternal
// Soy foo2
// Soy foo3
```

## Importación dinámica

[_🗓️ES2020_]: dynamic import

Inicialmente los ESModules sólo podían ser importados estáticamente, al inicio de la carga de otros módulos.

Más adelante aparece la posibilidad de hacerlo dinámicamente: en cualquier punto del código, al hacerse necesaria una funcionalidad de otro módulo, se puede ejecutar la función `import()` que realizara la importación

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic ESM Sample</title>
</head>

<body>
  <nav>
    <a href="books.html" data-src-module="books">Books</a>
    <a href="movies.html" data-src-module="movies">Movies</a>
    <a href="games.html" data-src-module="games">Video Games</a>
  </nav>

  <main>Content will load here!</main>

  <script>
    const main = document.querySelector("main");
    const menuLinks = document.querySelectorAll("nav > a")
    const handleClick = async (event) => {
      event.preventDefault();
      const link = event.target;
      try {
        const module = await import(`./section-modules/${link.dataset.srcModule}.js`);
        module.loadPageInto(main);
      } catch (error) {
        main.innerHTML = `<p class="error">${error.message}</p>`;
      }
    }

    for (const link of menuLinks) {
      link.addEventListener("click", handleClick);
    }
  </script>
</body>

</html>
```

En este ejemplo la carga de los módulos esta siendo 'lazy', ya que sólo se produce la primera vez que son requeridos en respuesta a la interacción del usuario con el menu.

## Metadatos de los módulos

[_🗓️ES2020_]

El objeto import.meta tiene la propiedad url indicando la URL base del módulo. Esta será:

- la URL de la que el script fue obtenido, por scripts externos, o
- la URL base del documento que contiene el documento, por scripts inline.
