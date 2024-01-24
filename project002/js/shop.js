$(function(){
    // 스크롤 애니메이션
    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        // $('.scroll h2').text(sc);
        // console.log(sc);

        if(sc>=500) {
            $('.box3-3-inner .imgBox img:nth-child(1)').addClass('on')
            $('.box3-3-inner .imgBox img:nth-child(2)').addClass('on')
            $('.box3-3-inner h2').addClass('on')
        } else {
            $('.box3-3-inner .imgBox img:nth-child(1)').removeClass('on')
            $('.box3-3-inner .imgBox img:nth-child(2)').removeClass('on')
            $('.box3-3-inner h2').removeClass('on')
        }
    })

    // box2 자동 슬라이드 설정
    let box2 = 0;
    setInterval(function(){
        box2++;
        if(box2==3)box2=0

        $('.box2>div').eq(box2-1).css({'left':0}).stop().animate({'left':'-100%'},3000)
        $('.box2>div').eq(box2).css({'left':'100%'}).stop().animate({'left':0},3000)
    } ,6000)

    // 찜버튼 설정
    let heart = 0;
    $('.box3-2 li .option .heart i').click(function(){
        if(heart==0){
        $(this).removeClass('ri-heart-3-line');
        $(this).addClass('ri-heart-3-fill');
        heart++;
        } else {
            $(this).removeClass('ri-heart-3-fill');
            $(this).addClass('ri-heart-3-line');
            heart--;
        }
    })

    // 장바구니버튼 설정
    let bag = 0;
    $('.box3-2 li .option .bag i').click(function(){
        if(heart==0){
        $(this).removeClass('ri-shopping-bag-line');
        $(this).addClass('ri-shopping-bag-fill');
        heart++;
        } else {
            $(this).removeClass('ri-shopping-bag-fill');
            $(this).addClass('ri-shopping-bag-line');
            heart--;
        }
    })

    let count= 0;
    $('.option').find('.bag').click(function(e){
        e.preventDefault()

        count++;
        console.log(count)

        let plus = $('.bag i').attr('class');
        console.log(plus);

        $('.util').find('span').text(count);
        let t = $(this).parents('li').find('h3').text()
        console.log(t)
        let p = $(this).parents('li').find('.imgBox').html()
        let p2 = '<p>'+p+'</p>'+'<p>'+t+'</p>';
        // + '<p class ="plus">+</p><span>00</span><p class="minus">-</p>';
        // let p3 = '<li>' + p2 + '</li>'
    
        $('.popup').find('span').text(count)
        $('.popup section').find('div').append(p2)
    })

    $('.util p').eq(1).click(function(){
        $('.popup').css({'display':'flex'})
        $('body').addClass('on');
    });

    $('.close').click(function(){
        $('.popup').css({'display':'none'})
    })

    // empty를 클릭했을때 shop section div 내용을 지워라
    // shop span의 변수값을 0으로 바꿔라

    $('.empty').click(function(){
        count = 0;
        $('.popup').find('span').text(count);
        $('.util').find('span').text(count);
        // $('.popup section').find('div').html('');
        $('.popup section').find('div').empty();
    })
})