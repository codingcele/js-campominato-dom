
const myContainer = document.getElementById("container");

function createBox() {
    const mioElement = document.createElement("div");
    mioElement.classList.add("box");

    return mioElement;
}

let min = 0;
let max = 99;

function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let quanti = 16;
let minNum = 0;
let maxNum = 99;

function randomNumbers(quanti, minNum, maxNum) {

    bombs = [];
    
    while (bombs.length < quanti) {
        let newNumber = randomInteger(minNum, maxNum);

        if(!bombs.includes(newNumber)) {
            bombs.push(newNumber);
        }
    }
    return bombs;
}

function myFunction() {
    for (let i = 0; i < 100; i++) {

        let nuovoElemento = createBox();
    
        myContainer.appendChild(nuovoElemento);
    }

    y = 0;
    while (y < 100) {
        const boxes = document.getElementsByClassName('box');
        let nuovoNum = boxes[y];
        const element = `<div class="num">${y + 1}</div>`;
        nuovoNum.innerHTML += element;
        y++;
    }

    randomNumbers(16, 0, 99);

    let clicked = [];

    const boxes = document.getElementsByClassName('box');

    console.log(bombs);

    for (let i = 0; i < 100; i++) {
        let nuovoNum = boxes[i];
        if (!nuovoNum.classList.contains("stop")) {
            nuovoNum.onclick = function() {
                if (bombs.includes(i)) {  
                    nuovoNum.classList.add("bk-red");
                    e = 0;
                    while (e < 100) {
                        let ogg = boxes[e];
                        ogg.classList.add("stop");
                        ogg.onclick = null;
                        e++;
                    }
                    document.getElementById("score").innerHTML = "Hai perso! Punteggio: " + clicked.length +"."
                }
                else {
                    nuovoNum.classList.add("bk-blue");
                    if (!clicked.includes(i + 1)) {
                        clicked.push(i + 1);
                        console.log(clicked);
                        console.log(i + 1);
                        if (clicked.length == 84) {
                            document.getElementById("score").innerHTML = "Hai Vinto!"
                            e = 0;
                            while (e < 100) {
                                let ogg = boxes[e];
                                ogg.classList.add("stop");
                                e++;
                                return;
                            }
                        }
                    }
                }
            }
        }  
    }
}

document.getElementById("play").addEventListener("click", function() {
    myContainer.innerHTML = "";
    document.getElementById("score").innerHTML = ""
    setTimeout(myFunction, 500);
});