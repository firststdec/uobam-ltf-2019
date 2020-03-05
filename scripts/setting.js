$(document).ready(function () {
	slider();
	$("#open-modal1").click(function(){
		$('#videoModal').modal('toggle');
		stopVideo();
	})
	$("#open-modal2").click(function(){
		$('#videoModal').modal('toggle');
		stopVideo();
	})
});
var window_size = window.innerWidth;
$(window).on('load', function () {
	var window_sizescroll = $(window).width();
	// new Rellax('.rellax');
	scroll_animate();
	openToggle();
	initGraph();
	move_to_section();
	if (window_sizescroll > 992){
		skrollr.init();
	}
});
$(window).scroll(function () {
	var window_sizescroll = $(window).width();
	if (window_sizescroll >= 992) {
		// scroll_events();
	}
});

function scroll_animate(){
	$('.scroll-title-intro').addClass('animation fadeInDown').attr('data-time','1s');
	$('.detail-intro').addClass('animation fadeInDown').attr('data-time','1s').attr('data-delay','1s');
	$('.pic-intro').addClass('animation fadeInRight').attr('data-time','1.5s').attr('data-delay','1s');
	$('.wrap-head-graph .wrap-title').addClass('animation fadeInRight').attr('data-time','1s');
	$('.wrap-head-graph .risk-level').addClass('animation fadeInRight').attr('data-time','1s').attr('data-delay','0.5s');
	$('.detail-graph .main').addClass('animation fadeInRight').attr('data-time','1s').attr('data-delay','0.8s');
	$('.detail-graph .more-detail').addClass('animation fadeInRight').attr('data-time','1s').attr('data-delay','1.2s');
	$('.title-section .title').addClass('animation fadeInDown').attr('data-time','1s')
	$('.title-section .desc').addClass('animation fadeInDown').attr('data-time','1s').attr('data-delay','0.8s');
	$('.item-payment.item-left .pic').addClass('animation fadeInLeft').attr('data-time','1s')
	$('.item-payment.item-left .detail-item').addClass('animation fadeInLeft').attr('data-time','1s').attr('data-delay','0.8s');
	$('.item-payment.item-right .pic').addClass('animation fadeInRight').attr('data-time','1s')
	$('.item-payment.item-right .detail-item').addClass('animation fadeInRight').attr('data-time','1s').attr('data-delay','0.8s');
	new Animations().init();
}

function slider(argument) {
	// $('.item-banner').each(function () {
	// 	var bg_part = $(this).children('img').attr('src');
	// 	$(this).css('background-image', 'url(' + bg_part + ')');
	// });
	$('.banner-home').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplay: false,
		autoplaySpeed: 10000,
		arrows: true,
		dots: true,
		infinite: true,
		speed: 1000,
		slide: 'div',
		cssEase: 'ease-in-out'
	});
	$('.banner-section').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false,
		dots: false,
		infinite: true,
		speed: 1000,
		slide: 'div',
		cssEase: 'ease-in-out'
	});
}

function openToggle() {
	$('.toggle-banner-section').on('click',function (event) {
		event.preventDefault()
		var getId = $(this).attr('data-id');
		var txt = '';
		if ($('.banner-section#'+getId).hasClass('active')){
			txt = 'แสดง';
		}else{
			txt = 'ซ่อน';
		}
		$(this).children('span').text(txt);
		$('.banner-section#'+getId).toggleClass('active');
	})
}

function formAction(){
	event.preventDefault();

	window.open('https://www.uobam.co.th/en/search','_blank')
}

function initGraph() {
	var animation = bodymovin.loadAnimation({
		container: document.getElementById('graph1'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'images/graph1/data.json'
	});

	var animation2 = bodymovin.loadAnimation({
		container: document.getElementById('graph2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'images/graph2/data.json'
	})
}

function move_to_section() {
	$('a.move-sec').click(function (e) {
		// $('.main-menu>li').addClass('active currentACtive');
		// $('.main-menu>li').removeClass('active currentACtive');
		// $(this).parent('li').addClass('active ');
		var dataOffsetTop = 100;
		var window_sizescroll = $(window).width();
		if (window_sizescroll <= 992) {
			var dataOffsetTop = 80;
			$('.wrap-main-menu').removeClass('active');
			$('.open-menu').removeClass('show-close');
			$('.wrapper-close').removeClass('active');
		}
		// $('a.move-sec').removeClass('active');
		// $(this).addClass('active');
		e.preventDefault();
		var animation_name = ' animated fadeInDown';
		var moveID = $(this).attr('href');
		var target = $(moveID);
		var getScrollTop = (target.offset().top);
		var scrollTopModify = (getScrollTop - dataOffsetTop);
		$('html, body').stop().animate({
			'scrollTop': scrollTopModify
		}, 600);
	});
}

function scrollToId(id){
	var top = document.getElementById(id).offsetTop - 90
	$('html, body').stop().animate({
		'scrollTop': top
	}, 600);
	// window.scrollTo({
	// 	top: top,
	// 	behavior: 'smooth',
	// })
}