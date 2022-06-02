import './index.scss';

export default function index(){
    return(
        <main className='pages-login'>
           
           <header>
        <nav>
            <ul class="loin">
                <a href="/inicio">
                    <input class="we" type="button" value="INICIAL" />
                </a>
            </ul>
            <img src="./1650375712055.png" alt="" class="aa"/>
        </nav>
    </header>

    
    <div class="conteudo">
        <div class="conteudo-formulario">
            <div class="formulario">
                <img src="/1650375712055.png" alt="" class="img-dental"/>
                <h1 class="titulo">faça seu login</h1>
                <label>
                    <input type="text" placeholder="Usuario" pattern="[a-zA-Z]*" class="campo"/>
                </label>
                <label>
                    <input type="password" placeholder="Senha"  class="campo"/>
                </label>
               <input type="checkbox" class="campo-checkbox"/><span>Lembrar meus dados </span>
              <input type="button" value="entrar" class="bnt"/>
            </div>
        </div>
    </div>


        </main>
   )    
}

