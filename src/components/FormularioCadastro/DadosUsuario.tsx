import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { FormProps } from '../../utils';


const DadosUsuario: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={ event => {
      event.preventDefault();
      onSubmit();
    }}>

      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
      />
      <TextField
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit">Próximo</Button>
        
    </form>
  );
}

export default DadosUsuario;