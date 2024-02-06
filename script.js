  $(function () {
    $(".cus-dropdown-title").click(function () {
      const $this = $(this);
      const $next = $this.next(".cus-menu");

      $next.slideToggle();
      $this.parent().toggleClass("open");

      $(".cus-menu").not($next).slideUp().parent().removeClass("open");
    });
  });