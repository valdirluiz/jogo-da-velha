
function minmax(state) {
  interactionsPerTurn++;
  if (state.isTerminal() === true) {
    if (state.result === state.playerSymbol) {
      return -10;
    } else if (state.result === state.aiSymbol) {
      return 10;
    } else {
      return 0;
    }
  }


  newStatesSet = state.moves().map(function (el) {
    var newState = new State(state);
    newState.board[el] = state.turn.slice(0);
    newState.advanceTurn();
    newState.element = el;
    return newState;
  });
   
  var newStateScores = [];

   
  newStatesSet.forEach(function (newState) {
    var newStateScore = minmax(newState);
    newStateScores.push(newStateScore);
  });
  if (state.turn === state.playerSymbol) {
    stateScore = Math.min(...newStateScores);
  } else {
    stateScore = Math.max(...newStateScores);
  }
  return stateScore;
};

function aiMove(state) {
  var possibleScores = [];
  var possibleMoves = [];
  var possibleStates = state.moves().map(function (el) {
    var newState = new State(state);
    possibleMoves.push(el);
    newState.board[el] = state.aiSymbol;
    possibleScores.push(minmax(newState));
    return newState;
  });
  if (possibleMoves.length < 1) {
    return -1;
  }
  function indexOfMax(arr) {
    var max = arr.reduce(function (a, b) {
      return b > a ? b : a;
    });
    return arr.indexOf(max);
  }
  return possibleMoves[indexOfMax(possibleScores)];
};

