
const chktoggle = document.getElementById("checkToggle");
const chktoggle1 = document.getElementById("checkToggle1");
const signin = document.querySelector(".signin");
const signupLabel = document.getElementById('signupLabel');
const signinLabel = document.getElementById('signinLabel');
const forgetLabel = document.getElementById('forgetLabel');
const forget = document.querySelector('.forget-password');

if(chktoggle){
chktoggle.addEventListener("click", toggle);
}
function toggle() {
    if (signin.classList.contains('toggle')) {
        signin.classList.remove('toggle');
        signinLabel.style.transform = 'scale(0.8)';
        signinLabel.style.color = 'white';
        signupLabel.style.transform = 'scale(1.0)';
        forget.classList.remove('toggle2');
    } else {
        signinLabel.style.transform = 'scale(1.0)';
        signinLabel.style.color = 'green';
        signupLabel.style.transform = 'scale(0.8)';
        signin.className += " toggle";
        forget.className += " toggle2";
        
    }
}
 
if(chktoggle1){
    chktoggle1.addEventListener("click", toggle1);
    }
    function toggle1() {
        if (forget.classList.contains('toggle1')) {
            forget.classList.remove('toggle1');
            forgetLabel.style.transform = 'scale(0.8)';
            forgetLabel.style.color = 'white';
            signinLabel.style.transform = 'scale(1.0)';
        }else {
            forgetLabel.style.transform = 'scale(1.0)';
            forgetLabel.style.color = 'green';
            signinLabel.style.color = 'white';
            signinLabel.style.transform = 'scale(0.8)';
            forget.className += " toggle1";
        }
    }
const paternEmail=/[a-z1-9._]{2,}\@[a-z1-9._]{2,}\.com/;
const paternUsername=/[a-z1-9]{3,}/;
const paternPassword=/[a-z1-9_]{7,}/;
const paternPassword1=/[A-Z]{1,}/;


const form=document.querySelectorAll('.form');
if(form[0]){
form[0].addEventListener('submit',validate);
}
if(form[1]){
form[1].addEventListener('submit',validate1);
}
if(form[2]){
    form[2].addEventListener('submit',validate2);
    }
function validate(e){
    let email=document.querySelector('.email').value;
    let errorEmail=document.querySelector('.errorEmail');
    let username=document.querySelector('.user_name').value;
    let errorUsername=document.querySelector('.errorUsername');
    let password=document.querySelector('.password').value;
    let errorPassword=document.querySelector('.errorPassword');



    if(!paternEmail.test(email)){
        errorEmail.textContent='لطفا قالب ایمیل را به درستی وارد کنید!(شامل @ و com. باشد.)';
        e.preventDefault();
    }else{
        errorEmail.textContent='';
        e.preventDefault();
    }

    if(!paternUsername.test(username)){
        errorUsername.textContent='لطفا حداقل سه حرف انگلیسی وارد کنید!';
        e.preventDefault();
    }else{
        errorUsername.textContent='';
        e.preventDefault();
    }

    if(!paternPassword.test(password)){
        errorPassword.textContent='حداقل 8 حرف انگلیسی وارد کنید!';
        e.preventDefault();
    }else if(!paternPassword1.test(password)){
        errorPassword.textContent='حداقل یک حرف بزرگ انگلیسی وارد کنید!';
        e.preventDefault();
    }else{
        errorPassword.textContent='';
        e.preventDefault();
    }

}


function validate1(e){
    let username=document.querySelector('.user_name1').value;
    let errorUsername=document.querySelector('.errorUsername1');
    let password=document.querySelector('.password1').value;
    let errorPassword=document.querySelector('.errorPassword1');


    if(!paternUsername.test(username)){
        errorUsername.textContent='لطفا حداقل سه حرف انگلیسی وارد کنید!';
        e.preventDefault();
    }else{
        errorUsername.textContent='';
        e.preventDefault();
    }

    if(!paternPassword.test(password)){
        errorPassword.textContent='حداقل 8 حرف انگلیسی وارد کنید!';
        e.preventDefault();
    }else if(!paternPassword1.test(password)){
        errorPassword.textContent='حداقل یک حرف بزرگ انگلیسی وارد کنید!';
        e.preventDefault();
    }else{
        errorPassword.textContent='';
        if(username == 'morteza'){
            if(password == 'Morteza123'){
        window.location.href = "account.html";
            }else{
                errorPassword.textContent='رمز وارد شده صحیح نمی باشد';
            }
        }else if(username == 'admin'){
        if(password == 'Morteza123'){
            window.location.href = "dashboard.html";
        }else{
                errorPassword.textContent='رمز وارد شده صحیح نمی باشد';
            }
        }
        else{
            errorUsername.textContent='کاربر یافت نشد'
        }
        e.preventDefault();
    }
}


function validate2(e){
    let email1=document.querySelector('.email1').value;
    let errorEmail1=document.querySelector('.errorEmail1');
    let alertM = document.querySelector('.AlertMessage1');
    

    if(!paternEmail.test(email1)){
        errorEmail1.textContent='لطفا قالب ایمیل را به درستی وارد کنید!(شامل @ و com. باشد.)';
        e.preventDefault();
    }else{
        alertM.style.display = 'block';
        alertM.style.color = 'red';
        alertM.innerHTML = 'ایمیل بازنشانی به ایمیل شما ارسال شد';
        errorEmail1.textContent='';
        errorEmail1.style.color = 'red';
        e.preventDefault();
    }
}


const form3 = document.querySelector('.formCalculate');
const result3 = document.querySelector('#result');
if(form3){
form3.addEventListener('submit', (event) => {
  event.preventDefault();
  const revenue = Number(document.querySelector('#revenue').value);
  const cost = Number(document.querySelector('#cost').value);
  const profit = revenue - cost;
 
  if (profit > 0) {
    result3.textContent = `سود: ${profit}`;
    result3.style.color = 'green';
  } else if (profit < 0) {
    result3.textContent = `زیان: ${profit}`;
    result3.style.color = 'red';
  } else {
    result3.textContent = 'صفر';
    result3.style.color = 'black';
  }
});
}



