import React from "react";

const Footer = () => {
    return (
        <footer>
            <p>© 2023 Heracles Fitness Club. Todos los derechos reservados.</p>
            <p>Av. Yucatán, La Florida - 97138 Mérida, Yucatán</p>
            <div className="social-links">
                <a href="https://www.instagram.com/heracles_fitness_club?igsh=MWNlMjA1cXV2M3dqZQ==" target="_blank">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.tiktok.com/@heracles.fitness0?_t=ZS-8uEJkG6wMk5&_r=1" target="_blank">
                    <i className="fab fa-tiktok"></i> TikTok
                </a>
                <a href="https://maps.app.goo.gl/zZJjcwKgcVaTHDzS8?g_st=iw" target="_blank">
                    <i className="fas fa-map-marker-alt"></i> Ubicación
                </a>
            </div>
            <p>Tel: 9991070807</p>
        </footer>
    );
};

export default Footer;