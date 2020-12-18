import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { FormProps, emailValidator, passwordValidator, ObjectIndex } from '../../utils';
import { ValidacoesContext } from '../../contexts';


const DadosUsuario: React.FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ObjectIndex>({
    email: {
      valid: true,
      message: ''
    },
    password: {
      valid: true,
      message: ''
    }
  });

  const { validacoes } = useContext(ValidacoesContext);

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

  return (
    <form onSubmit={ event => {
      event.preventDefault();
      if (submittable()) {
        onSubmit({ userData: { email, password } });
      }
    }}>

      <TextField
        value={email}
        onChange={
          (event) => {
            const temp = event.target.value
            setEmail(temp)

            if (!errors.email.valid) {
              validate(event);
            }
          }
        }
        onBlur={(event) => validate(event)}
        error={!errors.email.valid}
        helperText={errors.email.message}
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
      />
      <TextField
        value={password}
        onChange={
          (event) => {
            const temp = event.target.value
            setPassword(temp);

            if (!errors.password.valid) {
              setErrors({ ...errors, password: passwordValidator(temp) })
            }
          }
        }
        onBlur={(_) => setErrors({ ...errors, password: passwordValidator(password) })}
        error={!errors.password.valid}
        helperText={errors.password.message}
        id="senha"
        name="password"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit">Próximo</Button>
        
    </form>
  );
}

export default DadosUsuario;