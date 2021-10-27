$(document).ready(show_cupcakes);
const submitButton = document.querySelector('.btn');
const custmor name = document.querySelector('#examplecustomerame');


const form = document.querySelector('form');
const selectOptions = document.querySelectorAll('select')
const options = document.querySelectorAll('option');
const labels = document.querySelectorAll('label');

const table = document.querySelector('table');

const inputs = document.querySelectorAll('input');

var cup_cakes = [
    { "name": "Chocolate", "calories": "high", "weight": "200gm" },
    { "name": "Carrot", "calories": "medium", "weight": "150gm" },
    { "name": "Banana", "calories": "high", "weight": "200gm" },
    { "name": "Strawberry", "calories": "low", "weight": "160gm" },
    { "name": "Peanut", "calories": "medium", "weight": "200gm" }
];


function show_cupcakes() {
    //write code that shows the cupcakes in the table as per the instructions
    for (let i = 0; i < 5; i++) {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        const tableCell1 = document.createElement('td');
        tableRow.appendChild(tableCell1);
        tableCell1.innerHTML = cup_cakes[i].name

       
    }
    

function validate() {
    for (let i = 0; i <= 4; i++) {
        if (form[i].value === "" || form[2].value === 'None' || form[3].value === 'None') {
            form[i].style.border = '2px solid red';
            cross[i].style.display = 'block';
        } else {
            errors[i].innerHTML = "OK";
            errors[i].style.color = "green";
            form[i].style.border = '2px solid rgb(26, 165, 26)';
            checks[i].style.display = 'block';
            cross[i].style.display = 'none';
        }
        if (form[0].value.length < 5 || form[0].value.length > 17) {
            form[0].style.border = '2px solid red';
            cross[0].style.display = 'block';
            checks[0].style.display = 'none';
            errors[0].style.color = "red";

            errors[0].innerHTML = "The name must be between 5 and 16 characters";

        } else {
            errors[0].innerHTML = "";
        }
    }

    if (form[1].value < 1 || form[1].value > 15) {
        errors[1].innerHTML = "The count must be between 5 and 16 characters";
        form[1].style.border = '2px solid red';
        cross[1].style.display = 'block';
        checks[1].style.display = 'block';
        errors[1].style.color = "red";
    } else {
        errors[1].innerHTML = "";
    }

    
}

function show_storage() {
    customername.textContent = `Welcome ${localStorage.getItem("name")}!`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
    localStorage.setItem("name", userName.value);
})