# Desafio de projeto: Calculadora de Partidas Rankeadas

### Desafio do Bootcamp Potência Tech iFood - Programação do Zero, da plataforma [Digital Innovation One](https://www.dio.me/). 
### Feito com a utilização de:
![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/julunaedu)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Solução para o desafio
Nesse repositório será encontrado dois arquivos com diferentes soluções:  
[Arquivo que utiliza a estrutura condicional if...else if...else](desafio-calcPartRank-IfElseIf.js)  
[Arquivo que utiliza a estrutura de decisão switch case](desafio-calcPartRank-SwitchCase.js)

## Instruções para entrega
Deve ser utilizado:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

### Objetivo
#### Criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois retornar o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
- Se vitórias for menor do que 10 = Ferro
- Se vitórias for entre 11 e 20 = Bronze
- Se vitórias for entre 21 e 50 = Prata
- Se vitórias for entre 51 e 80 = Ouro
- Se vitórias for entre 81 e 90 = Diamante
- Se vitórias for entre 91 e 100= Lendário
- Se vitórias for maior ou igual a 101 = Imortal

### Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** e está no nível de **{nivel}**!"