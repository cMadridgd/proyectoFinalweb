import  credentials  from "../model/ModelContrasenas.js";
import {
  addRemoveClass,
  getElementHTML,
  validateCredentials,
} from "../assets/js/login.js";


const user = getElementHTML("user");
const expends = getElementHTML("expends");
const password = getElementHTML("password");
const buttonlogIn = getElementHTML("buttonlogIn");
const userError = getElementHTML("userError");
const passwordError = getElementHTML("passwordError");
const login = getElementHTML("login");
const error = getElementHTML("error");



function logInEnter() {
  
   const loginResult = credentials.find((credential) => {
     if (
       user.value == credential.user &&
       password.value == credential.password
     ) {

       return credential;
     }
   });

   if (loginResult !== undefined) {
     addRemoveClass(login, true);
     addRemoveClass(expends, false);
     addRemoveClass(error, true);
   } else {
     addRemoveClass(login, false);
    addRemoveClass(expends, true);
    addRemoveClass(error, false);
   }

}


buttonlogIn.addEventListener("click", logInEnter);
user.addEventListener("input", (e) => {
  const result = validateCredentials(e.target.value, "user");
  if (!result) {
    addRemoveClass(userError, false);
    buttonlogIn.setAttribute("disabled", "true");
    user.style.background = "#FC5002";

  } else {
    addRemoveClass(userError, true);
    +buttonlogIn.removeAttribute("disabled");
    user.style.background = "#88E251";
  }
});

  password.addEventListener("input", (e) => {
  const result = (e.target.value, "password");
  if (!result) {
    addRemoveClass(passwordError, false);
    buttonlogIn.setAttribute("disabled", "true");
    password.style.background = "#FC5002";
    
  } else {
    addRemoveClass(passwordError, true);
    buttonlogIn.removeAttribute("disabled");
    password.style.background = "#88E251";
  }
});






function updateBudget() {
  var inputEnterfigure =  getElementHTML("inputEnterfigure").value; 
  const budgetValue = parseFloat(inputValue);

  document.getElementById('value').textContent = `${budgetValue}`;
  if(inputEnterfigure == ""){
      alert('Por favor introduce una cifra');
  }else{
      getElementHTML("p").innerHTML = value;
  }

}