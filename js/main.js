
// Punto 2:

document.addEventListener("DOMContentLoaded", () => {
    console.log("Contenido del DOM cargado")

// ----Variables----

let originArea=document.getElementById("origen");
let targetArea= document.getElementById("destino");
let groupButtons= document.getElementsByTagName("input");
let replaceBtn=document.getElementById("btn-reemplazar");
let addBtn=document.getElementsByClassName("btn-agregar");
let emptyBtn=document.getElementsByClassName("btn-vaciar");
let capsBtn=document.getElementsByClassName("btn-convertir-a-mayusculas");
let minBtn=document.getElementsByTagName("button");

// Punto 3:

function initialText() {
    let newText='<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';
    originArea.value=newText;
}

initialText();

// Punto 4:

function enableButtons(){
    if(originArea.value)
    {
        minBtn[0].disabled=false;
        for (let index = 0; index < groupButtons.length; index++) {
        groupButtons[index].disabled=false;
        }
    }else{
        minBtn[0].disabled=true;
        for (let index = 0; index < groupButtons.length; index++) {
            groupButtons[index].disabled=true;
            }
      
    }
}

// Punto 5 y 6:

// -----Funciones para Botones-----


function replace(){
        targetArea.innerHTML=originArea.value;
    }

function textAddition (){
    targetArea.innerHTML+=originArea.value;
    }

function textAddition5 (){
    for (let i = 0; i < 5; i++) {
    targetArea.innerHTML+=originArea.value;
    }
}

function textAddition10 (){
    for (let i = 0; i < 10; i++) {
    targetArea.innerHTML+=originArea.value;
    }
}

function textAdditionN (){
    let nValue= prompt("Please enter the amount of times you'd like the text to be added");
    if (parseInt(nValue)&& nValue<=80){
        for (let i = 0; i < nValue; i++) {
        targetArea.innerHTML+=originArea.value;
        }
    }else{
          alert("You need to enter a number value less than 80");
    }
}

function empty(){
    targetArea.innerText="";
}

function toAllCaps(){
    targetArea.innerText=targetArea.innerText.toUpperCase();
}

function toLowerCase(){
    targetArea.innerText=targetArea.innerText.toLowerCase();
}

// -----Callbacks Botones-----

originArea.addEventListener("input", enableButtons);

replaceBtn.addEventListener("click", replace);

addBtn[0].addEventListener("click", textAddition);

addBtn[1].addEventListener("click", textAddition5);

addBtn[2].addEventListener("click", textAddition10);

addBtn[3].addEventListener("click", textAdditionN);

emptyBtn[0].addEventListener("click",empty);

capsBtn[0].addEventListener("click", toAllCaps)

minBtn[0].addEventListener("click",toLowerCase)

// Punto 7

let done=document.getElementsByTagName("li");

function addOk(){
    for (let k = 0; k < done.length; k++) {
        done[k].innerText="[Ok] ".concat(done[k].innerText);    
    }
}

addOk();

// document.addEventListener("QUE PONDRIA ACA? si quisiera llamar la funcion despues de cargar el JS", addOk);

})
