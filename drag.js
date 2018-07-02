function elm() {

    var canvas, ctx;
    var event;

    canvas = document.getElementById('canv');
    ctx = canvas.getContext('2d');

    handle = {
        x: 250,
        y: 250,
        radius: 20
    }

    button = {

        x: 250,
        y: 350,
        w: 100,
        h: 50,
        isDragging: false

    }

    this.init = function (_obj) {

        event = _obj.event;

        canvas.setAttribute('width', '330');
        canvas.setAttribute('height', '330');
        canvas.style.border = 'thick solid #202020';

        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        document.body.appendChild(canvas);
        canvas.addEventListener('mousedown', onClick);
        // draw()
        this.draw()

    }

    this.draw = function (_obj) {

        function nobj1(x) {
            try {
                return handle.x;
            } catch{
                return undefined;
            }
        }
        function nobj2(y) {
            try {
                return handle.y;
            } catch{
                return undefined;
            }
        }
        function nobj3(radius) {
            try {
                return handle.radius;
            } catch{
                return undefined;
            }
        }

        xPos = nobj1(() => _obj.handle.x) ? nobj1(() => _obj.handle.x) : xPos;
        yPos = nobj2(() => _obj.handle.y) ? nobj2(() => _obj.handle.y) : yPos;
        radius = nobj3(() => _obj.handle.radius) ? nobj3(() => _obj.handle.radius) : radius;

        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.fillStyle = 'grey';
        ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);
        ctx.fill();

    }

    this.button = function () {

        ctx.beginPath();
        ctx.rect(button.x, button.y, button.w, button.h);
        ctx.fillStyle = '#FFFFFF';
        //ctx.fillStyle = 'rgba(225,225,225,0.5)';
        //ctx.fillRect(25, 72, 32, 32);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.closePath();
        ctx.font = '20pt Arial';
        ctx.fillStyle = '#000000';
        ctx.fillText('Start', 270, 385);

    }

    function onClick() {
        event();
    }
}

function move() {

    var r;
    var e = new elm();

    handle = {

        x: 250,
        y: 250,
        radius: 20

    }

    button = {

        x: 250,
        y: 350,
        w: 100,
        h: 50

    }

    this.begin = function () {

        for (var i = 1; i < 3; i++) {
            e.init({
                x: i * 30,
                y: i * 30,
                radius: r,
                event: clicked
            })
        }
    }

    function dXY(x0, y0, x1, y1) {

        var dx = x1 - x0;
        var dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);

    }

    function check(x, y, circle) {
        return dXY(x, y, circle.x, circle.y) < circle.radius;
    }

    function range(value, min, max) {
        return (value >= Math.min(min, max) && value <= Math.max(min, max));
    }

    function cRect(x, y, rect) {
        return (range(x, rect.x, rect.x + rect.w) && range(y, rect.y, rect.y + rect.h));
    }

    function clicked() {

        // e.draw();
        e.button();


        if (check(event.clientX, event.clientY, handle) == true) {
            // console.log(event.clientX, event.clientY)
            document.body.addEventListener('mousemove', onMousemove);
            document.body.addEventListener('mouseup', onMouseUp);
        }

        if (cRect(this.event.clientX, this.event.clientY, button) == true) {
            console.log("clicked inside");

            e.draw();
            document.body.addEventListener('mouseup', onMouseUp1);
        }

    }

    function onMousemove() {
        handle.x = event.clientX;
        handle.y = event.clientY;
        e.draw();
    }

    function onMouseUp() {
        document.body.removeEventListener('mousemove', onMousemove);
        document.body.removeEventListener('mouseup', onMouseUp);
    }

    function onMouseUp1() {
        document.body.removeEventListener('mouseup', onMouseUp1);
    }

}

window.onload = function () {

    var w = new move();
    w.begin();
    // var w2 = new move();
    // w2.begin({
    //     x: 100,
    //     y: 100,
    //     radius: 25
    // });

}


