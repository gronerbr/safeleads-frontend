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
 - ~~Enzyme~~ (Implementar se necessário)
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

  ### Analytics
  - Para configurar o Google Analytics, basta modificar inserir o ID na variável `GA_ID` no arquivo [src/utils/ga.js](https://github.com/Kitado/kitado-spa-boilerplate/blob/master/src/utils/ga.js).
  - Para descobrir ID do GA, vá em `Administrador > Informações de acompanhamento > Código de acompanhamento`, e copie o código que está nesse formato: **UA-000000000-0**.
  - O código de acompanhamento atual foi criado em 16/11/2017. Se o Google modificar esse script padrão, será preciso editar esse arquivo. Caso contrário não será necessário nenhuma outra modificação.

  ### Build final
  - `yarn build`
  - O comando do build reinstala todas as dependências, faz o build, e roda um servidor local no browser, para um teste rápido do build.
  - É obrigatório que o Google Analytics esteja habilitado para o build final.