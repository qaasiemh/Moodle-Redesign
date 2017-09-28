// MAIN-MENU COMPONENT

'use strict';

var mainMenu = {
    username: 'jarelda28',
    image: 'img/jarelda.png'
}


Vue.component('main-menu', {
  template: `<div class="mainMenu-container">
             <a href="dashboard.html"><i class="fa fa-home"></i></a>
             <p>Web Publishing & Interactive Media</p>
              <div class="img-container">
                <img v-bind:src="image">
              </div>
              <p>{{ username }}</p>
             <a href="#"><i class="fa fa-comments-o"></i></a>
             <a href="index.html"><i class="fa fa-sign-out"></i></a>
            </div>
            `,
  data: function() {
    return mainMenu;
  }
})

var profile = new Vue({
  el: '#mainMenu'
})