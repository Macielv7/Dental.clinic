import './index.scss';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Index(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()

async function entrarClick(){
    try{
        const r = await axios.post('http://localhost:5000/usuario', {
            gmail:email,
            senha:senha
        });

        navigate('/adm')

    }catch (err) {
        if(err.response.status ==401){
            setErro(err.response.data.erro);
        }
        }            
}

function mostra(){
    const senha = document.getElementById("senha");
    if (senha.type=== "password") {
        senha.type="text";
        
    }
    else
    senha.type="password"
}

    return(
        <main className='pages-login'>
           
           <header>
        <nav>
            <ul class="e">
                <a href="/inicio"> <img src="/icon-home.svg" alt="home"  class='zg'/></a>

            </ul>
            <img src="./1650375712055.png" alt="" class="aa"/>
        </nav>
    </header>

    
    <div class="coonteudoo">
        <div class="conteudo-formularioo">
            <div class="formularioo">
                <img src="/1650375712055.png" alt="" class="img-dental"/>
                <h1 class="titulo">faça seu login</h1>
                <label>
                    <input type="text" placeholder="Usuario"  class="campo" value={email} onChange={e => setEmail(e.target.value)}/>
           
                    <input type="password" placeholder="Senha"  class="campo" value={senha} onChange={e => setSenha(e.target.value)} Id='senha'/>

                    
                    
                </label>
               <input type="checkbox" class="campo-checkbox"/><span>Lembrar meus dados </span>
               
              <input type="button" value="entrar" class="bntt" onClick={entrarClick}/>
              <div className='invalido'>
                {erro}
            </div>
        </div>
        </div>
    </div>


        </main>
   )    
}

