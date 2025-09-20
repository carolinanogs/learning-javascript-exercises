let qtd
do {
  qtd = Number(prompt("Quantidade de notas: "))
  if (isFinite(qtd) && qtd > 0 && qtd % 1 === 0) break
  alert("Digite um inteiro positivo.");
} while (true)

let soma = 0
for (let i = 1; i <= qtd; i++) {
  let nota
  do {
    nota = Number(prompt(`Nota ${i}: `))
    if (isFinite(nota)) break
    alert("Digite um número válido.")
  } while (true)
  soma += nota
}

const media = soma / qtd
console.log(`Média: ${media} — ${media >= 7 ? "aprovado(a)" : "reprovado(a)"}`)