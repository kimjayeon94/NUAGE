

//탭메뉴
$(function () {

    let navBtn = $('nav.mobile');
    let open = $('.open');
    let close = $('.close');

    close.click(function () {
        navBtn.animate({
            'left': '-100%'
        })
    })

    open.click(function () {
        navBtn.animate({
            'left': '0'
        })
    })

});
//탭메뉴end

//이벤트스와이퍼
var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopAdditionalSlides: 1,
    spaceBetween: 0,
    centeredSlides: true,
    scrollbars: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//end

//best product
const bestTxtSwiper = new Swiper(".best-txt-slider", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    allowTouchMove: false,
});

const bestSwiper = new Swiper(".best-slider", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
        1024 : {
            slidesPerView: 1.5
        }
    },
    loop: true,
    navigation: {
        nextEl: ".best-slider .swiper-button-next",
        prevEl: ".best-slider .swiper-button-prev",
    },
    on: {
        slideChangeTransitionStart: function () {
            const realIndex = bestSwiper.realIndex;
            let targetIndex = realIndex;

            bestTxtSwiper.slideTo(targetIndex);
            bestTxtSwiper.update(); // swiper업데이트 
        },
        slideNextTransitionStart: function () {
            bestTxtSwiper.autoplay.stop(); // 
        },
        slidePrevTransitionStart: function () {
            bestTxtSwiper.autoplay.stop(); // 
        },
        slideChangeTransitionEnd: function () {
            bestTxtSwiper.autoplay.start(); // 
        }
    }
});

//coupon
window.onload = function () {

    //1차메뉴 클릭 시 해당 2차 메뉴가 나타나도록 실행
    let depth01 = document.querySelectorAll('.depth01');
    //depth01 - 1차 메뉴
    let depth02 = document.querySelectorAll('.depth02');
    // 모든 클래스명 depth02 선택

    for (let i = 0; i < depth01.length; i++) {
        //모든 2차메뉴 스타일을 display=block
        depth02.forEach(function (item) {
            //모든 depth02 = item
            item.style.display = 'none'
        })


        //depth01을 클릭했을 때 실행
        //조건식 2차 메뉴가 display:none일때 (위에서 잡아줌 foreach로)
        //display:block으로 실행하겠다.

        let depthChildren = depth01[i].children[1];
        let depth01Children = depth01[i].children[0];

        //depth01 중 내가 클릭한 자식 찾기
        //children => 자식찾기
        //자식 2개뜸 
        //변수명 depth01이 가지고 있는 자식을 찾겠다는 말

        console.log(depthChildren) //검사 > 콘솔 확인가능

        depth01[i].onclick = function () {
            if (depthChildren.style.display == 'none') {
                //조건이 맞으면 실행
                depthChildren.style.display = 'block';
                depth01Children.style.color = '#ee7147';
                depth01Children.classList.add('on')
                //depth[i].children[0].style.color = 'red' 이렇게 적어도 됨
            } else {
                //조건이 안 맞을 때 실행
                depthChildren.style.display = 'none';
                depth01Children.style.color = 'black'
                depth01Children.classList.remove('on')
            }
        }//for문_어느 1차 메뉴를 누르는 지 알 수 없으니까 사용
    }
}//window.onscroll end