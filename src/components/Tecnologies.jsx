import '../styles/Tecnologies.css';

export const Tecnologies = () => (
    <section className='tecnologies'>
        <h2 className='tecnologies-title'>Tecnologias</h2>
        <div className='tecnologies-cards-container' id='tec'>
            <div>
                <img width={100} height={120} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="" />
                <p>HTML5</p>
            </div>

            <div>
                <img width={100} height={120} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png" alt="" />
                <p>CSS3</p>
            </div>

            <div>
                <img width={100} height={120} src="data:image/png;base64,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" alt="" />
                <p>JavaScript</p>
            </div>            
            <div>
                <img width={100} height={120} src="https://www.andygeek.com/media/ts.png" alt="" />
                <p>TypeScript</p>
            </div> 

            <div>
                <img width={100} height={120} src="data:image/png;base64,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" alt="" />
                <p>Git y Github</p>
            </div> 

            <div>
                <img width={100} height={120} src="data:image/png;base64,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" alt="" />
                <p>React JS</p>
            </div>

            <div>
                <img width={100} height={120} src="data:image/png;base64,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" alt="" />
                <p>Node JS</p>
            </div>
            <div>
                <img width={100} height={120} src="data:image/png;base64,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" alt="" />
                <p>Express JS</p>
            </div>
            <div>
                <img width={100} height={120} src="data:image/png;base64,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" alt="" />
                <p>Tailwind CSS</p>
            </div>
            <div>
                <img width={100} height={120} src="data:image/png;base64,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" alt="" />
                <p>SSAS</p>
            </div>

        </div>
    </section>
);