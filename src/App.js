import React, { useEffect } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import TextBlock from "./components/TextBlock";
import Footer from "./components/Footer";
import "../styles/styles.css";

const App = () => {
    useEffect(() => {
        // Animación del título al hacer scroll
        const header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("translucent");
            } else {
                header.classList.remove("translucent");
            }
        });

        // Animación de despliegue de textos al hacer scroll
        const textBlocks = document.querySelectorAll(".text-block, .additional-text");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("slide-in-fwd-center");
                    }
                });
            },
            { threshold: 0.5 }
        );

        textBlocks.forEach((block) => {
            observer.observe(block);
        });
    }, []);

    return (
        <div>
            <Header />
            <Gallery />
            <div className="additional-text fade-in">
                <p>
                    <strong>
                        Centro de Entrenamiento especializado en Powerlifting y Funcional. Clases con instructores certificados y área gym para alcanzar tus objetivos.
                    </strong>
                </p>
            </div>
            <div className="text-container">
                <TextBlock
                    title="Servicios"
                    content={
                        <>
                            <p>
                                En Heracles Fitness Club, entendemos que cada persona tiene sus propias necesidades y preferencias cuando se trata de entrenamiento. Por eso, ofrecemos dos opciones para que puedas elegir la que mejor se adapte a ti:
                            </p>
                            <ul>
                                <li>
                                    <strong>Clases de entrenamiento de Powerlifting Heracles</strong>
                                    <p>
                                        Únete a nuestras clases de entrenamiento de Powerlifting Heracles, diseñadas para ayudarte a alcanzar tus objetivos de fitness de manera segura y efectiva. Nuestros entrenadores experimentados te guiarán a través de un programa de entrenamiento que se adapte a tus necesidades y objetivos.
                                    </p>
                                </li>
                                <li>
                                    <strong>Entrenamiento libre al estilo Powerlifting Heracles</strong>
                                    <p>
                                        Si prefieres entrenar a tu propio ritmo y estilo, nuestras instalaciones están disponibles para que puedas hacerlo. Disfruta de nuestro equipo de entrenamiento de alta calidad y de nuestro entorno limpio y seguro, sin la necesidad de unirse a una clase o grupo.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                <strong># Nota importante:</strong> Los entrenamientos personalizados con nuestros entrenadores están disponibles por separado y deben ser coordinados directamente con ellos. Estos servicios no están incluidos en nuestra oferta de entrenamiento libre.
                            </p>
                        </>
                    }
                />
                <TextBlock
                    title="Powerlifting Heracles: Fuerza, Resistencia, Tenacidad, Sensibilidad"
                    content={
                        <>
                            <p>
                                El entrenamiento de Powerlifting Heracles es un enfoque integral y personalizado que combina ejercicios de fuerza, hipertrofia y aeróbico para alcanzar un estado óptimo de condición física y bienestar. Nuestro entrenamiento se basa en la técnica y la seguridad, y se adapta a las necesidades y objetivos individuales de cada persona.
                            </p>
                            <h3>Componentes clave del entrenamiento de Powerlifting Heracles</h3>
                            <ol>
                                <li>
                                    <strong>Fuerza:</strong> Se enfoca en desarrollar la capacidad muscular para levantar pesas y realizar ejercicios de resistencia.
                                </li>
                                <li>
                                    <strong>Hipertrofia:</strong> Se centra en aumentar el tamaño muscular a través de ejercicios que estimulan el crecimiento muscular.
                                </li>
                                <li>
                                    <strong>Aeróbico:</strong> Se enfoca en mejorar la resistencia cardiovascular y aumentar la capacidad del cuerpo para utilizar oxígeno.
                                </li>
                            </ol>
                            <h3>Beneficios del entrenamiento de Powerlifting Heracles</h3>
                            <ol>
                                <li>Mejora la condición física: Aumenta la fuerza, la resistencia y la flexibilidad.</li>
                                <li>Incrementa la confianza: Desarrolla la autoestima y la determinación.</li>
                                <li>Reduce el estrés: Fomenta la relajación y la calma mental.</li>
                                <li>Mejora la salud: Aumenta la densidad ósea, mejora la función cardiovascular y reduce el riesgo de enfermedades crónicas.</li>
                            </ol>
                        </>
                    }
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;