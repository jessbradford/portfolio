$(".menu-icon").click(
    function() {
      // Hamburger Icon
      $(".menu-icon").toggleClass("disBtn");
      //   Close Icon
      $(".closeBtn").toggleClass("enableBtn");
      //   Show Mobile Menu
      $('.menu').toggleClass('showMenu');
    }
  );

  $(".menu-links").click(
    function() {
      $(".showMenu").removeClass("showMenu");
      $(".menu-icon").removeClass("disBtn");
    }
  );
