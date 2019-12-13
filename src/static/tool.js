var xmlhttp;
const PREFIX_REQUEST = 'http://127.0.0.1:8081/';
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
} else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

function get_request(url, data) {
    xmlhttp.open('GET', PREFIX_REQUEST + url);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("authorization", window.localStorage.token);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
        }
    };

    xmlhttp.send(data);
}

// function request(url, type, data) {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         // IE6, IE5 浏览器执行代码
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.open(type, PREFIX_REQUEST+url);
//
//     xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             console.log(xmlhttp.responseText);
//         }
//     }
//     xmlhttp.send('msg=大萨达打');
// }

