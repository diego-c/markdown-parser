var toggler = document.querySelector('.toggler');
var togglerOuter = document.querySelector('.toggler--outer');
var previewArea = document.querySelector('.preview__area');
var htmlCopy = document.querySelector('#html-copy');

toggler.addEventListener('click', function() {
  if (togglerOuter.classList.contains('on')) {
      this.classList.remove('backgroundColorOn');
      this.classList.add('backgroundColorOff');
      togglerOuter.classList.remove('ripple');
      togglerOuter.classList.remove('on');
      togglerOuter.classList.add('off');

      html.style.display='block';
      previewArea.style.display = 'none';
      htmlCopy.style.display='block';
  } else {
      this.classList.add('backgroundColorOn');
      this.classList.remove('backgroundColorOff');
      togglerOuter.classList.add('ripple');
      togglerOuter.classList.add('on');
      togglerOuter.classList.remove('off'); 
      
      html.style.display='none';
      previewArea.style.display = 'block';
      htmlCopy.style.display='none';
  }  
});