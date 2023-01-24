import './index.scss'

import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <nav className="comp-rodape">
           
           <section className="about" id="about">


<div className="roww">

    <div className="image">
        <img src="/team-3.jpg" alt="" />
    </div>

    <div className="content">
        <h3 className="title">Quem Somos</h3>
        <p> Desde 2006, tendo como objetivo oferecer um atendimento pioneiro, integrando excelência em saúde bucal, recursos tecnológicos e estreitamento dos laços entre profissional e paciente. Os cuidados na biossegurança são respeitados fielmente, visando o bem estar de nossos pacientes. A excelência da qualidade dos nossos serviços e o relacionamento com você são os principais motivos para sermos uma clínica sempre atuante e dinâmica.</p>

        <div className="icons-container">
            <div className="icons">
                <img src="/insta.png" alt="" />
                <h3>Instagram</h3>
            </div>
            <div className="icons">
                <img src="/face.png" alt="" />
                <h3>Facebook</h3>
            </div>
            <div className="icons">
                <img src="/twitter.png" alt="" />
                <h3>TikTok</h3>
            </div>
        </div>
    </div>

</div>



</section>



        </nav>
    )
}