$(document).ready(function() {

  // Highlight form inputs
  $("form input").on("focusin", function() {
    let $this = $(this);
    $this
      .closest("p")
      .addClass("active");
  });
  $("form input").on("focusout", function() {
    let $this = $(this);
    $this
      .closest("p")
      .removeClass("active");
  });

  // Highlight Robots and Hardware on hover
  $("fieldset li").on('mouseenter', function() {
    let $this = $(this);
    $this.addClass("active");
  });
  $("fieldset li").on('mouseleave', function() {
    let $this = $(this);
    $this.removeClass("active");
  });

  $("fieldset p").on('mouseenter', function() {
    let $this = $(this);
    $this.addClass("active");
  });
  $("fieldset p").on('mouseleave', function() {
    let $this = $(this);
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
  
  // Autocomplete searchbox
  $(function() {
    let $this = $(this);
    let $tags = $("h4").each(function(e) {
       return $this.text();
    });

    $(".searchbox").autocomplete({
      source: $tags
    });
  });
});