var hash = window.location.hash.replace('#', '');

var json = {};

json.Abc = "http://google.com/";

if(json[hash])
{
    window.location.href = json[hash];
}

