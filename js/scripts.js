var localStorage = window.localStorage;
var Sessiontoken = (localStorage.getItem('token')) ? localStorage.getItem('token') : false
var instance = axios.create({
    baseURL : "http://localhost:3333",
    //headers: {'Content-Type': 'application/json', 'x-access-token' : Sessiontoken }
})
const setCookie = function(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
