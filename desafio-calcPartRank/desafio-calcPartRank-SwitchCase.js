let playerWinRate = calculateWinRate(119, 69)
let playerLevel = calculateRank()

function calculateWinRate(wins, losses) {
    let winRate = wins - losses
    return winRate
}

function calculateRank() {
    let level
    switch(true) {
        case playerWinRate <= 10:
            level = "Ferro"
        break
        case playerWinRate > 10 && playerWinRate <= 20:
            level = "Bronze"
        break
        case playerWinRate > 20 && playerWinRate <= 50:
            level = "Prata"
        break
        case playerWinRate > 50 && playerWinRate <= 80:
            level = "Ouro"
        break
        case playerWinRate > 80 && playerWinRate <= 90:
            level = "Diamante"
        break
        case playerWinRate > 90 && playerWinRate <= 100:
            level = "Lendário"
        break
        case playerWinRate > 100:
            level = "Imortal"
        break
        default:
            console.log("Nível inválido!")
    }
    return level
}

console.log(`O Herói tem de saldo de ${playerWinRate} e está no nível de ${playerLevel}!`)