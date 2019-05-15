$(document).ready(() =>{
  //click on hint box
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(300);
  })
  //animating the wrong answers with frown face
  $('.wrong-answer-one').on('click', () => {
  $('.wrong-text-one').fadeOut('fast');
  $('.frown').show();
  });
  
  $('.wrong-answer-two').on('click', () => {
  $('.wrong-text-two').fadeOut(500);
  $('.frown').show();
  });
  
  $('.wrong-answer-three').on('click', () => {
  $('.wrong-text-three').fadeOut('slow');
  $('.frown').show();
  });
  //animating correct answer with smiley face
  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-text-one').fadeOut();
    $('.wrong-text-two').fadeOut();
    $('.wrong-text-three').fadeOut();
  });
  //add reset quiz button
  $('.reset').on('click', () => {
    $('.wrong-text-one').fadeIn('fast');
    $('.wrong-text-two').fadeIn('fast');
    $('.wrong-text-three').fadeIn('fast');
    $('.frown').hide();
    $('.smiley').hide();
});
});