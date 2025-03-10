import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

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
                    <Link to="/about" className="text-blue-500">Sobre mí</Link>
                </li>
            </ul>
        </nav>
    );
};

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "about");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`About | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="about" />

                <div className="content-wrapper">
                    <div className="about-logo-container">
                        <div className="about-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-right-side">
                                {/* Breadcrumbs ahora está justo encima del texto */}
                                <Breadcrumbs />

                                <div className="title about-title">
                                    {INFO.about.title}
                                </div>

                                <div className="subtitle about-subtitle">
                                    {INFO.about.description}
                                </div>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                    </div>
                                </div>

                                <div className="about-socials">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                        <div className="about-socials-mobile">
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

export default About;
