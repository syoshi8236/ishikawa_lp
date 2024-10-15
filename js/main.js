//スライダー
$(function () {
  $(".slider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // fade: true,
    slidesToShow: 3,
    speed: 400,

    responsive: [
      {
        breakpoint: 771, // 770px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        },
      },
    ],
  });

});

//アコーディオン

$(function(){
  $('.accordion-header').click(function() { // .accordion-headerをクリックで発火
    $(this).next().slideToggle();
    // $(this)...$('.accordion-header')の.next()...次の要素が.slideToggle()...表示と非表示を交互にする
    $(this).toggleClass('active');
    // $(this)...$('.accordion-header')に、activeというクラスが追加と削除を交互にする
  });
})


//フェードイン


jQuery(function($) {
  $(window).on('load scroll', function (){
   
    var box = $('.fadeIn');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
   
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  });
  })





