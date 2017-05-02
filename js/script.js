$('.perso1').mouseover(function(){
  $('.perso1').css({"background-image" : "url(image/mario1.gif)"})
})
.mouseout(function(){
  $('.perso1').css({"background-image" : "url(image/perso1.jpg)"})
});

$('.perso2').mouseover(function(){
  $('.perso2').css({"background-image" : "url(image/luigi2.gif)"})
})
.mouseout(function(){
  $('.perso2').css({"background-image" : "url(image/perso2.jpg)"})
});


$('.choix1').click(function(){
  sessionStorage.setItem("perso","mario")
});
$('.choix2').click(function(){
  sessionStorage.setItem("perso","luigi")
});
var joueurPerso = sessionStorage.getItem('perso');

if (joueurPerso === "mario") {
  $('.persoJoueur').css({'background-image' : 'url(image/mariorunning.gif)'})
}
else {
  $('.persoJoueur').css({'background-image' : 'url(image/luigirun2.gif)', 'height' : '80px', 'width' : '60px'})
}

$(document).keydown(function(e){
  md1X = parseInt($('.monde1').css('left'));
  md1Y = parseInt($('.monde1').css('top'));
  md2X = parseInt($('.monde2').css('left'));
  md2Y = parseInt($('.monde2').css('top'));
  md3X = parseInt($('.monde3').css('left'));
  md3Y = parseInt($('.monde3').css('top'));
  persoJoueurX = parseInt($('.persoJoueur').css('left'));
  persoJoueurY = parseInt($('.persoJoueur').css('top'));
  if (e.keyCode === 39) {
    $('.persoJoueur').finish().animate({ "left": "+=10"});
    $('.persoJoueur').css({"transform" : "scaleX(1)"});
  }
  else if(e.keyCode === 37){
    $('.persoJoueur').finish().animate({ "left": "-=10"});
    $('.persoJoueur').css({"transform" : "scaleX(-1)"});
  }
  else if(e.keyCode === 38){
    $('.persoJoueur').finish().animate({ "top": "-=10"});
  }
  else if(e.keyCode === 40){
    $('.persoJoueur').finish().animate({ "top": "+=10"});
  }

  else if (e.keyCode === 13) {
    if (((persoJoueurX > md1X) && (persoJoueurX < (md1X+66)) && (persoJoueurY > md1Y) && (persoJoueurY < (md1Y+150))) ){
      console.log("collision");
      window.location.href="http://localhost/ProjetMiFormation/level1.html";
    }
    else if (((persoJoueurX > md2X) && (persoJoueurX < (md2X+66)) && (persoJoueurY > md2Y) && (persoJoueurY < (md2Y+150))) ){
      console.log("collision");
      window.location.href="http://localhost/ProjetMiFormation/level1.html";
    }
    else if (((persoJoueurX > md3X) && (persoJoueurX < (md3X+66)) && (persoJoueurY > md3Y) && (persoJoueurY < (md3Y+150))) ){
      console.log("collision");
      window.location.href="http://localhost/ProjetMiFormation/level1.html";
    }
  }
});
