# Portfólio de Fotografia

Este é um projeto de portfólio para fotógrafos, criado com **React** e **TypeScript**. O objetivo é fornecer uma plataforma limpa, moderna e responsiva para exibir trabalhos fotográficos.

![Exemplo do Portfólio](URL_DA_SUA_IMAGEM_AQUI)

---

## ✨ Funcionalidades

* **Galeria de Fotos:** Uma seção em grid para exibir suas melhores fotografias.
* **Seção Sobre:** Um espaço para contar sua história e paixão pela fotografia.
* **Formulário de Contato:** Um formulário simples para que potenciais clientes possam entrar em contato.
* **Design Responsivo:** Adaptável para visualização em desktops, tablets e celulares.

---

## 🚀 Tecnologias Utilizadas

* **React:** Biblioteca para construção da interface de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **Bootstrap:** Framework CSS para estilização rápida e responsiva.
* **Create React App:** Ambiente configurado para o desenvolvimento de aplicações React.

---

## 📂 Estrutura do Projeto

O código está organizado da seguinte forma para facilitar a manutenção e escalabilidade:
 ```
src
|-- assets/         # Imagens, fontes e estilos globais
|-- components/     # Componentes React reutilizáveis
|   |-- layout/     # Componentes de estrutura (Header, Footer)
|   +-- ui/         # Componentes de interface (Galeria, Formulário de Contato)
|-- pages/          # Componentes que representam páginas inteiras (Ex: HomePage)
+-- index.tsx       # Ponto de entrada da aplicação
 ```
---

## 🏁 Como Começar

Siga os passos abaixo para executar o projeto localmente.

### **Pré-requisitos**

* Você precisa ter o [Node.js](https://nodejs.org/) (versão 14 ou superior) e o npm instalados em sua máquina.

### **Instalação**

1.  Clone o repositório:
    ```bash
    git clone https://URL_DO_SEU_REPOSITORIO.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd nome-do-projeto
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

### **Executando o Projeto**

Para iniciar o servidor de desenvolvimento, execute:
```bash
npm start
```
Isso abrirá o projeto em http://localhost:3000 no seu navegador.


### **🛠️ Scripts Disponíveis**

```npm start```: Inicia o servidor de desenvolvimento.

```npm run build```: Gera a versão de produção do projeto na pasta build.

```npm test```: Executa os testes em modo interativo.

### **🎨 Como Personalizar**

Para adicionar suas fotos: Coloque os arquivos de imagem na pasta ```src/assets/images/``` e importe-os no arquivo ```src/components/ui/Gallery.tsx```.

Para alterar os textos: Modifique o conteúdo diretamente nos componentes localizados em ```src/components/``` e ```src/pages/```.

