import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

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
                    <Link to="/about" className="text-blue-500">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						                                {/* Breadcrumbs ahora está justo encima del texto */}
														<Breadcrumbs />
						<div className="title contact-title">
						Contáctame
						</div>

						<div className="subtitle contact-subtitle">
						Gracias por tu interés en ponerte en contacto conmigo. Estoy siempre disponible para discutir posibles proyectos, responder a tus preguntas o escuchar tus sugerencias. Ya sea que estés buscando desarrollar una página web personalizada o una aplicación móvil, me comprometo a ofrecer soluciones de alta calidad, adaptadas a tus necesidades.Para consultas directas, no dudes en enviarme un correo electrónico a
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
