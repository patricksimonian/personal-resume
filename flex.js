$(document).ready(function() {
  $("input[type=radio]").on("change", function(e) {
    // get the radio buttons name and value
    var name = e.target.name.slice(2);
    var value = e.target.value;
    // find the flex box container by getting the data-for from the toggle
    //Container
    var flexContainer = $(e.target).closest(".toggle-panel").data("for");
    // apply chosen style
    $(flexContainer).css(name, value);
  });
});
