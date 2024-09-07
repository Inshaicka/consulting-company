document.querySelectorAll('nav a').forEach(anchor =>{
	anchor.addEventListener('click', function(e){
		e.preventDefault()

		const targetId = this.getAttribute('href').substring(1)
		const targetSection = document.getElementById(targetId)

		window.scrollTo({
			top:targetSection.offsetTop,
		behavior:'smooth'	
		})
	})
})

window.addEventListener('scroll', function(){
	const services = document.querySelector('.services')
	if(isScrolledIntoView(services)){
		services.classList.add('visible')
	}
})

function isScrolledIntoView(element){
	const rect = element.getBoundingClientRect()
	return(
		rect.top >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
	)
}