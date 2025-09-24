const characters = [
    /*
    {
        name: "",
        organelle: "",
        quote: "",
        desc: "", 
        jobs: "",
        color: "",
    },
    */
    {
        name: "Cecilia",
        organelle: "Cilia/Pili",
        quote: "All cleaaaar~",
        desc: "A soft-hearted girl who's always cheerful. She speaks really slowly, and her passivity sometimes gets her into trouble.<br><br>She's close friends with Flynn.",
        jobs: "She works outside of the facility, in a central watch tower on top of the building. It's a control center that operates giant mechanical \"arms\" (ones she calls \"Silly Towers\"), regulating exports and things that pass by the CELL.<br><br>She essentially guards the facility alongside Rane.",
        color: "rgb(230, 245, 130)",
    },
    {
        name: "Cistern",
        organelle: "Smooth ER",
        quote: "Yo! Need help with that?",
        desc: "A chill, laid-back guy. He sometimes acts a little shady though.<br><br>Twins with Lumen, but he's slightly older. He's also the older brother of Gigi.",
        jobs: "He works in a building connected to the main office. He's responsible for producing the CELL's lipid supply, including the phiphi that make up the walls.<br><br>His station is also a water treatment plant, ensuring no toxic substances end up in their systems.",
        color: "rgb(120, 145, 255)",
    },
    {
        name: "Cristy",
        organelle: "Mitochondria",
        quote: "I'm busy right now, tell me later.",
        desc: "She maintains a serious attitude, but it's only surface-level. She's stubborn on occassion and a bit of a coffee addict. Few know that her opinion could be swayed with sweets.<br><br>She's cousins with Grana.",
        jobs: "She manages the power supply (yes, the powerhouse), using sugars and Oxi to generate energy. She works long shifts that go late into the night until someone pries her away.",
        color: "rgb(255, 215, 50)",
    },
    {
        name: "Dista",
        organelle: "Centriole",
        quote: "Alright, let's get this started!!!",
        desc: "A super chaotic girl. She's attention-seeking, but she likes helping others. Almost always, though, her efforts make things worse.<br><br>Twins with Proxima.",
        jobs: "mitosis",
        color: "rgb(235, 105, 210)",
    },
    {
        name: "Endo",
        organelle: "Endosome",
        quote: "If this isn't important, leave.",
        desc: "Cold-hearted and careless.",
        jobs: "transfers stuff",
        color: "#AAAAAA",
    },
    {
        name: "Gigi",
        organelle: "Golgi apparatus",
        quote: "H-Huh? Oh… sorry.",
        desc: "he's willy shy >///<",
        jobs: "packages and ships proteins & lipids for export",
        color: "rgb(255, 210, 135)",
    },
    {
        name: "Grana",
        organelle: "Chloroplast",
        quote: "Cookies are ready! Wanna try?",
        desc: "so happy",
        jobs: "sunlight into sugar!!",
        color: "rgb(100, 235, 100)",
    },
    {
        name: "Flynn",
        organelle: "Flagella",
        quote: "Whoops! Didn't see you there!!",
        desc: "too clumsy",
        jobs: "steers cell",
        color: "rgb(65, 235, 215)",
    },
    {
        name: "Lyos",
        organelle: "Lysosome",
        quote: "Here, let me throw that away for you~",
        desc: "biggie", 
        jobs: "breaks down proteins. eats food all day.",
        color: "rgb(0, 200, 255)",
    },
    {
        name: "Leo",
        organelle: "Nucleolus",
        quote: "Hi! Did you call me?",
        desc: "joyous but has sad lore", 
        jobs: "makes ribros all day",
        color: "rgb(160, 180, 255)",
    },
    {
        name: "Luke",
        organelle: "Nucleus",
        quote: "Good, you're here on time.",
        desc: "serious but calm around lil bro", 
        jobs: "big boss of the cell",
        color: "rgb(160, 150, 255)",
    },
    {
        name: "Lumen",
        organelle: "Rough ER",
        quote: "Hm? You're not a ribro… Do you need something?",
        desc: "She looks serious on the outside, but she's very empathetic and kind. Though sometimes, she can get really stressed out…", 
        jobs: "She makes amino in a factory connected to the main office.",
        color: "rgb(100, 105, 235)",
    },
    {
        name: "Proxima",
        organelle: "Centriole",
        quote: "Y-Yeah! Let's go!",
        desc: "mitosis", 
        jobs: "mitosis",
        color: "rgb(210, 100, 255)",
    },
    {
        name: "Rane",
        organelle: "Plasma membrane",
        quote: "Everyone, single file line~!",
        desc: "She's super extroverted and outgoing. Everyone is a friend to her. She seems to be in a million places at once.", 
        jobs: "transport uhh",
        color: "rgb(255, 160, 200)",
    },
    {
        name: "Roxy",
        organelle: "Peroxisome",
        quote: "There, all better now~",
        desc: "nurse of cell", 
        jobs: "detox",
        color: "rgb(235, 100, 145)",
    },
    {
        name: "Sol",
        organelle: "Cytoplasm",
        quote: "Big Sis is always here for you!",
        desc: "oneechan", 
        jobs: "emotional (and physical) support",
        color: "rgb(250, 235, 145)",
    },
    {
        name: "Tonio",
        organelle: "Vacuole",
        quote: "Don't worry, leave it to me.",
        desc: "cool warehouse dude", 
        jobs: "stores stuff",
        color: "rgb(125, 230, 245)",
    },
    {
        name: "Yulo",
        organelle: "Cell wall",
        quote: "…",
        desc: "quiet",
        jobs: "ensures walls are safe idk",
        color: "rgb(25, 150, 50)",
    },
]

characters.forEach(function(i){
    let icon = document.createElement("div");
    icon.classList.add("char");
    icon.onclick = function(){display(i)}
    icon.style.backgroundColor = i.color;
    let name = document.createElement("p");
    name.classList.add("name");
    name.innerHTML = i.name;
    icon.appendChild(name);
    chars.appendChild(icon);
})