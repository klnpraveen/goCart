function data(e){for(var t=[],n=0;360>=n;n+=10){var r=(e+n)%360;t.push({x:n,y:Math.sin(Math.PI*r/180).toFixed(4),z:Math.cos(Math.PI*r/180).toFixed(4)})}return t}function update(){nReloads++,graph.setData(data(5*nReloads));var e=1+Math.floor(200*Math.random());$("#reloadStatus").text(e)}if($("#donut").length&&Morris.Donut({element:"donut",data:[{value:70,label:"foo"},{value:15,label:"bar"},{value:10,label:"baz"},{value:5,label:"A really really long label"}],formatter:function(e){return e+"%"}}).on("click",function(e,t){console.log(e,t)}),$("#coloredDonut").length&&Morris.Donut({element:"coloredDonut",data:[{value:15,label:"Success"},{value:60,label:"Primary"},{value:10,label:"Info"},{value:10,label:"Warning"},{value:5,label:"A really really long Danger"}],labelColor:"#54728c",colors:["#90c657","#54728c","#54b5df","#f9a94a","#e45857"],formatter:function(e){return e+"%"}}),$("#liveGraph").length)var nReloads=0,graph=Morris.Line({element:"liveGraph",data:data(0),xkey:"x",ykeys:["y","z"],labels:["sin()","cos()"],parseTime:!1,ymin:-1,ymax:1,hideHover:!0});if($("#visitors").length){var day_data=[{period:"2012-10-01",licensed:3407,sorned:660},{period:"2012-09-30",licensed:2351,sorned:629},{period:"2012-09-29",licensed:4269,sorned:618},{period:"2012-09-20",licensed:2846,sorned:661},{period:"2012-09-19",licensed:3957,sorned:667},{period:"2012-09-18",licensed:1548,sorned:627}];Morris.Bar({element:"visitors",data:day_data,xkey:"period",ykeys:["licensed","sorned"],labels:["Vistors","Unique"],xLabelAngle:60})}$("#barchart").length&&Morris.Bar({element:"barchart",data:[{device:"iPhone",geekbench:136},{device:"iPhone 3G",geekbench:137},{device:"iPhone 3GS",geekbench:275},{device:"iPhone 4",geekbench:380},{device:"iPhone 4S",geekbench:655},{device:"iPhone 5",geekbench:1571}],xkey:"device",ykeys:["geekbench"],labels:["Geekbench"],barRatio:.4,xLabelAngle:35,hideHover:"auto"}),new Morris.Line({element:"myfirstchart",data:[{year:"2008",value:0},{year:"2009",value:20},{year:"2010",value:0},{year:"2011",value:20},{year:"2012",value:0}],xkey:"year",ykeys:["value"],labels:["Value"]}),jQuery("#myTable").gvChart({chartType:"ColumnChart",gvSettings:{vAxis:{title:"No of Visitors"},hAxis:{title:"Month"},width:720,height:300}});