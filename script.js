
// Esercizio 1 

let a = 5;
let b = 5;
if (a>b){
    console.log(a + " è più grande di " + b);
} else if (a===b) {
    console.log( "a, ovvero " + a + " è uguale a b che è il numero " + b);

} else {
    console.log(b + " è più grande di " + a );
}


// Esercizio 2

let num = 20

if (num<5){
    console.log("Tiny");
} else if (num<10) {
    console.log("Small");
}else if (num<15) {
    console.log("Medium");
} else if (num<20) {
    console.log("Large");
} else {
    console.log("Huge");
}

// Esercizio 3

for (let i=0; i<=10; i++){
    if(i === 3){
        continue
    } else if (i===8){
        continue
    }
    console.log(i)
}

// Esercizio 4


for (let i=0; i<=15; i++ ){
    if(i%2===0){
        console.log("il mumero " + i + " è pari");
    }else{
        console.log("il mumero " + i + " è dipsari");
    }
} 

// Esercizio Extra  1

let int1 = 2;
let int2 = 10;

let addizione = int1+int2;
let sottrazzione = int1-int2;
let sottrazzione2 = int2-int1;

    if (int1 === 8 || int2 ===8  ){
        console.log("uno tra i due numeri interi è 8 !")
    } else if (addizione === 8 ){
        console.log("la somma tra i due numeri è 8!")
    } else if (sottrazzione === 8 || sottrazzione2===8 ) {
        console.log("La sottrazionie tra i due numeri inseriti fa 8!")
    }else{
        console.log("non ho trovato il numero 8.");
    }

// Esercizio Extra 2 + Esercizio 3


let art1 =10;
let art2 =20;
let art3 =5;
let spedizione = 10;
let risparmio = (art1+art2+art3)*0.8;
let totalShoppingCart = (art1+art2+art3) - ((art1+art2+art3)*20)/100;

if(totalShoppingCart <=50){
    console.log("oggi è il Black Friday! hai risparmiato : " + risparmio + " € !");
    console.log("il costo totale compreso di spedizione è di : " + (totalShoppingCart + spedizione) + " €");

}else{
    console.log("oggi è il Black Friday! hai risparmiato : " + risparmio + " € !");
    console.log("Congratulazioni! Hai raggiunto la spesa minima e non paghi le spese di spedizione!  Il totale del tuo ordine è di : " + totalShoppingCart + "€");
}


// Esercizio Extra 4


const isMale = false;

const gender = isMale? "Male" : "female";
console.log("gender :", gender); 


//Esercizio Extra 5




for(let i=1; i<=100; i++){
    let risultato = i;
    let èDivisoreDiTre = i % 3 === 0;
    let èDivisoreDiCinque = i % 5 === 0;
  if (èDivisoreDiCinque && èDivisoreDiTre) {
    risultato = "FizzBuzz"
  } else if (èDivisoreDiTre) {
    risultato = "Fizz"
  } else if (èDivisoreDiCinque) {
    risultato = "Buzz"
  }
  console.log(risultato)
}


