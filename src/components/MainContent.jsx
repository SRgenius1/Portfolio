import instagramLogo from '../img/instagram.png';
import linkedInLogo from '../img/linkedin.png';
import devImg from '../img/devimg.png';
import '../styles/MainContent.css';

export const MainContent = () => (
    <main className='main'>
        <div className='main-container-text'>
            <div className='texts'>
            <p>Hola, soy Juan David</p>
            <h1>27/4 <br /> Frontend Developer!</h1>
            <span className='hello'>Desarrollo de paginas web interactivas con React js 💙</span>
            <div className='texts-icons'>
                <a target="_blank" href="https://www.instagram.com/dev_juan22/">
                <img width={40} src={instagramLogo} alt="" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/juan-david-reyes-bedoya-49b0a5225/">
                <img width={40} src={linkedInLogo} alt="" />
                </a>
            </div>
            </div>
            <img className='main-img' width={200} src={devImg} alt="" />
        </div>
    </main>
)

// 