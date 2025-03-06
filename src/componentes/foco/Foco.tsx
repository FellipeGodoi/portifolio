import Foguete from "../../imagens/imagensPortifolio/foguete-azul.png";
import "./StyleFoco.css"
export default function Foco () {
    return (
        <div className="foco-div ps-5 ">
            <div className=" d-flex justify-content-between  ">
                <div className=" col-md-9 d-flex justify-content-start flex-column pt-5">
                    <span className="fw-bold fs-4 mb-3"> Foco atual </span>
                    <span className="fs-6 fw-semibold">Atualmente, estudo linguagens e ferramentas básicas voltadas para o desenvolvimento <b> Front-end
                        (HTML, CSS, TypeScript e React)</b>, juntamente com outras ferramentas importantes para o desenvolvimento de sistemas, como <b>Git e Figma.</b></span>
                </div>
                <img
                    alt="Foguete"
                    src={Foguete}
                    className="navbar-brand img-fluid"
                    style={{
                        height: "100%",
                        width: "auto",
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="d-flex flex-column justify-content-start pe-5 pb-5">
                <span className="fw-bold fs-4 mb-2"> Visando meu futuro </span>
                <span className="fs-6 fw-semibold">Planejo ser um desenvolvedor especializado em front-end porém
                    com conhecimento em back-end. A curto prazo, estudarei <b> Node.js e Spring Boot. </b></span>
            </div>
        </div>
    )
}