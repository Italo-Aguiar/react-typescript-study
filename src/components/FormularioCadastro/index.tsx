import React, { useState, useEffect } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
// import { getFormData } from '../../utils';

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
    console.log(JSON.stringify(formData));
  }, [formData]);

  const formulario = [
    <DadosUsuario onSubmit={getFormData} />,
    <DadosPessoais onSubmit={getFormData} onBack={prevStep} />,
    <DadosEntrega onSubmit={getFormData} onBack={prevStep} />,
  ]

  return (
    <>
      {
        formulario[step]
      }
    </>
  )
};




export default FormularioCadastro;
