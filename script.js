var chars = document.getElementById("chars");
var char = document.getElementById("char");
    var charName = document.getElementById("name");
    var organelle = document.getElementById("organelle");
    var quote = document.getElementById("quote");
    var image = document.getElementById("image");
    var desc = document.getElementById("desc");
    var jobs = document.getElementById("jobs");
    var closeBtn = document.getElementById("close-btn");

function display(c) {
    setTimeout(function(){
        chars.style.visibility = "hidden";
    }, 500);
    char.style.opacity = "1";
    char.style.visibility = "visible";
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
    char.style.opacity = "0";
    setTimeout(function(){
        char.style.visibility = "hidden";
        charName.innerHTML = "";
    }, 500);
}
closeBtn.onclick = hide;

document.body.style.height = window.innerHeight + "px";