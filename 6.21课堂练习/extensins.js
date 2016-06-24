/**
 * Created by sks on 2016/6/21.
 */
(function () {
    Object.defineProperties(HTMLElement.prototype,{useCustomeContextMenu:{
        get:function () {
            return this._useCustomContextMenu;
        },
        set:function (value) {
            this._useCustomeContextMenu=value;
            if (this._useCustomContextMenu){
                this.oncontextmenu=function (event) {
                    event.preventDefault();
                }
            }
            else{
                this.oncontextment=null;
            }

        }
    }
    ,
        contomContextMenu:
        {
            
        }
    });
}());