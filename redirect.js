var hash = window.location.hash.replace('#', '');

var json = {};

console.log("red" + document.referrer);

json.Abc = "http://google.com/";

if(json[hash])
{
    window.location.href = json[hash];
}

