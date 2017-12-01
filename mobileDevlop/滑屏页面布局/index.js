/** 禁止默认滑动事件 **/
//document.body.addEventListener('touchmove',function(event){
//	event = event ? event : window.event;
//	if(event.preventDefault) { event.preventDefault(); } //取消事件的默认动作
//	else { event.returnValue = false; }
//},false);

var page = function(obj){
	var box = document.getElementById(obj.wrap),
	        box2 = document.getElementById(obj.wrap2),
	        len = obj.len,
	        n = obj.n,
	        StartY, moveY, cliH,
	        getH = function() {cliH = document.body.clientHeight }; //获取屏幕高度
	        getH();
	        window.addEventListener('resize', getH, false);
	        var touchstart = function(event){
	        	console.log(event);
	       		if(!event.touchs.length) { return; }
	       		StartY = event.touches[0].pageY;
	       		moveY = 0;
	       };
	       var touchmove = function(event){
	       		if(!event.touches.length) { return; }
	       		moveY = event.touches[0].pageY - startY;
	       		box2.style.transform = 'translateY(' + (-n*cliH + moveY) +'px )'; //根据手指的位置移动页面
	       };
	       var touchend = function(event){
	       	//位移小于+-50的不翻页
	       	if(moveY < -50) n++;
	       	if(moveY > 50) n--;
	       	//最后 最前
	       }
}

page({
	wrap: 'wrap',  //.wrap的id
	wrap2: 'wrap2',
	n: 0, //页面一打开默认在第几页，第一页就是0，第二页就是1
	len: 6 //一共几页
});
