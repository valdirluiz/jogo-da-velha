
function minmax(state) {
    if (state.isTerminal() === true) {
      if (state.result === state.playerSymbol) {
        return  -10; 
      } else if (state.result === state.aiSymbol) {  
        return 10;
      } else {
        return 0;
      }
    } 
    
    // Generate list of possible new game states (moves) 
    newStatesSet = state.moves().map(function (el) {
      var newState = new State(state);
      newState.board[el] = state.turn.slice(0);
      newState.advanceTurn();
      newState.element = el;
      return newState;
    });  
    // Array to hold all child scores
    var newStateScores = [];
  
    // For each of these states, add the minmax score of 
    // that state to the scoreList
    newStatesSet.forEach(function(newState) {
      var newStateScore = minmax(newState);
      newStateScores.push(newStateScore);
    });
    if (state.turn === state.playerSymbol) {
      stateScore = Math.min(...newStateScores);
    } else {
      stateScore = Math.max(...newStateScores);
    }
    return stateScore;
  }
  
  function aiMove(state) {
    var possibleScores = [];
    var possibleMoves = [];
    var possibleStates = state.moves().map(function(el) {
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
      var max = arr.reduce(function(a,b) {
        return b > a ? b : a;   
      });
      return arr.indexOf(max);
    }
    return possibleMoves[indexOfMax(possibleScores)];
  }  
  
   