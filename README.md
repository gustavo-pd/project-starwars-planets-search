<h1>👾 StarWars Planets Search 🛸</h1>

<img src="./src/images/Star-wars-logo-new-tall.jpg" alt="Logo SPS">

<h2>Contexto</h2>

<p>O StarWars Planets Search é um projeto front-end, onde é possível visualizar diversos planetas do universo StarWars, com isso, é possível filtrar os planetas pelo nome, ou por diversas outras características</p>
<p>Neste projeto sou o autor de toda parte do front-end, sendo ele um projeto desenvolvido durante o curso da Trybe, em dezembro de 2021, no módulo de Front-end.</p>
<p>A API utilizada para obter os dados dos planetas: https://swapi-trybe.herokuapp.com/api/planets/</p>

<h2>Técnologias utilizadas</h2>

<ul>
  <li>Docker</li>
  <li>MySQL e Sequelize</li>
  <li>Typescript</li>
  <li>NodeJS</li>
  <li>Express</li>
  <li>API Rest - CRUD</li>
  <li>Modelo de camadas MSC e POO</li>
  <li>Testes de integração - Mocha, chai e sinon</li>
</ul>

<h2>Desenvolvimento</h2>

<p>Neste projeto pude implementar todo o <b>back-end</b> <i>(./app/backend)</i> da aplicação TFC, de modo que o usuário possa ver a tabela atualizada e também o resultado de cada jogo.</p>
<p>Para o usuário do administrador é possível adicionar mais partidas, atualizando automaticamente a tabela.</p>
<p>Foi utilizado o docker-compose com o papel de unir todas as partes e subir um projeto completo.</p>
<p>Banco de dados criado em MySQL, utilizando a ferramenta Sequelize. Foram adicionados dados por via de Seeders para popular a tabela e mostrar o funcionamento.</p>
<p>O Back-end foi desenvolvido utilizando NodeJS, Typescript e Express. Implementando regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.</p>

<img src="./app/frontend/src/images/tfccc.png" alt="TFC Home page">


<h2>Como executar o projeto</h2>

  1. Clone o repositório
    * `git clone https://github.com/tryber/sd-016-a-trybe-futebol-clube.git`.
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd sd-016-a-trybe-futebol-clube`
</br>

  2. Instale as dependências:
    * `npm install`
</br>

  3. Rode o Docker para unir e subir todas as partes:
    * `npm run compose:up` para upar ou `npm run compose:down` para derrubar
</br>

  4. O front-end irá rodar na porta 3000, e o back-end na porta 3001, para acessar o front-end, acesse no seu navegador:
  * `http://localhost:3000`
</br>

  5. Para fazer login com o admin e poder gerenciar partidas:
  * Login: `admin@admin.com` Password: `secret_admin`
</br>

  Para fazer login como usuário:
  * Login: `user@user.com` Password: `secret_user`