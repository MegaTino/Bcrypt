# Bcrypt
# Sistema de Cadastro e Login

Este documento descreve o funcionamento de um sistema de cadastro e login para uma aplicação web.

## Funcionalidades

### Cadastro de Usuário

- Os usuários podem se cadastrar na aplicação fornecendo um nome de usuário, endereço de e-mail e senha.
- O sistema valida os campos inseridos para garantir que sejam preenchidos corretamente.
- Após o cadastro bem-sucedido, os detalhes do usuário são armazenados no banco de dados.

### Login de Usuário

- Os usuários registrados podem fazer login fornecendo seu endereço de e-mail e senha.
- O sistema verifica as credenciais fornecidas pelo usuário com as informações armazenadas no banco de dados.
- Se as credenciais estiverem corretas, o usuário é autenticado.

## Segurança

- As senhas dos usuários são armazenadas de forma segura no banco de dados usando técnicas de hash.
- Todas as comunicações entre o cliente e o servidor são protegidas usando HTTPS para garantir a segurança das informações transmitidas.

## Tecnologias Utilizadas

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Banco de Dados: MySQL

Este sistema de cadastro e login oferece uma maneira segura e conveniente para os usuários acessarem a aplicação, garantindo a proteção de suas informações pessoais.