const menu = document.querySelector(".desktop-nav");

const slideNumber = document.querySelector(".slideNumber");

document.addEventListener('click', function(event) {
  if (event.target.matches('.menu-icon')) { 
     menu.classList.toggle('active'); 
  }
});

document.addEventListener('click', function(event) {
  if (event.target.matches('.dropbtn')) {
     event.target.children[1].classList.toggle('active'); 
  }
});

document.addEventListener('click', function(event) {
  if (event.target.matches('.dropdownA')) { 
     event.target.nextElementSibling.classList.toggle('active'); 
  }
});
let slideIndex = 0;
if(slideNumber){
showSlides();
}
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideNumber.innerHTML = `${slideIndex + "/" + slides.length}`;
  setTimeout(showSlides, 4000); 
}
function changeSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";
  slideNumber.innerHTML = `${n + "/" + slides.length}`;
}

function gotoSlides(n) {
  let i;
  slideIndex += n;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  slideNumber.innerHTML = `${slideIndex + 1 + "/" + slides.length}`;
}


const searchResult = document.querySelector(".searchResult");
const searchInput = document.querySelector(".searchInput1");
const search1 = document.querySelector(".search1");
const prDetails = document.querySelectorAll(".pr_item");
if(search1){
search1.addEventListener("keyup", search);
search1.addEventListener("submit", search);
}
function search(e) {
  if(searchInput.value.length === 0){
    searchResult.style.display = 'none';
  }else{
  while (searchResult.firstChild) {
    searchResult.removeChild(searchResult.firstChild);
  }
  e.preventDefault();
  for (var i = 0; i < prDetails.length; i++) {
    if (
      prDetails[i].children[3].children[0].textContent.includes(
        searchInput.value
      )
    ) {
      if (
        searchResult.children[0] != "" ||
        !searchResult.children[0].textContent.includes(
          prDetails[i].children[3].children[0].textContent
        )
      ) {
        searchResult.style.display = "grid";
        searchResult.appendChild(prDetails[i]);
      }
    } else if (!searchResult.children[0]) {
      searchResult.style.display = "block";
      const div = document.createElement("div");
      div.textContent = "نتیجه ای یافت نشد!";
      searchResult.appendChild(div);
    }
  }
}
}
if(searchResult){
searchResult.addEventListener('click',hide1);
}
function hide1(){
  searchResult.style.display = "none";
}

/*********************************************/

var table=document.querySelector(".table");



function calculateTotalPrice() {
  var total = 0;
  for (var i = 0; i <  table.children.length-1; i++) {
    if(table.children[i].children[3]){
    total += parseInt( table.children[i].children[3].textContent.trim().replace("تومان", "").replace(/,/g, ""));
    }
  }
  var tfoot1=table.getElementsByTagName('tfoot')[0];
  if(tfoot1){
  // console.log('if');
    table.removeChild(tfoot1);
  }
  // console.log('else');


    var tfoot = document.createElement('tfoot');
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    cell1.colSpan = 2;
    var cell2 = document.createElement('td');
    var cell1Text=document.createTextNode('مجموع');
    var cell2Text=document.createTextNode(` ${total}  تومان`);
    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    cell2.colSpan = 2;
    row.appendChild(cell1);
    row.appendChild(cell2);
    tfoot.appendChild(row);
    table.appendChild(tfoot);


  
}

var mojod=0;
var index=0;
document.addEventListener('click',function(event) {
  if(event.target.matches('.fa-cart-plus')){
    var alertM=document.querySelector('.AlertMessage1');
    var li=document.createElement('li');
    li.classList.add('AlertMessageLi');
    li.innerHTML = 'به سبد خریداضافه شد';
    alertM.appendChild(li);
    mojod=0;
    var name = event.target.nextElementSibling.nextElementSibling.children[0].textContent;
    for(var i=0;i<table.children.length;i++){
      if(table.children[i].children[0].textContent === name){
        index=i;
        mojod=1;
      }

    }
    if(mojod){
      table.children[index].children[1].innerHTML=parseInt(table.children[index].children[1].textContent)+1;
      table.children[index].children[3].innerHTML = `${parseInt(table.children[index].children[1].textContent)*parseInt(table.children[index].children[2].textContent.trim().replace("تومان", "").replace(/,/g, ""))}  تومان`;
      mojod=0;
    }else{
      var price = event.target.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
      var newRow=table.insertRow();
      var newCel1=newRow.insertCell(0);
      var newCel2=newRow.insertCell(1);
      var newCel3=newRow.insertCell(2);
      var newCel4=newRow.insertCell(3);
      var newCel5=newRow.insertCell(4);

      
      newCel1.innerHTML = name;
      newCel2.innerHTML = 1;
      newCel3.innerHTML = price;
      newCel4.innerHTML = price; 
      var removeBtn3=document.createElement('button');

      removeBtn3.innerHTML = 'حذف';
      removeBtn3.classList.add('removeTable');
      newCel5.appendChild(removeBtn3);
      
  }
  calculateTotalPrice();
}
});

document.addEventListener('click',function(event){
  if(event.target.classList.contains('removeTable')){
    if(table){
    table.removeChild(event.target.parentElement.parentElement);
    calculateTotalPrice();
    }
  }
});

var cartDesktop = document.querySelector('#cartDesktop');
var cartList = document.querySelector('.cartList');
if(cartDesktop){
cartDesktop.addEventListener('click',function(){
  cartList.classList.toggle('active');
});
}



var favoriteDesktop = document.querySelector('#favoriteDesktop');
var favoriteList = document.querySelector('.favoriteList');
if(favoriteDesktop){
favoriteDesktop.addEventListener('click',function(){
  favoriteList.classList.toggle('active');
});
}

var table1=document.querySelector(".table1");
if(table1){
function calculateTotalPrice1() {
  var total = 0;

  for (var i = 0; i <  table1.children.length-1; i++) {
    if(table1.children[i].children[3]){
    total += parseInt( table1.children[i].children[3].textContent.trim().replace("تومان", "").replace(/,/g, ""));
    }
  }
  var tfoot1=table1.getElementsByTagName('tfoot')[0];
  if(tfoot1){
  // console.log('if');
    table1.removeChild(tfoot1);
  }
  // console.log('else');


    var tfoot = document.createElement('tfoot');
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell1Text=document.createTextNode('مجموع');
    var cell2Text=document.createTextNode(` ${total}  تومان`);
    cell1.appendChild(cell1Text);
    cell2.appendChild(cell2Text);
    row.appendChild(cell1);
    row.appendChild(cell2);
    tfoot.appendChild(row);
    table1.appendChild(tfoot);
}
}

var mojod=0;
var index=0;
document.addEventListener('click',function(event) {
  if(event.target.matches('.fa-heart') && event.target.matches('.far')){
    var alertM=document.querySelector('.AlertMessage1');
    var li=document.createElement('li');
    li.classList.add('AlertMessageLi');
    li.innerHTML = 'به علاقه مندی اضافه شد';
    alertM.appendChild(li);
    mojod=0;
    var name = event.target.nextElementSibling.nextElementSibling.nextElementSibling.children[0].textContent;
    for(var i=0;i<table1.children.length;i++){
      if(table1.children[i].children[0].textContent === name){
        index=i;
        mojod=1;
      }

    }
    if(mojod){
      table1.children[index].children[1].innerHTML=parseInt(table1.children[index].children[1].textContent)+1;
      table1.children[index].children[3].innerHTML = `${parseInt(table1.children[index].children[1].textContent)*parseInt(table1.children[index].children[2].textContent.trim().replace("تومان", "").replace(/,/g, ""))}  تومان`;
      mojod=0;
    }else{
      var price = event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
      var newRow=table1.insertRow();
      var newCel1=newRow.insertCell(0);
      var newCel2=newRow.insertCell(1);
      var newCel3=newRow.insertCell(2);
      var newCel4=newRow.insertCell(3);
      var newCel5=newRow.insertCell(4);

      
      newCel1.innerHTML = name;
      newCel2.innerHTML = 1;
      newCel3.innerHTML = price;
      newCel4.innerHTML = price; 
      var removeBtn4=document.createElement('button');

      removeBtn4.innerHTML = 'حذف';
      removeBtn4.classList.add('removeTable1');

      newCel5.appendChild(removeBtn4);

      
  }
  calculateTotalPrice1();
}
});



document.addEventListener('click',function(event){
  if(event.target.classList.contains('removeTable1')){
    if(table1){
    table1.removeChild(event.target.parentElement.parentElement);
    calculateTotalPrice1();
    count--;
    favoriteCont.innerHTML = count;
    }
  }
});

var cartCont=document.querySelector('.cart-count');
var count = 0;
document.addEventListener('click',function(event) {
  if(event.target.classList.contains('fa-cart-plus')){
    count++;
    cartCont.innerHTML = count;
  }
});

var favoriteCont=document.querySelector('.favorite-count');
var count1 = 0;
document.addEventListener('click',function(event) {
  if(event.target.classList.contains('far')){
    count1++;
    favoriteCont.innerHTML = count1;
  }
});

var favoriteMobile = document.querySelector('#favoriteMobile');
if(favoriteDesktop){
favoriteMobile.addEventListener('click',function(){
  favoriteList.classList.toggle('active');
});
}

var cartMobile = document.querySelector('#cartMobile');
if(cartMobile){
cartMobile.addEventListener('click',function(){
  cartList.classList.toggle('active');
});
}

// ***********************************
const inputWeather = document.getElementById('inputWeather');
if(inputWeather){
inputWeather.addEventListener('keyup', (e) => {
  const result = document.querySelector('.resultWeather');
e.preventDefault();
const city = inputWeather.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e07d29331d1f72f23b3f441c618829c4`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.cod === '404') {
      result.innerHTML = '<p>شهر مورد نظر یافت نشد.</p>';
    } else {
      const location = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;      
      const speedWind = data.wind.speed;      
      const icon = data.weather[0].icon;
      result.innerHTML = `
        <div class="location">شهر جستجو شده: ${location}</div>
        <div class="location">سرعت وزش باد: ${speedWind}</div>
        <div class="temperature">دما: ${temperature} &#8451;</div>
        <div class="description">وضعیت هوا: ${description}</div>
        <div class="icon"><img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}"></div>
      `;
    }
    result.style.display = 'block';
  })
  .catch(error => {
    result.innerHTML = '<p>لطفا نام شهر را وارد کنید.</p>';
    result.style.display = 'block';
  });


});
}
      

var qtyInputs = document.getElementsByClassName("qty-input");
var qtyBtns = document.getElementsByClassName("qty-btn");
var removeBtns = document.getElementsByClassName("remove-btn");
var totalPrices = document.getElementsByClassName("total-price");
var totalPrice = document.getElementById("total-price");
var tr = document.querySelectorAll('tr');

if(totalPrice){

function calculateRowTotalPrice1(row) {
  var qty = row.querySelector(".qty-input").value;
  var unitPrice = row.querySelectorAll("td")[2].textContent.trim().replace("تومان", "").replace(/,/g, "");
  var total = qty * unitPrice;
  row.querySelector(".total-price").textContent = ` ${total}  تومان`;
  return total;
}

function calculateTotalPrice1() {
  var total = 0;
  for (var i = 0; i < totalPrices.length; i++) {
    total += parseInt(totalPrices[i].textContent.trim().replace("تومان", "").replace(/,/g, ""));
  }
  totalPrice.textContent = ` ${total}  تومان`;
}
}


document.addEventListener('click',function(event) {
  if(event.target.matches('.qty-input ,.qty-btn')){
      var row = event.target.parentNode.parentNode;
      var total = calculateRowTotalPrice1(row);
      calculateTotalPrice1();
  }
});


for (var i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", function() {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
    calculateTotalPrice1();
  });
}

for (var i = 0; i < totalPrices.length; i++) {
  calculateRowTotalPrice1(totalPrices[i].parentNode);
}
if(totalPrice){
calculateTotalPrice1();
}

function diagnose() {
	var plantType = document.getElementById("plant-type").value;
	var symptoms = document.getElementById("symptoms").value;
	var disease = "لطفا اطلاعات را کامل وارد کنید!";
	if(plantType != '' && symptoms != ''){
		disease = `${plantType}  ${symptoms}`;
	}
	document.getElementById("disease").value = disease;
  }

const editProfileBtn = document.getElementById('edit-profile-btn');
const cancelEditProfileBtn = document.getElementById('cancel-edit-profile-btn');
const editProfileForm = document.getElementById('edit-profile-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone-number');
const profileInfo = document.querySelector('.profile-info');
const changePasswordBtn=document.getElementById('change-password-btn');
const cancelChangePasswordBtn=document.getElementById('cancel-change-password-btn');
const changePassword=document.querySelector('.change-password');
const changePasswordForm=document.querySelector('#change-password-form');
const messageAlert=document.querySelector('.message-alert');
const errorMessageAlert=document.querySelector('.error-message-alert');
if(profileInfo){
var name1 = profileInfo.children[2];
var email = profileInfo.children[4];
var phoneNumber = profileInfo.children[6];
}
if(editProfileBtn){
editProfileBtn.addEventListener('click', () => {
  showEditProfileForm();
});
}
if(changePasswordBtn){
changePasswordBtn.addEventListener('click', () => {
  showEditPasswordForm();
});
}
if(cancelEditProfileBtn){
cancelEditProfileBtn.addEventListener('click', () => {
  hideEditProfileForm();
});
}
if(cancelChangePasswordBtn){
cancelChangePasswordBtn.addEventListener('click', () => {
  hideChangePasswordForm();
});
}

function hideChangePasswordForm(){
  changePassword.style.display = 'none';
  errorMessageAlert.style.display = 'none';
}

if(editProfileForm){
editProfileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateProfile();
  hideEditProfileForm();
  messageAlert.innerHTML = 'تغییر مشخصات شما با موفقیت انجام شد.';
  messageAlert.style.display = 'block';
});
}

if(changePasswordForm){
changePasswordForm.addEventListener('submit', (event) => {
  if(changePasswordForm.children[3].value === changePasswordForm.children[5].value ){
  event.preventDefault();
  hideChangePasswordForm();
  messageAlert.innerHTML = 'تغییر رمز عبور شما با موفقیت انجام شد.';
  messageAlert.style.display = 'block';
  errorMessageAlert.style.display = 'none';
  }else{
    event.preventDefault();
    errorMessageAlert.innerHTML = "رمز عبور های جدید یکسان نیستند!";
    errorMessageAlert.style.display = 'block'
  }

});
}
if(messageAlert){
messageAlert.addEventListener('click' , function(){
  messageAlert.style.display = 'none';
});
}
if(errorMessageAlert){
errorMessageAlert.addEventListener('click' , function(){
  errorMessageAlert.style.display = 'none';
});
}
function showEditPasswordForm() {
  changePassword.style.display = 'block';
}

function showEditProfileForm() {
  profileInfo.style.display = 'none';

  const editProfile = document.querySelector('.edit-profile');
  editProfile.style.display = 'block';

 
  nameInput.value = name1.textContent;
  emailInput.value = email.textContent;
  phoneInput.value = phoneNumber.textContent;
}

function hideEditProfileForm() {
  const profileInfo = document.querySelector('.profile-info');
  profileInfo.style.display = 'block';

  const editProfile = document.querySelector('.edit-profile');
  editProfile.style.display = 'none';
}

function updateProfile() {

name1.innerHTML=nameInput.value;
email.innerHTML=emailInput.value;
phoneNumber.innerHTML=phoneInput.value;

}

const links = document.querySelectorAll('.tab a');
const detail=document.querySelector('.details');
const detail1=document.querySelector('.details1');
const comment3=document.querySelector('.comment3');
links.forEach((link, index) => {
  link.addEventListener('click', () => {
    links.forEach(link => {
      link.classList.remove('active');
      detail.classList.remove('active');
      detail1.classList.remove('active'); 
      comment3.classList.remove('active');
    });
    link.classList.add('active');
    link.parentElement.nextElementSibling.children[index].classList.toggle('active');
  });

  if (index === 0) {
    link.classList.add('active');
  detail.classList.toggle('active');
  }
});


const nav1=document.querySelector('.nav1');
const nav2=document.querySelector('.nav2');
const responsiveNav=document.querySelector('.responsive-nav');
const body=document.querySelector('body');
const footer=document.querySelector('.footer');
const moonIcon=document.querySelector('.fa-moon');
const sunIcon=document.querySelector('.fa-sun');
const darkModeBtn=document.querySelector('.dark-mode-btn');
document.addEventListener('click',function(event){
  if(event.target.classList.contains('dark-mode-btn') || event.target.classList.contains('fa-moon') || event.target.classList.contains('fa-sun')){
    nav1.classList.toggle('dark-mode');
    nav2.classList.toggle('dark-mode');
    responsiveNav.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    moonIcon.classList.toggle('fa-moon');
    moonIcon.classList.toggle('fa-sun');
    darkModeBtn.classList.toggle('dark-mode');

  }
});


document.addEventListener('click',function(event){
  if(event.target.parentElement.classList.contains('faq')){
    event.target.parentElement.children[1].classList.toggle('active');
  }
});
