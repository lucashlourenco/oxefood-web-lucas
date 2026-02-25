import { Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import FormCliente from './views/cliente/FormCliente';
import './App.css';
import FormProduto from './views/produto/FormProduto';

function App() {
  return (
    <div className="App">
      <FormProduto />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2026 - Projeto WEB IV - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
