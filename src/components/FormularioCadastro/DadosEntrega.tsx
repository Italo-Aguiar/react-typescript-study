import React, { useState, useContext } from 'react';
import { useErrors } from '../../hooks/useError';
import { TextField, Button } from '@material-ui/core';
import { unmask, cepMask, FormProps } from '../../utils';
import { ValidacoesContext } from '../../contexts';

const DadosEntrega: React.FC<FormProps> = ({ onSubmit, onBack }) => {
  const [cep, setCep] = useState('');
  const [addr, setAddr] = useState('');
  const [num, setNum] = useState('');
  const [comp, setComp] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const validacoes = useContext(ValidacoesContext);
  const { errors, validate, submittable } = useErrors(validacoes);

  return (
    <form onSubmit={ event => {
      event.preventDefault();
      if (submittable()) {
        onSubmit({ shipping: { cep, addr, num, comp, city, state } });
      }
    }}>

      <TextField
        value={cepMask(cep)}
        onChange={
          (event) => {
            const unmaskedCep = unmask(event.target.value)
            setCep(unmaskedCep);

            if (!errors.cep.valid) {
              validate(event)
            }
          }
        }
        onBlur={(event) => validate(event)}
        error={!errors.cep.valid}
        helperText={errors.cep.message}
        id="cep"
        name="cep"
        label="CEP"
        type="text"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
      />
      <TextField
        value={addr}
        onChange={(event) => setAddr(event.target.value)}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <TextField
        value={num}
        onChange={(event) => setNum(event.target.value)}
        id="numero"
        label="Número"
        type="text"
        variant="outlined"
        margin="normal"
        style={{marginRight: '20px'}}
      />
      <TextField
        value={comp}
        onChange={(event) => setComp(event.target.value)}
        id="complemento"
        label="Complemento"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={city}
        onChange={(event) => setCity(event.target.value)}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        style={{marginRight: '20px'}}
        required
      />
      <TextField
        value={state}
        onChange={(event) => setState(event.target.value)}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <br />
      <Button variant="contained" color="primary" type="button" style={{ marginRight: '20px' }} onClick={onBack}>Voltar</Button>
      <Button variant="contained" color="primary" type="submit">Finalizar Cadastro</Button>

    </form>
  );
};

export default DadosEntrega