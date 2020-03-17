// Some methods to allow programmatically controlling modals.
// Provides modals.open(element) and modals.close(element).
window.modals = {
	open: modal => modal.classList.add('is-active'),
	close: modal => modal.classList.remove('is-active'),
}

// This will make modals close using the native cross in the corner
// as well as any button with js-close-modal class.
document.querySelectorAll('.modal-close, .js-close-modal').forEach(button =>
	button.addEventListener('click', () => 
		modals.close(button.closest('.modal'))
	)
)