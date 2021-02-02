var searchOpen = false;
var mobileMenuOpen = false;

function toggleSearch() {
	var searchForm = document.getElementById("searchForm");
	if (searchOpen){
		searchForm.style.width = "0";
		searchForm.style.padding = "0";
		document.getElementById("tipue_search_input").tabIndex = -1;
		document.getElementById("searchIcon").src = "Icons/search.png";
		
		setTimeout(function() { document.getElementById("titleContent").classList.toggle('titleVisible'); }, 400);
	}
	else {
		searchForm.style.width = "164px";
		searchForm.style.padding = "2px";
		document.getElementById("tipue_search_input").tabIndex = 0;
		document.getElementById("searchIcon").src = "Icons/close.png";

		document.getElementById("titleContent").classList.toggle('titleVisible');
		
		setTimeout(function() { document.getElementById("tipue_search_input").focus() }, 500);
	}
	searchOpen = !searchOpen;
}

function toggleMobileMenu() {
	if (mobileMenuOpen) {
		document.getElementById("topnav").style.height = "64px";
		document.getElementById("menuIcon").src = "Icons/menu.png";
	}
	else {
		document.getElementById("topnav").style.height = "auto";
		document.getElementById("menuIcon").src = "Icons/close.png";
	}
	mobileMenuOpen = !mobileMenuOpen;
}
