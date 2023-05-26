
const removeBtns2 = document.querySelectorAll('.remove-btn');
removeBtns2.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const tr = event.target.closest('tr');
        tr.remove();
    });
});

		const clearBtn = document.getElementById('clear-wishlist-btn');
		const table3 = document.getElementById('wishlist-table');
		clearBtn.addEventListener('click', () => {
			table3.querySelector('tbody').innerHTML = '<tr><td colspan="4">لیست خرید شما خالی است.</td></tr>';
		});

        
