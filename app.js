var cookie = document.getElementById("cookie_clicker");
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
    type: 0,
},
{
    name:"Pelle",
    multi: 1.5,
    price: 15,
    type: 0,
},
{
    name:"Foreuse",
    multi: 1.5,
    price: 30,
    type: 1,
},
{
    name:"Perceuse",
    multi: 1.5,
    price: 20,
    tupe: 1,
}
] // list of available items

var refresh = function() {
    score.innerHTML(myMoney);
    multipl.innerHTML(multipClic + " & " + multipTime);
}

var cookieCLic = function(event) {
    event.preventDefault();
    document.write("coucou");
    myMoney += (1 * multipClic);
    
    refresh();
}

var buyItem = function(param) {
    var name = param;
    console.log("oui");
    /*if (myMoney > shop.name.price)
    {
        myMoney = myMoney - (shop.name.price);
        
        switch (shop.item.type) {
            case 0: // Si type 0

                break;
            case 1: // Si type 1

                break;
            default:
                console.log("Error !!");
                break;
        }   
    }*/
    refresh();
}

cookie.addEventListener("click", cookieCLic());
document.getElementById("Pioche").onclick = buyItem(Pioche);