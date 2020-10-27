


$(document).ready(function(){
    $('.home-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left slick-arrow-left"></i>',
			nextArrow: '<i class="fa fa-angle-right slick-arrow-right"></i>',
			dots: true,
		});

    $('.home-list-product-slider').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left slick-arrow-left"></i>',
			nextArrow: '<i class="fa fa-angle-right slick-arrow-right"></i>',
			dots: false,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 470,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			]
		});

    		$('.home-post-slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left slick-arrow-left"></i>',
			nextArrow: '<i class="fa fa-angle-right slick-arrow-right"></i>',
			dots: false,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 470,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			]
		});
});
	

	











