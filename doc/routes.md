# Orderfy

## O que o cliente pode fazer

- Ver o id da mesa;
- Ver lista de proutos;
- Pesquisar produto por nome;
- Ver detalhes de um produto;
- Adicionar produto ao pedido;
- Fazer pedido;
- Acompanhar o status do pedido.

## Endpoints

## Cliente

### PATCH - Abrir mesa

#### Dados enviados

- Token (id da mesa);

#### Dados retornados

- sucesso/erro

---

### GET - Listar produtos

#### Dados enviados

#### Dados retornados

- Produtos [ ]
  - Nome do prooduto
  - Url da imagem
  - Preço

---

### POST - Fazer pedido

#### Dados enviados

- Produtos [ ]
  - Nome do prooduto
  - Url da imagem
  - Preço
  - Data

#### Dados retornados

- sucesso/erro
