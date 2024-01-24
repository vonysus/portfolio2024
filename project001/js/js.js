$(function(){

    // 스크롤 애니메이션
    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        // $('.scroll h4').text(sc);
        // console.log(sc);

        if (sc>=100) {
            $('.box3-inner').addClass('on');
        } else {
            $('.box3-inner').removeClass('on');
        }

        if (sc>=1080) {
            $('.box4').addClass('on');
            $('.box4-inner').addClass('on');
        } else {
            $('.box4').removeClass('on');
            $('.box4-inner').removeClass('on');
        }

        if (sc>=1720) {
            $('.box5').addClass('on');
            $('.box5-inner').addClass('on');
        } else {
            $('.box5').removeClass('on');
            $('.box5-inner').removeClass('on');
        }

        if (sc>=2350) {
            $('.box6').addClass('on');
            $('.box6-inner').addClass('on');
        } else {
            $('.box6').removeClass('on');
            $('.box6-inner').removeClass('on');
        }

        if (sc>=3050) {
            $('.box7').addClass('on');
            $('.box7-inner').addClass('on');
        } else {
            $('.box7').removeClass('on');
            $('.box7-inner').removeClass('on');
        }

        if (sc>=3500) {
            $('.box8').addClass('on');
            $('.box8-inner').addClass('on');
        } else {
            $('.box8').removeClass('on');
            $('.box8-inner').removeClass('on');
        }

        if (sc>=4050) {
            $('.box9').addClass('on');
            $('.box9-inner').addClass('on');
        } else {
            $('.box9').removeClass('on');
            $('.box9-inner').removeClass('on');
        }
        

    })





    // box2 이미지 자동 슬라이드
    let box2 = 0;
    setInterval(function(){
        box2++;
        if(box2==4)box2=0

        $('.box2 .slide>img').eq(box2-1).css({'left':0}).stop().animate({'left':'-100%'},3000)
        $('.box2 .slide>img').eq(box2).css({'left':'100%'}).stop().animate({'left':0},3000)
    } ,6000)
    
    var box3 = $(this).index()
    // box3 설정
    $('.box3-inner .titleBox li').click(function(){
        
        // 클릭한 나 자신의 순번을 변수로 지정
        var box3_inner = $(this).index()
        // console에 확인하기
        console.log(box3_inner)
        // 찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기
        $('.box3-inner .container>div').css({'display':'none'})
        $('.box3-inner .container>div').eq(box3_inner).css({'display':'block'})

        $('.box3-inner .titleBox li').removeClass('on')
        // 클릭한 나 자신에게 class 'on' 값 더하기
        $(this).addClass('on')
    })

    // box3 이미지 슬라이드
        // box3-1
        // left
    var next = 0;
        $('.box3 .container .box3-1').eq(box3).find('.left').click(function(){
            next--;
            if(next==-1) next=2;
            
            console.log(next)
            $('.box3 .container .box3-1 .imgBox li').fadeOut()
            $('.box3 .container .box3-1 .imgBox li').eq(next).fadeIn()
            });

        // right
        $('.box3 .container .box3-1').eq(box3).find('.right').click(function(){
            next++;
            if(next==3) next=0;
            
            console.log(next)
            $('.box3 .container .box3-1 .imgBox li').fadeOut()
            $('.box3 .container .box3-1 .imgBox li').eq(next).fadeIn()
        });

        // box3-2
        // left
        var aa = 0;
        $('.box3 .container .box3-2').eq(box3).find('.left').click(function(){
            aa--;
            if(aa==-1) aa=3;
            
            console.log(aa)
            $('.box3 .container .box3-2 .imgBox li').fadeOut()
            $('.box3 .container .box3-2 .imgBox li').eq(aa).fadeIn()
        });

        // right
        $('.box3 .container .box3-2').eq(box3).find('.right').click(function(){
            aa++;
            if(aa==4) aa=0;
            
            console.log(aa)
            $('.box3 .container .box3-2 .imgBox li').fadeOut()
            $('.box3 .container .box3-2 .imgBox li').eq(aa).fadeIn()
        });

        // box3-3
        // left
        var bb = 0;
        $('.box3 .container .box3-3').eq(box3).find('.left').click(function(){
            bb--;
            if(bb==-1) bb=3;
            
            console.log(bb)
            $('.box3 .container .box3-3 .imgBox li').fadeOut()
            $('.box3 .container .box3-3 .imgBox li').eq(bb).fadeIn()
        });

        // right
        $('.box3 .container .box3-3').eq(box3).find('.right').click(function(){
            bb++;
            if(bb==4) bb=0;
            
            console.log(bb)
            $('.box3 .container .box3-3 .imgBox li').fadeOut()
            $('.box3 .container .box3-3 .imgBox li').eq(bb).fadeIn()
        });

        // box3-4
        // left
        var cc = 0;
        $('.box3 .container .box3-4').eq(box3).find('.left').click(function(){
            cc--;
            if(cc==-1) cc=3;
            
            console.log(cc)
            $('.box3 .container .box3-4 .imgBox li').fadeOut()
            $('.box3 .container .box3-4 .imgBox li').eq(cc).fadeIn()
        });

        // right
        $('.box3 .container .box3-4').eq(box3).find('.right').click(function(){
            cc++;
            if(cc==4) cc=0;
            
            console.log(cc)
            $('.box3 .container .box3-4 .imgBox li').fadeOut()
            $('.box3 .container .box3-4 .imgBox li').eq(cc).fadeIn()
        });
        

        // box4 설정 (다양한 체험 예약하기)
    
        $('.box4-2 .titleBox li').click(function(){
            // 이미지 변경
            var box4 = $(this).index()
            console.log(box4)

            $('.box4-inner .box4-1 .imgBox img').fadeOut()
            $('.box4-inner .box4-1 .imgBox img').eq(box4).fadeIn()

            $('.box4-2 .titleBox li').removeClass('on')
            $(this).addClass('on')

            // 체험 값 불러오기
            var ex = $(this).text()
            $('.check .txtBox strong').text(ex)
            $('.check .txtBox strong').css({'display':'inline-block'})
        });

        // box4 값 불러오기
        // 날짜 값 불러오기
        $('.date li p').click(function(){

            var date = $(this).text()
            $('.check .txtBox .day').text(date)
            $('.check .txtBox .show-1').css({'display':'inline-block'})

            $('.box4-2 .book .date li p').removeClass('on')
            $(this).addClass('on')
        })

        // 오전 시간 값 불러오기
        $('.book-1 .time span').click(function(){

            var mTime = $(this).text()
            $('.check .txtBox .mTime').text("\u00a0"+mTime)
            $('.check .txtBox .show-2').css({'display':'inline-block'})

            $('.box4-2 .book .book-1 .time span').removeClass('on')
            $(this).addClass('on')
        })

        // 인원 +- 하기
        var innum = $('.input-1').val()
        var per = innum
        
        $('.minus').click(function(){

            if(per>2) per--;
            console.log(per)
            $('.input-1').val(per)
        })
        

        $('.plus').click(function(){
            if(2<per, per<10) per++;

            console.log(per)
            $('.input-1').val(per)

            if(per==10)
            {alert('최대 10명까지 예약 가능합니다.')}
        })

        // 인원 값 불러오기
        // minus
        $('.minus').click(function(){

            var person = $('.input-1').val()
            $('.check .txtBox .person').text(person)
            $('.check .txtBox .show-3').css({'display':'inline-block'})
        })
        // plus
        $('.plus').click(function(){

            var person = $('.input-1').val()
            $('.check .txtBox .person').text(person)
            $('.check .txtBox .show-3').css({'display':'inline-block'})
        })

        // 예약확인알림창
        $('.box4 .check .btn').click(function(){
            let programName = $('.box4-2 .titleBox li.on').text();
            let programDate = $('.date li p.on').text();
            let programPeople = $('.input-1').val();
            let programMTime = $('.book-1 .time span.on').text();
            
            $('.reserve_check article li').eq(0).find('span').text(programName);
            $('.reserve_check article li').eq(1).find('span').text('2024년 01월 '+programDate+'일');
            $('.reserve_check article li').eq(2).find('span').text(programPeople+'명');
            $('.reserve_check article li').eq(3).find('span').text(programMTime);


            $('.reserve_check').addClass('on');
            $('body').addClass('fix');
        })

        $('.reserve_check article p').click(function(){
            $('.reserve_check').removeClass('on');
            $('body').removeClass('fix');
        })






        // // box8 설정 (이미지 슬라이드 - 자바스크립트 활용)
        // let roller1 = document.querySelector('.rolling-list');
        // roller1.id = 'roller1';

        // let clone = roller1.cloneNode(true);
        // clone.id = 'roller2';
        // document.querySelector('.wrap').appendChild(clone);

        // document.querySelector('#roller1').style.left = '0px';
        // document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';

        // roller1.classList.add('original');
        // clone.classList.add('clone');




            // box7 설정 (커뮤니티)
            $('.box7-1 .titleBox li').click(function(){

            var box7 = $(this).index()
            console.log(box7)

            $('.box7-1 .listBox div').fadeOut()
            $('.box7-1 .listBox div').eq(box7).fadeIn()

            $('.box7-1 .titleBox li').removeClass('on')
            $(this).addClass('on')
            });

            // box8 무한 롤링 배너 설정

        })    