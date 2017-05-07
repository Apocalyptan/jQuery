$(document).ready(function() {
	var carouselList = $('#carousel ul');
	
	setInterval(nextSlide, 7000); /Slide Auto Change

	/**
	 * Carousel Functions
	 */
	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');

		lastItem.after(firstItem);

		carouselList.css({marginLeft: 0});
	};

	function moveLastSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');

		firstItem.before(lastItem);

		carouselList.css({marginLeft: -400});
	};

	/**
	* Carousel Slide Change Animations
	*/
	function prevSlide() {
		moveLastSlide();
		carouselList.animate({'marginLeft': 0}, 500);
	};

	function nextSlide() {
		carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
	};

	/**
 	 *	Arrow Click Functions
 	 */
	$(".fa-arrow-left").click(function() {
		prevSlide();
	});

	$(".fa-arrow-right").click(function() {
		nextSlide();
	});

});