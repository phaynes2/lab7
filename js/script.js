function init(){
//add your javascrip between these two lines of code
 var click = document.getElementById("entrybutton");
 var info = document.getElementById("entryinput");
 click.addEventListener("click", function() {
 alert ("Paul Haynes: " + info.value);
 document.getElementById("textoutput").innerHTML = info.value;
 window.alert("sometext");
 })
window.addEventListener('load', init);