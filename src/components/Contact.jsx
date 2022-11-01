import teamImg from '../img/1.png';
import '../styles/Contact.css';

export const Contact = () => {
    return (
        <section className='contact-section'>
            <h2>¿Interesado en colaborar juntos?</h2>
                <img width={500} src={teamImg} alt="" />
            <div className='button-container'>
            <a className='contact-button--green' target="_blank" href="https://wa.me/573217083779">Via WhatsApp 📱</a>
            <a className='contact-button--red' target="_blank"  href="https://www.instagram.com/dev_juan22/">Via Instagram 📱</a>
            </div>
        </section>
    );
}