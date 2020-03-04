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
        "HP Rate": 5,
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
        "HP Rate": 5,
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
        "HP Rate": 3,
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

    else if (enemy<1){
        ($(this).attr("class", "enemy"));
        $("#enemy").append($(this));

        enemyDinosaur = $(this);
        enemyHP = $(".enemy").attr("HP");
        enemyHealth = $(".enemy").attr("health");
        enemy++
    }

});

var fights = 0;

$("#attack").on("click", function(){
    if (fighter>0 && enemy>0){
        console.log("Fights: "+ fights);
        fighterHealth = fighterHealth - enemyHP;
        console.log("Fighter health: " + fighterHealth);
        enemyHealth = enemyHealth - fighterHP;
        console.log("Enemy health: " + enemyHealth);

        console.log("Fighter HP: " + fighterHP);
        console.log("Fighter HP Rate: " + fighterHPRate);
        fighterHP = fighterHP*fighterHPRate;
        console.log("Fighter HP: " + fighterHP);
        fights++;
    };

    if (fights>0 && fighterHealth<1){
        alert("you lose");
    }

    if(fights>0 && enemyHealth<1){
        alert("you win!");

        $("#enemies").append(enemyDinosaur);
    }

}
    
);

var HP = ($(this).attr("HP"));



