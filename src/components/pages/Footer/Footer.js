import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";


function Footer() {
    return (
        <div className="footer-container">
            {/* <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our exclusive membership to receive the latest news and trends
        </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
        </p>
                <div className="input-areas">
                    <form>
                        <input
                            className="footer-input"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section> */}
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Galeria</h2>
                        <Link to="/galeria">Fotografía de nuestro trabajo</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>¿Quiénes somos?</h2>
                        <Link to="/sign-up"></Link>
                        <Link to="/">Melis Gustavo</Link>
                        <Link to="/">Nuestros inicios</Link>

                    </div>
                    
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>¿Cómo trabajamos?</h2>
                        <Link to="/">Contacto y presupuesto</Link>
                        <Link to="/">Contrato legal</Link>
                        <Link to="/">¡Empezamos a construir!</Link>

                    </div>
                    <div className="footer-link-items">
                        <h2>Contactanos</h2>
                        <Link to="/">Formulario</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                        <img style={{height:"30px"}} src={process.env.PUBLIC_URL + './images/logo.png'} alt="logo"></img> 

            </Link>
                    </div>
                    <small className="website-rights">M.G. CONSTRUCCIONES © 2021 || <a href="https://www.arrecode.com">arre[code]</a></small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className="social-icon-link"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            className="social-icon-link"
                            to={
                                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
                            }
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className="social-icon-link"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            className="social-icon-link"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Footer;
