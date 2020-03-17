// Dismiss notifications.
document
	.querySelectorAll('.notification button.delete')
	.forEach(button =>
		button.addEventListener('click', () => 
			button.closest('.notification').remove()
		)
	)