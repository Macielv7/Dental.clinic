import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})


export async function cadastrarr(nome, segundoNome, email,telefone,data){
    const resposta= await api.post('/agendamento',{
        nome: nome,
        segundoNome: segundoNome,
        email: email,
        telefone: telefone,
        data: data
       
    })
    return resposta.data;
}

