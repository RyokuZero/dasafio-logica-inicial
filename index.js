
let name = "Brabo"
let nivel = 10001

switch (true){
      case (nivel <= 1000):
      console.log("O Herói de nome " + name + " está no nível de Ferro")
      break
      
      case (nivel >= 1001 && nivel <= 2000):
      console.log("O Herói de nome " + name + " está no nível de Bronze")
      break
      
      case (nivel >= 2001 && nivel <= 5000):
      console.log("O Herói de nome " + name + " está no nível de Prata")
      break
      
      case (nivel >= 5001 && nivel <= 7000):
      console.log("O Herói de nome " + name + " está no nível de Ouro")
      break
      
      case (nivel >= 7001 && nivel <= 8000):
      console.log("O Herói de nome " + name + " está no nível de Platina")
      break
      
      case (nivel >= 8001 && nivel <= 9000):
      console.log("O Herói de nome " + name + " está no nível Ascendente")
      break
      
      case (nivel >= 9001 && nivel <= 10000):
      console.log("O Herói de nome " + name + " está no nível Imortal")
      break
      
      case (nivel > 10000):
      console.log("O Herói de nome " + name + " está no nível Radical")
      break
      
      default:
        console.log("Por favor informar dados numericos apenas");
}

