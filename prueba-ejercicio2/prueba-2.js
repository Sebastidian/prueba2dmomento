'use stric'


let ages = [15, 45, 50,];
let miEdad = 30;


ages.push(miEdad);
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 25)
        alert("Edad mayor a 25 encontrada: " + ages[i]);
    }