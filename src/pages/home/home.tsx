import React, {Component} from "react";
import './home.css';
import TableList from "../../components/tableList/tableList";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import Busca from "../../busca/busca";
import Foote from "../../components/tableList/footer";
import Footer from "../../components/tableList/footer";

class Home extends Component {
    async componentDidMount() {
        window.scrollTo(0,0)
    }
        
    render() {
        return(
            <>
            <Container fluid>             
               <Form>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-2">
                                    <Form.Label>Usuario</Form.Label>
                                </div>
                                <div className="col">
                                    <Form.Control placeholder= "user@gmail.com" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-2">
                                    <Form.Label>Senha</Form.Label>
                                </div>
                                <div className="col">
                                <Form.Control placeholder= "*****" />
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