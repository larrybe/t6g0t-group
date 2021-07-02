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
        {
            vid: document.querySelector("#wildfire-show video"),
            img: document.querySelector("#wildfire-img-overlay")
        },
        {
            vid: document.querySelector("#drogon video"),
            img: document.querySelector("#drogon-img")
        }
    ];
    return vids;
}

function playInFrameVideo() {
    let vids = getVideos();
    document.addEventListener("scroll", function () {
        for (var i = 0; i < vids.length; i++) {
            let playCount = parseInt(vids[i].vid.getAttribute("data-play-count"));
            let maxReplays = parseInt(vids[i].vid.getAttribute("data-max-replays"));
            if (videoInFrame(vids[i].vid)) {
                if (playCount < maxReplays) {
                playVideo(vids[i]);
                }
            } else {
                vids[i].vid.setAttribute("data-play-count", 0);
                stopVideo(vids[i]);
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
        videoEnded(vids[i]);
        overlayClick(vids[i]);
    }
}

function playVideo(v){
    v.vid.play();
    v.img.style.opacity = 0;
}

function stopVideo(v){
    v.vid.pause();
    v.vid.currentTime = 0;
    v.img.style.opacity = 1;
}

function overlayClick(v) {
    v.img.addEventListener("click", function () {
        let maxReplays = parseInt(v.vid.getAttribute("data-max-replays"));
        if (v.vid.paused) {
            playVideo(v);
            v.vid.setAttribute("data-play-count", 0);
        } else {
            stopVideo(v);
            v.vid.setAttribute("data-play-count", maxReplays);
        }
    })
}

function videoEnded(v){
    v.vid.addEventListener("ended", function(e){
        let playCount = parseInt(e.target.getAttribute("data-play-count"));
        let maxReplays = parseInt(e.target.getAttribute("data-max-replays"))
        e.target.setAttribute("data-play-count", ++playCount);
        if (playCount < maxReplays) {
            playVideo(v);
        } else {
            stopVideo(v);
        }
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    covidToggle();
    playInFrameVideo();
    videoManager();
})


