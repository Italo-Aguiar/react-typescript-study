import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { FormProps, emailValidator, passwordValidator } from '../../utils';


const DadosUsuario: React.FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: {
      valid: true,
      message: ''
    },
    password: {
      valid: true,
      message: ''
    }
  });

  return (
    <form onSubmit={ event => {
      event.preventDefault();
      onSubmit({ userData: { email, password } });
    }}>

      <TextField
        value={email}
        onChange={
          (event) => {
            const temp = event.target.value
            setEmail(temp)

            if (!errors.email.valid) {
              setErrors({ ...errors, email: emailValidator(temp) })
            }
          }
        }
        onBlur={(_) => setErrors({ ...errors, email: emailValidator(email) })}
        error={!errors.email.valid}
        helperText={errors.email.message}
        id="email"
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