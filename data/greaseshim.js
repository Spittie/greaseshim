function GM_openInTab(_url) {
  self.port.emit("GM_openInTab", _url);
};

function GM_setValue(_name, _value) {
  localStorage[_name] = _value;
};

function GM_getValue(_name, _default) {
  return localStorage[_name] || _default;
};

function GM_deleteValue(_name) {
  localStorage.removeItem(_name);
};

function GM_setClipboard(_text) {
  self.port.emit("GM_setClipboard", _text);
};

//Deprecated
function GM_log(_message) {
  console.log(_message);
};

function GM_xmlhttpRequest(_details) {
  //Ugly hack? Race condition? Memory leak?
  _onload = _details.onload;
  self.port.emit("GM_xmlhttpRequest", _details);
};

self.port.on("callback_GM_xmlhttpRequest", function(_response) {
  _onload(_response);
});

self.port.on("load-userscript", function(_script) {
  eval(_script);
});