/**
 * Created by sks on 2016/6/15.
 */
(function () {
    function Student(name){
        var self=Human(name);
        self.learn=function(){
            console.log(self.name+"学习");
        };
        var superSayHello=self.sayHello;
        self.sayHello=function() {
            superShyHello();
            console.log("学生" + self.name + "说你好");
        }
        return self;
    }
}());