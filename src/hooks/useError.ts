import { ValidacoesProps } from './../contexts/ValidacoesContext';
import React, { useState } from 'react';
import { ObjectIndex } from '../utils';

interface useErrorsReturn {
  errors: ObjectIndex,
  validate: (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  submittable: () => boolean
}

export const useErrors = ({ validacoes }: ValidacoesProps): useErrorsReturn => {
  const [errors, setErrors] = useState<ObjectIndex>(getValidations({ validacoes }))

  const validate = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    let newErrors = {...errors}
    newErrors[name] = validacoes[name](value);
    setErrors(newErrors);
  }

  const submittable = (): boolean => {
    let canSubmit = true;

    Object.values(errors).map(value => {
      if (!value.valid) {
        canSubmit = false;
      }
    })

    return canSubmit;
  }

  return { errors, validate, submittable }
}

const getValidations = ({ validacoes }: ValidacoesProps) => {
  let validacoesState: ObjectIndex = {};

  Object.keys(validacoes).map(key => {
    validacoesState[key] = {
      valid: true,
      message: ''
    }
  })

  return validacoesState;
}