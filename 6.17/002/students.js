/**
 * Created by sks on 2016/6/17.
 */
window.ucai=window.ucai||{};
(function () {
    function Student(name) {
        ucai.Human.call(this,name);
    }
    Student.prototype=new ucai.Human();
    Student.prototype.learn=function(){
        console.log(this.name+"学习");
    };
    window.ucai.Student=Student;
}());