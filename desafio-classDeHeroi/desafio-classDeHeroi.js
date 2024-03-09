// declaração de variaveis 
let nomeDoHeroi = "Julia"
let XPdoHeroi = 6789
let nivelDoHeroi 

// estrutura de decisão if e else-if
if(XPdoHeroi <= 1000){
    nivelDoHeroi = "Ferro"
} else if (1001 <= XPdoHeroi && XPdoHeroi <= 2000){
    nivelDoHeroi = "Bronze"
} else if (2001 <= XPdoHeroi && XPdoHeroi <= 5000){
    nivelDoHeroi = "Prata"
} else if (5001 <= XPdoHeroi && XPdoHeroi <= 7000){
    nivelDoHeroi = "Ouro"
} else if (7001 <= XPdoHeroi && XPdoHeroi <= 8000){
    nivelDoHeroi = "Platina"
} else if (8001 <= XPdoHeroi && XPdoHeroi <= 9000){
    nivelDoHeroi = "Ascendente"
} else if (9001 <= XPdoHeroi && XPdoHeroi <= 10000){
    nivelDoHeroi = "Imortal"
} else if (10001 <= XPdoHeroi){
    nivelDoHeroi = "Radiante"
}

// mensagem de saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + "!")
