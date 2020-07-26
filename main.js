// ==UserScript==
// @name        麦獭云课堂在potplayer打开
// @namespace   Violentmonkey Scripts
// @match       https://www.edu-meta.com/clazz/play.php
// @grant       none
// @version     1.0
// @author      gchengyu
// @description 2020/7/26 上午11:32:10
// ==/UserScript==

function GetQueryString(name) { 
         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
         var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
         var context = ""; 

     if (r != null) 
     context = r[2]; 
    reg = null; 
    r = null; 
    return context == null || context == "" || context == "undefined" ? "" : context; 
 }

var lesson_id=GetQueryString("lesson_id");
var courseid=GetQueryString("courseid");
var title=GetQueryString("title");
var rec_m3u8_url="http://metawww.img-cn-hangzhou.aliyuncs.com/courses/" + courseid + "/hls/" + lesson_id + ".m3u8" 
var potplayer_rec_m3u8="potplayer://http://metawww.img-cn-hangzhou.aliyuncs.com/courses/" + courseid + "/hls/" + lesson_id + ".m3u8" ;
window.open( potplayer_rec_m3u8 );              //打开potplayer
