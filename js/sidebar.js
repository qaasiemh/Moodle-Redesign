Vue.component('sidebar', {
  template: `<div class="sidebar-container">
             <h1>Moodle</h1>
             <a href="dashboard.html">Dashboard</a>
             <a href="assignments.html">Assignments</a>
             <a href="course-outline.html">Course Outline</a>
             <a href="#"<i class="fa fa-cog"></i></a>
            </div>
            `
});

var sidebar = new Vue({
  el: '#sidebar'
});


