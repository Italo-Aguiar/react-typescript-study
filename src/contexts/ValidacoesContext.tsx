import { createContext } from 'react';
import { cepValidator, cpfValidator, emailValidator, passwordValidator, ValidatorResponse } from '../utils';

export interface ValidacoesProps {
  validacoes: {
    [key: string]: any;

    cpf: (cpf: string) => ValidatorResponse;
    email: (email: string) => ValidatorResponse;
    password: (password: string) => ValidatorResponse;
    cep: (cep: string) => ValidatorResponse;
  }
} 

const value = {
  validacoes: {
    cpf: cpfValidator,
    email: emailValidator,
    password: passwordValidator,
    cep: cepValidator,
  }
}

export const ValidacoesContext = createContext<ValidacoesProps>(value);

export const ValidacoesProvider: React.FC = props => {
  return (
    <ValidacoesContext.Provider 
      value={value}
    >
      { props.children }
    </ValidacoesContext.Provider>
  );
}