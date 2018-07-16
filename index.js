function structure_post() {
    var post = [];
    var update = [];
    var event, add_button, remove_button, textbox, span_paragraph, paragraph, mainDiv, image_post;
    var xstr, ystr, wstr, hstr;
    var i = 0;

    this.init = function (_obj) {

        event = _obj.event;

        xstr = _obj.xstr ? _obj.xstr : xstr;
        ystr = _obj.ystr ? _obj.ystr : ystr;
        wstr = _obj.wstr ? _obj.wstr : wstr;
        hstr = _obj.hstr ? _obj.hstr : hstr;

        mainDiv = document.createElement('div');
        mainDiv.value = 'Comments'
        textbox = document.createElement('textarea');
        textbox.style.marginLeft = '20px'
        textbox.style.marginTop = '20px'

        add_button = document.createElement('input');
        add_button.setAttribute('type', 'button')
        add_button.value = '+';
        add_button.style.marginLeft = '50px'
        add_button.style.marginTop = '100px';
        add_button.style.cursor = 'pointer';

        remove_button = document.createElement('input');
        remove_button.setAttribute('type', 'button');
        remove_button.value = '-'
        remove_button.style.marginLeft = '10px';
        remove_button.style.cursor = 'pointer';

        image_post = document.createElement('IMAGE');
        image_post.src = 'sentdex.png'
        image_post.height = '100px';
        image_post.width = '100px'

        mainDiv.appendChild(image_post);
        mainDiv.appendChild(textbox);
        mainDiv.appendChild(add_button);
        mainDiv.appendChild(remove_button);

        add_button.addEventListener('click', function () {
            console.log('add button clicked');

            span_paragraph = document.createElement('span');
            paragraph = document.createElement('P');
            paragraph.setAttribute('class', 'para');
            span_paragraph.appendChild(paragraph);

            paragraph.style.marginLeft = '50px';
            paragraph.style.borderLefColor = 'red';
            //paragraph.style.color = 'blue'
            paragraph.textContent = textbox.value;

            paragraph.setAttribute('id', 'p' + i);

            paragraph.checked = true;
            i++;
            post.push(paragraph);
            mainDiv.appendChild(paragraph);

            paragraph.addEventListener('click', function () {
                this.style.color = 'red';
                this.checked = !this.checked;

                if (!this.checked) {
                    remove_button.addEventListener('click', function () {
                        console.log('remove button clicked', this);

                        for (var i = 0; i < post.length; i++) {
                            if (!post[i].checked) {
                                console.log("inside if ")
                                mainDiv.removeChild(post[i]);
                            } else {
                                console.log('inside else')
                                post[i] = update[i];
                            }
                        }

                        post = update;

                    });
                }

            })
        });

        document.body.appendChild(mainDiv);
    }
}

window.onload = function () {
    var obj = new structure_post();
    obj.init({});
}