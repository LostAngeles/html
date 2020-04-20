let part = 1;

function letsContinue() {
	console.log(part)
	switch (part) {
		case 1:
		document.getElementById('foundation').style.opacity = "1";		
		break;
		case 2:
		document.getElementById('walls').style.opacity = "1";
		break;
		case 3:
		document.getElementById('roof').style.opacity = "1";
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
		document.getElementById('first-browser').style.opacity = "1"; 
		break;
		case 12:
		document.getElementById('first-browser').style.justifyContent = 'flex-end';
		document.getElementById('first-code').style.width = "115px";
		setTimeout(function () {
			document.getElementById('first-code').style.opacity = "1";
		}, 500)	
		break;
		case 13:
		document.getElementById('code-arrow').style.width = "104px";	
		break;
		case 14:
		document.getElementById('browser-explain-arrow').style.opacity = "1";	
		break;
		case 15:
		setTimeout(function () {
			document.getElementById('browser-explain-arrow').style.color = "red";
		},100)
		setTimeout(function () {
			document.getElementById('browser-explain-arrow').style.color = "#d5dbdb";
		},600)
		setTimeout(function () {
			document.getElementById('browser-explain-arrow').style.color = "red";
		},1100)
		setTimeout(function () {
			document.getElementById('browser-explain-arrow').style.color = "#d5dbdb";
		},1700)
		setTimeout(function () {
			document.getElementById('browser-explain-arrow').style.color = "red";
		},2300)
		setTimeout(function () {
			document.getElementById('browser-explain-arrow').style.color = "#d5dbdb";
		},2900)
		break;
		case 16:
		document.getElementById('text-second').style.opacity = "1"; 
		setTimeout(function () {
			document.getElementById('photo-second').style.opacity = "1"; 
		}, 600)
		break;
		case 17:
		document.getElementById('browser-explain-arrow').style.opacity = "0";
		setTimeout(function () {
			document.getElementById('browser-explain-arrow').style.display = "none";
		}, 600)
		break;
		case 18:
		document.getElementById('first-info').style.opacity = "0"; 
		setTimeout(function () {
			document.getElementById('first-info').style.display = "none"; 
		}, 600)
		document.getElementById('figure-one').style.opacity = "1"; 
		document.getElementById('figure-two').style.opacity = "1"; 
		document.getElementById('figure-three').style.opacity = "1"; 
		break;		
		case 19:
		document.getElementById("figure-one").style.transform = "rotate(45deg)";
		document.getElementById("figure-two").style.transform = "rotate(45deg)";
		document.getElementById("figure-three").style.transform = "rotate(45deg)";
		break;		
		case 20:
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
		case 21:
		document.getElementById('img-tag').style.opacity = "1"; 
		break;
		case 22:
		document.getElementById('src-tag').style.opacity = "1"; 
		break;
		case 23:
		nikki();
		break;
		case 24:
		document.getElementById('second').style.opacity = "0"; 
		document.getElementById('img-tag').style.opacity = "0"; 
		document.getElementById('src-tag').style.opacity = "0"; 
		document.getElementById('left-tag').style.opacity = "0"; 
		document.getElementById('right-tag').style.opacity = "0"; 
		setTimeout(function () {
			document.getElementById('second').style.height = "0px";
			document.getElementById('second').style.display = "none"; 
			document.getElementById('img-tag').style.display = "none"; 
			document.getElementById('src-tag').style.display = "none"; 
			document.getElementById('left-tag').style.display = "none"; 
			document.getElementById('right-tag').style.display = "none"; 
		}, 400)	
		setTimeout(function () {
			document.getElementById('second-info').style.display = "none"; 
		},500)
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
		case 25:
		document.getElementById('third-info').style.display = "block";
		setTimeout(function () {
			document.getElementById('third-info').style.opacity = "1";
		}, 500)
		break;
		case 26:
		document.getElementById('mainoutside').style.width = "0px"; 		
		break;
		case 27:
		console.log(part)
		document.getElementById('mainlet').style.opacity = "0";
		setTimeout(function () {
			document.getElementById('mainlet').style.display = "none";
		}, 600)
		break;
		case 28:
		console.log(part)
		document.getElementById('first-the-let').style.display = "flex";
		setTimeout(function () {
			document.getElementById('first-the-let').style.opacity = "1";
		}, 200)		
		break;
		case 29:		
		document.getElementById('first-outside').style.width = "0px"; 		
		document.getElementById('second-outside').style.width = "0px"; 
		break;
		case 30:
		document.getElementById('first-inside').style.backgroundColor = "transparent"; 
		document.getElementById('foundation').style.backgroundColor = "rgba( 86, 101, 115, 0.8)";
		break;
		case 31:
		document.getElementById('second-inside').style.backgroundColor = "transparent"; 
		document.getElementById('roof').style.backgroundColor = "rgba( 110, 44, 0 , 0.8)";
		document.getElementById('walls').style.backgroundColor = "rgba( 110, 44, 0 , 0.8)";
		break;

		case 32:
		document.getElementById('first-the-let').style.opacity = "0";
		setTimeout(function () {
			document.getElementById('first-the-let').style.display = "none";
		}, 500)	
		break;

		case 33:		
		document.getElementById('second-the-let').style.display = "flex";
		setTimeout(function () {
			document.getElementById('second-the-let').style.opacity = "1";
		}, 200)	
		break;
		case 34:		
		document.getElementById('third-outside').style.width = "0px"; 		
		document.getElementById('fourth-outside').style.width = "0px"; 
		break;
		case 35:		
		document.getElementById('windows').style.display = "flex"; 		
		setTimeout(function () {
			document.getElementById('windows').style.opacity = "1"; 		
		}, 500)
		break;
		case 36:
		document.getElementById('info').style.opacity = "0"; 
		document.getElementById('first').style.opacity = "0"; 
		setTimeout(function () {
			document.getElementById('first').style.height = "0px";
		}, 500)	
		setTimeout(function () {
			document.getElementById('zero').style.display = "block";
		}, 600)
		setTimeout(function () {
			document.getElementById('zero-one').style.opacity = "1"; 
		}, 700)
		setTimeout(function () {
			document.getElementById('zero-two').style.opacity = "1"; 
		}, 850)
		setTimeout(function () {
			document.getElementById('zero-three').style.opacity = "1"; 
		}, 1000)
		setTimeout(function () {
			document.getElementById('zero-four').style.opacity = "1"; 
		}, 1150)
		setTimeout(function () {
			document.getElementById('zero-five').style.opacity = "1"; 
		}, 1300)
		setTimeout(function () {
			document.getElementById('zero-six').style.opacity = "1"; 
		}, 1450)
		setTimeout(function () {
			document.getElementById('zero-seven').style.opacity = "1"; 
		}, 1600)
		break;
		case 37:
		document.getElementById('view').style.opacity = "0";
		setTimeout(function () {
			document.getElementById('view').style.display = "none";
		},500)
		setTimeout(function () {
			document.getElementById('thanks').style.display = "block";
		},600)
		setTimeout(function () {
			document.getElementById('thanks').style.opacity = "1";
		},700)
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
	
	
	setTimeout(function () {
		document.getElementById('left-tag').style.fontSize = "40px";
		document.getElementById('right-tag').style.fontSize = "40px";
		document.getElementById('left-tag').style.opacity = "1";
		document.getElementById('right-tag').style.opacity = "1";
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