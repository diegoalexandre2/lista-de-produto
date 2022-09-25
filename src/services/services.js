import api from "./api";


export const Produtos = async () =>{
    var produtos =[];
    try { 
        const resp = await api.get("/produtos"); 
        
        produtos = resp.data;
    }catch(erro){
        console.log("erro")
    }
    return produtos;
}
export const setProdutos = async (e) =>{
    debugger
    const produto = e.produto
    console.log(e)
    try { 
        const resp = await api.post("/produtos", produto); 
        return resp.data
    }catch(erro){
        console.log("erro")
    }
}

export const Logar = async (e) =>{
    var logar = [];
    
    try{
        const resp = await api.get("/usuario", {params: e});
       
            logar = resp.data
      

    }catch(erro){
        console.log("erro")
    }
    return logar;
}