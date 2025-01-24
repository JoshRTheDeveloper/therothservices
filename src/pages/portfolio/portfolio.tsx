import { useState, useEffect } from 'react';
import './portfolio.css'; 
import Iphone from '../../assets/iphone.svg'
import Ipad from '../../assets/ipad.svg'
import Mac from '../../assets/mac.svg'
import Bullies from '../../assets/bull.png'
import Valwood from '../../assets/valwood.png'
import Purpose from '../../assets/pur.png'
import Antioch from '../../assets/ant.png'
import Four from '../../assets/four.png'
import Lake from '../../assets/lak.png'

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [modalSize, setModalSize] = useState({ width: '80%', height: '80vh' });

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    const projects = [
        {
            name: 'Bullies of Texas',
            description: 'A website for a dog breeder ',
            url: 'https://www.bulliesoftexas.com',
            image: Bullies,
        },
        {
            name: 'Valwood Park Church',
            description: 'A Church Website',
            url: 'https://www.valwoodparkchurch.com',
            image: Valwood,
        },
        {
            name: 'Purpose and Peace',
            description: 'A Christian Counseling site',
            url: 'https://www.purposeandpeace.com',
            image: Purpose,
        },
        {
            name: 'Antioch Baptist Church',
            description: 'A church Website',
            url: 'https://www.abclovelady.com',
            image: Antioch,
        },
        {
            name: 'Fourth Dimension',
            description: 'An information site for products',
            url: 'https://4di-inc.com',
            image: Four,
        },
        {
            name: 'Lakeview Baptist Church',
            description: 'A Church Website',
            url: 'https://www.lakeviewmbc.org',
            image: Lake,
        },
    ];

    const openModalOrWindow = (url: string) => {
        if (window.innerWidth < 1605) {
            window.open(url, '_blank');
        } else {
            setSelectedProject(url);
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const resizeModal = (width: string, height: string) => {
        setModalSize({ width, height });
    };

    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <p>Here are some of my projects:</p>
            <p>
                In web design, the ultimate goal is to create a product that satisfies the client's vision while ensuring usability, functionality, and aesthetic appeal. There are times when a client's preferences or ideas may not align with best practices or my design instincts.
            </p>
            <p>Please feel free to ask me about any design choices.</p>
            <ul>
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={`${project.name} Icon`} className="project-image" />
                        <p>{project.description}</p>
                        <button onClick={() => openModalOrWindow(project.url)}>View Live</button>
                    </li>
                ))}
            </ul>

            {selectedProject && (
                <div className="modal" onClick={closeModal}>
                    <div className="resize-buttons">
                        <button className='close' onClick={closeModal}>Exit</button>
                        <button onClick={(e) => { e.stopPropagation(); resizeModal('390px', '844px'); }}>
                            <img src={Iphone} alt="Phone Icon" className="button-icon" />
                            Phone
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); resizeModal('834px', '1194px'); }}>
                            <img src={Ipad} alt="Tablet Icon" className="button-icon" />
                            Tablet
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); resizeModal('1280px', '720px'); }}>
                            <img src={Mac} alt="Desktop Icon" className="button-icon" />
                            Desktop
                        </button>
                    </div>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{ width: modalSize.width, height: modalSize.height, overflow: 'auto' }}
                    >
                        <iframe
                            src={selectedProject}
                            title="Project Preview"
                            className="modal-iframe"
                            loading="lazy"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;