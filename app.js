var score = 0;
var multip = 1;
var multiByTime = 0;
var cookieClicker = document.getElementById("cookie_clicker");
var buttonClicker = cookieClicker.getElementsByTagName("button");

var scoreZone = document.getElementById("score");
var multiZone = document.getElementById("multiplicator");

var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");

var shop = [
    {name:"Pioche",price:10,multi:2,type:0},
    {name:"Pelle",price:50,multi:3,type:0},
    {name:"Foreuse",price:350,multi:4,type:1},
    {name:"Pelleteuse",price:500,multi:5,type:1}
];

function addByTime(multiTime) {
    setInterval( function() {
        score = score + (1*multiByTime); // J'add (1 * le multi) au score
        console.log("Argent " + score);
        refreshDOM();
    }, 1000);
}

function refreshDOM() {
    scoreZone.innerHTML = ("Score : " + score);
    multiZone.innerHTML = ("Multiplicateur : " + multip + " || ByTime : " + multiByTime);
}

function buyItem(chercherDans) {
    console.log("buy");
    var prixItem = shop[chercherDans].price;
    var typeObjet = shop[chercherDans].type;
    
    console.log("prix de l'item : " + prixItem);
    
    if (score >= prixItem) { // Si t'as le fric
        
        score = score - prixItem; // Je retire le prix à ton fric
        shop[chercherDans].price = shop[chercherDans].price * shop[chercherDans].multi; // Je vais changer le prix de "chercherDans" (son prix * son multi)
        
        if (typeObjet == 0) // SI item de clic
        {
            multip = multip + shop[chercherDans].multi; // Ensuite, je change le multiplicateur du gain par le multiplicateur de l'item
            refreshDOM();
        } // Si item de temps
        else {
            multiByTime = multiByTime + shop[chercherDans].multi;
            addByTime(multiByTime); // Je lance le addByTime avec le multi de mon item comme param
            
        }
    } // SI t'as pas le fric
    else 
    {
        console.log("Saleté de pauvre !");
        
    }
}

function initialize() {
    // Si je clique sur "cookieClicker", 
    cookieClicker.addEventListener("click", function() {
        score = score + (1 * multip); // + (1*multip au score)
        console.log("Score = " + score);
            refreshDOM();
    });
    
    /*buttonClicker.onclick = function() {
        console.log("oui");
        buyItem(this.value);
    };*/
    
    button1.addEventListener("click", function() {
        buyItem(0);
        document.getElementById("piocheprix").innerHTML = shop[0].price;
    });
    button2.addEventListener("click", function() {
        buyItem(1);
        document.getElementById("pelleprix").innerHTML = shop[1].price;
    });
    button3.addEventListener("click", function() {
        buyItem(2);
        document.getElementById("foreuseprix").innerHTML = shop[2].price;
    });
    button4.addEventListener("click", function() {
        buyItem(3);
        document.getElementById("pelletprix").innerHTML = shop[3].price;
    });
}
initialize(); 
/*var cookie = document.getElementById("cookie_clicker");
var score = document.getElementById("score");
var multipl = document.getElementById("multipl");

var myMoney = 0; // start money
var multipClic = 1; // clic earn multiplicator
var multipTime = 0; // time earn multiplicator
var multipPrice = 1.5; // change the item's price

var timer = 100; // in milliseconds

var shop = [{
    name:"Pioche",
    multi: 1.5,
    price: 10,
    type: 0
},
{
    name:"Pelle",
    multi: 1.5,
    price: 15,
    type: 0
},
{
    name:"Foreuse",
    multi: 1.5,
    price: 30,
    type: 1
},
{
    name:"Perceuse",
    multi: 1.5,
    price: 20,
    type: 1
}
] // list of available items

var refresh = function() {
    console.log(">> refresh");
    score.innerHTML(myMoney);
    multipl.innerHTML(multipClic + " & " + multipTime);
}

var cookieCLic = function() {
    console.log("<< click on cookie");
    myMoney += (1 * multipClic);
    
    refresh();
}

var buyItem = function(param) {
    console.log("<< clic on item " + param);
    var item = param;
    console.log("oui");
    if (myMoney >= shop.item.price)
    {
        myMoney = myMoney - (shop.item.price);
        
        switch (shop.item.type) {
            case 0: // Si type 0

                break;
            case 1: // Si type 1

                break;
            default:
                console.log("Error !!");
                break;
        }   
    }
    refresh();
}

cookie.onclick = cookieCLic();
document.getElementById("Pioche").onclick = buyItem(Pioche);*/