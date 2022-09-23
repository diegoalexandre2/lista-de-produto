import { render } from "@testing-library/react";
import "./busca.css"
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';



class Busca extends Component {

  
 render(){
    return (
      <>
                
     <Form>
        <div className="conteudo">  
            <div>
                <div className="row">
                    <div className="col-md-4">
                       <Form.Control placeholder= "codigo" />
                   </div>
                    <div className="col-md-8">
                        <Form.Control placeholder= "Item" />
                    </div>
                 </div>
            </div> 
            <div>
                <div className="col-md-4">
                    <Form.Control placeholder= "%" />
                </div>
            </div>
        </div>
    </Form> 
              
   </>

  )
  }
}
export default Busca;