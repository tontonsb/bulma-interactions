// Add a selector in `data-target` attribute to make a tab show and hide the selected elements.
// This will enable the first tab if none are initially have the `is-active` class.
;(function() {
	const toggle = (tab, value) => {
		tab.classList.toggle('is-active', value)
		
		document
			.querySelectorAll(tab.dataset.target)
			.forEach(target => target.classList.toggle('is-hidden', !value))
	}
	
	const show = tab => toggle(tab, true)
	const hide = tab => toggle(tab, false)

	document.querySelectorAll('.tabs').forEach(list => {
		const tabs = list.querySelectorAll('li')
		let hasActive = false
		
		tabs.forEach(tab => {
			if (tab.classList.contains('is-active'))
				hasActive = true
			
			tab.addEventListener('click', () => {
				tabs.forEach(t => hide(t))
				
				show(tab)
			})
		})
		
		if (!hasActive && tabs.length)
		{
			tabs.forEach(tab => hide(tab))
			show(tabs[0])
		}
	})
})();
