import './index.scss';


import Sobre from "../../components/sobre"
import Header from '../../components/cabecario';


export default function Index() {
    return (
        <main className='pages-inicio'>
<Header/>
            <section className="home" id="home">

                <div className="content">
                    <h3>Faça O Seu Sorriso Brilhar</h3>
                    <p>Lorem ipsum dolor sit, adipisicing elit. Deleniti, dolores. Ad rerum eum assumenda mollitia autem quo nulla, consequatur quisquam est?</p>
                    <a href="agendamento" className="btn">Marcar Uma Consulta</a>
                </div>

                

            </section>


            <section className="service" id="service">

                <h1 className="heading"> Especialidades </h1>

                <div className="box-container">

                    <div className="box">
                        <img src="/099.webp" alt="" />
                        <h3>Lentes de contato</h3>
                        <p>São lâminas de porcelana ultra finas instaladas no dente, com o objetivo de melhorar a estética e devolver a função.</p>

                    </div>

                    <div className="box">
                        <img src="/123.webp" alt="" />
                        <h3>Clareamento</h3>
                        <p>Procedimento realizado em casa ou no consultório com supervisão do dentista para clarear e iluminar os dentes naturais.</p>

                    </div>

                    <div className="box">
                        <img src="/1649413707-5649980-6662-a0361fd50274d63f56455805666d51bd.webp" alt="" />
                        <h3>toxina botulínica</h3>
                        <p>Utilizamos este produto para fins estéticos, suavizando linhas de expressão e prevenindo o envelhecimento da pele.</p>

                    </div>

                    <div className="box">
                        <img src="/bn.webp" alt="" />
                        <h3>Bichectomia </h3>
                        <p>Micro cirurgia usualmente estética com o objetivo de afinar o rosto. Também utilizada para pessoas que mordem a lateral das bochecha</p>

                    </div>

                    <div className="box">
                        <img src="/dente.png" alt="" />
                        <h3>Reabilitação total</h3>
                        <p>Processo que restaura como um todo a arcada dentária que sofreu percas e desgastes.</p>
                    </div>

                    <div className="box">
                        <img src="/hhh.webp" alt="" />
                        <h3>Próteses implante</h3>
                        <p>Instalação de um dente artificial que é fixado no implante e tem a função de substituir um ou mais dentes perdidos</p>

                    </div>

                </div>

            </section>



           

<Sobre/>




            


        </main>

    )
}