import React, {Component} from "react";
import './tableList.css';
import Table from 'react-bootstrap/Table';
import { Produtos } from '../../services/services';
import { setProdutos } from "../../services/services";
import { Button, Form, NavDropdown } from "react-bootstrap";
import {  GrAddCircle   } from 'react-icons/gr';
import Modal from 'react-bootstrap/Modal';
import { date } from "yup";

class TableList extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      produtos : [],
      show: false,
      produto:{
        descricao: '',
        precoCusto: 0.00,
        dataAtualizacao: Date
      }
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSetDesc = this.handleSetDesc.bind(this);
    this.handleSetValor = this.handleSetValor.bind(this);
    this.handleSalva = this.handleSalva.bind(this);
  }
    async componentDidMount() {
       const listProdutos = await Produtos();
       this.setState({
        produtos : [...listProdutos]
       })
       
    }

    async handleClose () {
      this.setState((state) => ({
        show: false
      }));
    }

    async handleShow(){
      this.setState((state) => ({
        show: true
      }));
    }

    async handleSetDesc(e:any){
      const prd = this.state;
      this.setState({
        produto: {
          descricao: e.descricao,
          precoCusto: e.precoCusto,
          dataAtualizacao: new Date
        }
      })
    }

    async handleSetValor(e:any){
      this.setState({
        produto: {
          descricao: e.descricao,
          precoCusto: e.precoCusto,
          dataAtualizacao: new Date
        }
      })
    }

    async handleSalva () {
      await setProdutos(this.state);
       const listProdutos = await Produtos();
       this.setState({
        produtos : [...listProdutos]
       })
       this.handleClose()
    }

    render() {
      const dados : any = this.state ;
      const salvarProduto = () => {
        this.handleSalva()
      }
      const handleDesc = (event: any) => {
        var prd = {
          descricao: event.target.value,
          precoCusto: dados.produto.precoCusto
        }
        event.preventDefault();
        this.handleSetDesc(prd)
      };
      const handleValor = (event: any) => {
        var prd = {
          descricao:  dados.produto.descricao,
          precoCusto: event.target.precoCusto
        }
        event.preventDefault();
        this.handleSetValor(prd)
      };
        return(
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Descrição</th>
                  <th>Preço</th>
                  <th>Data atualização</th>
                </tr>
              </thead>
              <tbody>
                {
                  dados.produtos.map((i: any, key: any) =>(
                    <tr key={key}>
                      <td>{i.id}</td>
                      <td>{i.descricao}</td>
                      <td>${i.precoCusto}</td>
                      <td>{i.dataAtualizacao}</td>
                    </tr>
                  ))
                }
              
              </tbody>
            </Table>
            <div className="adicionar"> 
              <Button type="submit" data-bs-toggle="modal" data-bs-target="#addModal"  onClick={this.handleShow}>
                < GrAddCircle /> 
              </Button>
            </div> 

            <Modal show={dados.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Adicionar Produto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                          <Form.Label>Descrição</Form.Label>
                          <Form.Control placeholder= "Descrição"
                              onChange={handleDesc}
                              required={true}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                          <Form.Label>Valor</Form.Label>
                          <Form.Control type="number"
                              onChange={handleValor}
                              required={true}
                            />
                        </div>
                    </div>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={salvarProduto}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
      )
    }
}
export default TableList;