# Simple Markdown Parser

A real-time markdown -> HTML parser. The content is always saved in local storage, not on the server.


## Technologies used:

:arrow_forward: Frontend:
- HTML
- CSS 
- JavaScript


:arrow_backward: Backend:

- Node.js
- Express
- socket.io
- markdown-it
- Redis (experimental cookie storage, not currently being used in the website)


## Local build

1. Install dependencies: `npm install`
2. Change the stylesheet link in `views/index.html` to: `<link rel="stylesheet" href="./css/style.css">`
3. Compile SCSS (watching changes): `npm run compile`
4. Start the server on port 4000: `npm run serve`


## Suggested improvements:

- Add syntax highlighting
- Theme selection (Monokai is the current one)
