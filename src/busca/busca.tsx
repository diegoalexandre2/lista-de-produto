import { render } from "@testing-library/react";
import "./busca.css"
import React, { Component, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";

interface Props {
    id: string, 
    descricao: string,
    porcentagem: number,
    onChange? : any
    filterDescricao?: any,
    filterId?: any,
}
class Busca extends Component<Props> {
   constructor(props: Props){
    super(props)
    this.state = {...props, logado: false}
    //this.filterDescricao = this.filterDescricao.bind(this)
   }
   static getDerivedStateFromProps(props: any, state: any){
    return {...props}
   }
  async componentDidMount() {
     if( sessionStorage.getItem('login') != null) {this.setState({logado: true})}
  }
 
 render(){
    const dados:any = this.state

    return (
      <>
                
     <Form className="conteudo">
        <div className="cardbusca">  
            <div>
                <div className="row">
                    <div className="col-md-4">
                       <Form.Control placeholder= "codigo" value={dados.id} onChange={dados.filterId.bind(this)}/>
                   </div>
                    <div className="col-md-6">
                        <Form.Control placeholder= "Item" value={dados.descricao} onChange={dados.filterDescricao.bind(this)}/>
                    </div>
                 </div>
            </div> 
        <div className="search"> 
              <Button type="submit" data-bs-toggle="modal" data-bs-target="#addModal">
               <  BiSearchAlt  /> 
              </Button>
        </div> 
        {
           dados.logado ? (
            <div className="row">
                <div className="col-md-4">
                    <Form.Control type="number" value={dados.porcentagem} onChange={dados.onChange.bind(this)}/>
                </div>
                <div className="col-md-4"> 
                    <Button type="submit" data-bs-toggle="modal" data-bs-target="#addModal">
                        <AiOutlinePercentage /> 
                    </Button>
                </div> 
            </div>
           )  : null
        }
        </div>
    </Form> 
              
   </>

  )
  }
}
export default Busca;


