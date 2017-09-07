
var mode = 0;
var isRunning = false;

var _showResult = function (state) {
    if (state.isTerminal()) {
        if (state.result === 'DRAW') {
            Materialize.toast('Deu empate!', 4000)
        } else {
            if (state.result === 'O') {
                Materialize.toast('Bob ganhou!', 4000);
            } else {
                Materialize.toast('Você ganhou!', 4000);
            }
        }
        isRunning = false;
    }
};

var _aiAction = function (state, aiPlayer, mode) {

    var aiPosition;

    if (mode == 0) {
        var movePosition = Math.floor(Math.random() * state.moves().length);
        aiPosition = state.moves()[movePosition];
    } if (mode == 1) {
        if (Math.random() * 100 <= 40) {
            aiPosition = aiMove(state);
        } else {
            var movePosition = Math.floor(Math.random() * state.moves().length);
            aiPosition = state.moves()[movePosition];
        };
    } else if (mode == 2) {
        aiPosition = aiMove(state);
    };


    state.board[aiPosition] = aiPlayer;
    $(".item").each(function (index) {
        if (aiPosition == index) {
            $(this).addClass("selected-pc");
            _showResult(state);
        };
    });


};




$(document).ready(function () {

    $('select').material_select();

    
    var state = new State();
    var player = 'X';
    var aiPlayer = 'O';

    $('.item').click(function (e) {
        if (!state.isTerminal()) {
            
            if(!isRunning){
                isRunning = true;
                $('#mode').prop('disabled', true);
                $('select').material_select();
            };
            
            $(this).addClass("selected-human");
            var position = $(this).attr('data-pos');
            state.board[position] = player;

            if (state.isTerminal()) {
                _showResult(state);
            } else {
                setTimeout(function () { _aiAction(state, aiPlayer, mode); }, 500);
            };

        }
    });

    $("#reset").click(function (e) {
        isRunning = false;
        $('#mode').prop('disabled', false);
        $('select').material_select();

        state.board = state.board.map(function () { return "E"; });
        $(".item").each(function (index) {
            $(this).removeClass("selected-human selected-pc")
        });
    });

    $('#mode').on('change', function () {
       mode = parseInt(this.value);
    });


});