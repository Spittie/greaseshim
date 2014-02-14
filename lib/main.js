var data = require("sdk/self").data;
var Request = require("sdk/request").Request;
var tabs = require("sdk/tabs");
var clipboard = require("sdk/clipboard");
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: "*.example.org",
  contentScriptFile: data.url("greaseshim.js"),
  contentScriptWhen: "start",
  onAttach: function(worker) {
    worker.port.emit("load-userscript", data.load("userscript.user.js"));
    worker.port.on("GM_openInTab", function(url) {
      tabs.open(url);
    });
    worker.port.on("GM_setClipboard", function(text) {
      clipboard.set(text);
    });
   worker.port.on("GM_xmlhttpRequest", function(details) {
     xhr = Request({
      url: details.url,
      overrideMimeType: details.overrideMimeType,
      onComplete: function(response) {
        response.responseText = response.text;
        for (var headerName in response.headers) {
          _string = headerName + ": " + response.headers[headerName] + " \n";
          response.responseHeaders += _string;
        }
        worker.port.emit("callback_GM_xmlhttpRequest", response);
      }
     })
     switch(details.method){
       case "GET":
         xhr.get();
         break;
       case "POST":
         xhr.post();
         break;
       case "HEAD":
         xhr.head();
         break;
       case "PUT":
         xhr.put();
         break;
       default: xhr.get();
     }
   });
  }
});