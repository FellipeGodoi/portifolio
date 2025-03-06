import './App.css'
import Header from "./componentes/header/Header.tsx";
import Apresentacao from "./sessoes/apresentacao/Apresentacao.tsx";
import SecaoTecnologias from "./sessoes/tecnologias/SecaoTecnologias.tsx";



function App() {
    return (
        <>
            <Header />
            <main>
                <section id="Apresentacao" className="section mt-lg-5">
                    <Apresentacao/>
                </section>

                <section id="Tecnologias" className="section">
                    <SecaoTecnologias/>
                </section>

                <section id="Sobre" className="section">
                    <h2>Sobre</h2>
                </section>

                <section id="Projetos" className="section">
                    <h2>Projetos</h2>
                </section>
            </main>
            <div className="rodape">

            </div>
        </>
    );
}

export default App;
