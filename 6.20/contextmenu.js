/**
 * Created by sks on 2016/6/20.
 */
(function () {
    var right = document.getElementById("right");
    var menu = document.getElementById("menu");
    function add() {
        right.addEventListener("contextmenu", function (event) {
            console.log(event);
            event.preventDefault();
        });
        right.addEventListener("click", function (event) {
            menu.style.display="none";
        });
        right.oncontextmenu=function(event){
            // var event=event||window.event;
            menu.style.display="block";
            menu.style.left=event.clientX+"px";
            menu.style.top=event.clientY+"px";
            console.log("1");
        }

    }
function init()
{
    add();
}
    init();
}());