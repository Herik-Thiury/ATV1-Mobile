# Atividade 01 - App de Contatos (React Native)

Este projeto é um aplicativo móvel desenvolvido com **React Native** e **Expo**, focado na gestão de contatos. A aplicação permite realizar o fluxo completo de autenticação e gerenciamento de uma lista de contatos (CRUD).

## 📱 Telas do Projeto

O aplicativo segue o escopo definido na atividade, contendo 5 telas principais:
1. **Login:** Acesso ao sistema.
2. **Cadastro de Usuário:** Criação de novas contas de acesso.
3. **Lista de Contatos:** Visualização dos contatos cadastrados com cabeçalho personalizado.
4. **Cadastro de Contato:** Formulário para adicionar novos nomes, emails e telefones.
5. **Alteração/Exclusão:** Tela para editar ou remover contatos existentes.

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo Go](https://expo.dev/client)
- [React Navigation](https://reactnavigation.org/) (Stack Navigator)
- [Expo Vector Icons](https://icons.expo.fyi/) (Ionicons)

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://seu-repositorio.git](https://seu-repositorio.git)
Entre na pasta do projeto:

Bash

cd ATV1-Mobile
Instale as dependências:

Bash

npm install
Inicie o servidor do Expo:

Bash

npx expo start
Abrir no dispositivo:

Instale o app Expo Go no seu telemóvel (Android ou iOS).

Leia o QR Code que aparecerá no terminal com a câmara do telemóvel ou com o app Expo Go.

📝 Estrutura de Pastas
Plaintext

.
├── src/
│   ├── screens/          # Ficheiros de cada tela do app
│   │   ├── Login.js
│   │   ├── CadastroUsuario.js
│   │   ├── ListaContatos.js
│   │   ├── CadastroContato.js
│   │   └── AlteracaoExclusao.js
├── App.js                # Configuração de rotas e navegação
├── package.json          # Dependências do projeto
└── README.md
Desenvolvido para a Atividade 01 da disciplina de Desenvolvimento Mobile.
