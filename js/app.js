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
});
