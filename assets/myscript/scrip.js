

$('.lp-our-doctor-wrapper').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	dots: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 3
		}
	}
})







$(document).ready(function () {
	const owl = $('.lp-testimonials-wrapper')
	owl.owlCarousel({
		loop: true,
		nav: false,
		items: 6,
		margin: 25,
		autoplayTimeout: 3000,
		dots: false,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},
			// breakpoint from 480 up
			480: {
				items: 1

			},
			// breakpoint from 768 up
			768: {
				items: 1
			}
		}
	});

	// Custom Nav

	$('.partners-icon-btn-prev').click(() => owl.trigger('next.owl.carousel'))

	$('.partners-icon-next').click(() => owl.trigger('prev.owl.carousel'))
})


$(document).ready(function () {
	$("#hide").click(function () {
		$("p").hide("0.5s");
	});
	$("#show").click(function () {
		$("p").show("0.1s");
	});
});
