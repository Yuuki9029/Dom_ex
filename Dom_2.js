window.onload = function(){

    let button = document.getElementsByTagName('input');

    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(){

            let parent = this.parentElement.parentElement;

            parent.remove();
        });
        }
    }