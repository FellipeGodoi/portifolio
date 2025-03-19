import Tablet from "../../imagens/imagensPortifolio/tablet astronauta.png";

import "./StyleApresentacao.css"


export default function Apresentacao() {

    function baixarCurriculo  (): void {
        console.log("baixarCurriculo")
    }
    return (
        <div className="container-lg d-flex justify-content-between apresentacao">
            <div className="container-lg  d-flex flex-column col-lg-6 justify-content-between gap-3 py-5">
                <div className="justify-content-start d-flex ">
                    <span className="fw-bold fs-3 custom-text">Olá me chamo Fellipe de Godoi</span>
                </div>
                <span className="text-justify custom-text fs-5 fw-semibold">
                    Sou estudante de Análise e Desenvolvimento de Sistemas na FATEC Mogi das
                    Cruzes e pretendo me tornar um desenvolvedor front-end web, mas com conhecimento
                    para atuar no back-end e com protótipos quando necessário.
                </span>
                <span className="custom-text fs-5 fw-semibold">
                    Este site foi desenvolvido em React com TypeScript. Visite meu GitHub ou entre em contato pelo LinkedIn!
                </span>

                <div className="botoes d-flex justify-content-md-between ">
                    <div className="d-flex gap-lg-2">
                        <span className="ri-github-fill icones"/>
                        <span className="ri-linkedin-box-fill icones"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="botao-curriculo fw-bold fs-5 px-3 py-2 " onClick={() => baixarCurriculo()}>
                            Curriculo  <span className="ri-download-2-line text-white"/> </span>
                    </div>
                </div>
            </div>


            <div className="d-none d-lg-block">
                <img
                    alt="Astronauta"
                    src={Tablet}
                    className="navbar-brand img-fluid"
                    style={{
                        height: "100%",
                        width: "auto",
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}
