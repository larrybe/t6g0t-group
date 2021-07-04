//To create tabs
//This is adapted from an example of how to create toggleable tabs at W3schools. https://www.w3schools.com/howto/howto_js_tabs.asp 
function openSign(evt, signName) {
    // Declare the variables
    var i, tabcontent, tablinks;

    // Retrieves and hides those elements with class "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Retrieves those elements with class="tablinks" and removes the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Shows current tab, and gives button which opened that tab the class "active"
    document.getElementById(signName).style.display = "block";
    evt.currentTarget.className += " active";

}
//Chatbox
//Opens chatbox
function openForm() {
    document.getElementById("messageForm").style.display = "block";
}
//Closes chatbox by hiding it      
function closeForm() {
    document.getElementById("messageForm").style.display = "none";
}
//Finds all elements in page which overhang. This was taken from Chris Coyler, https://css-tricks.com/findingfixing-unintended-body-overflow/ 
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
document.querySelectorAll('*'),
function(el) {
    if (el.offsetWidth > docWidth) {
        console.log(el);
    }
}
);
//Helps synchronise loading and parsing of the initial HTML document with the event
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("defaultOpen").click();
})
