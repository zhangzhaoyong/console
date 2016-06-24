/**
 * Created by sks on 2016/6/14.
 */
/**
 * Created by sks on 2016/6/13.
 */
(function() {
        var body,table,tr,td;
        var s=[{name:"姓名",score:"成绩"}];
        var h=[{name:"zhangsan",score:24},{name:"lisi",score:"89"},{name:"wangwu",score:"61"},{name:"zhaoliu",score:"73"}];
        function init() {
            var tHscore=document.createElement("th");
            function establish()
            {
            body=document.getElementById("body");
            table=document.createElement("table");
            table.border="1px";
            tr=document.createElement("tr");
            var tHname=document.createElement("th");
            tHname.innerHTML=s[0].name;
            tHscore.innerHTML=s[0].score;
            tr.appendChild(tHname);
            tr.appendChild(tHscore);
            table.appendChild(tr);
            for(var i=0;i<h.length;i++) {
                tr= document.createElement("tr");
                for(var j=0;j<2;j++)
                {
                    td=document.createElement("td");
                    td.width="40px";
                    td.height="30px";
                    tr.appendChild(td);
                    if(j==0)
                    {
                        td.innerHTML = h[i].name;
                    }
                    else
                    {
                        td.innerHTML=h[i].score;
                    }
                }
                table.appendChild(tr);
            }
            body.appendChild(table);
        }
            establish();
            var m=true;
            tHscore.onclick=function onclick() {
                body.removeChild(table);
                    function gradeSort()
                    {
                        if(m)
                        {
                            h.sort(function(a,b)
                            {
                                return a.score > b.score;
                            });
                            m=false;
                        }
                        else 
                        {
                            h.sort(function(a,b)
                            {
                                return a.score<b.score;
                            });
                            m=true;
                        }
                    }
                gradeSort();
                establish();
                tHscore.onclick=onclick;
            }
        }
        init();
    }
)();