import React, {Component} from "react";
import { Logar } from "../../services/services";
import Busca from "../../busca/busca";

//components
import TableList from "../../components/tableList/tableList";


//bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Alert, Button } from "react-bootstrap";

//style.css
import './home.css';



class Home extends Component<any, any> {
    constructor(props: any){
        super(props);

        this.state = {
          email : '',
          senha : '',
          error : '',
          logado : false,
          porcentagem : 7,
          id: '',
          descriçao: ''
        }
        this.handleSetPorcent = this.handleSetPorcent.bind(this);

    }

    async componentDidMount(){
        window.scrollTo(0,0);
    }

    handleSignIn = async ( e: { preventDefault: () => void; } ) => {
    e.preventDefault();
    const st: any = this.state;
        
    const email = st.email; 
    const senha = st.senha;
    
    if (!email || !senha) {
        this.setState({ error: "Preencha e-mail e senha para continuar!" });
        setTimeout(()=>{
            this.setState({ error: "" });
        },3000)
        return;
    }
    const login = await Logar({email,senha});
        console.log(login)
        if(login.length == 0){
        this.setState({error: "usuario nao encontrado!"})
        setTimeout(()=>{
            this.setState({ error: "" });
        },3000)
        return    
        }
        sessionStorage.setItem('login',JSON.stringify(login[0]));
        this.setState({logado:true})
    };

    handleSetPorcent(e: number){
        this.setState(({
            porcentagem: e
        }));
    }
    handleId(e: any){
        this.setState(({
            id: e
        }));
    }
    handleDescricao(e: any){
        this.setState(({
            descriçao: e
        }));
    }
    render() {
        const dados: any = this.state;
        const handlePorncent = (event: any) => {
            event.preventDefault();
            this.handleSetPorcent(event.target.value)
        }
        const handleId = (event: any) => {
            event.preventDefault();
            this.handleId(event.target.value)
        }
        const handleDescricao = (event: any) => {
            event.preventDefault();
            this.handleDescricao(event.target.value)
        }
        return(
            <>
            <Container fluid> 
            {
                dados.error != '' ? (
                    <div className="alert alert-danger alert-dismissible fade show erro" role="alert">
                        {dados.error}
                    </div>            
                ):null
            }
             {dados.error}
               <Form onSubmit={this.handleSignIn}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-2">
                                    <Form.Label>email</Form.Label>
                                </div>
                                <div className="col">
                                    <Form.Control type="email" placeholder= "user@gmail.com"
                                       onChange={e => this.setState({ email: e.target.value })} 
                                       disabled={dados.logado}
                                     />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-2">
                                    <Form.Label>Senha</Form.Label>
                                </div>
                                <div className="col">
                                <Form.Control type="password" placeholder= "******" 
                                 onChange={e => this.setState({ senha: e.target.value })} 
                                 disabled={dados.logado}
                                />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Button variant="primary" type="submit"  disabled={dados.logado} >
                                Login
                            </Button>
                        </div>
                    </div>
                    
                </Form>
                <TableList porcentagem={this.state.porcentagem} id={dados.id} descricao={dados.descriçao} />
             </Container>
             <Busca porcentagem={this.state.porcentagem} id={dados.id} descricao={dados.descriçao} onChange={handlePorncent} filterDescricao={handleDescricao} filterId={handleId}/>
            </>
        )
    }
}
export default Home;

function login(token: any) {
    throw new Error("Function not implemented.");
}
function push(e: any) {
    throw new Error("Function not implemented.");
}

