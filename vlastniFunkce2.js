//Napište funkci, která vypíše zda je čislo prvočíslo

function prvocislo(cislo) {
  for(let i = 2; i < cislo; i+1 ) {
    if(cislo % i === 0) {
      return false;
    }
  }
  return true;
}

let vstup = console.log(prompt("zadej cislo"));

