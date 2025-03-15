// components/pages/projects.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AllProjects from "../components/projects/allProjects";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/projects.css";

// Componente Breadcrumbs
const Breadcrumbs = () => {
    return (
        <nav className="breadcrumbs-container">
            <ul className="flex space-x-2 text-gray-600">
                <li>
                    <Link to="/" className="text-blue-500">Inicio</Link>
                </li>
                <li>/</li>
                <li>
                    <Link to="/about" className="text-blue-500">Proyectos</Link>
                </li>
            </ul>
        </nav>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Obtener los proyectos desde el backend
        axios
            .get("http://localhost:3002/projects") // Asegúrate de que esta URL sea la correcta
            .then((response) => {
                setProjects(response.data); // Establece los proyectos obtenidos
            })
            .catch((error) => {
                console.error("Error al cargar los proyectos:", error);
            });
    }, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <NavBar active="projects" />
                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="projects-container">
                        <Breadcrumbs />
                        <div className="title projects-title">
                            Proyectos que he creado con el objetivo de hacer una diferencia.
                        </div>

                        <div className="subtitle projects-subtitle">
                            A lo largo de mi carrera como desarrollador Full-Stack, he trabajado en diversos proyectos que van desde aplicaciones web hasta soluciones móviles. Mi enfoque ha sido crear productos eficientes, escalables y con un diseño intuitivo.
                        </div>

                        <div className="projects-list">
                            <AllProjects projects={projects} /> {/* Pasa los proyectos a AllProjects */}
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
