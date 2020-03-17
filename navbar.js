// Adopted from example in https://bulma.io/documentation/components/navbar/
document
	.querySelectorAll('.navbar-burger')
	.forEach(burger => {
        burger.addEventListener('click', () => {
            const targetId = burger.dataset.target
            const target = document.getElementById(targetId)
            
            burger.classList.toggle('is-active');
            target.classList.toggle('is-active');
        })
    })