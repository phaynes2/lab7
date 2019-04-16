function init(){
//add your javascrip between these two lines of code
  var click = document.getElementById("entrybutton");
  click.addEventListener('click', function() {
    var info = document.getElementById("entryinput");
    alert ("Paul Haynes: " + info.value);
    });
}
window.addEventListener('load', init);