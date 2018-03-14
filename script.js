/*var petit = 15;
var grand = 30;


var bouton = document.getElementById ('clickme');
bouton.addEventListener('click', function (){
    var taille = getComputedStyle(document.getElementById('bigger')).fontSize;
    var taille = parseInt(taille);
    console.log(taille);
    if (taille==petit){
            document.getElementById('bigger').style.fontSize ="30px"; 
            
        }
    else if (taille==grand){
        document.getElementById('bigger').style.fontSize ="15px";
    }
});
*/

var text= document.getElementById('bigger');

text.addEventListener('click', function(){
    if (text.style.fontSize === "42px"){
        text.style.fontSize = "";
    } else {
        text.style.fontSize = "42px"
    }
});




var defaulthauteur = getComputedStyle(document.getElementById('carre')).height;
defaulthauteur = parseInt(defaulthauteur);
var hauteur = getComputedStyle(document.getElementById('carre')).height;
hauteur = parseInt(hauteur);

var bouton1 = document.getElementById ('button1');
bouton1.addEventListener('click', function(){
    hauteur = hauteur + 10;
    console.log(hauteur);
    document.getElementById('carre').style.height = hauteur +"px";
        if(hauteur>300){
            document.getElementById('carre').style.height = defaulthauteur +"px";
            hauteur = defaulthauteur;
            console.log(defaulthauteur);
        }   
});


var colordefault = getComputedStyle(document.getElementById('carre')).backgroundColor;
var color = getComputedStyle(document.getElementById('carre')).backgroundColor;

console.log(colordefault);
var bouton2 = document.getElementById('button2');
bouton2.addEventListener('click', function(){
    color = document.getElementById('carre').style.backgroundColor = "rgb(154, 205, 50)";

});

var bouton3 = document.getElementById('button3');
bouton3.addEventListener('click', function(){
    color = document.getElementById('carre').style.backgroundColor = colordefault; 
});


 
var bouton4 = document.getElementById('button4');
bouton4.addEventListener('click', function(){
    document.getElementById('carre').style.display = "none";
})

var bouton5 = document.getElementById('button5');
bouton5.addEventListener('click', function(){
    document.getElementById('carre').style.display = "block";
})


// Exercice 3 //


var objet = document.getElementById('carre');
document.addEventListener('keyup', function (upAndDown){
    var timeup;
    if(upAndDown.keyCode == 38) {
        mouvement();
        setTimeout (mouvementbas,500);
}});

function mouvement(){
    
    if (objet.offsetTop!= -100){
        objet.style.top = -100+'px';
        console.log(objet.offsetTop);}         
}

function mouvementbas(){
    objet.style.top = 0+'px';
}



