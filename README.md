# Simple Markdown Parser

A real-time markdown -> HTML parser. The content is always saved in local storage, not on the server.


## Technologies used:

:arrow_forward: Frontend:
- HTML
- (S)CSS 
- JavaScript


:arrow_backward: Backend:

- Node.js
- Express
- socket.io
- markdown-it
- Redis (experimental cookie storage, not currently being used in the website)


## Local build

1. Install dependencies (nodemon is required to be installed globally): `npm install`
2. Start RedisDB server: `redis-server &`
3. Specify RedisDB `host` and `port` on `db/connection.js`
4. Compile SCSS (watching changes): `npm run compile`
5. Start the server on port 4000: `npm run serve`


## Suggested improvements:

- ~~Add syntax highlighting~~ (:white_check_mark: Added CodeMirror)
- Theme selection (Monokai is the current one)
- Style the preview iframe

## License

The MIT License

Copyright (c) 2017 diego-c

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
