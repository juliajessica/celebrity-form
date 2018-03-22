$(function() {
  $('form#celeb-quiz').submit(function(event){
    event.preventDefault();

    var quizTotal = 0;
    // var idealPartner;
    var gender = $('#gender').val();
    var personality = parseInt($('#personality').val());
    var idealNight = parseInt($('input:radio[name=idealnight]:checked').val());
    var spiritAnimal = parseInt($('#animal').val());

    if (!gender || (gender !== 'male' || gender !== 'female')) {
      console.log(gender);
      alert('hi');
      // $('.form-control').addClass('form-group has-error has-feedback');
      $('input#gender').css('border', '2px red solid');
    }

    quizTotal = personality + idealNight + spiritAnimal;

    if (gender === 'male' && quizTotal <= 6) {
      $('.male-celeb1').toggle();
    } else if (gender === 'male' && quizTotal > 6) {
      $('.male-celeb2').toggle();
    } else if (gender === 'female' && quizTotal <= 6) {
      $('.female-celeb1').toggle();
    } else if (gender === 'female' && quizTotal > 6) {
      $('.female-celeb2').toggle();
    }
  });
});
