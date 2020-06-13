function off(){
    const Http = new XMLHttpRequest();
    const url='http://192.168.0.200:3000/off';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}


function on(){
    const Http = new XMLHttpRequest();
    const url='http://192.168.0.200:3000/on';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}