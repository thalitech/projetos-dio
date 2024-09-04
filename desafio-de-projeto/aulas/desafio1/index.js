const nome = "Ana"
let xp = 10005
let nivel1= "Ferro"
let nivel2= "Bronze"
let nivel3= "Prata"
let nivel4= "Ouro"
let nivel5= "Platina Diamante"
let nivel6= "Ascendente"
let nivel7= "Imortal"
let nivel8= "Radiante"


if (xp <= 1000) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel1);
  } 
  
  else if (xp >= 1001 && xp <= 2000) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel2);
  } 
  
  else if (xp >= 2001 && xp <= 5000) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel3); 
  } 
  
  else if (xp > 6001 && xp <= 7000) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel4); 
  } 
  
  else if (xp >= 7001 && xp <= 8000) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel5); 
  } 
  
  else if (xp >= 8001 && xp <= 9000) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel6); 
  } 
  
  else if (xp => 9001 && xp <= 10000) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel7); 
  } 
  
  else if (xp => 10001) {
    console.log("O herói de nome " + nome + " está no nível de " +  nivel8); 
  } 
  
  else {
    console.log("O herói de nome " + nome + " está em um nível bem acima"); 
  }