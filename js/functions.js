function scrollAnimation () {
    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({scrollTop: target.offset().top}, 1000);
    }
}

function initialize() {
    $('a[href^="#"]').on("click", scrollAnimation);
}

$(document).ready(function () {
    initialize();
});


