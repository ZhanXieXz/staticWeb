
	//nav
	$('.list_style').click(function(){
		$(this).siblings().removeClass('hl');
		$(this).addClass('hl');
	});

	//image
	$('.image_button').click(function(){
		$(this).siblings().removeClass('hl');
		$(this).addClass('hl');
		var marginleft=-908*$(this).index();
		$('.banner_list').css({'margin-left': marginleft+'px'});
	});

	//right-nav
	$('.right_middle_list').click(function(){
		$(this).siblings().removeClass('hl');
		$(this).addClass('hl');
	});

	//foot_input
	$('.foot_input_item').click(function(){
		$(this).siblings().removeClass('hl');
		$(this).addClass('hl');

		var footpage=$(this).index();//0 1
		$('.page_num').html(footpage + 1);
	});

	//right imagedown
	$('.li_foot').click(function(){
		$(this).siblings().removeClass('hl');
		$(this).addClass('hl');
	});


	document.onreadystatachange=function(){
		if (document.readyState=="complete") {
		$(".loading").fadeOut();
		}
	}

	$('.summary').click(function(){//.is(':visible')

		
		if ($(this).children('.details').is(':visible'))
		{
			$(this).children('.details').hide();
		}
		else
		{
			$(this).children('.details').show();
		}
	})


	// $('.right_middle_list').click(function(){
	// 	var border=$(this).index()
	// 	$('.right_external_border_'+border).show();
	// 	}
	// });

	$('.right_middle_list').click(function(){
		var border=$(this).index();
		$('.right_external_border').hide();
		$('.right_external_border_' + border).show();
	});