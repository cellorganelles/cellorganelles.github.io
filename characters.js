const characters = [
    /*
    {
        name: "",
        organelle: "",
        quote: "",
        desc: "", 
        jobs: "",
        color: "",
        info: "",
    },
    */
    {
        name: "Cecilia",
        organelle: "Cilia/Pili",
        quote: "All cleaaaar~",
        desc: "A soft-hearted girl who's always cheerful. She speaks really slowly, and her passivity sometimes gets her into trouble.<br><br>She's close friends with Flynn (she doesn't know he likes her).",
        jobs: "She works outside of the facility, in a central watch tower on top of the building. It's a control center that operates giant mechanical \"arms\" (ones she calls \"Silly Towers\"), regulating exports and things that pass by the CELL.<br><br>She essentially guards the facility alongside Rane.",
        color: "rgb(230, 245, 130)",
        info: "These are actually two different organelles, but I made her represent both as they're pretty similar.<br><br><br>Cilia (singular: cilium) are hair-like structures located on the outside of eukaryotic cells. Its main purpose is movement (imagine tentacles), but it's also used for the transfer of substances over the cell. They're composed of different types of microtubules, long, tube-like protein structures. <br><br>Cilia is found in two types: motile and primary. Motile cilia are built for movement (they actually dance rhythmically), featuring a 9+2 microtubule arrangement in its core. Primary cilia have a 9+0 structure and aren't as motile, but their main purpose is for signaling.<br><br><br>Pili (singular: pilus) look similar but are only found in prokaryotes. They serve a different purpose, used mostly for conjugation (DNA transfer to other organisms) and adhesion to surfaces.<br><br><br>If it wasn't obvious enough, I chose her name to be Cecilia because it has \"cilia\" in it :]",
    },
    {
        name: "Cistern",
        organelle: "Smooth ER",
        quote: "Yo! Need help with that?",
        desc: "A chill, laid-back guy. Being a smooth talker, he's not the most trustworthy. Rumor has it that he has a side gig…<br><br>Twins with Lumen, but he's slightly younger. He's also the older brother of Gigi.",
        jobs: "He works in a building connected to the main office. He's responsible for producing the CELL's lipid supply, including the phiphi that make up the walls.<br><br>His station is also a water treatment plant, ensuring no toxic substances end up in the system.",
        color: "rgb(120, 145, 255)",
        info: "The smooth endoplasmic reticulum (sometimes written as SER) is an organelle shaped like a network of membrane tubes. It's connected to the rough ER and the nucleus. Unlike the rough ER, it doesn't have ribosomes attached to its surface, giving it its smooth appearance.<br><br>The smooth ER has many functions, notably lipid synthesis, creating substances like steroids and phospholipids. It's also responsible for the detoxification of harmful poisons (including drugs and alcohol) using the enzymes located in its interior. The SER also metabolizes glycogen into glucose and acts as an important storage for calcium ions.<br><br>This organelle is most abundant in liver cells, where detoxification is crucial.<br><br><br>Cistern's name comes from the term \"cisternal space,\" the area inside the ER. His name is synonymous with his twin (I wanted them to be matching hehe).",
    },
    {
        name: "Cristy",
        organelle: "Mitochondria",
        quote: "I'm busy right now, tell me later.",
        desc: "A hard-working young lady. She maintains a serious attitude, but it's only surface-level. Occasionally stubborn and a bit of a coffee addict. Few know that her opinion could be swayed with sweets.<br><br>She's cousins with Grana, but they're close like sisters.",
        jobs: "She manages the power supply (yes, the powerhouse), using sugars and Oxi to generate energy. She works long shifts that go late into the night. It takes a lot of convincing to make her go home.",
        color: "rgb(255, 215, 50)",
        info: "Mitochondria (singular: mitochondrion) are indeed the powerhouse of the cell. They're crucial for providing energy to eukaryotes. Through the processes of cellular respiration and (big word warning) oxidative phosphorylation, these organelles produce large quantities of metabolic energy in the form of ATP (adenosine triphosphate, an energy \"currency\").<br><br>A mitochondrion has a double-membrane system; the inner membrane has numerous folds called cristae, giving it its notable appearance (when cut in half). The very interior space is called the matrix. Interestingly, it contains its own DNA (mtDNA) because mitochondria evolved from bacteria. They also have ribosomes inside!<br><br>Alright, time to explain the entire process of cell respiration… Get ready…<br><br>With glucose, oxygen, and a dream, the mitochondria produce about 30-38 ATP per glucose molecule (plus byproducts); different factors affect the total, so the maximum is usually never reached.<br><br>This is the balanced equation:<br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> —> 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP<br>You'll see this a few times in AP Bio, so if you're studying, make sure you can identify each part.<br><br><i>Step 1: Glycolysis</i><br>Glucose comes from food eaten (animals) or produced (plants). Different enzymes convert this glucose into two pyruvate molecules. This step occurs outside of the mitochondrion and is considered anaerobic (doesn't require oxygen). It actually needs some ATP in the process, resulting in a net gain of 2 ATP (−2 + 4). NADH, a coenzyme, is also produced; it's used later for electron transfer.<br><br>Before the next step, the pyruvates are transported into the mitochondrial matrix. They're oxidized into acetyl-CoA, and enters the citric acid cycle (or the Krebs cycle).<br><br><i>Step 2: Citric acid cycle</i><br>The acetyl-CoA molecules undergo a cycle of reactions, ultimately producing more NADH, another coenzyme (FADH<sub>2</sub>), 2 ATP, and carbon dioxide (as a byproduct).<br><br><i>Step 3: Electron transport chain</i><br>The coenzymes from the previous steps donate their high-energy electrons. These are passed across various protein complexes embedded in the inner membrane. Their final destination: oxygen molecules; they're often referred to as the \"final electron acceptor,\" becoming water (as another byproduct).<br><br><i>Step 4: Oxidative phosphorylation</i><br>Meanwhile, the energy from the passing of electrons forms a proton gradient. All this energy is bottled up in the intermembrane space (between outer and inner membranes). This is where most of the ATP is produced; the protons power an enzyme called ATP synthase, which synthesizes ATP (no way). They flow down their \"electrochemical gradient,\" and this process is called \"chemiosmosis.\" The amount of ATP made in this step varies, ranging from 26 to 34.<br><br>That was a lot… but this is for <i>aerobic</i> respiration, meaning it requires oxygen (if it helps you remember, aerobic = needs \"air\"). Anaerobic respiration does not, which happens when we don't receive enough oxygen or you're yeast. It's the steps of cellular respiration, minus the steps requiring oxygen—which reduces to just glycolysis. This is called fermentation. After producing pyruvate, our cells convert it to ATP and lactic acid; you might feel it in your muscles after running or working out (which burns, but hey, we need to breathe). Similarly, yeast ferments to produce alcohol and carbon dioxide. This is what causes dough to rise!<br><br>But wait. There's more!!<br><br>The mitochondria also interact with chloroplasts for photorespiration (see Grana's information page). They undergo a process called β-oxidation (beta-oxidation) to break down fatty acid chains, similar to that of peroxisomes. Okay, that's all, no more yap. Go stand up and stretch.<br><br><br>Cristy's name comes from the term \"cristae,\" and yes, it's pronounced the same.",
    },
    {
        name: "Dista",
        organelle: "Centriole",
        quote: "Alright, let's get this started!!!",
        desc: "A super chaotic girl. She's attention-seeking, but she likes helping others. Almost always, though, her efforts tend to make things worse.<br><br>Twins with Proxima. The two of them are often referred to as \"the Sentries.\" However, only Dista is hated by Endo.",
        jobs: "She's responsible for sorting chromos during M Phase, taking charge of the facility when it's time to replicate the CELL. But when it's I Phase, she doesn't really do much, being a mechanic. Occasionally, the Sentries inspect other stations for repairs. She and her sister are especially good at fixing Cecilia's \"Silly Towers\" and Flynn's engine.",
        color: "rgb(235, 105, 210)",
        info: "YAYAYAYAY<br><br><br>Dista's name is derived from the word \"distal,\" as in the distal (far) end of a centriole.",
    },
    {
        name: "Endo",
        organelle: "Endosome",
        quote: "If this isn't important, leave.",
        desc: "An aloof, indifferent young man. He prefers to be by himself, but a few of his coworkers think otherwise. Not many know that he's pretty smart.<br><br>Everyone is simply a coworker to him, but in particular Lyos and Dista get on his nerves.",
        jobs: "He transfers and sorts proteins and lipids, driving around the facility in his utility vehicle. Sometimes, he goes from Gigi's post office to Lyos' cart or from Rane to Tonio's warehouse.<br><br>He hates his job, but at the time of hiring it was the only position left.",
        color: "#AAAABA",
        info: "",
    },
    {
        name: "Gigi",
        organelle: "Golgi apparatus",
        quote: "H-Huh? Oh… sorry.",
        desc: "A very shy boy. On the outside, he looks fairly weak, but he does his work diligently and very well.<br><br>He's the younger brother of Cistern and Lumen. However, he's not very close with them.",
        jobs: "He works in a post office located near the central office and factories of the CELL. His main job is to package, process, and ship proteins and lipids for export.<br><br>Although he wears a messenger bag, he doesn't actually deliver stuff.",
        color: "rgb(255, 210, 135)",
        info: "",
    },
    {
        name: "Grana",
        organelle: "Chloroplast",
        quote: "And done! Cookies are ready!",
        desc: "A energetic, thoughtful girl. She loves cooking food and baking treats for her fellow coworkers.<br><br>She's cousins with Cristy, but they're close like sisters. She also has Rubio and Pepsi as kitchen helpers.",
        jobs: "An expert chef, she provides meals throughout the day for the other workers. With special technology and help from the sun, she's especially talented at making sweets.",
        color: "rgb(100, 235, 100)",
        info: "The chloroplast is an organelle (specifically a plastid) found in plants, algae, and certain bacteria. It's responsible for photosynthesis, the process of converting sunlight into sugars; this reaction is crucial as it creates food for the organism.",
    },
    {
        name: "Flynn",
        organelle: "Flagella",
        quote: "Whoa! Sorry, didn't see you there!!",
        desc: "A clumsy guy. He's always full of confidence and likes taking risks. Sometimes, he's a little overambitious and gets into trouble.<br><br>He's close friends with Cecilia. Everyone knows he likes her (except for Cecilia).",
        jobs: "Located near the back of the CELL, he mans the helm. (yes, it moves) He controls the multiple tail-like propellers, guiding the CELL to other facilities.",
        color: "rgb(65, 235, 215)",
        info: "",
    },
    {
        name: "Leo",
        organelle: "Nucleolus",
        quote: "Hi! Did you call me?",
        desc: "A lively, crafty little boy. He loves building things out of proteins. Lives in the main office, forbidden from leaving. By himself all day, he's grown used to being independent.<br><br>Luke is his older brother, though they're age gap is wide.",
        jobs: "Out of creative habit, Luke appointed him for ribro production. He handcrafts their components, but he isn't able to assemble them and watch them come to life. Poor guy.",
        color: "rgb(160, 180, 255)",
        info: "placehodler<br><br><br>Leo's name is derived from the \"leo\" in \"nucleolus.\" I picked this name partly because of the Heroes of Olympus series (there's a character also named Leo, and both of them have the same personality). His brother has a similar case.",
    },
    {
        name: "Luke",
        organelle: "Nucleus",
        quote: "Good, you're here on time.",
        desc: "A serious young man. He's often very busy, having no time for leisure. You'll be lucky to catch him outside his office.<br><br>He softens up around his younger brother Leo, though he tends to be overprotective. During M Phase, he entrusts the CELL to Dista and Proxima.",
        jobs: "As managing director, he's in charge of logistics, daily operations, and dozens of other tasks behind-the-scenes. He usually works long hours, and most of his time is spent in the main office. On occassion, he checks up on the work of the staff.",
        color: "rgb(160, 150, 255)",
        info: "The nucleus is the central organelle of the cell. It's usually referred to as \"the brain\" <br><br><br>Luke's name comes from the word \"nucleus\" since it sounds similar. I picked this name partly because of the Percy Jackson series (and no, this Luke is not evil). Coincidentially, his brother's name also comes from a Rick Riordan book.",
    },
    {
        name: "Lumen",
        organelle: "Rough ER",
        quote: "Hm? You're not a ribro… Do you need something?",
        desc: "An earnest young woman. On the outside, she looks pretty serious, but she's actually very empathetic (though not to her twin). However, sometimes anxiety can get the better of her…<br><br>Twins with Cistern, but she's slightly older. She's also the older sister of Gigi.",
        jobs: "She makes amino in a factory connected to the main office. Ribros often cling around her station since they need the acids to build proteins. She also modifies the ribros' finished proteins and ensures they're folded correctly.",
        color: "rgb(100, 105, 235)",
        info: "placeholder<br><br><br>Lumen's name is the word for the space inside the ER. Her name is synonymous with her twin.",
    },
    {
        name: "Lyos",
        organelle: "Lysosome",
        quote: "Here, let me throw that away for you~",
        desc: "A flamboyant guy. He tries to attract the attention of others (usually fails). Loves his job, but he's not very good at it. He's a perfectionist and a bit self-oriented. Eating is his favorite habit.<br><br>He's friends with Endo (not reciprocated) and childhood friends with Roxy. Tonio is his distant cousin.",
        jobs: "As a janitor, his main job is cleaning the facility. He collects waste, usually misfolded proteins, in specialized trash bags that breaks down anything that goes inside. He's also responsible for \"obtaining nutrients\" for the CELL; in reality, he just orders take-out, saves the dessert, and eats the rest…<br><br>He often works with Endo. Occasionally, he resupplies from Gigi's post office.",
        color: "rgb(0, 200, 255)",
        info: "The lysosome is an organelle mainly responsible for breaking down cellular waste. They contain digestive enzymes.",
    },
    {
        name: "Proxima",
        organelle: "Centriole",
        quote: "Y-Yeah! Let's go!",
        desc: "A reserved, awkward girl. She's normally quiet, but she hypes up when Dista does. Often cleans up her sister's mishaps whenever she gets into trouble.<br><br>Twins with Dista. The two of them are often referred to as \"the Sentries.\"",
        jobs: "She's responsible for sorting chromos during M Phase, taking charge of the facility when it's time to replicate the CELL. But when it's I Phase, she doesn't have much to do, being a mechanic. Occasionally, the Sentries inspect other stations for repairs. She and her sister are especially good at fixing Cecilia's \"Silly Towers\" and Flynn's engine.",
        color: "rgb(210, 100, 255)",
        info: "placeholder<br><br><br>Proxima's name is derived from the word \"proximal,\" as in the proximal (close) end of a centriole.",
    },
    {
        name: "Rane",
        organelle: "Cell membrane",
        quote: "Everyone, single file line~!",
        desc: "An extroverted, eccentric girl. To her, everyone is a friend. She's always in the know; strangely enough, it feels like she's in a million places at once.<br><br>As stated before, she's friends with everyone, but she's closer to Yulo and Catherin.",
        jobs: "She has dozens of jobs; monitoring things that go in and out of the CELL, preparing molecules for transport, and even watching other workers to ensure they're doing their job.",
        color: "rgb(255, 160, 200)",
        info: "The cell membrane (also called the plasma membrane) is an organelle that encompasses the entire cell. It's like the bubble that holds everything inside. The membrane is crucial for protecting all of the cell's components, as well as the transportation of substances in and out. It serves dozens of other purposes too (see below).<br><br>The membrane is a bilayer of phospholipids, which are lipid molecules with a hydrophilic head (composed of a phosphate and glycerol) and hydrophobic tails (fatty acids). Since the tails, being nonpolar, repel water, the phospholipids arrange themselves so that the heads are oriented outwards (hydrophilic = water-loving) and the tails are in between. Imagine a sandwich of phospholipids: head, tails, tails, head. Don't worry, I'll include photos soon…<br><br>This structure makes the membrane very fluid, usually referred to as a fluid mosaic. It's selectively permeable, which means only specific substances can easily pass through—small, nonpolar molecules, otherwise it needs the help of membrane proteins. The bilayer is embedded with these proteins, acting as channels for larger molecules to be transported (plus other purposes like signaling). Cholesterol is also found in the membrane, necessary for maintaining the membrane's flexibility. Other elements include glycoproteins and glycolipids (cell recognition, identification, signaling).<br><br>It's one of the most important organelles in the cell; all organelles are membrane-bound, so they're made of the same structure. Sorry for the text wall guys, this was an entire unit in AP Biology summed up in a few paragraphs.<br><br><br>Rane's name comes from… you can guess… the word \"membrane.\"",
    },
    {
        name: "Ribros",
        organelle: "Ribosomes",
        quote: "GUA UAG [Hi]",
        desc: "Little toddler-like machines. They're made of proteins and RNA, constructed by Leo. These guys communicate through Ribrospeak, which only a few workers understand. To most, it sounds like anticodon gibberish…",
        jobs: "They create proteins by linking amino together. However, they need blueprints from the office in order to work. Typically, they get their amino from Lumen's factory and pass the synthesized proteins to Gigi.",
        color: "rgb(255, 100, 100)",
        info: "",
    },
    {
        name: "Roxy",
        organelle: "Peroxisome",
        quote: "There, all better now~",
        desc: "A very caring young lady. Safety and well-being is her top priority. Occasionally, she gets short-tempered (by her friend). Despite being a nurse, she does not eat healthy…<br><br>Lyos is her childhood friend. She has a crush on him, but she's in denial.",
        jobs: "She works several different jobs, including the disposal of harmful substances. She's a nurse part-time, yet no one really enters her clinic.",
        color: "rgb(235, 100, 145)",
        info: "Peroxisomes contain dozens of different enzymes, at least 50. These aid in oxidation reactions, where molecules like fatty acids are broken down. This produces energy (with the help of the mitochondria) as well as hydrogen peroxide. That's where the name comes from… Since H<sub>2</sub>O<sub>2</sub> is a harmful substance, it's broken down too by the enzyme catalase.<br><br>In animal cells, these organelles also perform lipid biosynthesis, such as the creation of cholesterol, similar to the smooth ER. They help synthesize plasmalogens, a kind of phospholipid essential in certain heart and brain tissues.<br><br>Peroxisomes have a slightly different role in plant cells. In seeds, they convert stored fatty acids into carbohydrates, crucial for germinating plants (they're called glyoxysomes here!). In leaves, these organelles are involved in photorespiration, an alternative pathway in photosynthesis when the enzyme called RuBisCO messes up. I'll explain more of that in Grana's information page (and when I add enzymes to the site…)<br><br><br>Roxy's name is derived from the \"roxi\" in \"peroxisome.\" Fun fact: when I was naming her, I kept switching between \"Roxy\" and \"Roxi.\" Now, \"roxi\" refers to hydrogen peroxide molecules, so don't get confused lol.",
    },
    {
        name: "Sol",
        organelle: "Cytoplasm",
        quote: "How's it goin'?",
        desc: "A supportive young woman. She's talkative yet all-ears, willing to listen to anyone's concerns or issues. Because of this, she earned the nickname \"Big Sis.\"<br><br>She's close friends with Lumen. She treats Gigi particularly like a little brother.",
        jobs: "She usually walks around, helping any workers that needed a hand. As a skilled communicator, she sometimes serves as a counselor. She has her own room in the main office, where she can provide free therapy.",
        color: "rgb(250, 235, 145)",
        info: "",
    },
    {
        name: "Tonio",
        organelle: "Vacuole",
        quote: "Don't worry, leave it to me.",
        desc: "A strong, reliable young man. He naturally likes keeping things tidy. He's always willing to lend a hand. Although friendly, no one really talks to him… (usually referred to as \"the warehouse guy\")<br><br>He's distant cousins with Lyos.",
        jobs: "He essentially keeps the facility organized. He manages shipments, ensuring the CELL has enough resouces stored for day-to-day tasks. His most important role is monitoring the facility's giant water reserve.",
        color: "rgb(125, 230, 245)",
        info: "",
    },
    {
        name: "Yulo",
        organelle: "Cell wall",
        quote: "…",
        desc: "A nonchalant, rigid guy. He's totally deadpan, choosing not to talk most of the time. Since he has lots of free time, he's extremely skilled in a bunch of areas.<br><br>He's close friends with Rane; he actually likes her but doesn't realize it.",
        jobs: "His main job is to ensure the walls around the CELL are maintained. Similar to Rane, he also monitors the transport of substances between other facilities. Other than that, he basically has the whole day to himself.",
        color: "rgb(25, 150, 50)",
        info: "",
    },
]

characters.forEach(function(i){
    let icon = document.createElement("div");
    icon.classList.add("char");
    icon.onclick = function(){showChar(i)}
    icon.style.backgroundColor = i.color;
    let img = document.createElement("img");
    img.src = i.name.toLowerCase() + "/icon.png";
    icon.appendChild(img);
    //icon.style.backgroundImage = "linear-gradient(#FFFFFF80, #FFFFFF80), url(" + i.name.toLowerCase() + "/icon.png)";
    let name = document.createElement("p");
    name.classList.add("name");
    name.innerHTML = i.name;
    icon.appendChild(name);
    chars.appendChild(icon);
});