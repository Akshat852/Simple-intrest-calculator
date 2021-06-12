var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
function compute()
{
    var r = document.getElementById("myRange").value;
    var y = document.getElementById("year").value;
    var p = document.getElementById("principal").value;
    var yt = parseInt(2020);
    var z = parseInt(y) + yt;

 
    
    document.getElementById('answer').innerHTML ="<br> <br>  If you deposit &nbsp"+p+"<br> at an interest rate of &nbsp"+r+"<br> You will receive an amount of &nbsp"+((p*r*y)/100)+"<br> in the year &nbsp"+z;
    

}
