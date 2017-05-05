
// variables

var motATrouver = ["grenade", "orange", "maracuja", "goyave", "papaye", "pasteque", "melon", "litchi", "fraise", "mangue"];
var motMystere = motATrouver[Math.floor(Math.random()*motATrouver.length)];
console.log(motMystere);


// boucle (charger autant de cases input qu'il y a de lettres dans le motMystère. On a donc besoin de la boucle dans la catégorie variables)

for(i=0; i<motMystere.length; i++) {

    var input = document.createElement("input");
    input.setAttribute('class', 'letter');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '1'); // limiter le nombre de caractères
    document.body.querySelector("#case").appendChild(input);
    var lettreMystere = motMystere.charAt(i); // décompose le motMystere
}


// création du clavier virtuel

for(char of "azertyuiopqsdfghjklmwxcvbn"){

    clavier.innerHTML += "<div class='touche'>" + char + "</div>";  
}

// création d'une variable pour tous les caractères du clavier

var lettreClavier = document.querySelectorAll(".touche");

// écouteurs d'évènements

for(i=0; i<lettreClavier.length; i++) {

    lettreClavier[i].addEventListener("click", lettreChoisie);
}

// définir la fonction

var erreur=0;
function lettreChoisie() {

    var oke = false;

    var mot = ""; // case vide qui se remplit à chaque fois qu'on trouve une bonne lettre
    var lesInput = document.getElementsByClassName("letter");

    // récupère la valeur de la balise HTML quand on clique sur une lettre
    var lettreValeur = this.innerHTML;
    console.log(lettreValeur);

    if(erreur<5){
        // compare cette valeur à la lettre du mot mystère
        for(i=0; i < motMystere.length; i++) { 

            // si elle est juste, rempli les cases avec les bonnes lettres
            if(lettreValeur == motMystere[i]) { 
                lesInput[i].value = lettreValeur;
                oke = true;
            }

            // recomposer le mot proposé par le jouer avec les lettres qu'il a choisi 
            mot +=(lesInput[i].value);
        }
        // compare le mot final avec le motMystère

        //gagné 
        if(mot==motMystere){
            document.querySelector('#clavier').style.display = "none";
            document.querySelector('#case').style.display = "none";
            document.querySelector('h2').style.display = "none";
            document.querySelector(".gagne").classList.remove("hidden");
            document.querySelector(".rejouer").classList.add("hidden");
            erreur = 0;


            for(var i=0; i<lesInput.length; i++){
                lesInput[i].value ="";
            }

            motMystere = motATrouver[Math.floor(Math.random()*motATrouver.length)];
            console.log(motMystere);
            document.body.querySelector("#case").innerHTML="";
            for(i=0; i<motMystere.length; i++) {

                var input = document.createElement("input");
                input.setAttribute('class', 'letter');
                input.setAttribute('type', 'text');
                input.setAttribute('maxlength', '1'); // limiter le nombre de caractères
                document.body.querySelector("#case").appendChild(input);
                var lettreMystere = motMystere.charAt(i); // décompose le motMystere
            }
        }

        else if(oke == false){
            erreur ++;

            if(erreur==1){
                document.body.style.backgroundImage = "url(./css/02.jpg)";
            }

            if(erreur==2){
                document.body.style.backgroundImage = "url(./css/03.jpg)";
            }
            if(erreur==3){
                document.body.style.backgroundImage = "url(./css/04.jpg)";
            }
            if(erreur==4){
                document.body.style.backgroundImage = "url(./css/05.jpg)";
            }
            if(erreur==5){
                document.body.style.backgroundImage = "url(./css/06.jpg)";
            }
        }
    }

    // perdu
    else {
        document.body.style.backgroundImage = "url(./css/07.jpg)";
        document.querySelector('#clavier').style.display = "none";
        document.querySelector('#case').style.display = "none";
        document.querySelector('h2').style.display = "none";
        document.querySelector(".rejouer").classList.remove("hidden");

        for(var i=0; i<lesInput.length; i++){
            lesInput[i].value ="";
        }
        motMystere = motATrouver[Math.floor(Math.random()*motATrouver.length)];
        console.log(motMystere);
        document.body.querySelector("#case").innerHTML="";
        for(i=0; i<motMystere.length; i++) {

            var input = document.createElement("input");
            input.setAttribute('class', 'letter');
            input.setAttribute('type', 'text');
            input.setAttribute('maxlength', '1'); // limiter le nombre de caractères
            document.body.querySelector("#case").appendChild(input);
            var lettreMystere = motMystere.charAt(i); // décompose le motMystere
        }
    }

}


var play1 = document.querySelector(".gagne");

play1.addEventListener('click', retente2);

var play2 = document.querySelector(".rejouer");

play2.addEventListener('click', retente);

function retente() {
    document.body.style.backgroundImage = "url(./css/01.jpg)";
    document.querySelector('#clavier').style.display = "flex";
    document.querySelector('#case').style.display = "flex";
    document.querySelector('h2').style.display = "flex";
    document.querySelector(".rejouer").classList.add("hidden");
    erreur = 0;
}

function retente2() {
    document.body.style.backgroundImage = "url(./css/01.jpg)";
    document.querySelector('#clavier').style.display = "flex";
    document.querySelector('#case').style.display = "flex";
    document.querySelector('h2').style.display = "flex";
    document.querySelector(".gagne").classList.add("hidden");
    erreur = 0;
}




