import ProgressBar from 'progressbar.js';

class Bar {
  constructor () {
    this.bar_list = [];
  }

  makeProgressBar (option) {
    let id = option.id;//containt
    let position = option.position || 1; // 0.8
    let width = option.width || 10;
    let defaultColor = option.strokeColor || '#fff';
    let txt = option.txt || '';

    let bar = new ProgressBar.Circle(id, {
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

    this.bar_list.push({bar: bar, position: position});
  }

  animateBar () {
    for (let i = 0, len = this.bar_list.length; i < len; i++) {
      let cur_bar_obj = this.bar_list[i];
      cur_bar_obj.bar.animate(cur_bar_obj.position);
    }
  }

  initProgressBar () {
    let bar_config = [
      {id: '#bar_h5', txt: 'HTML 5', position: 0.7},
      {id: '#bar_js', txt: 'JavaScript', position: 0.7},
      {id: '#bar_css', txt: 'CSS 3', position: 0.6},
      {id: '#bar_nodejs', txt: 'Nodejs', position: 0.6},
      {id: '#bar_bootstrap', txt: 'bootstrap', position: 0.6},
      {id: '#bar_jquery', txt: 'jquery', position: 0.7},
      {id: '#bar_vue', txt: 'vue', position: 0.6},
      {id: '#bar_webpack', txt: 'webpack', position: 0.7}
    ]

    for (let i = 0, len = bar_config.length; i < len; i++) {
      let cur_config = bar_config[i];
      this.makeProgressBar({
        id: cur_config.id,
        position: cur_config.position,
        width: 10,
        strokeColor: '#ED6A5A',
        txt: cur_config.txt
      })
    }
  }
}

export default Bar;
