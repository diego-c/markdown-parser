function initCopy() {
Array.prototype.slice.call(copyBtn).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        
        var txt;

        if (document.execCommand && typeof document.execCommand == 'function') {
            if (e.target.parentNode.parentNode.className === 'markdown') {
                txt = codeMarkdown.getValue();
                revealTooltip(mdTooltip);
            } else {
                txt = codeHTML.getValue();
                revealTooltip(htmlTooltip);
            }
        } else {
            alert("Sorry, your browser doesn't support this feature 😣");
        }        

        var x = window.scrollX;
        var y = window.scrollY;

        var txtArea = document.createElement('textarea');
        document.body.appendChild(txtArea);
        txtArea.value = txt;
        txtArea.focus();
        window.scrollTo(x, y);
        txtArea.select();
        document.execCommand('copy');

        txtArea.remove();
             
    });
});
}

function revealTooltip(currentTooltip) {
    currentTooltip.classList.add('slideLeft');
    var time = setTimeout(function() {
        currentTooltip.classList.remove('slideLeft');
        clearTimeout(time);
    }, 3000);
}