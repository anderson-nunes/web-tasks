# web-tasks

## Link de Acesso

Link vercel: [web-tasks](https://web-tasks-sigma.vercel.app/)

## Sua missão

Desenvolver uma aplicação web que permita aos usuários:

- **Cadastrar-se:** Criar uma conta utilizando email e senha.
- **Gerenciar tarefas:** Adicionar, listar, editar e excluir tarefas.
- **Filtrar tarefas:** Buscar tarefas por título, status (concluída ou não) e usuário.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construir a interface do usuário.
- **TypeScript:** Linguagem que adiciona tipagem estática ao JavaScript.
- **CSS Modules:** Estilo modular para evitar conflitos de nome em CSS.
- **Banco de Dados Dedicado:** Armazenamento de dados para gerenciamento de tarefas.

## Funcionalidades

### Página de Login

Na página de login possui digitar seu e-mail e sua senha cadastrada e entrar no sistema. Caso ainda não tenha um e-mail/senha cadastrado no sistema, clique no botão crie uma conta! e será direcionado para a página de cadastro.

### Página de Cadastro

Nessa página o usuário pode criar sua conta fornecendo apenas um apelido, e-mail e senha. Caso haja algum erro o usuário será notificado. Ao realizar seu cadastro com sucesso o usuário é direcionada para a página de tasks.

### Gerenciamento de Tarefas

- **Adicionar Tarefas:** Os usuários podem criar novas tarefas.
- **Listar Tarefas:** Visualização de todas as tarefas cadastradas.
- **Editar Tarefas:** Modificar detalhes de tarefas existentes.
- **Excluir Tarefas:** Remover tarefas que não são mais necessárias.

### Filtragem de Tarefas

- Busca de tarefas por:
  - **Título:** Encontre tarefas pelo seu título.
  - **Status:** Filtre entre tarefas concluídas e não concluídas.
  - **Usuário:** Busque tarefas associadas a um usuário específico.

## Instruções de Uso

1. Clone este repositório em sua máquina.
2. Navegue até o diretório do projeto.
3. Instale as dependências com o comando:
   
```sh
   npm install
   ```

Inicie o servidor local com:

```sh
npm start
```

Acesse a aplicação em seu navegador através de http://localhost:3000
