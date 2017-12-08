var markdown = document.querySelector('#markdown');
var html = document.querySelector('#html');
var preview = document.querySelector('#preview');
var copyBtn = document.querySelectorAll('.btn');
var mdTooltip = document.querySelector('.copy__tooltip--markdown');
var htmlTooltip = document.querySelector('.copy__tooltip--html');
var text = "";
var socket = io.connect('localhost:4000');
var md = "";
var htmlTxt = "";
var localData = JSON.parse(localStorage.getItem('_local')) || { markdown: md, html: htmlTxt };

socket.on('server response', function(response) {
    md = response.markdown;
    htmlTxt = response.html;
    localStorage.setItem('_local', JSON.stringify({
        markdown: md,
        html: htmlTxt
    }));
    html.value = htmlTxt;
    preview.innerHTML = htmlTxt;
});

document.addEventListener('DOMContentLoaded', function() {
        initCopy();
        markdown.value = localData.markdown;
        html.value = localData.html; 
        preview.innerHTML = localData.html;       
        
        markdown.addEventListener('input', function(e) {
        if (e.target.value !== text) {
            text = e.target.value;
            socket.emit('markdown', { data: text });
            
            /*
             *  Ajax implementation - see @ajax.js 
             */
            // ajaxParser();
            
        }
    })    
})