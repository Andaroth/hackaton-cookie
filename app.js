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
    multi: 2,
    price: 15,
    type: 1,
},
{
    
}
] // list of available items

function cookieCLic() {
    myMoney += (1 * multipClic);
}

function buyItem(item) {
    if (myMoney > shop.item.price)
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
}

