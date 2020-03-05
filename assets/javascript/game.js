var dinosaurs = [
    {
        "Name": "Brontosaurus",
        "HP": 5,
        "HP Rate": 2,
        "Health": 120,
        "Image": src="assets/images/brontosaurus.png"
    
    },
    {
        "Name": "Triceratops",
        "HP": 10,
        "HP Rate": 1.5,
        "Health": 130,
        "Image": src="assets/images/triceratops.jpg"
    },
    {
        "Name": "Tyrannosaurus Rex",
        "HP": 50,
        "HP Rate": 4,
        "Health": 200,
        "Image": src="assets/images/trex.jpeg"
    },
    {
        "Name": "Stegosaurus",
        "HP": 75,
        "HP Rate": 1.25,
        "Health": 150,
        "Image": src="assets/images/stegosaurus.jpeg"
    },
     {
        "Name": "Compsognathus",
        "HP": 2,
        "HP Rate": 20,
        "Health": 100,
        "Image": src="assets/images/compsognathus.jpg"
    },
    {
        "Name": "Mamenchisaurus",
        "HP": 40,
        "HP Rate": 1.8,
        "Health": 145,
        "Image": src="assets/images/mamenchisaurus.jpg"
    }
];
for (var i=0; i<dinosaurs.length; i++) {
        var newDinosaur = $("<div></div>")
        $(newDinosaur).attr("HP", dinosaurs[i]["HP"]);
        $(newDinosaur).attr("HP-rate", dinosaurs[i]["HP Rate"]);
        $(newDinosaur).attr("Health", dinosaurs[i]["Health"]);
        $(newDinosaur).attr("class", "dinosaur");
        var newDinosaurImg = $("<img>");
        $(newDinosaurImg).attr("src", dinosaurs[i]["Image"]);
        var newDinoName = dinosaurs[i]["Name"];
        var dinoNameText = $("<p></p>");
        $(dinoNameText).text(newDinoName);
        var newDinoHealth = "Health: " + dinosaurs[i]["Health"];
        var dinoHealthText = $("<p></p>");
        $(dinoHealthText).text(newDinoHealth);
        $(newDinosaur).append(dinoNameText);
        $(newDinosaur).append(newDinosaurImg);
        $(newDinosaur).append(dinoHealthText);
        $(".dinosaurs-to-choose").append(newDinosaur);
};
var fighter = 0;
var enemy = 0;

var fighterHP =0;
var fighterHealth =0;
var fighterHPRate =0;

var enemyHP =0;
var enemyHealth =0;

var enemyDinosaur;

$(".dinosaur").on("click", function (){

    if (fighter<1)
    {($(this).attr("class", "fighter"));
    $("#fighter").append($(this));
    fighter++;

    fighterHP = $(".fighter").attr("HP");
    fighterHealth = $(".fighter").attr("health");
    fighterHPRate=$(".fighter").attr("HP-rate");
    }

    else if (enemy<1 && ($(this).attr("class")!="enemy") && ($(this).attr("class")!="fighter")){
        ($(this).attr("class", "enemy"));
        $("#enemy").append($(this));

        enemyDinosaur = $(this);
        enemyHP = $(".enemy").attr("HP");
        enemyHealth = $(".enemy").attr("health");
        enemy++
    }

});

var fights = 0;
var lost = 0;

$("#attack").on("click", function(){
    if (fighter>0 && enemy>0 && fighterHealth>0){
        fighterHealth = fighterHealth - enemyHP;
        enemyHealth = enemyHealth - fighterHP;
        $("#fighter-health").text("Fighter's health: " + fighterHealth);
        $("#enemy-health").text("Enemy's health: " + enemyHealth);
        fighterHP = fighterHP*fighterHPRate;
        fights++;
    };

    if (fights>0 && fighterHealth<1 && lost<1){
        $("#game-stats").append($("<div> Sorry, you lost. Click 'Reset' below to try again!</div>"));
        $("#fighter-health").text("Fighter's health: ");
        $("#enemy-health").text("Enemy's health: ");
        lost++;
        return;
    };

    if(fights>0 && enemyHealth<1){
        $("#enemies").append(enemyDinosaur);
        $(enemyDinosaur).attr("class", "enemies");
        enemy = 0;
        $("#fighter-health").text("Fighter's health: ");
        $("#enemy-health").text("Enemy's health: ");
    };
}
    
);

$("#reset").on("click", function (){
    location.reload();
})





