import './index.scss';

import { useState } from 'react'
import { cadastrarr } from '../../api/AgendamentoApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Header from '../../components/cabecario';



export default function Index() {

    const [nome, setNome] = useState('');
    const [segundoNome, setSegundoNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [data, setData] = useState(0);


    async function salvarClick() {
        try {

            await cadastrarr(nome, segundoNome, email, numero, data);

            toast.dark('Cadastro Realizado!')
        } catch (err) {
            toast.dark('Agendamento Não Realizado')
        }
    }



    return (
        <main className='pages-agendamento'>
            <ToastContainer />
            <Header />
            <section className="contact" id="contact">

             

                <div className='foor'>

                    <span>Primeiro Nome :</span>
                    <div className="inputBox">
                        <input type="text" placeholder="" value={nome} onChange={e => setNome(e.target.value)} />
                        <input type="text" placeholder="" value={segundoNome} onChange={e => setSegundoNome(e.target.value)} />
                    </div>

                    <span> Email :</span>
                    <input type="email" placeholder="" className="box" value={email} onChange={e => setEmail(e.target.value)} />

                    <span>Numero :</span>
                    <input type="number" placeholder="" className="box" value={numero} onChange={e => setNumero(e.target.value)} />

                    <span>Data e Horario :</span>
                    <input type="datetime-local" className="box" value={data} onChange={e => setData(e.target.value)} />


                    <button className="btn" onClick={salvarClick}>Finalizar o Agendamento</button>

                </div>

            </section>


        </main>
    )
}