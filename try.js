function Box() {
    var id = 0;
    var canvas;

    this.idnew = function (_x) {
        id = _x.idnum;
        x = _x.xcan;
        y = _x.ycan;

        canvas = document.createElement('canvas');
        window.ctx = canvas.getContext('2d');
        canvas.setAttribute('id', 'mycanvas' + id);
        canvas.setAttribute('width', '330');
        canvas.setAttribute('height', '330');
        canvas.style.position = 'relative';
        canvas.style.left = x + 'px';
        canvas.style.top = y + 'px';
        document.body.appendChild(canvas);
    }

    var xstr = 0;
    var ystr = 0;
    var rw = 150;
    var rh = 100;
    var rstr = 10;
    var event;

    this.init = function (_obj) {

        xstr = _obj.xstr ? _obj.xstr : xstr;
        ystr = _obj.ystr ? _obj.ystr : ystr;
        rstr = _obj.rstr ? _obj.rstr : rstr;
        rw = _obj.rw ? _obj.rw : rw;
        rh = _obj.rh ? _obj.rh : rh;
        xcan = _obj.xcan;
        ycan = _obj.ycan;
        // id = _obj.id ? _obj.id : null;
        event = _obj.event;

        ctx.fillStyle = 'grey';

        ctx.fillRect(xstr, ystr, rw, rh);
        canvas.addEventListener('mousedown', onClick);

    }

    function onClick(evt) {
        //console.log(pos);
        event(id);
    }

    this.crossFunction = function (x, y) {
        console.log("cross", x, y);
        ctx.lineWidth = 5;
        ctx.beginPath();

        ctx.moveTo((x * 110) + 10, (y * 110) + 10);
        ctx.lineTo((x * 110) + 90, (y * 110) + 90);
        ctx.stroke();

        ctx.moveTo((x * 110) + 90, (y * 110) + 10);
        ctx.lineTo((x * 110) + 10, (y * 110) + 90);
        ctx.stroke();

        ctx.stroke();

    }

    this.myFunction = function (x, y) {

        console.log("circle", x, y)
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc((x * 110) + 50, (y * 110) + 50, 40, 0, 2 * Math.PI);
        ctx.stroke();

    }

}

function Movement() {

    var turn = 1;
    var x = 1;
    var y = 1;
    var idnum;
    //var id;

    var w = 100;
    var h = 100;

    var z = new Box();

    this.start = function (_obj) {

        idnum = _obj.id;
        x1 = _obj.xcan;
        y1 = _obj.ycan;

        z.idnew({
            idnum: idnum,
            xcan: x1,
            ycan: y1
        });

        var k = 1;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                z.init({
                    xstr: x + i * 110,
                    ystr: y + j * 110,
                    rw: w,
                    rh: h,
                    event: clicked


                    //id: k
                })
            }
        }
        k++;
    }


    function clicked(event, id) {
        if (turn === 1) {
            turn = 2;
        } else {
            turn = 1;
        }

        var mousepoint = mousePoint(event, id);
        console.log(mousepoint);
        piece(mousepoint);
    }


    function mousePoint(id) {

        var a = this['mycanvas' + id];
        console.log(a)
        var rect = this['mycanvas' + id].getBoundingClientRect();
        x1 = event.clientX - rect.left;
        y1 = event.clientY - rect.top;
        return {
            x: Math.floor((x1 / 100)),
            y: Math.floor((y1 / 100))
        };

    }

    function piece(mouse) {

        if (turn === 1) {
            z.crossFunction(mouse.x, mouse.y);
            //console.log(mouse.x, mouse.y)
        } else {
            z.myFunction(mouse.x, mouse.y);
            //console.log(mouse.x, mouse.y)
        }

    }




    // function checkwin(move) {
    //     console.log("checkwin")

    //     if (check(1, 2, 3, move) || check(4, 5, 6, move) || check(7, 8, 9, move) || check(1, 4, 7, move) || check(2, 5, 8, move) ||
    //         check(3, 6, 9, move) || check(1, 5, 9, move) || check(3, 5, 7, move)) {
    //         console.log('Game Won');
    //         document.write(move + " has won")
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

window.onload = function () {

    var t = new Movement();
    var t1 = new Movement();
    t.start({
        xcan: 10,
        ycan: 10,
        id: 0
    });
    t1.start({
        xcan: 100,
        ycan: 100,
        id: 1
    });


    // var t1 = new Movement();
    // t1.start({
    //     xcan: 400,
    //     ycan: 400,
    //     id: 2
    // });

}
