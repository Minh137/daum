$(function(){
  let count = 0;
  $(".grid-fill").hover(function(){
    $(this).find(".subnav").stop().fadeToggle();
  });
  $(".hero-box a").hover(function(){
    $(".hero-box a").removeClass("active");
    $(this).addClass("active"); 
  });
 
  $(".btn-right").click(function(e){
      e.preventDefault();
      fadeInOut();
  });

  $(".btn-left").click(function(e){
    e.preventDefault();
    fadeOutIn();
});

   $('.b-table').eq(0).css('display', 'flex');
   fadeInOut();
   setInterval(fadeInOut, 9000);

   const bTableCount = $(".b-table").length;

   $(document).on("click", ".run", function(){
   //$('.run').click(function(){
     if($(this).hasClass('btn-next')){
         if(count > bTableCount - 2){
           $('.btn-next').removeClass('run');
         }else{
              count++;
              if(count > -1) {
                 $('.btn-prev').addClass('run');
              }
         }   
      }else{
          if(count < 1){
             $('.btn-prev').removeClass('run');
          }else{
             count--;
             if(count <  bTableCount - 2){
                $(".btn-next").addClass('run');
             }
          }
      }       
          $('.b-table').hide();
          $('.b-table').eq(count).css('display', 'flex');
   });

}); // /.jquery

let i = 0;
function fadeInOut(){
   $(".hero .hero-box:eq(0)").clone().appendTo('.hero');
   $(".hero .hero-box:eq(0)").remove();
   $('.hero .hero-box:eq(0)').addClass('act');     
   $('.hero .hero-box:eq(0) ul>li:first-child a').addClass("active");
}

function fadeOutIn(){
   let ct = $(".hero-box").length;
   console.log(ct);
   $(".hero .hero-box:eq("+(ct-1)+")").clone().prependTo('.hero');
   $(".hero .hero-box:eq("+ct+")").remove();
   $(".hero .hero-box").removeClass("act");
   $(".hero .hero-box:eq(0)").addClass("act");
   $('.hero .hero-box:eq(0) ul>li:first-child a').addClass("active");
}