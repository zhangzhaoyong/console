/**
 * Created by sks on 2016/6/16.
 */
(function () {
     function establish() {
         for(var j=0;j<=12;j=j+3) {
             var div = document.createElement("div");
             document.body.appendChild(div);
             div.style.width = "291px";
             div.style.height = "220px";
             div.style.position = "relative";
             div.style.transformStyle = "preserve-3d";
             div.style.float="left";
             div.style.marginLeft="6px";
             for (var i = 1; i <= 2; i++) {
                 var img = document.createElement("img");
                 img.src = i+j + ".jpg";
                 img.style.width = "291px";
                 img.style.height = "220px";
                 img.style.position = "absolute";
                 img.style.transform = (i == 1) ? "" : "rotateY(180deg) translateZ(1px)";
                 div.appendChild(img);
             }
             div.onmouseover = function () {
                 this.style.animation = "animTo180 2s forwards";
             };
             div.onmouseout = function () {
                 this.style.animation = "animTo0 2s forwards";
             };
         }
     }
    establish();
}());