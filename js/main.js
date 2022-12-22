
(function ($) {
    "use strict";

    /*[DE VOLTA AO TOPO]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });

    /*[MOSTRAR/ESCONDER SIDEBAR]
    ===========================================================*/
    $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
    var ovlSideBar = $('.overlay-sidebar');
    var btnShowSidebar = $('.btn-show-sidebar');
    var btnHideSidebar = $('.btn-hide-sidebar');
    var sidebar = $('.sidebar');

    $(btnShowSidebar).on('click', function(){
        $(sidebar).addClass('show-sidebar');
        $(ovlSideBar).addClass('show-overlay-sidebar');
    })

    $(btnHideSidebar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })

    $(ovlSideBar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })

    /*[PAUSAR/RODAR VÍDEO]
	===========================================================*/

    var my_video = document.querySelector(".my_video");
    var isPlaying = false;
    
    $(my_video).on("click", function () {
        if (isPlaying) {
            my_video.pause()
        } else {
            my_video.play();
        }
    });

    $(my_video).on("playing", function() {
        isPlaying = true;
    });

    $(my_video).on("pause", function() {
        isPlaying = false;
    });

    var my_audio = $('.my_audio');

    $(my_audio).on("click", function(e){
        my_video.muted = !my_video.muted;
    });

    /*[ ]
	===========================================================*/
    
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');
    var btnCloseOvl = document.querySelector('#btnClose');

    $(window).on("load", function() {
        $(popup).css('display','block');
        $(overlay).css('display', 'block');
    }, 2000);

    $(overlay).on('click', function(){
        $(popup).css('display','none');
        $(overlay).css('display','none');
    });

    $(btnCloseOvl).on('click', function(){
        $(popup).css('display','none');
        $(overlay).css('display','none');
    });
})(jQuery);