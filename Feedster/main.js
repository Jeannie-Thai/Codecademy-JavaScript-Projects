$(document).ready(() => {
	//hover over navigation menu
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show()
  });
  
  $('.menu').on('mouseleave', () => {
  	$('.nav-menu').hide()
  });
  //hover over +1 button turns green
  $('.btn').on('mouseenter', (event) => {
  	$(event.currentTarget).addClass('btn-hover').on('mouseleave', (event) => {
  $(event.currentTarget).removeClass('btn-hover');
  	});
	});
  //track character count
  $('.postText').on('keyup', (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');     
    }
    
 	 $('.characters').html(remaining);
  });
  
 	 $('.postText').focus()
});