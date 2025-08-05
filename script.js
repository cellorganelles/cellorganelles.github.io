var chars = document.getElementById("chars");

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
    let name = document.createElement("span");
    name.classList.add("name");
    name.innerHTML = i.name;
    icon.appendChild(name);
    chars.appendChild(icon);
})