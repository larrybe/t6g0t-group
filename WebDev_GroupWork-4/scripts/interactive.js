function covidToggle(){
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

function getVideos(){
    let vids = [
        document.querySelector("#wildfire-show video"),
        document.querySelector("#drogon video")
    ];
    return vids;
}

function playInFrameVideo() {
    let vids = getVideos();
    document.addEventListener("scroll", function () {
        for (var i = 0; i < vids.length; i++) {
            let playCount = parseInt(vids[i].getAttribute("data-play-count"));
            let maxReplays = parseInt(vids[i].getAttribute("data-max-replays"));
            if (videoInFrame(vids[i])) {
                if (playCount < maxReplays) {
                vids[i].play();
                }
            } else {
                vids[i].load();
                vids[i].setAttribute("data-play-count", 0);
            }
        }
    })
}

function videoInFrame(vid){
    let v_bounds = vid.getBoundingClientRect();
    if (window.innerHeight - v_bounds.top > 200 &&
        v_bounds.top + v_bounds.height > 100){
            return true;
    }
    return false;
}

function videoManager(){
    let vids = getVideos();
    for (var i = 0; i < vids.length; i++) {
        vids[i].addEventListener("ended", function(e){
            let playCount = parseInt(e.target.getAttribute("data-play-count"));
            let maxReplays = parseInt(e.target.getAttribute("data-max-replays"))
            e.target.setAttribute("data-play-count", ++playCount);
            if (playCount < maxReplays) {
                e.target.play();
            } else {
                e.target.load();
            }
        });

        vids[i].addEventListener("click", function(e) {
            let maxReplays = parseInt(e.target.getAttribute("data-max-replays"));
            if (e.target.paused) {
                e.target.play();
                e.target.setAttribute("data-play-count", 0);
            } else {
                e.target.load();
                e.target.setAttribute("data-play-count", maxReplays);
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    covidToggle();
    playInFrameVideo();
    videoManager();
})


