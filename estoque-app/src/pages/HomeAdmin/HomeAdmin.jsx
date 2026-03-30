
import ListaProdutos from "./ListaProdutos"
import CadastroProduto from "./CadastroProduto"


function HomeAdmin({
  produtos,
  adicionarProduto,
  aumentarQuantidade,
  diminuirQuantidade,
  removerProduto
}) {
  return (
    <div>
      <h1>Área do Administrador</h1>

      <CadastroProduto adicionarProduto={adicionarProduto} />

      <ListaProdutos
        produtos={produtos}
        aumentarQuantidade={aumentarQuantidade}
        diminuirQuantidade={diminuirQuantidade}
        removerProduto={removerProduto}
      />
    </div>
  )
}

export default HomeAdmin