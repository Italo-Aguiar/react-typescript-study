import React, { useState, useContext } from 'react';
import { useErrors } from '../../hooks/useError';
import {
  Button, TextField, Switch, FormControlLabel, Container, useControlled
} from '@material-ui/core';
import { unmask, cpfMask, FormProps, ObjectIndex } from '../../utils';
import { ValidacoesContext } from '../../contexts';


const DadosPessoais: React.FC<FormProps> = ({ onSubmit, onBack }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  
  const validacoes = useContext(ValidacoesContext);
  const { errors, validate, submittable } = useErrors(validacoes)

  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        if (submittable()) {
          onSubmit({ personalInfo: { nome, sobrenome, cpf, promo, news } });
        }
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
        value={cpfMask(cpf)}
        onChange={
          (event) => {
            const unmaskedCpf = unmask(event.target.value)
            setCpf(unmaskedCpf);
            
            if (!errors.cpf.valid) {
              validate(event);
            }
          }
        }
        onBlur={(event) => validate(event)}
        error={!errors.cpf.valid}
        helperText={errors.cpf.message}
        id="cpf"
        name="cpf"
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

        <Button variant="contained" color="primary" type="button" style={{ marginRight: '20px' }} onClick={onBack}>Voltar</Button>
        <Button variant="contained" color="primary" type="submit">Próximo</Button>
      </Container>

    </form>
  );
};

export default DadosPessoais;
