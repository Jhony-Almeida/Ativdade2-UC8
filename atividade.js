console.log ("==============================================================================================")
console.log ("Para efetuar o cadastro do evento é preciso responder algumas peguntas:")

console.log ("Qual a data que você quer para marcar o evento?")

let diaEvento = 30062022 //Data que foi marcada para o evento
let diaAtual = 23062022 //Data de Atual

console.log (diaEvento)

    if (diaEvento > diaAtual) {
        console.log ("A data marcada esta disponivel, Continue!") //sim
    }
    else {
        console.log ("A data marcada não esta disponivel, Tente outro dia!") //não
    }

console.log ("Qual é sua idade?")

let idade = 18 //Idade que foi Inserida

console.log (idade)

    if (idade >= 18) {
        console.log ("Você tem a idade requisitada para o cadastro, Continue!") //sim
    }
    else {
        console.log ("Você não tem idade requisitada para realizar o cadastro.") //não
    }

console.log ("Digite o nome de todos os participantes e Palestrantes:")

let nomePart = ["Gabriel", "Carlos", "Adriano", "Roberto", "Ednaldo"] //nomes digitados 
let nomeTotal = nomePart.length

console.log (nomePart)

    if (nomeTotal < 100) { 
        console.log ("Evento cadastrado com sucesso!") //sim
        console.log ("Você cadastrou o Evento para o dia", diaEvento)
        console.log ("Com o total de", nomeTotal,"Pessoas!")
    }
    else { 
        console.log ("O número de pessoa ultrapassou o limite pessoas em um evento!") //não
    }
