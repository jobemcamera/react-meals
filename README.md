# React Meals

React Meals é a uma plataforma de Delivery de Comida construída em React. Foi o projeto do treinamento de React do desenvolvedor [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/). 

## O Projeto

O intuíto deste projeto foi desenvolver uma aplicação em React que utilizasse diversos conceitos da biblioteca. O principal objetivo foi mostrar como uma aplicação real de alto nível é construída em React.

Na tela inicial, podemos ver a lista de refeições que são puxadas diretamente do banco de dados Firebase. Ao clicar em ```+ Add``` de qualquer refeição, o carrinho de pedidos ser preenchido com o item e a quantidade do pedido. Cada pedido pode ser feito a 1 à 5 itens por vez.

![image](https://github.com/jobemcamera/react-meals/assets/109925623/d4d74461-b7b3-4645-99f3-bf6a65db0ad2)


Ao clicar em ```Your Cart```, um modal irá aparecer mostrando todos os pedidos no carrinho. Você poderá inserir ou remover os pedidos que já estão ali dentro, clicando em ```+``` ou ```-```. 

![image](https://github.com/jobemcamera/react-meals/assets/109925623/74e46777-0c56-4f71-b314-e2fe504ab366)


Com o carrinho cheio, basta finalizar o pedido clicando em ```Order```, liberando o acesso ao formulário de envio. O formulário contém verificações das informações. 

![image](https://github.com/jobemcamera/react-meals/assets/109925623/0bb064f2-c8ff-4c0b-8d95-89d1cfd47e1c)

Após confirmar, seu pedido será enviado ao banco de dados.

![image](https://github.com/jobemcamera/react-meals/assets/109925623/0760cc36-888e-4af1-b4c3-fa81e17e5a7f)


## O que eu aprendi

Neste projeto, passamos por diversos conceitos do React:
- Fetch (POST e GET);
- Formulário em React;
-  Hooks;
  - useState;
  - useReducer;
  - useContext;
  - useRef;
- React.createContext;
- ReactDOM.createPoral;
- Prop drilling;
- CSS dinâmico;
- Componente SVG.
