// JavaScript Document
window.onload=function(){
  var str='';
  //创建数组对象
  data=[
       [{title:'第一课'},
       {url:'a/one/1.html',title:'控制div属性'},
       {url:'a/one/2.html',title:'网页换肤'},
       {url:'a/one/3.html',title:'循环div将其变色'},
       {url:'a/one/4.html',title:'鼠标移入移出'},
       {url:'a/one/5.html',title:'图片放大和缩小'}
       ],
       [{title:'第二课'},
       {url:'a/two/1.html',title:'点击div,显示其内容'},
       {url:'a/two/2.html',title:'求出数组中所有数的和'},
       {url:'a/two/3.html',title:'函数传参，改变div任意属性值'},
       {url:'a/two/4.html',title:'改变图片透明度'},
       {url:'a/two/5.html',title:'弹出层效果'}
       ],
       [{title:'第三课'},
       {url:'a/three/1.html',title:'选项切换'},
       {url:'a/three/2.html',title:'点击div闪烁效果'},
       {url:'a/three/3.html',title:'文字无缝滚动'},
       {url:'a/three/4.html',title:'间接性滚动'},
       {url:'a/three/5.html',title:'伸缩菜单'}
       ],
       [{title:'第四课'},
       {url:'a/four/1.html',title:'按下键盘，显示keyCode'},
       {url:'a/four/2.html',title:'抽奖小游戏'},
       {url:'a/four/3.html',title:'简易的时钟'}
       ],
       [{title:'第五课'},
       {url:'a/five/1.html',title:'幻灯片切换'},
       {url:'a/five/2.html',title:'新手引导效果'},
       {url:'a/five/3.html',title:'放大镜效果'},
       {url:'a/five/4.html',title:'ToolTip效果'}
       ],
       [
        {title:'第六课'},
        {url:'a/six/1.html',title:'仿苹果电脑任务栏菜单'},
        {url:'a/six/2.html',title:'全屏效果(jQuery)'},
        {url:'a/six/3.html',title:'回到顶部'},
        {url:'a/six/4.html',title:'拖拽效果'},
        {url:'a/six/5.html',title:'焦点轮播图'},
        {url:'a/six/7.html',title:'鼠标移入星星闪烁'}
       ]
  ];
  for(var i=0;i<data.length;i++){
  	var items=data[i];
  	var subs='';
  	for (var j = 0; j < items.length; j++) {
  		var obj=items[j];
  		if(j==0){
  			subs+='<li class="list"><h1><a href="javascript:;" title="'+obj.title+'">'+obj.title+'</a></h1><dl class="sub-dl">';
  		}else{
  			subs+='<dd class="dlist"><a href="'+obj.url+'" target="_blank" title="'+obj.title+'">'+obj.title+'</a></dd>';
  		}
  		if(j==items.length-1){
  			subs+='</dl></li>';
  		}
  	}
  	str+=subs;
  }
  var ol=document.getElementById('ol_li');
  ol.innerHTML=str;
  var h1=ol.getElementsByTagName('h1');
  var dl=ol.getElementsByTagName('dl');
  var temp=-1;
  var open=false;
  for (var i = 0; i < h1.length; i++) {
  	h1[i].index=i;
  	h1[i].onclick=function(){
         for (var i = 0; i < h1.length; i++) {
         	dl[i].style.display='none';
           }
          if(temp==this.index&&open){
          	dl[this.index].style.display='none';
          	open=false;
          }else{
            dl[this.index].style.display='block';
            open=true;
          }
          temp=this.index;
  	}
  }
}
