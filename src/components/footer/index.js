import about from '../../images/nav/about.svg';
import techs from '../../images/nav/techs.svg';
import portfolio from '../../images/nav/portfolio.svg';
import github from '../../images/nav/github.svg';
import linkedin from '../../images/nav/linkedin.svg';
import contact from '../../images/nav/contact.svg';

import Item from "../navitem/Item";

import './style.scss';

const Footer = () => {
    return (
        <footer>
        <div className="bottom_end">
            <div className="bottom_end_data">
                <p>Antonio Gat Fernández - 2022 - Espaá.</p>
            </div>
            <nav>
                <Item img={about} title="sobre mí" route="#aboutme" />
                <Item img={techs} title="technologías" route="#technologies" />
                <Item img={portfolio} title="portfolio" route="#portfolio" />
                <Item img={github} title="github" route="https://github.com/antoniogatfdz" target="_blank"/>
                <Item img={linkedin} title="linkedin" route="https://es.linkedin.com/in/antonio-gat-fern%C3%A1ndez-4600a11a1" target="_blank"/>
                <Item img={contact} title="contacto" route="#contact" />
            </nav>
        </div>
    </footer>
    );
};

export default Footer;
