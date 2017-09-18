var menuButton = document.getElementsByClassName('button');
console.log(menuButton);

for (var i = menuButton.length - 1; i >= 0; i--) {
	alert(menuButton[i].innerText);
};

