/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.4.1/LICENSE
 */
(function(r,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{r.returnExports=t()}})(this,function(){var r=Array;var t=r.prototype;var e=Object;var n=e.prototype;var i=Function.prototype;var a=String;var o=a.prototype;var u=Number;var f=u.prototype;var l=t.slice;var s=t.splice;var c=t.push;var v=t.unshift;var p=t.concat;var h=i.call;var g=i.apply;var y=Math.max;var d=Math.min;var m=n.toString;var w=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var b;var T=Function.prototype.toString,x=function tryFunctionObject(r){try{T.call(r);return true}catch(t){return false}},O="[object Function]",S="[object GeneratorFunction]";b=function isCallable(r){if(typeof r!=="function"){return false}if(w){return x(r)}var t=m.call(r);return t===O||t===S};var E;var j=RegExp.prototype.exec,I=function tryRegexExec(r){try{j.call(r);return true}catch(t){return false}},D="[object RegExp]";E=function isRegex(r){if(typeof r!=="object"){return false}return w?I(r):m.call(r)===D};var N;var k=String.prototype.valueOf,M=function tryStringObject(r){try{k.call(r);return true}catch(t){return false}},U="[object String]";N=function isString(r){if(typeof r==="string"){return true}if(typeof r!=="object"){return false}return w?M(r):m.call(r)===U};var R=e.defineProperty&&function(){try{var r={};e.defineProperty(r,"x",{enumerable:false,value:r});for(var t in r){return false}return r.x===r}catch(n){return false}}();var F=function(r){var t;if(R){t=function(r,t,n,i){if(!i&&t in r){return}e.defineProperty(r,t,{configurable:true,enumerable:false,writable:true,value:n})}}else{t=function(r,t,e,n){if(!n&&t in r){return}r[t]=e}}return function defineProperties(e,n,i){for(var a in n){if(r.call(n,a)){t(e,a,n[a],i)}}}}(n.hasOwnProperty);var A=function isPrimitive(r){var t=typeof r;return r===null||t!=="object"&&t!=="function"};var P=u.isNaN||function(r){return r!==r};var $={ToInteger:function ToInteger(r){var t=+r;if(P(t)){t=0}else if(t!==0&&t!==1/0&&t!==-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}return t},ToPrimitive:function ToPrimitive(r){var t,e,n;if(A(r)){return r}e=r.valueOf;if(b(e)){t=e.call(r);if(A(t)){return t}}n=r.toString;if(b(n)){t=n.call(r);if(A(t)){return t}}throw new TypeError},ToObject:function(r){if(r==null){throw new TypeError("can't convert "+r+" to object")}return e(r)},ToUint32:function ToUint32(r){return r>>>0}};var C=function Empty(){};F(i,{bind:function bind(r){var t=this;if(!b(t)){throw new TypeError("Function.prototype.bind called on incompatible "+t)}var n=l.call(arguments,1);var i;var a=function(){if(this instanceof i){var a=t.apply(this,p.call(n,l.call(arguments)));if(e(a)===a){return a}return this}else{return t.apply(r,p.call(n,l.call(arguments)))}};var o=y(0,t.length-n.length);var u=[];for(var f=0;f<o;f++){c.call(u,"$"+f)}i=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this, arguments); }")(a);if(t.prototype){C.prototype=t.prototype;i.prototype=new C;C.prototype=null}return i}});var Z=h.bind(n.hasOwnProperty);var J=h.bind(n.toString);var z=h.bind(l);var B=g.bind(l);var G=h.bind(o.slice);var H=h.bind(o.split);var L=h.bind(o.indexOf);var X=h.bind(c);var Y=h.bind(n.propertyIsEnumerable);var q=h.bind(t.sort);var K=r.isArray||function isArray(r){return J(r)==="[object Array]"};var Q=[].unshift(0)!==1;F(t,{unshift:function(){v.apply(this,arguments);return this.length}},Q);F(r,{isArray:K});var V=e("a");var W=V[0]!=="a"||!(0 in V);var _=function properlyBoxed(r){var t=true;var e=true;if(r){r.call("foo",function(r,e,n){if(typeof n!=="object"){t=false}});r.call([1],function(){"use strict";e=typeof this==="string"},"x")}return!!r&&t&&e};F(t,{forEach:function forEach(r){var t=$.ToObject(this);var e=W&&N(this)?H(this,""):t;var n=-1;var i=$.ToUint32(e.length);var a;if(arguments.length>1){a=arguments[1]}if(!b(r)){throw new TypeError("Array.prototype.forEach callback must be a function")}while(++n<i){if(n in e){if(typeof a==="undefined"){r(e[n],n,t)}else{r.call(a,e[n],n,t)}}}}},!_(t.forEach));F(t,{map:function map(t){var e=$.ToObject(this);var n=W&&N(this)?H(this,""):e;var i=$.ToUint32(n.length);var a=r(i);var o;if(arguments.length>1){o=arguments[1]}if(!b(t)){throw new TypeError("Array.prototype.map callback must be a function")}for(var u=0;u<i;u++){if(u in n){if(typeof o==="undefined"){a[u]=t(n[u],u,e)}else{a[u]=t.call(o,n[u],u,e)}}}return a}},!_(t.map));F(t,{filter:function filter(r){var t=$.ToObject(this);var e=W&&N(this)?H(this,""):t;var n=$.ToUint32(e.length);var i=[];var a;var o;if(arguments.length>1){o=arguments[1]}if(!b(r)){throw new TypeError("Array.prototype.filter callback must be a function")}for(var u=0;u<n;u++){if(u in e){a=e[u];if(typeof o==="undefined"?r(a,u,t):r.call(o,a,u,t)){X(i,a)}}}return i}},!_(t.filter));F(t,{every:function every(r){var t=$.ToObject(this);var e=W&&N(this)?H(this,""):t;var n=$.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!b(r)){throw new TypeError("Array.prototype.every callback must be a function")}for(var a=0;a<n;a++){if(a in e&&!(typeof i==="undefined"?r(e[a],a,t):r.call(i,e[a],a,t))){return false}}return true}},!_(t.every));F(t,{some:function some(r){var t=$.ToObject(this);var e=W&&N(this)?H(this,""):t;var n=$.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!b(r)){throw new TypeError("Array.prototype.some callback must be a function")}for(var a=0;a<n;a++){if(a in e&&(typeof i==="undefined"?r(e[a],a,t):r.call(i,e[a],a,t))){return true}}return false}},!_(t.some));var rr=false;if(t.reduce){rr=typeof t.reduce.call("es5",function(r,t,e,n){return n})==="object"}F(t,{reduce:function reduce(r){var t=$.ToObject(this);var e=W&&N(this)?H(this,""):t;var n=$.ToUint32(e.length);if(!b(r)){throw new TypeError("Array.prototype.reduce callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in e){a=e[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in e){a=r(a,e[i],i,t)}}return a}},!rr);var tr=false;if(t.reduceRight){tr=typeof t.reduceRight.call("es5",function(r,t,e,n){return n})==="object"}F(t,{reduceRight:function reduceRight(r){var t=$.ToObject(this);var e=W&&N(this)?H(this,""):t;var n=$.ToUint32(e.length);if(!b(r)){throw new TypeError("Array.prototype.reduceRight callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i;var a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in e){i=e[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in e){i=r(i,e[a],a,t)}}while(a--);return i}},!tr);var er=t.indexOf&&[0,1].indexOf(1,2)!==-1;F(t,{indexOf:function indexOf(r){var t=W&&N(this)?H(this,""):$.ToObject(this);var e=$.ToUint32(t.length);if(e===0){return-1}var n=0;if(arguments.length>1){n=$.ToInteger(arguments[1])}n=n>=0?n:y(0,e+n);for(;n<e;n++){if(n in t&&t[n]===r){return n}}return-1}},er);var nr=t.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;F(t,{lastIndexOf:function lastIndexOf(r){var t=W&&N(this)?H(this,""):$.ToObject(this);var e=$.ToUint32(t.length);if(e===0){return-1}var n=e-1;if(arguments.length>1){n=d(n,$.ToInteger(arguments[1]))}n=n>=0?n:e-Math.abs(n);for(;n>=0;n--){if(n in t&&r===t[n]){return n}}return-1}},nr);var ir=function(){var r=[1,2];var t=r.splice();return r.length===2&&K(t)&&t.length===0}();F(t,{splice:function splice(r,t){if(arguments.length===0){return[]}else{return s.apply(this,arguments)}}},!ir);var ar=function(){var r={};t.splice.call(r,0,0,1);return r.length===1}();F(t,{splice:function splice(r,t){if(arguments.length===0){return[]}var e=arguments;this.length=y($.ToInteger(this.length),0);if(arguments.length>0&&typeof t!=="number"){e=z(arguments);if(e.length<2){X(e,this.length-r)}else{e[1]=$.ToInteger(t)}}return s.apply(this,e)}},!ar);var or=function(){var t=new r(1e5);t[8]="x";t.splice(1,1);return t.indexOf("x")===7}();var ur=function(){var r=256;var t=[];t[r]="a";t.splice(r+1,0,"b");return t[r]==="a"}();F(t,{splice:function splice(r,t){var e=$.ToObject(this);var n=[];var i=$.ToUint32(e.length);var o=$.ToInteger(r);var u=o<0?y(i+o,0):d(o,i);var f=d(y($.ToInteger(t),0),i-u);var l=0;var s;while(l<f){s=a(u+l);if(Z(e,s)){n[l]=e[s]}l+=1}var c=z(arguments,2);var v=c.length;var p;if(v<f){l=u;while(l<i-f){s=a(l+f);p=a(l+v);if(Z(e,s)){e[p]=e[s]}else{delete e[p]}l+=1}l=i;while(l>i-f+v){delete e[l-1];l-=1}}else if(v>f){l=i-f;while(l>u){s=a(l+f-1);p=a(l+v-1);if(Z(e,s)){e[p]=e[s]}else{delete e[p]}l-=1}}l=u;for(var h=0;h<c.length;++h){e[l]=c[h];l+=1}e.length=i-f+v;return n}},!or||!ur);var fr=t.join;var lr;try{lr=Array.prototype.join.call("123",",")!=="1,2,3"}catch(sr){lr=true}if(lr){F(t,{join:function join(r){var t=typeof r==="undefined"?",":r;return fr.call(N(this)?H(this,""):this,t)}},lr)}var cr=[1,2].join(undefined)!=="1,2";if(cr){F(t,{join:function join(r){var t=typeof r==="undefined"?",":r;return fr.call(this,t)}},cr)}var vr=function push(r){var t=$.ToObject(this);var e=$.ToUint32(t.length);var n=0;while(n<arguments.length){t[e+n]=arguments[n];n+=1}t.length=e+n;return e+n};var pr=function(){var r={};var t=Array.prototype.push.call(r,undefined);return t!==1||r.length!==1||typeof r[0]!=="undefined"||!Z(r,0)}();F(t,{push:function push(r){if(K(this)){return c.apply(this,arguments)}return vr.apply(this,arguments)}},pr);var hr=function(){var r=[];var t=r.push(undefined);return t!==1||r.length!==1||typeof r[0]!=="undefined"||!Z(r,0)}();F(t,{push:vr},hr);F(t,{slice:function(r,t){var e=N(this)?H(this,""):this;return B(e,arguments)}},W);var gr=function(){try{[1,2].sort(null);[1,2].sort({});return true}catch(r){}return false}();var yr=function(){try{[1,2].sort(/a/);return false}catch(r){}return true}();var dr=function(){try{[1,2].sort(undefined);return true}catch(r){}return false}();F(t,{sort:function sort(r){if(typeof r==="undefined"){return q(this)}if(!b(r)){throw new TypeError("Array.prototype.sort callback must be a function")}return q(this,r)}},gr||!dr||!yr);var mr=!{toString:null}.propertyIsEnumerable("toString");var wr=function(){}.propertyIsEnumerable("prototype");var br=!Z("x","0");var Tr=function(r){var t=r.constructor;return t&&t.prototype===r};var xr={$window:true,$console:true,$parent:true,$self:true,$frame:true,$frames:true,$frameElement:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$external:true};var Or=function(){if(typeof window==="undefined"){return false}for(var r in window){try{if(!xr["$"+r]&&Z(window,r)&&window[r]!==null&&typeof window[r]==="object"){Tr(window[r])}}catch(t){return true}}return false}();var Sr=function(r){if(typeof window==="undefined"||!Or){return Tr(r)}try{return Tr(r)}catch(t){return false}};var Er=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var jr=Er.length;var Ir=function isArguments(r){return J(r)==="[object Arguments]"};var Dr=function isArguments(r){return r!==null&&typeof r==="object"&&typeof r.length==="number"&&r.length>=0&&!K(r)&&b(r.callee)};var Nr=Ir(arguments)?Ir:Dr;F(e,{keys:function keys(r){var t=b(r);var e=Nr(r);var n=r!==null&&typeof r==="object";var i=n&&N(r);if(!n&&!t&&!e){throw new TypeError("Object.keys called on a non-object")}var o=[];var u=wr&&t;if(i&&br||e){for(var f=0;f<r.length;++f){X(o,a(f))}}if(!e){for(var l in r){if(!(u&&l==="prototype")&&Z(r,l)){X(o,a(l))}}}if(mr){var s=Sr(r);for(var c=0;c<jr;c++){var v=Er[c];if(!(s&&v==="constructor")&&Z(r,v)){X(o,v)}}}return o}});var kr=e.keys&&function(){return e.keys(arguments).length===2}(1,2);var Mr=e.keys&&function(){var r=e.keys(arguments);return arguments.length!==1||r.length!==1||r[0]!==1}(1);var Ur=e.keys;F(e,{keys:function keys(r){if(Nr(r)){return Ur(z(r))}else{return Ur(r)}}},!kr||Mr);var Rr=-621987552e5;var Fr="-000001";var Ar=Date.prototype.toISOString&&new Date(Rr).toISOString().indexOf(Fr)===-1;var Pr=Date.prototype.toISOString&&new Date(-1).toISOString()!=="1969-12-31T23:59:59.999Z";F(Date.prototype,{toISOString:function toISOString(){var r,t,e,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;r=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+G("00000"+Math.abs(n),0<=n&&n<=9999?-4:-6);t=r.length;while(t--){e=r[t];if(e<10){r[t]="0"+e}}return n+"-"+z(r,0,2).join("-")+"T"+z(r,2).join(":")+"."+G("000"+this.getUTCMilliseconds(),-3)+"Z"}},Ar||Pr);var $r=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(Rr).toJSON().indexOf(Fr)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(r){return false}}();if(!$r){Date.prototype.toJSON=function toJSON(r){var t=e(this);var n=$.ToPrimitive(t);if(typeof n==="number"&&!isFinite(n)){return null}var i=t.toISOString;if(!b(i)){throw new TypeError("toISOString property is not callable")}return i.call(t)}}var Cr=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var Zr=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));var Jr=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(Jr||Zr||!Cr){var zr=Math.pow(2,31)-1;var Br=P(new Date(1970,0,1,0,0,0,zr+1).getTime());Date=function(r){var t=function Date(e,n,i,o,u,f,l){var s=arguments.length;var c;if(this instanceof r){var v=f;var p=l;if(Br&&s>=7&&l>zr){var h=Math.floor(l/zr)*zr;var g=Math.floor(h/1e3);v+=g;p-=g*1e3}c=s===1&&a(e)===e?new r(t.parse(e)):s>=7?new r(e,n,i,o,u,v,p):s>=6?new r(e,n,i,o,u,v):s>=5?new r(e,n,i,o,u):s>=4?new r(e,n,i,o):s>=3?new r(e,n,i):s>=2?new r(e,n):s>=1?new r(e):new r}else{c=r.apply(this,arguments)}if(!A(c)){F(c,{constructor:t},true)}return c};var e=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];var i=function dayFromMonth(r,t){var e=t>1?1:0;return n[t]+Math.floor((r-1969+e)/4)-Math.floor((r-1901+e)/100)+Math.floor((r-1601+e)/400)+365*(r-1970)};var o=function toUTC(t){var e=0;var n=t;if(Br&&n>zr){var i=Math.floor(n/zr)*zr;var a=Math.floor(i/1e3);e+=a;n-=a*1e3}return u(new r(1970,0,1,0,0,e,n))};for(var f in r){if(Z(r,f)){t[f]=r[f]}}F(t,{now:r.now,UTC:r.UTC},true);t.prototype=r.prototype;F(t.prototype,{constructor:t},true);var l=function parse(t){var n=e.exec(t);if(n){var a=u(n[1]),f=u(n[2]||1)-1,l=u(n[3]||1)-1,s=u(n[4]||0),c=u(n[5]||0),v=u(n[6]||0),p=Math.floor(u(n[7]||0)*1e3),h=Boolean(n[4]&&!n[8]),g=n[9]==="-"?1:-1,y=u(n[10]||0),d=u(n[11]||0),m;var w=c>0||v>0||p>0;if(s<(w?24:25)&&c<60&&v<60&&p<1e3&&f>-1&&f<12&&y<24&&d<60&&l>-1&&l<i(a,f+1)-i(a,f)){m=((i(a,f)+l)*24+s+y*g)*60;m=((m+c+d*g)*60+v)*1e3+p;if(h){m=o(m)}if(-864e13<=m&&m<=864e13){return m}}return NaN}return r.parse.apply(this,arguments)};F(t,{parse:l});return t}(Date)}if(!Date.now){Date.now=function now(){return(new Date).getTime()}}var Gr=f.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var Hr={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function multiply(r,t){var e=-1;var n=t;while(++e<Hr.size){n+=r*Hr.data[e];Hr.data[e]=n%Hr.base;n=Math.floor(n/Hr.base)}},divide:function divide(r){var t=Hr.size,e=0;while(--t>=0){e+=Hr.data[t];Hr.data[t]=Math.floor(e/r);e=e%r*Hr.base}},numToString:function numToString(){var r=Hr.size;var t="";while(--r>=0){if(t!==""||r===0||Hr.data[r]!==0){var e=a(Hr.data[r]);if(t===""){t=e}else{t+=G("0000000",0,7-e.length)+e}}}return t},pow:function pow(r,t,e){return t===0?e:t%2===1?pow(r,t-1,e*r):pow(r*r,t/2,e)},log:function log(r){var t=0;var e=r;while(e>=4096){t+=12;e/=4096}while(e>=2){t+=1;e/=2}return t}};var Lr=function toFixed(r){var t,e,n,i,o,f,l,s;t=u(r);t=P(t)?0:Math.floor(t);if(t<0||t>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}e=u(this);if(P(e)){return"NaN"}if(e<=-1e21||e>=1e21){return a(e)}n="";if(e<0){n="-";e=-e}i="0";if(e>1e-21){o=Hr.log(e*Hr.pow(2,69,1))-69;f=o<0?e*Hr.pow(2,-o,1):e/Hr.pow(2,o,1);f*=4503599627370496;o=52-o;if(o>0){Hr.multiply(0,f);l=t;while(l>=7){Hr.multiply(1e7,0);l-=7}Hr.multiply(Hr.pow(10,l,1),0);l=o-1;while(l>=23){Hr.divide(1<<23);l-=23}Hr.divide(1<<l);Hr.multiply(1,1);Hr.divide(2);i=Hr.numToString()}else{Hr.multiply(0,f);Hr.multiply(1<<-o,0);i=Hr.numToString()+G("0.00000000000000000000",2,2+t)}}if(t>0){s=i.length;if(s<=t){i=n+G("0.0000000000000000000",0,t-s+2)+i}else{i=n+G(i,0,s-t)+"."+G(i,s-t)}}else{i=n+i}return i};F(f,{toFixed:Lr},Gr);var Xr=function(){try{return 1..toPrecision(undefined)==="1"}catch(r){return true}}();var Yr=f.toPrecision;F(f,{toPrecision:function toPrecision(r){return typeof r==="undefined"?Yr.call(this):Yr.call(this,r)}},Xr);if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var r=typeof/()??/.exec("")[1]==="undefined";var t=Math.pow(2,32)-1;o.split=function(e,n){var i=String(this);if(typeof e==="undefined"&&n===0){return[]}if(!E(e)){return H(this,e,n)}var a=[];var o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f,l,s,v;var p=new RegExp(e.source,o+"g");if(!r){f=new RegExp("^"+p.source+"$(?!\\s)",o)}var h=typeof n==="undefined"?t:$.ToUint32(n);l=p.exec(i);while(l){s=l.index+l[0].length;if(s>u){X(a,G(i,u,l.index));if(!r&&l.length>1){l[0].replace(f,function(){for(var r=1;r<arguments.length-2;r++){if(typeof arguments[r]==="undefined"){l[r]=void 0}}})}if(l.length>1&&l.index<i.length){c.apply(a,z(l,1))}v=l[0].length;u=s;if(a.length>=h){break}}if(p.lastIndex===l.index){p.lastIndex++}l=p.exec(i)}if(u===i.length){if(v||!p.test("")){X(a,"")}}else{X(a,G(i,u))}return a.length>h?G(a,0,h):a}})()}else if("0".split(void 0,0).length){o.split=function split(r,t){if(typeof r==="undefined"&&t===0){return[]}return H(this,r,t)}}var qr=o.replace;var Kr=function(){var r=[];"x".replace(/x(.)?/g,function(t,e){X(r,e)});return r.length===1&&typeof r[0]==="undefined"}();if(!Kr){o.replace=function replace(r,t){var e=b(t);var n=E(r)&&/\)[*?]/.test(r.source);if(!e||!n){return qr.call(this,r,t)}else{var i=function(e){var n=arguments.length;var i=r.lastIndex;r.lastIndex=0;var a=r.exec(e)||[];r.lastIndex=i;X(a,arguments[n-2],arguments[n-1]);return t.apply(this,a)};return qr.call(this,r,i)}}}var Qr=o.substr;var Vr="".substr&&"0b".substr(-1)!=="b";F(o,{substr:function substr(r,t){var e=r;if(r<0){e=y(this.length+r,0)}return Qr.call(this,e,t)}},Vr);var Wr="	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var _r="\u200b";var rt="["+Wr+"]";var tt=new RegExp("^"+rt+rt+"*");var et=new RegExp(rt+rt+"*$");var nt=o.trim&&(Wr.trim()||!_r.trim());F(o,{trim:function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return a(this).replace(tt,"").replace(et,"")}},nt);var it=o.lastIndexOf&&"abc\u3042\u3044".lastIndexOf("\u3042\u3044",2)!==-1;F(o,{lastIndexOf:function lastIndexOf(r){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var t=a(this);var e=a(r);var n=arguments.length>1?u(arguments[1]):NaN;var i=P(n)?Infinity:$.ToInteger(n);var o=d(y(i,0),t.length);var f=e.length;var l=o+f;while(l>0){l=y(0,l-f);var s=L(G(t,l,o+f),e);if(s!==-1){return l+s}}return-1}},it);var at=o.lastIndexOf;F(o,{lastIndexOf:function lastIndexOf(r){return at.apply(this,arguments)}},o.lastIndexOf.length!==1);if(parseInt(Wr+"08")!==8||parseInt(Wr+"0x16")!==22){parseInt=function(r){var t=/^[\-+]?0[xX]/;return function parseInt(e,n){var i=a(e).trim();var o=u(n)||(t.test(i)?16:10);return r(i,o)}}(parseInt)}if(String(new RangeError("test"))!=="RangeError: test"){var ot=function toString(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var r=this.name;if(typeof r==="undefined"){r="Error"}else if(typeof r!=="string"){r=a(r)}var t=this.message;if(typeof t==="undefined"){t=""}else if(typeof t!=="string"){t=a(t)}if(!r){return t}if(!t){return r}return r+": "+t};Error.prototype.toString=ot}if(R){var ut=function(r,t){if(Y(r,t)){var e=Object.getOwnPropertyDescriptor(r,t);e.enumerable=false;Object.defineProperty(r,t,e)}};ut(Error.prototype,"message");if(Error.prototype.message!==""){Error.prototype.message=""}ut(Error.prototype,"name")}if(String(/a/gim)!=="/a/gim"){var ft=function toString(){var r="/"+this.source+"/";if(this.global){r+="g"}if(this.ignoreCase){r+="i"}if(this.multiline){r+="m"}return r};RegExp.prototype.toString=ft}});
//# sourceMappingURL=es5-shim.map