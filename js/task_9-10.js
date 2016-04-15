$(function() {

//drop-down menu
    $('.dropdown').hover(
        function () {
            $(this).children('.sub-menu').slideDown(500,stop());
        },
        function () {
            $(this).children('.sub-menu').slideUp(500,stop());
        });

        function stop(){
            $(".sub-menu").stop(true, true);
        };
// changing color of drop-down-menu
    $('.sub-menu').hover(
        function (){
            $('.sub-menu').animate({backgroundColor:'#c28b6b'}, 500 );
        },
        function(){
            $('.sub-menu').animate({backgroundColor:'#8e5832'}, 500 );
        });

//carousel
$(function() {
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();
});

// checkbox
jQuery(".niceCheck").mousedown(
  function() {
       changeCheck(jQuery(this));
  });
  jQuery(".niceCheck").each(
    function() {
         changeCheckStart(jQuery(this));
  });


function changeCheck(el) {
  var el = el,
  input = el.find("input").eq(0);
  if(!input.attr("checked")) {
    el.css("background-position","0 -19px");
      input.attr("checked", true)
  } else {
      el.css("background-position","0 0");
      input.attr("checked", false)
  }
   return true;

}
function changeCheckStart(el) {
  var el = el,
      input = el.find("input").eq(0);
    if(input.attr("checked")) {
      el.css("background-position","0 -19px");
    }
   return true;
};

//select
$(document).ready(function(){
    $('.choices').customSelect();
    });













});
