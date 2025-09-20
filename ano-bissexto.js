// Accept a year from the user. In browser-like environments `input` may exist,
// but for Node.js we fall back to reading from process.argv.
function readYear() {
    if (typeof input === 'function') {
        return Number(input("Digite um ano: "))
    }
    const arg = process.argv[2]
    if (!arg) {
        console.log('Uso: node ano-bissexto.js <ano>')
        process.exit(1)
    }
    return Number(arg)
}

const ano = readYear()
if (!Number.isFinite(ano) || !Number.isInteger(ano)) {
    console.log('Por favor, informe um ano válido (número inteiro).')
    process.exit(1)
}

// Leap year rules:
// - Every year divisible by 4 is a leap year
// - Except years divisible by 100 are not leap years
// - Except years divisible by 400 are leap years
const isLeap = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)

if (isLeap) {
    console.log(`O ano ${ano} é bissexto`)
} else {
    console.log(`O ano ${ano} não é bissexto`)
}