let firstNameId = "first-name";
let firstNameEl = document.getElementById(firstNameId);
let lastNameId = "last-name";
let lastNameEl = document.getElementById(lastNameId);
let addressId = "address";
let addressEl = document.getElementById(addressId);
let citiesId = "cities";
let citiesEl = document.getElementById(citiesId);
let hobbiesId = "hobbies";
let hobbiesEl = document.getElementById(hobbiesId);
let avatarWrapperId = "avatar-wrapper";
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = "avatar";
let avatarEl = document.getElementById(avatarId);

firstNameEl.value = "Andrey";
//lastNameEl.setAttribute("value", "kamasutra";

//  window.alert(lastNameEl.className);
lastNameEl.className = "last-name default-input error-input";
avatarEl.src = "https://vk.com/photo502314705_456239018?all=1";
avatarEl.title = "i am avatar";
hobbiesEl.value = "I am not interest";
avatarWrapperEl.innerHTML = "<ul id='list'></ul> <li>1</li> <li>2 </li>";
let listId = 'list';
let numberlist = document.getElementById(listId);

window.alert(numberlist.innerHTML);