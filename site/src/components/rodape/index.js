
import "./index.scss"
import { Link } from "react-router-dom"

export default function Rodape() {
    return (
        <>
            <section class="footer">

                <div class="box-container">

                    <div class="box">
                        <h3>Nossas Filiais</h3>
                        <Link to=''> são paulo </Link>
                        <Link to=''> rio de janeiro </Link>
                        <Link to=''> minas gerais </Link>
                        <Link to=''> porto alegre </Link>
                        <Link to=''> fortaleza </Link>
                    </div>

                    <div class="box">
                        <h3>Links Rápidos</h3>
                        <Link to=''> home </Link>
                        <Link to=''> sobre </Link>
                        <Link to=''> menu </Link>
                  
                        <Link to=''> book </Link>
                    </div>

                    <div class="box">
                        <h3>Informações De Contato</h3>
                        <Link to=''>  11-456-7890 </Link>
                        <Link to=''>  11-222-3333 </Link>
                        <Link to=''> dentalclinic@gmail.com </Link>
                        
                        <Link to=''> adm </Link>
                    </div>

                    <div class="box">
                        <h3>Informações De Contato</h3>
                        <Link to=''>  facebook </Link>
                        <Link to=''>  twitter </Link>  
                        <Link to=''>  instagram </Link>
                    </div>

                </div>

            </section>

        </>
    )


}