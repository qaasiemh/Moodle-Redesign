Vue.component('report', {
  template: `<div class="report-container">
                 <h2>Grade Report</h2>
                 <div class="underline"></div>
                 <h3>FPP 01 | Film Production Processes</h3>
                 <p>Mark: 75%</p>
                 <h3>MOTO 01 | Motion Graphics</h3>
                 <p>Mark: 80%</p>
                 <h3>ISD | Integrated Screen Design</h3>
                 <p>Mark: 71%</p>
                 <h3>WebTech 01 | HTML & CSS</h3>
                 <p>Mark: 89%</p>
                 <h3>CrosBro 01 | Cross Browser Development</h3>
                 <p>Mark: 54%</p>
                 <h3>MOTO 01 | Motion Graphics 2</h3>
                 <p>Mark: 70%</p>
            </div>
            `
});

var report = new Vue({
  el: '#report'
});