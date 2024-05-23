// ==UserScript==
// @name         BUCT auto download
// @namespace    https://180811.xyz
// @version      1.0.1
// @description  自动下载一切北化在线的文件
// @author       Ovler
// @require      https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js
// @match        https://course.buct.edu.cn/meol/common/script/preview/download_preview.jsp?*
// @match        https://course.buct.edu.cn/meol/analytics/resPdfShow.do?file=%2Fmeol%2Fanalytics%2FresPdfShow.do%3FresId%3D*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=buct.edu.cn
// @grant        none
// ==/UserScript==

function GetQueryString(name) {
    var reg = new RegExp(`(^|&)${name}=([^&]*)(&|\$)`, "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";

    if (r != null){
        context = r[2];
    }
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}
var fileid=GetQueryString("fileid");
//var resid=GetQueryString("resid");
//var lid=GetQueryString("lid");
var download_url="https://course.buct.edu.cn/meol/common/ckeditor/openfile.jsp?id=" + fileid
//var pdf_url="http://course.buct.edu.cn/meol/analytics/resPdfShow.do?resId=" + resid + "&lid=" + lid
//var download_url="http://course-proxy2.buct.edu.cn/meol/common/script/download.jsp?fileid=" + fileid + "&resid=" + resid
var filename = document.querySelector('h2>p>span:nth-child(1)').innerHTML;
saveAs( download_url, filename);
