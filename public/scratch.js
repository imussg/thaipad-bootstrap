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
	let a = "";
	setInterval(function() {
		// for(let i=0; i<3; i++) {
		// console.log(String.fromCharCode(i));
		// $('body').css('background-image', `url("https://s3-media2.fl.yelpcdn.com/bphoto/uOTbmDny6cardeqHlkc3LQ/o.jpg")`);
		$('body').css('background', `url("https://s3-media3.fl.yelpcdn.com/bphoto/7w41a7ix8a4nH5CdGMBQLA/o.jpg") top left no-repeat, url("https://s3-media2.fl.yelpcdn.com/bphoto/uOTbmDny6cardeqHlkc3LQ/o.jpg") top right no-repeat`);
		$('body').css('background-size', `50%, 50%`);
	}, 5000);
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