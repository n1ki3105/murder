var em = document.getElementById("godzilla");
var touch = document.getElementById("touch");
var get = document.getElementById("get_set");
var go = document.getElementById("GO");
var temp_lyrics = 2;

window.addEventListener('load', function()  {
 alert("WARNING: This site may potentially trigger seizures for people with photosensitive epilepsy. Viewer discretion is advised.");
});

window.addEventListener("click", function() {
 em.play();
 touch.remove();
 get.style.visibility = "visible";
 var temp;
 var temp_2 = setTimeout(function() {
  temp = setInterval(function randomBodyColor() {
   var randomColor = Math.floor(Math.random() * 16777215).toString(16);
   document.body.style.backgroundColor = "#" + randomColor;
  }, 1);
 }, 1000);
 var temp_3 = setTimeout(function() {
  clearTimeout(temp_2);
  clearInterval(temp);
  document.body.style.backgroundColor = "rgb(215, 215, 215)";
  get.remove();
 }, 11500);
 var temp_4 = setTimeout(function() {
  clearTimeout(temp_3);
  go.style.visibility = "visible";
 }, 11600);
setTimeout(function() {
  clearTimeout(temp_4);
  document.body.style.backgroundColor = "rgb(40, 40, 40)";
  go.remove();
 }, 12700);
setTimeout(function() {
  document.getElementById(temp_lyrics - 1).style.display = "block";
  var lyric_interval;
  lyric_interval = setInterval(function lyrics() {
   document.getElementById(temp_lyrics - 1).style.display = "none";
   document.getElementById(temp_lyrics).style.display = "block";
   if (temp_lyrics == 180) {
    clearInterval(lyric_interval);
   } else {
    temp_lyrics++;
   }
  }, 130);
 }, 12800);
setTimeout(function() {
  var lyric_interval_2;
  lyric_interval_2 = setInterval(function lyrics_2() {
   document.getElementById(temp_lyrics - 1).style.display = "none";
   document.getElementById(temp_lyrics).style.display = "block";
   if (temp_lyrics == 203) {
    clearInterval(lyric_interval_2);
   } else {
    temp_lyrics++;
   }
  }, 190);
 }, 36200);
setTimeout(function() {
  document.getElementById(temp_lyrics - 1).style.display = "block";
  var lyric_interval_3;
  lyric_interval_3 = setInterval(function lyrics_3() {
   document.getElementById(temp_lyrics - 1).style.display = "none";
   document.getElementById(temp_lyrics).style.display = "block";
   if (temp_lyrics == 220) {
    clearInterval(lyric_interval_3);
   } else {
    temp_lyrics++;
   }
  }, 190);
 }, 40570);
setTimeout(function() {
  document.getElementById("eminem").classList.remove("lyrics-display");
 }, 42800);
setTimeout(function() {
  document.getElementById("eminem").classList.add("lyrics-display");
  document.getElementById("stop").classList.remove("lyrics-display");
 }, 43000);
setTimeout(function() {
  document.getElementById("stop").classList.add("lyrics-display");
  document.body.style.backgroundColor = "rgb(0, 0, 0)";
 }, 43500);
 
setTimeout(function() {
  location.reload();
 }, 46500);
}, {once : true});

setInterval(function randomTextColor() {
 var randomColor = Math.floor(Math.random() * 16777215).toString(16);
 touch.style.color = "#" + randomColor;
 get.style.color = "#" + randomColor;
 go.style.color = "#" + randomColor;
}, 1);
