/**
 * Created by sks on 2016/6/13.
 */
(function() {
        var body,table,tr,td;
        var s=[{name:"姓名",score:"成绩"},{name:"zhangsan",score:"24"},{name:"lisi",score:"89"}];
        function init() {
            body=document.getElementById("body");
            table=document.createElement("table");
            table.border="1px";
            var m=[];
            tr=document.createElement("tr");
            var tHname=document.createElement("th");
            var tHscore=document.createElement("th");
            tHname.innerHTML=s[0].name;
            tHscore.innerHTML=s[0].score;
            tr.appendChild(tHname);
            tr.appendChild(tHscore);
            table.appendChild(tr);
            for(var i=1;i<3;i++) {
                tr= document.createElement("tr");
                for(var j=0;j<2;j++)
                {
                    td=document.createElement("td");
                    td.width="40px";
                    td.height="30px";
                    tr.appendChild(td);
                    if(j==0)
                    {
                        td.innerHTML = s[i].name;
                    }
                    else
                    {
                        td.innerHTML=s[i].score;
                    }
                }
                table.appendChild(tr);
            }
            body.appendChild(table);
            tHscore.onclick=function sort() {
                body=document.getElementById("body");
                body.removeChild(table);
                table=document.createElement("table");
                table.border="1px";
                var m=[];
                tr=document.createElement("tr");
                tHname=document.createElement("th");
                tHscore=document.createElement("th");
                tHname.innerHTML=s[0].name;
                tHscore.innerHTML=s[0].score;
                tr.appendChild(tHname);
                tr.appendChild(tHscore);
                table.appendChild(tr);
                if(s[1].score != s[2].score)
                {
                    m[0]=s[1];
                    s[1]=s[2];
                    s[2]=m[0];
                    console.log(m[0]);
                    console.log(s[1]);
                    console.log(s[2]);
                    for(i=1;i<3;i++)
                    {
                       var tr= document.createElement("tr");
                        for(j=0;j<2;j++)
                        {
                            var td=document.createElement("td");
                            td.width="40px";
                            td.height="30px";
                            tr.appendChild(td);
                            if(j==0)
                            {
                                td.innerHTML = s[i].name;
                                console.log(s[i].name)
                            }
                            else
                            {
                                td.innerHTML=s[i].score;
                                console.log(s[i].score)
                            }
                        }
                        table.appendChild(tr);
                    }
                }
                body.appendChild(table);
                tHscore.onclick=sort;
            }

        }
        init();
    }
)();