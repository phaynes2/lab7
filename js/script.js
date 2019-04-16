function init(){
//add your javascrip between these two lines of code
 var click = document.getElementById("entrybutton");
 click.addEventListener("click", function() {
    var info = document.getElementById("entryinput").value;
    alert ("Paul Haynes: " + info.value);
    document.getElementById("textoutput").innerHTML = info.value;
    window.alert("sometext");
 })
window.addEventListener('load', init);