🍔 Lancheria App

Aplicativo mobile feito com Expo + React Native + TypeScript, simulando uma lancheria com:

Catálogo de lanches (imagem, nome, preço)

Visualização de detalhes do lanche

Carrinho de compras

Login simples com persistência

📦 Tecnologias usadas

Expo

React Native

TypeScript

React Navigation

AsyncStorage

JSON Server (simulação de backend)

🧰 Instalação

1. Clone o projeto

git clone https://github.com/seu-usuario/Lancheria-app.git
cd Lancheria-app

2. Instale as dependências

npm install

3. Rode o JSON Server (simula o backend)

npx json-server --watch db.json --port 3001

4. Inicie o app

npx expo start

Use o QRCode no celular com o app Expo Go instalado.

📂 Estrutura de pastas

Lancheria-app/
├── App.tsx
├── db.json
├── types.ts
├── /assets
├── /components
├── /screens
├── /utils
└── /...

🔐 Login

Login simulado sem banco:

Usuário: admin

Senha: 123

Após logado, o botão do WhatsApp é exibido.

✅ Funcionalidades

Listagem de lanches com 3 colunas (foto, nome, preço)

Detalhes ao clicar em um lanche

Adicionar e remover do carrinho

Contador de itens no topo

Login com persistência local

🛒 Melhorias futuras

Integração real com backend

Tela de pedidos finalizados

Autenticação via API

Feito com 💙 por William Ávila