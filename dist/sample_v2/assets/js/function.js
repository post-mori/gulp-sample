(function($){

  $(function () {
      
    // 画像リサイズ
    let $elem = $(".js-switch");
    let sp = "_sp.";
    let pc = "_pc.";
    let replaceWidth = 768;

    function imageReplace() {
      let windowWidth = parseInt(window.innerWidth);
      $elem.each(function () {
        let $this = $(this);
        if (windowWidth >= replaceWidth) {
          $this.attr("src", $this.attr("src").replace(sp, pc));
        } else {
          $this.attr("src", $this.attr("src").replace(pc, sp));
        }
      });
    }
    imageReplace();

    let resizeTimer;
    $(window).on("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        imageReplace();
      }, 200);
    });



    // タブメニュー
    function tabMenu(){
      $('.tab_menu li').click(function() {
        let index = $('.tab_menu li').index(this);
        
        $('.tab_menu li').removeClass('active');
        $(this).addClass('active');

        $('.tab_menu li img').each(function() {
          $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        });

        $(this).children('img').attr('src', $(this).children('img').attr('src').replace('_off', '_on'));
        $('.tab_content .content').removeClass('active').eq(index).addClass('active');
      });
    }
    tabMenu();


    // SPモーダル表示
    function modalShow(){
      $('.modal-btn').click(function(){
        $("html").css({'overflow-y':'hidden'});
        let isModal = $(this).data("modal");
        $('.'+isModal).fadeIn(500);
        $('.overlay').fadeIn(500);
        no_scroll();
      });

      $('.close-btn').click(function(){
				$("html").css({'overflow-y':'scroll'});
				$('.modal, .overlay').fadeOut(500);
        return_scroll();
			});

      $('.overlay').click(function(){
				$("html").css({'overflow-y':'scroll'});
				$('.modal, .overlay').fadeOut(500);
        return_scroll();
			});
    }
    modalShow();
    
    // モーダル時背景スクロール固定
    function no_scroll(){
      document.addEventListener("mousewheel", scroll_control, { passive: false });
      document.addEventListener("touchmove", scroll_control, { passive: false });
    }

    // モーダル時背景スクロール固定解除
    function return_scroll(){
      document.removeEventListener("mousewheel", scroll_control, { passive: false });
      document.removeEventListener('touchmove', scroll_control, { passive: false });
    }

    function scroll_control(event) {
      event.preventDefault();
    } 


    // モーダルエリアPC/SP切り替え
    function modalControl(){
      let windowWidth = parseInt(window.innerWidth);
      if(windowWidth >= replaceWidth){
        $('.modal').css({'display': 'block'});
      } else {
        $('.modal').css({'display': 'none'});
      }
    }
    modalControl();

    $(window).on("resize", function () {
      modalControl();
    });

    // メリットアコーディオン
    function meritAccordion(){
      let meritDefaultOpen = $('.merit_list_item:first-child');
      meritDefaultOpen.children('.merit_list_ttl').addClass('open');
      meritDefaultOpen.children('.merit_list_content').show();

      $('.merit_list_ttl').click(function(){
				$(this).toggleClass('open');
				$(this).next().slideToggle();
			});
    }
    meritAccordion();
    

    // $(window).on("resize", function () {
    //   meritAccordion();
    // });


    // FAQアコーディオン
    function faqAccordion(){
			
      let qeustionDefaultOpen;
      let qeustionPcDefaultOpen = $('.lp-faq_lst .lp-faq_lst_item:nth-child(-n+2)');
      let qeustionSpDefaultOpen = $('.lp-faq_lst .lp-faq_lst_item:first-child');
      let windowWidth = parseInt(window.innerWidth);

      if (windowWidth >= replaceWidth){
        qeustionDefaultOpen = qeustionPcDefaultOpen;
      } else {
        qeustionDefaultOpen = qeustionSpDefaultOpen;
      }
      qeustionDefaultOpen.children('.lp-faq_lst_question').addClass('open');
      qeustionDefaultOpen.children('.lp-faq_lst_answer').show();

			$('.lp-faq_lst_question').click(function(){
				$(this).toggleClass('open');
				$(this).next().slideToggle();
			});
		}
		faqAccordion();


  });

})(jQuery);
