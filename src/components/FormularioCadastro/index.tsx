import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { log } from '../../utils';

const FormularioCadastro: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step+1);
  }

  const currentForm = (step: number): JSX.Element => {
    switch (step) {
      case 1:
        return <DadosUsuario onSubmit={nextStep} />
      case 2:
        return <DadosPessoais onSubmit={nextStep} />
      case 3:
        return <DadosEntrega onSubmit={log} />
      default:
        return <Typography>Erro ao selecionar formulário</Typography>
    }
  }

  return (
    <>
      {
        currentForm(step)
      }
    </>
  )
};




export default FormularioCadastro;
