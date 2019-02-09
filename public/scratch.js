$(document).ready(function() {
	// const flounder = require('../src/images/flounder.jpg');
	// let imgArr = [
	// ];
	// setInterval(function() {
	// const bar = require('../src/images/bar.jpg');
	// const sukhothai = require('../src/images/sukhothai.jpg');
	// console.log(window.location.pathname);
	// $('body').html(`<body style="background-image: url(${sukhothai});">`);
	// }, 5000);
	// $('body').css('background-image', 'none');
	let a = 0;
	let scrollingBkgd = [
		`url("https://s3-media3.fl.yelpcdn.com/bphoto/7w41a7ix8a4nH5CdGMBQLA/o.jpg") top left no-repeat, url("https://s3-media2.fl.yelpcdn.com/bphoto/uOTbmDny6cardeqHlkc3LQ/o.jpg") top right no-repeat`,
		`url("https://s3-media3.fl.yelpcdn.com/bphoto/T1sEZAFjDcfQ4LHUr816RQ/o.jpg") top left no-repeat, url("https://s3-media2.fl.yelpcdn.com/bphoto/ABdiirNVMHXR9QKY9IfadA/o.jpg") top right no-repeat`,
		`url("https://s3-media3.fl.yelpcdn.com/bphoto/O1fuoONy821KPUOtkgu27A/o.jpg") top left no-repeat, url("https://s3-media2.fl.yelpcdn.com/bphoto/vr0UF6kPfhws3QjwNez2Sg/o.jpg") top right no-repeat`
	];
	$('body').css('background', scrollingBkgd[a]);
	$('body').css('background-size', `50%, 50%`);
	// $('body').css('opacity', '.5');
	setInterval(function() {
		// for(let i=0; i<3; i++) {
		// console.log(String.fromCharCode(i));
		// $('body').css('background-image', `url("https://s3-media2.fl.yelpcdn.com/bphoto/uOTbmDny6cardeqHlkc3LQ/o.jpg")`);
		a++;
		if(a%3 == 0) {
			a = 0;
		}
		$('body').css('background', scrollingBkgd[a]);
		$('body').css('background-size', `50%, 50%`);
	}, 10000, scrollingBkgd, a);
	// for(let i=97; i<1000; i++) {
	// 	if(i%40 == 0) {
	// 		console.log(a + "\t" + i);
	// 		a = "";
	// 	} else {
	// 		a += String.fromCharCode(i);
	// 	}
	// }
});

function changeBackground() {

}