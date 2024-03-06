# Learning JS

Información y ejemplos del Bootcamp de ISDI-Coders

## Configuración del entorno

Previamente instalados

- [Node.js](https://nodejs.org/es/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Instalación de ESLint

```bash
npm i -D eslint
npx eslint --init
npm i -D eslint-config-prettier
```

En el fichero .eslintrc.json añadir:

```json
{
  "extends": ["xo", "prettier"]
}
```

El fichero .eslintrc.json quedaría así:

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": ["xo", "prettier"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

### Instalación de Jest

```bash
npm i -D jest @types/jest
npm i -D @babel/plugin-transform-modules-commonjs
```

Configurar Babel en el fichero package.json

```json
"babel": {
    "env": {
      "test": {
        "plugins": [
          "@babel/plugin-transform-modules-commonjs"
        ]
      }
    }
  }
```

Para que ESLint no de errores con Jest,
en el fichero .eslintrc.json añadir:

```json
{
  "env": {
    ...
    "jest": true
  },
  ...
}
```

Para que Jest muestre los matchers, además de haber instalado @types/jest, configuramos el fichero jsconfig.json

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

Finalmente, en el fichero package.json añadimos los scrips necesarios con las distintas opciones de test:

```json
    "test": "jest",
    "test:dev": "jest --watchAll",
```
