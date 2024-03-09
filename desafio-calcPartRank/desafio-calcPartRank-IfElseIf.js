let playerWinRate = calculateWinRate(69, 19)
let playerLevel = calculateRank()

function calculateWinRate(wins, losses) {
    let winRate = wins - losses
    return winRate
}

function calculateRank() {
    if(playerWinRate <= 10) {
        level = "Ferro"
    }
    else if(playerWinRate > 10 && playerWinRate <= 20) {
        level = "Bronze"
    }
    else if(playerWinRate > 20 && playerWinRate <= 50) {
        level = "Prata"
    }
    else if(playerWinRate > 50 && playerWinRate <= 80) {
        level = "Ouro"
    }
    else if(playerWinRate > 80 && playerWinRate <= 90) {
        level = "Diamante"
    }
    else if(playerWinRate > 90 && playerWinRate <= 100) {
        level = "Lendário"
    }
    else if(playerWinRate > 100) {
        level = "Imortal"
    }
    else {
        console.log("Nível inválido!")
    }
    return level
}

console.log(`O Herói tem de saldo de ${playerWinRate} e está no nível de ${playerLevel}!`)