
function calculandoRankeadas(vitorias, derrotas){
	let sVitorias = vitorias - derrotas
    console.log("Saldo de Rankeadas é: " + sVitorias);
    return sVitorias
}

function verNivel(xp){
    let nivel= ''
    if (xp <= 10) {
        nivel = "Ferro"
      } 
      
      else if (xp >= 11 && xp <= 20) {
        let nivel= "Bronze"
      } 
      
      else if (xp >= 21 && xp <= 50) {
        let nivel= "Prata"
      } 
      
      else if (xp > 51 && xp <= 80) {
        let nivel= "Ouro"
      } 
      
      else if (xp >= 81 && xp <= 90) {
        let nivel= "Diamante"
      } 
      
      else if (xp >= 91 && xp <= 100) {
        let nivel= "Lendário"
      } 
      
      else if (xp => 101) {
        let nivel= "Imortal"
      } 
      else {
        console.log("Não encontrado"); 
      }

    return nivel
}

let saldoVitorias = calculandoRankeadas(5000, 2000); 
let nivel = verNivel(9)
console.log("O Herói tem de saldo de "+ saldoVitorias + " está no nível de " + nivel); 
