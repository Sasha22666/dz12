// добавляет страну и столицу в хэш
function addCountry(countryName, capitalName) {
    countrysH[countryName] = capitalName;
}
// удаляет страну и столицу из хэша
function deleteCountry(countryName) {
    delete countrysH[countryName];
}
// по названию страны определяет столицу
function getCountryInfo(countryName) {
    if (countryName in countrysH)
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
    else
        return 'нет информации о стране ' + countryName + '!';
}
// выдает список стан из хэша
function listCountrys() {
    var res = "";
    for (var CN in countrysH)
        res += '\n' + getCountryInfo(CN);
    return res;
}
// пользователь добавляет страну и столицу 
function userAddCountry() {
    var countryName = prompt('Введите название страны:');
    ProverkaVvodaName (countryName);
    var capitalName = prompt('Введите название столицы страны: ' + countryName);
    while (true) {
        if (capitalName !== "" && capitalName !== null) {
            break;
        }
        else {
            alert("Введите название столицы страны - поле не может быть пустым");
            var capitalName = prompt('Введите название столицы страны: ' + countryName);
        }
    }
    addCountry(countryName, capitalName);
    alert("Добавлены новая страна со столицей: " + countryName + '/'+ capitalName);
}
// пользователь добавляет страну - выводится столица
function userCapitalCountry () {
    var countryName = prompt('Введите название страны:');
    ProverkaVvodaName (countryName);
    alert (getCountryInfo (countryName));
}
// пользователь удаляет страну
function userDeleteCountry () {
    var countryName = prompt('Введите название страны:');
    ProverkaVvodaName (countryName);
    if  (countryName in countrysH){
        alert ('Информация о стране'+' '+countryName+' '+'удалена из хеша');
        deleteCountry (countryName);
    }
    else {
        alert ('Такой страны нет в списке!');
    }
}
// проверка ввода данных названия страны
function ProverkaVvodaName (countryName) {
    while (true) {
        if (countryName !== "" && countryName !== null) {
            break;
        }
        else {
            alert("Введите название страны, пожалуйста - поле не может быть пустым");
            var countryName = prompt('Введите название страны:');
        }
    }
}


