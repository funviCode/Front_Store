$(function(){

	$('.countdown').final_countdown({
            'start': 1362139200,
            'end': 1388461320,
            'now': 1387461319        
        });


	$('.main_slider').each(function(){
		var $li = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);
		var $current = $('.main_slider_controls_count span', this);
		var $count = $('.main_slider_controls_count ins', this);
		var $pags = $('.main_slider_controls_pags', this)


		$li.first().addClass('active');
		$count.text($li.length);
		$current.text($li.filter('.active').index()+1);

		$li.each(function(){
			$pags.append('<span></span>');
		});

		var $pag = $($pags.find('span'));
		$pag.eq($li.filter('.active').index()).addClass('active');

		$prev.click(function(){
			var index = $li.filter('.active').index();
			if(index == 0){
				index = $li.length
			}
			$li.eq(index-1).addClass('active').siblings().removeClass('active');
			$pag.eq(index-1).addClass('active').siblings().removeClass('active');
			$current.text(index)
		});

		$next.click(function(){
			var index = $li.filter('.active').index();
			if(index == $li.length-1){
				index = -1
			}
			$li.eq(index+1).addClass('active').siblings().removeClass('active');
			$pag.eq(index+1).addClass('active').siblings().removeClass('active');
			$current.text(index+2)
		});

		$pag.click(function(){
			$li.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
			$current.text($li.filter('.active').index()+1);
		});
	});

	$('.popular_gallery').each(function(){
		var $prevImg = $('.popular_gallery_prev span', this);
		var $mainImg = $('.popular_gallery_main img', this);

		$prevImg.click(function(){
			$mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		}).first().click();
	});

	$('.black_section_carousel li').each(function(){
		var $prevImg = $('.black_section_gallery_prev span', this);
		var $mainImg = $('.black_section_gallery img', this);

		$prevImg.click(function(){
			$mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		}).first().click();
	});

		$('.popular').each(function(){
		var $tabBlock = $('.popular_all_tabs_block ul', this);
		var $tabBtn = $('.popular_tab_btns a', this);

		$tabBtn.click(function(){
			$tabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
			return false; 
		}).eq(0).click();
	});

	$('.black_section_carousel').each(function(){
		var $li = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);

		$li.eq(0).addClass('active');

		$prev.click(function(){
			var index = $li.filter('.active').index();
			if(index == 0){
				index = $li.length
			}
			$li.eq(index-1).addClass('active').siblings().removeClass('active');
		});

		$next.click(function(){
			var index = $li.filter('.active').index();
			if(index == $li.length-1){
				index = -1
			}
			$li.eq(index+1).addClass('active').siblings().removeClass('active');
		});

	});	

	$('header a').click(function(){
		var link = $(this).attr('href');
		var coordinats = $(link).offset().top;
		$('html, body').animate({scrollTop:coordinats}, 1000);
		return false;
	});

	$('.open_popup').click(function(){
		$('.popup .popup_title').text($(this).data('title'));
		$('.popup .popup_vip_category').text($(this).data('category'));
		$('.popup .popup_desc').text($(this).data('desc'));
		$('.popup .popup_price span').text($(this).data('price'));
		$('.popup .popup_img img').attr('src', $(this).data('img'));

		$('.popup input[name="popup_vip_title"]').val($(this).data('title'));
		$('.popup input[name="popup_price"]').val($(this).data('price'));


		$('.popup').fadeIn();
		$('.bg_popup').fadeIn();

		$('.bg_popup, .close').click(function(){
			$('.popup').fadeOut();
			$('.bg_popup').fadeOut();
		});
		return false
	});
});