function add_element(){
    let title = document.getElementById('title').value;

    if (title == ''){
        alert('add title');
    }
    else{
        let html = '<div style="background: red; margin: 5px; padding: 5px; color: #FFF">'+ title +'</div>';
        document.getElementById('result').insertAdjacentHTML('afterend', html);
    }
}