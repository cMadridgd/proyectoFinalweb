
import {getElementHTML} from "../assets/js/login.js";



const inputEnterfigure = getElementHTML('inputEnterfigure');
const valueElement = getElementHTML('value');
const newValue = getElementHTML('newValue');

inputEnterfigure.addEventListener('change', (event) => {
  const enteredValue = event.target.value;


  valueElement.textContent = `valor total ${enteredValue}`;
  newValue.textContent = `nuevo valor ${enteredValue}`;

  inputEnterfigure.value = '';
});


const formExpense = getElementHTML('formexpense');
const enterBtn = getElementHTML('enterBtn');
const infoInput = getElementHTML('infoInput');
const enterExpense = getElementHTML('enterExpense');
const staff = getElementHTML('staff');
const date = getElementHTML('date');
const options = getElementHTML('options');
const negociosBox = getElementHTML('negocios');
const diversionBox = getElementHTML('diversion');
const alimentacionBox = getElementHTML('alimentacion');
const transporteBox = getElementHTML('transporte');

enterBtn.addEventListener('click', () => {
 const expenseInfo = {
   description: infoInput.value,
   amount: enterExpense.value,
   staff: staff.value,
   date: date.value,
   category: options.value,
 };

 const expenseElement = document.createElement('p');
 expenseElement.textContent = `Gasto: ${expenseInfo.description}, Cantidad: ${expenseInfo.amount}, Personal: ${expenseInfo.staff}, Fecha: ${expenseInfo.date}`;

 let box;
 switch (expenseInfo.category) {
   case 'negocios':
     box = negociosBox;
     break;
   case 'diversion':
     box = diversionBox;
     break;
   case 'alimentacion':
     box = alimentacionBox;
     break;
   case 'transporte':
     box = transporteBox;
     break;
 }

 if (box) {
   box.appendChild(expenseElement);
 }


 infoInput.value = '';
 enterExpense.value = '';
 staff.value = '';
 date.value = '';
});





let enteredValue;


inputEnterfigure.addEventListener('change', (event) => {
 enterExpense= event.target.value;

 newValue.textContent = `nuevo valor ${enteredValue - enterExpense.value}`;
});