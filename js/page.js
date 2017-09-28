Vue.component('active-ass', {
  template: `<div class="activeAss-container">
                 <h2>Active Assignments</h2>
                 <div class="underline"></div>
                 <p>PreTech 01 | Precompiled Technologies</p>
                 <p>Status: Active</p>
            </div>
            `
});

var activeAss = new Vue({
  el: '#activeAss'
});