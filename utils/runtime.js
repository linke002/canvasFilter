var regeneratorRuntime=function(g){function B(a,b,c,e){b=Object.create((b&&b.prototype instanceof w?b:w).prototype);e=new x(e||[]);b._invoke=I(a,c,e);return b}function y(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(e){return{type:"throw",arg:e}}}function w(){}function q(){}function n(){}function C(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function r(a){function b(c,d,k,f){c=y(a[c],a,d);if("throw"===c.type)f(c.arg);else{var e=c.arg;return(c=
  e.value)&&"object"===typeof c&&l.call(c,"__await")?Promise.resolve(c.__await).then(function(a){b("next",a,k,f)},function(a){b("throw",a,k,f)}):Promise.resolve(c).then(function(a){e.value=a;k(e)},function(a){return b("throw",a,k,f)})}}var c;this._invoke=function(a,d){function e(){return new Promise(function(c,e){b(a,d,c,e)})}return c=c?c.then(e,e):e()}}function I(a,b,c){var e=D;return function(d,k){if(e===E)throw Error("Generator is already running");if(e===t){if("throw"===d)throw k;return F()}c.method=
  d;for(c.arg=k;;){if(d=c.delegate)if(d=G(d,c)){if(d===f)continue;return d}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(e===D)throw e=t,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);e=E;d=y(a,b,c);if("normal"===d.type){e=c.done?t:J;if(d.arg===f)continue;return{value:d.arg,done:c.done}}"throw"===d.type&&(e=t,c.method="throw",c.arg=d.arg)}}}function G(a,b){var c=a.iterator[b.method];if(void 0===c){b.delegate=null;if("throw"===b.method){if(a.iterator.return&&
  (b.method="return",b.arg=void 0,G(a,b),"throw"===b.method))return f;b.method="throw";b.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}c=y(c,a.iterator,b.arg);if("throw"===c.type)return b.method="throw",b.arg=c.arg,b.delegate=null,f;c=c.arg;if(!c)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,f;if(c.done)b[a.resultName]=c.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0);else return c;b.delegate=
  null;return f}function K(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]);2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]);this.tryEntries.push(b)}function z(a){var b=a.completion||{};b.type="normal";delete b.arg;a.completion=b}function x(a){this.tryEntries=[{tryLoc:"root"}];a.forEach(K,this);this.reset(!0)}function A(a){if(a){var b=a[u];if(b)return b.call(a);if("function"===typeof a.next)return a;if(!isNaN(a.length)){var c=-1;b=function d(){for(;++c<a.length;)if(l.call(a,c))return d.value=a[c],d.done=
  !1,d;d.value=void 0;d.done=!0;return d};return b.next=b}}return{next:F}}function F(){return{value:void 0,done:!0}}var H=Object.prototype,l=H.hasOwnProperty,h="function"===typeof Symbol?Symbol:{},u=h.iterator||"@@iterator",L=h.asyncIterator||"@@asyncIterator",v=h.toStringTag||"@@toStringTag";g.wrap=B;var D="suspendedStart",J="suspendedYield",E="executing",t="completed",f={};h={};h[u]=function(){return this};var m=Object.getPrototypeOf;(m=m&&m(m(A([]))))&&m!==H&&l.call(m,u)&&(h=m);var p=n.prototype=
  w.prototype=Object.create(h);q.prototype=p.constructor=n;n.constructor=q;n[v]=q.displayName="GeneratorFunction";g.isGeneratorFunction=function(a){return(a="function"===typeof a&&a.constructor)?a===q||"GeneratorFunction"===(a.displayName||a.name):!1};g.mark=function(a){Object.setPrototypeOf?Object.setPrototypeOf(a,n):(a.__proto__=n,v in a||(a[v]="GeneratorFunction"));a.prototype=Object.create(p);return a};g.awrap=function(a){return{__await:a}};C(r.prototype);r.prototype[L]=function(){return this};
  g.AsyncIterator=r;g.async=function(a,b,c,e){var d=new r(B(a,b,c,e));return g.isGeneratorFunction(b)?d:d.next().then(function(a){return a.done?a.value:d.next()})};C(p);p[v]="Generator";p[u]=function(){return this};p.toString=function(){return"[object Generator]"};g.keys=function(a){var b=[],c;for(c in a)b.push(c);b.reverse();return function d(){for(;b.length;){var c=b.pop();if(c in a)return d.value=c,d.done=!1,d}d.done=!0;return d}};g.values=A;x.prototype={constructor:x,reset:function(a){this.next=
  this.prev=0;this.sent=this._sent=void 0;this.done=!1;this.delegate=null;this.method="next";this.arg=void 0;this.tryEntries.forEach(z);if(!a)for(var b in this)"t"===b.charAt(0)&&l.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(a){function b(b,d){f.type="throw";f.arg=a;c.next=b;d&&(c.method="next",c.arg=void 0);return!!d}if(this.done)throw a;for(var c=this,
  e=this.tryEntries.length-1;0<=e;--e){var d=this.tryEntries[e],f=d.completion;if("root"===d.tryLoc)return b("end");if(d.tryLoc<=this.prev){var g=l.call(d,"catchLoc"),h=l.call(d,"finallyLoc");if(g&&h){if(this.prev<d.catchLoc)return b(d.catchLoc,!0);if(this.prev<d.finallyLoc)return b(d.finallyLoc)}else if(g){if(this.prev<d.catchLoc)return b(d.catchLoc,!0)}else if(h){if(this.prev<d.finallyLoc)return b(d.finallyLoc)}else throw Error("try statement without catch or finally");}}},abrupt:function(a,b){for(var c=
  this.tryEntries.length-1;0<=c;--c){var e=this.tryEntries[c];if(e.tryLoc<=this.prev&&l.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var d=e;break}}d&&("break"===a||"continue"===a)&&d.tryLoc<=b&&b<=d.finallyLoc&&(d=null);c=d?d.completion:{};c.type=a;c.arg=b;return d?(this.method="next",this.next=d.finallyLoc,f):this.complete(c)},complete:function(a,b){if("throw"===a.type)throw a.arg;"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",
  this.next="end"):"normal"===a.type&&b&&(this.next=b);return f},finish:function(a){for(var b=this.tryEntries.length-1;0<=b;--b){var c=this.tryEntries[b];if(c.finallyLoc===a)return this.complete(c.completion,c.afterLoc),z(c),f}},"catch":function(a){for(var b=this.tryEntries.length-1;0<=b;--b){var c=this.tryEntries[b];if(c.tryLoc===a){a=c.completion;if("throw"===a.type){var e=a.arg;z(c)}return e}}throw Error("illegal catch attempt");},delegateYield:function(a,b,c){this.delegate={iterator:A(a),resultName:b,
  nextLoc:c};"next"===this.method&&(this.arg=void 0);return f}};return g}("object"===typeof module?module.exports:{});