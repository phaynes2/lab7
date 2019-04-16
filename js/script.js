function init(){
//add your javascrip between these two lines of code
  var click = document.getElementById("entrybutton");
  click.addEventListener('click', function() {
    var info = document.getElementById("entryinput").value;
    alert ("Paul Haynes: " + info);
    console.log(info);
    document.getElementById("textoutput").innerHTML = info;
  });}
window.addEventListener('load', init);