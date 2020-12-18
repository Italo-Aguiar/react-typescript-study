import React, { useState, useEffect } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';
import { StepLabel, Stepper, Step } from '@material-ui/core';

const FormularioCadastro: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setStep(step+1);
  }

  const prevStep = () => {
    setStep(step-1);
  }

  const getFormData = (data: object): void => {
    setFormData({ ...formData, ...data });
    nextStep();
  }

  useEffect(() => {
    if (step === formularios.length - 1) {
      //TODO: Implementar envio de dados do formulário
      console.log(formData);
    }
  }, [formData])

  const formularios = [
    <DadosUsuario onSubmit={getFormData} />,
    <DadosPessoais onSubmit={getFormData} onBack={prevStep} />,
    <DadosEntrega onSubmit={getFormData} onBack={prevStep} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ]

  return (
    <>
      <Stepper activeStep={step}>

        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>

      </Stepper>
      {
        formularios[step]
      }
    </>
  )
};




export default FormularioCadastro;
