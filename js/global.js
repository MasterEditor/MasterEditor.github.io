"use-strict";
var login = prompt('Ваш логин:', "");
if (login == "Админ"){
	var password = prompt("Пароль:", "");
	if (password == 'Черный Властелин') {
		alert('Добро пожаловать, хозяин!');
	} else if (password == null) {
		alert('Вход отменен');
	} else{
		alert('Неверно');
	}
} else if (login == null){
	alert("Вход отменен");
} else{
	alert("Такого логина не существует в нашей базе данных");
}
/*If (login == "Админ"){
	var password = prompt("Пароль:", "");
	if (password == 'Черный Властелин') {
		alert('Добро пожаловать, хозяин!');
	} else if (password == null) {
		alert('Вход отменен');
	} else{
		alert('Неверно');
	}
} else if (login == null){
	alert("Вход отменен");
} else{
	alert("Такого логина не существует в нашей базе данных");
}
*/