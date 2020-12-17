import React, { useState } from 'react';
import {
  Button, TextField, Switch, FormControlLabel, Container
} from '@material-ui/core';
import { cpfMask, cpfValidator, FormProps } from '../../utils';

const DadosPessoais: React.FC<FormProps> = ({ onSubmit }: FormProps) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    nome: {
      valid: true,
      message: ''
    },
    sobrenome: {
      valid: true,
      message: ''
    },
    cpf: {
      valid: true,
      message: ''
    }
  });

  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        onSubmit();
      }
    }>

      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={
          (event) => {
            setCpf(cpfMask(event.target.value));
            
            if (!errors.cpf.valid) {
              setErrors({ ...errors, cpf: cpfValidator(cpfMask(event.target.value)) });
            }
          }
        }
        onBlur={(_) => setErrors({ ...errors, cpf: cpfValidator(cpf) })}
        error={!errors.cpf.valid}
        helperText={errors.cpf.message}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <FormControlLabel
          control={(
            <Switch
              onChange={(event) => setPromo(event.target.checked)}
              name="promocoes"
              color="primary"
              checked={promo}
            />
          )}
          label="Promoções"
        />
        <FormControlLabel
          control={(
            <Switch
              onChange={(event) => setNews(event.target.checked)}
              name="novidades"
              color="primary"
              checked={news}
            />
          )}
          label="Novidades"
        />

        <Button variant="contained" color="primary" type="button" style={{ marginRight: '20px' }}>Voltar</Button>
        <Button variant="contained" color="primary" type="submit">Próximo</Button>
      </Container>

    </form>
  );
};

export default DadosPessoais;
