$(document).ready(function () {
  /* Adding Sticky Navigation */
  $(".js--about-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });
});
