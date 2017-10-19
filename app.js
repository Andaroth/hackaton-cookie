function initialize(name) {
    var cookieClicker = document.getElementById("cookie_clicker");
    var buttonClicker = cookieClicker.getElementsByTagName("button");
    var scoreZone = document.getElementById("score");
    var playZone = document.getElementById("cookie");
    var multiZone = document.getElementById("multiplicator");
    var button1 = document.getElementById("brioche");
    var button2 = document.getElementById("croissant");
    var button3 = document.getElementById("four");
    var button4 = document.getElementById("lance-flamme");
    
    if (localStorage.getItem("score") == null) {
        console.log("You have no cookies :(");
        var score = 0;
        var multip = 1;
        var multiByTime = 0;
    }
    else {
        console.log("You already have cookies ! :O");
        var score = parseInt(localStorage.getItem("score"));
        var multip = parseInt(localStorage.getItem("multip"));
        var multiByTime = parseInt(localStorage.getItem("multiByTime"));
        refreshDOM();
        addByTime(multiByTime);
        if (localStorage.getItem("Brioche") != null) {
            shop["Brioche"].price = localStorage.getItem("Brioche");
        }
        if (localStorage.getItem("Croissant") != null) {
            shop["Croissant"].price = localStorage.getItem("Croissant");
        }
        if (localStorage.getItem("Four") != null) {
            shop["Four"].price = localStorage.getItem("Four");
        }
        if (localStorage.getItem("Lance-flamme") != null) {
            shop["Lance-flamme"].price = localStorage.getItem("Lance-flamme");
        }
    }
    
    function cookieSave(saveScore,saveMulti,saveMultiByTime) {
        localStorage.setItem("score",saveScore);
        localStorage.setItem("multip",saveMulti);
        localStorage.setItem("multiByTime",saveMultiByTime);
        console.log("saved");
    }
    function addByTime(multiTime) {
        setInterval( function() {
            score = score + (1*multiTime); // J'add (1 * le multi) au score
            console.log("Argent " + score);
            refreshDOM();
            cookiePop(multiTime,1);
        }, 1000);
    }
    function refreshDOM() {
        scoreZone.innerHTML = ("Score : " + score);
        multiZone.innerHTML = ("Multiplicateur : " + multip + " || Cookie/s : " + multiByTime);
        cookieSave(score,multip,multiByTime);
    }
    function buyItem(chercherDans) {
        var prixItem = shop[chercherDans].price;
        var typeObjet = shop[chercherDans].type;
        if (score >= prixItem) { // Si t'as le fric
            score = score - prixItem; // Je retire le prix à ton fric
            shop[chercherDans].price = shop[chercherDans].price * shop[chercherDans].multi; // Je vais changer le prix de "chercherDans" (son prix * son multi)
            localStorage.setItem(shop[chercherDans].name,shop[chercherDans].price);

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
            multiZone.innerHTML = "Pas d'argent ? Mangez un bon cookie !";
        }
    }
    function cookiePop(multip,which) {
        switch (which) {
            case 1: 
                var toSet = "plusTime";
                break;
            default: 
                var toSet = "plusOne";
        }
        var toInsert = document.createElement("div");
        var toDelet = toInsert;
        toInsert.setAttribute("class",toSet);
        toInsert.innerHTML = "+ " + 1 * multip + " !";
        playZone.appendChild(toInsert);
        toInsert.style.animation = "plusoneanim 1s ease-out 1";
        setTimeout(function(){toDelet.remove();},1000);
    }
    var shop = [
        {name:"Brioche",price:10,multi:2,type:0},
        {name:"Croissant",price:50,multi:3,type:0},
        {name:"Four",price:350,multi:4,type:1},
        {name:"Lance-flamme",price:500,multi:5,type:1}
    ];
    // Si je clique sur "cookieClicker", 
    cookieClicker.addEventListener("click", function(e) {
        e.preventDefault();
        score = score + (1 * multip); // + (1*multip au score)
        console.log(">> Score = " + score);
        refreshDOM();
        cookiePop(multip);
    });
    button1.addEventListener("click", function() {
        buyItem(0);
        document.getElementById("brioche-prix").innerHTML = shop[0].price;
    });
    button2.addEventListener("click", function() {
        buyItem(1);
        document.getElementById("croissant-prix").innerHTML = shop[1].price;
    });
    button3.addEventListener("click", function() {
        buyItem(2);
        document.getElementById("four-prix").innerHTML = shop[2].price;
    });
    button4.addEventListener("click", function() {
        buyItem(3);
        document.getElementById("lance-flamme-prix").innerHTML = shop[3].price;
    });
}
initialize(); 