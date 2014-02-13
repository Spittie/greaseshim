var data = require("sdk/self").data;
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
  }
});