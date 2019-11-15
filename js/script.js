$(".popup").hide();

/* au survol de la souris*/
$("a").on('mouseenter click', function() {
 var button = $(this).attr('class');


 if (button == "Jupiter" || button == "Mars" || button == "Mercure" || button == "Venus" ||
  button == "Terre" || button == "Saturne" || button == "Neptune" || button == "Uranus") {
  $("#" + button).css("outline", "none");
  $("#" + button).css("border-color", "#9ecaed");
  $("#" + button).css("box-shadow", "0 0 10px #9ecaed");

 }



 /* au survol de Jupiter*/
 $("a.Jupiter").on('mouseenter click', function() {
  $('#Jupiter h3').css('display', 'block');
  $('#Jupiter h3').css('margin-left', '-5%');
  $('.solarsystem #Jupiter').css('animation', 'paused');
 })

 /* au survol de mars*/
 $("a.Mars").on('mouseenter click', function() {
  $('#Mars h3').css('display', 'block');
  $('#Mars h3').css('margin-left', '10%');
  $('.solarsystem #Mars').css('animation', 'paused');
 })

 /* au survol de mercure*/
 $("a.Mercure").on('mouseenter click', function() {
  $('#Mercure h3').css('display', 'block');
  $('#Mercure h3').css('margin-top', '15%');
  $('.solarsystem #Mercure').css('animation', 'paused');
 })

 /* au survol de terre*/
 $("a.Terre").on('mouseenter click', function() {
  $('#Terre h3').css('display', 'block');
  $('#Terre h3').css('margin-top', '10%');
  $('.solarsystem #Terre').css('animation', 'paused');
 })

 /* au survol de venus*/
 $("a.Venus").on('mouseenter click', function() {
  $('#Venus h3').css('display', 'block');
  $('#Venus h3').css('margin-top', '10%');
  $('.solarsystem #Venus').css('animation', 'paused');
 })
 /* au survol de saturne*/
 $("a.Saturne").on('mouseenter click', function() {
  $('#Saturne h3').css('display', 'block');
  $('#Saturne h3').css('margin-left', '-5%');
  $('.solarsystem #Saturne').css('animation', 'paused');
 })

 /* au survol de neptune*/
 $("a.Neptune").on('mouseenter click', function() {
  $('#Neptune h3').css('display', 'block');
  $('#Neptune h3').css('margin-left', '18%');
  $('.solarsystem #Neptune').css('animation', 'paused');
 })

 /* au survol de uranus*/
 $("a.Uranus").on('mouseenter click', function() {
  $('#Uranus h3').css('display', 'block');
  $('#Uranus h3').css('margin-left', '15%');
  $('.solarsystem #Uranus').css('animation', 'paused');
 })

 /* au survol de soleil*/
 $("a.Soleil").on('mouseenter click', function() {
  $('#Soleil h3').css('display', 'block');
  $('#Soleil h3').css('margin-top', '35%');
  $('#Soleil h3').css('margin-left', '18%');
  $('.solarsystem #Soleil').css('animation', 'paused');
 })


});


/* lorsque la souris est enlevée*/
$("#sidebar a").on('mouseleave click', function() {
 var button = $(this).attr('class');

 if (button == "Jupiter" || button == "Mars" || button == "Mercure" || button == "Venus" ||
  button == "Terre" || button == "Saturne" || button == "Neptune" || button == "Uranus") {
  $("#" + button).css("border", "rgba(255,255,255,0.5) 1px solid");
  $("#" + button).css("outline", "none");
  $("#" + button).css("border-color", "none");
  $("#" + button).css("box-shadow", "none");


 }




 /* lorsque la souris est enlevée de jupiter */
 $("a.Jupiter").on('mouseleave click', function() {
  $('#Jupiter h3').css('display', 'none');
  $('.solarsystem #Jupiter').css('animation', 'orbit 50s linear infinite');


 })
 /* lorsque la souris est enlevée de venus*/
 $("a.Venus").on('mouseleave click', function() {
  $('#Venus h3').css('display', 'none');
  $('.solarsystem #Venus').css('animation', 'orbit 9.2s linear infinite');
 })


 /* lorsque la souris est enlevée de mars */
 $("a.Mars").on('mouseleave click', function() {
  $('#Mars h3').css('display', 'none');
  $('.solarsystem #Mars').css('animation', 'orbit 28.2s linear infinite');
 })
 /* lorsque la souris est enlevée de mercury */
 $("a.Mercure").on('mouseleave click', function() {
  $('#Mercure h3').css('display', 'none');
  $('.solarsystem #Mercure').css('animation', 'orbit 3.6s linear infinite');
 })

 /* lorsque la souris est enlevée de la terre */
 $("a.Terre").on('mouseleave click', function() {
  $('#Terre h3').css('display', 'none');
  $('.solarsystem #Terre').css('animation', 'orbit 15s linear infinite');
 })

 /* lorsque la souris est enlevée de  saturne*/
 $("a.Saturne").on('mouseleave click', function() {
  $('#Saturne h3').css('display', 'none');
  $('.solarsystem #Saturne').css('animation', 'orbit 80s linear infinite');
 })

 /* lorsque la souris est enlevée de neptune*/
 $("a.Neptune").on('mouseleave click', function() {
  $('#Neptune h3').css('display', 'none');
  $('.solarsystem #Neptune').css('animation', 'orbit 100s linear infinite');
 })
 /* lorsque la souris est enlevée de Uranus*/
 $("a.Uranus").on('mouseleave click', function() {
  $('#Uranus h3').css('display', 'none');
  $('.solarsystem #Uranus').css('animation', 'orbit 90s linear infinite');
 })

 /* lorsque la souris est enlevée de soleil*/
 $("a.Soleil").on('mouseleave click', function() {
  $('#Soleil h3').css('display', 'none');
 })













});

/*fin des cercles animés*/





/*debut asteroides au survol*/


$("a").on('mouseenter click', function() {
 var button = $(this).attr('class');

 if (button == "Asteroides") {
  $('#Jupiter').css("outline", "none");
  $('#Jupiter').css("border-color", "#9ecaed");
  $('#Jupiter').css("box-shadow", "0 0 10px #9ecaed");

  $('#Mars').css("outline", "none");
  $('#Mars').css("border-color", "#9ecaed");
  $('#Mars').css("box-shadow", "0 0 10px #9ecaed");

  $('#Asteroides').css("background", "rgba(0,0,255,0.3)");
  $('#Asteroides').css("opacity", "1");
  $('#Asteroides').css("backgroundImage", "url(assets/images/asteroides.png)");
  $('#Asteroides').css("width", "360px");
  $('#Asteroides').css("height", "360px");
  $('#Asteroides').css("backgroundSize", "cover");
  $('#Asteroides h3').css("display", "block");
  $('#Asteroides').css('animation', 'paused');

 }
});

//lorsque l'on quitte le survol du bouton le changement d'etat des asteroides
$("#sidebar a").on('mouseleave click', function() {
 var button = $(this).attr('class');

 if (button == "Asteroides") {
  $('#Jupiter').css("border", "rgba(255,255,255,0.5) 1px solid");
  $('#Jupiter').css("outline", "none");
  $('#Jupiter').css("border-color", "none");
  $('#Jupiter').css("box-shadow", "none");
  $('#Mars').css("outline", "none");
  $('#Mars').css("border-color", "none");
  $('#Mars').css("box-shadow", "none");
  $('#Mars').css("border", "rgba(255,255,255,0.5) 1px solid");
  $('#Asteroides').css("background", "none");
  $('#Asteroides').css("backgroundImage", "url(assets/images/asteroides.png)");
  $('#Asteroides').css("width", "360px");
  $('#Asteroides').css("height", "360px");
  $('#Asteroides').css("backgroundSize", "cover");
  $('#Asteroides h3').css("display", "none");
  $('#Asteroides').css('animation', 'orbit 120s linear infinite');
 }
});



/* au clique de la sidebar la popup s'ouvre*/


$(".popup").hide();

$(" a ").click(function() {
 var button = $(this).attr('class');
 var p = $("#" + button).children("p").text();


 $(".popup").slideDown();
 $(".popup h1").text(button);
 $(".popup p").text(p);


 if (button === 'Jupiter') {

  $('.popup span img').attr('src', 'assets/images/jupiter.png');
  $('.popup #wiki ').html("<a id='wiki' href='https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)' target='blank'>Plus d'infos</a>");


 }

 if (button === 'Venus') {
  $('.popup span img').attr('src', 'assets/images/venus.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)' target='blank'>Plus d'infos</a>");

 }

 if (button === 'Mercure') {
  $('.popup span img').attr('src', 'assets/images/mercure.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)' target='blank'>Plus d'infos</a>");

 }


 if (button === 'Soleil') {
  $('.popup span img').attr('src', 'assets/images/sun.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/Soleil' target='blank'>Plus d'infos</a>");
 }
 if (button === 'Uranus') {
  $('.popup span img').attr('src', 'assets/images/uranus.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)' target='blank'>Plus d'infos</a>");

 }


 if (button === 'Neptune') {
  $('.popup span img').attr('src', 'assets/images/neptune.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)' target='blank'>Plus d'infos</a>");

 }


 if (button === 'Terre') {
  $('.popup span img').attr('src', 'assets/images/terre.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/Terre' target='blank'>Plus d'infos</a>");

 }

 if (button === 'Mars') {
  $('.popup span img').attr('src', 'assets/images/mars.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)' target='blank'>Plus d'infos</a>");

 }

 if (button === 'Saturne') {
  $('.popup span img').attr('src', 'assets/images/saturne.png');
  $('.popup #wiki').html("<a  href='https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)' target='blank'>Plus d'infos</a>");

 }

 if (button === 'Asteroides') {
  $('.popup span img').attr('src', 'assets/images/aste.png');
  $('.popup #wiki').html("<a id='wiki'  href=' https://fr.wikipedia.org/wiki/Ceinture_d%27ast%C3%A9ro%C3%AFdes' target='blank'>Plus d'infos</a>");

 }


 // au clique les rayons sont selectionnés


 if (button == "Jupiter" || button == "Mars" || button == "Mercure" || button == "Venus" ||
  button == "Terre" || button == "Saturne" || button == "Neptune" || button == "Uranus") {
  $("#" + button).css("border", "#2196f3 2px dotted");


 }


 //au clique sur asteroides changement de couleur et bordures surlignées



 if (button == "Asteroides") {
  $('#Jupiter').css("border", "#2196f3 2px dotted");
  $('#Mars').css("border", "#2196f3 2px dotted");
  $('#Asteroides').css("background", "rgba(0,0,255,0.3)");
  $('#Asteroides').css("opacity", "1");
  $('#Asteroides').css("backgroundImage", "url(assets/images/asteroides.png)");
  $('#Asteroides').css("width", "360px");
  $('#Asteroides').css("height", "360px");
  $('#Asteroides').css("backgroundSize", "cover");

 }


});





//fermeture info planetes avec animation animatecss 
// et au clique de plus d'info, redirection puis fenetrer popup qui se ferme

$("#stop ,#wiki").click(function() {


 var $elem = $('.popup');
 $elem.animateCSS({
  animation: 'zoomOutDown', // Exit animation
  after: function() {
   $elem.hide();
  }
 });
});






// sans rayonns et en changeant de vue en 2d (retirer rayonset agrandir le systeme soplaire en jquery)

$("#naturel").click(function() {


 $('#sidebar_btn ').css('display', 'none');
 $(".solarsystem .planet").css("border", 'none');
 $(".solarsystem").css("transform", 'rotateX(60deg)', 'rotateZ(360deg)');
 $(".solarsystem ").css("margin-left", '15%');
 $(".solarsystem ").css("margin-bottom", '15%');
 $(".solarsystem ").css("margin-top", '-10%');
 $(".solarsystem ").css("height", '500px');

 $(".solarsystem ").css("transform-style", 'preserve-3d');
 $(".solarsystem").animateCSS({ //zoomer sur le system solaire en entrant
  animation: 'zoomInUp', // Exit animation
  after: function() {

  }
 });

 //changement d'état le soleil
 $(".solarsystem  .planet").css("transform-style", 'preserve-3d');
 $(" .solarsystem #Soleil img").css("transform", 'rotateX(-60deg)', 'rotateZ(0deg)');
 $(" .solarsystem #Soleil img").css('width', '200px');
 $(" .solarsystem #Soleil img ").css('height', '200px');
 $(" .solarsystem #Soleil  ").css('z-index', '9999');



 $('#Soleil').addClass('some-class-soleil');



 //changement d'etat mercure  

 $(" .solarsystem #Mercure img").css("width", '30px');
 $(" .solarsystem #Mercure ").css("width", '300px');
 $(" .solarsystem #Mercure ").css("height", '300px');
 $(" .solarsystem #Mercure ").css("left", '350px');
 $(".solarsystem   #Mercure").css("transform-style", 'preserve-3d');
 $(" .solarsystem  #Mercure").css("transform", 'rotateX(-60deg)', 'rotateZ(20deg)');
 $('#Mercure').addClass('some-class-mercure');



 //changement d'etat venus
 $(" .solarsystem #Venus img").css("width", '44px');
 $(" .solarsystem #Venus ").css("width", '400px');
 $(" .solarsystem #Venus ").css("height", '400px');
 $(" .solarsystem #Venus ").css("left", '305px');
 $(".solarsystem  #Venus").css("transform-style", 'preserve-3d');
 $(" .solarsystem #Venus ").css("transform", 'rotateX(-60deg)', 'rotateZ(0deg)');


 $("#Venus ").addClass("some-class-venus");

 //changement d'etat terre
 $(" .solarsystem #Terre img").css("width", '56px');
 $(" .solarsystem #Terre ").css("width", '500px');
 $(" .solarsystem #Terre ").css("height", '500px');
 $(" .solarsystem #Terre ").css("left", '250px');
 $(".solarsystem  #Terre").css("transform-style", 'preserve-3d');
 $(" .solarsystem #Terre ").css("transform", 'rotateX(-60deg)', 'rotateZ(0deg)');
 $('#Terre ').addClass('some-class-terre');


 //changement d'etat mars
 $(" .solarsystem #Mars img").css("width", '30px');
 $(" .solarsystem #Mars").css("width", '600px');
 $(" .solarsystem #Mars ").css("height", '600px');
 $(" .solarsystem #Mars ").css("left", '200px');
 $(".solarsystem  #Mars").css("transform-style", 'preserve-3d');
 $(" .solarsystem #Mars ").css("transform", 'rotateX(-60deg)', 'rotateZ(0deg)');

 $('#Mars ').addClass('some-class-mars');
 //changement d'etat jupiter
 $(" .solarsystem #Jupiter img").css("width", '80px');
 $(" .solarsystem #Jupiter").css("width", '720px');
 $(" .solarsystem #Jupiter ").css("height", '720px');
 $(" .solarsystem #Jupiter ").css("left", '140px');
 $(".solarsystem  #Jupiter").css("transform-style", 'preserve-3d');
 $(" .solarsystem #Jupiter ").css("transform", 'rotateX(-60deg)', 'rotateZ(0deg)');
 $('#Jupiter ').addClass('some-class-jupiter');
 //changement d'etat ceinture d'asteroides
 $(" .solarsystem .asteroids").css("width", '720px');
 $(" .solarsystem .asteroids ").css("height", '720px');
 $(" .solarsystem .asteroids").css("left", '140px');
 $(" .solarsystem .asteroids ").css("top", '230px');
 $(" .solarsystem .asteroids__inner").css("width", '680px');
 $(" .solarsystem .asteroids__inner ").css("height", '680px');
 $('.asteroids ').addClass('some-class-asteroids');

 //changement d'etat saturne
 $(" .solarsystem #Saturne img ").css("width", '160px');
 $(" .solarsystem #Saturne ").css("width", '900px');
 $(" .solarsystem #Saturne ").css("height", '900px');
 $(" .solarsystem #Saturne ").css("left", '80px');
 //$('#Saturne img').css('transform','rotateX(-60deg)');
 //$( ".solarsystem  #Saturne img" ).css( "transform-style", 'preserve-3d');
 $('#Saturne ').addClass('some-class-saturne');


 //changement d'etat uranus
 $(" .solarsystem #Uranus img ").css("width", '60px');
 $(" .solarsystem #Uranus ").css("width", '1100px');
 $(" .solarsystem #Uranus ").css("height", '1100px');
 $(" .solarsystem #Uranus ").css("left", '10px');
 $(".solarsystem  #Uranus").css("transform-style", 'preserve-3d');
 $(" .solarsystem #Uranus ").css("transform", 'rotateX(-60deg)', 'rotateZ(0deg)');

 $('#Uranus ').addClass('some-class-uranus');



 //changement d'etat neptune
 $(" .solarsystem #Neptune img ").css("width", '40px');
 $(" .solarsystem #Neptune ").css("width", '1200px');
 $(" .solarsystem #Neptune ").css("height", '1200px');
 $(" .solarsystem #Neptune ").css("left", '0px');
 $(".solarsystem  #Neptune").css("transform-style", 'preserve-3d');
 $(" .solarsystem #Neptune ").css("transform", 'rotateX(-60deg)', 'rotateZ(0deg)');

 $('#Neptune ').addClass('some-class-neptune');


 // Animation complete
});







//son au clique

$(" a")
 .each(function(i) {
  if (i != 0) {
   $("#beep-two")
    .clone()
    .attr("id", "beep-two" + i)
    .appendTo($(this).parent());
  }
  $(this).data("beeper", i);
 })
 .click(function() {
  $("#beep-two" + $(this).data("beeper"))[0].play();
 });
$("#beep-two").attr("id", "beep-two0");













//ancre du bas vers lehaut de la page
$(document).ready(function() {
 // Condition d'affichage du bouton
 $('.scroll-to ').hide();
 $(window).scroll(function() {
  if ($(this).scrollTop() > 200) {

   var $elem = $('.scroll-to');
   $elem.animateCSS({
    animation: 'bounceInDown', // Entrance animation
    before: function() {
     $elem.show();

    }
   });
  } else {
   $('.scroll-to ').hide();

  }
 });

 // Evenement au clic
 $('.scroll-to').click(function() {
  var $elem = $('.scroll-to');
  $elem.animateCSS({
   animation: 'bounceOutUp', // Exit animation
   after: function() {

   }






  });

  $('html,body').animate({
   scrollTop: 0
  }, 800);
  return false

 });


 /*ancre du bouton 2d*/

 $('#naturel').click(function() {
  $('html, body').animate({
   scrollTop: $("h2").offset().top
  }, 'slow');
  return false;
 });


 /*ancre du bouton 3d */
 $('#normal').click(function() {

  location.reload('html,body');
 })




 // ancre sur tv

 $('#btn-grad').click(function() {
  $('html,body').animate({
   scrollTop: $("#wrapper").offset().top
  }, 'slow');


 });






 /* fin document ready*/
});