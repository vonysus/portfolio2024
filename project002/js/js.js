$(function(){

    
    // 스크롤 애니메이션
    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        // $('.scroll h2').text(sc);
        // console.log(sc);

        if(sc>=500) {
            $('.box3-imgBox .imgBox1').addClass('on')
        } else {
            $('.box3-imgBox .imgBox1').removeClass('on')
        }

        if(sc>=1600) {
            $('.box4').addClass('on')
        } else {
            $('.box4').removeClass('on')
        }

        if(sc>=2800) {
            $('.box6').addClass('on')
        } else {
            $('.box6').removeClass('on')
        }

        if(sc>=3400) {
            $('.box7').addClass('on')
        } else {
            $('.box7').removeClass('on')
        }
    })


    // box2 hero
    let slide = 0
    $('.box2 .left').click(function(){
        console.log(slide)
        $('.box2 .slide>div').eq(slide).removeClass('on')
        slide++
        if(slide==3)slide=0
        $('.box2 .slide>div').eq(slide).addClass('on')
    })

    $('.box2 .right').click(function(){
        console.log(slide)
        $('.box2 .slide>div').eq(slide).removeClass('on')
        slide--
        if(slide<0)slide=2
        $('.box2 .slide>div').eq(slide).addClass('on')
    })

    // box2 hero 자동 슬라이드 설정
    let slideSection = setInterval(function(){

        $('.box2 .left').trigger('click')
    }, 3000)

    $('.box2').mouseenter(function(){
        clearInterval(slideSection)
    })

    $('.box2').mouseleave(function(){
        slideSection = setInterval(function(){

        $('.box2 .left').trigger('click')
        }, 3000)
    })

    
    // box3

    $('.box3 .listBox li').click(function(){

        var i = $(this).index();
        console.log(i);

        $('.box3-imgBox>div').css({'opacity':'0'});
        $('.box3-imgBox>div').eq(i).css({'opacity':'1'});

        $('.box3 .listBox li').removeClass('on');
        $(this).addClass('on');

        $('.box3-imgBox>div').removeClass('on');
        $('.box3-imgBox>div').eq(i).addClass('on');
    });

    // box5 설정
    // 이미지 자동 슬라이드
    let box5 = 0;
    setInterval(function(){
        box5++;
        if(box5==3)box5=0;
        $('.box5-inner .imgBox li').removeClass('on');
        $('.box5-inner .imgBox li').eq(box5).addClass('on');
        $('.box5-inner .listBox li').removeClass('on');
        $('.box5-inner .listBox li').eq(box5).addClass('on');
    } ,3000)

})