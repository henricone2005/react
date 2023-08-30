import "./Produtos.css";

export default function Produtos() {
  return (
    <div>
            <h1>PRODUTOS</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
                {listaprodutos.map(  (Produto, indice,)=>(
                    <tr key={indice}>
                        <td>{Produto.id}</td>
                        <td>{Produto.nome}</td>
                        <td>{Produto.preco}</td>
                    </tr>
                ))}
            </table>
       
        </div>
  )
}


 export const listaprodutos = [
    {id:1,nome: 'Teclado',preco:150},
    {id:1,nome: 'Mouse',preco:120},
    {id:1,nome: 'Monitor',preco:950},
]