const form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validation();
})
let username = document.getElementById('username');
let email = document.getElementById('email');
let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

let result = regex.test(email.value);
console.log(email.value);
let phonenum = document.getElementById('phonenum');
// console.log(phonenum)

function setError(element,message) {
    element.classList.add('error');
    element.parentElement.querySelector('#error').innerText = message;
    element.classList.remove('success')
    e.preventDefault();

}
function handleData()
{
    var form_data = new FormData(document.querySelector("form"));
    if(!form_data.has("group-check"))
    {
        document.getElementById("chk_option_error").style.visibility = "visible";
      return false;      
    }
    else
    {
        document.getElementById("chk_option_error").style.visibility = "hidden";
      return true;
    }

}

function setSuccess(element) {
    if(!element) return;
    element.classList.remove('success')
    element.classList.add('success')
    element.parentElement.querySelector('#error').innerText = '';

}
function validation(){

    if (username.value === '') {
        setError(username,"required username");
    } else {
        setSuccess(username);
    }
    if(email.value === ''){
        setError(email,"required email");
    }
    else {
        if(email.value.match(regex)){
            setSuccess(email)
        }else{
            setError(email,"invalid")
        }
    }
    if(phonenum.value === '' || phonenum.value.length < 10){
    setError(phonenum,"invalid number");
    console.log(phonenum.value.length);
    }else {
        setSuccess(phonenum)
    }
}