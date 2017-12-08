/*
 * Using AJAX - new requests on every keypress!
 */ 

/*
function ajaxParser() {
    var json = JSON.stringify({
    text: text
    });

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (this.status === 200) {
            html.innerHTML = this.responseText;
        } else {
            throw new Error('Oops, could not complete request!');
        }
    }

    xhr.onerror = function(e) {
        console.log(e.message);
    }

    xhr.send(json);
}
*/