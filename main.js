const myForm = document.querySelector('#my-form');
const warning = document.querySelector('#warning');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const info = document.querySelector('#info');



myForm.addEventListener('submit', (x) => {
  x.preventDefault();
  if(firstName.value === '' || lastName.value === '' || email.value === ''){
    warning.innerHTML = 'Please Enter Everything';
    warning.classList.add('warningColor');

    setTimeout(() => warning.remove(), 2500);
  }else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${firstName.value} : ${lastName.value} : ${email.value}`));
    info.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    email.value = '';
  }
});




