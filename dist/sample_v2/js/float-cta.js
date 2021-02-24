(function($){

  /*------ 下固定バナー ------*/
  $(function(){

    var imgHigh = $('.lifull-f-tell').height();//イメージの高さを取得

    //最初はバナーを非表示にしておく
    $('.cta-sp').hide();

    if($('.cta-sp').find('img').css('display') == 'block') {
      //imgの高さ+設定した高さ
      $('.pagetop').css({
        'bottom' : imgHigh + 20
      });

      $('.cta-sp').css({
        'padding-bottom' : imgHigh
      });

    //10ピクセルスクロールしたらフェイドインで表示
    $(window).scroll(function(){
      if($(this).scrollTop() > 300) {
        $('.cta-sp').fadeIn('fast');
      }
    });

    }else{
      //imgの高さ+設定した高さ
      $('.pagetop').css({
        'bottom' : 50
      });

      $('.cta-sp').css({
        'padding-bottom' : 0
      });
    }
    return false;
  });

  /*------ アナリティクス関連 ------*/
  $(function(){

    /* CTA計測 */
    $(".cta").on("click",function() {
        var href = location.href;
        ga('send', {hitType:'event', eventCategory:'cta', eventAction:'click', eventLabel:href});
    });

    /* 追従バナー計測 */
    $(".bnr").on("click",function() {
        var href = location.href;
        ga('send', {hitType:'event', eventCategory:'bnr', eventAction:'click', eventLabel:href});
    });


    /* コンテンツ内リンク */
    $(".contLink").on("click",function() {
        var href = location.href;
        var ahref = $(this).attr('href');
        ga('send', {hitType:'event', eventCategory:'contLink', eventAction:'click', eventLabel:href});
    });

    /* サイド追尾ボタン */
    $(".sideLink").on("click",function() {
        var href = location.href;
        var ahref = $(this).attr('href');
        ga('send', {hitType:'event', eventCategory:'sideLink', eventAction:'click', eventLabel:href});
    });


  });

})(jQuery);






