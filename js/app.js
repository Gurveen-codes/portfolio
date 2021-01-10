$(document).ready(function () {
  // Intialize all tool-tips
  $('[data-toggle="tooltip"]').tooltip();

  //Update Copyright-Year
  $("#copyright-year").each(function () {
    const date = new Date();
    const newDate = date.getFullYear();
    let text = $(this).text();

    $(this).text(text.replace("CurrentYear", newDate));
  });

  ///////////// Sticky Navigation Menu ////////////
  let header_height = $(".header_area").height() + 50;

  function navFixed() {
    if ($(".header_area").length) {
      let scroll = $(window).scrollTop();
      if (scroll >= header_height) {
        $(".header_area .main-menu").addClass("navbar_fixed");
      } else {
        $(".header_area .main-menu").removeClass("navbar_fixed");
      }
    }
  }

  $(window).on("scroll", navFixed);

  /////////// Smooth Scrolling //////////////
  $(".nav-link")
    .toArray()
    .forEach((el) => {
      let link_id = `#${el["id"]}`;

      let target_area = `.${el["id"]}-area`;

      $(link_id).on("click", function (e) {
        e.preventDefault();

        $(target_area)[0].scrollIntoView({
          behavior: "smooth",
        });
      });
    });
});
