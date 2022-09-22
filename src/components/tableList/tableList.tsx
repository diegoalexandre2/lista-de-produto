import React, {Component} from "react";
import './tableList.css';
import Table from 'react-bootstrap/Table';
import { Produtos } from '../../services/services';

class TableList extends Component {
  state = {
    produtos : []
  }
    async componentDidMount() {
       const listProdutos = await Produtos();
       this.setState({
        produtos : [...listProdutos]
       })
       console.log(this.state);
    }
    render() {
      const dados : any = this.state ;
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
            </>
        )
    }
}
export default TableList;