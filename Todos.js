var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function() {
		this.classList.add("selected");
	});
	lis[i].addEventListener("mouseout", function() {
		this.classList.add("unselected");
	});
	lis[i].addEventListener("click", function() {
		this.classList.add("Completed");
	});
}
