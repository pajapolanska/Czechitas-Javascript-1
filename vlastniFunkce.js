// napiste funkci, která vypíše součet, rozdíl, násobek a podíl 2 zadaných čísel, rozdíl zobrazí jako absolutní hodnotu přes funkci math.abs


let cislo1 = Number(prompt("zadej první číslo"));
let cislo2 = Number(prompt("zadej druhé číslo"));



function pocitadlo (cislo1 , cislo2) {
console.log(cislo1 + cislo2);
console.log(cislo1*cislo2);
console.log(cislo1/cislo2);
console.log(Math.abs(cislo1 - cislo2))
}

pocitadlo(cislo1,cislo2);
