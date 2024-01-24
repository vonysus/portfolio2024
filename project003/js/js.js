$(function(){

     // 홈페이지 진입시 애니메이션 바로 되게
        $('article').removeClass('on');
        $('article').eq(0).addClass('on'); 
        $('.frame').addClass('on');

    // 메뉴 클릭시 맞는 화면 보이기
    $('header ul li').click(function(){
        
        // 클릭한 나 자신의 순번을 변수로 지정
        var menu = $(this).index();
        // 찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기

        $('article').removeClass('on');
        $('article').eq(menu).addClass('on');

        $('.frame').removeClass('on');
        $('.frame').addClass('on');

        $('header li').removeClass('on');
        $('header li').eq(menu).addClass('on');

        $('.box .bg>div').removeClass('on');
        $('.box .bg>div').eq(menu).addClass('on');
    })

    $('header li:nth-child(1)').click(function(){
        $('header').css('border', '1px solid #C7A3B1');
        $('.frame').css('border', '1px solid #C7A3B1');
        $('.frame .bg').css('background-color', '#C7A3B1');
        $('.radius').css('background-image', 'url(img/01.main/bg.jpg)');
        $('.radius').css('background-position', '5% 60%');
    });

    $('header li:nth-child(2)').click(function(){
        $('header').css('border', '1px solid #03171B');
        $('.frame').css('border', '1px solid #03171B');
        $('.frame .bg').css('background-color', '#03171B');
        $('.radius').css('background-image', 'url(img/02.profile/bg.png)')
        $('.radius').css('background-size', '100%');
        $('.radius').css('background-position', 'left 300% top 39%');
        $('.profile').scrollTop(0);
    });

    $('header li:nth-child(3)').click(function(){
        $('header').css('border', '1px solid #7790C9');
        $('.frame').css('border', '1px solid #7790C9');
        $('.frame .bg').css('background-color', '#7790C9');
        $('.radius').css('background-image', 'none')
        $('.radius').css('background-color', '#2A2D33')
    });

    $('header li:nth-child(4)').click(function(){
        $('header').css('border', '1px solid #fff');
        $('.frame').css('border', '1px solid #fff');
        $('.frame .bg').css('background-color', '#fff');
        $('.radius').css('background-image', 'none')
        $('.radius').css('background-color', '#000')
    });

 // 프로필 이미지 자동 변경
let a = 0;
setInterval(function(){
    a++;
    if(a==3)a=0;
    $('.profile .list>div img').removeClass('on');
    $('.profile .list>div img').eq(a).addClass('on');
    $('.profile .second .ty img').removeClass('on');
    $('.profile .second .ty img').eq(a).addClass('on');
    
},2000);

$('.profile .click').click(function(){
    $('.profile').animate({scrollTop: 1190}, 2000)
});

// 브랜드 카드 설정

    // 브랜드 내부 메뉴 클릭시 순서에 맞는 카드 보이게
    $('.brand .list li').click(function(){
        
        // 클릭한 나 자신의 순번을 변수로 지정
        var brand = $(this).index();
        console.log(brand);
        // 찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기

        $('.brandList>div').removeClass('on');
        $('.brandList>div').eq(brand).addClass('on');

        $('.brand .list li').removeClass('on');
        $('.brand .list li').eq(brand).addClass('on');

        $('brandList>div').removeClass('on');
        $('brandList>div').eq(brand).addClass('on');

    })

    // 브랜드 내부 메뉴 별로 프레임, 메뉴 색상 변하게
    $('.brand .list li:nth-child(1)').click(function(){
        $('header').css('border', '1px solid #7790C9');
        $('.frame').css('border', '1px solid #7790C9');
        $('.frame .bg').css('background-color', '#7790C9');
        $('.brand .list li:nth-child(1)').css('color', '#7790C9');
        $('.brand .list li:nth-child(2)').css('color', '#fff');
        $('.brand .list li:nth-child(3)').css('color', '#fff');
    })

    $('.brand .list li:nth-child(2)').click(function(){
        $('header').css('border', '1px solid #E895BD');
        $('.frame').css('border', '1px solid #E895BD');
        $('.frame .bg').css('background-color', '#E895BD');
        $('.brand .list li:nth-child(2)').css('color', '#E895BD');
        $('.brand .list li:nth-child(1)').css('color', '#fff');
        $('.brand .list li:nth-child(3)').css('color', '#fff');
    })

    $('.brand .list li:nth-child(3)').click(function(){
        $('header').css('border', '1px solid #A285CC');
        $('.frame').css('border', '1px solid #A285CC');
        $('.frame .bg').css('background-color', '#A285CC');
        $('.brand .list li:nth-child(3)').css('color', '#A285CC');
        $('.brand .list li:nth-child(1)').css('color', '#fff');
        $('.brand .list li:nth-child(2)').css('color', '#fff');
    })

    // 카드 클릭시 돌아가면서 사진 보이게
    
    $('.lv .card>div').click(function(){
        var lvcard = $(this).index();
        $('.lv .card>div').removeClass('on');
        $('.lv .card>div').eq(lvcard).addClass('on');
        $('.lv .card>div p').eq(lvcard).css('display', 'none');
    })

    $('.benefit .card>div').click(function(){
        var bfcard = $(this).index();
        $('.benefit .card>div').removeClass('on');
        $('.benefit .card>div').eq(bfcard).addClass('on');
    })

    $('.nerdy .card>div').click(function(){
        var ndcard = $(this).index();
        $('.nerdy .card>div').removeClass('on');
        $('.nerdy .card>div').eq(ndcard).addClass('on');
    })

    // albums 설정
    $('.albums .list li').click(function(){
        let albums = $(this).index();
        $('.albums .list li').removeClass('on');
        $('.albums .list li').eq(albums).addClass('on');

        $('.albums .video>video').removeClass('on');
        $('.albums .video>video').eq(albums).addClass('on');
    })

    // 앨범 리스트별로 프레임 색상 변경
    $('.albums .list li:nth-child(1)').click(function(){
        $('header').css('border', '1px solid #fff');
        $('.frame').css('border', '1px solid #fff');
        $('.frame .bg').css('background-color', '#fff');
    })

    $('.albums .list li:nth-child(2)').click(function(){
        $('header').css('border', '1px solid #7790C9');
        $('.frame').css('border', '1px solid #7790C9');
        $('.frame .bg').css('background-color', '#7790C9');
    })

    $('.albums .list li:nth-child(3)').click(function(){
        $('header').css('border', '1px solid #C7A3B1');
        $('.frame').css('border', '1px solid #C7A3B1');
        $('.frame .bg').css('background-color', '#C7A3B1');
    })

    $('.albums .list li:nth-child(4)').click(function(){
        $('header').css('border', '1px solid #C25D0B');
        $('.frame').css('border', '1px solid #C25D0B');
        $('.frame .bg').css('background-color', '#C25D0B');
    })

})

