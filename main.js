
function Box() {

    var xstr = 20;
    var ystr = 20;
    var widthstr = 100;
    var heightstr = 100;
    var colorstr = '#FFFF00';
    var id, event;
    var div1;

    this.init = function (_obj) {

        xstr = _obj.xstr ? _obj.xstr : xstr;
        ystr = _obj.ystr ? _obj.ystr : ystr;
        widthstr = _obj.widthstr ? _obj.widthstr : widthstr;
        heightstr = _obj.heightstr ? _obj.heightstr : heightstr;
        colorstr = _obj.colorstr ? _obj.colorstr : colorstr;
        event = _obj.event;
        id = _obj.id;

        div1 = document.createElement('div');
        div1.style.position = 'absolute';
        div1.style.left = xstr + 'px';
        div1.style.top = ystr + 'px';
        div1.style.width = widthstr + 'px';
        div1.style.height = heightstr + 'px';
        div1.style.backgroundColor = colorstr;

        document.body.appendChild(div1);

        div1.addEventListener('click', onclick, false);

    }

    this.setValue = function (txtstr) {
        div1.innerHTML = txtstr;
        div1.removeEventListener('click', onclick, false);
    }

    this.getValue = function () {
        return div1.innerHTML;
    }

    function onclick(evt) {
        event(evt, id);

    }
}

function TicTacToe() {

    turns = 'X';
    var self = this;
    var x = 50, y = 50;

    this.tictac = function (_obj) {

        x = _obj.x ? _obj.x : x;
        y = _obj.y ? _obj.y : y;

        var k = 1;
        for (var i = 1; i <= 3; i++) {
            for (var j = 1; j <= 3; j++) {

                this['b' + k] = new Box();
                this['b' + k].init({
                    xstr: x + i * 110,
                    ystr: y + j * 110,
                    id: k,
                    event: Clicked
                })
                k++;
            }
        }
    }
    function Clicked(event, id) {

        if (turns == 'X') {
            var txtstr = "X";
            self['b' + id].setValue(txtstr);
            console.log("X", id);
            turn();
        } else if (turns == 'O') {
            var txtstr = "O";
            self['b' + id].setValue(txtstr);
            console.log("O", id);
            turn();
        }
    }

    function checkwin(move) {

        if ((check(1, 2, 3, move) || check(4, 5, 6, move) || check(7, 8, 9, move) || check(1, 4, 7, move) || check(2, 5, 8, move) ||
            check(3, 6, 9, move) || check(1, 5, 9, move) || check(3, 5, 7, move)) == true) {
            //console.log('Game Won');
            alert(move + " has won")
        } else {
            console.log('Next move')
        }


    }

    function turn() {

        if (turns == 'X') {
            turns = 'O';
        } else if (turns == 'O') {
            turns = 'X';
        }
        //console.log(turns)
        if (checkwin(turns)) {
            document.innerHTML(turns + "has won")
        }

    }

    function check(a, b, c, move) {

        if (val(a) == move && val(b) == move && val(c) == move) {
            return true;
        }
    }

    function val(a) {

        var a = self['b' + a].getValue();
        console.log("val", a)
        return a;

    }



}

window.onload = function () {

    var b1 = new TicTacToe();
    b1.tictac({
        x: 100,
        y: 100
    })
    // var b2 = new TicTacToe();
    // b2.tictac({
    //     x: 500,
    //     y: 500
    // })
}

