import Foco from "../../componentes/foco/Foco.tsx";
import Tecnologias from "../../componentes/tecnologias/Tecnologias.tsx";

export default function SecaoTecnologias() {
    return (
        <div className="container d-flex justify-content-between flex-column flex-lg-row gap-5 mt-lg-0 mt-4">
            <div className="d-flex col-lg-6 col-12">
                <Foco/>
            </div>
            <div className="col-lg-6 col-12">
                <Tecnologias/>
            </div>

        </div>
    )
}