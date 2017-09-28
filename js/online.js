Vue.component('online', {
  template: `<div class="online-container">
                 <h2>Users Online</h2>
                 <div class="underline"></div>
                 <h3>cristronaldo7</h3>
                 <p>Currently Online</p>
                 <h3>jamesbond007</h3>
                 <p>5 minutes ago</p>
                 <h3>michaeljordan23</h3>
                 <p>1 day ago</p>
                 <h3>alberteinsteinM2</h3>
                 <p>2 weeks ago</p>
                 <h3>barbiegirl911</h3>
                 <p>3 months ago</p>
                 <h3>batman1992</h3>
                 <p>1 year ago</p>
                 <h3>wonderwoman33</h3>
                 <p>it's been too long</p>
            </div>
            `
});

var online = new Vue({
  el: '#online'
});