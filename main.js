

let nav_list = document.querySelectorAll("header .nav-list a");

nav_list.forEach((nav)=>{
    nav.addEventListener("click",function(e){
        nav_list.forEach((e)=>e.classList.remove("active"));
        this.classList.toggle("active");
    })
})




var swiper = new Swiper(".popular-container", {
    spaceBetween: 0,
    centeredSlides: true,
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
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        
        
      }
  });



  let play_video_btn = document.querySelector(".movie1-container .auto .play-video");
  let themovie = document.querySelector(".movie1 .movie1-container");
  let close_video_btn = document.querySelector(".video-container .close-video");
  let my_video = document.getElementById("myVideo");

  let main_video = document.querySelector(".video-container");


  play_video_btn.addEventListener("click", function(){
    main_video.classList.add("active");
    themovie.style.display = "none";
    my_video.play();
    close_video_btn.onclick = function(){
        main_video.classList.remove("active");
        themovie.style.display = "block";
        my_video.pause();
    }
  });
