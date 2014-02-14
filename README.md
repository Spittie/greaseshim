greaseshim
==========
simple shim to convert userscripts to Firefox-sdk extensions.

## How to use
- Install the [Addon SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation).
- Clone this repository.
- Change `include: "*.example.org"` to the website your script is going to run on. [More informations](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)
- Save your userscript as `userscript.user.js` in the /data folder
- Build with `cfx xpi` or `cfx xpi --force-mobile`

## What's implemented
- [GM_setValue](http://wiki.greasespot.net/GM_deleteValue) (using localStorage)
- [GM_getValue](http://wiki.greasespot.net/GM_getValue) (using localStorage)
- [GM_deleteValue](http://wiki.greasespot.net/GM_deleteValue) (using localStorage)
- [GM_openInTab](http://wiki.greasespot.net/GM_openInTab)
- [GM_log](http://wiki.greasespot.net/GM_log)
- [GM_xmlhttpRequest](http://wiki.greasespot.net/GM_xmlhttpRequest)

Implemented with localStorage mean that the script can access data only on the site where it's saved.
GM_xmlhttpRequest might have a race condition in case of many requests.

## Stubs
- [GM_registerMenuCommand](http://wiki.greasespot.net/GM_registerMenuCommand)

## Example of userscripts working:
- [4chan X](https://github.com/Spittie/4chan-x)