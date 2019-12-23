var xmlhttp;
const PREFIX_REQUEST = 'http://127.0.0.1:8081/';
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
} else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

//参数处理
function paramResult(data) {
    var param = "";
    var count = 0;
    for (var x in data) {
        var paramO = x + "=" + data[x];
        if (count > 0) {
            param += "&" + paramO
        } else {
            param += paramO;
        }
        count++;
    }
    return param;
}
//get请求方式
function get_request(url, data) {
    var param = "?" + paramResult(data);
    xmlhttp.open('GET', PREFIX_REQUEST + url + param);
    var token = window.localStorage.token ? window.localStorage.token : '';
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("authorization", token);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
        }
    };
    xmlhttp.send();
}
//post请求方式
function post_request(url, data) {
    xmlhttp.open('POST', PREFIX_REQUEST + url);
    var token = window.localStorage.token ? window.localStorage.token : '';
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("authorization", token);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
        }
    };
    xmlhttp.send(paramResult(data));
}

