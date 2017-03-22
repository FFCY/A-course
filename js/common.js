/*分享页面跳转地址*/
var andAppUrl="http://118.89.150.168:8087/static/page/a/teaMsg/downPage.html";
var iosAppUrl="http://118.89.150.168:8087/static/page/a/teaMsg/downPage.html";
/*设置是不是app打开*/
var agent=navigator.userAgent
var hasPlus=agent.indexOf("isaplus");
/*判断手机机型（start from teacher 207 common）*/
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
/*判断页面中是否含有null或是undefined*/
//function hasNull(msg){
//	var dataArray=msg.d;
//	console.log(dataArray.length);
//	for(l=0;l<dataArray.length;l++){
//		console.log("dddddddddddddddd")
//		if(dataArray[l]==null){
//			console.log(dataArray[l])
//		}else if(dataArray[l]==undefined){
//			console.log(dataArray[l])
//		}else{
//			console.log("jjjjj")
//		}
//	}
//}

//var agent=location.search; 
//var hasPlus=agent.indexOf("isaplus");

