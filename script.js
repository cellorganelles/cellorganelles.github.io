var chars = document.getElementById("chars");
var currentChar;
var char = document.getElementById("char");
    var charName = document.getElementById("name");
    var organelle = document.getElementById("organelle");
    var quote = document.getElementById("quote");
    var image = document.getElementById("image");
    var desc = document.getElementById("desc");
    var jobs = document.getElementById("jobs");
    var infoBtn = document.getElementById("info-btn");
var info = document.getElementById("info");
    var iOrganelle = document.getElementById("info-organelle");
    var iImage = document.getElementById("info-image");
    var iText = document.getElementById("info-text");

var aboutBtn = document.getElementById("about-btn");
var about = document.getElementById("about");
    var aboutContent = document.getElementById("about-content");
    var menuBtns = document.getElementById("menu-btns");

var closeBtn = document.getElementById("close-btn");

var path = "";
if (!window.location.href.match("cellorganelles.github.io")) {
    path = "https://organelle.netlify.app/";
    console.log("not on github");
}

function showChar(c) {
    currentChar = c;
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
    image.src = path + c.name.toLowerCase() + "/1.png";
    desc.innerHTML = c.desc;
    jobs.innerHTML = c.jobs;
    h2 = document.getElementsByTagName("h2");
    for (let i of h2) {
        i.style.color = c.color;
        i.style.filter = "brightness(0.5)";
    }
    document.body.style.overflow = "hidden";
}

function showAbout() {
    setTimeout(function(){
        chars.style.visibility = "hidden";
    }, 500);
    about.style.opacity = 1;
    about.style.visibility = "visible";
    closeBtn.style.opacity = "";
    closeBtn.style.visibility = "visible";
    document.body.style.overflow = "hidden";
}
aboutBtn.onclick = showAbout;

function tab(t) {
    menuBtns.childNodes.forEach(function(i){
        if (i.innerHTML != null) {
            i.classList.remove("selected");
        }
    });
    aboutContent.childNodes.forEach(function(i){
        if (i.innerHTML != null) {
            i.style = "position: fixed; visibility: hidden";
        }
    });
    t.classList.add("selected");
    let txt = document.getElementById(t.dataset.name);
    txt.style = "position: static; visibility: visible";
}
menuBtns.childNodes.forEach(function(i){
    i.onclick = function(){tab(i)};
});

function showInfo() {
    info.style.opacity = 1;
    info.style.visibility = "visible";
    char.style.filter = "blur(5px)";
    infoBtn.style.opacity = 0;
    iOrganelle.innerHTML = currentChar.organelle;
    iImage.src = path + currentChar.name.toLowerCase() + "/organelle.png";
    iText.innerHTML = currentChar.info;
    if (currentChar.info == "") {
        iText.innerHTML = "wip";
    }
    setTimeout(function(){
        char.onclick = hideInfo;
        infoBtn.style.visibility = "hidden";
    }, 500);
}
infoBtn.onclick = showInfo;

function hideInfo() {
    char.onclick = null;
    if (info.style.opacity == 1) {
        info.style.opacity = 0;
        char.style.filter = "";
        infoBtn.style.visibility = "visible";
        infoBtn.style.opacity = 1;
        setTimeout(function(){
            info.style.visibility = "hidden";
        }, 500);
    }
}

function hide() {
    if (info.style.opacity == 0) {
        currentChar = null;
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
        document.body.style.overflow = "auto";
    } else {
        hideInfo();
    }
}
closeBtn.onclick = hide;

document.body.style.height = window.innerHeight + "px";