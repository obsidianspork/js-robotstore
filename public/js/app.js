$(document).ready(function() {
  let $this = $(this);

  // Highlight form inputs
  $("form input").on("focusin", function() {
    $this
      .closest("p")
      .addClass("active");
  });
  $("form input").on("focusout", function() {
    $this
      .closest("p")
      .removeClass("active");
  });

  // Highlight Robots and Hardware on hover
  $("fieldset li").on('mouseenter', function() {
    $this.addClass("active");
  });
  $("fieldset li").on('mouseleave', function() {
    $this.removeClass("active");
  });

  $("fieldset p").on('mouseenter', function() {
    $this.addClass("active");
  });
  $("fieldset p").on('mouseleave', function() {
    $this.removeClass("active");
  });
  
  // Log hardware selection to the console
  $("#btnHardware").on('click', function(e) {
    e.preventDefault();
    let $cpu = $('input[name="CPU"]:checked').attr('data-name');
    let $ram = $('input[name="ram"]:checked').attr('data-name');
    let $hardware = $('input[name="hardware"]:checked').attr('data-name');
    if (typeof($hardware) == 'undefined') {
      $hardware = "No Additonal Hardware selected."
    }
    console.log(`Selected CPU: ${$cpu}` + "\n" +
                `Selected RAM: ${$ram}` + "\n" +
                `Additional Hardware: ${$hardware}`);
  });
});