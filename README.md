Portfólio de Fotografia em React
Este é um projeto de portfólio para fotógrafos, desenvolvido com React e TypeScript, e inicializado com Create React App.

Estrutura de Pastas
O projeto utiliza uma estrutura de pastas organizada para separar responsabilidades e facilitar a manutenção:

src
|-- assets/         # Para imagens, fontes e estilos globais
|-- components/     # Componentes React reutilizáveis
|   |-- layout/     # Componentes de estrutura (Header, Footer)
|   +-- ui/         # Componentes de interface (Galeria, Formulário)
|-- pages/          # Componentes que representam uma página inteira
|-- hooks/          # Hooks customizados
|-- App.tsx         # Componente principal da aplicação (agora em pages/HomePage.tsx)
+-- index.tsx       # Ponto de entrada da aplicação
Como Customizar o Portfólio
Adicionar suas Fotos: Coloque suas imagens na pasta src/assets/images/portfolio/ e depois importe-as no componente src/components/ui/Gallery.tsx.

Alterar os Textos:

Para o título e rodapé, modifique os arquivos em src/components/layout/Header.tsx e src/components/layout/Footer.tsx.

Para a seção "Sobre Mim", edite o componente About dentro de src/pages/HomePage.tsx.

Scripts Disponíveis
No diretório do projeto, você pode executar:

npm start
Executa o aplicativo no modo de desenvolvimento.

Abra http://localhost:3000 para visualizá-lo no navegador.

A página será recarregada se você fizer edições.

npm test
Inicia o executor de testes no modo de observação interativo.

npm run build
Constrói o aplicativo para produção na pasta build.

npm run eject
Nota: esta é uma operação de sentido único. Uma vez que você eject, não pode mais voltar!

Saiba Mais
Você pode aprender mais na documentação do Create React App.

Para aprender React, confira a documentação do React.
