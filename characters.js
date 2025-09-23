const characters = [
    /*
    {
        name: "",
        organelle: "",
        quote: "",
        desc: "", 
        jobs: "",
    },
    */
    {
        name: "Cecilia",
        organelle: "Cilia/Pili",
        quote: "All cleaaaar~",
        desc: "A soft-hearted girl who's always cheerful. She speaks really slowly, and her passivity sometimes gets her into trouble.",
        jobs: "She works outside of the facility, in a central watch tower on top of the building. It's a control center that operates giant mechanical \"arms\" (ones she calls \"Silly Towers\"), regulating exports and things that pass by the CELL.<br><br>She essentially guards the facility alongside Rane.",
    },
    {
        name: "Cistern",
        organelle: "Smooth ER",
        quote: "Yo! Need help with that?",
        desc: "A chill, laid-back guy. Twins with Lumen, but he's slightly older. He sometimes acts a little shady though.",
        jobs: "He's responsible for producing the facility's lipid supply, which includes the phiphi that make up the walls.<br><br>",
    },
    {
        name: "Cristy",
        organelle: "Mitochondria",
        quote: "I'm busy right now, tell me later.",
        desc: "She maintains a serious attitude, but sometimes gets really excited over little things (like her favorite fictional character…).",
        jobs: "MITOCHONDRIA IS THE POWERHOUSE OF THE CELL",
    },
    {
        name: "Dista",
        organelle: "Centriole",
        quote: "Alright, let's get this started!!!",
        desc: "mitosis",
        jobs: "mitosis",
    },
    {
        name: "Endo",
        organelle: "Endosome",
        quote: "If this isn't important, leave.",
        desc: "Cold-hearted and careless.",
        jobs: "transfers stuff",
    },
    {
        name: "Gigi",
        organelle: "Golgi apparatus",
        quote: "H-Huh?!?!?!?",
        desc: "he's willy shy >///<",
        jobs: "packages and ships proteins & lipids for export",
    },
    {
        name: "Grana",
        organelle: "Chloroplast",
        quote: "yadda yadda",
        desc: "so happy",
        jobs: "sunlight into sugar!!",
    },
    {
        name: "Flynn",
        organelle: "Flagella",
        quote: "Whoops! Didn't see you there!!",
        desc: "too clumsy", 
        jobs: "steers cell",
    },
    {
        name: "Lyos",
        organelle: "Lysosome",
        quote: "Here, let me throw that away for you~",
        desc: "biggie", 
        jobs: "breaks down proteins. eats food all day.",
    },
    {
        name: "Leo",
        organelle: "Nucleolus",
        quote: "Hi! Did you call me?",
        desc: "joyous but has sad lore", 
        jobs: "makes ribros all day",
    },
    {
        name: "Luke",
        organelle: "Nucleus",
        quote: "Good, you're here on time.",
        desc: "serious but calm around lil bro", 
        jobs: "big boss of the cell",
    },
    {
        name: "Lumen",
        organelle: "Rough ER",
        quote: "Hm? You're not a ribro… Do you need something?",
        desc: "She looks serious on the outside, but she's very empathetic and kind. Though sometimes, she can get really stressed out…", 
        jobs: "She makes amino in a factory connected to the main office.",
    },
    {
        name: "Proxima",
        organelle: "Centriole",
        quote: "Y-Yeah! Let's go!",
        desc: "mitosis", 
        jobs: "mitosis",
    },
    {
        name: "Rane",
        organelle: "Plasma membrane",
        quote: "Everyone, single file line~!",
        desc: "She's super extroverted and outgoing. Everyone is a friend to her. She seems to be in a million places at once.", 
        jobs: "transport uhh",
    },
    {
        name: "Roxy",
        organelle: "Peroxisome",
        quote: "There, all better now~",
        desc: "nurse of cell", 
        jobs: "detox",
    },
    {
        name: "Sol",
        organelle: "Cytoplasm",
        quote: "Big Sis is always here for you!",
        desc: "oneechan", 
        jobs: "emotional (and physical) support",
    },
    {
        name: "Tonio",
        organelle: "Vacuole",
        quote: "Don't worry, leave it to me.",
        desc: "cool warehouse dude", 
        jobs: "stores stuff",
    },
    {
        name: "Yulo",
        organelle: "Cell wall",
        quote: "…",
        desc: "quiet",
        jobs: "ensures walls are safe idk",
    },
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