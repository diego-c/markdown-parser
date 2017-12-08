const requires = require('../packages/require');

module.exports = requires.io.on('connection', socket => {    
    socket.on('markdown', response => {
        const markdown = response.data;
        const html = requires.md.render(markdown);
        socket.emit('server response', { markdown: markdown, html: html });
    });
});