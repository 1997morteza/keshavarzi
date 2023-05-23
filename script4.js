
const removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const tr = event.target.closest('tr');
        tr.remove();
    });
});

		const clearBtn = document.getElementById('clear-wishlist-btn');
		const table = document.getElementById('wishlist-table');
		clearBtn.addEventListener('click', () => {
			table.querySelector('tbody').innerHTML = '<tr><td colspan="4">لیست خرید شما خالی است.</td></tr>';
		});

        