// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

const saudacao1 = ola => ola   // tentativa de usar arrow function
console.log(` ${('Opa')}!`)

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())