import React, {Component} from "react";
import './tableList.css';
import Table from 'react-bootstrap/Table';
import { Produtos } from '../../services/services';
import { setProdutos } from "../../services/services";
import { Button, Form, NavDropdown } from "react-bootstrap";
import {  GrAddCircle   } from 'react-icons/gr';
import Modal from 'react-bootstrap/Modal';
import { date } from "yup";

interface Props {
  porcentagem: number,
  id?: number,
  descricao?: string
}
class TableList extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      porcentagem: props.porcentagem,
      id: props.id,
      descricao: props.descricao,
      produtos : [],
      produtosFiltrados : [],
      show: false,
      logado: false,
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
  static getDerivedStateFromProps(props: any, state: any){
    return {...props}
  }

    async componentDidMount() {
       const listProdutos = await Produtos();
     if( sessionStorage.getItem('login') != null) {this.setState({logado: true})}

       this.setState({
        produtos : [...listProdutos]
       })
       console.log(this .state)
    }

    async componentDidUpdate(){
      console.log('teste')
      this.filter()
    }

    async handleClose () {
      this.setState({
        show: false
      });
    }

    async handleShow(){
      this.setState({
        show: true
      });
    }

    async filter(){
      let prd = this.state.produtos;
      let prdFilter: any = [];

      if(this.state.id != '' ){
        prdFilter = prd.filter((p: any) => p.id == this.state.id);
        this.setState({
          produtosFiltrados: [...prdFilter]
        })
        return
      }else {
        this.setState({
          produtosFiltrados: [...prd]
        })
      }

      if(this.state.descricao != '' ){
        prdFilter = prd.filter((p: any) => p.descricao.includes(this.state.descricao));
        this.setState({
          produtosFiltrados: [...prdFilter]
        })
      }else {
        this.setState({
          produtosFiltrados: [...prd]
        })
      }
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
          precoCusto: event.target.value,
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

                    dados.produtosFiltrados.map((i: any, key: any) => (
                        <tr key={key}>
                          <td>{i.id}</td>
                          <td>{i.descricao}</td>
                          <td>${i.precoCusto + (i.precoCusto * dados.porcentagem) / 100}</td>
                          <td>{i.dataAtualizacao}</td>
                        </tr>
                      ))
                    
                }
              
              </tbody>
            </Table>
            {
              dados.logado ? (
                <div className="adicionar"> 
                  <Button type="submit" data-bs-toggle="modal" data-bs-target="#addModal"  onClick={this.handleShow}>
                    < GrAddCircle /> 
                  </Button>
                </div> 
              ): null
            }
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