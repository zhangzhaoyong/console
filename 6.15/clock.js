/**
 * Created by sks on 2016/6/15.
 */
(function () {

    var divClock;

    function formatTime(num)
    {
        return num>=10 ? num+"":"0"+num;
    }
    function showTime()
    {var date =new Date();
        divClock.innerHTML=formatTime(date.getHours())+":"+formatTime(date.getMinutes())+":"+formatTime(date.getSeconds());
    }

    function secondsAngle(){
        var date=new Date();
        var second=date.getSeconds()*6;
        var secondHand=document.getElementById("seconds");
        secondHand.style.transform = "rotate(" + second + "deg)";
     }
    function minutesAngle(){
        var date=new Date();
        var minute=(date.getMinutes()+date.getSeconds()/60)*6;
        var minuteHand=document.getElementById("minutes");
        minuteHand.style.transform = "rotate(" + minute + "deg)";
    }
    function hoursAngle(){
        var date=new Date();
        if(date.getHours()>12) {
            var hour = (date.getHours() - 12 + date.getMinutes() / 60) * 30;
        }
        else{
            var hour = (date.getHours() + date.getMinutes() / 60) * 30;
        }
        var hourHand=document.getElementById("hours");
        hourHand.style.transform = "rotate(" + hour + "deg)";
    }
    function init() {
        divClock=document.getElementById("clock");
        showTime();
        setInterval(showTime,500);
        setInterval(minutesAngle,500);
        setInterval(hoursAngle,500);
        setInterval(secondsAngle,500);

    }
    init();
}());
