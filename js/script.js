//esconder o botão
const botaoElement = document.getElementById("botao")

botaoElement.addEventListener("click", () => {
  (function(s, z, c, h, a, t) {
    s.webchat = s.webchat || function() {
      (s.webchat.q = s.webchat.q || []).push(arguments);
    };
    t = z.createElement(c),
      a = z.getElementsByTagName(c)[0]; t.async = 1;
    t.src = 'https://foa.sz.chat/webchat/v2/webchat.js'; 
    a.parentNode.insertBefore(t, a);
    s.webchat('cid', '5fdbd59f1350dd1c60113e3b');
    s.webchat('host', h);
  })(window, document, 'script', 'https://foa.sz.chat');
  $(".popout").hide();
})

$(".popout .btn").hover(function() {
  if (!$(".popMessage").hasClass("animation")) {
    $(this).closest(".popout").find(".panel").addClass("active");
  }
});

$(".popout").mouseleave(function() {
	$(this).closest(".popout").find(".panel").removeClass("active");
});

$(document).click(function() {
	$(".popout .panel").removeClass("active");
	$(".popout .btn").removeClass("active");
});

$(".popout .panel").click(function(event) {
	event.stopPropagation();
  $(".message").show();
});

$(".popout .btn").click(function(event) {
	event.stopPropagation();
  $(".message").hide();
});

$(".popout .btn").click(function() {
  $(this).closest(".popout").find(".panel").removeClass("active");
  $(".popMessage").toggleClass("animation");
});

