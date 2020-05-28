var text = document.querySelector('h3');
    var div = document.querySelector('div#load');
    var num = document.querySelector('h5');
    var status = 'one_dot';
    var x = 0;
    var w = 0;
    var loading = setInterval(dot,200);
    var numberplus = setInterval(run,20);
    var container = document.querySelector('div');
    var welcome = document.querySelector('h1');
    var divplus = setInterval(pull,20);
    function dot(){
        if(status == 'one_dot'){
            text.innerHTML = 'loading' + '.';
            status = 'two_dot';
        }
        else if (status == 'two_dot') {
            text.innerHTML = 'loading' + '..';
            status = 'three_dot';
        }
        else if (status == 'three_dot') {
            text.innerHTML = 'loading' + '...';
            status = 'one_dot';
        }
        if (x == 100 && status == 'one_dot') {
            clearInterval(loading);
        }
    }
    function run(){
        x++;
        num.innerHTML = x + '%';
        if (x == 100) {
            clearInterval(numberplus);
        }
    }
    function pull(){
        w += 1;
        div.style.width = w  + 'px';
        if (w == 100) {
            clearInterval(divplus);
            container.classList.add('active');
            welcome.innerHTML = 'Welcome';
        }
    }