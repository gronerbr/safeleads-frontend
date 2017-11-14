# Boilerplate Front

### Tecnologias:

 - React 16+
 - Redux
 - Redux Thunk
 - Redux Logger
 - Redux devTools
 - React PropTypes
 - Babel
 - Kitado-js
 - Hot reload
 - React Router V4
 - ESLint (Padrão Airbnb)
 - Editorconfig
 - Nvmrc
 - Jest
 - Enzyme (Implementar se necessário)
 - CSS Modules
 - Sass
 - Postcss
 - Postcss plugin autoprefixer
 - Postcss plugin media queries
 - Build inicial feito utilizando `create-react-app`
 - Path resolver (Webpack)

### Instruções gerais, paradigmas e boas práticas a serem implementadas:

  - A task de build instala todas as dependências primeiro, faz o build em si, depois serve o conteúdo estático no navegador, para que seja possĩvel um teste simples do build final.
  - Sempre desenvolver com os testes rodando em outra instância do terminal: `yarn test`
  - Master do git travada (após concluirmos o desenvolvimento dele)
  - Conceito do [Redux duck](https://github.com/erikras/ducks-modular-redux)
  - Container components separados de presentation components
  - Utilizar nova forma de workflow no Git (tag, rebase, releases, develop, etc)
  - Se atentar ao uso de Components, PureComponents, FunctionalComponents
  - Sempre utilizar [Yarn](https://yarnpkg.com/pt-br/)
  - Versão do node especificada no .nvmrc e no package.json (node 8.x.x)
  - Sempre que possível manter as dependências atualizadas