import React from 'react';
import palette from '../../images/assets/palette.svg';
import arrow from '../../images/assets/arrow.svg';
import emoji from '../../images/articles/idea.png';

import html from '../../images/techs/html5.svg';
import css from '../../images/techs/css3.svg';
import js from '../../images/techs/js.svg';
import reactimg from '../../images/techs/react.svg';
import node from '../../images/techs/node.svg';
import mongo from '../../images/techs/mongo.svg';
import mysql from '../../images/techs/mysql.svg';
import next from '../../images/techs/next.svg';
import sass from '../../images/techs/sass.svg';
import git from '../../images/techs/git.svg';

const Tech = () => {
    return (
        <article id="technologies">
        <div className="section_title">
            <div className="palette_title">
                <img className="palette" src={palette} alt="palette" />
                <img className="arrow" src={arrow} alt="arrow" />
                <p className="subtitle">Tecnologías</p>
                <img className="title_ilustration" src={emoji} alt="technologies" />
            </div>
        </div>
        <div className="card">
            <div className="balls">
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
            <code>
                <p>
                    <b className="hilight">JavaScript</b> SIEMPRE!
                </p>
            </code>
            <code>
                <p>
                    Como ya comenté anteriormente, me dedico a dos lenguajes. Pero al que estoy dedicando mi mayor parte del tiempo es: <b className="hilight">JavaScript</b> 
                    debido a que es un lenjuaje que ya tiene un trayecto marcado. No como Python que es algo "nuevo".
                </p>
            </code>
            <code>
                <p>        
                    Por lo tanto la mayoría de mis proyectos se encuentran en este lenguaje.
                </p>
            </code>
        </div>
        <div className="card tech_card">
            <img className="techs" src={html} alt="html5" title="html5" />
            <img className="techs" src={css} alt="css3" title="css3" />
            <img className="techs" src={js} alt="javascript" title="javascript" />
            <img className="techs" src={reactimg} alt="React.js" title="React.js" />
            <img className="techs" src={node} alt="Node.js" title="Node.js" />
            <img className="techs" src={sass} alt="Sass" title="Sass" />
            <img className="techs" src={mongo} alt="Mongo db" title="Mongo db" />
            <img className="techs" src={mysql} alt="Mysql" title="MySql" />
            <img className="techs" src={next} alt="Next.js" title="Next.js" />
            <img className="techs" src={git} alt="Git" title="Git" />
        </div>
    </article>
    );
}

export default Tech;
