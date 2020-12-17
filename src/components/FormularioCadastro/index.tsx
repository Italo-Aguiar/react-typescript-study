import React from 'react';
import DadosPessoais from './DadosPessoais';
import { log } from '../../utils';

const FormularioCadastro: React.FC = () => {
  return (
    <DadosPessoais onSubmit={log} />
  )
};

export default FormularioCadastro;
