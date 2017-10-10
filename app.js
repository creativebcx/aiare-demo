$('.lessons').click( function(event) {
    event.preventDefault();
    $('.lessons-menu').removeClass('hidden');
    $('.lessons-menu').html(
      '<div class="lessons-menu-box">' +
        '<ul class="menu-box-ul">AIARE Level 2 - Rec' +
          '<li class="lessons-menu"><a class="menu-link">Introduction</a></li>' +
          '<li class="lessons-menu"><a class="menu-link">Chapter 1</a></li>' +
          '<li class="lessons-menu"><a class="menu-link">Chapter 2</a></li>' +
          '<li class="lessons-menu"><a class="menu-link">Chapter 3</a></li>' +
        '</ul>' +
      '</div>'
    )
});

$('.lessons-menu').click( function(event) {
  location.reload();
});

$('.get-help').click( function(event) {
    event.preventDefault();
    $('.get-help-menu').removeClass('hidden');
    $('.get-help-menu').html(
      '<div class="get-help-menu-box">' +
        '<ul class="menu-box-ul">Resources' +
          '<li class="lessons-menu"><a class="menu-link">Ask Questions About Curriculum</a></li>' +
          '<li class="lessons-menu"><a class="menu-link">Report an Issue</a></li>' +
          '<li class="lessons-menu"><a class="menu-link">Email AIARE</a></li>' +
        '</ul>' +
      '</div>'
    )
});

$('.get-help-menu').click( function(event) {
  location.reload();
});