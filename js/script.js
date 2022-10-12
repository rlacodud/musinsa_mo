// 반응형 구현을 위한 계산값
var convertPx = {
  vw: function (px) {
    px = parseFloat(px);
    var ww = $(window).width();

    return ww * px / 1920;
  }
}

$(window).on('scroll', function() {
  let documentHeight = $(document).scrollTop();
  console.log(documentHeight)
  if(documentHeight > 0) {
    $('header').addClass('on');
  } else if (documentHeight === 0 ){
    $('header').removeClass('on');
  }
  if(documentHeight >= convertPx.vw(0) && documentHeight < convertPx.vw(200)) {
    $('.content_1 .content_container').css({'opacity': 1});
    $('.video-dim').css({'opacity': 0.3});
  }
  if(documentHeight >= convertPx.vw(200) && documentHeight < convertPx.vw(400)) {
    $('.content_1 .content_container').css({'opacity': 0.8});
    $('.video-dim').css({'opacity': 0.4});
  }
  if(documentHeight >= convertPx.vw(400) && documentHeight < convertPx.vw(600)) {
    $('.content_1 .content_container').css({'opacity': 0.4});
    $('.video-dim').css({'opacity': 0.5});
  }
  if(documentHeight >= convertPx.vw(600) && documentHeight < convertPx.vw(800)) {
    $('.content_1 .content_container').css({'opacity': 0.2});
    $('.video-dim').css({'opacity': 0.6});
  }
  if(documentHeight >= convertPx.vw(800)) {
    $('.content_1 .content_container').css({'opacity': 0});
    $('.video-dim').css({'opacity': 0.7});
  }
  if(documentHeight >= convertPx.vw(3000) && documentHeight < convertPx.vw(3840)) {
    $('.content_4 .up').css({'animation-name': 'up'});
  }
  if(documentHeight >= 1500 && documentHeight < 2000) {
    $('.content_4 .card li:nth-child(1) span.up').css({'animation-name': 'up'});
    $('.content_4 .card li:nth-child(1) h4.up').css({'animation-name': 'up'});
    $('.content_4 .card li:nth-child(1) h4.up').css({'animation-delay': '0.3s'});
    $('.content_4 .card li:nth-child(1) h6.up').css({'animation-name': 'up'});
    $('.content_4 .card li:nth-child(1) h6.up').css({'animation-delay': '0.5s'});
    $('.content_4 ul.card li .phone').css({'left': '21%'});
    $('.content_4 ul.card li .phone').css({'opacity': 1});
    $('.content_4 ul.card li .phone').css({'animation-delay': '1s'});
    $('.content_4 ul.card li .discount').css({'left': '41%'});
    $('.content_4 ul.card li .discount').css({'opacity': 1});
    $('.content_4 ul.card li .discount').css({'animation-delay': '1.2s'});
  }
  if(documentHeight >= 2000 && documentHeight < 2800) {
    $('.content_5 li:nth-child(1) span.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(1) h4.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(1) h4.up').css({'animation-delay': '0.3s'});
    $('.content_5 li:nth-child(1) h6.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(1) h6.up').css({'animation-delay': '0.5s'});
    $('.content_5 .card_list ul li .phone').css({'top': '35%'});
    $('.content_5 .card_list ul li .phone').css({'left': '34%'});
    $('.content_5 .card_list ul li .phone').css({'opacity': 1});
    $('.content_5 .card_list ul li .phone').css({'animation-delay': '1.2s'});
    $('.content_5 .card_list ul li .card').css({'top': '44%'});
    $('.content_5 .card_list ul li .card').css({'left': '8%'});
    $('.content_5 .card_list ul li .card').css({'opacity': 1});
    $('.content_5 .card_list ul li .card').css({'animation-delay': '1.4s'});
  }
  if(documentHeight >= 2800 && documentHeight < 3200) {
    $('.content_5 li:nth-child(2) span.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(2) h4.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(2) h4.up').css({'animation-delay': '0.3s'});
    $('.content_5 li:nth-child(2) h6.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(2) h6.up').css({'animation-delay': '0.5s'});
    $('.content_5 .card_list ul li .line').css({'transform': 'scaleX(1)'});
    $('.content_5 .card_list ul li .line').css({'opacity': 1});
    $('.content_5 .card_list ul li .line').css({'animation-delay': '1.4s'});
    $('.content_5 .card_list ul li .shoes').css({'top': '35%'});
    $('.content_5 .card_list ul li .shoes').css({'left': '34%'});
    $('.content_5 .card_list ul li .shoes').css({'opacity': 1});
    $('.content_5 .card_list ul li .shoes').css({'animation-delay': '1.7s'});
  }
  if(documentHeight >= 3200 && documentHeight < 3600) {
    $('.content_5 li:nth-child(3) span.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(3) h4.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(3) h4.up').css({'animation-delay': '0.3s'});
    $('.content_5 li:nth-child(3) h6.up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(3) h6.up').css({'animation-delay': '0.5s'});
  }
  if(documentHeight >= 4120 && documentHeight < 4600) {
    $('.content_6 li:nth-child(1) span.up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(1) h4.up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(1) h4.up').css({'animation-delay': '0.3s'});
    $('.content_6 li:nth-child(1) h6.up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(1) h6.up').css({'animation-delay': '0.5s'});
  }
  if(documentHeight >= 4600 && documentHeight < 5000) {
    $('.content_6 li:nth-child(2) span.up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(2) h4.up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(2) h4.up').css({'animation-delay': '0.3s'});
    $('.content_6 li:nth-child(2) h6.up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(2) h6.up').css({'animation-delay': '0.5s'});
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});