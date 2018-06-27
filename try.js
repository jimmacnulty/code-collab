function Box() {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var turn = 1;
    var w = canvas.width;
    var h = canvas.height;

    var xstr = 0;
    var ystr = 0;
    var rw = 150;
    var rh = 100;
    var rstr = 10;

    this.init = function (_obj) {

        xstr = _obj.xstr ? _obj.xstr : xstr;
        ystr = _obj.ystr ? _obj.ystr : ystr;
        rstr = _obj.rstr ? _obj.rstr : rstr;
        rw = _obj.rw ? _obj.rw : rw;
        rh = _obj.rh ? _obj.rh : rh;

        ctx.fillRect(xstr, ystr, rw, rh);

        canvas.addEventListener('mouseup', play); 

    }

    function play(evt) {
        var pos = mousePoint(canvas, evt)
        console.log(pos);
        if (turn === 1) {
            turn = 2;
        } else {
            turn = 1;
        }

        var mousepoint = mousePoint(event);
        piece(mousepoint);
    }

    function mousePoint(canvas, event) {

        var rect = canvas.getBoundingClientRect();

        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
        return {
            x1: Math.floor((x / 50)),
            y1: Math.floor((y / 50))
        };

    }

    function piece(mouse) {
        var x;
        var y;
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                x = x * w;
                y = y * h;
                if (mouse.x >= x && mouse.x <= x + w && mouse.y >= y && mouse.y <= y + h) {
                    clear(x, y);
                    if (player === 1) {
                        crossFunction(x, y);
                    } else {
                        myFunction(x, y);
                    }
                }
            }
        }
    }

    function clear(x, y) {
        context.fillStyle = "#fff";
        context.fillRect(x, y, w, h);
    }


    // var crossFunction = function (x, y) {

    //     context.beginPath();
    //     context.moveTo((x * 50) + 10, (y * 50) + 10);
    //     context.lineTo((x * 50) + 30, (y * 50) + 30);
    //     context.stroke();

    //     context.moveTo((x * 50) + 30, (y * 50) + 10);
    //     context.lineTo((x * 50) + 10, (y * 50) + 30);
    //     context.stroke();

    //     change();

    // }
    // var myFunction = function (cordinates) {

    //     var j = 0;
    //     for (var i = 0; i < 4; i++) {
    //         context.beginPath();
    //         context.arc((cordinates[i][j] * 50 + 30), (cordinates[i][j + 1] * 50 + 30), 10, 0, Math.PI * 2);
    //         context.stroke();
    //     }
    //     j++;
    //     flag = 0;
    //     change();

    // }

    // function start() {
    //     change();
    // }

    // function checkwin(move) {
    //     console.log("checkwin")

    //     if (check(1, 2, 3, move) || check(4, 5, 6, move) || check(7, 8, 9, move) || check(1, 4, 7, move) || check(2, 5, 8, move) ||
    //         check(3, 6, 9, move) || check(1, 5, 9, move) || check(3, 5, 7, move)) {
    //         console.log('Game Won');
    //         document.write(move + " has won")
    //     }

    // }

    // function turn() {

    //     if (document.turn == "X") {

    //         flag = 1;
    //         document.turn = "O";

    //     } else if (document.turn == "O") {

    //         document.turn = "X";
    //     }

    //     if (checkwin(document.turn)) {
    //         document.innerText(document.turn + "has won")
    //     }

    // }

    // function check(a, b, c, move) {
    //     // console.log(a,move)
    //     if (val(a) == move && val(b) == move && val(c) == move) {
    //         return true;
    //     }
    // }

    // function val(x) {
    //     var y = board(x);

    //     console.log(y)
    //     return y;
    // }
}

function Movement() {

    var x = 0;
    var y = 0;
    var w = 100;
    var h = 100;

    this.start = function () {
        var k = 1;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {

                this['b' + k] = new Box();
                this['b' + k].init({
                    xstr: x + i * 110,
                    ystr: y + j * 110,
                    rw: w,
                    rh: h
                })
                k++;
            }
        }
    }



}

window.onload = function () {

    var t = new Movement();
    t.start({});



}
