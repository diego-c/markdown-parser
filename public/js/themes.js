var themes = document.getElementById('themes-picker');
var currentTheme = localData.theme;

document.addEventListener('DOMContentLoaded', function() {
    themes.addEventListener('change', function(e) {
        var selected = e.target.value.split(' ').join('-').toLowerCase();       
        pickTheme(selected);
    });
});

function pickTheme(t) {
    var formattedTheme = t.split('-').map(function (word) {
        return word[0].toUpperCase().concat(word.slice(1));
    }).join(' ');
    
    themes.value = formattedTheme;

    codeMarkdown.setOption('theme', t);
    codeHTML.setOption('theme', t);
    
    currentTheme = t;

    localStorage.setItem('_local', JSON.stringify({
        markdown: codeMarkdown.getValue(),
        html: codeHTML.getValue(),
        theme: currentTheme
    }));
}
