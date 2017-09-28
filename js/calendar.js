$(document).ready(function(){
   $("#calendar").simpleCalendar({
        //Defaults options below
        months: ['january','february','march','april','may','june','july','august','september','october','november','december'], //string of months starting from january
        days: ['sunday','monday','tuesday','wenesday','thursday','friday','saturday'], //string of days starting from sunday
        minDate : "YYYY-MM-DD", // minimum date
        maxDate : "YYYY-MM-DD", // maximum date
        
    });
});