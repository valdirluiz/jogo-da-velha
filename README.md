# jogo-da-velha

Alunos: Gisele Bernardes, Jeann Porfírio e Valdir Hofer

O jogo foi implementado em JavaScript, html e css. Foi escolhido o Jogo da Velha, um jogo de dois jogadores, de forma a ser computador versus humano. Para realizar a jogada da máquina foi implementado o algoritmo minmax com algumas variações conforme a escolha da dificuldade. 

A cada jogada do computador será apresentado, para o usuário, a quantidade de iterações que foram necessárias para a jogada e a média, atual, da quantidade de iterações entre os jogadores.
Abaixo, será descrito brevemente a função de utilidade, heurísticas, dificuldades, problemas da implementação não resolvidos e observações quanto ao desempenho da implementação. 

## Função de Utilidade

Para a implementação do algoritmo do jogo, foi inicialmente implementado um objeto para representar o estado atual do jogo. Entre outras funções, o estado possui métodos para verificar se é terminal, métodos para buscar todos os possíveis estados a partir dele próprio, atributos para identificar o vencedor. 

Com o estado atual, é calculado o minMax de todos os possíveis estados. A função minMax, recebe como atributo um estado e retorna um store daquele estado, a partir do store o jogador min, que representa o computador, escolhe o menor valor, e realiza a jogada. 

## Heurística

Foram implementados 3 variações para o jogo sendo elas:
 - Busca cega - Muito Fácil
 - MinMax com função de azar - Fácil
 - MinMax - Difícil

Na opção 1 o computador faz uma busca cega sem considerar a mellhor jogada possível para alcançar seu objetivo.

Na opção 2 é aplicada uma função de azar a jogada do computador, que é variada entre busca cega e minMax.

Na opção 3, todas as jogadas do computador utilizam a função minMax para realizar as jogadas.

## Regras

O modo de dificuldade pode ser alterado no início do jogo, antes da primeira jogada, ou após reiniciar o jogo, clicando no botão “REINICIAR JOGO”. Logo após a primeira jogada a opção para alterar a dificuldade é bloqueada.

O jogo foi publicado em:
https://valdirluiz.github.io/jogo-da-velha/
