// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest

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
  localStorage.removeItem(_name) 
};

function GM_setClipboard(_text) {
  self.port.emit("GM_setClipboard", _text);
};

//Deprecated
function GM_log(_message) {
  console.log(_message)
};

self.port.on('load-userscript', function(script) {
  test = new String(script)
  eval(script);
});