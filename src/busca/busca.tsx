import { render } from "@testing-library/react";
import "./busca.css"
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';



class Busca extends Component {

    async componentDidMount() {
        window.scrollTo(0,0)
    }
        render(){
                return (
             <>
                <Container fluid>             
                    <Form>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Form.Label></Form.Label>
                                        </div>
                                        <div className="col">
                                            <Form.Control placeholder= "codigo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Form.Label></Form.Label>
                                        </div>
                                        <div className="col">
                                        <Form.Control placeholder= "Item" />
                                        </div>
                                    </div>
                                </div>
                                    <div className="col-md-4">
                                
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Form.Label></Form.Label>
                                        </div>
                                        <div className="col">
                                        <Form.Control placeholder= "Item" />
                                        </div>
                                    </div>
                                </div>      
                                </div>
                            </div>  
                    </Form>          
                </Container>
         </>

                )
            }
}
export default Busca;