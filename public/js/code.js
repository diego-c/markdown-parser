var markdown = document.getElementById('markdown');
var html = document.getElementById('html');
var codeMarkdown;
var codeHTML;
var md = "";
var htmlTxt = "";
var localData = JSON.parse(localStorage.getItem('_local')) || { markdown: md, html: htmlTxt, theme: 'monokai' };

document.addEventListener('DOMContentLoaded', function() {
    codeMarkdown = CodeMirror.fromTextArea(markdown, {
        lineNumbers: true,
        mode: 'markdown',
        theme: localData.theme,
        cursorHeight: .7
    });

    codeMarkdown.setOption('value', localData.markdown);
    codeMarkdown.setOption('lineWrapping', true);

    codeHTML = CodeMirror.fromTextArea(html, {
        lineNumbers: true,
        mode: 'text/html',
        theme: localData.theme,
        value: localData.html,
        readOnly: 'nocursor'
    });

    codeHTML.setOption('value', localData.html); 
    codeHTML.setOption('lineWrapping', true);   

    // what would be the best way to adjust the cursor position through the inline style? 
    // events such as 'change', 'update', 'keypress', 'keyup', etc. don't seem to be working properly
    // neither does css through !important, since the position of the cursor is always relative to .CodeMirror-cursors

    codeMarkdown.on('focus', function() {
        var cursor = document.querySelector('.CodeMirror-cursor');
        cursor.style.top = '.45rem';
    });
});