const username = "";
const password = "";
const checkUser = (usernameInput, passwordInput) =>{
  if (!usernameInput){
    console.log("Ошибка Валидации");
  } else if (usernameInput !== username){
    console.log("Неправильный username");
  } else if ((usernameInput === username) && (passwordInput !== password)){
    console.log("Неправильный пароль");
  } else if ((usernameInput === username) && (passwordInput === password)){
    console.log("Привет");
  }
}

