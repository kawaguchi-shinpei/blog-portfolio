// クリックスクロール
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  


//   ハンバーガーメニュー
$(function(){
$('.nav-btn').on('click',function(){
    if( $(this).hasClass('active') ){
     // if条件１があったときの処理
     // hasClassは、クリックしたときにactive要素があるかどうか調べている。
     $(this).removeClass('active');
     // removeClassは、クリックしたときにactive要素を消す働きがある。
     $('.header-nav').addClass('close').removeClass('open');
     // addClassは、クリックしたときに要素を追加できる。
   }
     else {
       // 条件がなかった場合の処理
     $(this).addClass('active');
     $('.header-nav').addClass('open').removeClass('close');
   }
 });

});


$(function(){ 
$(document).ready(function(){
  $(window).scroll(function() {
      if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
          $(".back-to-top").fadeIn(); 
      } else {
          $(".back-to-top").fadeOut();
      }
  });
  $(".back-to-top").click(function() {
      $("body,html").animate({scrollTop:0},800); // 800msかけて上に戻る
  });
});
});