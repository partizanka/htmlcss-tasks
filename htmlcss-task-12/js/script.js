// Реализуйте функцию поиска с добавлением параметра по умолчанию:

// создайте в хедере страницы поле для поиска и кнопку, по нажатии на которую начинается поиск. 

// реализуйте поиск объектов. При запуске поиска с пустым полем поиск должен вывести сообщение "Ничего не найдено!".

// реализуйте отображение результатов поиска на странице 

const searchHundler = () => {

    const $searchvalue = document.getElementById('search-value');
    const $inputvalue = document.getElementById('search-item');
    const $tbody = document.getElementById('body-item');
    const $tr = $tbody.children;

    const $valueinputs = $searchvalue.children;

    let arrformdata = [];

    for (let input of $valueinputs) {
        arrformdata.push(input.value.toUpperCase());
    }

    let arrtrdata = [];

    for (let value of $tr) {

        const item = value;
        const td = value.children;

        for (let value of td) {
            arrtrdata.push(value.textContent);
        }

        let tdarray = [td[0].textContent.toUpperCase(), td[1].textContent.toUpperCase(), td[2].textContent.toUpperCase(), td[3].textContent.toUpperCase()];

        let status = tdarray.includes(arrformdata[0]);

        console.log(status);
        console.log(item);

        if (status == true) {
            item.style.display = 'table-row';
        } else {
            item.style.display = 'none';
        }
    }

    if ($inputvalue.value == "") {
        document.getElementById('body-item').innerHTML = '<tr><td class="text" colspan="4">Ничего не найдено!</td></tr>';
    }
}