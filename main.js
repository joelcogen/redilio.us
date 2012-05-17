$(function(){
  $('a.email').each(function(i, node){
    node = $(node);
    node.attr('href', 'mailto:'.concat(node.data('user'), '@', node.data('domain'), '.', node.data('tld')));
  });

  $(document).konami({callback: function(){sonic_rainboom()}});
});
