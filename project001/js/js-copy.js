// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){
    var next = 0;

            // box3 설정
            $('.box3-inner .titleBox li').click(function(){
            // 클릭한 나 자신의 순번을 변수로 지정
            var box3 = $(this).index()
            // console에 확인하기
            console.log(box3)
            // 찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기
            $('.box3-inner .container-box>div').css({'display':'none'})
            $('.box3-inner .container-box>div').eq(box3).css({'display':'block'})

            $('.box3-inner .titleBox li').removeClass('on')
            // 클릭한 나 자신에게 class 'on' 값 더하기
            $(this).addClass('on')

            // box3 이미지 슬라이드
            // box3-1
            // left
            $('.box3 .container .arrow').eq(box3).find('.left').click(function(){
            next--;
            if(next==-1) next=3;
            
            console.log(next)
            $('.box3 .container-box .imgBox li').css({'display':'none'})
            $('.box3 .container-box .imgBox li').eq(next).css({'display':'block'})
            });

            // right
            $('.box3 .container .arrow').eq(box3).find('.right').click(function(){
            next++;
            if(next==4) next=0;
                
            console.log(next)
            $('.box3 .container-box .imgBox li').css({'display':'none'})
            $('.box3 .container-box .imgBox li').eq(next).css({'display':'block'})
            });
        })

            // box4 설정 (다양한 체험 예약하기)
            $('.box4-2 .titleBox li').click(function(){

            var box4 = $(this).index()
            console.log(box4)

            $('.box4-inner .box4-1 .imgBox img').css({'display':'none'})
            $('.box4-inner .box4-1 .imgBox img').eq(box4).css({'display':'block'})

            $('.box4-2 .titleBox li').removeClass('on')
            $(this).addClass('on')
            });

            // box7 설정 (커뮤니티)
            $('.box7-1 .titleBox li').click(function(){

            var box7 = $(this).index()
            console.log(box7)

            $('.box7-1 .listBox div').css({'display':'none'})
            $('.box7-1 .listBox div').eq(box7).css({'display':'block'})

            $('.box7-1 .titleBox li').removeClass('on')
            $(this).addClass('on')
            });

        
})