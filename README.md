# Prática 05 - revisão da semana

### Atividade proposta e implementação

A [atividade proposta](#completeFunções) consistia em implementar 4 funções em TS usando os conhecimentos adquiridos ao longo da semana. Além de implementar as funções corretamente era necessário seguir o GitFlow ao realizar as tarefas.

### Git flow e lições aprendidas

Após criar baixar os arquivos fornecidos, foi feito um `git init` para criação do repositório local. Em seguida foram criadas as branches develop e primeira branch de feature. Já nesse passo, ocorreu o primeiro delize. Não realizei um `git checkout develop` de forma que a primeira branch de feature foi criada tendo como base a própria main.
  Em seguida, com o códio já implementado realizei um `git push -u <repo name>` para cirar a branch local no Github. Aqui veio o segundo erro. Percebi a opção de "compare & pull request" e acabei realizando o merge diretamente na main. Imediatamente percebi o erro e usei a opção dada pelo próprio Github para reverter o merge. Acreditando que o resultado seria o mesmo de um pull request, do ponto de vista de estrutura da árvore e informações disponíveis no Github, realizei a merge das branches develop e feature 1 pelo terminal e enviei para o remoto com um `git push`.
   A partir da segunda feature, realizei o mesmo fluxo de `git checkout develop` seguido de `git checkout -b <branch name>` para criação das branches e alternei entre merge pelo terminal e pull requests no próprio Github.
    Com todas as features implementadas, foi criada a branch *rc1* e o link do repositório enviado no Google Classroom.



### 1. complete as funções <a name="completeFunções"></a>

Na pasta `src/funcoes`, os arquivos listados abaixo definem funções utilitárias, que foram apenas definidas, através de sua assinatura e os comentários que as acompanham. Você deve completar as funções definidas, de forma que elas funcionem corretamente. Para testar estas funções, você pode utilizar as funções de `test...`, que estão construídas no arquivo `src/index.ts`. Caso houver algum erro de implementação das funções solicitadas, mensgens deverão aparecer em seu terminal indicando o erro.

funçoes:
- chunk.ts
- compact.ts
- fromPairs.ts
- uniq.t

**`Dica:`** Sugiro que você comente todas as funções, exceto aquela que você está trabalhando.

### 2. Promisificando um problema

O arquivo `src/funcoes/fila.ts` implementa uma fila de mensagens, onde existem operações já implementadas que deverão funcionar adicionando e removendo mensagens do arquivo `files/fila.txt`. Todos os métodos disponíveis neste módulo estão atualmente impelmentadas em formato de callbacks. Para cumprir esta tarefa, você deve implementar as funções de forma que elas sejam executadas de forma assíncrona. Da mesma forma que o primeiro exercício, você tem o `testFila`, que você poderá usar para garantir que sua implementação está correta.

### Proposta de exercício

Dado que existem uma série de métodos que você deverá implementar, sugiro que aproveite a prática para fazer um pouco da dinâmica do gitflow. Para isso, o caminho que sugiro é:

- criar no github um repositório para esta atividade.
- subir este repositório base para sua versão.
- criar uma issue para cada atividade a ser executada
  - chunk.ts
  - compact.ts
  - fila.ts
  - fromPairs.ts
  - uniq.t
- para implementar cada função, criar uma branch a parte. Após implementada, gerar um pull request para a branch principal do seu repositório.

## Instalação

Todas as bibliotecas necessárias para esta prática já estão adicionadas ao projeto. Desta forma, para iniciar o projeto, basta executar o comando abaixo, estando na pasta raiz deste repositório:

```sh
npm install
```

## comandos

Este projeto nasce com alguns comandos uteis para o desenvolvedor. Abaixo, uma breve descrição deles:

- `build`: comando responsável por transformar o código typescript em javascript, compreensível para o interpretador de node. A princípio, este comando será necessário apenas para o momento da publicação de nosso pacote.

Para executar qualquer um destes comandos, basta você executar, no terminal, o comando `npm run <nome-do-comando>`. Para executar o comando de build, por exemplo, você precisa executar um `npm run build`

## Estrutura do repositório

Este repositório possui dois diretórios principais: 
- `src`: pasta onde todas as funções deverão estar implementadas
