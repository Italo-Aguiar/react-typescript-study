import { ValidatorResponse } from './interfaces';

export const cpfValidator = (cpf: string): ValidatorResponse => {
  const cpfArr = cpf.split('').map(d => parseInt(d));

  const verify = (max: number): boolean => {
    let sum = 0;
    
    cpfArr.map((digit, i) => {
      if (i <= max - 2) {
        sum += digit * (max - i);
      }
    })

    sum = sum * 10;

    return sum % 11 == cpfArr[max-1] ? true : false
  }

  return cpfArr.length == 11 && !cpfArr.every(v => v == cpfArr[0]) && verify(10) && verify(11)
    ? {
      valid: true,
      message: ''
    }
    : {
      valid: false,
      message: 'Informe um CPF válido.'
    }
}

export const cepValidator = (cep: string): ValidatorResponse => {
  if (cep.length == 8) {
    return {
      valid: true,
      message: ''
    }
  }

  return {
    valid: false,
    message: 'Informe um CEP válido.'
  }
}

export const emailValidator = (email: string): ValidatorResponse => {
  const re = /\S+@\S+\.\S+/;
  
  if (re.test(email)) {
    return {
      valid: true,
      message: ''
    }
  }

  return {
    valid: false,
    message: 'Informe um email válido.'
  }
}

export const passwordValidator = (password: string): ValidatorResponse => {
  const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,25}$/;

  if (re.test(password)) {
    return {
      valid: true,
      message: ''
    }
  }

  return {
    valid: false,
    message: 'A senha deve ter pelo menos uma letra minúscula, uma maiúscula e um número, e ter de 6 a 25 caracteres.'
  }
}