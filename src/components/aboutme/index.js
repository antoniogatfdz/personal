import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';
import emoji from '../../images/articles/waving.png';

const About = () => {
    return (
        <article id="aboutme">
            <div className="section_title">
                <div className="palette_title">
                    <img className="palette" src={palette} alt="palette" />
                    <img className="arrow" src={arrow} alt="arrow" />
                    <p className="subtitle">Sobre mi</p>
                </div>
            </div>
            <div className="card">
                <div className="balls">
                    <div className="red ball"></div>
                    <div className="yellow ball"></div>
                    <div className="green ball"></div>
                </div>
                <div className="section_subtitle">Perfil</div>
                <code>
                    <p>
                        Desarrollador <b className="hilight">informático </b>
                        con más de 2 años de experiencia y <b className="hilight">
                        CREADOR de </b> RETA Company
                    </p>
                </code>
                <div className="section_subtitle">Historia</div>
                <code>
                    <p>
                        Desde hace unos años me adentré en el mundo de 
                        <b className="hilight"> la programación </b>
                        aprendiendo multiples lenguajes de programación. Como lo son <b className="hilight"> Python o JavaScript </b>
                        que me acompañan durante mis procesos.
                    </p>
                    <p>
                        Actualmente me encuentro en desarrollo de varios proyestos, que los catalogo como <b className="hilight"> AMBICIOSOS </b>
                    </p>
                </code>
                <div className="section_subtitle">RETA Company</div>
                <code>
                    Hace unos años decidí crear un proyecto que llevar a lo más grande: <b className="hilight"> RETA Company. </b>
                    En el que estoy invirtiendo una gran cantidad de tiempo y dinero. 
                </code>
                <div className="section_subtitle">Mis comienzos...</div>
                <code>
                    Mis inicios fueron dificil debido que empecé a una pronta edad con la "locura" de dedicarme a "algo" que 
                    te puede ir bien mal o bien y que hay que arriesgarse a tomar una decisión
                </code>
        </article>
    );
}

export default About;
