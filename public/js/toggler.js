var toggler = document.querySelector('.toggler');
var togglerOuter = document.querySelector('.toggler--outer');
var htmlCopy = document.querySelector('#html-copy');

document.addEventListener('DOMContentLoaded', function() {
    var mirror = document.getElementsByClassName('CodeMirror')[1];

    toggler.addEventListener('click', function() {
        if (togglerOuter.classList.contains('on')) {
            this.classList.remove('backgroundColorOn');
            this.classList.add('backgroundColorOff');
            togglerOuter.classList.remove('ripple');
            togglerOuter.classList.remove('on');
            togglerOuter.classList.add('off');      
            
            previewFrame.style.display = 'none';
            mirror.style.display='block';

            var t = setTimeout(function() {
                codeHTML.refresh();
                clearTimeout(t);
            },1);            
            
        } else {
            this.classList.add('backgroundColorOn');
            this.classList.remove('backgroundColorOff');
            togglerOuter.classList.add('ripple');
            togglerOuter.classList.add('on');
            togglerOuter.classList.remove('off'); 

            previewFrame.style.display = 'block';
            mirror.style.display='none';
        }  
      });
})
