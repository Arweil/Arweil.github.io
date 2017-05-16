import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullpage.css';
import 'fullpage.js/dist/jquery.fullpage.js';
import Bar from './bar.js';

class Intro {
  constructor () {
    this.has_init_bar = false;
    this.barHandle = new Bar();
  }

  init () {
    $('#masks').fullpage({
      onLeave: (index, nextIndex, direction) => {
        let $top = $('.J_top');
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
      afterLoad: (anchorLink, index) => {
        if (index == 3 && !this.has_init_bar) {
          this.barHandle.animateBar();
          this.has_init_bar = true;
        }
      }
    });

    this.barHandle.initProgressBar();
  }
}

export default Intro;
