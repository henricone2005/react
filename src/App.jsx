import Cabecalho from "./components/cabecalho";
import Conteudo from "./components/conteudo";
import Rodape from "./components/rodape";



export default function App() {
 
 //Area declarativa
 let meuNome ="Henrique";
 
  return (
    <>
      {/* area imperativa */}
      <div className="container">

      <Cabecalho nomeDoUsuario={meuNome}>
      Hello wordl!!

      </Cabecalho>
        
        <Conteudo></Conteudo>

        <Rodape></Rodape>
        <section className="conteudo">
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa aut ducimus, nisi temporibus reprehenderit, voluptatem natus molestiae ipsam id illo impedit eius velit delectus esse sed laborum non modi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe quo ullam amet ratione adipisci recusandae quam doloremque similique, minima, aliquid voluptate velit ipsa. Molestias modi provident doloremque recusandae fuga.</p>
        </div>


        </section>
        <footer className="rodape">
          <p>
            &copy: Todos os meus direitos reservados. 2023
          </p>
        </footer>
      </div>
      
      </>
  )
}
