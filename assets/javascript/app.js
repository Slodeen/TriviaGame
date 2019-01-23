

//hidding question section at first

$("#questions").hide();
$("#results").hide();

//showing questions and hidding button
$("#btn").click(function(){
  $("#btn").hide();
  $("#btn").click($("#questions").show());
  //$("#results").hide();
    
 
  
  
$(document).ready()
//the interval set up to 20 seconds
var number = 20;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  
}


function decrement() {
  number--;
  $("#timer").html("<h2> Remaining Time is: " + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Time Up!");
    $("#questions").hide();
    $("#results").show();     
  }} 
  
  
function stop() {
  clearInterval(intervalId);
}

run();
})

$("#lastBtn").click(function () {
  var result = $('input[class="radio1"]:checked').val();
  var result1 = $('input[class="radio2"]:checked').val();
  var result2 = $('input[class="radio3"]:checked').val();
  stop();

  
  var allRightResults = [result, result1, result2];
  var filtered = allRightResults.filter(function (el) {
    return el != undefined;
  });
  
  var correctAnswer3 = 0;
  var numberOfCheckedRadio = $('input:radio:checked').length;
  var unAnswered4 = 3 - numberOfCheckedRadio;
  console.log(unAnswered4);

  $("#unanswered").text("Unanswered questions: " + unAnswered4);

   for (var i = 0; i < filtered.length; i++){
   
    if(filtered[i]=== "HenryFord" || "HerbertHoover" || "$('*')")
    correctAnswer3++  
  }
    console.log(filtered[i]);    
    $("#correct").html("Correct Answers: " + correctAnswer3);
    console.log(filtered);
    
  
  
  var result3 = $('input[id="radio2"]:checked').val();
  var result4 = $('input[id="radio3"]:checked').val();
  var result5 = $('input[id="radio4"]:checked').val();
  var result6 = $('input[id="radio6"]:checked').val();
  var result7 = $('input[id="radio7"]:checked').val();
  var result8 = $('input[id="radio8"]:checked').val();
  var result9 = $('input[id="radio10"]:checked').val();
  var result10 = $('input[id="radio11"]:checked').val();
  var result11 = $('input[id="radio12"]:checked').val();
  
  var allWrongResults = [result3, result4, result5, result6, result7, result8, result9, result10, result11];
  var filtered2 = allWrongResults.filter(function (el) {
    return el != undefined;
  });
  
  var wrongAnswer3 = 0;

  for (var j = 0; j < filtered2.length; j++){
   
    if(filtered2[j]=== "ThomasEdison" || "NicolasTesla" || "ElonMusk" || "FranklinRoosevelt" || "WoodrowWilson" || "JamesMadison" || "$('?')" || "$('#')" || "Noneoftheabove")
    
    wrongAnswer3++  
  }
    //console.log(filtered2[j]);    
    $("#wrong").html("Wrong Answers: " + wrongAnswer3);
      
});
  
$("#lastBtn").click(function(){
  $("#questions").hide();
  $("#results").show();
  stop();

  })    

  