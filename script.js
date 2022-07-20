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
let slides = document.querySelector('.newBook_slides');
let slide = document.querySelectorAll('.newBook_slides li');
let currentIdx = 0; //클릭할때마다 이 값을 차감해서 슬라이드를 움직이기 위함
let slideCount = slide.length;
let slideWidth = 250;
let slideMargin = 30;
prevBtn = document.querySelector('.prev');
nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
    for(let i =0; i<slideCount; i++) {
        // a.cloneNode(), a.cloneNode(true) a의 자식 요소까지
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone')
        // a.appendChild(b)
        slides.appendChild(cloneSlide);
    }
    for(let i = slideCount-1; i>=0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone')
        // a.appendChild(b)
        slides.prepend(cloneSlide);
    } 
    updateWidth();
    setInitialPos();

    setTimeout(function(){
        slides.classList.add('animated');
    },100);
}

function updateWidth(){
    let currentSlide = document.querySelectorAll('.newBook_slides li')
    var newSlideCount = currentSlide.length;
    var newWidth = (slideWidth + slideMargin) * newSlideCount -slideMargin + 'px';
    slides.style.width = newWidth;
};

function setInitialPos() {
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount
    slides.style.transform = 'translateX(' +initialTranslateValue+ 'px)'
};

nextBtn.addEventListener('click', function(){
    moveSlide(currentIdx +1);
})
prevBtn.addEventListener('click', function(){
    moveSlide(currentIdx -1);
})

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    // console.log(currentIdx, slideCount)
    if(currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function(){
            slides.classList.remove('animated')
            slides.style.left = '0px';
            currentIdx = 0;
        },500);
        setTimeout(function(){
            slides.classList.add('animated')
        },600); 
    } 
}
///////////////////////////////////////
//////////////////진주//////////////////

///////////////////////////////////////
//////////////////양희//////////////////

///////////////////////////////////////