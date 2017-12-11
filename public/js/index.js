var previewFrame = document.querySelector('#preview');
var copyBtn = document.querySelectorAll('.btn');
var mdTooltip = document.querySelector('.copy__tooltip--markdown');
var htmlTooltip = document.querySelector('.copy__tooltip--html');
var text = "";
var socket = io.connect('localhost:4000');

socket.on('server response', function(response) {
    md = response.markdown;
    htmlTxt = response.html;
    localStorage.setItem('_local', JSON.stringify({
        markdown: md,
        html: htmlTxt,
        theme: currentTheme
    }));
    codeHTML.setOption('value', htmlTxt);
    getPreview(codeHTML);
});

function getPreview(content) {
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(content.getValue());
    preview.close();
}

function stylePreview() {
    var link = document.createElement('link');
    link.href = "preview.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document.head.appendChild(link);
}
document.addEventListener('DOMContentLoaded', function() {
        initCopy();
        pickTheme(localData.theme);
        stylePreview();
        getPreview(codeHTML);        
        
        codeMarkdown.on('change', function() {
            text = codeMarkdown.getValue('');
            socket.emit('markdown', { data: text });
        })       
        
   
            /*
             *  Ajax implementation - see @ajax.js 
             *  ajaxParser();
             */
})