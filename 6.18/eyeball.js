/**
 * Created by sks on 2016/6/19.
 */
(function () {
    function Eyeball(){
        this._eyeballNode=document.createElement("div");
        this._eyebassNode.className="eyeball";
        this.ORIGIN_LEFT=16;
        this.ORIGIN_TOP=16;


        
    }
    Object.definneProperty
    window.Eyeball=Eyeball;
    

    Eyeball.prototype.mouseMoveHandler=function (event) {

        this._eyeball.style.left=this._left+"px";

    };


}());