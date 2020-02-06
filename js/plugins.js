// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () { };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here

// InitiaLize Horizontal Scrolling
$(document).ready(function () {

  // Horizontal Scrolling JS Plugin Init
  // $('section').horizon();

  // FullPage.js Plugin Init
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    continuousHorizontal: true,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);

  // Anime,js Init [ Section-1 Moving waves ]
  anime({
    targets: '.section-1 .wave-1 path',
    d: [
      'M-2,468.451169 C-2,468.451169 252.334287,673.993002 573.411472,523.524647 C894.488657,373.056293 1101,542.009898 1198,488.147432 L1198,1 L-2,1 C-2,312.634113 -2,468.451169 -2,468.451169 Z',
      'M-2,468.451169 C-2,468.451169 349.117562,347.188698 538.784664,409.698879 C728.451765,472.209061 1101,542.009898 1198,488.147432 L1198,1 L-2,1 C-2,312.634113 -2,468.451169 -2,468.451169 Z'
    ],
    duration: 10000,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });

  anime({
    targets: '.section-1 .wave-2 path',
    d: [
      'M-2,498.44993 C-2,498.44993 246.658598,729.597061 618,531.680364 C989.341402,333.763666 1055.667,611.414642 1198,498.44993 L1198,0 L-2,0 C-2,332.299954 -2,498.44993 -2,498.44993 Z',
      'M-2,498.44993 C-2,498.44993 131.917312,347.531383 482.379519,506.601288 C832.841726,665.671193 1015.06558,314.245395 1196,385.541768 L1198,0 L-2,0 C-2,332.299954 -2,498.44993 -2,498.44993 Z',
      'M-2,498.44993 C-2,498.44993 267.537793,372.610458 618,531.680364 C968.462207,690.750269 1055.667,611.414642 1198,498.44993 L1198,0 L-2,0 C-2,332.299954 -2,498.44993 -2,498.44993 Z'
    ],
    duration: 80000,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });

  // Jump to Section-2 on Know More link click
  $(".know-more_link").click(function () {
    fullpage_api.moveSectionDown();
  });

  // Jump to next Section on arrow click
  $(".arrow-down").click(function () {
    fullpage_api.moveSectionDown();
  });



























































































}); // jQuery document ready closing braces
