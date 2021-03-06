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
- [GM_setValue](http://wiki.greasespot.net/GM_setValue) (using localStorage)
- [GM_getValue](http://wiki.greasespot.net/GM_getValue) (using localStorage)
- [GM_deleteValue](http://wiki.greasespot.net/GM_deleteValue) (using localStorage)
- [GM_listValues](http://wiki.greasespot.net/GM_listValues) (using localStorage)
- [GM_openInTab](http://wiki.greasespot.net/GM_openInTab)
- [GM_log](http://wiki.greasespot.net/GM_log)
- [GM_xmlhttpRequest](http://wiki.greasespot.net/GM_xmlhttpRequest) (limited)
- [GM_addStyle](http://wiki.greasespot.net/GM_addStyle)
- [GM_setClipboard](http://wiki.greasespot.net/GM_setClipboard) (Doesn't work on mobile Firefox)

Implemented with localStorage mean that the script can access data only on the site where it's saved.
GM_xmlhttpRequest might have a race condition in case of many requests.

## Stubs
- [GM_registerMenuCommand](http://wiki.greasespot.net/GM_registerMenuCommand)
- [GM_info](http://wiki.greasespot.net/GM_info) (Some hardcoded values)

## Missing
- [Metadata Block](http://wiki.greasespot.net/Metadata_Block)
- [GM_getResourceText](http://wiki.greasespot.net/GM_getResourceText)
- [GM_getResourceURL](http://wiki.greasespot.net/GM_getResourceURL)
- [unsafeWindow](http://wiki.greasespot.net/UnsafeWindow)

## Example of userscripts working:
- [4chan X](https://github.com/Spittie/4chan-x)
- [OneeChan](https://github.com/seaweedchan/OneeChan)
- [Youtube Center](https://userscripts.org/scripts/show/114002)
