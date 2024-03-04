$(document).ready(function () {
    if ($(window).width() > 768) {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 25,
            centeredSlides: true,
            roundLengths: true,
            loop: true,
            loopAdditionalSlides: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
            },
        });

    } else {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 25,
            centeredSlides: true,
            roundLengths: true,
            loop: true,
            loopAdditionalSlides: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
            },
        });

        let isSeeMore = false;
        const moreProduct = $("#news-hide");
        const btnAllNew = $("#btn-all-new");
        btnAllNew.on("click", function (e) {
            e.preventDefault();
            if (isSeeMore === false) {
                moreProduct.removeClass("d-none");
                isSeeMore = true
                btnAllNew.text("Ẩn bớt")
            } else{
                moreProduct.addClass("d-none");
                isSeeMore = false
                btnAllNew.text("Xem tất cả")
            }
        });

        const headerSection = $(".header");
        const navigationSection = $(".navigation");
        const navigationMobileShow = $(".navbar-mobile-show");
        
        const btnMenuMobile = $(".navbar-toggler");
        btnMenuMobile.on("click", function (e) {
            e.preventDefault();
            navigationMobileShow.removeClass("d-none")
            headerSection.css("display", "none");
            navigationSection.css("display", "none");
        });

        const btnCloseMobile = $(".btn-close-mobile");
        btnCloseMobile.on("click", function (e) {
            e.preventDefault();
            navigationMobileShow.addClass("d-none")
            headerSection.css("display", "block");
            navigationSection.css("display", "block");
        });
    };

    let isPlayed = false;
    const playBtn = $("#play-button");
    const iconPlay = $("#play-button i");
    
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player('existing-player', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
    function onPlayerReady(event) {
        event.target.pauseVideo();
    }

    let done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(() => {
                player.stopVideo();
            }, 6000);
            done = true;
        }
    }

    playBtn.on("click", function (event) {
        if (isPlayed === false) {
            iconPlay.removeClass("fa-play").addClass("fa-pause");
            isPlayed = true;
            player.playVideo();
        } else {
            iconPlay.removeClass("fa-pause").addClass("fa-play");
            isPlayed = false;
            player.pauseVideo();
        }
    });
});
