document.querySelector(".slider").addEventListener("click", toggle);

var clicked = false;
function toggle() {
	if (!clicked) {
		clicked = true;
		document.querySelector(".change1").innerHTML = "&dollar;19.99";
		document.querySelector(".change2").innerHTML = "&dollar;24.99";
		document.querySelector(".change3").innerHTML = "&dollar;39.99";
	} else {
		clicked = false;
		document.querySelector(".change1").innerHTML = "&dollar;199.99";
		document.querySelector(".change2").innerHTML = "&dollar;249.99";
		document.querySelector(".change3").innerHTML = "&dollar;399.99";
	}
}