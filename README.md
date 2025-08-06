# Desafio de Programação - Calpar

Bem-vindo ao repositório do desafio de programação da Calpar!  
Este projeto foi desenvolvido para demonstrar habilidades em consumo de API, manipulação de dados e integração de funcionalidades nativas do navegador utilizando React com Next.js.

---
## 🌐 Deploy

O projeto está disponível em produção neste link:

👉 [https://desafiocalpar.netlify.app](https://desafiocalpar.netlify.app)

---
## Objetivo

Criar uma aplicação que consome uma API pública para listar usuários e exibir suas informações, além de integrar uma funcionalidade nativa do navegador (geolocalização) com exibição de mapa.

---
## Passos Seguidos

- Escolhi o Next.js por oferecer SSR e facilidade para projetos React.

- Criei uma interface simples para listar usuários obtidos da API pública: https://6890f295944bf437b597da94.mockapi.io/user.

- Adicionei funcionalidade de geolocalização via API nativa do navegador para capturar latitude, longitude e endereço aproximado.

- Utilizei a biblioteca Leaflet para exibir um mapa interativo com a localização do usuário.

- Criei um design responsivo usando CSS customizado para melhor experiência em dispositivos móveis e desktops.

---
## Decisões de Design
Optei por CSS puro em vez de frameworks como Tailwind por maior controle e simplicidade.


## Funcionalidades Implementadas

- **Consumo de API**  
  A aplicação consome a API pública em `https://6890f295944bf437b597da94.mockapi.io/user` e exibe a lista de usuários com seus nomes.

- **Geolocalização**  
  Utiliza a API nativa do navegador para obter a localização do usuário (latitude e longitude) e exibe o endereço aproximado.

- **Mapa Interativo**  
  Integração com a biblioteca Leaflet para mostrar no mapa a localização atual do usuário.

- **Responsividade**  
  Layout adaptado para diferentes tamanhos de tela, garantindo boa experiência em dispositivos móveis.

---

## Tecnologias Utilizadas

- React com Next.js  
- CSS customizado  
- API Fetch para consumo de dados  
- API de Geolocalização do navegador  
- Leaflet para exibição de mapas  
- React Icons para ícones visuais  

---


## Como Rodar Localmente
* Clone o repositório:


git clone https://github.com/Princyrr/desafio-calpar.git

* Entre na pasta do projeto:

cd desafio-calpar

* Instale as dependências:

npm install
ou
yarn install

* Execute o projeto:

npm run dev
ou
yarn dev

* Abra no navegador:

http://localhost:3000


## Contato
Para dúvidas ou feedback, entre em contato comigo pelo e-mail: princyrpiress@gmail.com

Obrigado pela oportunidade!!!