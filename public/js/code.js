var markdown = document.getElementById('markdown');
var html = document.getElementById('html');
var codeMarkdown;
var codeHTML;
var md = "";
var htmlTxt = "";
var localData = JSON.parse(localStorage.getItem('_local')) || { markdown: md, html: htmlTxt };

document.addEventListener('DOMContentLoaded', function() {
    codeMarkdown = CodeMirror.fromTextArea(markdown, {
        lineNumbers: true,
        mode: 'markdown',
        theme: 'monokai'
    });

    codeMarkdown.setOption('value', localData.markdown);

    codeHTML = CodeMirror.fromTextArea(html, {
        lineNumbers: true,
        mode: 'text/html',
        theme: 'monokai',
        value: localData.html,
        readOnly: 'nocursor'
    });

    codeHTML.setOption('value', localData.html);    
});