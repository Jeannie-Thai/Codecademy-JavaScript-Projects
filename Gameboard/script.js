var main = function() {
  //click the More link to see the dropdown menu
	$('.more-btn').on('click', (event) => {
    $(event.currentTarget).siblings('.more-menu').toggle();
  });
  //click the Share link to see the share menu
  	$('.share').on('click', (event) => {
    $(event.currentTarget).next('.share-menu').toggle();
  });
  //click the notification bell
  	$('.notification').on('click', (event) => {
    $(event.currentTarget).toggleClass('active')
  });
  
};

$(document).ready(main);
