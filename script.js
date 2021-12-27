let url = "https://api.covid19api.com/summary";
const NewConfirmed = document.getElementById("NewConfirmed");
const NewRecovered = document.getElementById("NewRecovered");
const NewDeaths = document.getElementById("NewDeaths");
const TotalConfirmed = document.getElementById("TotalConfirmed");
const TotalRecovered = document.getElementById("TotalRecovered");
const TotalDeaths = document.getElementById("TotalDeaths");

function RefreshData() {
    fetch(url) 
    .then(response => response.json())
    .then(json => {
        const new_confirmed = json.Global.NewConfirmed;
        const new_recovered = json.Global.NewRecovered;
        const new_deaths = json.Global.NewDeaths;
        const total_confirmed = json.Global.TotalConfirmed;
        const total_recovered = json.Global.TotalRecovered;
        const total_deaths = json.Global.TotalDeaths;

        console.log(json.Global);

        NewConfirmed.innerText = "Cases Reported Today: " + new_confirmed;
        NewRecovered.innerText = "Cases Recovered Today: " + new_recovered;
        NewDeaths.innerText = "Deaths Reported Today: " + new_deaths;
        TotalConfirmed.innerText = "Total Cases Reported: " + total_confirmed;
        TotalRecovered.innerText = "Total Recovered Cases " + total_recovered;
        TotalDeaths.innerText = "Total Deaths Reported: " + total_deaths;
    })
    .catch(err => console.log(err));
}
