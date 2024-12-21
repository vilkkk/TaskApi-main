## API de Controle de Tarefas e Produtividade
Este é um projeto de API RESTful de controle de tarefas e produtividade, desenvolvido usando Node.js, Express, MongoDB e JWT para autenticação. O projeto permite o cadastro de usuários, login, gerenciamento de categorias e tarefas associadas a essas categorias.

## Funcionalidades
Cadastro e login de usuários.
Criação e gerenciamento de categorias (associadas a um usuário).
Criação, atualização, remoção e listagem de tarefas (associadas a uma categoria e usuário).
Prioridade de tarefas.
Filtros de tarefas por status (pendente/concluída), prioridade, e mais.
## Tecnologias Usadas
Node.js
Express
MongoDB (via MongoDB Atlas)
JWT para autenticação
Bcrypt.js para criptografia de senhas
## Pré-requisitos
Antes de começar, você precisará de:

Node.js e npm instalados em sua máquina. Caso ainda não tenha, baixe e instale a partir de https://nodejs.org/.
Conta no MongoDB Atlas para configurar um banco de dados remoto.
Passos para Rodar o Projeto:

```
1. Clonando o Repositório
Primeiro, clone o repositório para sua máquina local:
```
![image](https://github.com/user-attachments/assets/0545b52d-2222-45db-8382-2af8d6d9345b)

```
2. Instalando Dependências
Depois de clonar o repositório, entre na pasta do projeto e instale as dependências necessárias:
```
![image](https://github.com/user-attachments/assets/fb5cca95-d673-461d-b825-6e0d8a2a0460)


```
3. Configurando o Banco de Dados
O projeto utiliza o MongoDB Atlas como banco de dados. Você precisa de uma conta no MongoDB Atlas para configurar o acesso ao banco de dados remoto.

Acesse MongoDB Atlas e crie uma conta (se ainda não tiver uma).

Crie um novo Cluster no MongoDB Atlas.

Após a criação, acesse o Cluster e crie um Database User com permissões de leitura e escrita.

Copie a string de conexão do MongoDB, que estará no formato:


mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
No projeto, crie o arquivo .env e lá acrescente assim :
```
![image](https://github.com/user-attachments/assets/18c399b7-014d-485f-a228-ef0475d86a0c)



```
4. Rodando o Servidor Localmente
Agora, você pode rodar o servidor localmente. No terminal, execute o seguinte comando:

node src/index.js
```
```
5. Testando a API
Para testar a API, você pode usar o Postman ou qualquer outra ferramenta para realizar requisições HTTP.
```
```
5.1. Registrar um Novo Usuário
Envie uma requisição POST para a rota /users/register com o corpo da requisição em formato JSON:
```

![image](https://github.com/user-attachments/assets/2234e520-42d9-4072-a765-9af2d774984a)
```
5.2. Fazer Login
Envie uma requisição POST para a rota /users/login com o corpo da requisição:
```

![image](https://github.com/user-attachments/assets/c3038b65-3f99-4261-b448-9d9232858a60)
```
Se o login for bem-sucedido, você receberá um token JWT. Esse token será necessário para acessar as rotas protegidas.
```
```
5.3. Criar uma Categoria
Envie uma requisição POST para a rota /categories com o seguinte corpo:
```

![image](https://github.com/user-attachments/assets/d0f9b968-41f0-4f33-acba-5463269f665c)

```
5.4. Criar uma Tarefa
Envie uma requisição POST para a rota /tasks com o seguinte corpo:
```

![image](https://github.com/user-attachments/assets/1fa0ada9-cdf3-4272-853a-4651aed51325)
```
5.5. Listar Tarefas de um Usuário
Envie uma requisição GET para a rota /tasks/{email}, substituindo {email} pelo email do usuário para listar as tarefas associadas.
```
![image](https://github.com/user-attachments/assets/a223daa9-e8e8-4213-ad10-01decd656b63)

```
6. Exemplo de Fluxo Completo
Registre um novo usuário.
Faça login com as credenciais do usuário registrado.
Crie uma ou mais categorias.
Crie tarefas e associe-as a essas categorias.
Liste as tarefas associadas ao usuário, filtrando por categoria.
```
## Autores
- Danilo Mateus
- João Vilker
- Guilherme Cardoso
