import axios from "axios";

const api = axios.create({
    baseURL:'https://blogpessoal-nh74.onrender.com'
})


//promessas - assincrona
export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function)=>{

    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

//promessa assincrona para o login do usuário
export const login = async(url: string, dados: object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}