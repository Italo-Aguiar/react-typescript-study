import 'fontsource-roboto';
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro';
import './App.css';

const App: React.FC = () => (
  <Container maxWidth="sm" component="article" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70%', width: '100%' }}>
    <Typography component="h1" variant="h3" align="center">Formulário de Cadastro</Typography>
    <FormularioCadastro />
  </Container>
);

export default App;
