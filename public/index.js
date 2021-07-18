$(window).scroll(() => {
  $("nav").toggleClass("scrolled", $(this).scrollTop()>400);
});


function year() {
  var year = new Date().getFullYear();
  var copyright = document.querySelector(".year").innerHTML = year;
  return copyright;
}
