!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,r=document.createElement("source"),n=function(e){var t,n,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=r.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)};return r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(e,t,r){"use strict";function n(e){return" "===e||"	"===e||"\n"===e||"\f"===e||"\r"===e}function s(t,r){var n=new e.Image;return n.onerror=function(){T[t]=!1,te()},n.onload=function(){T[t]=1===n.width,te()},n.src=r,"pending"}function i(){Q=!1,F=e.devicePixelRatio,G={},H={},v.DPR=F||1,N.width=Math.max(e.innerWidth||0,b.clientWidth),N.height=Math.max(e.innerHeight||0,b.clientHeight),N.vw=N.width/100,N.vh=N.height/100,g=[N.height,N.width,F].join("-"),N.em=v.getEmValue(),N.rem=N.em}function c(e,t,r,n){var s,i,c,a;return"saveData"===C.algorithm?e>2.7?a=r+1:(i=t-r,s=Math.pow(e-.6,1.5),c=i*s,n&&(c+=.1*s),a=e+c):a=r>1?Math.sqrt(e*t):e,a>r}function a(e){var t,r=v.getSet(e),n=!1;"pending"!==r&&(n=g,r&&(t=v.setRes(r),v.applySetCandidate(t,e))),e[v.ns].evaled=n}function u(e,t){return e.res-t.res}function o(e,t,r){var n;return!r&&t&&(r=e[v.ns].sets,r=r&&r[r.length-1]),n=l(t,r),n&&(t=v.makeUrl(t),e[v.ns].curSrc=t,e[v.ns].curCan=n,n.res||ee(n,n.set.sizes)),n}function l(e,t){var r,n,s;if(e&&t)for(s=v.parseSet(t),e=v.makeUrl(e),r=0;r<s.length;r++)if(e===v.makeUrl(s[r].url)){n=s[r];break}return n}function f(e,t){var r,n,s,i,c=e.getElementsByTagName("source");for(r=0,n=c.length;n>r;r++)s=c[r],s[v.ns]=!0,i=s.getAttribute("srcset"),i&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function d(e,t){function r(t){var r,n=t.exec(e.substring(d));return n?(r=n[0],d+=r.length,r):void 0}function s(){var e,r,n,s,i,u,o,l,f,d=!1,A={};for(s=0;s<a.length;s++)i=a[s],u=i[i.length-1],o=i.substring(0,i.length-1),l=parseInt(o,10),f=parseFloat(o),J.test(o)&&"w"===u?((e||r)&&(d=!0),0===l?d=!0:e=l):X.test(o)&&"x"===u?((e||r||n)&&(d=!0),0>f?d=!0:r=f):J.test(o)&&"h"===u?((n||r)&&(d=!0),0===l?d=!0:n=l):d=!0;d||(A.url=c,e&&(A.w=e),r&&(A.d=r),n&&(A.h=n),n||r||e||(A.d=1),1===A.d&&(t.has1x=!0),A.set=t,p.push(A))}function i(){for(r(j),u="",o="in descriptor";;){if(l=e.charAt(d),"in descriptor"===o)if(n(l))u&&(a.push(u),u="",o="after descriptor");else{if(","===l)return d+=1,u&&a.push(u),void s();if("("===l)u+=l,o="in parens";else{if(""===l)return u&&a.push(u),void s();u+=l}}else if("in parens"===o)if(")"===l)u+=l,o="in descriptor";else{if(""===l)return a.push(u),void s();u+=l}else if("after descriptor"===o)if(n(l));else{if(""===l)return void s();o="in descriptor",d-=1}d+=1}}for(var c,a,u,o,l,f=e.length,d=0,p=[];;){if(r(V),d>=f)return p;c=r(_),a=[],","===c.slice(-1)?(c=c.replace(K,""),s()):i()}}function p(e){function t(e){function t(){i&&(c.push(i),i="")}function r(){c[0]&&(a.push(c),c=[])}for(var s,i="",c=[],a=[],u=0,o=0,l=!1;;){if(s=e.charAt(o),""===s)return t(),r(),a;if(l){if("*"===s&&"/"===e[o+1]){l=!1,o+=2,t();continue}o+=1}else{if(n(s)){if(e.charAt(o-1)&&n(e.charAt(o-1))||!i){o+=1;continue}if(0===u){t(),o+=1;continue}s=" "}else if("("===s)u+=1;else if(")"===s)u-=1;else{if(","===s){t(),r(),o+=1;continue}if("/"===s&&"*"===e.charAt(o+1)){l=!0,o+=2;continue}}i+=s,o+=1}}}function r(e){return l.test(e)&&parseFloat(e)>=0?!0:f.test(e)?!0:"0"===e||"-0"===e||"+0"===e}var s,i,c,a,u,o,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=t(e),c=i.length,s=0;c>s;s++)if(a=i[s],u=a[a.length-1],r(u)){if(o=u,a.pop(),0===a.length)return o;if(a=a.join(" "),v.matchesMedia(a))return o}return"100vw"}t.createElement("picture");var A,m,h,g,v={},w=!1,S=function(){},x=t.createElement("img"),y=x.getAttribute,E=x.setAttribute,z=x.removeAttribute,b=t.documentElement,T={},C={algorithm:""},R="data-pfsrc",L=R+"set",M=navigator.userAgent,P=/rident/.test(M)||/ecko/.test(M)&&M.match(/rv\:(\d+)/)&&RegExp.$1>35,D="currentSrc",B=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,U=e.picturefillCFG,k="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",W="font-size:100%!important;",Q=!0,G={},H={},F=e.devicePixelRatio,N={px:1,"in":96},O=t.createElement("a"),q=!1,j=/^[ \t\n\r\u000c]+/,V=/^[, \t\n\r\u000c]+/,_=/^[^ \t\n\r\u000c]+/,K=/[,]+$/,J=/^\d+$/,X=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Y=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)},$=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r},r=$(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,n){var s;if(!(t in G))if(G[t]=!1,n&&(s=t.match(e)))G[t]=s[1]*N[s[2]];else try{G[t]=new Function("e",r(t))(N)}catch(i){}return G[t]}}(),ee=function(e,t){return e.w?(e.cWidth=v.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},te=function(e){if(w){var r,n,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=i.elements||v.qsa(i.context||t,i.reevaluate||i.reselect?v.sel:v.selShort),s=r.length){for(v.setupRun(i),q=!0,n=0;s>n;n++)v.fillImg(r[n],i);v.teardownRun(i)}}};A=e.console&&console.warn?function(e){console.warn(e)}:S,D in x||(D="src"),T["image/jpeg"]=!0,T["image/gif"]=!0,T["image/png"]=!0,T["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("pf"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in x,v.supSizes="sizes"in x,v.supPicture=!!e.HTMLPictureElement,v.supSrcset&&v.supPicture&&!v.supSizes&&!function(e){x.srcset="data:,a",e.src="data:,a",v.supSrcset=x.complete===e.complete,v.supPicture=v.supSrcset&&v.supPicture}(t.createElement("img")),v.supSrcset&&!v.supSizes?!function(){var e="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",r="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=t.createElement("img"),s=function(){var e=n.width;2===e&&(v.supSizes=!0),h=v.supSrcset&&!v.supSizes,w=!0,setTimeout(te)};n.onload=s,n.onerror=s,n.setAttribute("sizes","9px"),n.srcset=r+" 1w,"+e+" 9w",n.src=r}():w=!0,v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=C,v.DPR=F||1,v.u=N,v.types=T,v.setSize=S,v.makeUrl=$(function(e){return O.href=e,O.href}),v.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},v.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?v.matchesMedia=function(e){return!e||matchMedia(e).matches}:v.matchesMedia=v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(e){return e?Z(e):!0},v.calcLength=function(e){var t=Z(e,!0)||!1;return 0>t&&(t=!1),t},v.supportsType=function(e){return e?T[e]:!0},v.parseSize=$(function(e){var t=(e||"").match(I);return{media:t&&t[1],length:t&&t[2]}}),v.parseSet=function(e){return e.cands||(e.cands=d(e.srcset,e)),e.cands},v.getEmValue=function(){var e;if(!m&&(e=t.body)){var r=t.createElement("div"),n=b.style.cssText,s=e.style.cssText;r.style.cssText=k,b.style.cssText=W,e.style.cssText=W,e.appendChild(r),m=r.offsetWidth,e.removeChild(r),m=parseFloat(m,10),b.style.cssText=n,e.style.cssText=s}return m||16},v.calcListLength=function(e){if(!(e in H)||C.uT){var t=v.calcLength(p(e));H[e]=t?t:N.width}return H[e]},v.setRes=function(e){var t;if(e){t=v.parseSet(e);for(var r=0,n=t.length;n>r;r++)ee(t[r],e.sizes)}return t},v.setRes.res=ee,v.applySetCandidate=function(e,t){if(e.length){var r,n,s,i,a,l,f,d,p,A=t[v.ns],m=v.DPR;if(l=A.curSrc||t[D],f=A.curCan||o(t,l,e[0].set),f&&f.set===e[0].set&&(p=P&&!t.complete&&f.res-.1>m,p||(f.cached=!0,f.res>=m&&(a=f))),!a)for(e.sort(u),i=e.length,a=e[i-1],n=0;i>n;n++)if(r=e[n],r.res>=m){s=n-1,a=e[s]&&(p||l!==v.makeUrl(r.url))&&c(e[s].res,r.res,m,e[s].cached)?e[s]:r;break}a&&(d=v.makeUrl(a.url),A.curSrc=d,A.curCan=a,d!==l&&v.setSrc(t,a),v.setSize(t))}},v.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},v.getSet=function(e){var t,r,n,s=!1,i=e[v.ns].sets;for(t=0;t<i.length&&!s;t++)if(r=i[t],r.srcset&&v.matchesMedia(r.media)&&(n=v.supportsType(r.type))){"pending"===n&&(r=n),s=r;break}return s},v.parseSets=function(e,t,n){var s,i,c,a,u=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[v.ns];(o.src===r||n.src)&&(o.src=y.call(e,"src"),o.src?E.call(e,R,o.src):z.call(e,R)),(o.srcset===r||n.srcset||!v.supSrcset||e.srcset)&&(s=y.call(e,"srcset"),o.srcset=s,a=!0),o.sets=[],u&&(o.pic=!0,f(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:y.call(e,"sizes")},o.sets.push(i),c=(h||o.src)&&B.test(o.srcset||""),c||!o.src||l(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=r,o.supported=!(u||i&&!v.supSrcset||c&&!v.supSizes),a&&v.supSrcset&&!o.supported&&(s?(E.call(e,L,s),e.srcset=""):z.call(e,L)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==v.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},v.fillImg=function(e,t){var r,n=t.reselect||t.reevaluate;e[v.ns]||(e[v.ns]={}),r=e[v.ns],(n||r.evaled!==g)&&((!r.parsed||t.reevaluate)&&v.parseSets(e,e.parentNode,t),r.supported?r.evaled=g:a(e))},v.setupRun=function(){(!q||Q||F!==e.devicePixelRatio)&&i()},v.supPicture?(te=S,v.fillImg=S):!function(){var r,n=e.attachEvent?/d$|^c/:/d$|^c|^i/,s=function(){var e=t.readyState||"";i=setTimeout(s,"loading"===e?200:999),t.body&&(v.fillImgs(),r=r||n.test(e),r&&clearTimeout(i))},i=setTimeout(s,t.body?9:99),c=function(e,t){var r,n,s=function(){var i=new Date-n;t>i?r=setTimeout(s,t-i):(r=null,e())};return function(){n=new Date,r||(r=setTimeout(s,t))}},a=b.clientHeight,u=function(){Q=Math.max(e.innerWidth||0,b.clientWidth)!==N.width||b.clientHeight!==a,a=b.clientHeight,Q&&v.fillImgs()};Y(e,"resize",c(u,99)),Y(t,"readystatechange",s)}(),v.picturefill=te,v.fillImgs=te,v.teardownRun=S,te._=v,e.picturefillCFG={pf:v,push:function(e){var t=e.shift();"function"==typeof v[t]?v[t].apply(v,e):(C[t]=e[0],q&&v.fillImgs({reselect:!0}))}};for(;U&&U.length;)e.picturefillCFG.push(U.shift());e.picturefill=te,"object"==typeof module&&"object"==typeof module.exports?module.exports=te:"function"==typeof define&&define.amd&&define("picturefill",function(){return te}),v.supPicture||(T["image/webp"]=s("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);