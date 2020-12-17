import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { FormProps } from '../../utils';

const DadosEntrega: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={ event => {
      event.preventDefault();
      onSubmit();
    }}>

      {/*TODO: implementar mascara e mensagem de erro para o cep*/}
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
      />
      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <TextField
        id="numero"
        label="Número"
        type="text"
        variant="outlined"
        margin="normal"
        style={{marginRight: '20px'}}
      />
      <TextField
        id="complemento"
        label="Complemento"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        style={{marginRight: '20px'}}
        required
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />

      <Button variant="contained" color="primary" type="submit">Voltar</Button>
      <Button variant="contained" color="primary" type="submit">Finalizar Cadastro</Button>

    </form>
  );
};

export default DadosEntrega