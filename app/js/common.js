$(function() {
	//let search = $('#title-search').css( "display");
	//console.log(search);
	if($(document).width()==920){
		$('#title-search').attr("style", "display: block")
	}
	$( '.nav-search').click(function(){
		$( '#title-search' ).slideToggle('fast');
	});
});

$('.menu-icon').click(function() {
	$(this).toggleClass('opened');
	$('.nav-list').slideToggle('slow');
});

$('.menu-icon-reg').click(function() {
	$(this).toggleClass('opened');
	$('.partner-left-menu').animate({width:'toggle'}, 350);
});




	/* - Блоки одной высоты -*/
	function someHight(itemClass){
		let item = document.querySelectorAll(itemClass);
		if(item.length>0){
				let hightItem = 0;
				for (let i = 0; i < item.length; i++) {
						if (hightItem < item[i].offsetHeight) hightItem = item[i].offsetHeight;
				}
				for (let i = 0; i < item.length; i++) {
						item[i].style.height = hightItem + 'px';
				}
		}
}

    // Кнопка вверх
  $(window).scroll(function() {
			if ($(this).scrollTop() > 500) {
					if ($('#upbutton').is(':hidden')) {
							$('#upbutton').css({opacity : .3}).fadeIn('slow');
					}
			} else { $('#upbutton').stop(true, false).fadeOut('fast'); }
	});
	$('#upbutton').click(function() {
			$('html, body').stop().animate({scrollTop : 0}, 300);
	});

	$('#upbutton').hover(function() {
		$('#upbutton').css({opacity : .8});
	}, function() {
		$('#upbutton').css({opacity : .3});
	});

	$( ".goods_img-link" ).click(function(){
		let img = $(this).attr( "href" );
		$( "#GoodsImg" ).attr( "src", img );
		return false;
	});

$('#imgLinck').on('click', function() {
  $.fancybox.open( $('.goods_img-link'), {
    touch: true
  });
});

someHight('.partner-list-txt');

$('.hidden-link').click(function () {
	window.open($(this).data('link'));
	return false;
});

/* -- AJAX - форма обратной связи  --*/
$(document).on('click', '.call_form', function (e) {
	e.preventDefault();
	$.ajax({
		url: '/include/form.php',
		type: 'POST',
		data: {},
		success: function (data) {
			$('body').append(data);
			$('#modal').css({
				'display': 'block'
			});
			$('#modalWindow').addClass('modalUp');
		}
	});
	$(document).on('click', '#modalTopBtn', function (e) {
		$('#modalWindow').animate({
			opacity: 0
		}, {
			duration: 300,
			easing: "linear",
			complete: function () {
				$('#modal').hide(200).remove();
			},
			queue: true
		});
	});

	window.onclick = function (e) {
		if (e.target == document.getElementsByClassName('modal__wrap')[0]) {
			$('#modalWindow').animate({
				opacity: 0
			}, {
				duration: 300,
				easing: "linear",
				complete: function () {
					$('#modal').hide(200).remove();
				},
				queue: true
			});
		}
	}

});