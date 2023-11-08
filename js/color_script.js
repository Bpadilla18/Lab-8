function init (){
	function myEventFunction(){
	  alert('Braxton Padilla: This is a test');
	}
	
	var d4 = document.getElementById('div4');
	d4.addEventListener('click', myEventFunction);
	d4.addEventListener('click', function(){
	  console.log('I was Clicked!');
	  d4.style.backgroundColor = '#C00';
	  d4.innerHTML = '<strong>Goodbye</strong>';
	});
}
window.addEventListener('load', init);