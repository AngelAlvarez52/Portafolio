import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Inicio</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">Sobre mi</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Proyectos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Experiencia</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contacto</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2025  Angel Alvarez.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
