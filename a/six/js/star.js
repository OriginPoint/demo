window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();
//类
var starObj=function(){
	this.x;
	this.y;
	this.imgNum;//星星产生数量
	this.timer;//定义
	this.xSpeed;
	this.ySpeed;
}
starObj.prototype.init=function(){
	this.x=Math.random()*400+180;//Math.random[0,1]
	this.y=Math.random()*250+150;
	this.imgNum=Math.floor(Math.random() * 7);
	this.timer=0;
	this.xSpeed=Math.random() * 3 -1.5;
	this.ySpeed=Math.random() * 3 -1.5;
}
//星星动 序列帧
starObj.prototype.update=function(){
	//随机移动
	this.x += this.xSpeed * deltaTime * 0.005;
	this.y += this.ySpeed * deltaTime * 0.005;
	//超过范围 重新生成
	if (this.x <175 || this.x>620) {
		this.init();
		return;
	}
	if (this.y <150 || this.y>420) {
		this.init();
		return;
	}
	this.timer+= deltaTime;
	//判断时间大于100毫秒
	if (this.timer > 100) {
		this.imgNum += 1;
		this.imgNum %= 7;
		this.timer=0;
	}
}
starObj.prototype.draw=function(){
	//save();
	ctx.save();
	//globalAlpha 全局透明度
	ctx.globalAlpha=life;
	//drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
	ctx.drawImage(starImg,this.imgNum*7,0,7,7,this.x,this.y,7,7);
	ctx.restore();
	//restore();
}
//绘制星星
function drawStars(){
	for (var i = 0; i < num; i++) {
		starts[i].update();
		starts[i].draw();
	}
}
