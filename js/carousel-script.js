$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });