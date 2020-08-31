theUrl = "https://api.covid19api.com/summary";
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", theUrl, false );
xmlHttp.send( null );
var obj =  xmlHttp.responseText
chuoi = JSON.parse(obj);


//---------------today-----------------------------
world = chuoi.Global;
var keys = Object.keys(world)
var x=document.getElementsByClassName("title-now");
var y=document.getElementsByClassName("text-now");

x[0].innerHTML = keys[0];
y[0].innerHTML = (numberWithCommas(world[keys[0]]));
x[1].innerHTML = keys[1];
y[1].innerHTML = (numberWithCommas(world[keys[1]]));
x[2].innerHTML = keys[2];
y[2].innerHTML = (numberWithCommas(world[keys[2]]));
x[3].innerHTML = keys[3];
y[3].innerHTML = (numberWithCommas(world[keys[3]]));
//--------------------------------------------------


// ----------------detail--------------------------
var ctry = chuoi.Countries;
var listCountry = [];
for(var i =0; i< ctry.length;i++){
    if(ctry[i].CountryCode=='US'){
        listCountry.push(i);
    }
    if(ctry[i].CountryCode=='BR'){
        listCountry.push(i);

    }
    if(ctry[i].CountryCode=='VN'){
        listCountry.push(i);

    }
}
var dlt_title = document.getElementsByClassName("dtl-card");
for ( var i =0; i<dlt_title.length;i++)
    {
    title = dlt_title[i].getElementsByClassName("card-title");
    title_num = dlt_title[i].getElementsByClassName("title-num");
    total =  dlt_title[i].getElementsByClassName("text-muted");
    title[0].innerHTML = ctry[listCountry[i]].Country;
    title_num[0].innerHTML = numberWithCommas(ctry[listCountry[i]].NewConfirmed);
    title_num[1].innerHTML = numberWithCommas(ctry[listCountry[i]].NewDeaths);
    title_num[2].innerHTML = numberWithCommas(ctry[listCountry[i]].NewRecovered);
    title_num[3].innerHTML = numberWithCommas(ctry[listCountry[i]].TotalDeaths);
    total[0].innerHTML = numberWithCommas(ctry[listCountry[i]].TotalConfirmed);
    }


//--------------------------------------------------

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var ctxP = document.getElementById("myChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
type: 'pie',
data: {
labels: ["Nhiễm", "Phục hồi", "Chết"],
datasets: [{
data: [ctry[listCountry[2]].TotalConfirmed-ctry[listCountry[2]].TotalRecovered-ctry[listCountry[2]].TotalDeaths,ctry[listCountry[2]].TotalRecovered,ctry[listCountry[2]].TotalDeaths],
backgroundColor: ["#F25C05", "#495F8C", "#4D5360"],
hoverBackgroundColor: ["#c74a02", "#3d4f75","#616774"]
}]
},
options: {
responsive: true
}
});
