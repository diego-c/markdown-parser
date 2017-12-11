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
      
            //html.style.display='block';
            previewFrame.style.display = 'none';
            mirror.style.display='block';
        } else {
            this.classList.add('backgroundColorOn');
            this.classList.remove('backgroundColorOff');
            togglerOuter.classList.add('ripple');
            togglerOuter.classList.add('on');
            togglerOuter.classList.remove('off'); 
            
            //html.style.display='none';
            previewFrame.style.display = 'block';
            mirror.style.display='none';
        }  
      });
})
