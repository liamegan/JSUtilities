var r=function(r,t){void 0===t&&(t=6);var n=Math.pow(10,t),o=Math.abs(Math.floor(r*n)/n);return o<1?o:Math.floor(o%Math.floor(o)*n)/n},t=function(r,t){return new Promise(function(n,o){r.onload=function(){return n(r)},r.onerror=o,r.src=t})};exports.asyncImageLoad=t,exports.clamp=function(r,t,n){return Math.min(t,Math.max(r,n))},exports.floatRandomBetween=function(r,t){return Math.random()*(t-r)+r},exports.fract=r,exports.hash21=function(t,n){var o=[27.609,57.583];return t.array&&(t=t.array),r(Math.sin(o[0]*t[0]+o[1]*t[1])*n)},exports.lerp=function(r,t,n){return r+n*(t-r)},exports.loadAllImages=function(r){var n=[];for(var o in r){var a=new Image;n.push(t(a,r[o]))}return Promise.all(n)},exports.precisionRound=function(r,t){var n=Math.pow(10,t);return Math.round(r*n)/n},exports.xmur3=function(r){for(var t=0,n=1779033703^r.length;t<r.length;t++)n=(n=Math.imul(n^r.charCodeAt(t),3432918353))<<13|n>>>19;return function(){return n=Math.imul(n^n>>>16,2246822507),n=Math.imul(n^n>>>13,3266489909),(n^=n>>>16)>>>0}};
//# sourceMappingURL=index.js.map