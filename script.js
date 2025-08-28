var chars = document.getElementById("chars");
var char = document.getElementById("char");
    var charName = document.getElementById("name");
    var closeBtn = document.getElementById("close-btn");

const characters = [
    /*
    {name: "", desc: ""},
    */
    {name: "Cecilia", desc: "otori dessssuuuu"},
    {name: "Cistern", desc: "totally tubular"},
    {name: "Cristy", desc: "why so serious"},
    {name: "Dista", desc: "YAYAYAYAYAY"},
    {name: "Endo", desc: "stay away from me"},
    {name: "Gigi", desc: "lil shy boi"},
]

characters.forEach(function(i){
    let icon = document.createElement("div");
    icon.classList.add("char");
    icon.title = i.desc;
    icon.onclick = function(){display(i)}
    let name = document.createElement("span");
    name.classList.add("name");
    name.innerHTML = i.name;
    icon.appendChild(name);
    chars.appendChild(icon);
})

function display(c) {
    char.style.opacity = "1";
    char.style.visibility = "visible";
    charName.innerHTML = c.name;
}

function close() {
    char.style.opacity = "0";
    setTimeout(function(){
        char.style.visibility = "hidden";
        charName.innerHTML = "";
    }, 500);
}
closeBtn.onclick = close;

document.body.style.height = window.innerHeight + "px"