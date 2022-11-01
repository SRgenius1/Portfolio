import devImg from '../img/dev.png';
import '../styles/About.css';

export const About = () => (
    <section className='about' id='about'>
            <div>
            <img src={devImg} alt="" />
            </div>
        <div className='about-texts'>
            <h2>Sobre mi</h2>
            <p>
            Cuento con 1 año de experiencia en el sector del desarrollo web, usando las tecnologías de la web procurando que sean las más recientes y óptimas, soy muy empático, me gusta hacer amigos, trabajar en equipo y ayudar.
            </p>
            <a href='https://www.canva.com/design/DAFJsUhbKCI/x3AvWQfpELKlUN5J1ccNkA/edit?utm_content=DAFJsUhbKCI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>Mi CV</a>
        </div>
    </section>
);