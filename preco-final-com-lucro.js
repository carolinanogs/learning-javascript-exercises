const produtos = [], precos = [], lucros = [], finais = []
let i = 0

do {
  const produto = prompt("Digite o nome do produto:\n(Digite 0 para sair)")
  if (produto === "0") 
    break
  const preco = Number(prompt("Qual o preço do produto (R$)?"));
  const lucro = Number(prompt("Qual o lucro desejado em cima do produto (%)?"))
  const final = preco * (1 + lucro / 100);
  produtos[i]=produto
  precos[i]=preco
  lucros[i]=lucro
  finais[i]=final

  alert(`Preço final de "${produto}": R$ ${final}`);
  i++
} while (true)

console.log("Resumo:")
for (let p = 0; p < produtos.length; p++) {
  console.log(`${produtos[p]} | preço R$ ${precos[p]} | lucro ${lucros[p]}% | final R$ ${finais[p]}`);
}
