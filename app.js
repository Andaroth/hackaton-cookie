var score = 0;
var multip = 1;
var cookieClicker = document.getElementById("cookie_clicker");
var buttonClicker = document.getElementsByTagName("button");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");

var shop = [
    {name:"Pioche",price:10,multi:1.5,type:0},
    {name:"Pelle",price:50,multi:2.5,type:0},
    {name:"Foreuse",price:350,multi:3,type:1},
    {name:"Pelleteuse",price:500,multi:5,type:1}
];

function buyItem(chercherDans) {
    console.log("buy");
    var prixItem = shop[chercherDans].price;
    
    console.log("prix de l'item : " + prixItem);
    
    if (score >= prixItem) { // Si t'as le fric
        
        score = score - prixItem; // Je retire le prix à ton fric
        
        multip = multip + shop[chercherDans].multi; // Ensuite, je change le multiplicateur du gain par le multiplicateur de l'item
        
        shop[chercherDans].price = shop[chercherDans].price * shop[chercherDans].multi; // Je vais changer le prix de "chercherDans" (son prix * son multi)
        
    }
    else {
        console.log("Saleté de pauvre !");
        
    }
    
    
}

function initialize() {
    // Si je clique sur "cookieClicker", 
    cookieClicker.addEventListener("click", function() {
        score = score + (1 * multip); // +1*multip au score
        console.log("Score = " + score);
    });
    
    button1.addEventListener("click", function() {
        buyItem(0);
    });
    button2.addEventListener("click", function() {
        buyItem(1);
    });
    button3.addEventListener("click", function() {
        buyItem(2);
    });
    button4.addEventListener("click", function() {
        buyItem(3);
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