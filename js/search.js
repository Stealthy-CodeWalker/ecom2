function search(){
    let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('col-sm-6 col-md-4 col-lg-3');
	
	for (i = 0; i < x.length; i++) {
		if (x[i].innerHTML.trim().toLowerCase().includes(input)) {
			x[i].style.display="list-item";
		}
		else {
			x[i].style.display="none";				
		}
	}
}