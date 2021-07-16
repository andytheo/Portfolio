$(window).scroll(() => {
  $("nav").toggleClass("scrolled", $(this).scrollTop()>400);
});
