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
        desc: "A hard-working young lady. She maintains a serious attitude, but it's only surface-level. She's stubborn on occassion and a bit of a coffee addict. Few know that her opinion could be swayed with sweets.<br><br>She's cousins with Grana, but they're close like sisters.",
        jobs: "She manages the power supply (yes, the powerhouse), using sugars and Oxi to generate energy. She works long shifts that go late into the night until someone pries her away.",
        color: "rgb(255, 215, 50)",
    },
    {
        name: "Dista",
        organelle: "Centriole",
        quote: "Alright, let's get this started!!!",
        desc: "A super chaotic girl. She's attention-seeking, but she likes helping others. Almost always, though, her efforts make things worse.<br><br>Twins with Proxima.",
        jobs: "She's responsible for sorting chromos during M Phase, taking charge of the facility when it's time to replicate the CELL. But when it's I Phase, she kind of wanders around, trying to provide help to other workers.",
        color: "rgb(235, 105, 210)",
    },
    {
        name: "Endo",
        organelle: "Endosome",
        quote: "If this isn't important, leave.",
        desc: "An aloof, indifferent young man. He prefers to be by himself, but a few of his coworkers think otherwise. Not many know that he's pretty smart.<br><br>Everyone is simply a coworker to him, but in particular Lyos and Dista get on his nerves.",
        jobs: "He transfers and sorts proteins and lipids, having to go from Gigi's post office to Lyos' cart sometimes. He hates his job, but it was the only position left he could take.",
        color: "#AAAABA",
    },
    {
        name: "Gigi",
        organelle: "Golgi apparatus",
        quote: "H-Huh? Oh… sorry.",
        desc: "A very shy boy. On the outside, he looks fairly weak, but he does his work diligently and very well.<br><br>He's the younger brother of Cistern and Lumen.",
        jobs: "He works in a post office located near the central office and factories of the CELL. His main job is to package, process, and ship proteins and lipids for export.",
        color: "rgb(255, 210, 135)",
    },
    {
        name: "Grana",
        organelle: "Chloroplast",
        quote: "And done! Cookies are ready!",
        desc: "A energetic, thoughtful girl. She loves cooking food and baking treats for her fellow coworkers.<br><br>She's cousins with Cristy, but they're close like sisters. She also has Rubio and Pepsi as kitchen helpers.",
        jobs: "An expert chef, she provides meals throughout the day for the other workers. With special technology and help from the sun, she's especially talented at making sweets.",
        color: "rgb(100, 235, 100)",
    },
    {
        name: "Flynn",
        organelle: "Flagella",
        quote: "Whoa! Sorry, didn't see you there!!",
        desc: "A ",
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
        desc: "An extroverted, eccentric girl. To her, everyone is a friend. She's always in the know; strangely enough, it feels like she's in a million places at once.<br><br>As stated before, she's friends with everyone, but she's closer to Yulo and Catherin.",
        jobs: "She has plenty of jobs; monitoring things that go in and out of the CELL, preparing molecules for transport, and even watching other workers to ensure they're doing their job.",
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
        desc: "A nonchalant, rigid guy. He's totally deadpan, choosing not to talk most of the time. Since he has lots of free time, he's extremely skilled in a bunch of areas.",
        jobs: "His main job is to ensure the walls around the CELL are maintained. Similar to Rane, he also monitors the transport of substances between other facilities. Other than that, he basically has the whole day to himself.",
        color: "rgb(25, 150, 50)",
    },
]

characters.forEach(function(i){
    let icon = document.createElement("div");
    icon.classList.add("char");
    icon.onclick = function(){showChar(i)}
    icon.style.backgroundColor = i.color;
    let name = document.createElement("p");
    name.classList.add("name");
    name.innerHTML = i.name;
    icon.appendChild(name);
    chars.appendChild(icon);
})