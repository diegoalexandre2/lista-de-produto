import React, {Component} from "react";
import { Logar } from "../../services/services";
import Busca from "../../busca/busca";

//components
import TableList from "../../components/tableList/tableList";
import Footer from "../../components/tableList/footer";

//bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Alert, Button } from "react-bootstrap";

//style.css
import './home.css';



class Home extends Component {
    state = {
      email : '',
      senha : '',
      error : '',
    };
    
            
      handleSignIn = async ( e: { preventDefault: () => void; } ) => {
        e.preventDefault();
            
        const { email, senha } = this.state;
       
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
      };
      
    render() {
        
        return(
            <>
            <Container fluid> 
            {
                this.state.error != '' ? (
                    <div className="alert alert-danger alert-dismissible fade show erro" role="alert">
                        {this.state.error}
                    </div>            
                ):null
            }
             {this.state.error}
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
                                />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </div>
                    
                </Form>
                <TableList/>
             </Container>
             <Busca/>
             <Footer/>
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

