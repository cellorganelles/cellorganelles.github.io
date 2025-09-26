var chars = document.getElementById("chars");
var char = document.getElementById("char");
    var charName = document.getElementById("name");
    var organelle = document.getElementById("organelle");
    var quote = document.getElementById("quote");
    var image = document.getElementById("image");
    var desc = document.getElementById("desc");
    var jobs = document.getElementById("jobs");
var closeBtn = document.getElementById("close-btn");

var aboutBtn = document.getElementById("about-btn");
var about = document.getElementById("about");

function showChar(c) {
    setTimeout(function(){
        chars.style.visibility = "hidden";
    }, 500);
    char.style.opacity = 1;
    char.style.visibility = "visible";
    closeBtn.style.opacity = 0.5;
    closeBtn.style.visibility = "visible";
    charName.innerHTML = c.name;
    charName.style.color = c.color;
    organelle.innerHTML = c.organelle;
    quote.innerHTML = c.quote;
    quote.style.color = c.color;
    image.src = "/" + c.name.toLowerCase() + "/1.png";
    desc.innerHTML = c.desc;
    jobs.innerHTML = c.jobs;
    h2 = document.getElementsByTagName("h2");
    for (let i of h2) {
        i.style.color = c.color;
        i.style.filter = "brightness(0.5)";
    }
}

function hide() {
    chars.style.visibility = "visible";
    char.style.opacity = 0;
    about.style.opacity = 0;
    closeBtn.style.opacity = 0;
    setTimeout(function(){
        char.style.visibility = "hidden";
        charName.innerHTML = "";
        about.style.visibility = "hidden";
        closeBtn.style.visibility = "hidden";
    }, 500);
}
closeBtn.onclick = hide;

function showAbout() {
    setTimeout(function(){
        chars.style.visibility = "hidden";
    }, 500);
    about.style.opacity = 1;
    about.style.visibility = "visible";
    closeBtn.style.opacity = "";
    closeBtn.style.visibility = "visible";
}
aboutBtn.onclick = showAbout;

document.body.style.height = window.innerHeight + "px";