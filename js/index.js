
function alertValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}
let firstNameId = "first-name";
let firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl)

let lastNameId = "last-name";
let lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl)


let addressId = "address";
let addressEl = document.getElementById(addressId);
alertValues(addressEl);

let citiesId = "cities";
let citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

let hobbiesId = "hobbies";
let hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);


let avatarWrapperId = "avatar-wrapper";
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = "avatar";
let avatarEl = document.getElementById(avatarId);

firstNameEl.value = "Andrey";
/*
console.log(firstNameEl.value);
console.log(firstNameEl.className);
*/

lastNameEl.className = "last-name default-input error-input";
/*console.log(lastNameEl.value);
console.log(lastNameEl.className);*/

avatarEl.src = "https://vk.com/photo502314705_456239018?all=1";
avatarEl.title = "i am avatar";
hobbiesEl.value = "I am not interest";
avatarWrapperEl.innerHTML = "<ul id='list'></ul> <li>1</li> <li>2 </li>";
let listId = 'list';
let numberList = document.getElementById(listId);

window.alert(numberList.innerHTML);