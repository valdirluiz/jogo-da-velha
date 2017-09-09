function State(old) {
    // Prior board states can be loaded in during minmax recursion
    if (typeof old !== 'undefined') {
      this.board = old.board.slice(0);
      this.turn = old.turn.slice(0);
      this.aiSymbol = old.aiSymbol.slice(0);
      this.playerSymbol = old.playerSymbol.slice(0);
    } else {
     
      this.board = ['E','E','E','E','E','E','E','E','E'];  
      this.turn = 'X';
      this.aiSymbol = 'O';
      this.playerSymbol = 'X';
    }
     
    this.result = 'active';
     
    this.element = '';
     
    this.advanceTurn = function() {
      this.turn = this.turn === 'X' ? 'O' : 'X';
    }
     
    this.isTerminal = function() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (this.board[a] !== 'E' && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          this.result = this.board[a];
          return true;
        } 
      } 
      if (this.moves().length < 1) {
          this.result = 'DRAW';
          return true;
      }
      return false;
    }
     
    this.moves = function() {
      arr = this.board.reduce(function(array,el,index){
        if (el === 'E') {
          array.push(index);
        }
        return array;
      },[]);
      return arr;
    }
  };