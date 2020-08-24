theUrl = "https://api.covid19api.com/summary";
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", theUrl, false );
xmlHttp.send( null );
var obj =  xmlHttp.responseText
chuoi = JSON.parse(obj);

var x=document.getElementsByClassName("head_card");
var y=document.getElementsByClassName("number");


world = chuoi.Global;
var keys = Object.keys(world);
x[0].innerHTML = keys[0];
y[0].innerHTML = (numberWithCommas(world[keys[0]]));
x[1].innerHTML = keys[1];
y[1].innerHTML = (numberWithCommas(world[keys[1]]));
x[2].innerHTML = keys[2];
y[2].innerHTML = (numberWithCommas(world[keys[2]]));
x[3].innerHTML = keys[3];
y[3].innerHTML = (numberWithCommas(world[keys[3]]));




function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}