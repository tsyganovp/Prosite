var h = $(window).height();
//Отрисовка картинок "Почему лендинг"
var pathObj = {
    "finances": {
        "strokepath": [
            {
                "path": "M238.1,315.6c0-1.6-1.3-2.8-2.8-2.8h-60.5c-1.6,0-2.8,1.3-2.8,2.8v9.5c0,1.6-1.3,2.8-2.8,2.8h-43.2    c-1.6,0-2.8,1.3-2.8,2.8v12.2c0,1.6,1.3,2.8,2.8,2.8h158.2c1.6,0,2.8-1.3,2.8-2.8v-12.2c0-1.6-1.3-2.8-2.8-2.8h-43.2    c-1.6,0-2.8-1.3-2.8-2.8L238.1,315.6L238.1,315.6z",
                "duration": 1600
            },
            {
                "path": "M385.5,1.4H24.5C11.9,1.4,1.7,11.6,1.7,24.2v250.9c0,12.6,10.2,22.8,22.8,22.8h361.1c12.6,0,22.8-10.2,22.8-22.8V24.2    C408.3,11.6,398.1,1.4,385.5,1.4z M205,278.2c-5.7,0-10.3-4.6-10.3-10.3c0-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3    C215.3,273.6,210.7,278.2,205,278.2z M391.1,246.6H18.9V24.2c0-3,2.5-5.5,5.5-5.5h361.1c3,0,5.5,2.5,5.5,5.5L391.1,246.6    L391.1,246.6z",
                "duration": 800
            },
            {
                "path": "M344.8,70.9c-3.5-2.7-8.5-2-11.2,1.5l-58.9,77.1l-70-37.2c-6.3-3.4-14.5-1.4-18.6,4.6l-46.4,67.7    c-0.4,0.5-1.7,1.2-2.3,1.2H70c-4.4,0-8,3.6-8,8s3.6,8,8,8h67.5c5.7,0,12.2-3.4,15.5-8.2l45.5-66.5l69.7,37.1    c6.2,3.3,14.3,1.5,18.6-4.1l59.6-78C349,78.6,348.3,73.5,344.8,70.9z",
                "duration": 1600
            }
        ],
        "dimensions": {
            "width": 410,
            "height": 350
        }
    }
}; 
 
 


var pathObj2 = {
    "web": {
        "strokepath": [
            {
                "path": "M313.5,326.2h-44.2c-1.6,0-2.9-1.4-2.9-3.2V311c0-1.8-1.3-3.2-2.9-3.2h-61.9c-1.6,0-2.9,1.4-2.9,3.2V323   c0,1.8-1.3,3.2-2.9,3.2h-33.2c-1.6,0-2.9,1.4-2.9,3.2v13.8c0,1.8,1.3,3.2,2.9,3.2h151c1.6,0,2.9-1.4,2.9-3.2v-13.8   C316.4,327.6,315.1,326.2,313.5,326.2z",
                "duration": 1600
            },
            {
                "path": "M387.8,3.4H72.2c-11,0-19.9,9.9-19.9,22.1c0,0,0,42.1,0,57.6c0,7.6-0.5,8.7,4.1,8.7c2.4,0,5.2,0,7.9,0    c3.9,0,3.1-1.1,3.1-8.8c0-15.5,0-57.4,0-57.4c0-2.9,2.2-5.4,4.8-5.4h315.6c2.6,0,4.8,2.5,4.8,5.4V241h-225c0,0-7.9,0-7.9,11.4    c0,6.7,0,20.2,0,27c0,11.4,8.2,11.4,8.2,11.4h219.9c11,0,19.9-9.9,19.9-22.1V25.4C407.8,13.3,398.8,3.4,387.8,3.4z M230,271.6    c-5,0-9-4.5-9-9.9c0-5.5,4-10,9-10c5,0,9,4.5,9,10C239,267.2,235,271.6,230,271.6z",
                "duration": 800
            },
            {
                "path": "M129,111.5H14.9c-7.1,0-12.9,6.4-12.9,14.3v208c0,7.9,5.8,14.3,12.9,14.3H129c7.1,0,12.9-6.4,12.9-14.3v-208    C141.9,117.8,136.1,111.5,129,111.5z M57.9,126H86c1.3,0,2.4,1.2,2.4,2.7c0,1.5-1.1,2.7-2.4,2.7H57.9c-1.3,0-2.4-1.2-2.4-2.7    C55.4,127.2,56.5,126,57.9,126z M71.8,338c-3.7,0-6.7-3.3-6.7-7.4c0-4.1,3-7.4,6.7-7.4c3.7,0,6.7,3.3,6.7,7.4    C78.4,334.7,75.4,338,71.8,338z M130.8,316.3c0,1.9-1.4,3.5-3,3.5H16.1c-1.7,0-3-1.6-3-3.5V143.4c0-1.9,1.4-3.5,3-3.5h111.7    c1.7,0,3,1.6,3,3.5C130.8,143.4,130.8,316.3,130.8,316.3z",
                "duration": 1600
            }
        ],
        "dimensions": {
            "width": 410,
            "height": 350
        }
    }
}; 
 
var pathObj3 = {
    "touchscreen": {
        "strokepath": [
            {
                "path": "M276.2,205c-5,0-9.3,3.1-11.6,7.6v-0.7c0-9.5-6.9-17.2-15.3-17.2c-5.8,0-10.9,3.7-13.5,9c-2.6-5.4-7.7-9-13.5-9   c-4.7,0-8.8,2.4-11.6,6v-53.3c0-9.5-6.9-17.2-15.3-17.2c-8.5,0-15.3,7.7-15.3,17.2v105l-7.1-14.6c-2.8-5.7-8-8.9-13.4-8.9   c-2.5,0-5,0.7-7.3,2.1c-7.4,4.6-10.1,15-6.1,23.3l35.3,72.3c0,0.1,3.8,5.9,5.7,8.7c5.2,7.7,12.1,13.6,21.1,13.6h53.2   c15.6,0,28.3-14.8,28.3-32.9v-96C289.6,211.8,283.6,205,276.2,205z",
                "duration": 800
            },
            {
                "path": "M381.6,2.7H31C17.8,2.7,7,13.3,7,26.3l0,229.6c0,13,10.8,23.6,24,23.6h104c0,0,6.5,0,5-4.6c-1-3.3-5.8-11.9-6-12.3   c-1.9-3.7-7-3.3-7-3.3H50.7c-3.2,0-5.8-2.5-5.8-5.6V28.6c0-3.1,2.6-5.6,5.8-5.6h301.5c3.2,0,5.8,2.5,5.8,5.6v225.1   c0,3.1-2.6,5.6-5.8,5.6h-40.1c0,0-8.1-0.8-8.1,6c0,2.1,0,6.2,0,8.3c0,6,8.6,6,8.6,6h69c13.2,0,24-10.6,24-23.6V26.3   C405.6,13.3,394.8,2.7,381.6,2.7z M376.8,152.4c-6.5,0-11.7-5.1-11.7-11.5c0-6.4,5.2-11.5,11.7-11.5c6.5,0,11.7,5.1,11.7,11.5   S383.3,152.4,376.8,152.4z",
                "duration": 1000
            }
        ],
        "dimensions": {
            "width": 410,
            "height": 350
        }
    }
}; 
 
 

 
 //$('.why-landing').hover(function(){
$(window).scroll(function(){
if ( ($(this).scrollTop()+h) >= $("#why-us").offset().top) {
 $('#finances').lazylinepainter( 
 {
    "responsive":true,
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#392919"
}).lazylinepainter('paint');
  $('#web').lazylinepainter( 
 {
    "responsive":true,
    "svgData": pathObj2,
    "strokeWidth": 2,
    "strokeColor": "#392919"
}).lazylinepainter('paint'); 
$('#touchscreen').lazylinepainter( 
 {
    "responsive":true,
    "svgData": pathObj3,
    "strokeWidth": 2,
    "strokeColor": "#392919"
}).lazylinepainter('paint');
$(".why__p").fadeIn(5000);
$(".why__h3").fadeIn(1500);
}
});



 

 
 

 

//Фейд-ин блока "Промо"
$(document).ready(function() {
    $('.main__h1').fadeIn(1500);
    $('.main__h2').fadeIn(1500)
});
//Фейд-ин блока "Почему лндинг"
 /*$('.why-landing').hover(function(){ 
      $(".why__h3").fadeIn(4500, function () {
        //$(".why__p").fadeIn(500);
      });
    });
*/
/*
$('.why-landing').viewportChecker({
    callbackFunction: function(elem, action){
    $(".why__p").fadeIn(5000);
}
});
*/





//Аккордеон блока "Вопросы"
$( "#popup1" ).click(function() {
  $( "#popup__text1" ).slideToggle( "slow", function() {
   
  });
});
$( "#popup2" ).click(function() {
  $( "#popup__text2" ).slideToggle( "slow", function() {
   
  });
});
$( "#popup3" ).click(function() {
  $( "#popup__text3" ).slideToggle( "slow", function() {
   
  });
});
//Скролл до нужного якоря (меню)
$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

//Модальное окно
$('.clients__confirmation').click(function(){
    event.preventDefault();
    $('.popup__float').fadeIn(1000);
});
$('.button-block__btn').click(function(){
    event.preventDefault();
    $('.popup__float').fadeIn(1000);
});

$('.float__right').click(function(){
    event.preventDefault();
    $('.popup__float').fadeOut(1000);
});
$('#open__form').click(function(){
    event.preventDefault();
    $('.popup__float').fadeIn(1000);
});

//Аякс форм
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "js/send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});

$(document).ready(function() {

	$("#popup__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "js/send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#popup__form").trigger("reset");
		});
		return false;
	});
	
});

//Анимашка
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $("#bounce__left__up").offset().top) 
            {
             setTimeout(function()
                {
                    $("#bounce__left__up").css({visibility:"visible"});
                    $("#bounce__right__up").css({visibility:"visible"});
                    $("#bounce__up").css({visibility:"visible"});
                    $("#bounce__left__up").delay(1000).eq(0).addClass('animated bounceInLeft');
                    $("#bounce__right__up").eq(0).delay(1000).addClass('animated bounceInRight');
                    $("#bounce__up").eq(0).delay(1000).addClass('animated bounceInDown');		
		        },1000);
            }
        if ( ($(this).scrollTop()+h) >= $("#bounce__left__up").offset().top) 
            {
            setTimeout(function()
                {
                    $("#bounce__left__down").css({visibility:"visible"});
                    $("#bounce__right__down").css({visibility:"visible"});
                    $("#bounce__left__down").eq(0).addClass('animated bounceInLeft');
                    $("#bounce__right__down").eq(0).addClass('animated bounceInRight');
                },1000);
            }
        if ( ($(this).scrollTop()+h) >= $(".team__person").offset().top) 
            {
             setTimeout(function()
                {
                    $(".team__person").css({visibility:"visible"});
                    //$("team__right").css({visibility:"visible"});
                    //$("team__center").css({visibility:"visible"});
                    $("#team__left").eq(0).addClass('animated bounceInLeft');
                    $("#team__right").eq(0).addClass('animated bounceInRight');
                    $("#team__center").eq(0).addClass('animated bounceInDown');
                },1000);
            }
        
        if ( ($(this).scrollTop()+h) >= $(".works").offset().top) {
			$(".ask_us__arrow-right").css({visibility:"visible"});
            $(".ask_us__arrow-left").css({visibility:"visible"});
            
			$("#lightSpeedIn__left").eq(0).addClass('animated lightSpeedIn');
            $("#lightSpeedIn__right").eq(0).addClass('animated lightSpeedIn');
		}
        
        if ( ($(this).scrollTop()+h) >= $("#tada1").offset().top) 
            {
                setTimeout(function()
                {
                    //$("#bounce__left").css({visibility:"visible"});
                    $("#tada1").eq(0).addClass('animated tada');
                },500);
            }
        if ( ($(this).scrollTop()+h) >= $("#tada2").offset().top) 
            {
                setTimeout(function()
                {
                    //$("#bounce__left").css({visibility:"visible"});
                    $("#tada2").eq(0).addClass('animated tada');
                },500);
            }
         if ( ($(this).scrollTop()+h) >= $("#why-us").offset().top) {
			$("#bounce__left").css({visibility:"visible"});
			$(".popup__back").css('display','block');
        }
        if ( ($(this).scrollTop()+h) >= $("#why-us").offset().top) {
			$("#bounce__left").css({visibility:"visible"});
			$(".popup__back").css('display','block');
        }
        if ( ($(this).scrollTop()+h) <= $("#why-us").offset().top) {
			$(".popup__back").css('display','none');
        }
      
    });


$(document).ready(function() {  

	
	$('.container__downer > ul > li:contains("Формирование УТП")').append('<div id="question__utp" class="li__shape"><p>?</p></div><div id="answer__utp" class="container__answers"><p>Уникальное торговое предложение - это способ рекламирования ваших услуг, который основан на конкретном, индивидуальном предложении для клиентов, тем самым привлекая их совершить покупку товаров или услуг.</p></div>');
	 
	 	$('.container__downer > ul > li:contains("Адаптивная верстка")').append('<div id="question__adaptive" class="li__shape"><p>?</p></div><div id="answer__adaptive" class="container__answers"><p>Это способ создания веб-страниц, которые будут отлично отображаться на различных устройствах, подключенных к сети интернет. Задачей адаптивной верстки является создание максимально доступного сайта.</p></div>');
		
		$('.container__downer > ul > li:contains("Система управления контентом")').append('<div id="question__cms" class="li__shape"><p>?</p></div><div id="answer__cms" class="container__answers"><p>Это система, которая управляет раздичным содержимым сайта, позволяя быстро изменять, добавлять и удалять различные тексты, картинки и другой контент. </p></div>');
		
		$('.container__downer > ul > li:contains("Системы аналитики")').append('<div id="question__analytics" class="li__shape"><p>?</p></div><div id="answer__analytics" class="container__answers"><p>Системы позволяют оцентивать посещаемость сайта и предсказывать поведение пользователей на нем.</p></div>');
		
		$('.container__downer > ul > li:contains("Мультилендинг")').append('<div id="question__multi" class="li__shape"><p>?</p></div><div id="answer__multi" class="container__answers"><p>Это лендинг на котором содержимое страницы меняется и подстраивается под конкретные поисковые запросы пользователя и использует возможности геолокации.</p></div>');
	
		
 });


//Вопрос-ответ
$(document).ready(function () {
$( "#tariff_start #question__utp" ).click(function() {
  $( "#tariff_start #answer__utp" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_premium #question__utp" ).click(function() {
  $( "#tariff_premium #answer__utp" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_standart #question__utp" ).click(function() {
  $( "#tariff_standart #answer__utp" ).slideToggle( "fast", function() {
   
  });
});


$( "#tariff_start #question__adaptive" ).click(function() {
  $( "#tariff_start #answer__adaptive" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_premium #question__adaptive" ).click(function() {
  $( "#tariff_premium #answer__adaptive" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_standart #question__adaptive" ).click(function() {
  $( "#tariff_standart #answer__adaptive" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_start #question__cms" ).click(function() {
  $( "#tariff_start #answer__cms" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_premium #question__cms" ).click(function() {
  $( "#tariff_premium #answer__cms" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_standart #question__cms" ).click(function() {
  $( "#tariff_standart #answer__cms" ).slideToggle( "fast", function() {
   
  });
});

$( "#tariff_start #question__analytics" ).click(function() {
  $( "#tariff_start #answer__analytics" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_premium #question__analytics" ).click(function() {
  $( "#tariff_premium #answer__analytics" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_standart #question__analytics" ).click(function() {
  $( "#tariff_standart #answer__analytics" ).slideToggle( "fast", function() {
   
  });
});
$( "#tariff_premium #question__multi" ).click(function() {
  $( "#tariff_premium #answer__multi" ).slideToggle( "fast", function() { 
  });
});

$( "#tariff_standart #question__multi" ).click(function() {
  $( "#tariff_standart #answer__multi" ).slideToggle( "fast", function() { 
  });
});

});

$(document).ready(function() {  
	$(".container__downer > ul > li:even").addClass("li--highlited"); // Добавляет класс "li--highlited" всем нечетным элементам списка
	$(".container__downer > ul > li:last").removeClass("li--highlited"); // Удаляет класс "li--highlited" последнему элементу списка		
 });

