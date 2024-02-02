$(function(){

// 홈페이지 진입시 애니메이션 작동
$('.main').addClass('on');
setTimeout(function(){
    $('.designLogo').addClass('on');
    $('.info').addClass('on');
    $('header').addClass('on');
},2200)

// 윈도우가 리사이징됐을 때 윈도우에 높이를 찾은 다음 높잇값을 변경
$(window).resize(function(){
    // 새로운 윈도우 높이 얻기
    var newHeight = $(window).height();
    console.log(newHeight);
    
    // 변경된 높이를 #content에 적용
    $("article").height(newHeight);
});

// 스크롤했을 때 메뉴 변경
let a = $("article").height();

$(window).scroll(function() {
    let sc = $(this).scrollTop();
    $('.scroll h2').text(sc);

    if (sc>=0*a) {
        $('header li:nth-child(1)').addClass('on');
        $('header li:nth-child(2)').removeClass('on');
        $('header li:nth-child(3)').removeClass('on');
        $('header li:nth-child(4)').removeClass('on');
    } else {
        $('header li:nth-child(1)').removeClass('on');
    }

    if (sc>=1*a) {
        $('header li:nth-child(2)').addClass('on');
        $('header li:nth-child(1)').removeClass('on');
        $('header li:nth-child(3)').removeClass('on');
        $('header li:nth-child(4)').removeClass('on');
    } else {
        $('header li:nth-child(2)').removeClass('on');
    }

    if (sc>=2*a) {
        $('header li:nth-child(3)').addClass('on');
        $('header li:nth-child(1)').removeClass('on');
        $('header li:nth-child(2)').removeClass('on');
        $('header li:nth-child(4)').removeClass('on');
    } else {
        $('header li:nth-child(3)').removeClass('on');
    }

    if (sc>=3*a) {
        $('header li:nth-child(4)').addClass('on');
        $('header li:nth-child(1)').removeClass('on');
        $('header li:nth-child(2)').removeClass('on');
        $('header li:nth-child(3)').removeClass('on');
    } else {
        $('header li:nth-child(4)').removeClass('on');
    }
});

// header li 클릭했을 때, 맞는 화면 보이기
$('header li:nth-child(1)').click(function(){
    $('html,body').stop().animate({'scrollTop': 0}, 2000, 'easeOutBounce')
})

// profile 화면 보이기
$('header li:nth-child(2)').click(function(){
    $('html,body').stop().animate({'scrollTop': 1*a}, 2000, 'easeOutBounce')
})
$('.main .info img:nth-child(2)').click(function(){
    $('html,body').stop().animate({'scrollTop': 1*a}, 2000, 'easeOutBounce')
    $('header li:nth-child(2)').addClass('on');
    $('header li:nth-child(1)').removeClass('on');
    $('header li:nth-child(3)').removeClass('on');
    $('header li:nth-child(4)').removeClass('on');
})

// design 화면 보이기
$('header li:nth-child(3)').click(function(){
    $('html,body').stop().animate({'scrollTop': 2*a}, 2000, 'easeOutBounce')
})
$('.designLogo').click(function(){
    $('html,body').stop().animate({'scrollTop': 2*a}, 2000, 'easeOutBounce');
    $('header li:nth-child(3)').addClass('on');
    $('header li:nth-child(1)').removeClass('on');
    $('header li:nth-child(2)').removeClass('on');
    $('header li:nth-child(4)').removeClass('on');
})

// publishing 화면 보이기
$('header li:nth-child(4)').click(function(){
    $('html,body').stop().animate({'scrollTop': 3*a}, 2000, 'easeOutBounce')
})
$('.main .info img:nth-child(1)').click(function(){
    $('html,body').stop().animate({'scrollTop': 3*a}, 2000, 'easeOutBounce')
    $('header li:nth-child(4)').addClass('on');
    $('header li:nth-child(1)').removeClass('on');
    $('header li:nth-child(2)').removeClass('on');
    $('header li:nth-child(3)').removeClass('on');
})

// header li 클릭시 Bold 처리
$('header ul li').click(function(){
        
    // 클릭한 나 자신의 순번을 변수로 지정
    var menu = $(this).index();
    // 찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기

    $('header li').removeClass('on');
    $('header li').eq(menu).addClass('on');
})


// design> graphic 디자인 리스트 클릭시 화면 맞게 보이게
    // graphic>knotehow
    $('.graphic .first-co').click(function(){
        $('.detailBox').css('pointer-events','auto');
        $('.knote').css('pointer-events','auto');
        $('.knote').addClass('on');
        $('.detailBox .back').addClass('on');
    })

    // graphic > paradis
    $('.graphic .second-co').click(function(){
        $('.detailBox').css('pointer-events','auto');
        $('.paradis').css('pointer-events','auto');
        $('.paradis').addClass('on');
        $('.detailBox .back').addClass('on');
    })

    // graphic > beyond
    $('.graphic .third-co').click(function(){
        $('.detailBox').css('pointer-events','auto');
        $('.beyond').css('pointer-events','auto');
        $('.beyond').addClass('on');
        $('.detailBox .back').addClass('on');
    })

    // ci > 감귤박물관 로고
    $('.ci .first-co').click(function(){
        $('.detailBox').css('pointer-events','auto');
        $('.citrus-ci').css('pointer-events','auto');
        $('.citrus-ci').addClass('on');
        $('.detailBox .back').addClass('on');
    })

    // character > 노리 & 하리
    $('.character .first-co').click(function(){
        $('.detailBox').css('pointer-events','auto');
        $('.nori').css('pointer-events','auto');
        $('.nori').addClass('on');
        $('.detailBox .back').addClass('on');
    })

    $('.detailBox .back').click(function(){
        $('.detailBox').css('pointer-events','none');
        $('.detailBox>div').css('pointer-events','none');
        $('.detailBox>div').removeClass('on');
        $('.detailBox .back').removeClass('on');
    })


// design 내부 이미지 자동 슬라이드
    // knoteHOW, paradis, beyond
    let knote = 0;
    setInterval(function(){
        knote++;
        if(knote==6)knote=0

        $('.knote .imgBox>img').eq(knote-1).css({'left':0}).stop().animate({'left':'-100%'},2000)
        $('.knote .imgBox>img').eq(knote).css({'left':'100%'}).stop().animate({'left':0},2000)
        $('.paradis .imgBox>img').eq(knote-1).css({'left':0}).stop().animate({'left':'-100%'},2000)
        $('.paradis .imgBox>img').eq(knote).css({'left':'100%'}).stop().animate({'left':0},2000)
        $('.beyond .imgBox>img').eq(knote-1).css({'left':0}).stop().animate({'left':'-100%'},2000)
        $('.beyond .imgBox>img').eq(knote).css({'left':'100%'}).stop().animate({'left':0},2000)
    } ,4000)

    // 감귤박물관 로고
    let logo = 0;
    setInterval(function(){
        logo++;
        if(logo==3)logo=0

        $('.citrus-ci .imgBox>img').eq(logo-1).css({'left':0}).stop().animate({'left':'-100%'},2000)
        $('.citrus-ci .imgBox>img').eq(logo).css({'left':'100%'}).stop().animate({'left':0},2000)

    } ,4000)

    // 노리&하리
    let nori = 0;
    setInterval(function(){
        nori++;
        if(nori==9)nori=0

        $('.nori .imgBox>img').eq(nori-1).css({'left':0}).stop().animate({'left':'-100%'},2000)
        $('.nori .imgBox>img').eq(nori).css({'left':'100%'}).stop().animate({'left':0},2000)

    } ,4000)


// conceptView 클릭했을 때 맞는 화면 나오기

    // 감귤박물관 페이지
    $('.citrus .btn-CV').click(function(){
        $('.conceptView .citrus-CV').addClass('on');
        $('.pub .conceptView').addClass('on');
        $('body').addClass('on');
    })

    // 로지텍 페이지
    $('.logi .btn-CV').click(function(){
        $('.conceptView .logi-CV').addClass('on');
        $('.pub .conceptView').addClass('on');
        $('body').addClass('on');
    })

    // 태연 팬페이지
    $('.ty .btn-CV').click(function(){
        $('.conceptView .ty-CV').addClass('on');
        $('.pub .conceptView').addClass('on');
        $('body').addClass('on');
    })

    // X 아이콘 클릭시 conceptView 팝업창 닫기
    $('.pub .conceptView i').click(function(){
        $('.conceptView .citrus-CV').removeClass('on');
        $('.conceptView .logi-CV').removeClass('on');
        $('.conceptView .ty-CV').removeClass('on');
        $('.pub .conceptView').removeClass('on');
        $('body').removeClass('on');
    })
});