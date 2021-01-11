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
  $(".nav-item")
    .toArray()
    .forEach((el) => {
      let link_id = `#${el["id"]}`;

      let target_area = `.${el["id"]}-area`;

      $(link_id).on("click", function (e) {
        e.preventDefault();

        $(target_area)[0].scrollIntoView({
          behavior: "smooth",
        });

        $(".nav-item.active").removeClass("active");

        $(this).addClass("active");
      });
    });

  ///////////// Update Navbar based on scroll position /////////////

  function updateNavbar() {
    const currentPos = $(window).scrollTop();
    //const headerPos = $(".header-area").position().top;
    const aboutPos = $(".about-area").position().top;
    const servicesPos = $(".services-area").position().top;
    const skillsPos = $(".skills-area").position().top;
    const projectPos = $(".project-area").position().top;
    const footerPos = $(".footer-area").position().top;
    const activeLink = $(".nav-item.active");

    activeLink.removeClass("active");

    if (currentPos < aboutPos) {
      $("#home").addClass("active");
    } else if (currentPos >= aboutPos && currentPos < servicesPos) {
      $("#about").addClass("active");
    } else if (currentPos >= servicesPos && currentPos < skillsPos) {
      $("#services").addClass("active");
    } else if (currentPos >= skillsPos && currentPos < projectPos) {
      $("#skills").addClass("active");
    } else if (currentPos >= projectPos && currentPos < footerPos - 200) {
      $("#project").addClass("active");
    } else {
      $("#footer").addClass("active");
    }
  }

  $(window).on("scroll", updateNavbar);
});
