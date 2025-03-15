import './App.css'
import Header from "./componentes/header/Header.tsx";
import Apresentacao from "./sessoes/apresentacao/Apresentacao.tsx";
import SecaoTecnologias from "./sessoes/tecnologias/SecaoTecnologias.tsx";
import Sobre from "./sessoes/sobre/Sobre.tsx";
import SecaoProjetos from "./sessoes/projetos/SecaoProjetos.tsx";

function App() {
    return (
        <>
            <Header />
            <main className="d-flex flex-column gap-4 mt-1 pt-5">
                <section id="Apresentacao" className="section">
                    <Apresentacao/>
                </section>

                <section id="Tecnologias" className="section">
                    <SecaoTecnologias/>
                </section>

                <section id="Sobre" className="section">
                    <Sobre/>
                </section>

                <section id="Projetos" className="section">
                    <SecaoProjetos/>
                </section>
            </main>
            <div className="rodape d-flex justify-content-center">
                <p className="text-white">v 1.0</p>
            </div>
        </>
    );
}

export default App;
