import './index.scss';
import { Link } from 'react-router-dom'


export default function Index(){
    return(
     <main className='pages-inicio'>
           
           <header>
        <nav>
            <ul class="loin">
                <Link to="/login">
                    <input className="loloe" type="button" value="LOGIN" />
                </Link>
            </ul>
            <img src="./1650375712055.png" alt="" class="aa"/>
        </nav>
    </header>
<section>
<div class="tudo">
        <div class="nome">
            <img src="/lpo.png" alt=""/>
        </div>
            <div class="op">
                <h2 class="vv">Tudo começa <br/> com um belo <br/> sorriso</h2>
                                  
            </div>
        <div class="oi">
            <img src="/oi t.png" alt=""/>
        </div>
</div>

    <div class="pp"><Link to="/agendamento">
                    <button className='agenda'>agendamento</button>
                </Link> 
        <div class="tt">
            <h1>Especialidades</h1>
        </div>
    </div>
</section>
<div class="os">
    <div class="lk">
    <img class="imp" src="/099.webp" alt="" />
    <h1>Lentes de contato </h1>
    <p class="text"> São lâminas de porcelana ultra finas instaladas no dente, com o objetivo de melhorar a estética e devolver a função.</p>
    </div>

    <div class="lk">
    <img class="imp" src="/123.webp" alt="" />
    <h1>Clareamento</h1>
    <p class="text">Procedimento realizado em casa ou no consultório com supervisão do dentista para clarear e iluminar os dentes naturais.</p>
    </div>

    <div class="lk" >
    <img class="m" src="/1649413707-5649980-6662-a0361fd50274d63f56455805666d51bd.webp" alt="" />
    <h1>toxina botulínica</h1>
    <p class="text">Utilizamos este produto para fins estéticos, suavizando linhas de expressão e prevenindo o envelhecimento da pele.</p>
    </div>
</div>
<div class="lu">
    <div class="na">
        <img src="/bn.webp" alt="" class="sq"/>
        <h1>Bichectomia </h1>
        <p class="text">Micro cirurgia usualmente estética com o objetivo de afinar o rosto. Também utilizada para pessoas que mordem a lateral das bochechas</p>
    </div>

    <div class="na">
        <img src="/dente.png" alt="" class="sq"/>
        <h1>Reabilitação total </h1>
        <p class="text">Processo que restaura como um todo a arcada dentária que sofreu percas e desgastes, por meio de múltiplos procedimentos e engloba todos os tipos de próteses.</p>
    </div>

    <div class="na">
        <img src="/hhh.webp" alt="" class="sq"/>
        <h1>Próteses implante</h1>
        <p class="text">Instalação de um dente artificial que é fixado no implante e tem a função de substituir um ou mais dentes perdidos.</p>
    </div>
</div>
<div class="ff">
    <div class="quem">
        <img src="/banner-mobi2.jpg" alt=""/>
    </div>
    <div class="qm">
        <h1 class="pi">Quem Somos</h1>
        <p class="ul">  Desde 2006, tendo como objetivo oferecer um atendimento pioneiro, integrando excelência em saúde bucal, recursos tecnológicos e estreitamento dos laços entre profissional e paciente. Os cuidados na biossegurança são respeitados fielmente, visando o bem estar de nossos pacientes. A excelência da qualidade dos nossos serviços e o relacionamento com você são os principais motivos para sermos uma clínica sempre atuante e dinâmica. O melhor resultado de um trabalho em equipe será sempre sua satisfação.</p>
    </div>
</div>



<div class="video">
    <div class="dor">
        <div class="çç">
        <h1 class="dente">esta com dor <br/> de dente</h1>
        <p class="testinho">A Biodontos conta com dentistas experientes e instalações modernas para realizar seu tratamento bucal. Da limpeza rotineira à tratamentos como canal, cirurgias buco-maxilar etc.</p>
        <Link to="/agendamento">
                    <button className='dorzi'>agendamento</button>
                </Link> 
    </div>
</div>
</div>
<div class="roda">
        <img src='./1650375712055.png' class="logo"/>
    </div>

        </main>

    )
}