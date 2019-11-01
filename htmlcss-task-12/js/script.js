const searchHandler = () => {
    const tableBody = document.getElementById('body-item');

    const tableRows = tableBody.children;

    const arrFormData = getFormValue();
    getTdValue(arrFormData, tableRows);
    testInput();
}

btn.addEventListener('click', searchHandler);

const getFormValue = () => {

    const valueInput = document.getElementById('search-value').children;
    let arrFormData = [];
    for (let input of valueInput) {
        arrFormData.push(input.value.toUpperCase());
    }
    return arrFormData;
}

const getTdValue = (arrFormData, tableRows) => {

    let arrRowsData = [];

    for (let value of tableRows) {

        const item = value;
        const td = value.children;

        for (let value of td) {
            arrRowsData.push(value.textContent);
        }

        let tdArray = [td[0].textContent.toUpperCase(), td[1].textContent.toUpperCase(), td[2].textContent.toUpperCase(), td[3].textContent.toUpperCase()];

        let status = tdArray.includes(arrFormData[0]);

        if (status == true) {
            item.style.display = 'table-row';
        } else {
            item.style.display = 'none';
        }
    }
    return arrRowsData;
}

const testInput = () => {

    const inputValue = document.getElementById('search-item');
    const tableBody = document.getElementById('body-item');

    if (inputValue.value == "") {
        tableBody.innerHTML = '<tr><td class="text" colspan="4">Ничего не найдено!</td></tr>';
    }
}