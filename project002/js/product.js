$(function(){

    // 스크롤 애니메이션
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        // $('.scroll h2').text(sc);
        // console.log(sc)

        
        // box4 이미지
        if(sc >= 400) {
            $('.box4 .txtBox').addClass('on');
            $('.box4 .imgBox').addClass('on');

        } else {
            $('.box4 .txtBox').removeClass('on');
            $('.box4 .imgBox').removeClass('on');
        }

        // box6 설정
        if(sc >= 2000) {
            $('.box6 .txtBox .h2Box h2').addClass('on');
            $('.box6 .txtBox p').addClass('on');
            $('.box6 .imgBox .keyboard').addClass('on');
            $('.box6 .imgBox .cable').addClass('on');
        } else {
            $('.box6 .txtBox .h2Box h2').removeClass('on');
            $('.box6 .txtBox p').removeClass('on');
            $('.box6 .imgBox .keyboard').removeClass('on');
            $('.box6 .imgBox .cable').removeClass('on');
        }
    });
    
    // box2 설정
    // box2 찜 버튼
    $('.box2 .txtBox .btn .heart i:nth-child(1)').click(function(){
        $('.box2 .txtBox .btn .heart i:nth-child(1)').css({'display':'none'})
        $('.box2 .txtBox .btn .heart i:nth-child(2)').css({'display':'block'})
        $('.box2 .txtBox .btn .heart i:nth-child(2)').css({'opacity':'1'})
    })
    $('.box2 .txtBox .btn .heart i:nth-child(2)').click(function(){
        $('.box2 .txtBox .btn .heart i:nth-child(2)').css({'display':'none'})
        $('.box2 .txtBox .btn .heart i:nth-child(1)').css({'display':'block'})
        $('.box2 .txtBox .btn .heart i:nth-child(1)').css({'opacity':'1'})
    })

    // box2 장바구니 버튼
    $('.box2 .txtBox .btn .bag i:nth-child(1)').click(function(){
        $('.box2 .txtBox .btn .bag i:nth-child(1)').css({'display':'none'})
        $('.box2 .txtBox .btn .bag i:nth-child(2)').css({'display':'block'})
        $('.box2 .txtBox .btn .bag i:nth-child(2)').css({'opacity':'1'})
    })
    $('.box2 .txtBox .btn .bag i:nth-child(2)').click(function(){
        $('.box2 .txtBox .btn .bag i:nth-child(2)').css({'display':'none'})
        $('.box2 .txtBox .btn .bag i:nth-child(1)').css({'display':'block'})
        $('.box2 .txtBox .btn .bag i:nth-child(1)').css({'opacity':'1'})
    })

    // box2의 컬러 선택했을 때 .box3에서 선택한 컬러 제품 사진 나오게
    $('.box2 .optionBox .color>div').click(function(){

        let i = $(this).index();
        console.log(i)
        $('.box3-inner>div').removeClass('on');
        $('.box3-inner>div').eq(i).addClass('on');
    })

    // 수량 버튼 설정

    let order = parseInt($('.count .num span').data('value'));

    // minus 설정
    $('.count .minus').click(function(){
        if(order > 1) {
            order--;
            $('.count .num span').text(order);
            let price = order*200000
            $('.box2 .price').text(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원');
            
        }
    });
    
    // plus 설정
    $('.count .plus').click(function(){
        let maxValue = 100; // 변경 가능한 최대 값 설정
        if(order < maxValue) {
            order++;
            $('.count .num span').text(order);
            let price = order*200000
            $('.box2 .price').text(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원');
        }
    });

    // 가격 값 불러오기


    // box3 설정
    $('.box3-inner .trailer li').click(function(){
        let box3i = $(this).index();
        console.log(box3i)
        
        //box3 gallery 설정 
        $('.box3-1 .gallery li').removeClass('on');
        $('.box3-1 .gallery li').eq(box3i).addClass('on');

        $('.box3-2 .gallery li').removeClass('on');
        $('.box3-2 .gallery li').eq(box3i).addClass('on');

        $('.box3-3 .gallery li').removeClass('on');
        $('.box3-3 .gallery li').eq(box3i).addClass('on');

        // box3 trailer 설정
        $('.box3-1 .trailer li').removeClass('on');
        $('.box3-1 .trailer li').eq(box3i).addClass('on')

        $('.box3-2 .trailer li').removeClass('on');
        $('.box3-2 .trailer li').eq(box3i).addClass('on')

        $('.box3-3 .trailer li').removeClass('on');
        $('.box3-3 .trailer li').eq(box3i).addClass('on')
    })

    // box4 이미지 자동 변경
    let a = 0;
    let box4img = setInterval(function(){
        a++;
        if(a==3)a=0;
        $('.box4 img').removeClass('on');
        $('.box4 img').eq(a).addClass('on');
    },2000);

    // box5 이미지 자동 변경
    let b = 0;
        setInterval(function(){
            b++;
            if(b==2)b=0;
            $('.box5 .bg img').removeClass('on');
            $('.box5 .bg img').eq(b).addClass('on');
            $('.box5 .txtBox h2').removeClass('on');
            $('.box5 .txtBox h2').eq(b).addClass('on');
        } ,3000);
})
