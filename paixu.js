/**
 * Created by sks on 2016/6/15.
 */
(function(){
    var currentTable;

    var students=[
        {name:"ZhanSan",score:80},
        {name:"LiSi",score:30},
        {name:"ucai",score:90},
        {name:"WangWu",score:60},
        {name:"MaLiu",score:20}
    ];
    function createTableHeader() {
        var tr=document.createElement("tr");
        var th=document.createElement("th");
        th.innerHTML="姓名"
        tr.innerHTML("th");
        th=document.createElement("th");
        var a=document.createElement("a");
        a.href="#";
        a.innerHTML="成绩"；
        a.onclick=linkSortByScoreClickHandler;
        th.appendChild(a);
        tr.appendChild(th);
        return tr;

    }
    function createTableRow(students) {

        var tr=document.createElement("tr");

        var td=document.createElement("td");


    }


})();