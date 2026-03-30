import ListaProdutos from "../HomeAdmin/ListaProdutos"

function HomeUsuario({produtos,aumentarQuantidade, diminuirQuantidade}){ 
  return (
    <div>
      <h1>Area do Usuario</h1>
      <ListaProdutos
      produtos={produtos}
      aumentarQuantidade={aumentarQuantidade}
      diminuirQuantidade={diminuirQuantidade}/>
    </div>
  )
}


export default HomeUsuario