import "./StyleTecnologias.css";
import IconePersonalizado from "../icones-personalizados/IconePersonalizado.tsx";
import Html from "../../imagens/outrosIcones/Html.png";
import Css from "../../imagens/outrosIcones/Css.png";
import ReactJs from "../../imagens/outrosIcones/React.png";
import Java from "../../imagens/outrosIcones/java logo.png";
import NodeJS from "../../imagens/outrosIcones/NodeJs.png";
import TypeScript from "../../imagens/outrosIcones/TypeScript.png";
import Js from "../../imagens/outrosIcones/JavaScript.png";
import Figma from "../../imagens/outrosIcones/Figma.png";
import Spring from "../../imagens/outrosIcones/Spring.png";

export default function Tecnologias() {
    return (
        <div>
            <div className="d-flex justify-content-center flex-column ">
                <span className="fs-4 fw-bold mb-3">Front-end</span>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <IconePersonalizado imagemUrl={Html} titulo={"Html"} dominio={4} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <IconePersonalizado imagemUrl={Css} titulo={"Css"} dominio={4} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <IconePersonalizado imagemUrl={Js} titulo={"JavaScript"} dominio={3} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <IconePersonalizado imagemUrl={Figma} titulo={"Figma"} dominio={4} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <IconePersonalizado imagemUrl={ReactJs} titulo={"ReactJs"} dominio={4} />
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-center flex-column">
                    <span className="fs-4 fw-bold mb-3 pt-5">Back-end</span>
                    <div className="d-flex flex-wrap justify-content-between gap-4">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                            <IconePersonalizado imagemUrl={TypeScript} titulo={"TypeScript"} dominio={3} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                            <IconePersonalizado imagemUrl={NodeJS} titulo={"NodeJS"} dominio={2} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                            <IconePersonalizado imagemUrl={Java} titulo={"Java"} dominio={3} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                            <IconePersonalizado imagemUrl={Spring} titulo={"Spring"} dominio={3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
