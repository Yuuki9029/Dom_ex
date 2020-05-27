function show_search(){

    let a = document.getElementById('show_search');
    let category = document.getElementById('search_advance');

    let text = a.innerHTML;

    if(text == 'Advance Search'){
        category.style.display = 'table-row';
        a.innerHTML = 'Hidden Search Advance';
    }
    else{
        category.style.display = 'none';
        a.innerHTML = 'Advance Search';
    }

    return false;
}