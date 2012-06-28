$(function(){
  $('a.email').each(function(i, node){
    node = $(node);
    node.attr('href', 'mailto:'.concat(node.data('user'), '@', node.data('domain'), '.', node.data('tld')));
  });

  setInterval(function(){
    $('footer em').eq(0).text('d');
    $('footer em').eq(1).text('l');
    $('footer em').eq(2).text('r');
    setTimeout(function(){
      $('footer em').eq(0).text('r');
      $('footer em').eq(1).text('d');
      $('footer em').eq(2).text('l');
    }, 500);
  }, 30000);

  $(document).konami({callback: function(){sonic_rainboom()}});
});
