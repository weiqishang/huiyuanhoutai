$(function  () {
	//评分饼状图
	var pie1 = new Pie({
			el : '#base-pie',
			number :true,
			animite : true,
			ring:0.7
		});
		pie1.init();
		
		//网站数选项卡
		$('.webdata_card section li').each(function  (i) {
			$(this).click(function  () {
				$(this).addClass('active').siblings().removeClass('active')
				$('.evemonth_data').eq(i).addClass('active').siblings().removeClass('active')
			})
		})
	//快速入口弹出层	
	$('.set_ent').on('click', function() {
		layer.open({
			type: 1,
			skin: 'enterture',
			title: false,
			area: ['980px', 'auto'],
			shadeClose: true, //点击遮罩关闭
			content: $('.hide_ent'),
			btn: ['确定'],
			yes: function(index, layero) {
				layer.close(index);
			}
		});
	})
		//快速入口添加
		$('.eve_enter li').each(function  (i) {
			$(this).click(function  () {
				if ($('.enterchoosed li').length>= 7) {
					layer.msg('最多添加七个入口'); 
				}else if ($(this).attr('statu') == 'add') {
					$(this).find('.msg_count').remove()
					$(this).attr('statu','added'+i)
					var ccc =  $(this).clone()
					var dd = '<span class="clost_enter">'+
								'<img src="images/enterclose_03.png" alt="" />'+
							'</span>'
							ccc.find('section').append(dd)
					$('.enterchoosed ul').append(ccc)
				}
			})
		})
		
	//快速入口删除
	$('.enterchoosed').on('click','li',function  () {
			$(this).remove()
			var add = '<span class="clost_enter">'+
								'<img src="images/enter_add_03.png" alt="" />'+
							'</span>'
			var addedclas = $(this).attr('statu')
			$('.eve_enter li').each(function  () {
					if ($(this).attr('statu') == addedclas) {
							$(this).find('section').append(add)
							$(this).attr('statu','add')
					}
			})
	})
	
	
	
	//名师讲堂切换
	$('.train_ad_r li').each(function  (i) {
		$(this).click(function  () {
			$(this).addClass('active').siblings().removeClass('active')
			$('.train_ad_l .train_ad_levecon').eq(i).addClass('active').siblings().removeClass('active')
		})
	})
	//添加产品页产开隐藏
	$('.slidetogmoe').click(function  () {
		if ($('.slidetoghide').is(':hidden')) {
			$('.slidetoghide').fadeIn("slow");
			$('.moreicon').addClass('active')
		}else{
			$('.slidetoghide').fadeOut("slow");
			$('.moreicon').removeClass('active')
		}
	})
	//产品分类管理隐藏
	$('.evemainage .b_fl .moreicon').click(function  () {
		if ($(this).parents('.b_fl ').siblings('.evemainagehid').is(':hidden')) {
			$(this).parents('.b_fl ').siblings('.evemainagehid').fadeIn(300);
			$(this).addClass('active')
		}else{
			$(this).parents('.b_fl ').siblings('.evemainagehid').fadeOut(300);
			$(this).removeClass('active')
		}
	})
	
	//橱窗产品弹窗	
	$('.showcase_topbtn').on('click', function() {
		layer.open({
			type: 1,
			skin: 'showcasealert',
			title: '新增橱窗产品',
			area: ['980px', '660px'],
			shadeClose: true, //点击遮罩关闭
			content: $('.auto_tem'),
			btn: ['确定'],
			yes: function(index, layero) {
				layer.close(index);
			}
		});
	})
	//橱窗添加产品
	$('.cho_fl').each(function(i) {
		$(this).click(function() {
			$('.cho_fl').removeClass('active')
			$(this).addClass('active')
		})
	})
	$('.listpro_input').each(function(i) {
		$(this).click(function(e) {
			var thisimgsrc = $(this).siblings('span').children('img').attr('src')
			var listpronam = $(this).siblings('.listpro_nam').text()
			var this_ind = i
			if($(this).attr('add') == "false") {
				if($('.delchoose').length >= 20) {
					layer.msg('够了别再加了，老铁！！！')
				} else if($('.delchoose').length <= 20) {
					$(this).text('取消选择')
					$(this).attr('add', 'true')
					$(this).css('background','#cccbca')
					var liccon = '<li  addind="' + this_ind + '">' +
						'<span>' +
						'<img src="' + thisimgsrc + '" alt="" />' +
						'</span>' +
						'<section class="listpro_nam">' +
						listpronam +
						'</section>' +
						'<section class="delchoose">删除</section>' +
						'</li>'
					$('.addprocon ul  #mCSB_4_container').append(liccon)
					$('.choosenum').text($('.delchoose').length)
				}
			} else if($(this).attr('add') == "true") {
				$(this).text('加入模板')
				$(this).attr('add', 'false')
				$(this).css('background','#3c3c4c')
				$('.added li').each(function  () {
					if ($(this).attr('addind') == i) {
						$(this).remove()
					}
				})
			}
		})
	})

	$('.addprocon').on('click', '.delchoose', function() {
		var chooseinde = $(this).parents('li').attr('addind')
		$('.addprolist li').eq(chooseinde).children('.listpro_input').text('加入模板')
		$('.addprolist li').eq(chooseinde).children('.listpro_input').attr('add', 'false')
		$('.addprolist li').eq(chooseinde).children('.listpro_input').css('background','#3c3c4c')
		$(this).parents('li').remove()
		$('.choosenum').text($('.delchoose').length)
	})

	$('.auto_teml li').each(function(i) {
		$(this).click(function() {
			$('.addprolist ul').eq(i).addClass('active').siblings().removeClass('active')
		})
	})
	
	$('.bank-r-bto ul li').click(function(e){
		var choseadd = $(this).find('.check').children('span')
		if (choseadd.hasClass('active')) {
			choseadd.removeClass('active')
		}else{
			choseadd.addClass('active')
		}
		
    })
	
	//产品页添加
	$('.add_pro').click(function  () {
  	
  	var addprocon = '<div class="addproinp"> <input type="text" class="layui-input" style="width: 360px;" placeholder="属性（例如：size）,最多输入40个字符">&nbsp'
							  +' <input type="text" class="layui-input" style="width: 360px;" placeholder="请输入值（例如：12inches），最多输入50个字符的值"> <i class="layui-icon del_addproinp" > &#x1007;</i> </div> '
  	$('.proper').append(addprocon)
  })
  $('.proper').on('click','.del_addproinp',function  () {
  	$(this).parents('.addproinp').remove()
  })
  
  //发布产品展开关闭
$('.eveprotit').click(function  () {
	var chidicon = $(this).children('.moreicon')
	if (chidicon.hasClass('active')) {
		chidicon.removeClass('active')
		$(this).siblings('.promsghid').removeClass('active')
	}else{
		chidicon.addClass('active')
		$(this).siblings('.promsghid').addClass('active')
	}
//	$(this).parents('.promsg').siblings('.promsg').find('.promsghid').removeClass('active')
//	$(this).parents('.promsg').siblings('.promsg').find('.moreicon').removeClass('active')
	
})
	
	
	
	
	
	
	
//	草稿箱筛选
	$('.products-unit').click(function(e) {
	e.stopPropagation()
	if($(this).children('.ui2-popup-menu').is(":hidden")) {
		$(this).children('.ui2-popup-menu').slideDown();
	} else {
		$(this).children('.ui2-popup-menu').slideUp();
	}
})
$('.ui2-popup-menu li').click(function(e) {
	e.stopPropagation()
	var menutex = $(this).text();
	$(this).parents('.ui2-popup-menu').siblings('span').find('.unit').text(menutex);
	$(this).parents('.ui2-popup-menu').slideUp();
})
$(document).click(function(e) {
	e.stopPropagation()
	$('.ui2-popup-menu').slideUp();
})


//公司概况切换
$('.con_stitu_top ul li').each(function  (i) {
	$(this).click(function  () {
		$(this).addClass('active').siblings().removeClass('active')
		$('.evestitucon').eq(i).addClass('active').siblings().removeClass('active')

	})
})

//发布视频增加删除分类
$('.rele_class span').each(function  (i) {
	$(this).click(function  () {
		$(this).siblings('span').hide()
		$(this).parents('.rele_class').siblings('.add_changinp').show()
		$('.add_changinp .add_show').eq(i).show().siblings().hide()
	})
})
$('.add_show button').click(function  () {
	$(this).parents('.add_changinp').hide()
	$(this).parents('.add_changinp').siblings('.rele_class').children('span').show()
})

//个性页排列方式选择
$('.web_pailie span').click(function  () {
	if ($(this).hasClass('active')) {
//		$(this).removeClass('active').siblings().addClass('active')
	}else{
		$(this).addClass('active').siblings().removeClass('active')
	}
})

//广告图管理
$('.changewrite').click(function  () {
	var diyi =  $(this).siblings('.adimg_manage_listname').find('.adtitinp').eq(0).children('input[type=text]')
	var dier =  $(this).siblings('.adimg_manage_listname').find('.adtitinp').eq(1).children('input[type=text]')
	var santextyi = $(this).siblings('.adimg_manage_listname').find('.adtitnam').eq(0).children('span')
	var santexter = $(this).siblings('.adimg_manage_listname').find('.adtitnam').eq(1).children('span')
	if ($(this).hasClass('active')) {
		if (diyi != "" || dier!="") {
			$(this).siblings('.adimg_manage_listname').find('.adtitinp').css('display','none')
			$(this).siblings('.adimg_manage_listname').find('.adtitnam').css('display','inline-block')
			santextyi.text(diyi.val())
			santexter.text(dier.val())
			$(this).removeClass('active')
		}else{
			layer.msg('内容不能为空')
		}
	}else{
		diyi.val(santextyi.text())
		dier.val(santexter.text())
		$(this).siblings('.adimg_manage_listname').find('.adtitinp').css('display','inline-block')
		$(this).siblings('.adimg_manage_listname').find('.adtitnam').css('display','none')
		$(this).addClass('active')
	}
})
//询盘详情弹窗展开关闭
$('.replyalttit').on('click',function  () {
	if ($(this).children('.moreicon').hasClass('active')) {
		$(this).children('.moreicon').removeClass('active')
		$('.replyalthid').hide()
	}else{
		$(this).children('.moreicon').addClass('active')
		$('.replyalthid').show()
	}
})
//询盘页数据切换

$('.analyze_conchose span').each(function  (i) {
	$(this).click(function  () {
		$(this).addClass('active').siblings().removeClass('active')
		$('.analyze_item').eq(i).addClass('active').siblings('.analyze_item').removeClass('active')
	})
})



//订单详情线下
$('.xx_ordertit').click(function  () {
	if ($('.xx_orderchosban').is(':hidden')) {
		$('.xx_orderchosban').show()
	}else{
		$('.xx_orderchosban').hide()
	}
})


//数据管家首页切换
$('.data_chatstit section span').each(function  (i) {
	$(this).click(function  () {
		$(this).addClass('active').siblings().removeClass('active')
		$('.data_chatscon .evechatscon').eq(i).addClass('active').siblings().removeClass('active')
	})
})
})