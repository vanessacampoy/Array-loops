//Array e Loops - é um grupo de valoras geralmente relacionados. Servem para guardarmos diferentes valores e uma única variável
var roupas = ["Calça", "Blusa", "Camiseta"]
console.log(roupas[2])
console.log(roupas)

roupas.pop() //remove o último item e retorna ele
roupas.push("Vestido") //adiciona um item ao final da array
roupas.length //mostra a quantidade de itens na array
console.log(roupas)

//For Loop - faz algo repetidamente até que um condição seja atingida
for (var numero = 1; numero <= 10; numero++) {
  console.log(numero)
}


//While Loop - 
var i = 0
while (i <= 5) {
  console.log(i)
  i++
}


//Arrays e Loops
//Break - o loop irá parar quando encontrar a palavra break
var frutas = ["carambola", "framboesa", "caqui", "morango"]
for (var item = 0; item < frutas.length; item++) {
  console.log(frutas[item])
  if(frutas[item] === "framboesa") {
    break
  }
}

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

//console.log(frutas[2])
//frutas.push("banana")
//console.log(frutas)

//forEach - é um método que executa uma função para cada item da Array.É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)
var frutas =  ["carambola", "framboesa", "caqui", "morango", "JACA"] 
  frutas.forEach(function(fruta, index) {
    console.log(fruta, index)
  })

  //Exercícios
  //criar uma array com os anos em que o Brasil ganhou a copa 
  var campeaoCopa = [1959, 1962, 1970, 1994, 2002]
  
  for (var item = 0; item < campeaoCopa.length; item++) {
    console.log(`O Brasil ganhou a copa de: " ${campeaoCopa[item]}`)
  }

  for (var item = 0; item < campeaoCopa.length; item++) {
  console.log(campeaoCopa [item]) 
  if(campeaoCopa[item] === 1970){
    break
    }
  } 

  var time = ["Corinthians", "São Paulo", "Palmeiras", "Santos", "Flamengo"]
  console.log(time)

  for (var n = 0; n <= 5; n++) {
    console.log(time [n])
    if (time [n] === "Santos") {
      break
    }
  }

