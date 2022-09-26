import { render } from "@testing-library/react";
import "./busca.css"
import React, { Component, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";

class Busca extends Component {

  
 render(){
    return (
      <>
                
     <Form className="conteudo">
        <div className="cardbusca">  
            <div>
                <div className="row">
                    <div className="col-md-4">
                       <Form.Control placeholder= "codigo" />
                   </div>
                    <div className="col-md-6">
                        <Form.Control placeholder= "Item" />
                    </div>
                 </div>
            </div> 
        <div className="search"> 
              <Button type="submit" data-bs-toggle="modal" data-bs-target="#addModal">
               <  BiSearchAlt  /> 
              </Button>
        </div> 
            <div>
                <div className="col-md-3">
                    <Form.Control placeholder= "%" />
                </div>
        <div className="valor"> 
              <Button type="submit" data-bs-toggle="modal" data-bs-target="#addModal">
               <  AiOutlinePercentage /> 
              </Button>
        </div> 
            </div>
        </div>
    </Form> 
              
   </>

  )
  }
}
export default Busca;

function async() {
    throw new Error("Function not implemented.");
}
