import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})




export async function cadastrarr(nome, email,telefone,data){
    const resposta= await api.post('/agendamento',{
        nome: nome,
        email: email,
        telefone: telefone,
        data: data
       
    })
    return resposta.data;
}

