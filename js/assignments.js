Vue.component('assignments', {
  template: `<div class="assignments-container">
                <div class="container-left">
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=1"><h2>FPP 01 | Film Production Processes</h2></a>
                     <p>Status: Completed</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=2"><h2>FPP 01 | Film Production Processes 2</h2></a>
                     <p>Status: Completed</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=3"><h2>FPP 01 | Film Production Processes 3</h2></a>
                     <p>Status: Completed</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=4"><h2>MOTO 01 | Motion Graphics</h2></a>
                     <p>Status: Completed</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=5"><h2>MOTO 01 | Motion Graphics 2</h2></a>
                     <p>Status: Incompleted</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=6"><h2>ISD | Integrated Screen Design</h2></a>
                     <p>Status: Completed</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=7"><h2>WebTech 01 | HTML and CSS</h2></a>
                     <p>Status: Completed</p>
                </div>
                <div class="container-right">
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=8"><h2>CrosBro 01 | Cross Browser Development</h2></a>
                     <p>Status: Late Submission</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=9"><h2>WebTech 02 | Responsive Design</h2></a>
                     <p>Status: Completed</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=10"><h2>ProgFund 01 | Programming Fundamentals</h2></a>
                     <p>Status: Not Submitted</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=11"><h2>WebTech 03 | JavaScript, jQuery and Interactive Tech</h2></a>
                     <p>Status: Completed</p>
                     <a href="http://moodle.friendsofdesign.co.za/course/view.php?id=4&section=12"><h2>PreTech 01 | Precompiled Technologies</h2></a>
                     <p>Status: Active</p>
                </div>
            </div>
            `
});

var assignments = new Vue({
  el: '#assignments'
});