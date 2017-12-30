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
        cursorHeight: .8
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
});