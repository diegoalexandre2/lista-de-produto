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