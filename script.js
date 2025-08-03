var chars = document.getElementById("chars");

const characters = [
    /*
    {name: "", desc: ""},
    */
    {name: "Cecilia", desc: "otori dessssuuuu"},
    {name: "Cistern", desc: "totally tubular"},
]

characters.forEach(function(i){
    let icon = document.createElement("div");
    icon.classList.add("char");
    let name = document.createElement("span");
    name.innerHTML = i.name;
    icon.appendChild(name);
    chars.appendChild(icon);
})