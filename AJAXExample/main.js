document.getElementById('button-get').addEventListener('click', getAjax);

function getAjax() {
    const xhr = new XMLHttpRequest(); //XMLHttpRequest object can be used to request data from a web server.

    console.log(xhr)

        xhr.onload = () => { //Wykona sie pozaladowaniu ("onload")
            if (xhr.status === 200) { //Sprawdza czy status odpowiedzi z serwera to 200 (OK)
                document.getElementById('response').textContent = xhr.responseText;
        }
    }
    xhr.open('GET', 'text.txt', true); //Methoda, URL, bool (false,true)
    xhr.send();
}