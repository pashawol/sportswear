"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (_this.btnToggleMenuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active");

					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},
	closeMenu: function closeMenu() {
		var _this = this;

		if (_this.menuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});

			_this.menuMobile.classList.remove("active");

			_this.body.classList.remove("fixed");
		}
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		if (_this.menuMobileLink) {
			_this.toggleMenu();

			_this.menuMobileLink.forEach(function (element) {
				element.addEventListener('click', function (e) {
					console.log(element);

					_this.closeMenu();
				});
			});

			document.addEventListener('mouseup', function (event) {
				var container = event.target.closest(".menu-mobile--js.active"); // (1)

				if (!container) {
					_this.closeMenu();
				}
			});
		}
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _objectSpread2;

	// полифил для object-fit
	// objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture"); // для свг
	// svg4everybody({});

	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/360.jpg);"></div>')
	// /добавляет подложку для pixel perfect
	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил
	}

	if (window.matchMedia("(min-width: 992px)").matches) {
		$(".main-categories-wrap:first-child, .main-nav__nav ul:first-child li:first-child").addClass('active');
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var defaultSl = {
		loop: true,
		loopedSlides: 5,
		//looped slides should be the same
		lazy: {
			loadPrevNext: true
		}
	};
	var swiper4 = new Swiper('.color-slider', _objectSpread(_objectSpread({}, defaultSl), {}, (_objectSpread2 = {
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true
	}, _defineProperty(_objectSpread2, "watchOverflow", true), _defineProperty(_objectSpread2, "slidesPerGroup", 3), _defineProperty(_objectSpread2, "loop", true), _defineProperty(_objectSpread2, "loopFillGroupWithBlank", true), _defineProperty(_objectSpread2, "touchRatio", 0.2), _defineProperty(_objectSpread2, "slideToClickedSlide", true), _defineProperty(_objectSpread2, "freeModeMomentum", true), _defineProperty(_objectSpread2, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _objectSpread2)));
	var swiper1 = new Swiper('.sSlider-action--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 1,
		// slidesPerGroup: 1,
		loop: true,
		breakpoints: {
			768: {
				spaceBetween: 93
			}
		}
	}));
	var swiper5 = new Swiper('.seasonsSlider-js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		// slidesPerGroup: 1,
		loop: false,
		spaceBetween: 30,
		slidesPerView: 1,
		breakpoints: {
			768: {
				spaceBetween: 47,
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 3
			}
		}
	})); // modal window
	//timer

	function tikTak(parentQselector) {
		//html elements
		var parent = document.querySelector(parentQselector);
		if (!parent) return;
		var days = parent.querySelector('.days');
		var hours = parent.querySelector('.hours');
		var minutes = parent.querySelector('.minutes');
		var seconds = parent.querySelector('.seconds'); //date elements

		var now = new Date(); // d === days.innerHtml + now.getDate... others the same way

		var d = getTime(days, now.getDate());
		var h = getTime(hours, now.getHours());
		var m = getTime(minutes, now.getMinutes());
		var s = getTime(seconds, now.getSeconds());
		var targetDate = new Date(now.getFullYear(), now.getMonth(), d, h, m, s); //interval

		tikTakReadOut(parent, targetDate, ThisReadOutID, days, hours, minutes, seconds);
		var ThisReadOutID = window.setInterval(tikTakReadOut.bind(null, parent, targetDate, ThisReadOutID, days, hours, minutes, seconds), 1000);
	}

	tikTak('.timer-box-js'); //additional funcs to tikTak

	function tikTakReadOut(parent, targetDate, ReadOutID, days, hours, minutes, seconds) {
		var now = new Date();
		var timeLeft = (targetDate - now) / 1000;

		if (timeLeft < 1) {
			window.clearInterval(ReadOutID); //to do something after timer ends

			$(parent).fadeOut();
		}

		days.innerHTML = Math.floor(timeLeft / 60 / 60 / 24);
		timeLeft = (timeLeft / 60 / 60 / 24 - Math.floor(timeLeft / 60 / 60 / 24)) * 60 * 60 * 24;
		hours.innerHTML = Math.floor(timeLeft / 60 / 60);
		timeLeft = (timeLeft / 60 / 60 - Math.floor(timeLeft / 60 / 60)) * 60 * 60;
		minutes.innerHTML = Math.floor(timeLeft / 60);
		timeLeft = (timeLeft / 60 - Math.floor(timeLeft / 60)) * 60;
		seconds.innerHTML = Math.floor(timeLeft);
	}

	function getTime(htmlEl, currentTimeItem) {
		var timeItem = Number(htmlEl.innerHTML);

		if (timeItem) {
			timeItem += currentTimeItem;
		} else {
			timeItem = currentTimeItem;
		}

		return timeItem;
	}

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 0,
		slidesPerView: 'auto',
		loop: true,
		freeMode: true,
		loopedSlides: 5,
		//looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true
	});
	var galleryTop = new Swiper('.gallery-top', _objectSpread(_objectSpread({}, defaultSl), {}, {
		spaceBetween: 20,
		thumbs: {
			swiper: galleryThumbs
		}
	}));
	$(".catalogItem").hover(function () {
		// $(this).toggleClass('active');
		$(this).find(".catalogItem__hiddenBlock").fadeToggle(); // $(this).find(".catalogItem__hiddenBlock").slideToggle();
	});
	var galleryTop2 = new Swiper('.sLogos__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			1200: {
				freeMode: false,
				spaceBetween: 34,
				watchSlidesVisibility: false,
				watchSlidesProgress: false,
				slidesPerView: 6 // slidesOffsetBefore: -80,
				// slidesOffsetAfter: -80,

			}
		}
	}));
	$(".main-nav [data-tab] a").hover(function () {
		var dataTab = $(this).parent().data('tab');
		$('[data-tab]').removeClass('active');
		$(this).parent().addClass('active').siblings().removeClass('active');
		$(dataTab).addClass('active').siblings().removeClass('active');
		return false;
	});
	$(".main-nav [data-tab]").click(function () {
		var dataTab = $(this).data('tab');
		$('[data-tab]').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		$(dataTab).addClass('active').siblings().removeClass('active');
		return false;
	});
	$(".toggle-main-menu--js").click(function () {
		$(this).toggleClass('on');
		$(".main-nav").toggle();
		$("body").toggleClass('fixed');
	}); //luckyone JS
	//02 prod card
	//breadcrumbs

	var breadSl = new Swiper('.breadcrumb-slider-js', {
		slidesPerView: 'auto',
		//spaceBetween: 28,
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true
	}); //prodSlider

	var prodCardThumb = new Swiper('.prod-card-thumb-js', {
		slidesPerView: 'auto',
		spaceBetween: 24,
		//loop: true,
		on: {
			click: function click() {
				//photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				prodCardThumb.updateSlidesClasses();
				prodCard.updateSlidesClasses();
			}
		}
	});
	var prodCard = new Swiper('.prod-card-slider-js', {
		//thumbs
		thumbs: {
			swiper: prodCardThumb
		},
		lazy: {
			loadPrevNext: true
		},
		loop: true,
		on: {
			click: function click() {
				//photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				prodCardThumb.updateSlidesClasses();
				prodCard.updateSlidesClasses();
			}
		}
	}); //tabs slider

	var ProdPageTabs = new Swiper('.prod-card-tabs-js', {
		slidesPerView: 'auto',
		spaceBetween: 51,
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true
	}); //timer

	tikTak('.prod-timer-box-js'); //end luckyone JS

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}