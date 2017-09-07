


var _showResult = function (state) {
    if (state.isTerminal()) {
        if (state.result === 'DRAW') {
            Materialize.toast('Deu empate!', 40000)
        } else {
            if(state.result==='O'){
                Materialize.toast('Bob ganhou!', 40000);
            }else{
                Materialize.toast('Você ganhou!', 40000);
            }
        }

    }
};

var _aiAction = function (state, aiPlayer) {
    var aiPosition = aiMove(state);
    state.board[aiPosition] = aiPlayer;

    $(".item").each(function (index) {
        if (aiPosition == index) {
            $(this).addClass("selected-pc");
            _showResult(state);
        };
    });


};


$(document).ready(function () {

    var state = new State();
    var player = 'X';
    var aiPlayer = 'O';

    $('.item').click(function (e) {
        if (!state.isTerminal()) {

            $(this).addClass("selected-human");
            var position = $(this).attr('data-pos');
            state.board[position] = player;

            if (state.isTerminal()) {
                _showResult(state);
            } else {
                setTimeout(function () { _aiAction(state, aiPlayer); }, 500);
            };

        }
    });

    $("#reset").click(function (e) {
        state.board = state.board.map(function () { return "E"; });
        $(".item").each(function (index) {
            $(this).removeClass("selected-human selected-pc")
        });
    });


});