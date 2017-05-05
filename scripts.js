$(document).ready(function() {
	var carouselList = $('#carousel ul');

	//Carousel Auto-Change
	setInterval(changeSlides, 3000);

	/*
	 * Carousel Changing Functions
	 */
	function changeSlides() {
		carouselList.animate({'marginLeft': -750}, 1000, moveFirstSlide);
	};
	
	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');

		lastItem.after(firstItem);

		carouselList.css({marginLeft:0});
	};
});