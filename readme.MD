✅ 1. Clonar o repositório
No terminal:

git clone https://github.com/williamvellozodeavila/Lancheria_app.git

cd Lancheria_app

✅ 2. Instalar as dependências

npm install

Isso instala tudo que está no package.json.

✅ 3. Instalar o Expo CLI (caso ainda não tenha)

npm install -g expo-cli

✅ 4. Iniciar o projeto com cache limpo (recomendado)

npx expo start --clear

✅ 5. Escanear o QR Code com o Expo Go no celular
Após o comando acima, vai aparecer um QR Code no terminal ou navegador.

Use o app Expo Go para escanear.

O app vai rodar normalmente no celular.

✅ 6. Verifique se o projeto tem essas dependências (em package.json)
Se precisar, instale manualmente:

npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
npx expo install @react-native-async-storage/async-storage