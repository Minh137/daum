$(function(){
  let count = 0;

const now = new Date();
const nowMonth = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
const nowDate = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate();
const nowHours = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
const nowMinutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
const nowDay = now.getFullYear() + "." + nowMonth + "." + nowDate;
const nowTime = nowHours + ":" + nowMinutes;

$('.text-date').html(nowDay + "<strong>" + nowTime + "<strong>");
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


    /*****/
    $.ajax({
      url: "data/data.json",
      dataType: "json",
      success: function(data){
         console.log(data);
         $(".best_ul").html(displayData(data));
      },
      error: function(data){
         console.error("에러", error)
      }

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

function displayData(data){
   let htmlData = "";
   for(let i =0; i<data.length; i++){
      htmlData += `<li>
                            <a href="#">
                                <div class="thumb_list"><img src="../daum cafe/image/${data[i].img}" alt="01"></div>
                                <div class="text_list">
                                    <span>${data[i].id}</span>
                                    <p class="text_p_list">
                                       ${data[i].title}
                                    </p>
                                </div>
                                <div class="writer_list">
                                    <span class="writer">${data[i].list}</span>
                                    <span class="comment">${data[i].comment}</span>
                                </div>
                            </a>
                        </li>`
   }
   return htmlData;
}