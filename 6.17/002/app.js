/**
 * Created by sks on 2016/6/17.
 */
window.ucai=window.ucai||{};
(function () {
    function  App() {
        var h= new ucai.Human("张三");
        h.sayHello();
        var s=new ucai.Student("无多");
        s.sayHello();
        s.learn();
    }
    new App();
    App();
}());