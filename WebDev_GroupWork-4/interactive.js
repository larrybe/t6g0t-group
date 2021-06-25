function onReady(){
    let toggle = document.querySelector("#covid-info-expand");
    toggle.addEventListener("click", function(e){
        toggleCovidInfo();
    })
}

function toggleCovidInfo(){
    let covidInfo = document.querySelector("#covid-info");
    let covidExpanded = covidInfo.getAttribute("data-covid-info") == "expanded"
    if(covidExpanded) {
        covidInfo.setAttribute("data-covid-info", "collapsed");
        document.querySelector("#covid-info-expand").innerText = "View";
    } else {
        covidInfo.setAttribute("data-covid-info", "expanded");
        document.querySelector("#covid-info-expand").innerText = "Hide";
    }
}

document.addEventListener("DOMContentLoaded", onReady)


