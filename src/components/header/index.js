import React, { useState } from 'react';
import about from '../../images/nav/about.svg';
import techs from '../../images/nav/techs.svg';
import portfolio from '../../images/nav/portfolio.svg';
import github from '../../images/nav/github.svg';
import linkedin from '../../images/nav/linkedin.svg';
import contact from '../../images/nav/contact.svg';
import mac from '../../images/hero/mac.png';
import Item from '../navitem/Item';
import './style.scss';


const Header = () => {

    const [ open, setOpen ] = useState(false);

    return (
            <section className="hero">

                <div className="nav_container">
                    <nav>
                        <Item img={about} title="sobre mí" route="#aboutme" />
                        <Item img={techs} title="tecnologías" route="#technologies" />
                        <Item img={portfolio} title="portfolio" route="#portfolio" />
                        <Item img={github} title="github" route="https://github.com/antoniogatfdz" target="_blank"/>
                        <Item img={linkedin} title="linkedin" route="https://es.linkedin.com/in/antonio-gat-fern%C3%A1ndez-4600a11a1" target="_blank"/>
                        <Item img={contact} title="contacto" route="#contact" />
                    </nav>
                </div>

                <div onClick={ () => {setOpen(!open)}} className={!open ? "menuButton" : "menuButton on"}>
                    <div className="menu_hamb"></div>
                </div>
                <div className={!open ? "mobile_nav closed" : "mobile_nav open"} onClick={() => setOpen(false)}>
                    <Item img={about} title="sobre mí" route="#aboutme" />
                    <Item img={techs} title="tecnologías" route="#technologies" />
                    <Item img={portfolio} title="portfolio" route="#portfolio" />
                    <Item img={github} title="github" route="https://github.com/antoniogatfdz" target="_blank"/>
                    <Item img={linkedin} title="linkedin" route="https://es.linkedin.com/in/antonio-gat-fern%C3%A1ndez-4600a11a1" target="_blank"/>
                    <Item img={contact} title="contacto" route="#contact" />
                </div>


                <div className="main_title_container">
                    <div className="title_container">
                        <div className="title">
                            <p className="name">Antonio Gat</p>
                            <p className="lastName">Fernández</p>
                        </div>
                        <div className="drop_title">
                            <div className="drop_border">
                                <p className="drop" href="https://retacorp.es">Developer</p>
                            </div>
                        </div>
                    </div>
                    //<div>
                        //<img className="hero_img" src={mac} alt="Abel Martín Bergesio" title="Abel Martín Bergesio" />//
                    </div>//
                </div>
            </section>
    );
}

export default Header;
