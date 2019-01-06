(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,r,o){"use strict";var i=o(332),n=o(335),a=[].slice,h=["keyword","gray","hex"],e={};Object.keys(n).forEach(function(t){e[a.call(n[t].labels).sort().join("")]=t});var l={};function s(t,r){if(!(this instanceof s))return new s(t,r);if(r&&r in h&&(r=null),r&&!(r in n))throw new Error("Unknown model: "+r);var o,c;if(void 0===t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof s)this.model=t.model,this.color=t.color.slice(),this.valpha=t.valpha;else if("string"==typeof t){var u=i.get(t);if(null===u)throw new Error("Unable to parse color from string: "+t);this.model=u.model,c=n[this.model].channels,this.color=u.value.slice(0,c),this.valpha="number"==typeof u.value[c]?u.value[c]:1}else if(t.length){this.model=r||"rgb",c=n[this.model].channels;var p=a.call(t,0,c);this.color=f(p,c),this.valpha="number"==typeof t[c]?t[c]:1}else if("number"==typeof t)t&=16777215,this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;var v=Object.keys(t);"alpha"in t&&(v.splice(v.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);var m=v.sort().join("");if(!(m in e))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=e[m];var g=n[this.model].labels,d=[];for(o=0;o<g.length;o++)d.push(t[g[o]]);this.color=f(d)}if(l[this.model])for(c=n[this.model].channels,o=0;o<c;o++){var b=l[this.model][o];b&&(this.color[o]=b(this.color[o]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function c(t,r,o){return(t=Array.isArray(t)?t:[t]).forEach(function(t){(l[t]||(l[t]=[]))[r]=o}),t=t[0],function(i){var n;return arguments.length?(o&&(i=o(i)),(n=this[t]()).color[r]=i,n):(n=this[t]().color[r],o&&(n=o(n)),n)}}function u(t){return function(r){return Math.max(0,Math.min(t,r))}}function f(t,r){for(var o=0;o<r;o++)"number"!=typeof t[o]&&(t[o]=0);return t}s.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(t){var r=this.model in i.to?this:this.rgb(),o=1===(r=r.round("number"==typeof t?t:1)).valpha?r.color:r.color.concat(this.valpha);return i.to[r.model](o)},percentString:function(t){var r=this.rgb().round("number"==typeof t?t:1),o=1===r.valpha?r.color:r.color.concat(this.valpha);return i.to.rgb.percent(o)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var t={},r=n[this.model].channels,o=n[this.model].labels,i=0;i<r;i++)t[o[i]]=this.color[i];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray:function(){var t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject:function(){var t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round:function(t){return t=Math.max(t||0,0),new s(this.color.map(function(t){return function(r){return function(t,r){return Number(t.toFixed(r))}(r,t)}}(t)).concat(this.valpha),this.model)},alpha:function(t){return arguments.length?new s(this.color.concat(Math.max(0,Math.min(1,t))),this.model):this.valpha},red:c("rgb",0,u(255)),green:c("rgb",1,u(255)),blue:c("rgb",2,u(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,function(t){return(t%360+360)%360}),saturationl:c("hsl",1,u(100)),lightness:c("hsl",2,u(100)),saturationv:c("hsv",1,u(100)),value:c("hsv",2,u(100)),chroma:c("hcg",1,u(100)),gray:c("hcg",2,u(100)),white:c("hwb",1,u(100)),wblack:c("hwb",2,u(100)),cyan:c("cmyk",0,u(100)),magenta:c("cmyk",1,u(100)),yellow:c("cmyk",2,u(100)),black:c("cmyk",3,u(100)),x:c("xyz",0,u(100)),y:c("xyz",1,u(100)),z:c("xyz",2,u(100)),l:c("lab",0,u(100)),a:c("lab",1),b:c("lab",2),keyword:function(t){return arguments.length?new s(t):n[this.model].keyword(this.color)},hex:function(t){return arguments.length?new s(t):i.to.hex(this.rgb().round().color)},rgbNumber:function(){var t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity:function(){for(var t=this.rgb().color,r=[],o=0;o<t.length;o++){var i=t[o]/255;r[o]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*r[0]+.7152*r[1]+.0722*r[2]},contrast:function(t){var r=this.luminosity(),o=t.luminosity();return r>o?(r+.05)/(o+.05):(o+.05)/(r+.05)},level:function(t){var r=this.contrast(t);return r>=7.1?"AAA":r>=4.5?"AA":""},isDark:function(){var t=this.rgb().color;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var t=this.rgb(),r=0;r<3;r++)t.color[r]=255-t.color[r];return t},lighten:function(t){var r=this.hsl();return r.color[2]+=r.color[2]*t,r},darken:function(t){var r=this.hsl();return r.color[2]-=r.color[2]*t,r},saturate:function(t){var r=this.hsl();return r.color[1]+=r.color[1]*t,r},desaturate:function(t){var r=this.hsl();return r.color[1]-=r.color[1]*t,r},whiten:function(t){var r=this.hwb();return r.color[1]+=r.color[1]*t,r},blacken:function(t){var r=this.hwb();return r.color[2]+=r.color[2]*t,r},grayscale:function(){var t=this.rgb().color,r=.3*t[0]+.59*t[1]+.11*t[2];return s.rgb(r,r,r)},fade:function(t){return this.alpha(this.valpha-this.valpha*t)},opaquer:function(t){return this.alpha(this.valpha+this.valpha*t)},rotate:function(t){var r=this.hsl(),o=r.color[0];return o=(o=(o+t)%360)<0?360+o:o,r.color[0]=o,r},mix:function(t,r){var o=t.rgb(),i=this.rgb(),n=void 0===r?.5:r,a=2*n-1,h=o.alpha()-i.alpha(),e=((a*h==-1?a:(a+h)/(1+a*h))+1)/2,l=1-e;return s.rgb(e*o.red()+l*i.red(),e*o.green()+l*i.green(),e*o.blue()+l*i.blue(),o.alpha()*n+i.alpha()*(1-n))}},Object.keys(n).forEach(function(t){if(-1===h.indexOf(t)){var r=n[t].channels;s.prototype[t]=function(){if(this.model===t)return new s(this);if(arguments.length)return new s(arguments,t);var o,i="number"==typeof arguments[r]?r:this.valpha;return new s((o=n[this.model][t].raw(this.color),Array.isArray(o)?o:[o]).concat(i),t)},s[t]=function(o){return"number"==typeof o&&(o=f(a.call(arguments),r)),new s(o,t)}}}),t.exports=s}}]);