import { useState, useEffect } from "react";
import "./StyleHeader.css";
import HeaderImagem from "../../imagens/imagensPortifolio/headerLogo.png";

export default function Header() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["Apresentacao", "Tecnologias", "Sobre", "Projetos"];
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg header fixed-top bg-white">
            <div className="container">
                <img
                    alt="Logo"
                    src={HeaderImagem}
                    className="navbar-brand img-fluid"
                    style={{
                        height: "100%",
                        width: "auto",
                        objectFit: "contain",
                        maxWidth: "50px",
                    }}
                />
                <span className="header-texto fw-bold fs-4">Dev Front-End</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center justify-content-lg-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav text-center px-5 gap-lg-3 px-5 fw-bold">
                        <li className="nav-item link-header ">
                            <span className={`px-3 nav-link ${activeSection === "Apresentacao" ? "active" : ""}`} onClick={() => scrollToSection("Apresentacao")}>
                                Apresentação
                            </span>
                        </li>
                        <li className="nav-item link-header">
                            <span className={`px-3 nav-link ${activeSection === "Tecnologias" ? "active" : ""}`} onClick={() => scrollToSection("Tecnologias")}>
                                Tecnologias
                            </span>
                        </li>
                        <li className="nav-item link-header">
                            <span className={`px-3 nav-link ${activeSection === "Sobre" ? "active" : ""}`} onClick={() => scrollToSection("Sobre")}>
                                Sobre
                            </span>
                        </li>
                        <li className="nav-item link-header">
                            <span className={`px-3 nav-link ${activeSection === "Projetos" ? "active" : ""}`} onClick={() => scrollToSection("Projetos")}>
                                Projetos
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
