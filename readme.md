# Learning JS

Información y ejemplos del Bootcamp de ISDI-Coders

## Configuración del entorno

Previamente instalados

- [Node.js](https://nodejs.org/es/)
- [Visual Studio Code](https://code.visualstudio.com/)

- Instalación de ESLint

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
