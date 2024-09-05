"use srtict"

//1

let a = prompt('Введите стоимость товара');
let b = prompt('Введите количество денег клиента');
if (a > 0 && b> 0){
    if (a == b){
        alert('Покупка совершена');
    } else if (a>b){
        alert(`Для покупки не хватает ${a-b}p.`);
    } else if (a<b){
        alert(`Покупка совершена. Ваша сдача  ${b - a}p.`);}
}else{
    alert('Неверный формат данных');
}

//2

let z = prompt('Введите число');
if (z>0){
    alert(`1`);
}else if (z < 0){
    alert(`-1`);
}else if (z == 0){
    alert(`0`);
}else{
    alert(`Неверный формат данных`);
}





//3

let d = prompt('Введите число');
let e = prompt('Введите число');
let result = (d + e < 4) ? 'Мало' : 'Много';
alert (`${result}`)

//4


let login = prompt('Введите логин');
let message = login == 'Сотрудник' ? 'Привет':
login == 'Директор' ? 'Здраствуй':
login == '' ? 'Нет логина': '';
alert(message);

//5
let log = prompt("Введите логин"); 
if (log == 'Админ') { 
    let pass = prompt('Введите пароль'); 
    if (pass == 'Я главный'){ 
        alert('Здравствуйте') 
    }else if (pass === null || pass === '') { 
        alert('Отменено') 
    }else { 
        alert('Неверный пароль'); 
    } 
}else if (log === null || log === ''){ 
    alert('Отменено') 
}else { 
    alert('Я вас незнаю'); 
}