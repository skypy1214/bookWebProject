//////////////////성진//////////////////
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginIcon = document.querySelector('.loginIcon')
let loginModal = document.querySelector('.loginModal')
let body = document.querySelector('body')
let lgModal = document.querySelector('.lgModal')
let xmark = document.querySelector('.fa-xmark')

window.onload = () => {
    loadingPage();
}

function loadingFadeout(){
    loading.classList.add('fadeOut')
}
function loadingPage(){
    setTimeout(loadingFadeout,50) // 테스트할 때 로딩화면 기다리기 싫어서 0.05초로 만들어 둠
}

loginIcon.addEventListener('click',function(){
    if(loginModal.style.display == 'none'){
        loginModal.style.display = 'flex'
    }
})

xmark.addEventListener('click',function(){
    loginModal.style.display = 'none'
})

loginModal.addEventListener('click', function(){
    if(event.target.className == 'loginModal'){
        loginModal.style.display = 'none'
    }
})


footerScroll.addEventListener('click',function(e){
    if(e.target.innerText=='HOME'){
        header.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '신간도서'){
        newBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '장르별 도서'){
        genreBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '리뷰'){
        reviewBook.scrollIntoView({
            behavior: "smooth"}) 
    }
})
///////////////////////////////////////
//////////////////상호//////////////////
                                     
///////////////////////////////////////
//////////////////수근//////////////////

///////////////////////////////////////
//////////////////진주//////////////////

///////////////////////////////////////

////////////////////////양희시작///////////////////////////////

// 양쪽 화살표 클릭하면 넘어가기(4개씩) > 캐러셀
// 클릭하면 모달창뜨게하기
// 좋아요 누르면 하트 색꽉차게

// let heart = document.querySelector('.uil-heart');
// let arrow = document.querySelector('.uil-location-arrow-alt');



let slides = document.querySelector('.reviewboxs'),
    slide = document.querySelectorAll('.reviewbox'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 20,
    slideMargin = 20,
    preBtn = document.querySelector('#arrowleft');
    nextBtn = document.querySelector('#arrowright');

    makeClone();

    function makeClone(){
        for(let i = 0; i < slideCount; i++)
        {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide); 
        }
        for(let j = slideCount-1; j >= 0; j--)
        {
            let cloneSlide = slide[j].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        }

        updateWidth();
        // setInitialPos();
        slides.classList.add('animated');
    }

    function updateWidth(){
        let currentSlide = document.querySelectorAll('.reviewbox');
        // console.log(currentSlide);
        let newSlideCount = currentSlide.length;
        // console.log(newSlideCount);
        let newWidth = calc(slideWidth + "%" + slideMargin + "px")*newSlideCount - slideMargin +"px";
        console.log(newWidth);
        slides.style.width = newWidth;
    }

    function setInitialPos(){
        // let initialTranslateValue = calc(calc(slideWidth + "%" + slideMargin + "px")*slideCount);
        // slides.style.transform = "translateX(" + initialTranslateValue+ "%)";

    }
//////////////////////양희끝////////////////////////