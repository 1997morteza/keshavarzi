const adminPanel = document.querySelector('.container7 aside');
const menuPannel = document.querySelector('.admin .fa-bars');
menuPannel.addEventListener('click',function(){
	adminPanel.classList.toggle('active');
});

const dashboard = document.querySelector('.dashboard');
const listProducts = document.querySelector('.list-products');
const groups = document.querySelector('.groups');
const orders = document.querySelector('.orders');
const userDetails = document.querySelector('.user-details');
const settings = document.querySelector('.settings');
const panelAdmin = document.querySelectorAll('.container7 main');
const panelBtn = document.querySelectorAll('aside ul li.btn');
const formContainerEdit = document.querySelector('.form-container-edit');
const productName = document.querySelector('#product-name');
const productDetails = document.querySelector('#product-details');
const productPrice = document.querySelector('#product-price');
const productImage = document.querySelector('#product-image');
dashboard.classList.add('active');


document.addEventListener('click', function(event){
	if(event.target.classList.contains('btn')){
		panelAdmin.forEach(element => {
			element.classList.remove('active');
		});
		panelBtn.forEach(element => {
			element.classList.remove('active');
		});
	}
	if(event.target.classList.contains('dashboard-btn')){
		event.target.classList.toggle('active');
		dashboard.classList.toggle('active');
	}
	else if(event.target.classList.contains('product-btn')){
		event.target.classList.toggle('active');
		listProducts.classList.toggle('active');
	}
	else if(event.target.classList.contains('groups-btn')){
		event.target.classList.toggle('active');
		groups.classList.toggle('active');
	}
	else if(event.target.classList.contains('orders-btn')){
		event.target.classList.toggle('active');
		orders.classList.toggle('active');
	}
	else if(event.target.classList.contains('user-btn')){
		event.target.classList.toggle('active');
		userDetails.classList.toggle('active');
	}
	else if(event.target.classList.contains('setting-btn')){
		event.target.classList.toggle('active');
		settings.classList.toggle('active');
	}
	else if(event.target.classList.contains('fa-plus')){
		let size = prompt('تعداد افزایش را وارد کنید');
		const p1 = /[1-9]{1,}/;
		if(p1.test(size)){
		event.target.parentElement.previousElementSibling.innerHTML = 
		parseInt(event.target.parentElement.previousElementSibling.textContent)
		 + parseInt(size);
		}else{
			alert('لطفا فقط مقدار عددی وارد کنید');
		}
	}

	else if(event.target.classList.contains('fa-minus')){
		let size = prompt('تعداد کاهش را وارد کنید');
		const p1 = /[1-9]{1,}/;
		if(p1.test(size)){
		event.target.parentElement.previousElementSibling.innerHTML = 
		parseInt(event.target.parentElement.previousElementSibling.textContent)
		 + parseInt(size);
		}else{
			alert('لطفا فقط مقدار عددی وارد کنید');
		}
	}
	else if(event.target.classList.contains('delete-btn')){
		event.target.parentElement.parentElement.remove();
	}
	else if(event.target.classList.contains('edit-btn')){
		formContainerEdit.classList.toggle('active');
		productName.value = 
		event.target.parentElement.parentElement.children[0].textContent;
		productDetails.value = 
		event.target.parentElement.parentElement.children[1].textContent;
		productPrice.value = 
		event.target.parentElement.parentElement.children[2].textContent;
		
		console.log(event.target.parentElement.parentElement.children[3].textContent);
	}

});
