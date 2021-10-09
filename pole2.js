//for cyklus pro nalezeni nejmensiho cisla

let cislo = Number(prompt("Zadej:"));
let pole = [];
while (cislo != 0) {
    pole.push(cislo)
    cislo = Number(prompt("Zadej:"));    
}
let nejmensiCislo = pole[0];
for(let i = 0; i < pole.length; i++) {
  if(nejmensiCislo > pole[i]) {
    nejmensiCislo = pole[i];
  }
}

console.log("nejmenší číslo v poli je " + nejmensiCislo);
