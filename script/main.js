var barHandle = (function () {
  var bar_list = [];

  var makeProgressBar = function (option) {
    var id = option.id;//containt
    var position = option.position || 1; // 0.8
    var width = option.width || 10;
    var defaultColor = option.strokeColor || '#fff';
    var txt = option.txt || '';

    var bar = new ProgressBar.Circle(id, {
      color: defaultColor,
      trailColor: '#eee',
      trailWidth: width,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: width,
      text: {
        value: txt,
        className: 'bar-txt'
      }
    });

    bar_list.push({bar: bar, position: position});
  }

  var animateBar = function () {
    for (var i = 0, len = bar_list.length; i < len; i++) {
      var cur_bar_obj = bar_list[i];
      cur_bar_obj.bar.animate(cur_bar_obj.position);
    }
  }

  var initProgressBar = function () {
    var bar_config = [
      {id: '#bar_h5', txt: 'HTML 5', position: 0.8},
      {id: '#bar_js', txt: 'JavaScript', position: 0.2},
      {id: '#bar_css', txt: 'CSS 3', position: 0.3},
      {id: '#bar_nodejs', txt: 'Nodejs', position: 0.4},
      {id: '#bar_bootstrap', txt: 'bootstrap', position: 0.1},
      {id: '#bar_jquery', txt: 'jquery', position: 0.2},
      {id: '#bar_vue', txt: 'vue', position: 0.3},
      {id: '#bar_gulp', txt: 'gulp', position: 0.4}
    ]

    for (var i = 0, len = bar_config.length; i < len; i++) {
      var cur_config = bar_config[i];
      makeProgressBar({
        id: cur_config.id,
        position: cur_config.position,
        width: 10,
        strokeColor: '#ED6A5A',
        txt: cur_config.txt
      })
    }
  }

  return {
    initProgressBar: initProgressBar,
    animateBar: animateBar
  }
})()


var intro = (function () {
  var init = function () {
    var has_init_bar = false;

    $('#masks').fullpage({
      onLeave: function (index, nextIndex, direction) {
        var $top = $('.J_top');
        switch (nextIndex) {
          case 1:
            $top.css('background-color', 'rgba(0, 0, 0, 0)');
            break;
          case 2: 
            $top.css('background-color', '#161325');
            break;
          case 3: 
            $top.css('background-color', '#061923');
            break;
          case 4: 
            $top.css('background-color', '#072622');
            break;
        }

        switch (direction) {
          case 'down': 
            break;
          case 'up':
            break;
        }
      },
      afterLoad: function(anchorLink, index){
        if (index == 3 && !has_init_bar) {
          barHandle.animateBar();
          has_init_bar = true;
        }
      }
    });

    barHandle.initProgressBar();
  }

  return {
    init : init
  }
})()
