'use strict'

Vue.component('login-page', {
    template: `
                <form class="login-container">
                    <h2>Login</h2>
                    <label>Username:</label>
                    <input v-on:click="focus" type="text" id="username" placeholder="Username">

                    <label>Password:</label>
                    <input type="password" id="password" placeholder="Password">

                    <input v-on:click="checkpass" type="submit" value="Submit" id="submitBtn">

                    <a href="#" class="forgot-pass">Forgot Password?</a>
                </form>
                `,
    methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'andrew' && pass === '123456') {
        alert('Username and password correct!');
          
          window.location = "./dashboard.html";
        
      } else {
        alert('Wrong password, dude.');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "#ff0000";
      
    }
  }
    
});

var login = new Vue ({
    el: '#login'
})



