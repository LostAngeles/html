let part = 1;

function letsContinue() {
	switch (part) {
		case 1:
		document.getElementById('roof').style.opacity = "1";
		break;
		case 2:
		document.getElementById('walls').style.opacity = "1";
		break;
		case 3:
		document.getElementById('foundation').style.opacity = "1";
		break;
		case 4:
		document.getElementById('picture-first').style.opacity = "1";
		break;
		case 5:
		document.getElementById('clock').style.opacity = "1";
		break;
		case 6:
		document.getElementById('picture-second').style.opacity = "1";
		break;
		case 7:
		document.getElementById('walls-content').style.width = "210px"; 
		break;
		case 8:
		document.getElementById('table').style.opacity = "1"; 
		break;
		case 9:
		document.getElementById('laptop').style.opacity = "1"; 
		break;
		case 10:
		document.getElementById('first').style.opacity = "0"; 
		setTimeout(function () {
			document.getElementById('first').style.height = "0px";
		}, 800)	
		setTimeout(function () {
			document.getElementById('second').style.opacity = "1";
		}, 1300)		
		break;
		case 11:
		document.getElementById('text-second').style.opacity = "1"; 
		break;
		case 12:
		document.getElementById('photo-second').style.opacity = "1"; 
		break;
		case 13:
		document.getElementById('figure-one').style.opacity = "1"; 
		document.getElementById('figure-two').style.opacity = "1"; 
		document.getElementById('figure-three').style.opacity = "1"; 
		break;		
		case 14:
		document.getElementById("figure-one").style.transform = "rotate(45deg)";
		document.getElementById("figure-two").style.transform = "rotate(45deg)";
		document.getElementById("figure-three").style.transform = "rotate(45deg)";
		break;
		case 15:
		setTimeout(function (argument) {
			document.getElementById('other-one').style.opacity = "1"; 
		}, 100)
		setTimeout(function (argument) {
			document.getElementById('other-two').style.opacity = "1"; 
		}, 300)
		setTimeout(function (argument) {
			document.getElementById('other-three').style.opacity = "1"; 
		}, 500)
		break;
		case 16:
		document.getElementById('img-tag').style.opacity = "1"; 
		break;
		case 17:
		document.getElementById('src-tag').style.opacity = "1"; 
		break;
		case 18:
		nikki();
		break;
		case 19:
		document.getElementById('second').style.opacity = "0"; 
		document.getElementById('img-tag').style.opacity = "0"; 
		document.getElementById('src-tag').style.opacity = "0"; 
		document.getElementById('left-tag').style.opacity = "0"; 
		document.getElementById('right-tag').style.opacity = "0"; 
		setTimeout(function () {
			document.getElementById('second').style.height = "0px";
		}, 400)	
		setTimeout(function () {
			document.getElementById('first').style.height = "350px";
			document.getElementById('picture-first').style.opacity = "0";
			document.getElementById('clock').style.opacity = "0";
			document.getElementById('picture-second').style.opacity = "0";
			document.getElementById('table').style.opacity = "0"; 
			document.getElementById('laptop').style.opacity = "0"; 
			setTimeout(function () {
				document.getElementById('first').style.opacity = "1";
			},800)
		}, 600)		
		break;
		default:
		alert( "error");
	}
	part++;
}

function nikki() {	
	document.getElementById('figure-one').style.opacity = "0"; 
	document.getElementById('figure-two').style.opacity = "0"; 
	document.getElementById('figure-three').style.opacity = "0";
	document.getElementById('other-one').style.opacity = "0"; 
	document.getElementById('other-two').style.opacity = "0"; 
	document.getElementById('other-three').style.opacity = "0"; 
	setTimeout(function () {
		document.getElementById('figure-one').style.display = "none"; 
		document.getElementById('figure-two').style.display = "none"; 
		document.getElementById('figure-three').style.display = "none";
		document.getElementById('other-one').style.display = "none"; 
		document.getElementById('other-two').style.display = "none"; 
		document.getElementById('other-three').style.display = "none"; 
	}, 700)
	document.getElementById('left-tag').style.color = "transparent";
	document.getElementById('right-tag').style.color = "transparent";
	document.getElementById('left-tag').style.opacity = "1";
	document.getElementById('right-tag').style.opacity = "1";
	document.getElementById('left-tag').style.fontSize = "40px";
	document.getElementById('right-tag').style.fontSize = "40px";
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "yellow";
		document.getElementById('right-tag').style.color = "yellow";
	}, 500)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "transparent";
		document.getElementById('right-tag').style.color = "transparent";
	}, 1000)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "yellow";
		document.getElementById('right-tag').style.color = "yellow";
	}, 1500)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "transparent";
		document.getElementById('right-tag').style.color = "transparent";
	}, 2000)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "yellow";
		document.getElementById('right-tag').style.color = "yellow";
	}, 2500)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "transparent";
		document.getElementById('right-tag').style.color = "transparent";
	}, 3000)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "yellow";
		document.getElementById('right-tag').style.color = "yellow";
	}, 3500)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "transparent";
		document.getElementById('right-tag').style.color = "transparent";
	}, 4000)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "yellow";
		document.getElementById('right-tag').style.color = "yellow";
	}, 4500)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "transparent";
		document.getElementById('right-tag').style.color = "transparent";
	}, 5000)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "yellow";
		document.getElementById('right-tag').style.color = "yellow";
	}, 5500)
	setTimeout(function () {
		document.getElementById('left-tag').style.color = "#d5dbdb";
		document.getElementById('right-tag').style.color = "#d5dbdb";
		document.getElementById('left-tag').style.fontSize = "30px";
		document.getElementById('right-tag').style.fontSize = "30px";
	}, 6000)
	setTimeout(function () {
		document.getElementById('photo-by-tag').style.opacity = "1";		
	}, 6500)
}