window.onload = function () {
    
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    handle = {
        x : width / 2,
        y : height / 2,
        radius : 20
    }

    draw();

    function draw() {
        
        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2);
        ctx.fill();

    }
    

    document.body.addEventListener('mousedown', function (event) {
        if (utils.circlePointCollision(event.clientX, event.clientY, handle)) {
            document.body.addEventListener('mousemove', onMousemove);
            document.body.addEventListener('mouseup', onMouseUp);
        }
    })

    function onMousemove() {
        handle.x = event.clientX;
        handle.y = event.clientY;
        draw(); 
    }

    function onMouseUp() {
        document.body.removeEventListener('mousemove', onMousemove);
        document.body.removeEventListener('mouseup', onMouseUp);
    }
}


  // distanceXY: function (x0, y0, x1, y1) {
    //     var dx = x1 - x0,
    //         dy = y1 - y0;
    //     return Math.sqrt(dx * dx + dy * dy);
    // },

    // circlePointCollision: function (x, y, circle) {
    //     return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
    // },
    // inRange: function (value, min, max) {
    //     return value >= Math.min(min, max) && value <= Math.max(min, max);
    // },


    // pointInRect: function (x, y, rect) {
    //     return utils.inRange(x, rect.x, rect.x + rect.width) &&
    //         utils.inRange(y, rect.y, rect.y + rect.height);
    // }
