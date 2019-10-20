function searchValue() {

    let val = document.querySelector('search').value.trim();
    let searchItem = document.querySelectorAll('.list tr');

    if (val != '') {
        searchItem.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
                alert('Ничего не найдено!');
            }
        });
    } else {
        searchItem.forEach(function(elem) {
            elem.classList.remove('hide');
        });
    }
}