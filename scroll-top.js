window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button-top").style.display = "block";
  } else {
    document.getElementById("button-top").style.display = "none";
  }
}

$('#button-top').each(function topFunction(){
    $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
});
