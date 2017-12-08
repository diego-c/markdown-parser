function initCopy() {
Array.prototype.slice.call(copyBtn).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        var parent = e.target.parentNode.parentNode;
        var txt = parent.querySelector('.textarea');
        
        txt.select();

        try {
            document.execCommand('copy');
            console.log(txt);
            txt.id === 'markdown' ? revealTooltip(mdTooltip) : revealTooltip(htmlTooltip);           
            
        } catch (err) {
            console.log('Oops, unable to copy');
        }            
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