function obj_str(obj){
	
	obj.suijishu = Math.floor(Math.random() * 9)+1;//给obj动态添加随机数
	
	var res = [];//创建一个新数组
	
	for(var key in obj){//键值对
		res.push(encodeURIComponent(key) + "=" +encodeURIComponent( obj[key]));
	}
	return res.join('&')
	
}
function ajax(url,obj,time,success,error){
	var str = obj_str(obj)
		var xmlhttp,timeout;
	if(window.XMLHttpRequest){//如果浏览器支持XMLHttpRequest方法则使用XMLHttpRequest
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")//如果不支持则使用ctiveXObject
	}
	
	xmlhttp.open('GET',url+"?"+str,true);

	xmlhttp.send();
	xmlhttp.onreadystatechange = function(ev2){
		if(xmlhttp.readyState === 4 ){
			clearInterval(timeout)
			// console.log("返回结果")
			if(xmlhttp.status >=200 && xmlhttp.status < 300 || xmlhttp.status === 304){
				// console.log("请求成功")
				// console.log(xmlhttp.responseText)
				success(xmlhttp)
			}else{
				// console.log("请求失败")
				error(xmlhttp)
			}
			
		}
	}
	if(time){
		timeout = setInterval(function(){
			xmlhttp.abort();
			console.log('请求超时')
			clearInterval(timeout)
		},time);
	}
}