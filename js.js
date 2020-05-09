

 
// $(window).ready(function(){

//      $("#home-page__stories").animate({
//       scrollTop: 6000
//      }, 10000, "linear");

     
//   });
 


  $(document).ready(function() {

   if ($('#home-page__stories').height() > $('#home-page__stories-conatainer').height()) {
       setInterval(function () {

           start();
      }, 3000); 
  
   }
});

function animateContent(direction) {  
   var animationOffset = $('#home-page__stories-conatainer').height() - $('#home-page__stories').height();
   if (direction == 'up') {
       animationOffset = 0;
   }

   console.log("animationOffset:"+animationOffset);
   $('#home-page__stories').animate({ "marginTop": (animationOffset)+ "px" }, 90000);
}

function up(){
   animateContent("up")
}
function down(){
   animateContent("down")
}

function start(){
setTimeout(function () {
   down();
}, 500);
setTimeout(function () {
   up();
}, 2000);
   
}   
   
setTimeout(function () {
   document.getElementById("home-page__stories-container").classList.add("home-page__stories-show")
}, 0);


 