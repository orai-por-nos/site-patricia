var Xb=Object.create;var Bm=Object.defineProperty;var qb=Object.getOwnPropertyDescriptor;var Yb=Object.getOwnPropertyNames;var Zb=Object.getPrototypeOf,jb=Object.prototype.hasOwnProperty;var gi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Jb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Yb(t))!jb.call(e,s)&&s!==n&&Bm(e,s,{get:()=>t[s],enumerable:!(i=qb(t,s))||i.enumerable});return e};var $s=(e,t,n)=>(n=e!=null?Xb(Zb(e)):{},Jb(t||!e||!e.__esModule?Bm(n,"default",{value:e,enumerable:!0}):n,e));var jm=gi(Ft=>{"use strict";var Ah=Symbol.for("react.transitional.element"),Kb=Symbol.for("react.portal"),Qb=Symbol.for("react.fragment"),$b=Symbol.for("react.strict_mode"),tS=Symbol.for("react.profiler"),eS=Symbol.for("react.consumer"),nS=Symbol.for("react.context"),iS=Symbol.for("react.forward_ref"),sS=Symbol.for("react.suspense"),aS=Symbol.for("react.memo"),km=Symbol.for("react.lazy"),rS=Symbol.for("react.activity"),Fm=Symbol.iterator;function oS(e){return e===null||typeof e!="object"?null:(e=Fm&&e[Fm]||e["@@iterator"],typeof e=="function"?e:null)}var Wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,qm={};function Fa(e,t,n){this.props=e,this.context=t,this.refs=qm,this.updater=n||Wm}Fa.prototype.isReactComponent={};Fa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ym(){}Ym.prototype=Fa.prototype;function wh(e,t,n){this.props=e,this.context=t,this.refs=qm,this.updater=n||Wm}var Rh=wh.prototype=new Ym;Rh.constructor=wh;Xm(Rh,Fa.prototype);Rh.isPureReactComponent=!0;var Hm=Array.isArray;function Th(){}var me={H:null,A:null,T:null,S:null},Zm=Object.prototype.hasOwnProperty;function Ch(e,t,n){var i=n.ref;return{$$typeof:Ah,type:e,key:t,ref:i!==void 0?i:null,props:n}}function lS(e,t){return Ch(e.type,t,e.props)}function Lh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ah}function cS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vm=/\/+/g;function Eh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cS(""+e.key):t.toString(36)}function uS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Th,Th):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ba(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Ah:case Kb:r=!0;break;case km:return r=e._init,Ba(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Eh(e,0):i,Hm(s)?(n="",r!=null&&(n=r.replace(Vm,"$&/")+"/"),Ba(s,t,n,"",function(c){return c})):s!=null&&(Lh(s)&&(s=lS(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Vm,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Hm(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Eh(i,l),r+=Ba(i,t,n,a,s);else if(l=oS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Eh(i,l++),r+=Ba(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Ba(uS(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Fl(e,t,n){if(e==null)return e;var i=[],s=0;return Ba(e,i,"","",function(a){return t.call(n,a,s++)}),i}function hS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Gm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fS={map:Fl,forEach:function(e,t,n){Fl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fl(e,function(){t++}),t},toArray:function(e){return Fl(e,function(t){return t})||[]},only:function(e){if(!Lh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=rS;Ft.Children=fS;Ft.Component=Fa;Ft.Fragment=Qb;Ft.Profiler=tS;Ft.PureComponent=wh;Ft.StrictMode=$b;Ft.Suspense=sS;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return me.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Xm({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Zm.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Ch(e.type,s,i)};Ft.createContext=function(e){return e={$$typeof:nS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:eS,_context:e},e};Ft.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Zm.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Ch(e,a,s)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:iS,render:e}};Ft.isValidElement=Lh;Ft.lazy=function(e){return{$$typeof:km,_payload:{_status:-1,_result:e},_init:hS}};Ft.memo=function(e,t){return{$$typeof:aS,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=me.T,n={};me.T=n;try{var i=e(),s=me.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Th,Gm)}catch(a){Gm(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),me.T=t}};Ft.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()};Ft.use=function(e){return me.H.use(e)};Ft.useActionState=function(e,t,n){return me.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return me.H.useCallback(e,t)};Ft.useContext=function(e){return me.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return me.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return me.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return me.H.useEffectEvent(e)};Ft.useId=function(){return me.H.useId()};Ft.useImperativeHandle=function(e,t,n){return me.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return me.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return me.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return me.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return me.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return me.H.useReducer(e,t,n)};Ft.useRef=function(e){return me.H.useRef(e)};Ft.useState=function(e){return me.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return me.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return me.H.useTransition()};Ft.version="19.2.6"});var mo=gi((dC,Jm)=>{"use strict";Jm.exports=jm()});var rg=gi(be=>{"use strict";function Oh(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Hl(s,t))e[i]=t,e[n]=s,n=i;else break t}}function yi(e){return e.length===0?null:e[0]}function Gl(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Hl(o,n))l<s&&0>Hl(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Hl(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Hl(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}be.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Km=performance,be.unstable_now=function(){return Km.now()}):(Uh=Date,Qm=Uh.now(),be.unstable_now=function(){return Uh.now()-Qm});var Km,Uh,Qm,Di=[],hs=[],dS=1,Vn=null,rn=3,Ph=!1,go=!1,yo=!1,zh=!1,eg=typeof setTimeout=="function"?setTimeout:null,ng=typeof clearTimeout=="function"?clearTimeout:null,$m=typeof setImmediate<"u"?setImmediate:null;function Vl(e){for(var t=yi(hs);t!==null;){if(t.callback===null)Gl(hs);else if(t.startTime<=e)Gl(hs),t.sortIndex=t.expirationTime,Oh(Di,t);else break;t=yi(hs)}}function Ih(e){if(yo=!1,Vl(e),!go)if(yi(Di)!==null)go=!0,Va||(Va=!0,Ha());else{var t=yi(hs);t!==null&&Bh(Ih,t.startTime-e)}}var Va=!1,vo=-1,ig=5,sg=-1;function ag(){return zh?!0:!(be.unstable_now()-sg<ig)}function Dh(){if(zh=!1,Va){var e=be.unstable_now();sg=e;var t=!0;try{t:{go=!1,yo&&(yo=!1,ng(vo),vo=-1),Ph=!0;var n=rn;try{e:{for(Vl(e),Vn=yi(Di);Vn!==null&&!(Vn.expirationTime>e&&ag());){var i=Vn.callback;if(typeof i=="function"){Vn.callback=null,rn=Vn.priorityLevel;var s=i(Vn.expirationTime<=e);if(e=be.unstable_now(),typeof s=="function"){Vn.callback=s,Vl(e),t=!0;break e}Vn===yi(Di)&&Gl(Di),Vl(e)}else Gl(Di);Vn=yi(Di)}if(Vn!==null)t=!0;else{var a=yi(hs);a!==null&&Bh(Ih,a.startTime-e),t=!1}}break t}finally{Vn=null,rn=n,Ph=!1}t=void 0}}finally{t?Ha():Va=!1}}}var Ha;typeof $m=="function"?Ha=function(){$m(Dh)}:typeof MessageChannel<"u"?(Nh=new MessageChannel,tg=Nh.port2,Nh.port1.onmessage=Dh,Ha=function(){tg.postMessage(null)}):Ha=function(){eg(Dh,0)};var Nh,tg;function Bh(e,t){vo=eg(function(){e(be.unstable_now())},t)}be.unstable_IdlePriority=5;be.unstable_ImmediatePriority=1;be.unstable_LowPriority=4;be.unstable_NormalPriority=3;be.unstable_Profiling=null;be.unstable_UserBlockingPriority=2;be.unstable_cancelCallback=function(e){e.callback=null};be.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ig=0<e?Math.floor(1e3/e):5};be.unstable_getCurrentPriorityLevel=function(){return rn};be.unstable_next=function(e){switch(rn){case 1:case 2:case 3:var t=3;break;default:t=rn}var n=rn;rn=t;try{return e()}finally{rn=n}};be.unstable_requestPaint=function(){zh=!0};be.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=rn;rn=e;try{return t()}finally{rn=n}};be.unstable_scheduleCallback=function(e,t,n){var i=be.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:dS++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Oh(hs,e),yi(Di)===null&&e===yi(hs)&&(yo?(ng(vo),vo=-1):yo=!0,Bh(Ih,n-i))):(e.sortIndex=s,Oh(Di,e),go||Ph||(go=!0,Va||(Va=!0,Ha()))),e};be.unstable_shouldYield=ag;be.unstable_wrapCallback=function(e){var t=rn;return function(){var n=rn;rn=t;try{return e.apply(this,arguments)}finally{rn=n}}}});var lg=gi((mC,og)=>{"use strict";og.exports=rg()});var ug=gi(pn=>{"use strict";var pS=mo();function cg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fs(){}var dn={d:{f:fs,r:function(){throw Error(cg(522))},D:fs,C:fs,L:fs,m:fs,X:fs,S:fs,M:fs},p:0,findDOMNode:null},mS=Symbol.for("react.portal");function gS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var _o=pS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function kl(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dn;pn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(cg(299));return gS(e,t,null,n)};pn.flushSync=function(e){var t=_o.T,n=dn.p;try{if(_o.T=null,dn.p=2,e)return e()}finally{_o.T=t,dn.p=n,dn.d.f()}};pn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,dn.d.C(e,t))};pn.prefetchDNS=function(e){typeof e=="string"&&dn.d.D(e)};pn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=kl(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?dn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&dn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};pn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=kl(t.as,t.crossOrigin);dn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&dn.d.M(e)};pn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=kl(n,t.crossOrigin);dn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};pn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=kl(t.as,t.crossOrigin);dn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else dn.d.m(e)};pn.requestFormReset=function(e){dn.d.r(e)};pn.unstable_batchedUpdates=function(e,t){return e(t)};pn.useFormState=function(e,t,n){return _o.H.useFormState(e,t,n)};pn.useFormStatus=function(){return _o.H.useHostTransitionStatus()};pn.version="19.2.6"});var dg=gi((yC,fg)=>{"use strict";function hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hg)}catch(e){console.error(e)}}hg(),fg.exports=ug()});var T_=gi(pu=>{"use strict";var ke=lg(),F0=mo(),yS=dg();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function V0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pg(e){if(al(e)!==e)throw Error(j(188))}function vS(e){var t=e.alternate;if(!t){if(t=al(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return pg(s),e;if(a===i)return pg(s),t;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function k0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k0(e),t!==null)return t;e=e.sibling}return null}var ve=Object.assign,_S=Symbol.for("react.element"),Wl=Symbol.for("react.transitional.element"),wo=Symbol.for("react.portal"),Ya=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),X0=Symbol.for("react.consumer"),Hi=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),bf=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),ds=Symbol.for("react.lazy");Symbol.for("react.scope");var Sf=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var xS=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var mg=Symbol.iterator;function xo(e){return e===null||typeof e!="object"?null:(e=mg&&e[mg]||e["@@iterator"],typeof e=="function"?e:null)}var bS=Symbol.for("react.client.reference");function Mf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ya:return"Fragment";case _f:return"Profiler";case W0:return"StrictMode";case xf:return"Suspense";case bf:return"SuspenseList";case Sf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case wo:return"Portal";case Hi:return e.displayName||"Context";case X0:return(e._context.displayName||"Context")+".Consumer";case pd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case md:return t=e.displayName||null,t!==null?t:Mf(e.type)||"Memo";case ds:t=e._payload,e=e._init;try{return Mf(e(t))}catch{}}return null}var Ro=Array.isArray,Ot=F0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=yS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,aa={pending:!1,data:null,method:null,action:null},Ef=[],Za=-1;function Si(e){return{current:e}}function Je(e){0>Za||(e.current=Ef[Za],Ef[Za]=null,Za--)}function pe(e,t){Za++,Ef[Za]=e.current,e.current=t}var bi=Si(null),Xo=Si(null),Es=Si(null),Mc=Si(null);function Ec(e,t){switch(pe(Es,t),pe(Xo,e),pe(bi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=S0(t),e=h_(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Je(bi),pe(bi,e)}function fr(){Je(bi),Je(Xo),Je(Es)}function Tf(e){e.memoizedState!==null&&pe(Mc,e);var t=bi.current,n=h_(t,e.type);t!==n&&(pe(Xo,e),pe(bi,n))}function Tc(e){Xo.current===e&&(Je(bi),Je(Xo)),Mc.current===e&&(Je(Mc),nl._currentValue=aa)}var Fh,gg;function ea(e){if(Fh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fh=t&&t[1]||"",gg=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fh+e+gg}var Hh=!1;function Vh(e,t){if(!e||Hh)return"";Hh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Hh=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ea(n):""}function SS(e,t){switch(e.tag){case 26:case 27:case 5:return ea(e.type);case 16:return ea("Lazy");case 13:return e.child!==t&&t!==null?ea("Suspense Fallback"):ea("Suspense");case 19:return ea("SuspenseList");case 0:case 15:return Vh(e.type,!1);case 11:return Vh(e.type.render,!1);case 1:return Vh(e.type,!0);case 31:return ea("Activity");default:return""}}function yg(e){try{var t="",n=null;do t+=SS(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Af=Object.prototype.hasOwnProperty,gd=ke.unstable_scheduleCallback,Gh=ke.unstable_cancelCallback,MS=ke.unstable_shouldYield,ES=ke.unstable_requestPaint,Ln=ke.unstable_now,TS=ke.unstable_getCurrentPriorityLevel,q0=ke.unstable_ImmediatePriority,Y0=ke.unstable_UserBlockingPriority,Ac=ke.unstable_NormalPriority,AS=ke.unstable_LowPriority,Z0=ke.unstable_IdlePriority,wS=ke.log,RS=ke.unstable_setDisableYieldValue,rl=null,Un=null;function _s(e){if(typeof wS=="function"&&RS(e),Un&&typeof Un.setStrictMode=="function")try{Un.setStrictMode(rl,e)}catch{}}var Dn=Math.clz32?Math.clz32:US,CS=Math.log,LS=Math.LN2;function US(e){return e>>>=0,e===0?32:31-(CS(e)/LS|0)|0}var Xl=256,ql=262144,Yl=4194304;function na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=na(i):(r&=o,r!==0?s=na(r):n||(n=o&~e,n!==0&&(s=na(n))))):(o=i&~a,o!==0?s=na(o):r!==0?s=na(r):n||(n=i&~e,n!==0&&(s=na(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function ol(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function DS(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j0(){var e=Yl;return Yl<<=1,(Yl&62914560)===0&&(Yl=4194304),e}function kh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function NS(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Dn(n),d=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&J0(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function J0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Dn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function K0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Dn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Q0(e,t){var n=t&-t;return n=(n&42)!==0?1:yd(n),(n&(e.suspendedLanes|t))!==0?0:n}function yd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vd(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $0(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function vg(e,t){var n=se.p;try{return se.p=e,t()}finally{se.p=n}}var Is=Math.random().toString(36).slice(2),$e="__reactFiber$"+Is,Mn="__reactProps$"+Is,Mr="__reactContainer$"+Is,wf="__reactEvents$"+Is,OS="__reactListeners$"+Is,PS="__reactHandles$"+Is,_g="__reactResources$"+Is,cl="__reactMarker$"+Is;function _d(e){delete e[$e],delete e[Mn],delete e[wf],delete e[OS],delete e[PS]}function ja(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mr]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=w0(e);e!==null;){if(n=e[$e])return n;e=w0(e)}return t}e=n,n=e.parentNode}return null}function Er(e){if(e=e[$e]||e[Mr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Co(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function ar(e){var t=e[_g];return t||(t=e[_g]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[cl]=!0}var ty=new Set,ey={};function ma(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(ey[e]=t,e=0;e<t.length;e++)ty.add(t[e])}var zS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xg={},bg={};function IS(e){return Af.call(bg,e)?!0:Af.call(xg,e)?!1:zS.test(e)?bg[e]=!0:(xg[e]=!0,!1)}function lc(e,t,n){if(IS(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Zl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ni(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ny(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function BS(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rf(e){if(!e._valueTracker){var t=ny(e)?"checked":"value";e._valueTracker=BS(e,t,""+e[t])}}function iy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ny(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function wc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var FS=/[\n"\\]/g;function qn(e){return e.replace(FS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cf(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kn(t)):e.value!==""+kn(t)&&(e.value=""+kn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Lf(e,r,kn(t)):n!=null?Lf(e,r,kn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+kn(o):e.removeAttribute("name")}function sy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Rf(e);return}n=n!=null?""+kn(n):"",t=t!=null?""+kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Rf(e)}function Lf(e,t,n){t==="number"&&wc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function rr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ay(e,t,n){if(t!=null&&(t=""+kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kn(n):""}function ry(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(Ro(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Rf(e)}function pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var HS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sg(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||HS.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function oy(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Sg(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Sg(e,a,t[a])}function xd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),GS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cc(e){return GS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var Uf=null;function bd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,or=null;function Mg(e){var t=Er(e);if(t&&(e=t.stateNode)){var n=e[Mn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Cf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Mn]||null;if(!s)throw Error(j(90));Cf(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&iy(i)}break t;case"textarea":ay(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}}}var Wh=!1;function ly(e,t,n){if(Wh)return e(t,n);Wh=!0;try{var i=e(t);return i}finally{if(Wh=!1,(Ja!==null||or!==null)&&(uu(),Ja&&(t=Ja,e=or,or=Ja=null,Mg(t),e)))for(t=0;t<e.length;t++)Mg(e[t])}}function qo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Mn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Df=!1;if(qi)try{Ga={},Object.defineProperty(Ga,"passive",{get:function(){Df=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{Df=!1}var Ga,xs=null,Sd=null,uc=null;function cy(){if(uc)return uc;var e,t=Sd,n=t.length,i,s="value"in xs?xs.value:xs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return uc=s.slice(e,1<i?1-i:void 0)}function hc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function Eg(){return!1}function En(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?jl:Eg,this.isPropagationStopped=Eg,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=En(ga),ul=ve({},ga,{view:0,detail:0}),kS=En(ul),Xh,qh,bo,tu=ve({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Xh=e.screenX-bo.screenX,qh=e.screenY-bo.screenY):qh=Xh=0,bo=e),Xh)},movementY:function(e){return"movementY"in e?e.movementY:qh}}),Tg=En(tu),WS=ve({},tu,{dataTransfer:0}),XS=En(WS),qS=ve({},ul,{relatedTarget:0}),Yh=En(qS),YS=ve({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),ZS=En(YS),jS=ve({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JS=En(jS),KS=ve({},ga,{data:0}),Ag=En(KS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tM[e])?!!t[e]:!1}function Md(){return eM}var nM=ve({},ul,{key:function(e){if(e.key){var t=QS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$S[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(e){return e.type==="keypress"?hc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iM=En(nM),sM=ve({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wg=En(sM),aM=ve({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),rM=En(aM),oM=ve({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),lM=En(oM),cM=ve({},tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uM=En(cM),hM=ve({},ga,{newState:0,oldState:0}),fM=En(hM),dM=[9,13,27,32],Ed=qi&&"CompositionEvent"in window,Do=null;qi&&"documentMode"in document&&(Do=document.documentMode);var pM=qi&&"TextEvent"in window&&!Do,uy=qi&&(!Ed||Do&&8<Do&&11>=Do),Rg=" ",Cg=!1;function hy(e,t){switch(e){case"keyup":return dM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function mM(e,t){switch(e){case"compositionend":return fy(t);case"keypress":return t.which!==32?null:(Cg=!0,Rg);case"textInput":return e=t.data,e===Rg&&Cg?null:e;default:return null}}function gM(e,t){if(Ka)return e==="compositionend"||!Ed&&hy(e,t)?(e=cy(),uc=Sd=xs=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uy&&t.locale!=="ko"?null:t.data;default:return null}}var yM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yM[e.type]:t==="textarea"}function dy(e,t,n,i){Ja?or?or.push(i):or=[i]:Ja=i,t=Xc(t,"onChange"),0<t.length&&(n=new $c("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var No=null,Yo=null;function vM(e){l_(e,0)}function eu(e){var t=Co(e);if(iy(t))return e}function Ug(e,t){if(e==="change")return t}var py=!1;qi&&(qi?(Kl="oninput"in document,Kl||(Zh=document.createElement("div"),Zh.setAttribute("oninput","return;"),Kl=typeof Zh.oninput=="function"),Jl=Kl):Jl=!1,py=Jl&&(!document.documentMode||9<document.documentMode));var Jl,Kl,Zh;function Dg(){No&&(No.detachEvent("onpropertychange",my),Yo=No=null)}function my(e){if(e.propertyName==="value"&&eu(Yo)){var t=[];dy(t,Yo,e,bd(e)),ly(vM,t)}}function _M(e,t,n){e==="focusin"?(Dg(),No=t,Yo=n,No.attachEvent("onpropertychange",my)):e==="focusout"&&Dg()}function xM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eu(Yo)}function bM(e,t){if(e==="click")return eu(t)}function SM(e,t){if(e==="input"||e==="change")return eu(t)}function MM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var On=typeof Object.is=="function"?Object.is:MM;function Zo(e,t){if(On(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Af.call(t,s)||!On(e[s],t[s]))return!1}return!0}function Ng(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Og(e,t){var n=Ng(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ng(n)}}function gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wc(e.document)}return t}function Td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var EM=qi&&"documentMode"in document&&11>=document.documentMode,Qa=null,Nf=null,Oo=null,Of=!1;function Pg(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Of||Qa==null||Qa!==wc(i)||(i=Qa,"selectionStart"in i&&Td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&Zo(Oo,i)||(Oo=i,i=Xc(Nf,"onSelect"),0<i.length&&(t=new $c("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Qa)))}function ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $a={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},jh={},vy={};qi&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function ya(e){if(jh[e])return jh[e];if(!$a[e])return e;var t=$a[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vy)return jh[e]=t[n];return e}var _y=ya("animationend"),xy=ya("animationiteration"),by=ya("animationstart"),TM=ya("transitionrun"),AM=ya("transitionstart"),wM=ya("transitioncancel"),Sy=ya("transitionend"),My=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function ai(e,t){My.set(e,t),ma(t,[e])}var Rc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gn=[],tr=0,Ad=0;function nu(){for(var e=tr,t=Ad=tr=0;t<e;){var n=Gn[t];Gn[t++]=null;var i=Gn[t];Gn[t++]=null;var s=Gn[t];Gn[t++]=null;var a=Gn[t];if(Gn[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Ey(n,s,a)}}function iu(e,t,n,i){Gn[tr++]=e,Gn[tr++]=t,Gn[tr++]=n,Gn[tr++]=i,Ad|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function wd(e,t,n,i){return iu(e,t,n,i),Cc(e)}function va(e,t){return iu(e,null,null,t),Cc(e)}function Ey(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Dn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Cc(e){if(50<ko)throw ko=0,nd=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var er={};function RM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(e,t,n,i){return new RM(e,t,n,i)}function Rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,t){var n=e.alternate;return n===null?(n=Rn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ty(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Rd(e)&&(r=1);else if(typeof e=="string")r=U1(e,n,bi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Sf:return e=Rn(31,n,t,s),e.elementType=Sf,e.lanes=a,e;case Ya:return ra(n.children,s,a,t);case W0:r=8,s|=24;break;case _f:return e=Rn(12,n,t,s|2),e.elementType=_f,e.lanes=a,e;case xf:return e=Rn(13,n,t,s),e.elementType=xf,e.lanes=a,e;case bf:return e=Rn(19,n,t,s),e.elementType=bf,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hi:r=10;break t;case X0:r=9;break t;case pd:r=11;break t;case md:r=14;break t;case ds:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=Rn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ra(e,t,n,i){return e=Rn(7,e,i,t),e.lanes=n,e}function Jh(e,t,n){return e=Rn(6,e,null,t),e.lanes=n,e}function Ay(e){var t=Rn(18,null,null,0);return t.stateNode=e,t}function Kh(e,t,n){return t=Rn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zg=new WeakMap;function Yn(e,t){if(typeof e=="object"&&e!==null){var n=zg.get(e);return n!==void 0?n:(t={value:e,source:t,stack:yg(t)},zg.set(e,t),t)}return{value:e,source:t,stack:yg(t)}}var nr=[],ir=0,Lc=null,jo=0,Wn=[],Xn=0,Ns=null,vi=1,_i="";function Bi(e,t){nr[ir++]=jo,nr[ir++]=Lc,Lc=e,jo=t}function wy(e,t,n){Wn[Xn++]=vi,Wn[Xn++]=_i,Wn[Xn++]=Ns,Ns=e;var i=vi;e=_i;var s=32-Dn(i)-1;i&=~(1<<s),n+=1;var a=32-Dn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,vi=1<<32-Dn(t)+s|n<<s|i,_i=a+e}else vi=1<<a|n<<s|i,_i=e}function Cd(e){e.return!==null&&(Bi(e,1),wy(e,1,0))}function Ld(e){for(;e===Lc;)Lc=nr[--ir],nr[ir]=null,jo=nr[--ir],nr[ir]=null;for(;e===Ns;)Ns=Wn[--Xn],Wn[Xn]=null,_i=Wn[--Xn],Wn[Xn]=null,vi=Wn[--Xn],Wn[Xn]=null}function Ry(e,t){Wn[Xn++]=vi,Wn[Xn++]=_i,Wn[Xn++]=Ns,vi=t.id,_i=t.overflow,Ns=e}var tn=null,ye=null,te=!1,Ts=null,Zn=!1,zf=Error(j(519));function Os(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(Yn(t,e)),zf}function Ig(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[Mn]=i,n){case"dialog":Jt("cancel",t),Jt("close",t);break;case"iframe":case"object":case"embed":Jt("load",t);break;case"video":case"audio":for(n=0;n<tl.length;n++)Jt(tl[n],t);break;case"source":Jt("error",t);break;case"img":case"image":case"link":Jt("error",t),Jt("load",t);break;case"details":Jt("toggle",t);break;case"input":Jt("invalid",t),sy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Jt("invalid",t);break;case"textarea":Jt("invalid",t),ry(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||u_(t.textContent,n)?(i.popover!=null&&(Jt("beforetoggle",t),Jt("toggle",t)),i.onScroll!=null&&Jt("scroll",t),i.onScrollEnd!=null&&Jt("scrollend",t),i.onClick!=null&&(t.onclick=Vi),t=!0):t=!1,t||Os(e,!0)}function Bg(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:Zn=!1;return;case 27:case 3:Zn=!0;return;default:tn=tn.return}}function ka(e){if(e!==tn)return!1;if(!te)return Bg(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||od(e.type,e.memoizedProps)),n=!n),n&&ye&&Os(e),Bg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));ye=A0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));ye=A0(e)}else t===27?(t=ye,Bs(e.type)?(e=hd,hd=null,ye=e):ye=t):ye=tn?Jn(e.stateNode.nextSibling):null;return!0}function ua(){ye=tn=null,te=!1}function Qh(){var e=Ts;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),Ts=null),e}function Jo(e){Ts===null?Ts=[e]:Ts.push(e)}var If=Si(null),_a=null,Gi=null;function ms(e,t,n){pe(If,t._currentValue),t._currentValue=n}function Wi(e){e._currentValue=If.current,Je(If)}function Bf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ff(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bf(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Bf(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Tr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;On(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Mc.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(nl):e=[nl])}s=s.return}e!==null&&Ff(t,e,n,i),t.flags|=262144}function Uc(e){for(e=e.firstContext;e!==null;){if(!On(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){_a=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return Cy(_a,e)}function Ql(e,t){return _a===null&&ha(e),Cy(e,t)}function Cy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(j(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var CM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},LM=ke.unstable_scheduleCallback,UM=ke.unstable_NormalPriority,ze={$$typeof:Hi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ud(){return{controller:new CM,data:new Map,refCount:0}}function hl(e){e.refCount--,e.refCount===0&&LM(UM,function(){e.controller.abort()})}var Po=null,Hf=0,mr=0,lr=null;function DM(e,t){if(Po===null){var n=Po=[];Hf=0,mr=np(),lr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Hf++,t.then(Fg,Fg),t}function Fg(){if(--Hf===0&&Po!==null){lr!==null&&(lr.status="fulfilled");var e=Po;Po=null,mr=0,lr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function NM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Hg=Ot.S;Ot.S=function(e,t){kv=Ln(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&DM(e,t),Hg!==null&&Hg(e,t)};var oa=Si(null);function Dd(){var e=oa.current;return e!==null?e:de.pooledCache}function dc(e,t){t===null?pe(oa,oa.current):pe(oa,t.pool)}function Ly(){var e=Dd();return e===null?null:{parent:ze._currentValue,pool:e}}var Ar=Error(j(460)),Nd=Error(j(474)),su=Error(j(542)),Dc={then:function(){}};function Vg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Uy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vi,Vi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kg(e),e;default:if(typeof t.status=="string")t.then(Vi,Vi);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kg(e),e}throw la=t,Ar}}function ia(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(la=n,Ar):n}}var la=null;function Gg(){if(la===null)throw Error(j(459));var e=la;return la=null,e}function kg(e){if(e===Ar||e===su)throw Error(j(483))}var cr=null,Ko=0;function $l(e){var t=Ko;return Ko+=1,cr===null&&(cr=[]),Uy(cr,e,t)}function So(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function tc(e,t){throw t.$$typeof===_S?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dy(e){function t(h,y){if(e){var g=h.deletions;g===null?(h.deletions=[y],h.flags|=16):g.push(y)}}function n(h,y){if(!e)return null;for(;y!==null;)t(h,y),y=y.sibling;return null}function i(h){for(var y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function s(h,y){return h=ki(h,y),h.index=0,h.sibling=null,h}function a(h,y,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<y?(h.flags|=67108866,y):g):(h.flags|=67108866,y)):(h.flags|=1048576,y)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,y,g,x){return y===null||y.tag!==6?(y=Jh(g,h.mode,x),y.return=h,y):(y=s(y,g),y.return=h,y)}function l(h,y,g,x){var E=g.type;return E===Ya?u(h,y,g.props.children,x,g.key):y!==null&&(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ds&&ia(E)===y.type)?(y=s(y,g.props),So(y,g),y.return=h,y):(y=fc(g.type,g.key,g.props,null,h.mode,x),So(y,g),y.return=h,y)}function c(h,y,g,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==g.containerInfo||y.stateNode.implementation!==g.implementation?(y=Kh(g,h.mode,x),y.return=h,y):(y=s(y,g.children||[]),y.return=h,y)}function u(h,y,g,x,E){return y===null||y.tag!==7?(y=ra(g,h.mode,x,E),y.return=h,y):(y=s(y,g),y.return=h,y)}function d(h,y,g){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Jh(""+y,h.mode,g),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:return g=fc(y.type,y.key,y.props,null,h.mode,g),So(g,y),g.return=h,g;case wo:return y=Kh(y,h.mode,g),y.return=h,y;case ds:return y=ia(y),d(h,y,g)}if(Ro(y)||xo(y))return y=ra(y,h.mode,g,null),y.return=h,y;if(typeof y.then=="function")return d(h,$l(y),g);if(y.$$typeof===Hi)return d(h,Ql(h,y),g);tc(h,y)}return null}function f(h,y,g,x){var E=y!==null?y.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return E!==null?null:o(h,y,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wl:return g.key===E?l(h,y,g,x):null;case wo:return g.key===E?c(h,y,g,x):null;case ds:return g=ia(g),f(h,y,g,x)}if(Ro(g)||xo(g))return E!==null?null:u(h,y,g,x,null);if(typeof g.then=="function")return f(h,y,$l(g),x);if(g.$$typeof===Hi)return f(h,y,Ql(h,g),x);tc(h,g)}return null}function p(h,y,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return h=h.get(g)||null,o(y,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wl:return h=h.get(x.key===null?g:x.key)||null,l(y,h,x,E);case wo:return h=h.get(x.key===null?g:x.key)||null,c(y,h,x,E);case ds:return x=ia(x),p(h,y,g,x,E)}if(Ro(x)||xo(x))return h=h.get(g)||null,u(y,h,x,E,null);if(typeof x.then=="function")return p(h,y,g,$l(x),E);if(x.$$typeof===Hi)return p(h,y,g,Ql(y,x),E);tc(y,x)}return null}function v(h,y,g,x){for(var E=null,R=null,T=y,O=y=0,b=null;T!==null&&O<g.length;O++){T.index>O?(b=T,T=null):b=T.sibling;var w=f(h,T,g[O],x);if(w===null){T===null&&(T=b);break}e&&T&&w.alternate===null&&t(h,T),y=a(w,y,O),R===null?E=w:R.sibling=w,R=w,T=b}if(O===g.length)return n(h,T),te&&Bi(h,O),E;if(T===null){for(;O<g.length;O++)T=d(h,g[O],x),T!==null&&(y=a(T,y,O),R===null?E=T:R.sibling=T,R=T);return te&&Bi(h,O),E}for(T=i(T);O<g.length;O++)b=p(T,h,O,g[O],x),b!==null&&(e&&b.alternate!==null&&T.delete(b.key===null?O:b.key),y=a(b,y,O),R===null?E=b:R.sibling=b,R=b);return e&&T.forEach(function(k){return t(h,k)}),te&&Bi(h,O),E}function _(h,y,g,x){if(g==null)throw Error(j(151));for(var E=null,R=null,T=y,O=y=0,b=null,w=g.next();T!==null&&!w.done;O++,w=g.next()){T.index>O?(b=T,T=null):b=T.sibling;var k=f(h,T,w.value,x);if(k===null){T===null&&(T=b);break}e&&T&&k.alternate===null&&t(h,T),y=a(k,y,O),R===null?E=k:R.sibling=k,R=k,T=b}if(w.done)return n(h,T),te&&Bi(h,O),E;if(T===null){for(;!w.done;O++,w=g.next())w=d(h,w.value,x),w!==null&&(y=a(w,y,O),R===null?E=w:R.sibling=w,R=w);return te&&Bi(h,O),E}for(T=i(T);!w.done;O++,w=g.next())w=p(T,h,O,w.value,x),w!==null&&(e&&w.alternate!==null&&T.delete(w.key===null?O:w.key),y=a(w,y,O),R===null?E=w:R.sibling=w,R=w);return e&&T.forEach(function(K){return t(h,K)}),te&&Bi(h,O),E}function m(h,y,g,x){if(typeof g=="object"&&g!==null&&g.type===Ya&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wl:t:{for(var E=g.key;y!==null;){if(y.key===E){if(E=g.type,E===Ya){if(y.tag===7){n(h,y.sibling),x=s(y,g.props.children),x.return=h,h=x;break t}}else if(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ds&&ia(E)===y.type){n(h,y.sibling),x=s(y,g.props),So(x,g),x.return=h,h=x;break t}n(h,y);break}else t(h,y);y=y.sibling}g.type===Ya?(x=ra(g.props.children,h.mode,x,g.key),x.return=h,h=x):(x=fc(g.type,g.key,g.props,null,h.mode,x),So(x,g),x.return=h,h=x)}return r(h);case wo:t:{for(E=g.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===g.containerInfo&&y.stateNode.implementation===g.implementation){n(h,y.sibling),x=s(y,g.children||[]),x.return=h,h=x;break t}else{n(h,y);break}else t(h,y);y=y.sibling}x=Kh(g,h.mode,x),x.return=h,h=x}return r(h);case ds:return g=ia(g),m(h,y,g,x)}if(Ro(g))return v(h,y,g,x);if(xo(g)){if(E=xo(g),typeof E!="function")throw Error(j(150));return g=E.call(g),_(h,y,g,x)}if(typeof g.then=="function")return m(h,y,$l(g),x);if(g.$$typeof===Hi)return m(h,y,Ql(h,g),x);tc(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,y!==null&&y.tag===6?(n(h,y.sibling),x=s(y,g),x.return=h,h=x):(n(h,y),x=Jh(g,h.mode,x),x.return=h,h=x),r(h)):n(h,y)}return function(h,y,g,x){try{Ko=0;var E=m(h,y,g,x);return cr=null,E}catch(T){if(T===Ar||T===su)throw T;var R=Rn(29,T,null,h.mode);return R.lanes=x,R.return=h,R}finally{}}}var fa=Dy(!0),Ny=Dy(!1),ps=!1;function Od(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function As(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ws(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ie&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Cc(e),Ey(e,null,n),t}return iu(e,i,t,n),Cc(e)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,K0(e,n)}}function $h(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Gf=!1;function Io(){if(Gf){var e=lr;if(e!==null)throw e}}function Bo(e,t,n,i){Gf=!1;var s=e.updateQueue;ps=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?($t&f)===f:(i&f)===f){f!==0&&f===mr&&(Gf=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,_=o;f=t;var m=n;switch(_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(m,d,f);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break t;d=ve({},d,f);break t;case 2:ps=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),zs|=r,e.lanes=r,e.memoizedState=d}}function Oy(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function Py(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Oy(n[e],t)}var gr=Si(null),Nc=Si(0);function Wg(e,t){e=Ji,pe(Nc,e),pe(gr,t),Ji=e|t.baseLanes}function kf(){pe(Nc,Ji),pe(gr,gr.current)}function Pd(){Ji=Nc.current,Je(gr),Je(Nc)}var Pn=Si(null),jn=null;function gs(e){var t=e.alternate;pe(De,De.current&1),pe(Pn,e),jn===null&&(t===null||gr.current!==null||t.memoizedState!==null)&&(jn=e)}function Wf(e){pe(De,De.current),pe(Pn,e),jn===null&&(jn=e)}function zy(e){e.tag===22?(pe(De,De.current),pe(Pn,e),jn===null&&(jn=e)):ys(e)}function ys(){pe(De,De.current),pe(Pn,Pn.current)}function wn(e){Je(Pn),jn===e&&(jn=null),Je(De)}var De=Si(0);function Oc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cd(n)||ud(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yi=0,kt=null,ce=null,Oe=null,Pc=!1,ur=!1,da=!1,zc=0,Qo=0,hr=null,OM=0;function Ce(){throw Error(j(321))}function zd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!On(e[n],t[n]))return!1;return!0}function Id(e,t,n,i,s,a){return Yi=a,kt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=e===null||e.memoizedState===null?dv:Zd,da=!1,a=n(i,s),da=!1,ur&&(a=By(t,n,i,s)),Iy(e),a}function Iy(e){Ot.H=$o;var t=ce!==null&&ce.next!==null;if(Yi=0,Oe=ce=kt=null,Pc=!1,Qo=0,hr=null,t)throw Error(j(300));e===null||Ie||(e=e.dependencies,e!==null&&Uc(e)&&(Ie=!0))}function By(e,t,n,i){kt=e;var s=0;do{if(ur&&(hr=null),Qo=0,ur=!1,25<=s)throw Error(j(301));if(s+=1,Oe=ce=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ot.H=pv,a=t(n,i)}while(ur);return a}function PM(){var e=Ot.H,t=e.useState()[0];return t=typeof t.then=="function"?fl(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(kt.flags|=1024),t}function Bd(){var e=zc!==0;return zc=0,e}function Fd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hd(e){if(Pc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pc=!1}Yi=0,Oe=ce=kt=null,ur=!1,Qo=zc=0,hr=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?kt.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Ne(){if(ce===null){var e=kt.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Oe===null?kt.memoizedState:Oe.next;if(t!==null)Oe=t,ce=e;else{if(e===null)throw kt.alternate===null?Error(j(467)):Error(j(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Oe===null?kt.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fl(e){var t=Qo;return Qo+=1,hr===null&&(hr=[]),e=Uy(hr,e,t),t=kt,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?dv:Zd),e}function ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fl(e);if(e.$$typeof===Hi)return en(e)}throw Error(j(438,String(e)))}function Vd(e){var t=null,n=kt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=kt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=au(),kt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=xS;return t.index++,n}function Zi(e,t){return typeof t=="function"?t(e):t}function pc(e){var t=Ne();return Gd(t,ce,e)}function Gd(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?($t&d)===d:(Yi&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===mr&&(u=!0);else if((Yi&f)===f){c=c.next,f===mr&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,kt.lanes|=f,zs|=f;d=c.action,da&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,kt.lanes|=d,zs|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!On(a,e.memoizedState)&&(Ie=!0,u&&(n=lr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function tf(e){var t=Ne(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);On(a,t.memoizedState)||(Ie=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Fy(e,t,n){var i=kt,s=Ne(),a=te;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!On((ce||s).memoizedState,n);if(r&&(s.memoizedState=n,Ie=!0),s=s.queue,kd(Gy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,yr(9,{destroy:void 0},Vy.bind(null,i,s,n,t),null),de===null)throw Error(j(349));a||(Yi&127)!==0||Hy(i,t,n)}return n}function Hy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=kt.updateQueue,t===null?(t=au(),kt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vy(e,t,n,i){t.value=n,t.getSnapshot=i,ky(t)&&Wy(e)}function Gy(e,t,n){return n(function(){ky(t)&&Wy(e)})}function ky(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!On(e,n)}catch{return!0}}function Wy(e){var t=va(e,2);t!==null&&Sn(t,e,2)}function Xf(e){var t=mn();if(typeof e=="function"){var n=e;if(e=n(),da){_s(!0);try{n()}finally{_s(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t}function Xy(e,t,n,i){return e.baseState=n,Gd(e,ce,typeof i=="function"?i:Zi)}function zM(e,t,n,i,s){if(lu(e))throw Error(j(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ot.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,qy(t,a)):(a.next=n.next,t.pending=n.next=a)}}function qy(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ot.T,r={};Ot.T=r;try{var o=n(s,i),l=Ot.S;l!==null&&l(r,o),Xg(e,t,o)}catch(c){qf(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ot.T=a}}else try{a=n(s,i),Xg(e,t,a)}catch(c){qf(e,t,c)}}function Xg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){qg(e,t,i)},function(i){return qf(e,t,i)}):qg(e,t,n)}function qg(e,t,n){t.status="fulfilled",t.value=n,Yy(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qy(e,n)))}function qf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Yy(t),t=t.next;while(t!==i)}e.action=null}function Yy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zy(e,t){return t}function Yg(e,t){if(te){var n=de.formState;if(n!==null){t:{var i=kt;if(te){if(ye){e:{for(var s=ye,a=Zn;s.nodeType!==8;){if(!a){s=null;break e}if(s=Jn(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){ye=Jn(s.nextSibling),i=s.data==="F!";break t}}Os(i)}i=!1}i&&(t=n[0])}}return n=mn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zy,lastRenderedState:t},n.queue=i,n=uv.bind(null,kt,i),i.dispatch=n,i=Xf(!1),a=Yd.bind(null,kt,!1,i.queue),i=mn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=zM.bind(null,kt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Zg(e){var t=Ne();return jy(t,ce,e)}function jy(e,t,n){if(t=Gd(e,t,Zy)[0],e=pc(Zi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=fl(t)}catch(r){throw r===Ar?su:r}else i=t;t=Ne();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(kt.flags|=2048,yr(9,{destroy:void 0},IM.bind(null,s,n),null)),[i,a,e]}function IM(e,t){e.action=t}function jg(e){var t=Ne(),n=ce;if(n!==null)return jy(t,n,e);Ne(),t=t.memoizedState,n=Ne();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function yr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=kt.updateQueue,t===null&&(t=au(),kt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Jy(){return Ne().memoizedState}function mc(e,t,n,i){var s=mn();kt.flags|=e,s.memoizedState=yr(1|t,{destroy:void 0},n,i===void 0?null:i)}function ou(e,t,n,i){var s=Ne();i=i===void 0?null:i;var a=s.memoizedState.inst;ce!==null&&i!==null&&zd(i,ce.memoizedState.deps)?s.memoizedState=yr(t,a,n,i):(kt.flags|=e,s.memoizedState=yr(1|t,a,n,i))}function Jg(e,t){mc(8390656,8,e,t)}function kd(e,t){ou(2048,8,e,t)}function BM(e){kt.flags|=4;var t=kt.updateQueue;if(t===null)t=au(),kt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ky(e){var t=Ne().memoizedState;return BM({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function Qy(e,t){return ou(4,2,e,t)}function $y(e,t){return ou(4,4,e,t)}function tv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ev(e,t,n){n=n!=null?n.concat([e]):null,ou(4,4,tv.bind(null,t,e),n)}function Wd(){}function nv(e,t){var n=Ne();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&zd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function iv(e,t){var n=Ne();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&zd(t,i[1]))return i[0];if(i=e(),da){_s(!0);try{e()}finally{_s(!1)}}return n.memoizedState=[i,t],i}function Xd(e,t,n){return n===void 0||(Yi&1073741824)!==0&&($t&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Xv(),kt.lanes|=e,zs|=e,n)}function sv(e,t,n,i){return On(n,t)?n:gr.current!==null?(e=Xd(e,n,i),On(e,t)||(Ie=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&($t&261930)===0?(Ie=!0,e.memoizedState=n):(e=Xv(),kt.lanes|=e,zs|=e,t)}function av(e,t,n,i,s){var a=se.p;se.p=a!==0&&8>a?a:8;var r=Ot.T,o={};Ot.T=o,Yd(e,!1,t,n);try{var l=s(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=NM(l,i);Fo(e,t,u,Nn(e))}else Fo(e,t,i,Nn(e))}catch(d){Fo(e,t,{then:function(){},status:"rejected",reason:d},Nn())}finally{se.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ot.T=r}}function FM(){}function Yf(e,t,n,i){if(e.tag!==5)throw Error(j(476));var s=rv(e).queue;av(e,s,t,aa,n===null?FM:function(){return ov(e),n(i)})}function rv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:aa,baseState:aa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:aa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ov(e){var t=rv(e);t.next===null&&(t=e.alternate.memoizedState),Fo(e,t.next.queue,{},Nn())}function qd(){return en(nl)}function lv(){return Ne().memoizedState}function cv(){return Ne().memoizedState}function HM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nn();e=As(n);var i=ws(t,e,n);i!==null&&(Sn(i,t,n),zo(i,t,n)),t={cache:Ud()},e.payload=t;return}t=t.return}}function VM(e,t,n){var i=Nn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},lu(e)?hv(t,n):(n=wd(e,t,n,i),n!==null&&(Sn(n,e,i),fv(n,t,i)))}function uv(e,t,n){var i=Nn();Fo(e,t,n,i)}function Fo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(lu(e))hv(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,On(o,r))return iu(e,t,s,0),de===null&&nu(),!1}catch{}finally{}if(n=wd(e,t,s,i),n!==null)return Sn(n,e,i),fv(n,t,i),!0}return!1}function Yd(e,t,n,i){if(i={lane:2,revertLane:np(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},lu(e)){if(t)throw Error(j(479))}else t=wd(e,n,i,2),t!==null&&Sn(t,e,2)}function lu(e){var t=e.alternate;return e===kt||t!==null&&t===kt}function hv(e,t){ur=Pc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fv(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,K0(e,n)}}var $o={readContext:en,use:ru,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};$o.useEffectEvent=Ce;var dv={readContext:en,use:ru,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:Jg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mc(4194308,4,tv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mc(4194308,4,e,t)},useInsertionEffect:function(e,t){mc(4,2,e,t)},useMemo:function(e,t){var n=mn();t=t===void 0?null:t;var i=e();if(da){_s(!0);try{e()}finally{_s(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=mn();if(n!==void 0){var s=n(t);if(da){_s(!0);try{n(t)}finally{_s(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=VM.bind(null,kt,e),[i.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:function(e){e=Xf(e);var t=e.queue,n=uv.bind(null,kt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wd,useDeferredValue:function(e,t){var n=mn();return Xd(n,e,t)},useTransition:function(){var e=Xf(!1);return e=av.bind(null,kt,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=kt,s=mn();if(te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),de===null)throw Error(j(349));($t&127)!==0||Hy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Jg(Gy.bind(null,i,a,e),[e]),i.flags|=2048,yr(9,{destroy:void 0},Vy.bind(null,i,a,n,t),null),n},useId:function(){var e=mn(),t=de.identifierPrefix;if(te){var n=_i,i=vi;n=(i&~(1<<32-Dn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=zc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=OM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qd,useFormState:Yg,useActionState:Yg,useOptimistic:function(e){var t=mn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Yd.bind(null,kt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vd,useCacheRefresh:function(){return mn().memoizedState=HM.bind(null,kt)},useEffectEvent:function(e){var t=mn(),n={impl:e};return t.memoizedState=n,function(){if((ie&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},Zd={readContext:en,use:ru,useCallback:nv,useContext:en,useEffect:kd,useImperativeHandle:ev,useInsertionEffect:Qy,useLayoutEffect:$y,useMemo:iv,useReducer:pc,useRef:Jy,useState:function(){return pc(Zi)},useDebugValue:Wd,useDeferredValue:function(e,t){var n=Ne();return sv(n,ce.memoizedState,e,t)},useTransition:function(){var e=pc(Zi)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:fl(e),t]},useSyncExternalStore:Fy,useId:lv,useHostTransitionStatus:qd,useFormState:Zg,useActionState:Zg,useOptimistic:function(e,t){var n=Ne();return Xy(n,ce,e,t)},useMemoCache:Vd,useCacheRefresh:cv};Zd.useEffectEvent=Ky;var pv={readContext:en,use:ru,useCallback:nv,useContext:en,useEffect:kd,useImperativeHandle:ev,useInsertionEffect:Qy,useLayoutEffect:$y,useMemo:iv,useReducer:tf,useRef:Jy,useState:function(){return tf(Zi)},useDebugValue:Wd,useDeferredValue:function(e,t){var n=Ne();return ce===null?Xd(n,e,t):sv(n,ce.memoizedState,e,t)},useTransition:function(){var e=tf(Zi)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:fl(e),t]},useSyncExternalStore:Fy,useId:lv,useHostTransitionStatus:qd,useFormState:jg,useActionState:jg,useOptimistic:function(e,t){var n=Ne();return ce!==null?Xy(n,ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Vd,useCacheRefresh:cv};pv.useEffectEvent=Ky;function ef(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nn(),s=As(i);s.payload=t,n!=null&&(s.callback=n),t=ws(e,s,i),t!==null&&(Sn(t,e,i),zo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nn(),s=As(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ws(e,s,i),t!==null&&(Sn(t,e,i),zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nn(),i=As(n);i.tag=2,t!=null&&(i.callback=t),t=ws(e,i,n),t!==null&&(Sn(t,e,n),zo(t,e,n))}};function Kg(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Zo(n,i)||!Zo(s,a):!0}function Qg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Zf.enqueueReplaceState(t,t.state,null)}function pa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ve({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function mv(e){Rc(e)}function gv(e){console.error(e)}function yv(e){Rc(e)}function Ic(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function $g(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function jf(e,t,n){return n=As(n),n.tag=3,n.payload={element:null},n.callback=function(){Ic(e,t)},n}function vv(e){return e=As(e),e.tag=3,e}function _v(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){$g(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){$g(t,n,i),typeof s!="function"&&(Rs===null?Rs=new Set([this]):Rs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function GM(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Tr(t,n,s,!0),n=Pn.current,n!==null){switch(n.tag){case 31:case 13:return jn===null?Gc():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Dc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),df(e,i,s)),!1;case 22:return n.flags|=65536,i===Dc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),df(e,i,s)),!1}throw Error(j(435,n.tag))}return df(e,i,s),Gc(),!1}if(te)return t=Pn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==zf&&(e=Error(j(422),{cause:i}),Jo(Yn(e,n)))):(i!==zf&&(t=Error(j(423),{cause:i}),Jo(Yn(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Yn(i,n),s=jf(e.stateNode,i,s),$h(e,s),Le!==4&&(Le=2)),!1;var a=Error(j(520),{cause:i});if(a=Yn(a,n),Go===null?Go=[a]:Go.push(a),Le!==4&&(Le=2),t===null)return!0;i=Yn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=jf(n.stateNode,i,e),$h(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Rs===null||!Rs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=vv(s),_v(s,e,n,i),$h(n,s),!1}n=n.return}while(n!==null);return!1}var jd=Error(j(461)),Ie=!1;function Qe(e,t,n,i){t.child=e===null?Ny(t,null,n,i):fa(t,e.child,n,i)}function t0(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ha(t),i=Id(e,t,n,r,a,s),o=Bd(),e!==null&&!Ie?(Fd(e,t,s),ji(e,t,s)):(te&&o&&Cd(t),t.flags|=1,Qe(e,t,i,s),t.child)}function e0(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Rd(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,xv(e,t,a,i,s)):(e=fc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Jd(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(r,i)&&e.ref===t.ref)return ji(e,t,s)}return t.flags|=1,e=ki(a,i),e.ref=t.ref,e.return=t,t.child=e}function xv(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Zo(a,i)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=i=a,Jd(e,s))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,ji(e,t,s)}return Jf(e,t,n,i,s)}function bv(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return n0(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(t,a!==null?a.cachePool:null),a!==null?Wg(t,a):kf(),zy(t);else return i=t.lanes=536870912,n0(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(dc(t,a.cachePool),Wg(t,a),ys(t),t.memoizedState=null):(e!==null&&dc(t,null),kf(),ys(t));return Qe(e,t,s,n),t.child}function Lo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function n0(e,t,n,i,s){var a=Dd();return a=a===null?null:{parent:ze._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&dc(t,null),kf(),zy(t),e!==null&&Tr(e,t,i,!0),t.childLanes=s,null}function gc(e,t){return t=Bc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function i0(e,t,n){return fa(t,e.child,null,n),e=gc(t,t.pendingProps),e.flags|=2,wn(t),t.memoizedState=null,e}function kM(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(i.mode==="hidden")return e=gc(t,i),t.lanes=536870912,Lo(null,e);if(Wf(t),(e=ye)?(e=d_(e,Zn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ns!==null?{id:vi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=Ay(e),n.return=t,t.child=n,tn=t,ye=null)):e=null,e===null)throw Os(t);return t.lanes=536870912,null}return gc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Wf(t),s)if(t.flags&256)t.flags&=-257,t=i0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(Ie||Tr(e,t,n,!1),s=(n&e.childLanes)!==0,Ie||s){if(i=de,i!==null&&(r=Q0(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,va(e,r),Sn(i,e,r),jd;Gc(),t=i0(e,t,n)}else e=a.treeContext,ye=Jn(r.nextSibling),tn=t,te=!0,Ts=null,Zn=!1,e!==null&&Ry(t,e),t=gc(t,i),t.flags|=4096;return t}return e=ki(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jf(e,t,n,i,s){return ha(t),n=Id(e,t,n,i,void 0,s),i=Bd(),e!==null&&!Ie?(Fd(e,t,s),ji(e,t,s)):(te&&i&&Cd(t),t.flags|=1,Qe(e,t,n,s),t.child)}function s0(e,t,n,i,s,a){return ha(t),t.updateQueue=null,n=By(t,i,n,s),Iy(e),i=Bd(),e!==null&&!Ie?(Fd(e,t,a),ji(e,t,a)):(te&&i&&Cd(t),t.flags|=1,Qe(e,t,n,a),t.child)}function a0(e,t,n,i,s){if(ha(t),t.stateNode===null){var a=er,r=n.contextType;typeof r=="object"&&r!==null&&(a=en(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Zf,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Od(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?en(r):er,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ef(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Zf.enqueueReplaceState(a,a.state,null),Bo(t,i,a,s),Io(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=pa(n,o);a.props=l;var c=a.context,u=n.contextType;r=er,typeof u=="object"&&u!==null&&(r=en(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Qg(t,a,i,r),ps=!1;var f=t.memoizedState;a.state=f,Bo(t,i,a,s),Io(),c=t.memoizedState,o||f!==c||ps?(typeof d=="function"&&(ef(t,n,d,i),c=t.memoizedState),(l=ps||Kg(t,n,l,i,f,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Vf(e,t),r=t.memoizedProps,u=pa(n,r),a.props=u,d=t.pendingProps,f=a.context,c=n.contextType,l=er,typeof c=="object"&&c!==null&&(l=en(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&Qg(t,a,i,l),ps=!1,f=t.memoizedState,a.state=f,Bo(t,i,a,s),Io();var p=t.memoizedState;r!==d||f!==p||ps||e!==null&&e.dependencies!==null&&Uc(e.dependencies)?(typeof o=="function"&&(ef(t,n,o,i),p=t.memoizedState),(u=ps||Kg(t,n,u,i,f,p,l)||e!==null&&e.dependencies!==null&&Uc(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,yc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=fa(t,e.child,null,s),t.child=fa(t,null,n,s)):Qe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ji(e,t,s),e}function r0(e,t,n,i){return ua(),t.flags|=256,Qe(e,t,n,i),t.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:Ly()}}function af(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Cn),e}function Sv(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(s?gs(t):ys(t),(e=ye)?(e=d_(e,Zn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ns!==null?{id:vi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=Ay(e),n.return=t,t.child=n,tn=t,ye=null)):e=null,e===null)throw Os(t);return ud(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(ys(t),s=t.mode,o=Bc({mode:"hidden",children:o},s),i=ra(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=sf(n),i.childLanes=af(e,r,n),t.memoizedState=nf,Lo(null,i)):(gs(t),Kf(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(gs(t),t.flags&=-257,t=rf(e,t,n)):t.memoizedState!==null?(ys(t),t.child=e.child,t.flags|=128,t=null):(ys(t),o=i.fallback,s=t.mode,i=Bc({mode:"visible",children:i.children},s),o=ra(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,fa(t,e.child,null,n),i=t.child,i.memoizedState=sf(n),i.childLanes=af(e,r,n),t.memoizedState=nf,t=Lo(null,i));else if(gs(t),ud(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(j(419)),i.stack="",i.digest=r,Jo({value:i,source:null,stack:null}),t=rf(e,t,n)}else if(Ie||Tr(e,t,n,!1),r=(n&e.childLanes)!==0,Ie||r){if(r=de,r!==null&&(i=Q0(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,va(e,i),Sn(r,e,i),jd;cd(o)||Gc(),t=rf(e,t,n)}else cd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ye=Jn(o.nextSibling),tn=t,te=!0,Ts=null,Zn=!1,e!==null&&Ry(t,e),t=Kf(t,i.children),t.flags|=4096);return t}return s?(ys(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ki(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ki(c,o):(o=ra(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Lo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=sf(n):(s=o.cachePool,s!==null?(l=ze._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Ly(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=af(e,r,n),t.memoizedState=nf,Lo(e.child,i)):(gs(t),n=e.child,e=n.sibling,n=ki(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Kf(e,t){return t=Bc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bc(e,t){return e=Rn(22,e,null,t),e.lanes=0,e}function rf(e,t,n){return fa(t,e.child,null,n),e=Kf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Bf(e.return,t,n)}function of(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Mv(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=De.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,pe(De,r),Qe(e,t,i,n),i=te?jo:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&o0(e,n,t);else if(e.tag===19)o0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Oc(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),of(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Oc(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}of(t,!0,n,null,a,i);break;case"together":of(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ji(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Tr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Uc(e)))}function WM(e,t,n){switch(t.tag){case 3:Ec(t,t.stateNode.containerInfo),ms(t,ze,e.memoizedState.cache),ua();break;case 27:case 5:Tf(t);break;case 4:Ec(t,t.stateNode.containerInfo);break;case 10:ms(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Wf(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(gs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Sv(e,t,n):(gs(t),e=ji(e,t,n),e!==null?e.sibling:null);gs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Tr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Mv(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pe(De,De.current),i)break;return null;case 22:return t.lanes=0,bv(e,t,n,t.pendingProps);case 24:ms(t,ze,e.memoizedState.cache)}return ji(e,t,n)}function Ev(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Jd(e,n)&&(t.flags&128)===0)return Ie=!1,WM(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,te&&(t.flags&1048576)!==0&&wy(t,jo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ia(t.elementType),t.type=e,typeof e=="function")Rd(e)?(i=pa(e,i),t.tag=1,t=a0(null,t,e,i,n)):(t.tag=0,t=Jf(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===pd){t.tag=11,t=t0(null,t,e,i,n);break t}else if(s===md){t.tag=14,t=e0(null,t,e,i,n);break t}}throw t=Mf(e)||e,Error(j(306,t,""))}}return t;case 0:return Jf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=pa(i,t.pendingProps),a0(e,t,i,s,n);case 3:t:{if(Ec(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Vf(e,t),Bo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ms(t,ze,i),i!==a.cache&&Ff(t,[ze],n,!0),Io(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=r0(e,t,i,n);break t}else if(i!==s){s=Yn(Error(j(424)),t),Jo(s),t=r0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=Jn(e.firstChild),tn=t,te=!0,Ts=null,Zn=!0,n=Ny(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ua(),i===s){t=ji(e,t,n);break t}Qe(e,t,i,n)}t=t.child}return t;case 26:return yc(e,t),e===null?(n=C0(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=qc(Es.current).createElement(n),i[$e]=t,i[Mn]=e,nn(i,n,e),je(i),t.stateNode=i):t.memoizedState=C0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Tf(t),e===null&&te&&(i=t.stateNode=p_(t.type,t.pendingProps,Es.current),tn=t,Zn=!0,s=ye,Bs(t.type)?(hd=s,ye=Jn(i.firstChild)):ye=s),Qe(e,t,t.pendingProps.children,n),yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((s=i=ye)&&(i=v1(i,t.type,t.pendingProps,Zn),i!==null?(t.stateNode=i,tn=t,ye=Jn(i.firstChild),Zn=!1,s=!0):s=!1),s||Os(t)),Tf(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,od(s,a)?i=null:r!==null&&od(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Id(e,t,PM,null,null,n),nl._currentValue=s),yc(e,t),Qe(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=ye)&&(n=_1(n,t.pendingProps,Zn),n!==null?(t.stateNode=n,tn=t,ye=null,e=!0):e=!1),e||Os(t)),null;case 13:return Sv(e,t,n);case 4:return Ec(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fa(t,null,i,n):Qe(e,t,i,n),t.child;case 11:return t0(e,t,t.type,t.pendingProps,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ms(t,t.type,i.value),Qe(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ha(t),s=en(s),i=i(s),t.flags|=1,Qe(e,t,i,n),t.child;case 14:return e0(e,t,t.type,t.pendingProps,n);case 15:return xv(e,t,t.type,t.pendingProps,n);case 19:return Mv(e,t,n);case 31:return kM(e,t,n);case 22:return bv(e,t,n,t.pendingProps);case 24:return ha(t),i=en(ze),e===null?(s=Dd(),s===null&&(s=de,a=Ud(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Od(t),ms(t,ze,s)):((e.lanes&n)!==0&&(Vf(e,t),Bo(t,null,null,n),Io()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ms(t,ze,i)):(i=a.cache,ms(t,ze,i),i!==s.cache&&Ff(t,[ze],n,!0))),Qe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Oi(e){e.flags|=4}function lf(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Zv())e.flags|=8192;else throw la=Dc,Nd}else e.flags&=-16777217}function l0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!y_(t))if(Zv())e.flags|=8192;else throw la=Dc,Nd}function ec(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?j0():536870912,e.lanes|=t,vr|=t)}function Mo(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function XM(e,t,n){var i=t.pendingProps;switch(Ld(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Wi(ze),fr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ka(t)?Oi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qh())),ge(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Oi(t),a!==null?(ge(t),l0(t,a)):(ge(t),lf(t,s,null,i,n))):a?a!==e.memoizedState?(Oi(t),ge(t),l0(t,a)):(ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Oi(t),ge(t),lf(t,s,e,i,n)),null;case 27:if(Tc(t),n=Es.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oi(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return ge(t),null}e=bi.current,ka(t)?Ig(t,e):(e=p_(s,i,n),t.stateNode=e,Oi(t))}return ge(t),null;case 5:if(Tc(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oi(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return ge(t),null}if(a=bi.current,ka(t))Ig(t,a);else{var r=qc(Es.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[$e]=t,a[Mn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(nn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Oi(t)}}return ge(t),lf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Oi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=Es.current,ka(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=tn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||u_(e.nodeValue,n)),e||Os(t,!0)}else e=qc(e).createTextNode(i),e[$e]=t,t.stateNode=e}return ge(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ka(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[$e]=t}else ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),e=!1}else n=Qh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wn(t),t):(wn(t),null);if((t.flags&128)!==0)throw Error(j(558))}return ge(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ka(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[$e]=t}else ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else s=Qh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(wn(t),t):(wn(t),null)}return wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ec(t,t.updateQueue),ge(t),null);case 4:return fr(),e===null&&ip(t.stateNode.containerInfo),ge(t),null;case 10:return Wi(t.type),ge(t),null;case 19:if(Je(De),i=t.memoizedState,i===null)return ge(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Mo(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Oc(e),a!==null){for(t.flags|=128,Mo(i,!1),e=a.updateQueue,t.updateQueue=e,ec(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ty(n,e),n=n.sibling;return pe(De,De.current&1|2),te&&Bi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ln()>Hc&&(t.flags|=128,s=!0,Mo(i,!1),t.lanes=4194304)}else{if(!s)if(e=Oc(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ec(t,e),Mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!te)return ge(t),null}else 2*Ln()-i.renderingStartTime>Hc&&n!==536870912&&(t.flags|=128,s=!0,Mo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ln(),e.sibling=null,n=De.current,pe(De,s?n&1|2:n&1),te&&Bi(t,i.treeForkCount),e):(ge(t),null);case 22:case 23:return wn(t),Pd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),n=t.updateQueue,n!==null&&ec(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Je(oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wi(ze),ge(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function qM(e,t){switch(Ld(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wi(ze),fr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tc(t),null;case 31:if(t.memoizedState!==null){if(wn(t),t.alternate===null)throw Error(j(340));ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(De),null;case 4:return fr(),null;case 10:return Wi(t.type),null;case 22:case 23:return wn(t),Pd(),e!==null&&Je(oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wi(ze),null;case 25:return null;default:return null}}function Tv(e,t){switch(Ld(t),t.tag){case 3:Wi(ze),fr();break;case 26:case 27:case 5:Tc(t);break;case 4:fr();break;case 31:t.memoizedState!==null&&wn(t);break;case 13:wn(t);break;case 19:Je(De);break;case 10:Wi(t.type);break;case 22:case 23:wn(t),Pd(),e!==null&&Je(oa);break;case 24:Wi(ze)}}function dl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){re(t,t.return,o)}}function Ps(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){re(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){re(t,t.return,u)}}function Av(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Py(t,n)}catch(i){re(e,e.return,i)}}}function wv(e,t,n){n.props=pa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){re(e,t,i)}}function Ho(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){re(e,t,s)}}function xi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){re(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){re(e,t,s)}else n.current=null}function Rv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){re(e,e.return,s)}}function cf(e,t,n){try{var i=e.stateNode;f1(i,e.type,n,t),i[Mn]=t}catch(s){re(e,e.return,s)}}function Cv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bs(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(i!==4&&(i===27&&Bs(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qf(e,t,n),e=e.sibling;e!==null;)Qf(e,t,n),e=e.sibling}function Fc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Bs(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fc(e,t,n),e=e.sibling;e!==null;)Fc(e,t,n),e=e.sibling}function Lv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);nn(t,i,n),t[$e]=e,t[Mn]=n}catch(a){re(e,e.return,a)}}var Fi=!1,Pe=!1,hf=!1,c0=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function YM(e,t){if(e=e.containerInfo,ad=Jc,e=yy(e),Td(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++u===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:e,selectionRange:n},Jc=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var v=pa(n.type,s);e=i.getSnapshotBeforeUpdate(v,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(_){re(n,n.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ld(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Uv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n),i&4&&dl(5,n);break;case 1:if(zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){re(n,n.return,r)}else{var s=pa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){re(n,n.return,r)}}i&64&&Av(n),i&512&&Ho(n,n.return);break;case 3:if(zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Py(e,t)}catch(r){re(n,n.return,r)}}break;case 27:t===null&&i&4&&Lv(n);case 26:case 5:zi(e,n),t===null&&i&4&&Rv(n),i&512&&Ho(n,n.return);break;case 12:zi(e,n);break;case 31:zi(e,n),i&4&&Ov(e,n);break;case 13:zi(e,n),i&4&&Pv(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=n1.bind(null,n),x1(e,n))));break;case 22:if(i=n.memoizedState!==null||Fi,!i){t=t!==null&&t.memoizedState!==null||Pe,s=Fi;var a=Pe;Fi=i,(Pe=t)&&!a?Ii(e,n,(n.subtreeFlags&8772)!==0):zi(e,n),Fi=s,Pe=a}break;case 30:break;default:zi(e,n)}}function Dv(e){var t=e.alternate;t!==null&&(e.alternate=null,Dv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_d(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,xn=!1;function Pi(e,t,n){for(n=n.child;n!==null;)Nv(e,t,n),n=n.sibling}function Nv(e,t,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 26:Pe||xi(n,t),Pi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||xi(n,t);var i=Se,s=xn;Bs(n.type)&&(Se=n.stateNode,xn=!1),Pi(e,t,n),Wo(n.stateNode),Se=i,xn=s;break;case 5:Pe||xi(n,t);case 6:if(i=Se,s=xn,Se=null,Pi(e,t,n),Se=i,xn=s,Se!==null)if(xn)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(n.stateNode)}catch(a){re(n,t,a)}else try{Se.removeChild(n.stateNode)}catch(a){re(n,t,a)}break;case 18:Se!==null&&(xn?(e=Se,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Sr(e)):E0(Se,n.stateNode));break;case 4:i=Se,s=xn,Se=n.stateNode.containerInfo,xn=!0,Pi(e,t,n),Se=i,xn=s;break;case 0:case 11:case 14:case 15:Ps(2,n,t),Pe||Ps(4,n,t),Pi(e,t,n);break;case 1:Pe||(xi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&wv(n,t,i)),Pi(e,t,n);break;case 21:Pi(e,t,n);break;case 22:Pe=(i=Pe)||n.memoizedState!==null,Pi(e,t,n),Pe=i;break;default:Pi(e,t,n)}}function Ov(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sr(e)}catch(n){re(t,t.return,n)}}}function Pv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sr(e)}catch(n){re(t,t.return,n)}}function ZM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new c0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new c0),t;default:throw Error(j(435,e.tag))}}function nc(e,t){var n=ZM(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=i1.bind(null,e,i);i.then(s,s)}})}function vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Bs(o.type)){Se=o.stateNode,xn=!1;break t}break;case 5:Se=o.stateNode,xn=!1;break t;case 3:case 4:Se=o.stateNode.containerInfo,xn=!0;break t}o=o.return}if(Se===null)throw Error(j(160));Nv(a,r,s),Se=null,xn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zv(t,e),t=t.sibling}var si=null;function zv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(t,e),_n(e),i&4&&(Ps(3,e,e.return),dl(3,e),Ps(5,e,e.return));break;case 1:vn(t,e),_n(e),i&512&&(Pe||n===null||xi(n,n.return)),i&64&&Fi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=si;if(vn(t,e),_n(e),i&512&&(Pe||n===null||xi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[cl]||a[$e]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),nn(a,i,n),a[$e]=e,je(a),i=a;break t;case"link":var r=U0("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),nn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=U0("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),nn(a,i,n),s.head.appendChild(a);break;default:throw Error(j(468,i))}a[$e]=e,je(a),i=a}e.stateNode=i}else D0(s,e.type,e.stateNode);else e.stateNode=L0(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?D0(s,e.type,e.stateNode):L0(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&cf(e,e.memoizedProps,n.memoizedProps)}break;case 27:vn(t,e),_n(e),i&512&&(Pe||n===null||xi(n,n.return)),n!==null&&i&4&&cf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vn(t,e),_n(e),i&512&&(Pe||n===null||xi(n,n.return)),e.flags&32){s=e.stateNode;try{pr(s,"")}catch(v){re(e,e.return,v)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,cf(e,s,n!==null?n.memoizedProps:s)),i&1024&&(hf=!0);break;case 6:if(vn(t,e),_n(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){re(e,e.return,v)}}break;case 3:if(xc=null,s=si,si=Yc(t.containerInfo),vn(t,e),si=s,_n(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(v){re(e,e.return,v)}hf&&(hf=!1,Iv(e));break;case 4:i=si,si=Yc(e.stateNode.containerInfo),vn(t,e),_n(e),si=i;break;case 12:vn(t,e),_n(e);break;case 31:vn(t,e),_n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nc(e,i)));break;case 13:vn(t,e),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(cu=Ln()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Fi,u=Pe;if(Fi=c||s,Pe=u||l,vn(t,e),Pe=u,Fi=c,_n(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Fi||Pe||sa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(v){re(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(v){re(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?T0(p,!0):T0(l.stateNode,!1)}catch(v){re(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,nc(e,n))));break;case 19:vn(t,e),_n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nc(e,i)));break;case 30:break;case 21:break;default:vn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Cv(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var s=n.stateNode,a=uf(e);Fc(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(pr(r,""),n.flags&=-33);var o=uf(e);Fc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=uf(e);Qf(e,c,l);break;default:throw Error(j(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Iv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Iv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Uv(e,t.alternate,t),t=t.sibling}function sa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ps(4,t,t.return),sa(t);break;case 1:xi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&wv(t,t.return,n),sa(t);break;case 27:Wo(t.stateNode);case 26:case 5:xi(t,t.return),sa(t);break;case 22:t.memoizedState===null&&sa(t);break;case 30:sa(t);break;default:sa(t)}e=e.sibling}}function Ii(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Ii(s,a,n),dl(4,a);break;case 1:if(Ii(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){re(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Oy(l[s],o)}catch(c){re(i,i.return,c)}}n&&r&64&&Av(a),Ho(a,a.return);break;case 27:Lv(a);case 26:case 5:Ii(s,a,n),n&&i===null&&r&4&&Rv(a),Ho(a,a.return);break;case 12:Ii(s,a,n);break;case 31:Ii(s,a,n),n&&r&4&&Ov(s,a);break;case 13:Ii(s,a,n),n&&r&4&&Pv(s,a);break;case 22:a.memoizedState===null&&Ii(s,a,n),Ho(a,a.return);break;case 30:break;default:Ii(s,a,n)}t=t.sibling}}function Kd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&hl(n))}function Qd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e))}function ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bv(e,t,n,i),t=t.sibling}function Bv(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:ii(e,t,n,i),s&2048&&dl(9,t);break;case 1:ii(e,t,n,i);break;case 3:ii(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e)));break;case 12:if(s&2048){ii(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){re(t,t.return,l)}}else ii(e,t,n,i);break;case 31:ii(e,t,n,i);break;case 13:ii(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?ii(e,t,n,i):Vo(e,t):a._visibility&2?ii(e,t,n,i):(a._visibility|=2,Xa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Kd(r,t);break;case 24:ii(e,t,n,i),s&2048&&Qd(t.alternate,t);break;default:ii(e,t,n,i)}}function Xa(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Xa(a,r,o,l,s),dl(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?Xa(a,r,o,l,s):Vo(a,r):(u._visibility|=2,Xa(a,r,o,l,s)),s&&c&2048&&Kd(r.alternate,r);break;case 24:Xa(a,r,o,l,s),s&&c&2048&&Qd(r.alternate,r);break;default:Xa(a,r,o,l,s)}t=t.sibling}}function Vo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Vo(n,i),s&2048&&Kd(i.alternate,i);break;case 24:Vo(n,i),s&2048&&Qd(i.alternate,i);break;default:Vo(n,i)}t=t.sibling}}var Uo=8192;function Wa(e,t,n){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)Fv(e,t,n),e=e.sibling}function Fv(e,t,n){switch(e.tag){case 26:Wa(e,t,n),e.flags&Uo&&e.memoizedState!==null&&D1(n,si,e.memoizedState,e.memoizedProps);break;case 5:Wa(e,t,n);break;case 3:case 4:var i=si;si=Yc(e.stateNode.containerInfo),Wa(e,t,n),si=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Uo,Uo=16777216,Wa(e,t,n),Uo=i):Wa(e,t,n));break;default:Wa(e,t,n)}}function Hv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,Gv(i,e)}Hv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vv(e),e=e.sibling}function Vv(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Ps(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vc(e)):Eo(e);break;default:Eo(e)}}function vc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,Gv(i,e)}Hv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ps(8,t,t.return),vc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vc(t));break;default:vc(t)}e=e.sibling}}function Gv(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Ps(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:hl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else t:for(n=e;Ze!==null;){i=Ze;var s=i.sibling,a=i.return;if(Dv(i),i===n){Ze=null;break t}if(s!==null){s.return=a,Ze=s;break t}Ze=a}}}var jM={getCacheForType:function(e){var t=en(ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return en(ze).controller.signal}},JM=typeof WeakMap=="function"?WeakMap:Map,ie=0,de=null,Kt=null,$t=0,ae=0,An=null,bs=!1,wr=!1,$d=!1,Ji=0,Le=0,zs=0,ca=0,tp=0,Cn=0,vr=0,Go=null,bn=null,$f=!1,cu=0,kv=0,Hc=1/0,Vc=null,Rs=null,Ge=0,Cs=null,_r=null,Xi=0,td=0,ed=null,Wv=null,ko=0,nd=null;function Nn(){return(ie&2)!==0&&$t!==0?$t&-$t:Ot.T!==null?np():$0()}function Xv(){if(Cn===0)if(($t&536870912)===0||te){var e=ql;ql<<=1,(ql&3932160)===0&&(ql=262144),Cn=e}else Cn=536870912;return e=Pn.current,e!==null&&(e.flags|=32),Cn}function Sn(e,t,n){(e===de&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Ss(e,$t,Cn,!1)),ll(e,n),((ie&2)===0||e!==de)&&(e===de&&((ie&2)===0&&(ca|=n),Le===4&&Ss(e,$t,Cn,!1)),Mi(e))}function qv(e,t,n){if((ie&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ol(e,t),s=i?$M(e,t):ff(e,t,!0),a=i;do{if(s===0){wr&&!i&&Ss(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!KM(n)){s=ff(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Go;var l=o.current.memoizedState.isDehydrated;if(l&&(xr(o,r).flags|=256),r=ff(o,r,!1),r!==2){if($d&&!l){o.errorRecoveryDisabledLanes|=a,ca|=a,s=4;break t}a=bn,bn=s,a!==null&&(bn===null?bn=a:bn.push.apply(bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){xr(e,0),Ss(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:Ss(i,t,Cn,!bs);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=cu+300-Ln(),10<s)){if(Ss(i,t,Cn,!bs),Qc(i,0,!0)!==0)break t;Xi=t,i.timeoutHandle=f_(u0.bind(null,i,n,bn,Vc,$f,t,Cn,ca,vr,bs,a,"Throttled",-0,0),s);break t}u0(i,n,bn,Vc,$f,t,Cn,ca,vr,bs,a,null,-0,0)}}break}while(!0);Mi(e)}function u0(e,t,n,i,s,a,r,o,l,c,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Fv(t,a,d);var v=(a&62914560)===a?cu-Ln():(a&4194048)===a?kv-Ln():0;if(v=N1(d,v),v!==null){Xi=a,e.cancelPendingCommit=v(f0.bind(null,e,t,a,n,i,s,r,o,l,u,d,null,f,p)),Ss(e,a,r,!c);return}}f0(e,t,a,n,i,s,r,o,l)}function KM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!On(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ss(e,t,n,i){t&=~tp,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Dn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&J0(e,n,t)}function uu(){return(ie&6)===0?(pl(0,!1),!1):!0}function ep(){if(Kt!==null){if(ae===0)var e=Kt.return;else e=Kt,Gi=_a=null,Hd(e),cr=null,Ko=0,e=Kt;for(;e!==null;)Tv(e.alternate,e),e=e.return;Kt=null}}function xr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,m1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xi=0,ep(),de=e,Kt=n=ki(e.current,null),$t=t,ae=0,An=null,bs=!1,wr=ol(e,t),$d=!1,vr=Cn=tp=ca=zs=Le=0,bn=Go=null,$f=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Dn(i),a=1<<s;t|=e[s],i&=~a}return Ji=t,nu(),n}function Yv(e,t){kt=null,Ot.H=$o,t===Ar||t===su?(t=Gg(),ae=3):t===Nd?(t=Gg(),ae=4):ae=t===jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,An=t,Kt===null&&(Le=1,Ic(e,Yn(t,e.current)))}function Zv(){var e=Pn.current;return e===null?!0:($t&4194048)===$t?jn===null:($t&62914560)===$t||($t&536870912)!==0?e===jn:!1}function jv(){var e=Ot.H;return Ot.H=$o,e===null?$o:e}function Jv(){var e=Ot.A;return Ot.A=jM,e}function Gc(){Le=4,bs||($t&4194048)!==$t&&Pn.current!==null||(wr=!0),(zs&134217727)===0&&(ca&134217727)===0||de===null||Ss(de,$t,Cn,!1)}function ff(e,t,n){var i=ie;ie|=2;var s=jv(),a=Jv();(de!==e||$t!==t)&&(Vc=null,xr(e,t)),t=!1;var r=Le;t:do try{if(ae!==0&&Kt!==null){var o=Kt,l=An;switch(ae){case 8:ep(),r=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(t=!0);var c=ae;if(ae=0,An=null,sr(e,o,l,c),n&&wr){r=0;break t}break;default:c=ae,ae=0,An=null,sr(e,o,l,c)}}QM(),r=Le;break}catch(u){Yv(e,u)}while(!0);return t&&e.shellSuspendCounter++,Gi=_a=null,ie=i,Ot.H=s,Ot.A=a,Kt===null&&(de=null,$t=0,nu()),r}function QM(){for(;Kt!==null;)Kv(Kt)}function $M(e,t){var n=ie;ie|=2;var i=jv(),s=Jv();de!==e||$t!==t?(Vc=null,Hc=Ln()+500,xr(e,t)):wr=ol(e,t);t:do try{if(ae!==0&&Kt!==null){t=Kt;var a=An;e:switch(ae){case 1:ae=0,An=null,sr(e,t,a,1);break;case 2:case 9:if(Vg(a)){ae=0,An=null,h0(t);break}t=function(){ae!==2&&ae!==9||de!==e||(ae=7),Mi(e)},a.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:Vg(a)?(ae=0,An=null,h0(t)):(ae=0,An=null,sr(e,t,a,7));break;case 5:var r=null;switch(Kt.tag){case 26:r=Kt.memoizedState;case 5:case 27:var o=Kt;if(r?y_(r):o.stateNode.complete){ae=0,An=null;var l=o.sibling;if(l!==null)Kt=l;else{var c=o.return;c!==null?(Kt=c,hu(c)):Kt=null}break e}}ae=0,An=null,sr(e,t,a,5);break;case 6:ae=0,An=null,sr(e,t,a,6);break;case 8:ep(),Le=6;break t;default:throw Error(j(462))}}t1();break}catch(u){Yv(e,u)}while(!0);return Gi=_a=null,Ot.H=i,Ot.A=s,ie=n,Kt!==null?0:(de=null,$t=0,nu(),Le)}function t1(){for(;Kt!==null&&!MS();)Kv(Kt)}function Kv(e){var t=Ev(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,t===null?hu(e):Kt=t}function h0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=s0(n,t,t.pendingProps,t.type,void 0,$t);break;case 11:t=s0(n,t,t.pendingProps,t.type.render,t.ref,$t);break;case 5:Hd(t);default:Tv(n,t),t=Kt=Ty(t,Ji),t=Ev(n,t,Ji)}e.memoizedProps=e.pendingProps,t===null?hu(e):Kt=t}function sr(e,t,n,i){Gi=_a=null,Hd(t),cr=null,Ko=0;var s=t.return;try{if(GM(e,s,t,n,$t)){Le=1,Ic(e,Yn(n,e.current)),Kt=null;return}}catch(a){if(s!==null)throw Kt=s,a;Le=1,Ic(e,Yn(n,e.current)),Kt=null;return}t.flags&32768?(te||i===1?e=!0:wr||($t&536870912)!==0?e=!1:(bs=e=!0,(i===2||i===9||i===3||i===6)&&(i=Pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Qv(t,e)):hu(t)}function hu(e){var t=e;do{if((t.flags&32768)!==0){Qv(t,bs);return}e=t.return;var n=XM(t.alternate,t,Ji);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);Le===0&&(Le=5)}function Qv(e,t){do{var n=qM(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);Le=6,Kt=null}function f0(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do fu();while(Ge!==0);if((ie&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(a=t.lanes|t.childLanes,a|=Ad,NS(e,n,a,r,o,l),e===de&&(Kt=de=null,$t=0),_r=t,Cs=e,Xi=n,td=a,ed=s,Wv=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,s1(Ac,function(){return i_(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ot.T,Ot.T=null,s=se.p,se.p=2,r=ie,ie|=4;try{YM(e,t,n)}finally{ie=r,se.p=s,Ot.T=i}}Ge=1,$v(),t_(),e_()}}function $v(){if(Ge===1){Ge=0;var e=Cs,t=_r,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ot.T,Ot.T=null;var i=se.p;se.p=2;var s=ie;ie|=4;try{zv(t,e);var a=rd,r=yy(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&gy(o.ownerDocument.documentElement,o)){if(l!==null&&Td(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),v=o.textContent.length,_=Math.min(l.start,v),m=l.end===void 0?_:Math.min(l.end,v);!p.extend&&_>m&&(r=m,m=_,_=r);var h=Og(o,_),y=Og(o,m);if(h&&y&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var g=d.createRange();g.setStart(h.node,h.offset),p.removeAllRanges(),_>m?(p.addRange(g),p.extend(y.node,y.offset)):(g.setEnd(y.node,y.offset),p.addRange(g))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Jc=!!ad,rd=ad=null}finally{ie=s,se.p=i,Ot.T=n}}e.current=t,Ge=2}}function t_(){if(Ge===2){Ge=0;var e=Cs,t=_r,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ot.T,Ot.T=null;var i=se.p;se.p=2;var s=ie;ie|=4;try{Uv(e,t.alternate,t)}finally{ie=s,se.p=i,Ot.T=n}}Ge=3}}function e_(){if(Ge===4||Ge===3){Ge=0,ES();var e=Cs,t=_r,n=Xi,i=Wv;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,_r=Cs=null,n_(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Rs=null),vd(n),t=t.stateNode,Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ot.T,s=se.p,se.p=2,Ot.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ot.T=t,se.p=s}}(Xi&3)!==0&&fu(),Mi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===nd?ko++:(ko=0,nd=e):ko=0,pl(0,!1)}}function n_(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hl(t)))}function fu(){return $v(),t_(),e_(),i_()}function i_(){if(Ge!==5)return!1;var e=Cs,t=td;td=0;var n=vd(Xi),i=Ot.T,s=se.p;try{se.p=32>n?32:n,Ot.T=null,n=ed,ed=null;var a=Cs,r=Xi;if(Ge=0,_r=Cs=null,Xi=0,(ie&6)!==0)throw Error(j(331));var o=ie;if(ie|=4,Vv(a.current),Bv(a,a.current,r,n),ie=o,pl(0,!1),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(rl,a)}catch{}return!0}finally{se.p=s,Ot.T=i,n_(e,t)}}function d0(e,t,n){t=Yn(n,t),t=jf(e.stateNode,t,2),e=ws(e,t,2),e!==null&&(ll(e,2),Mi(e))}function re(e,t,n){if(e.tag===3)d0(e,e,n);else for(;t!==null;){if(t.tag===3){d0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rs===null||!Rs.has(i))){e=Yn(n,e),n=vv(2),i=ws(t,n,2),i!==null&&(_v(n,i,t,e),ll(i,2),Mi(i));break}}t=t.return}}function df(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new JM;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||($d=!0,s.add(n),e=e1.bind(null,e,t,n),t.then(e,e))}function e1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&($t&n)===n&&(Le===4||Le===3&&($t&62914560)===$t&&300>Ln()-cu?(ie&2)===0&&xr(e,0):tp|=n,vr===$t&&(vr=0)),Mi(e)}function s_(e,t){t===0&&(t=j0()),e=va(e,t),e!==null&&(ll(e,t),Mi(e))}function n1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),s_(e,n)}function i1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),s_(e,n)}function s1(e,t){return gd(e,t)}var kc=null,qa=null,id=!1,Wc=!1,pf=!1,Ms=0;function Mi(e){e!==qa&&e.next===null&&(qa===null?kc=qa=e:qa=qa.next=e),Wc=!0,id||(id=!0,r1())}function pl(e,t){if(!pf&&Wc){pf=!0;do for(var n=!1,i=kc;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Dn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,p0(i,a))}else a=$t,a=Qc(i,i===de?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||ol(i,a)||(n=!0,p0(i,a));i=i.next}while(n);pf=!1}}function a1(){a_()}function a_(){Wc=id=!1;var e=0;Ms!==0&&p1()&&(e=Ms);for(var t=Ln(),n=null,i=kc;i!==null;){var s=i.next,a=r_(i,t);a===0?(i.next=null,n===null?kc=s:n.next=s,s===null&&(qa=n)):(n=i,(e!==0||(a&3)!==0)&&(Wc=!0)),i=s}Ge!==0&&Ge!==5||pl(e,!1),Ms!==0&&(Ms=0)}function r_(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Dn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=DS(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=de,n=$t,n=Qc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Gh(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ol(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Gh(i),vd(n)){case 2:case 8:n=Y0;break;case 32:n=Ac;break;case 268435456:n=Z0;break;default:n=Ac}return i=o_.bind(null,e),n=gd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Gh(i),e.callbackPriority=2,e.callbackNode=null,2}function o_(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(fu()&&e.callbackNode!==n)return null;var i=$t;return i=Qc(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(qv(e,i,t),r_(e,Ln()),e.callbackNode!=null&&e.callbackNode===n?o_.bind(null,e):null)}function p0(e,t){if(fu())return null;qv(e,t,!0)}function r1(){g1(function(){(ie&6)!==0?gd(q0,a1):a_()})}function np(){if(Ms===0){var e=mr;e===0&&(e=Xl,Xl<<=1,(Xl&261888)===0&&(Xl=256)),Ms=e}return Ms}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cc(""+e)}function g0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function o1(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=m0((s[Mn]||null).action),r=i.submitter;r&&(t=(t=r[Mn]||null)?m0(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new $c("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ms!==0){var l=r?g0(s,r):new FormData(s);Yf(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?g0(s,r):new FormData(s),Yf(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(ic=0;ic<Pf.length;ic++)sc=Pf[ic],y0=sc.toLowerCase(),v0=sc[0].toUpperCase()+sc.slice(1),ai(y0,"on"+v0);var sc,y0,v0,ic;ai(_y,"onAnimationEnd");ai(xy,"onAnimationIteration");ai(by,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(TM,"onTransitionRun");ai(AM,"onTransitionStart");ai(wM,"onTransitionCancel");ai(Sy,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function l_(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Rc(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Rc(u)}s.currentTarget=null,a=l}}}}function Jt(e,t){var n=t[wf];n===void 0&&(n=t[wf]=new Set);var i=e+"__bubble";n.has(i)||(c_(t,e,2,!1),n.add(i))}function mf(e,t,n){var i=0;t&&(i|=4),c_(n,e,i,t)}var ac="_reactListening"+Math.random().toString(36).slice(2);function ip(e){if(!e[ac]){e[ac]=!0,ty.forEach(function(n){n!=="selectionchange"&&(l1.has(n)||mf(n,!1,e),mf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ac]||(t[ac]=!0,mf("selectionchange",!1,t))}}function c_(e,t,n,i){switch(S_(t)){case 2:var s=z1;break;case 8:s=I1;break;default:s=op}n=s.bind(null,t,n,e),s=void 0,!Df||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function gf(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ja(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}ly(function(){var c=a,u=bd(n),d=[];t:{var f=My.get(e);if(f!==void 0){var p=$c,v=e;switch(e){case"keypress":if(hc(n)===0)break t;case"keydown":case"keyup":p=iM;break;case"focusin":v="focus",p=Yh;break;case"focusout":v="blur",p=Yh;break;case"beforeblur":case"afterblur":p=Yh;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=XS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rM;break;case _y:case xy:case by:p=ZS;break;case Sy:p=lM;break;case"scroll":case"scrollend":p=kS;break;case"wheel":p=uM;break;case"copy":case"cut":case"paste":p=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wg;break;case"toggle":case"beforetoggle":p=fM}var _=(t&4)!==0,m=!_&&(e==="scroll"||e==="scrollend"),h=_?f!==null?f+"Capture":null:f;_=[];for(var y=c,g;y!==null;){var x=y;if(g=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||g===null||h===null||(x=qo(y,h),x!=null&&_.push(el(y,x,g))),m)break;y=y.return}0<_.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:_}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Uf&&(v=n.relatedTarget||n.fromElement)&&(ja(v)||v[Mr]))break t;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ja(v):null,v!==null&&(m=al(v),_=v.tag,v!==m||_!==5&&_!==27&&_!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=Tg,x="onMouseLeave",h="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(_=wg,x="onPointerLeave",h="onPointerEnter",y="pointer"),m=p==null?f:Co(p),g=v==null?f:Co(v),f=new _(x,y+"leave",p,n,u),f.target=m,f.relatedTarget=g,x=null,ja(u)===c&&(_=new _(h,y+"enter",v,n,u),_.target=g,_.relatedTarget=m,x=_),m=x,p&&v)e:{for(_=c1,h=p,y=v,g=0,x=h;x;x=_(x))g++;x=0;for(var E=y;E;E=_(E))x++;for(;0<g-x;)h=_(h),g--;for(;0<x-g;)y=_(y),x--;for(;g--;){if(h===y||y!==null&&h===y.alternate){_=h;break e}h=_(h),y=_(y)}_=null}else _=null;p!==null&&_0(d,f,p,_,!1),v!==null&&m!==null&&_0(d,m,v,_,!0)}}t:{if(f=c?Co(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=Ug;else if(Lg(f))if(py)R=SM;else{R=xM;var T=_M}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&xd(c.elementType)&&(R=Ug):R=bM;if(R&&(R=R(e,c))){dy(d,R,n,u);break t}T&&T(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Lf(f,"number",f.value)}switch(T=c?Co(c):window,e){case"focusin":(Lg(T)||T.contentEditable==="true")&&(Qa=T,Nf=c,Oo=null);break;case"focusout":Oo=Nf=Qa=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,Pg(d,n,u);break;case"selectionchange":if(EM)break;case"keydown":case"keyup":Pg(d,n,u)}var O;if(Ed)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else Ka?hy(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(uy&&n.locale!=="ko"&&(Ka||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ka&&(O=cy()):(xs=u,Sd="value"in xs?xs.value:xs.textContent,Ka=!0)),T=Xc(c,b),0<T.length&&(b=new Ag(b,e,null,n,u),d.push({event:b,listeners:T}),O?b.data=O:(O=fy(n),O!==null&&(b.data=O)))),(O=pM?mM(e,n):gM(e,n))&&(b=Xc(c,"onBeforeInput"),0<b.length&&(T=new Ag("onBeforeInput","beforeinput",null,n,u),d.push({event:T,listeners:b}),T.data=O)),o1(d,e,c,n,u)}l_(d,t)})}function el(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xc(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=qo(e,n),s!=null&&i.unshift(el(e,s,a)),s=qo(e,t),s!=null&&i.push(el(e,s,a))),e.tag===3)return i;e=e.return}return[]}function c1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _0(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=qo(n,a),c!=null&&r.unshift(el(n,c,l))):s||(c=qo(n,a),c!=null&&r.push(el(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var u1=/\r\n?/g,h1=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(u1,`
`).replace(h1,"")}function u_(e,t){return t=x0(t),x0(e)===t}function le(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||pr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&pr(e,""+i);break;case"className":Zl(e,"class",i);break;case"tabIndex":Zl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(e,n,i);break;case"style":oy(e,i,a);break;case"data":if(t!=="object"){Zl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=cc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",s.name,s,null),le(e,t,"formEncType",s.formEncType,s,null),le(e,t,"formMethod",s.formMethod,s,null),le(e,t,"formTarget",s.formTarget,s,null)):(le(e,t,"encType",s.encType,s,null),le(e,t,"method",s.method,s,null),le(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=cc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Vi);break;case"onScroll":i!=null&&Jt("scroll",e);break;case"onScrollEnd":i!=null&&Jt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=cc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Jt("beforetoggle",e),Jt("toggle",e),lc(e,"popover",i);break;case"xlinkActuate":Ni(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ni(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ni(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ni(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ni(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ni(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=VS.get(n)||n,lc(e,n,i))}}function sd(e,t,n,i,s,a){switch(n){case"style":oy(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?pr(e,i):(typeof i=="number"||typeof i=="bigint")&&pr(e,""+i);break;case"onScroll":i!=null&&Jt("scroll",e);break;case"onScrollEnd":i!=null&&Jt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ey.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Mn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):lc(e,n,i)}}}function nn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Jt("error",e),Jt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:le(e,t,a,r,n,null)}}s&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Jt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:le(e,t,i,u,n,null)}}sy(e,a,o,l,c,r,s,!1);return;case"select":Jt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:le(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?rr(e,!!i,t,!1):n!=null&&rr(e,!!i,n,!0);return;case"textarea":Jt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:le(e,t,r,o,n,null)}ry(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Jt("beforetoggle",e),Jt("toggle",e),Jt("cancel",e),Jt("close",e);break;case"iframe":case"object":Jt("load",e);break;case"video":case"audio":for(i=0;i<tl.length;i++)Jt(tl[i],e);break;case"image":Jt("error",e),Jt("load",e);break;case"details":Jt("toggle",e);break;case"embed":case"source":case"link":Jt("error",e),Jt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:le(e,t,c,i,n,null)}return;default:if(xd(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&sd(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}function f1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||le(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==d&&le(e,t,f,p,i,d)}}Cf(e,r,o,l,c,u,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||le(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&le(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?rr(e,!!n,f,!1):!!i!=!!n&&(t!=null?rr(e,!!n,t,!0):rr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&le(e,t,r,s,i,a)}ay(e,f,p);return;case"option":for(var v in n)if(f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:le(e,t,v,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_)&&le(e,t,_,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:le(e,t,c,f,i,p)}return;default:if(xd(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&sd(e,t,m,void 0,i,f);for(u in i)f=i[u],p=n[u],!i.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||sd(e,t,u,f,i,p);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!i.hasOwnProperty(h)&&le(e,t,h,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||le(e,t,d,f,i,p)}function b0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function d1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&b0(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&b0(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ad=null,rd=null;function qc(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function od(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=null;function p1(){var e=window.event;return e&&e.type==="popstate"?e===yf?!1:(yf=e,!0):(yf=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(y1)}:f_;function y1(e){setTimeout(function(){throw e})}function Bs(e){return e==="head"}function E0(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Sr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Wo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Wo(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[cl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Wo(e.ownerDocument.body);n=s}while(n);Sr(t)}function T0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ld(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ld(n),_d(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function v1(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function _1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jn(e.nextSibling),e===null))return null;return e}function d_(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jn(e.nextSibling),e===null))return null;return e}function cd(e){return e.data==="$?"||e.data==="$~"}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function x1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hd=null;function A0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Jn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function w0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function p_(e,t,n){switch(t=qc(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function Wo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_d(e)}var Kn=new Map,R0=new Set;function Yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=se.d;se.d={f:b1,r:S1,D:M1,C:E1,L:T1,m:A1,X:R1,S:w1,M:C1};function b1(){var e=Ki.f(),t=uu();return e||t}function S1(e){var t=Er(e);t!==null&&t.tag===5&&t.type==="form"?ov(t):Ki.r(e)}var Rr=typeof document>"u"?null:document;function m_(e,t,n){var i=Rr;if(i&&typeof t=="string"&&t){var s=qn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),R0.has(s)||(R0.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),nn(t,"link",e),je(t),i.head.appendChild(t)))}}function M1(e){Ki.D(e),m_("dns-prefetch",e,null)}function E1(e,t){Ki.C(e,t),m_("preconnect",e,t)}function T1(e,t,n){Ki.L(e,t,n);var i=Rr;if(i&&e&&t){var s='link[rel="preload"][as="'+qn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+qn(n.imageSizes)+'"]')):s+='[href="'+qn(e)+'"]';var a=s;switch(t){case"style":a=br(e);break;case"script":a=Cr(e)}Kn.has(a)||(e=ve({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kn.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ml(a))||t==="script"&&i.querySelector(gl(a))||(t=i.createElement("link"),nn(t,"link",e),je(t),i.head.appendChild(t)))}}function A1(e,t){Ki.m(e,t);var n=Rr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+qn(i)+'"][href="'+qn(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Cr(e)}if(!Kn.has(a)&&(e=ve({rel:"modulepreload",href:e},t),Kn.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gl(a)))return}i=n.createElement("link"),nn(i,"link",e),je(i),n.head.appendChild(i)}}}function w1(e,t,n){Ki.S(e,t,n);var i=Rr;if(i&&e){var s=ar(i).hoistableStyles,a=br(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(ml(a)))o.loading=5;else{e=ve({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kn.get(a))&&sp(e,n);var l=r=i.createElement("link");je(l),nn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,_c(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function R1(e,t){Ki.X(e,t);var n=Rr;if(n&&e){var i=ar(n).hoistableScripts,s=Cr(e),a=i.get(s);a||(a=n.querySelector(gl(s)),a||(e=ve({src:e,async:!0},t),(t=Kn.get(s))&&ap(e,t),a=n.createElement("script"),je(a),nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function C1(e,t){Ki.M(e,t);var n=Rr;if(n&&e){var i=ar(n).hoistableScripts,s=Cr(e),a=i.get(s);a||(a=n.querySelector(gl(s)),a||(e=ve({src:e,async:!0,type:"module"},t),(t=Kn.get(s))&&ap(e,t),a=n.createElement("script"),je(a),nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function C0(e,t,n,i){var s=(s=Es.current)?Yc(s):null;if(!s)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=br(n.href),n=ar(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=br(n.href);var a=ar(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(ml(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Kn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kn.set(e,n),a||L1(s,e,n,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Cr(n),n=ar(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function br(e){return'href="'+qn(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function g_(e){return ve({},e,{"data-precedence":e.precedence,precedence:null})}function L1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),nn(t,"link",n),je(t),e.head.appendChild(t))}function Cr(e){return'[src="'+qn(e)+'"]'}function gl(e){return"script[async]"+e}function L0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+qn(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=ve({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),nn(i,"style",s),_c(i,n.precedence,e),t.instance=i;case"stylesheet":s=br(n.href);var a=e.querySelector(ml(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=g_(n),(s=Kn.get(s))&&sp(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(a,"link",i),t.state.loading|=4,_c(a,n.precedence,e),t.instance=a;case"script":return a=Cr(n.src),(s=e.querySelector(gl(a)))?(t.instance=s,je(s),s):(i=n,(s=Kn.get(a))&&(i=ve({},n),ap(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),nn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,_c(i,n.precedence,e));return t.instance}function _c(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function sp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ap(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xc=null;function U0(e,t,n){if(xc===null){var i=new Map,s=xc=new Map;s.set(n,i)}else s=xc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[cl]||a[$e]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function D0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function U1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function y_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function D1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=br(i.href),a=t.querySelector(ml(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=g_(i),(s=Kn.get(s))&&sp(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Zc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var vf=0;function N1(e,t){return e.stylesheets&&e.count===0&&bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&vf===0&&(vf=62500*d1());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>vf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jc=null;function bc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jc=new Map,t.forEach(O1,e),jc=null,Zc.call(e))}function O1(e,t){if(!(t.state.loading&4)){var n=jc.get(e);if(n)var i=n.get(null);else{n=new Map,jc.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Zc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var nl={$$typeof:Hi,Provider:null,Consumer:null,_currentValue:aa,_currentValue2:aa,_threadCount:0};function P1(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kh(0),this.hiddenUpdates=kh(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function v_(e,t,n,i,s,a,r,o,l,c,u,d){return e=new P1(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=Rn(3,null,null,t),e.current=a,a.stateNode=e,t=Ud(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Od(a),e}function __(e){return e?(e=er,e):er}function x_(e,t,n,i,s,a){s=__(s),i.context===null?i.context=s:i.pendingContext=s,i=As(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ws(e,i,t),n!==null&&(Sn(n,e,t),zo(n,e,t))}function N0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rp(e,t){N0(e,t),(e=e.alternate)&&N0(e,t)}function b_(e){if(e.tag===13||e.tag===31){var t=va(e,67108864);t!==null&&Sn(t,e,67108864),rp(e,67108864)}}function O0(e){if(e.tag===13||e.tag===31){var t=Nn();t=yd(t);var n=va(e,t);n!==null&&Sn(n,e,t),rp(e,t)}}var Jc=!0;function z1(e,t,n,i){var s=Ot.T;Ot.T=null;var a=se.p;try{se.p=2,op(e,t,n,i)}finally{se.p=a,Ot.T=s}}function I1(e,t,n,i){var s=Ot.T;Ot.T=null;var a=se.p;try{se.p=8,op(e,t,n,i)}finally{se.p=a,Ot.T=s}}function op(e,t,n,i){if(Jc){var s=fd(i);if(s===null)gf(e,t,i,Kc,n),P0(e,i);else if(F1(s,e,t,n,i))i.stopPropagation();else if(P0(e,i),t&4&&-1<B1.indexOf(e)){for(;s!==null;){var a=Er(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=na(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Dn(r);o.entanglements[1]|=l,r&=~l}Mi(a),(ie&6)===0&&(Hc=Ln()+500,pl(0,!1))}}break;case 31:case 13:o=va(a,2),o!==null&&Sn(o,a,2),uu(),rp(a,2)}if(a=fd(i),a===null&&gf(e,t,i,Kc,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else gf(e,t,i,null,n)}}function fd(e){return e=bd(e),lp(e)}var Kc=null;function lp(e){if(Kc=null,e=ja(e),e!==null){var t=al(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=V0(t),e!==null)return e;e=null}else if(n===31){if(e=G0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kc=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(TS()){case q0:return 2;case Y0:return 8;case Ac:case AS:return 32;case Z0:return 268435456;default:return 32}default:return 32}}var dd=!1,Ls=null,Us=null,Ds=null,il=new Map,sl=new Map,vs=[],B1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(e,t){switch(e){case"focusin":case"focusout":Ls=null;break;case"dragenter":case"dragleave":Us=null;break;case"mouseover":case"mouseout":Ds=null;break;case"pointerover":case"pointerout":il.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(t.pointerId)}}function To(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Er(t),t!==null&&b_(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function F1(e,t,n,i,s){switch(t){case"focusin":return Ls=To(Ls,e,t,n,i,s),!0;case"dragenter":return Us=To(Us,e,t,n,i,s),!0;case"mouseover":return Ds=To(Ds,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return il.set(a,To(il.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,sl.set(a,To(sl.get(a)||null,e,t,n,i,s)),!0}return!1}function M_(e){var t=ja(e.target);if(t!==null){var n=al(t);if(n!==null){if(t=n.tag,t===13){if(t=V0(n),t!==null){e.blockedOn=t,vg(e.priority,function(){O0(n)});return}}else if(t===31){if(t=G0(n),t!==null){e.blockedOn=t,vg(e.priority,function(){O0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Uf=i,n.target.dispatchEvent(i),Uf=null}else return t=Er(n),t!==null&&b_(t),e.blockedOn=n,!1;t.shift()}return!0}function z0(e,t,n){Sc(e)&&n.delete(t)}function H1(){dd=!1,Ls!==null&&Sc(Ls)&&(Ls=null),Us!==null&&Sc(Us)&&(Us=null),Ds!==null&&Sc(Ds)&&(Ds=null),il.forEach(z0),sl.forEach(z0)}function rc(e,t){e.blockedOn===t&&(e.blockedOn=null,dd||(dd=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,H1)))}var oc=null;function I0(e){oc!==e&&(oc=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(lp(i||n)===null)continue;break}var a=Er(n);a!==null&&(e.splice(t,3),t-=3,Yf(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Sr(e){function t(l){return rc(l,e)}Ls!==null&&rc(Ls,e),Us!==null&&rc(Us,e),Ds!==null&&rc(Ds,e),il.forEach(t),sl.forEach(t);for(var n=0;n<vs.length;n++){var i=vs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<vs.length&&(n=vs[0],n.blockedOn===null);)M_(n),n.blockedOn===null&&vs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Mn]||null;if(typeof a=="function")r||I0(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Mn]||null)o=r.formAction;else if(lp(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),I0(n)}}}function E_(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function cp(e){this._internalRoot=e}du.prototype.render=cp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Nn();x_(n,i,e,t,null,null)};du.prototype.unmount=cp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;x_(e.current,2,null,e,null,null),uu(),t[Mr]=null}};function du(e){this._internalRoot=e}du.prototype.unstable_scheduleHydration=function(e){if(e){var t=$0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vs.length&&t!==0&&t<vs[n].priority;n++);vs.splice(n,0,e),n===0&&M_(e)}};var B0=F0.version;if(B0!=="19.2.6")throw Error(j(527,B0,"19.2.6"));se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=vS(t),e=e!==null?k0(e):null,e=e===null?null:e.stateNode,e};var V1={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ao.isDisabled&&Ao.supportsFiber))try{rl=Ao.inject(V1),Un=Ao}catch{}var Ao;pu.createRoot=function(e,t){if(!H0(e))throw Error(j(299));var n=!1,i="",s=mv,a=gv,r=yv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=v_(e,1,!1,null,null,n,i,null,s,a,r,E_),e[Mr]=t.current,ip(e),new cp(t)};pu.hydrateRoot=function(e,t,n){if(!H0(e))throw Error(j(299));var i=!1,s="",a=mv,r=gv,o=yv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=v_(e,1,!0,t,n??null,i,s,l,a,r,o,E_),t.context=__(null),n=t.current,i=Nn(),i=yd(i),s=As(i),s.callback=null,ws(n,s,i),n=i,t.current.lanes=n,ll(t,n),Mi(t),e[Mr]=t.current,ip(e),new du(t)};pu.version="19.2.6"});var R_=gi((_C,w_)=>{"use strict";function A_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A_)}catch(e){console.error(e)}}A_(),w_.exports=T_()});var Ob=gi(vh=>{"use strict";var nC=Symbol.for("react.transitional.element"),iC=Symbol.for("react.fragment");function Nb(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:nC,type:e,key:i,ref:t!==void 0?t:null,props:n}}vh.Fragment=iC;vh.jsx=Nb;vh.jsxs=Nb});var Bl=gi((BC,Pb)=>{"use strict";Pb.exports=Ob()});var ls=$s(mo(),1),Fb=$s(R_(),1);var ho=$s(mo(),1);var Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G1=0,C_=1,k1=2;var sb=1,W1=2,is=3,Zs=0,hn=1,ui=2;var Xs=0,Jr=1,L_=2,U_=3,D_=4,X1=5,Ta=100,q1=101,Y1=102,N_=103,O_=104,Z1=200,j1=201,J1=202,K1=203,Vp=204,Gp=205,Q1=206,$1=207,tE=208,eE=209,nE=210,iE=211,sE=212,aE=213,rE=214,oE=0,lE=1,cE=2,Hu=3,uE=4,hE=5,fE=6,dE=7,ab=0,pE=1,mE=2,qs=0,gE=1,yE=2,vE=3,Tm=4,_E=5;var rb=300,$r=301,to=302,kp=303,Wp=304,hh=306,Xp=1e3,hi=1001,qp=1002,sn=1003,P_=1004;var up=1005;var $n=1006,xE=1007;var wl=1008;var Ys=1009,bE=1010,SE=1011,Am=1012,ob=1013,Ws=1014,Ti=1015,Rl=1016,lb=1017,cb=1018,wa=1020,ME=1021,Bn=1023,EE=1024,TE=1025,Ra=1026,eo=1027,AE=1028,ub=1029,wE=1030,hb=1031,fb=1033,hp=33776,fp=33777,dp=33778,pp=33779,z_=35840,I_=35841,B_=35842,F_=35843,db=36196,H_=37492,V_=37496,G_=37808,k_=37809,W_=37810,X_=37811,q_=37812,Y_=37813,Z_=37814,j_=37815,J_=37816,K_=37817,Q_=37818,$_=37819,tx=37820,ex=37821,mp=36492,nx=36494,ix=36495,RE=36283,sx=36284,ax=36285,rx=36286;var Vu=2300,Gu=2301,gp=2302,ox=2400,lx=2401,cx=2402;var pb=3e3,Ca=3001,CE=3200,LE=3201,mb=0,UE=1,ti="",We="srgb",as="srgb-linear",wm="display-p3",fh="display-p3-linear",ku="linear",_e="srgb",Wu="rec709",Xu="p3";var Lr=7680;var ux=519,DE=512,NE=513,OE=514,gb=515,PE=516,zE=517,IE=518,BE=519,hx=35044;var fx="300 es",Yp=1035,ss=2e3,qu=2001,wi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dx=1234567,Ml=Math.PI/180,Cl=180/Math.PI;function lo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[e&255]+on[e>>8&255]+on[e>>16&255]+on[e>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function cn(e,t,n){return Math.max(t,Math.min(n,e))}function Rm(e,t){return(e%t+t)%t}function FE(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function HE(e,t,n){return e!==t?(n-e)/(t-e):0}function El(e,t,n){return(1-n)*e+n*t}function VE(e,t,n,i){return El(e,t,1-Math.exp(-n*i))}function GE(e,t=1){return t-Math.abs(Rm(e,t*2)-t)}function kE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function WE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function XE(e,t){return e+Math.floor(Math.random()*(t-e+1))}function qE(e,t){return e+Math.random()*(t-e)}function YE(e){return e*(.5-Math.random())}function ZE(e){e!==void 0&&(dx=e);let t=dx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jE(e){return e*Ml}function JE(e){return e*Cl}function Zp(e){return(e&e-1)===0&&e!==0}function KE(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Yu(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function QE(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),u=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":e.set(o*u,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*u,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*u,o*c);break;case"XZX":e.set(o*u,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*u,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ni={DEG2RAD:Ml,RAD2DEG:Cl,generateUUID:lo,clamp:cn,euclideanModulo:Rm,mapLinear:FE,inverseLerp:HE,lerp:El,damp:VE,pingpong:GE,smoothstep:kE,smootherstep:WE,randInt:XE,randFloat:qE,randFloatSpread:YE,seededRandom:ZE,degToRad:jE,radToDeg:JE,isPowerOfTwo:Zp,ceilPowerOfTwo:KE,floorPowerOfTwo:Yu,setQuaternionFromProperEuler:QE,normalize:gn,denormalize:qr},Pt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(cn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=s[0],m=s[3],h=s[6],y=s[1],g=s[4],x=s[7],E=s[2],R=s[5],T=s[8];return a[0]=r*_+o*y+l*E,a[3]=r*m+o*g+l*R,a[6]=r*h+o*x+l*T,a[1]=c*_+u*y+d*E,a[4]=c*m+u*g+d*R,a[7]=c*h+u*x+d*T,a[2]=f*_+p*y+v*E,a[5]=f*m+p*g+v*R,a[8]=f*h+p*x+v*T,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,f=o*l-u*a,p=c*a-r*l,v=n*d+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*r)*_,t[3]=f*_,t[4]=(u*n-s*l)*_,t[5]=(s*a-o*n)*_,t[6]=p*_,t[7]=(i*l-c*n)*_,t[8]=(r*n-i*a)*_,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(yp.makeScale(t,n)),this}rotate(t){return this.premultiply(yp.makeRotation(-t)),this}translate(t,n){return this.premultiply(yp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yp=new Zt;function yb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Zu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function $E(){let e=Zu("canvas");return e.style.display="block",e}var px={};function Tl(e){e in px||(px[e]=!0,console.warn(e))}var mx=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gx=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mu={[as]:{transfer:ku,primaries:Wu,toReference:e=>e,fromReference:e=>e},[We]:{transfer:_e,primaries:Wu,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[fh]:{transfer:ku,primaries:Xu,toReference:e=>e.applyMatrix3(gx),fromReference:e=>e.applyMatrix3(mx)},[wm]:{transfer:_e,primaries:Xu,toReference:e=>e.convertSRGBToLinear().applyMatrix3(gx),fromReference:e=>e.applyMatrix3(mx).convertLinearToSRGB()}},tT=new Set([as,fh]),ue={enabled:!0,_workingColorSpace:as,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(e){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!e},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!tT.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=mu[t].toReference,s=mu[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return mu[e].primaries},getTransfer:function(e){return e===ti?ku:mu[e].transfer}};function Kr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function vp(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ur,ju=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ur===void 0&&(Ur=Zu("canvas")),Ur.width=t.width,Ur.height=t.height;let i=Ur.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Zu("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Kr(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Kr(n[i]/255)*255):n[i]=Kr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},eT=0,Ju=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=lo(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(_p(s[r].image)):a.push(_p(s[r]))}else a=_p(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function _p(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ju.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nT=0,ei=class e extends wi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=hi,s=hi,a=$n,r=wl,o=Bn,l=Ys,c=e.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=lo(),this.name="",this.source=new Ju(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ca?We:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rb)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xp:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case qp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xp:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case qp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?Ca:pb}set encoding(t){Tl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ca?We:ti}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=rb;ei.DEFAULT_ANISOTROPY=1;var Ee=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let g=(c+1)/2,x=(p+1)/2,E=(h+1)/2,R=(u+f)/4,T=(d+_)/4,O=(v+m)/4;return g>x&&g>E?g<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(g),s=R/i,a=T/i):x>E?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=R/s,a=O/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=T/a,s=O/a),this.set(i,s,a,n),this}let y=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(d-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jp=class extends wi{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ee(0,0,t,n),this.scissorTest=!1,this.viewport=new Ee(0,0,t,n);let s={width:t,height:n,depth:1};i.encoding!==void 0&&(Tl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ca?We:ti),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ei(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},t.texture.image);return this.texture.source=new Ju(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rs=class extends jp{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ku=class extends ei{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jp=class extends ei{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],v=a[r+2],_=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=_;return}if(d!==_||l!==f||c!==p||u!==v){let m=1-o,h=l*f+c*p+u*v+d*_,y=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){let E=Math.sqrt(g),R=Math.atan2(E,h*y);m=Math.sin(m*R)/E,o=Math.sin(o*R)/E}let x=o*y;if(l=l*m+f*x,c=c*m+p*x,u=u*m+v*x,d=d*m+_*x,m===1-o){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],f=a[r+1],p=a[r+2],v=a[r+3];return t[n]=o*v+u*d+l*p-c*f,t[n+1]=l*v+u*f+c*d-o*p,t[n+2]=c*v+u*p+o*f-l*d,t[n+3]=u*v-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(a),i*Math.cos(a),n*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(yx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(yx.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xp.copy(this).projectOnVector(t),this.sub(xp)}reflect(t){return this.sub(xp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(cn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xp=new U,yx=new fi,di=class{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ri.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(a,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gu.copy(i.boundingBox)),gu.applyMatrix4(t.matrixWorld),this.union(gu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yl),yu.subVectors(this.max,yl),Dr.subVectors(t.a,yl),Nr.subVectors(t.b,yl),Or.subVectors(t.c,yl),Fs.subVectors(Nr,Dr),Hs.subVectors(Or,Nr),xa.subVectors(Dr,Or);let n=[0,-Fs.z,Fs.y,0,-Hs.z,Hs.y,0,-xa.z,xa.y,Fs.z,0,-Fs.x,Hs.z,0,-Hs.x,xa.z,0,-xa.x,-Fs.y,Fs.x,0,-Hs.y,Hs.x,0,-xa.y,xa.x,0];return!bp(n,Dr,Nr,Or,yu)||(n=[1,0,0,0,1,0,0,0,1],!bp(n,Dr,Nr,Or,yu))?!1:(vu.crossVectors(Fs,Hs),n=[vu.x,vu.y,vu.z],bp(n,Dr,Nr,Or,yu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qi=[new U,new U,new U,new U,new U,new U,new U,new U],ri=new U,gu=new di,Dr=new U,Nr=new U,Or=new U,Fs=new U,Hs=new U,xa=new U,yl=new U,yu=new U,vu=new U,ba=new U;function bp(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){ba.fromArray(e,a);let o=s.x*Math.abs(ba.x)+s.y*Math.abs(ba.y)+s.z*Math.abs(ba.z),l=t.dot(ba),c=n.dot(ba),u=i.dot(ba);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var iT=new di,vl=new U,Sp=new U,no=class{constructor(t=new U,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):iT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vl.subVectors(t,this.center);let n=vl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vl.copy(t.center).add(Sp)),this.expandByPoint(vl.copy(t.center).sub(Sp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$i=new U,Mp=new U,_u=new U,Vs=new U,Ep=new U,xu=new U,Tp=new U,La=class{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=$i.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Mp.copy(t).add(n).multiplyScalar(.5),_u.copy(n).sub(t).normalize(),Vs.copy(this.origin).sub(Mp);let a=t.distanceTo(n)*.5,r=-this.direction.dot(_u),o=Vs.dot(this.direction),l=-Vs.dot(_u),c=Vs.lengthSq(),u=Math.abs(1-r*r),d,f,p,v;if(u>0)if(d=r*l-o,f=r*o-l,v=a*u,d>=0)if(f>=-v)if(f<=v){let _=1/u;d*=_,f*=_,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mp).addScaledVector(_u,f),p}intersectSphere(t,n){$i.subVectors(t.center,this.origin);let i=$i.dot(this.direction),s=$i.dot($i)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,n,i,s,a){Ep.subVectors(n,t),xu.subVectors(i,t),Tp.crossVectors(Ep,xu);let r=this.direction.dot(Tp),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Vs.subVectors(this.origin,t);let l=o*this.direction.dot(xu.crossVectors(Vs,xu));if(l<0)return null;let c=o*this.direction.dot(Ep.cross(Vs));if(c<0||l+c>r)return null;let u=-o*Vs.dot(Tp);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class e{constructor(t,n,i,s,a,r,o,l,c,u,d,f,p,v,_,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,f,p,v,_,m)}set(t,n,i,s,a,r,o,l,c,u,d,f,p,v,_,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Pr.setFromMatrixColumn(t,0).length(),a=1/Pr.setFromMatrixColumn(t,1).length(),r=1/Pr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*u,p=r*d,v=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-_*c,n[9]=-o*l,n[2]=_-f*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,v=c*u,_=c*d;n[0]=f+_*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-v,n[6]=_+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,v=c*u,_=c*d;n[0]=f-_*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*u,n[9]=_-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*u,p=r*d,v=o*u,_=o*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,v=o*l,_=o*c;n[0]=l*u,n[4]=_-f*d,n[8]=v*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-_*d}else if(t.order==="XZY"){let f=r*l,p=r*c,v=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=r*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sT,t,aT)}lookAt(t,n,i){let s=this.elements;return zn.subVectors(t,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Gs.crossVectors(i,zn),Gs.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Gs.crossVectors(i,zn)),Gs.normalize(),bu.crossVectors(zn,Gs),s[0]=Gs.x,s[4]=bu.x,s[8]=zn.x,s[1]=Gs.y,s[5]=bu.y,s[9]=zn.y,s[2]=Gs.z,s[6]=bu.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],m=i[10],h=i[14],y=i[3],g=i[7],x=i[11],E=i[15],R=s[0],T=s[4],O=s[8],b=s[12],w=s[1],k=s[5],K=s[9],st=s[13],D=s[2],B=s[6],$=s[10],Z=s[14],at=s[3],J=s[7],et=s[11],rt=s[15];return a[0]=r*R+o*w+l*D+c*at,a[4]=r*T+o*k+l*B+c*J,a[8]=r*O+o*K+l*$+c*et,a[12]=r*b+o*st+l*Z+c*rt,a[1]=u*R+d*w+f*D+p*at,a[5]=u*T+d*k+f*B+p*J,a[9]=u*O+d*K+f*$+p*et,a[13]=u*b+d*st+f*Z+p*rt,a[2]=v*R+_*w+m*D+h*at,a[6]=v*T+_*k+m*B+h*J,a[10]=v*O+_*K+m*$+h*et,a[14]=v*b+_*st+m*Z+h*rt,a[3]=y*R+g*w+x*D+E*at,a[7]=y*T+g*k+x*B+E*J,a[11]=y*O+g*K+x*$+E*et,a[15]=y*b+g*st+x*Z+E*rt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],v=t[3],_=t[7],m=t[11],h=t[15];return v*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+_*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*u-a*l*u)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*u-i*c*u)+h*(-s*o*u-n*l*d+n*o*f+s*r*d-i*r*f+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],v=t[12],_=t[13],m=t[14],h=t[15],y=d*m*c-_*f*c+_*l*p-o*m*p-d*l*h+o*f*h,g=v*f*c-u*m*c-v*l*p+r*m*p+u*l*h-r*f*h,x=u*_*c-v*d*c+v*o*p-r*_*p-u*o*h+r*d*h,E=v*d*l-u*_*l-v*o*f+r*_*f+u*o*m-r*d*m,R=n*y+i*g+s*x+a*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=y*T,t[1]=(_*f*a-d*m*a-_*s*p+i*m*p+d*s*h-i*f*h)*T,t[2]=(o*m*a-_*l*a+_*s*c-i*m*c-o*s*h+i*l*h)*T,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*T,t[4]=g*T,t[5]=(u*m*a-v*f*a+v*s*p-n*m*p-u*s*h+n*f*h)*T,t[6]=(v*l*a-r*m*a-v*s*c+n*m*c+r*s*h-n*l*h)*T,t[7]=(r*f*a-u*l*a+u*s*c-n*f*c-r*s*p+n*l*p)*T,t[8]=x*T,t[9]=(v*d*a-u*_*a-v*i*p+n*_*p+u*i*h-n*d*h)*T,t[10]=(r*_*a-v*o*a+v*i*c-n*_*c-r*i*h+n*o*h)*T,t[11]=(u*o*a-r*d*a-u*i*c+n*d*c+r*i*p-n*o*p)*T,t[12]=E*T,t[13]=(u*_*s-v*d*s+v*i*f-n*_*f-u*i*m+n*d*m)*T,t[14]=(v*o*s-r*_*s-v*i*l+n*_*l+r*i*m-n*o*m)*T,t[15]=(r*d*s-u*o*s+u*i*l-n*d*l-r*i*f+n*o*f)*T,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,f=a*c,p=a*u,v=a*d,_=r*u,m=r*d,h=o*d,y=l*c,g=l*u,x=l*d,E=i.x,R=i.y,T=i.z;return s[0]=(1-(_+h))*E,s[1]=(p+x)*E,s[2]=(v-g)*E,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(f+h))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(v+g)*T,s[9]=(m-y)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Pr.set(s[0],s[1],s[2]).length(),r=Pr.set(s[4],s[5],s[6]).length(),o=Pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);let c=1/a,u=1/r,d=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,n.setFromRotationMatrix(oi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=ss){let l=this.elements,c=2*a/(n-t),u=2*a/(i-s),d=(n+t)/(n-t),f=(i+s)/(i-s),p,v;if(o===ss)p=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===qu)p=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ss){let l=this.elements,c=1/(n-t),u=1/(i-s),d=1/(r-a),f=(n+t)*c,p=(i+s)*u,v,_;if(o===ss)v=(r+a)*d,_=-2*d;else if(o===qu)v=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Pr=new U,oi=new Fe,sT=new U(0,0,0),aT=new U(1,1,1),Gs=new U,bu=new U,zn=new U,vx=new Fe,_x=new fi,Qu=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-cn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return vx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vx,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return _x.setFromEuler(this),this.setFromQuaternion(_x,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qu.DEFAULT_ORDER="XYZ";var Ll=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rT=0,xx=new U,zr=new fi,ts=new Fe,Su=new U,_l=new U,oT=new U,lT=new fi,bx=new U(1,0,0),Sx=new U(0,1,0),Mx=new U(0,0,1),cT={type:"added"},uT={type:"removed"},fn=class e extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Qu,i=new fi,s=new U(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Zt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(bx,t)}rotateY(t){return this.rotateOnAxis(Sx,t)}rotateZ(t){return this.rotateOnAxis(Mx,t)}translateOnAxis(t,n){return xx.copy(t).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(bx,t)}translateY(t){return this.translateOnAxis(Sx,t)}translateZ(t){return this.translateOnAxis(Mx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Su.copy(t):Su.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(_l,Su,this.up):ts.lookAt(Su,_l,this.up),this.quaternion.setFromRotationMatrix(ts),s&&(ts.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(ts),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(uT)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(ts),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,t,oT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,lT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++){let a=n[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++){let o=s[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};fn.DEFAULT_UP=new U(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new U,es=new U,Ap=new U,ns=new U,Ir=new U,Br=new U,Ex=new U,wp=new U,Rp=new U,Cp=new U,Mu=!1,Yr=class e{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),li.subVectors(t,n),s.cross(li);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){li.subVectors(s,n),es.subVectors(i,n),Ap.subVectors(t,n);let r=li.dot(li),o=li.dot(es),l=li.dot(Ap),c=es.dot(es),u=es.dot(Ap),d=r*c-o*o;if(d===0)return a.set(-2,-1,-1);let f=1/d,p=(c*l-o*u)*f,v=(r*u-o*l)*f;return a.set(1-p-v,v,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ns),ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getUV(t,n,i,s,a,r,o,l){return Mu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mu=!0),this.getInterpolation(t,n,i,s,a,r,o,l)}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ns),l.setScalar(0),l.addScaledVector(a,ns.x),l.addScaledVector(r,ns.y),l.addScaledVector(o,ns.z),l}static isFrontFacing(t,n,i,s){return li.subVectors(i,n),es.subVectors(t,n),li.cross(es).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),es.subVectors(this.a,this.b),li.cross(es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,s,a){return Mu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mu=!0),e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Ir.subVectors(s,i),Br.subVectors(a,i),wp.subVectors(t,i);let l=Ir.dot(wp),c=Br.dot(wp);if(l<=0&&c<=0)return n.copy(i);Rp.subVectors(t,s);let u=Ir.dot(Rp),d=Br.dot(Rp);if(u>=0&&d<=u)return n.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Ir,r);Cp.subVectors(t,a);let p=Ir.dot(Cp),v=Br.dot(Cp);if(v>=0&&p<=v)return n.copy(a);let _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Br,o);let m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Ex.subVectors(a,s),o=(d-u)/(d-u+(p-v)),n.copy(s).addScaledVector(Ex,o);let h=1/(m+_+f);return r=_*h,o=f*h,n.copy(i).addScaledVector(Ir,r).addScaledVector(Br,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Lp(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ee=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=ue.workingColorSpace){return this.r=t,this.g=n,this.b=i,ue.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=ue.workingColorSpace){if(t=Rm(t,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Lp(r,a,t+1/3),this.g=Lp(r,a,t),this.b=Lp(r,a,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,n=We){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=We){let i=vb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}copyLinearToSRGB(t){return this.r=vp(t.r),this.g=vp(t.g),this.b=vp(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ue.fromWorkingColorSpace(ln.copy(this),t),Math.round(cn(ln.r*255,0,255))*65536+Math.round(cn(ln.g*255,0,255))*256+Math.round(cn(ln.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ue.workingColorSpace){ue.fromWorkingColorSpace(ln.copy(this),n);let i=ln.r,s=ln.g,a=ln.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=ue.workingColorSpace){return ue.fromWorkingColorSpace(ln.copy(this),n),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=We){ue.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,i=ln.g,s=ln.b;return t!==We?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ks),this.setHSL(ks.h+t,ks.s+n,ks.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ks),t.getHSL(Eu);let i=El(ks.h,Eu.h,n),s=El(ks.s,Eu.s,n),a=El(ks.l,Eu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new ee;ee.NAMES=vb;var hT=0,js=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Jr,this.side=Zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vp,this.blendDst=Gp,this.blendEquation=Ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Hu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==Zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vp&&(i.blendSrc=this.blendSrc),this.blendDst!==Gp&&(i.blendDst=this.blendDst),this.blendEquation!==Ta&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ux&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},io=class extends js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ab,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new U,Tu=new Pt,He=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=hx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tu.fromBufferAttribute(this,n),Tu.applyMatrix3(t),this.setXY(n,Tu.x,Tu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array),a=gn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hx&&(t.usage=this.usage),t}};var $u=class extends He{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var th=class extends He{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ai=class extends He{constructor(t,n,i){super(new Float32Array(t),n,i)}};var fT=0,Qn=new Fe,Up=new fn,Fr=new U,In=new di,xl=new di,Ke=new U,Fn=class e extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yb(t)?th:$u)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Zt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,n,i){return Qn.makeTranslation(t,n,i),this.applyMatrix4(Qn),this}scale(t,n,i){return Qn.makeScale(t,n,i),this.applyMatrix4(Qn),this}lookAt(t){return Up.lookAt(t),Up.updateMatrix(),this.applyMatrix4(Up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ai(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];In.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];xl.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(In.min,xl.min),In.expandByPoint(Ke),Ke.addVectors(In.max,xl.max),In.expandByPoint(Ke)):(In.expandByPoint(xl.min),In.expandByPoint(xl.max))}In.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Ke.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Ke));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(t,c),Ke.add(Fr)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=n.position.array,a=n.normal.array,r=n.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new U,u[w]=new U;let d=new U,f=new U,p=new U,v=new Pt,_=new Pt,m=new Pt,h=new U,y=new U;function g(w,k,K){d.fromArray(s,w*3),f.fromArray(s,k*3),p.fromArray(s,K*3),v.fromArray(r,w*2),_.fromArray(r,k*2),m.fromArray(r,K*2),f.sub(d),p.sub(d),_.sub(v),m.sub(v);let st=1/(_.x*m.y-m.x*_.y);isFinite(st)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(st),y.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(st),c[w].add(h),c[k].add(h),c[K].add(h),u[w].add(y),u[k].add(y),u[K].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,k=x.length;w<k;++w){let K=x[w],st=K.start,D=K.count;for(let B=st,$=st+D;B<$;B+=3)g(i[B+0],i[B+1],i[B+2])}let E=new U,R=new U,T=new U,O=new U;function b(w){T.fromArray(a,w*3),O.copy(T);let k=c[w];E.copy(k),E.sub(T.multiplyScalar(T.dot(k))).normalize(),R.crossVectors(O,k);let st=R.dot(u[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=st}for(let w=0,k=x.length;w<k;++w){let K=x[w],st=K.start,D=K.count;for(let B=st,$=st+D;B<$;B+=3)b(i[B+0]),b(i[B+1]),b(i[B+2])}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new He(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){let v=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new He(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(n));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tx=new Fe,Sa=new La,Au=new no,Ax=new U,Hr=new U,Vr=new U,Gr=new U,Dp=new U,wu=new U,Ru=new Pt,Cu=new Pt,Lu=new Pt,wx=new U,Rx=new U,Cx=new U,Uu=new U,Du=new U,he=class extends fn{constructor(t=new Fn,n=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){wu.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(Dp.fromBufferAttribute(d,t),r?wu.addScaledVector(Dp,u):wu.addScaledVector(Dp.sub(n),u))}n.add(wu)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Au.copy(i.boundingSphere),Au.applyMatrix4(a),Sa.copy(t.ray).recast(t.near),!(Au.containsPoint(Sa.origin)===!1&&(Sa.intersectSphere(Au,Ax)===null||Sa.origin.distanceToSquared(Ax)>(t.far-t.near)**2))&&(Tx.copy(a).invert(),Sa.copy(t.ray).applyMatrix4(Tx),!(i.boundingBox!==null&&Sa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Sa)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,_=f.length;v<_;v++){let m=f[v],h=r[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,E=g;x<E;x+=3){let R=o.getX(x),T=o.getX(x+1),O=o.getX(x+2);s=Nu(this,h,t,i,c,u,d,R,T,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){let y=o.getX(m),g=o.getX(m+1),x=o.getX(m+2);s=Nu(this,r,t,i,c,u,d,y,g,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,_=f.length;v<_;v++){let m=f[v],h=r[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,E=g;x<E;x+=3){let R=x,T=x+1,O=x+2;s=Nu(this,h,t,i,c,u,d,R,T,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){let y=m,g=m+1,x=m+2;s=Nu(this,r,t,i,c,u,d,y,g,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function dT(e,t,n,i,s,a,r,o){let l;if(t.side===hn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Zs,o),l===null)return null;Du.copy(o),Du.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Du);return c<n.near||c>n.far?null:{distance:c,point:Du.clone(),object:e}}function Nu(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Hr),e.getVertexPosition(l,Vr),e.getVertexPosition(c,Gr);let u=dT(e,t,n,i,Hr,Vr,Gr,Uu);if(u){s&&(Ru.fromBufferAttribute(s,o),Cu.fromBufferAttribute(s,l),Lu.fromBufferAttribute(s,c),u.uv=Yr.getInterpolation(Uu,Hr,Vr,Gr,Ru,Cu,Lu,new Pt)),a&&(Ru.fromBufferAttribute(a,o),Cu.fromBufferAttribute(a,l),Lu.fromBufferAttribute(a,c),u.uv1=Yr.getInterpolation(Uu,Hr,Vr,Gr,Ru,Cu,Lu,new Pt),u.uv2=u.uv1),r&&(wx.fromBufferAttribute(r,o),Rx.fromBufferAttribute(r,l),Cx.fromBufferAttribute(r,c),u.normal=Yr.getInterpolation(Uu,Hr,Vr,Gr,wx,Rx,Cx,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Yr.getNormal(Hr,Vr,Gr,d.normal),u.face=d}return u}var Ua=class e extends Fn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],f=0,p=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(u,3)),this.setAttribute("uv",new Ai(d,2));function v(_,m,h,y,g,x,E,R,T,O,b){let w=x/T,k=E/O,K=x/2,st=E/2,D=R/2,B=T+1,$=O+1,Z=0,at=0,J=new U;for(let et=0;et<$;et++){let rt=et*k-st;for(let yt=0;yt<B;yt++){let X=yt*w-K;J[_]=X*y,J[m]=rt*g,J[h]=D,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[h]=R>0?1:-1,u.push(J.x,J.y,J.z),d.push(yt/T),d.push(1-et/O),Z+=1}}for(let et=0;et<O;et++)for(let rt=0;rt<T;rt++){let yt=f+rt+B*et,X=f+rt+B*(et+1),tt=f+(rt+1)+B*(et+1),mt=f+(rt+1)+B*et;l.push(yt,X,mt),l.push(X,tt,mt),at+=6}o.addGroup(p,at,b),p+=at,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function so(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function yn(e){let t={};for(let n=0;n<e.length;n++){let i=so(e[n]);for(let s in i)t[s]=i[s]}return t}function pT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function _b(e){return e.getRenderTarget()===null?e.outputColorSpace:ue.workingColorSpace}var mT={clone:so,merge:yn},gT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,os=class extends js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gT,this.fragmentShader=yT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=pT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},eh=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ss}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},un=class extends eh{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ml*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},kr=-90,Wr=1,Kp=class extends fn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(kr,Wr,t,n);s.layers=this.layers,this.add(s);let a=new un(kr,Wr,t,n);a.layers=this.layers,this.add(a);let r=new un(kr,Wr,t,n);r.layers=this.layers,this.add(r);let o=new un(kr,Wr,t,n);o.layers=this.layers,this.add(o);let l=new un(kr,Wr,t,n);l.layers=this.layers,this.add(l);let c=new un(kr,Wr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},nh=class extends ei{constructor(t,n,i,s,a,r,o,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:$r,super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qp=class extends rs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Tl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ca?We:ti),this.texture=new nh(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ua(5,5,5),a=new os({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Xs});a.uniforms.tEquirect.value=n;let r=new he(s,a),o=n.minFilter;return n.minFilter===wl&&(n.minFilter=$n),new Kp(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,s){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Np=new U,vT=new U,_T=new Zt,ci=class{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Np.subVectors(i,n).cross(vT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Np),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||_T.getNormalMatrix(t),s=this.coplanarPoint(Np).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ma=new no,Ou=new U,Ul=class{constructor(t=new ci,n=new ci,i=new ci,s=new ci,a=new ci,r=new ci){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ss){let i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],v=s[9],_=s[10],m=s[11],h=s[12],y=s[13],g=s[14],x=s[15];if(i[0].setComponents(l-a,f-c,m-p,x-h).normalize(),i[1].setComponents(l+a,f+c,m+p,x+h).normalize(),i[2].setComponents(l+r,f+u,m+v,x+y).normalize(),i[3].setComponents(l-r,f-u,m-v,x-y).normalize(),i[4].setComponents(l-o,f-d,m-_,x-g).normalize(),n===ss)i[5].setComponents(l+o,f+d,m+_,x+g).normalize();else if(n===qu)i[5].setComponents(o,d,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ma.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ma)}intersectsSprite(t){return Ma.center.set(0,0,0),Ma.radius=.7071067811865476,Ma.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ma)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ou.x=s.normal.x>0?t.max.x:t.min.x,Ou.y=s.normal.y>0?t.max.y:t.min.y,Ou.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function xT(e,t){let n=t.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,f=c.usage,p=d.byteLength,v=e.createBuffer();e.bindBuffer(u,v),e.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=e.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=e.SHORT;else if(d instanceof Uint32Array)_=e.UNSIGNED_INT;else if(d instanceof Int32Array)_=e.INT;else if(d instanceof Int8Array)_=e.BYTE;else if(d instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function a(c,u,d){let f=u.array,p=u._updateRange,v=u.updateRanges;if(e.bindBuffer(d,c),p.count===-1&&v.length===0&&e.bufferSubData(d,0,f),v.length!==0){for(let _=0,m=v.length;_<m;_++){let h=v[_];n?e.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):e.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?e.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):e.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(e.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,u),d.version=c.version}}return{get:r,remove:o,update:l}}var $p=class e extends Fn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=n/l,p=[],v=[],_=[],m=[];for(let h=0;h<u;h++){let y=h*f-r;for(let g=0;g<c;g++){let x=g*d-a;v.push(x,-y,0),_.push(0,0,1),m.push(g/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){let g=y+c*h,x=y+c*(h+1),E=y+1+c*(h+1),R=y+1+c*h;p.push(g,x,R),p.push(x,E,R)}this.setIndex(p),this.setAttribute("position",new Ai(v,3)),this.setAttribute("normal",new Ai(_,3)),this.setAttribute("uv",new Ai(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},bT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,AT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,UT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,WT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_A=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,RA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,IA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,BA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ww=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ow=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:bT,alphahash_pars_fragment:ST,alphamap_fragment:MT,alphamap_pars_fragment:ET,alphatest_fragment:TT,alphatest_pars_fragment:AT,aomap_fragment:wT,aomap_pars_fragment:RT,batching_pars_vertex:CT,batching_vertex:LT,begin_vertex:UT,beginnormal_vertex:DT,bsdfs:NT,iridescence_fragment:OT,bumpmap_pars_fragment:PT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:IT,clipping_planes_pars_vertex:BT,clipping_planes_vertex:FT,color_fragment:HT,color_pars_fragment:VT,color_pars_vertex:GT,color_vertex:kT,common:WT,cube_uv_reflection_fragment:XT,defaultnormal_vertex:qT,displacementmap_pars_vertex:YT,displacementmap_vertex:ZT,emissivemap_fragment:jT,emissivemap_pars_fragment:JT,colorspace_fragment:KT,colorspace_pars_fragment:QT,envmap_fragment:$T,envmap_common_pars_fragment:tA,envmap_pars_fragment:eA,envmap_pars_vertex:nA,envmap_physical_pars_fragment:pA,envmap_vertex:iA,fog_vertex:sA,fog_pars_vertex:aA,fog_fragment:rA,fog_pars_fragment:oA,gradientmap_pars_fragment:lA,lightmap_fragment:cA,lightmap_pars_fragment:uA,lights_lambert_fragment:hA,lights_lambert_pars_fragment:fA,lights_pars_begin:dA,lights_toon_fragment:mA,lights_toon_pars_fragment:gA,lights_phong_fragment:yA,lights_phong_pars_fragment:vA,lights_physical_fragment:_A,lights_physical_pars_fragment:xA,lights_fragment_begin:bA,lights_fragment_maps:SA,lights_fragment_end:MA,logdepthbuf_fragment:EA,logdepthbuf_pars_fragment:TA,logdepthbuf_pars_vertex:AA,logdepthbuf_vertex:wA,map_fragment:RA,map_pars_fragment:CA,map_particle_fragment:LA,map_particle_pars_fragment:UA,metalnessmap_fragment:DA,metalnessmap_pars_fragment:NA,morphcolor_vertex:OA,morphnormal_vertex:PA,morphtarget_pars_vertex:zA,morphtarget_vertex:IA,normal_fragment_begin:BA,normal_fragment_maps:FA,normal_pars_fragment:HA,normal_pars_vertex:VA,normal_vertex:GA,normalmap_pars_fragment:kA,clearcoat_normal_fragment_begin:WA,clearcoat_normal_fragment_maps:XA,clearcoat_pars_fragment:qA,iridescence_pars_fragment:YA,opaque_fragment:ZA,packing:jA,premultiplied_alpha_fragment:JA,project_vertex:KA,dithering_fragment:QA,dithering_pars_fragment:$A,roughnessmap_fragment:tw,roughnessmap_pars_fragment:ew,shadowmap_pars_fragment:nw,shadowmap_pars_vertex:iw,shadowmap_vertex:sw,shadowmask_pars_fragment:aw,skinbase_vertex:rw,skinning_pars_vertex:ow,skinning_vertex:lw,skinnormal_vertex:cw,specularmap_fragment:uw,specularmap_pars_fragment:hw,tonemapping_fragment:fw,tonemapping_pars_fragment:dw,transmission_fragment:pw,transmission_pars_fragment:mw,uv_pars_fragment:gw,uv_pars_vertex:yw,uv_vertex:vw,worldpos_vertex:_w,background_vert:xw,background_frag:bw,backgroundCube_vert:Sw,backgroundCube_frag:Mw,cube_vert:Ew,cube_frag:Tw,depth_vert:Aw,depth_frag:ww,distanceRGBA_vert:Rw,distanceRGBA_frag:Cw,equirect_vert:Lw,equirect_frag:Uw,linedashed_vert:Dw,linedashed_frag:Nw,meshbasic_vert:Ow,meshbasic_frag:Pw,meshlambert_vert:zw,meshlambert_frag:Iw,meshmatcap_vert:Bw,meshmatcap_frag:Fw,meshnormal_vert:Hw,meshnormal_frag:Vw,meshphong_vert:Gw,meshphong_frag:kw,meshphysical_vert:Ww,meshphysical_frag:Xw,meshtoon_vert:qw,meshtoon_frag:Yw,points_vert:Zw,points_frag:jw,shadow_vert:Jw,shadow_frag:Kw,sprite_vert:Qw,sprite_frag:$w},dt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ei={basic:{uniforms:yn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:yn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:yn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:yn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:yn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:yn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:yn([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:yn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:yn([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:yn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:yn([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:yn([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:yn([dt.lights,dt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ei.physical={uniforms:yn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Pu={r:0,b:0,g:0};function tR(e,t,n,i,s,a,r){let o=new ee(0),l=a===!0?0:1,c,u,d=null,f=0,p=null;function v(m,h){let y=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:t).get(g)),g===null?_(o,l):g&&g.isColor&&(_(g,1),y=!0);let x=e.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||g.mapping===hh)?(u===void 0&&(u=new he(new Ua(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:so(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ue.getTransfer(g.colorSpace)!==_e,(d!==g||f!==g.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new he(new $p(2,2),new os({name:"BackgroundMaterial",uniforms:so(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Zs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ue.getTransfer(g.colorSpace)!==_e,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(Pu,_b(e)),i.buffers.color.setClear(Pu.r,Pu.g,Pu.b,h,r)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:v}}function eR(e,t,n,i){let s=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||a!==null,o={},l=m(null),c=l,u=!1;function d(D,B,$,Z,at){let J=!1;if(r){let et=_(Z,$,B);c!==et&&(c=et,p(c.object)),J=h(D,Z,$,at),J&&y(D,Z,$,at)}else{let et=B.wireframe===!0;(c.geometry!==Z.id||c.program!==$.id||c.wireframe!==et)&&(c.geometry=Z.id,c.program=$.id,c.wireframe=et,J=!0)}at!==null&&n.update(at,e.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,O(D,B,$,Z),at!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(at).buffer))}function f(){return i.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(D){return i.isWebGL2?e.bindVertexArray(D):a.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?e.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function _(D,B,$){let Z=$.wireframe===!0,at=o[D.id];at===void 0&&(at={},o[D.id]=at);let J=at[B.id];J===void 0&&(J={},at[B.id]=J);let et=J[Z];return et===void 0&&(et=m(f()),J[Z]=et),et}function m(D){let B=[],$=[],Z=[];for(let at=0;at<s;at++)B[at]=0,$[at]=0,Z[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:Z,object:D,attributes:{},index:null}}function h(D,B,$,Z){let at=c.attributes,J=B.attributes,et=0,rt=$.getAttributes();for(let yt in rt)if(rt[yt].location>=0){let tt=at[yt],mt=J[yt];if(mt===void 0&&(yt==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),yt==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),tt===void 0||tt.attribute!==mt||mt&&tt.data!==mt.data)return!0;et++}return c.attributesNum!==et||c.index!==Z}function y(D,B,$,Z){let at={},J=B.attributes,et=0,rt=$.getAttributes();for(let yt in rt)if(rt[yt].location>=0){let tt=J[yt];tt===void 0&&(yt==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),yt==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let mt={};mt.attribute=tt,tt&&tt.data&&(mt.data=tt.data),at[yt]=mt,et++}c.attributes=at,c.attributesNum=et,c.index=Z}function g(){let D=c.newAttributes;for(let B=0,$=D.length;B<$;B++)D[B]=0}function x(D){E(D,0)}function E(D,B){let $=c.newAttributes,Z=c.enabledAttributes,at=c.attributeDivisors;$[D]=1,Z[D]===0&&(e.enableVertexAttribArray(D),Z[D]=1),at[D]!==B&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),at[D]=B)}function R(){let D=c.newAttributes,B=c.enabledAttributes;for(let $=0,Z=B.length;$<Z;$++)B[$]!==D[$]&&(e.disableVertexAttribArray($),B[$]=0)}function T(D,B,$,Z,at,J,et){et===!0?e.vertexAttribIPointer(D,B,$,at,J):e.vertexAttribPointer(D,B,$,Z,at,J)}function O(D,B,$,Z){if(i.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let at=Z.attributes,J=$.getAttributes(),et=B.defaultAttributeValues;for(let rt in J){let yt=J[rt];if(yt.location>=0){let X=at[rt];if(X===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let tt=X.normalized,mt=X.itemSize,bt=n.get(X);if(bt===void 0)continue;let St=bt.buffer,Dt=bt.type,Lt=bt.bytesPerElement,wt=i.isWebGL2===!0&&(Dt===e.INT||Dt===e.UNSIGNED_INT||X.gpuType===ob);if(X.isInterleavedBufferAttribute){let Tt=X.data,z=Tt.stride,fe=X.offset;if(Tt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<yt.locationSize;Mt++)E(yt.location+Mt,Tt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Mt=0;Mt<yt.locationSize;Mt++)x(yt.location+Mt);e.bindBuffer(e.ARRAY_BUFFER,St);for(let Mt=0;Mt<yt.locationSize;Mt++)T(yt.location+Mt,mt/yt.locationSize,Dt,tt,z*Lt,(fe+mt/yt.locationSize*Mt)*Lt,wt)}else{if(X.isInstancedBufferAttribute){for(let Tt=0;Tt<yt.locationSize;Tt++)E(yt.location+Tt,X.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Tt=0;Tt<yt.locationSize;Tt++)x(yt.location+Tt);e.bindBuffer(e.ARRAY_BUFFER,St);for(let Tt=0;Tt<yt.locationSize;Tt++)T(yt.location+Tt,mt/yt.locationSize,Dt,tt,mt*Lt,mt/yt.locationSize*Tt*Lt,wt)}}else if(et!==void 0){let tt=et[rt];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(yt.location,tt);break;case 3:e.vertexAttrib3fv(yt.location,tt);break;case 4:e.vertexAttrib4fv(yt.location,tt);break;default:e.vertexAttrib1fv(yt.location,tt)}}}}R()}function b(){K();for(let D in o){let B=o[D];for(let $ in B){let Z=B[$];for(let at in Z)v(Z[at].object),delete Z[at];delete B[$]}delete o[D]}}function w(D){if(o[D.id]===void 0)return;let B=o[D.id];for(let $ in B){let Z=B[$];for(let at in Z)v(Z[at].object),delete Z[at];delete B[$]}delete o[D.id]}function k(D){for(let B in o){let $=o[B];if($[D.id]===void 0)continue;let Z=$[D.id];for(let at in Z)v(Z[at].object),delete Z[at];delete $[D.id]}}function K(){st(),u=!0,c!==l&&(c=l,p(c.object))}function st(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:st,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:x,disableUnusedAttributes:R}}function nR(e,t,n,i){let s=i.isWebGL2,a;function r(u){a=u}function o(u,d){e.drawArrays(a,u,d),n.update(d,a,1)}function l(u,d,f){if(f===0)return;let p,v;if(s)p=e,v="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](a,u,d,f),n.update(d,a,f)}function c(u,d,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<f;v++)this.render(u[v],d[v]);else{p.multiDrawArraysWEBGL(a,u,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=d[_];n.update(v,a,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function iR(e,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",o=n.precision!==void 0?n.precision:"highp",l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=r||t.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),h=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,x=r||t.has("OES_texture_float"),E=g&&x,R=r?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:R}}function sR(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ci,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){let v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=e.get(d);if(!s||v===null||v.length===0||a&&!m)a?u(null):c();else{let y=a?0:i,g=y*4,x=h.clippingState||null;l.value=x,x=u(v,f,g,p);for(let E=0;E!==g;++E)x[E]=n[E];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,v){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,v!==!0||m===null){let h=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,x=p;g!==_;++g,x+=4)r.copy(d[g]).applyMatrix4(y,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function aR(e){let t=new WeakMap;function n(r,o){return o===kp?r.mapping=$r:o===Wp&&(r.mapping=to),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===kp||o===Wp)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Qp(l.height/2);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var ih=class extends eh{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Zr=4,Lx=[.125,.215,.35,.446,.526,.582],Aa=20,Op=new ih,Ux=new ee,Pp=null,zp=0,Ip=0,Ea=(1+Math.sqrt(5))/2,Xr=1/Ea,Dx=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ea,Xr),new U(0,Ea,-Xr),new U(Xr,0,Ea),new U(-Xr,0,Ea),new U(Ea,Xr,0),new U(-Ea,Xr,0)],ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){Pp=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pp,zp,Ip),t.scissorTest=!1,zu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===$r||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pp=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Ip=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Rl,format:Bn,colorSpace:as,depthBuffer:!1},s=Nx(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nx(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rR(a)),this._blurMaterial=oR(a,t,n)}return s}_compileMaterial(t){let n=new he(this._lodPlanes[0],t);this._renderer.compile(n,Op)}_sceneToCubeUV(t,n,i,s){let o=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ux),u.toneMapping=qs,u.autoClear=!1;let p=new io({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),v=new he(new Ua,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ux),_=!0);for(let h=0;h<6;h++){let y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));let g=this._cubeSize;zu(s,y*g,h>2?g:0,g,g),u.setRenderTarget(s),_&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===$r||t.mapping===to;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Px()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ox());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new he(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;zu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Op)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Dx[(s-1)%Dx.length];this._blur(t,s-1,s,a,r)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new he(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Aa-1),_=a/v,m=isFinite(a)?1+Math.floor(u*_):Aa;m>Aa&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Aa}`);let h=[],y=0;for(let T=0;T<Aa;++T){let O=T/_,b=Math.exp(-O*O/2);h.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<h.length;T++)h[T]=h[T]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;let x=this._sizeLods[s],E=3*x*(s>g-Zr?s-g+Zr:0),R=4*(this._cubeSize-x);zu(n,E,R,3*x,2*x),l.setRenderTarget(n),l.render(d,Op)}};function rR(e){let t=[],n=[],i=[],s=e,a=e-Zr+1+Lx.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Zr?l=Lx[r-e+Zr-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,m=2,h=1,y=new Float32Array(_*v*p),g=new Float32Array(m*v*p),x=new Float32Array(h*v*p);for(let R=0;R<p;R++){let T=R%3*2/3-1,O=R>2?0:-1,b=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];y.set(b,_*v*R),g.set(f,m*v*R);let w=[R,R,R,R,R,R];x.set(w,h*v*R)}let E=new Fn;E.setAttribute("position",new He(y,_)),E.setAttribute("uv",new He(g,m)),E.setAttribute("faceIndex",new He(x,h)),t.push(E),s>Zr&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Nx(e,t,n){let i=new rs(e,t,n);return i.texture.mapping=hh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zu(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function oR(e,t,n){let i=new Float32Array(Aa),s=new U(0,1,0);return new os({name:"SphericalGaussianBlur",defines:{n:Aa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function Ox(){return new os({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function Px(){return new os({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function Cm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lR(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===kp||l===Wp,u=l===$r||l===to;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return n===null&&(n=new ao(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){n===null&&(n=new ao(e));let f=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function cR(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uR(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);for(let v in f.morphAttributes){let _=f.morphAttributes[v];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let v in f)t.update(f[v],e.ARRAY_BUFFER);let p=d.morphAttributes;for(let v in p){let _=p[v];for(let m=0,h=_.length;m<h;m++)t.update(_[m],e.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,v=d.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let g=0,x=y.length;g<x;g+=3){let E=y[g+0],R=y[g+1],T=y[g+2];f.push(E,R,R,T,T,E)}}else if(v!==void 0){let y=v.array;_=v.version;for(let g=0,x=y.length/3-1;g<x;g+=3){let E=g+0,R=g+1,T=g+2;f.push(E,R,R,T,T,E)}}else return;let m=new(yb(f)?th:$u)(f,1);m.version=_;let h=a.get(d);h&&t.remove(h),a.set(d,m)}function u(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function hR(e,t,n,i){let s=i.isWebGL2,a;function r(p){a=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,v){e.drawElements(a,v,o,p*l),n.update(v,a,1)}function d(p,v,_){if(_===0)return;let m,h;if(s)m=e,h="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](a,v,o,p*l,_),n.update(v,a,_)}function f(p,v,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<_;h++)this.render(p[h]/l,v[h]);else{m.multiDrawElementsWEBGL(a,v,0,o,p,0,_);let h=0;for(let y=0;y<_;y++)h+=v[y];n.update(h,a,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function fR(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function dR(e,t){return e[0]-t[0]}function pR(e,t){return Math.abs(t[1])-Math.abs(e[1])}function mR(e,t,n){let i={},s=new Float32Array(8),a=new WeakMap,r=new Ee,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0,_=a.get(u);if(_===void 0||_.count!==v){let D=function(){K.dispose(),a.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],T=u.morphAttributes.color||[],O=0;y===!0&&(O=1),g===!0&&(O=2),x===!0&&(O=3);let b=u.attributes.position.count*O,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let k=new Float32Array(b*w*4*v),K=new Ku(k,b,w,v);K.type=Ti,K.needsUpdate=!0;let st=O*4;for(let B=0;B<v;B++){let $=E[B],Z=R[B],at=T[B],J=b*w*4*B;for(let et=0;et<$.count;et++){let rt=et*st;y===!0&&(r.fromBufferAttribute($,et),k[J+rt+0]=r.x,k[J+rt+1]=r.y,k[J+rt+2]=r.z,k[J+rt+3]=0),g===!0&&(r.fromBufferAttribute(Z,et),k[J+rt+4]=r.x,k[J+rt+5]=r.y,k[J+rt+6]=r.z,k[J+rt+7]=0),x===!0&&(r.fromBufferAttribute(at,et),k[J+rt+8]=r.x,k[J+rt+9]=r.y,k[J+rt+10]=r.z,k[J+rt+11]=at.itemSize===4?r.w:1)}}_={count:v,texture:K,size:new Pt(b,w)},a.set(u,_),u.addEventListener("dispose",D)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let h=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(e,"morphTargetBaseInfluence",h),d.getUniforms().setValue(e,"morphTargetInfluences",f),d.getUniforms().setValue(e,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(e,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[u.id]=v}for(let g=0;g<p;g++){let x=v[g];x[0]=g,x[1]=f[g]}v.sort(pR);for(let g=0;g<8;g++)g<p&&v[g][1]?(o[g][0]=v[g][0],o[g][1]=v[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(dR);let _=u.morphAttributes.position,m=u.morphAttributes.normal,h=0;for(let g=0;g<8;g++){let x=o[g],E=x[0],R=x[1];E!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+g)!==_[E]&&u.setAttribute("morphTarget"+g,_[E]),m&&u.getAttribute("morphNormal"+g)!==m[E]&&u.setAttribute("morphNormal"+g,m[E]),s[g]=R,h+=R):(_&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),s[g]=0)}let y=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(e,"morphTargetBaseInfluence",y),d.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:l}}function gR(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var sh=class extends ei{constructor(t,n,i,s,a,r,o,l,c,u){if(u=u!==void 0?u:Ra,u!==Ra&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ra&&(i=Ws),i===void 0&&u===eo&&(i=wa),super(null,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},bb=new ei,Sb=new sh(1,1);Sb.compareFunction=gb;var Mb=new Ku,Eb=new Jp,Tb=new nh,zx=[],Ix=[],Bx=new Float32Array(16),Fx=new Float32Array(9),Hx=new Float32Array(4);function co(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=zx[s];if(a===void 0&&(a=new Float32Array(s),zx[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Xe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function dh(e,t){let n=Ix[t];n===void 0&&(n=new Int32Array(t),Ix[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function yR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function _R(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function xR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function bR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;Hx.set(i),e.uniformMatrix2fv(this.addr,!1,Hx),qe(n,i)}}function SR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;Fx.set(i),e.uniformMatrix3fv(this.addr,!1,Fx),qe(n,i)}}function MR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(Xe(n,i))return;Bx.set(i),e.uniformMatrix4fv(this.addr,!1,Bx),qe(n,i)}}function ER(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function TR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function AR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function wR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function RR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function CR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function LR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function UR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function DR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a=this.type===e.SAMPLER_2D_SHADOW?Sb:bb;n.setTexture2D(t||a,s)}function NR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Eb,s)}function OR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Tb,s)}function PR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Mb,s)}function zR(e){switch(e){case 5126:return yR;case 35664:return vR;case 35665:return _R;case 35666:return xR;case 35674:return bR;case 35675:return SR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return TR;case 35668:case 35672:return AR;case 35669:case 35673:return wR;case 5125:return RR;case 36294:return CR;case 36295:return LR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return OR;case 36289:case 36303:case 36311:case 36292:return PR}}function IR(e,t){e.uniform1fv(this.addr,t)}function BR(e,t){let n=co(t,this.size,2);e.uniform2fv(this.addr,n)}function FR(e,t){let n=co(t,this.size,3);e.uniform3fv(this.addr,n)}function HR(e,t){let n=co(t,this.size,4);e.uniform4fv(this.addr,n)}function VR(e,t){let n=co(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function GR(e,t){let n=co(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function kR(e,t){let n=co(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function WR(e,t){e.uniform1iv(this.addr,t)}function XR(e,t){e.uniform2iv(this.addr,t)}function qR(e,t){e.uniform3iv(this.addr,t)}function YR(e,t){e.uniform4iv(this.addr,t)}function ZR(e,t){e.uniform1uiv(this.addr,t)}function jR(e,t){e.uniform2uiv(this.addr,t)}function JR(e,t){e.uniform3uiv(this.addr,t)}function KR(e,t){e.uniform4uiv(this.addr,t)}function QR(e,t,n){let i=this.cache,s=t.length,a=dh(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||bb,a[r])}function $R(e,t,n){let i=this.cache,s=t.length,a=dh(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Eb,a[r])}function t2(e,t,n){let i=this.cache,s=t.length,a=dh(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Tb,a[r])}function e2(e,t,n){let i=this.cache,s=t.length,a=dh(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Mb,a[r])}function n2(e){switch(e){case 5126:return IR;case 35664:return BR;case 35665:return FR;case 35666:return HR;case 35674:return VR;case 35675:return GR;case 35676:return kR;case 5124:case 35670:return WR;case 35667:case 35671:return XR;case 35668:case 35672:return qR;case 35669:case 35673:return YR;case 5125:return ZR;case 36294:return jR;case 36295:return JR;case 36296:return KR;case 35678:case 36198:case 36298:case 36306:case 35682:return QR;case 35679:case 36299:case 36307:return $R;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return e2}}var tm=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zR(n.type)}},em=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=n2(n.type)}},nm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Bp=/(\w+)(\])?(\[|\.)?/g;function Vx(e,t){e.seq.push(t),e.map[t.id]=t}function i2(e,t,n){let i=e.name,s=i.length;for(Bp.lastIndex=0;;){let a=Bp.exec(i),r=Bp.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Vx(n,c===void 0?new tm(o,e,t):new em(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new nm(o),Vx(n,d)),n=d}}}var Qr=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);i2(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Gx(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var s2=37297,a2=0;function r2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function o2(e){let t=ue.getPrimaries(ue.workingColorSpace),n=ue.getPrimaries(e),i;switch(t===n?i="":t===Xu&&n===Wu?i="LinearDisplayP3ToLinearSRGB":t===Wu&&n===Xu&&(i="LinearSRGBToLinearDisplayP3"),e){case as:case fh:return[i,"LinearTransferOETF"];case We:case wm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function kx(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+r2(e.getShaderSource(t),r)}else return s}function l2(e,t){let n=o2(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function c2(e,t){let n;switch(t){case gE:n="Linear";break;case yE:n="Reinhard";break;case vE:n="OptimizedCineon";break;case Tm:n="ACESFilmic";break;case _E:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function u2(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sl).join(`
`)}function h2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function f2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Sl(e){return e!==""}function Wx(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xx(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d2=/^[ \t]*#include +<([\w\d./]+)>/gm;function im(e){return e.replace(d2,m2)}var p2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m2(e,t){let n=Xt[t];if(n===void 0){let i=p2.get(t);if(i!==void 0)n=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return im(n)}var g2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qx(e){return e.replace(g2,y2)}function y2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yx(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===sb?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===W1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===is&&(t="SHADOWMAP_TYPE_VSM"),t}function _2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case $r:case to:t="ENVMAP_TYPE_CUBE";break;case hh:t="ENVMAP_TYPE_CUBE_UV";break}return t}function x2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case to:t="ENVMAP_MODE_REFRACTION";break}return t}function b2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ab:t="ENVMAP_BLENDING_MULTIPLY";break;case pE:t="ENVMAP_BLENDING_MIX";break;case mE:t="ENVMAP_BLENDING_ADD";break}return t}function S2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function M2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=v2(n),c=_2(n),u=x2(n),d=b2(n),f=S2(n),p=n.isWebGL2?"":u2(n),v=h2(a),_=s.createProgram(),m,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sl).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sl).join(`
`),h.length>0&&(h+=`
`)):(m=[Yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),h=[p,Yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qs?"#define TONE_MAPPING":"",n.toneMapping!==qs?Xt.tonemapping_pars_fragment:"",n.toneMapping!==qs?c2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,l2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sl).join(`
`)),r=im(r),r=Wx(r,n),r=Xx(r,n),o=im(o),o=Wx(o,n),o=Xx(o,n),r=qx(r),o=qx(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let g=y+m+r,x=y+h+o,E=Gx(s,s.VERTEX_SHADER,g),R=Gx(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,R),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(k){if(e.debug.checkShaderErrors){let K=s.getProgramInfoLog(_).trim(),st=s.getShaderInfoLog(E).trim(),D=s.getShaderInfoLog(R).trim(),B=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,E,R);else{let Z=kx(s,E,"vertex"),at=kx(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Z+`
`+at)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(st===""||D==="")&&($=!1);$&&(k.diagnostics={runnable:B,programLog:K,vertexShader:{log:st,prefix:m},fragmentShader:{log:D,prefix:h}})}s.deleteShader(E),s.deleteShader(R),O=new Qr(s,_),b=f2(s,_)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,s2)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=a2++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}var E2=0,sm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new am(t),n.set(t,i)),i}},am=class{constructor(t){this.id=E2++,this.code=t,this.usedTimes=0}};function T2(e,t,n,i,s,a,r){let o=new Ll,l=new sm,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,w,k,K,st){let D=K.fog,B=st.geometry,$=b.isMeshStandardMaterial?K.environment:null,Z=(b.isMeshStandardMaterial?n:t).get(b.envMap||$),at=Z&&Z.mapping===hh?Z.image.height:null,J=v[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=et!==void 0?et.length:0,yt=0;B.morphAttributes.position!==void 0&&(yt=1),B.morphAttributes.normal!==void 0&&(yt=2),B.morphAttributes.color!==void 0&&(yt=3);let X,tt,mt,bt;if(J){let ne=Ei[J];X=ne.vertexShader,tt=ne.fragmentShader}else X=b.vertexShader,tt=b.fragmentShader,l.update(b),mt=l.getVertexShaderID(b),bt=l.getFragmentShaderID(b);let St=e.getRenderTarget(),Dt=st.isInstancedMesh===!0,Lt=st.isBatchedMesh===!0,wt=!!b.map,Tt=!!b.matcap,z=!!Z,fe=!!b.aoMap,Mt=!!b.lightMap,Ht=!!b.bumpMap,Ut=!!b.normalMap,oe=!!b.displacementMap,Bt=!!b.emissiveMap,Rt=!!b.metalnessMap,Qt=!!b.roughnessMap,we=b.anisotropy>0,Te=b.clearcoat>0,A=b.iridescence>0,S=b.sheen>0,F=b.transmission>0,ot=we&&!!b.anisotropyMap,it=Te&&!!b.clearcoatMap,lt=Te&&!!b.clearcoatNormalMap,_t=Te&&!!b.clearcoatRoughnessMap,ht=A&&!!b.iridescenceMap,pt=A&&!!b.iridescenceThicknessMap,C=S&&!!b.sheenColorMap,ct=S&&!!b.sheenRoughnessMap,Q=!!b.specularMap,Ct=!!b.specularColorMap,xt=!!b.specularIntensityMap,At=F&&!!b.transmissionMap,I=F&&!!b.thicknessMap,Y=!!b.gradientMap,ut=!!b.alphaMap,L=b.alphaTest>0,nt=!!b.alphaHash,q=!!b.extensions,P=!!B.attributes.uv1,W=!!B.attributes.uv2,ft=!!B.attributes.uv3,gt=qs;return b.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(gt=e.toneMapping),{isWebGL2:u,shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:tt,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:bt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Lt,instancing:Dt,instancingColor:Dt&&st.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:St===null?e.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:as,map:wt,matcap:Tt,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:at,aoMap:fe,lightMap:Mt,bumpMap:Ht,normalMap:Ut,displacementMap:f&&oe,emissiveMap:Bt,normalMapObjectSpace:Ut&&b.normalMapType===UE,normalMapTangentSpace:Ut&&b.normalMapType===mb,metalnessMap:Rt,roughnessMap:Qt,anisotropy:we,anisotropyMap:ot,clearcoat:Te,clearcoatMap:it,clearcoatNormalMap:lt,clearcoatRoughnessMap:_t,iridescence:A,iridescenceMap:ht,iridescenceThicknessMap:pt,sheen:S,sheenColorMap:C,sheenRoughnessMap:ct,specularMap:Q,specularColorMap:Ct,specularIntensityMap:xt,transmission:F,transmissionMap:At,thicknessMap:I,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Jr,alphaMap:ut,alphaTest:L,alphaHash:nt,combine:b.combine,mapUv:wt&&_(b.map.channel),aoMapUv:fe&&_(b.aoMap.channel),lightMapUv:Mt&&_(b.lightMap.channel),bumpMapUv:Ht&&_(b.bumpMap.channel),normalMapUv:Ut&&_(b.normalMap.channel),displacementMapUv:oe&&_(b.displacementMap.channel),emissiveMapUv:Bt&&_(b.emissiveMap.channel),metalnessMapUv:Rt&&_(b.metalnessMap.channel),roughnessMapUv:Qt&&_(b.roughnessMap.channel),anisotropyMapUv:ot&&_(b.anisotropyMap.channel),clearcoatMapUv:it&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:C&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(b.sheenRoughnessMap.channel),specularMapUv:Q&&_(b.specularMap.channel),specularColorMapUv:Ct&&_(b.specularColorMap.channel),specularIntensityMapUv:xt&&_(b.specularIntensityMap.channel),transmissionMapUv:At&&_(b.transmissionMap.channel),thicknessMapUv:I&&_(b.thicknessMap.channel),alphaMapUv:ut&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ut||we),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:P,vertexUv2s:W,vertexUv3s:ft,pointsUvs:st.isPoints===!0&&!!B.attributes.uv&&(wt||ut),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:st.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&k.length>0,shadowMapType:e.shadowMap.type,toneMapping:gt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&ue.getTransfer(b.map.colorSpace)===_e,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ui,flipSided:b.side===hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:q&&b.extensions.derivatives===!0,extensionFragDepth:q&&b.extensions.fragDepth===!0,extensionDrawBuffers:q&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:q&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function h(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let k in b.defines)w.push(k),w.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(y(w,b),g(w,b),w.push(e.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function g(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function x(b){let w=v[b.type],k;if(w){let K=Ei[w];k=mT.clone(K.uniforms)}else k=b.uniforms;return k}function E(b,w){let k;for(let K=0,st=c.length;K<st;K++){let D=c[K];if(D.cacheKey===w){k=D,++k.usedTimes;break}}return k===void 0&&(k=new M2(e,w,b,a),c.push(k)),k}function R(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:E,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:O}}function A2(){let e=new WeakMap;function t(a){let r=e.get(a);return r===void 0&&(r={},e.set(a,r)),r}function n(a){e.delete(a)}function i(a,r,o){e.get(a)[r]=o}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function w2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Zx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function jx(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,v,_,m){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},e[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=m),t++,h}function o(d,f,p,v,_,m){let h=r(d,f,p,v,_,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(d,f,p,v,_,m){let h=r(d,f,p,v,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||w2),i.length>1&&i.sort(f||Zx),s.length>1&&s.sort(f||Zx)}function u(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function R2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new jx,e.set(i,[r])):s>=a.length?(r=new jx,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function C2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new U,color:new ee};break;case"SpotLight":n={position:new U,direction:new U,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":n={color:new ee,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function L2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var U2=0;function D2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function N2(e,t){let n=new C2,i=L2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new U);let a=new U,r=new Fe,o=new Fe;function l(u,d){let f=0,p=0,v=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let _=0,m=0,h=0,y=0,g=0,x=0,E=0,R=0,T=0,O=0,b=0;u.sort(D2);let w=d===!0?Math.PI:1;for(let K=0,st=u.length;K<st;K++){let D=u[K],B=D.color,$=D.intensity,Z=D.distance,at=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=B.r*$*w,p+=B.g*$*w,v+=B.b*$*w;else if(D.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(D.sh.coefficients[J],$);b++}else if(D.isDirectionalLight){let J=n.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){let et=D.shadow,rt=i.get(D);rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,s.directionalShadow[_]=rt,s.directionalShadowMap[_]=at,s.directionalShadowMatrix[_]=D.shadow.matrix,x++}s.directional[_]=J,_++}else if(D.isSpotLight){let J=n.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(B).multiplyScalar($*w),J.distance=Z,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,s.spot[h]=J;let et=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,et.updateMatrices(D),D.castShadow&&O++),s.spotLightMatrix[h]=et.matrix,D.castShadow){let rt=i.get(D);rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,s.spotShadow[h]=rt,s.spotShadowMap[h]=at,R++}h++}else if(D.isRectAreaLight){let J=n.get(D);J.color.copy(B).multiplyScalar($),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=J,y++}else if(D.isPointLight){let J=n.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*w),J.distance=D.distance,J.decay=D.decay,D.castShadow){let et=D.shadow,rt=i.get(D);rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,rt.shadowCameraNear=et.camera.near,rt.shadowCameraFar=et.camera.far,s.pointShadow[m]=rt,s.pointShadowMap[m]=at,s.pointShadowMatrix[m]=D.shadow.matrix,E++}s.point[m]=J,m++}else if(D.isHemisphereLight){let J=n.get(D);J.skyColor.copy(D.color).multiplyScalar($*w),J.groundColor.copy(D.groundColor).multiplyScalar($*w),s.hemi[g]=J,g++}}y>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=v;let k=s.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==h||k.rectAreaLength!==y||k.hemiLength!==g||k.numDirectionalShadows!==x||k.numPointShadows!==E||k.numSpotShadows!==R||k.numSpotMaps!==T||k.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=h,s.rectArea.length=y,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=R+T-O,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=b,k.directionalLength=_,k.pointLength=m,k.spotLength=h,k.rectAreaLength=y,k.hemiLength=g,k.numDirectionalShadows=x,k.numPointShadows=E,k.numSpotShadows=R,k.numSpotMaps=T,k.numLightProbes=b,s.version=U2++)}function c(u,d){let f=0,p=0,v=0,_=0,m=0,h=d.matrixWorldInverse;for(let y=0,g=u.length;y<g;y++){let x=u[y];if(x.isDirectionalLight){let E=s.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),f++}else if(x.isSpotLight){let E=s.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),v++}else if(x.isRectAreaLight){let E=s.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),o.identity(),r.copy(x.matrixWorld),r.premultiply(h),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let E=s.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){let E=s.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:s}}function Jx(e,t){let n=new N2(e,t),i=[],s=[];function a(){i.length=0,s.length=0}function r(d){i.push(d)}function o(d){s.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function O2(e,t){let n=new WeakMap;function i(a,r=0){let o=n.get(a),l;return o===void 0?(l=new Jx(e,t),n.set(a,[l])):r>=o.length?(l=new Jx(e,t),o.push(l)):l=o[r],l}function s(){n=new WeakMap}return{get:i,dispose:s}}var rm=class extends js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},om=class extends js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},P2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I2(e,t,n){let i=new Ul,s=new Pt,a=new Pt,r=new Ee,o=new rm({depthPacking:LE}),l=new om,c={},u=n.maxTextureSize,d={[Zs]:hn,[hn]:Zs,[ui]:ui},f=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:P2,fragmentShader:z2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Fn;v.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new he(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sb;let h=this.type;this.render=function(E,R,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let O=e.getRenderTarget(),b=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Xs),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let K=h!==is&&this.type===is,st=h===is&&this.type!==is;for(let D=0,B=E.length;D<B;D++){let $=E[D],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let at=Z.getFrameExtents();if(s.multiply(at),a.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/at.x),s.x=a.x*at.x,Z.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/at.y),s.y=a.y*at.y,Z.mapSize.y=a.y)),Z.map===null||K===!0||st===!0){let et=this.type!==is?{minFilter:sn,magFilter:sn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new rs(s.x,s.y,et),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}e.setRenderTarget(Z.map),e.clear();let J=Z.getViewportCount();for(let et=0;et<J;et++){let rt=Z.getViewport(et);r.set(a.x*rt.x,a.y*rt.y,a.x*rt.z,a.y*rt.w),k.viewport(r),Z.updateMatrices($,et),i=Z.getFrustum(),x(R,T,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===is&&y(Z,T),Z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(O,b,w)};function y(E,R){let T=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new rs(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(R,null,T,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(R,null,T,p,_,null)}function g(E,R,T,O){let b=null,w=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)b=w;else if(b=T.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=b.uuid,K=R.uuid,st=c[k];st===void 0&&(st={},c[k]=st);let D=st[K];D===void 0&&(D=b.clone(),st[K]=D),b=D}if(b.visible=R.visible,b.wireframe=R.wireframe,O===is?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=e.properties.get(b);k.light=T}return b}function x(E,R,T,O,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===is)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);let K=t.update(E),st=E.material;if(Array.isArray(st)){let D=K.groups;for(let B=0,$=D.length;B<$;B++){let Z=D[B],at=st[Z.materialIndex];if(at&&at.visible){let J=g(E,at,O,b);E.onBeforeShadow(e,E,R,T,K,J,Z),e.renderBufferDirect(T,null,K,J,E,Z),E.onAfterShadow(e,E,R,T,K,J,Z)}}}else if(st.visible){let D=g(E,st,O,b);E.onBeforeShadow(e,E,R,T,K,D,null),e.renderBufferDirect(T,null,K,D,E,null),E.onAfterShadow(e,E,R,T,K,D,null)}}let k=E.children;for(let K=0,st=k.length;K<st;K++)x(k[K],R,T,O,b)}}function B2(e,t,n){let i=n.isWebGL2;function s(){let L=!1,nt=new Ee,q=null,P=new Ee(0,0,0,0);return{setMask:function(W){q!==W&&!L&&(e.colorMask(W,W,W,W),q=W)},setLocked:function(W){L=W},setClear:function(W,ft,gt,jt,ne){ne===!0&&(W*=jt,ft*=jt,gt*=jt),nt.set(W,ft,gt,jt),P.equals(nt)===!1&&(e.clearColor(W,ft,gt,jt),P.copy(nt))},reset:function(){L=!1,q=null,P.set(-1,0,0,0)}}}function a(){let L=!1,nt=null,q=null,P=null;return{setTest:function(W){W?Lt(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(W){nt!==W&&!L&&(e.depthMask(W),nt=W)},setFunc:function(W){if(q!==W){switch(W){case oE:e.depthFunc(e.NEVER);break;case lE:e.depthFunc(e.ALWAYS);break;case cE:e.depthFunc(e.LESS);break;case Hu:e.depthFunc(e.LEQUAL);break;case uE:e.depthFunc(e.EQUAL);break;case hE:e.depthFunc(e.GEQUAL);break;case fE:e.depthFunc(e.GREATER);break;case dE:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}q=W}},setLocked:function(W){L=W},setClear:function(W){P!==W&&(e.clearDepth(W),P=W)},reset:function(){L=!1,nt=null,q=null,P=null}}}function r(){let L=!1,nt=null,q=null,P=null,W=null,ft=null,gt=null,jt=null,ne=null;return{setTest:function(Vt){L||(Vt?Lt(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(Vt){nt!==Vt&&!L&&(e.stencilMask(Vt),nt=Vt)},setFunc:function(Vt,xe,Ve){(q!==Vt||P!==xe||W!==Ve)&&(e.stencilFunc(Vt,xe,Ve),q=Vt,P=xe,W=Ve)},setOp:function(Vt,xe,Ve){(ft!==Vt||gt!==xe||jt!==Ve)&&(e.stencilOp(Vt,xe,Ve),ft=Vt,gt=xe,jt=Ve)},setLocked:function(Vt){L=Vt},setClear:function(Vt){ne!==Vt&&(e.clearStencil(Vt),ne=Vt)},reset:function(){L=!1,nt=null,q=null,P=null,W=null,ft=null,gt=null,jt=null,ne=null}}}let o=new s,l=new a,c=new r,u=new WeakMap,d=new WeakMap,f={},p={},v=new WeakMap,_=[],m=null,h=!1,y=null,g=null,x=null,E=null,R=null,T=null,O=null,b=new ee(0,0,0),w=0,k=!1,K=null,st=null,D=null,B=null,$=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,J=0,et=e.getParameter(e.VERSION);et.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(et)[1]),at=J>=1):et.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),at=J>=2);let rt=null,yt={},X=e.getParameter(e.SCISSOR_BOX),tt=e.getParameter(e.VIEWPORT),mt=new Ee().fromArray(X),bt=new Ee().fromArray(tt);function St(L,nt,q,P){let W=new Uint8Array(4),ft=e.createTexture();e.bindTexture(L,ft),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<q;gt++)i&&(L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY)?e.texImage3D(nt,0,e.RGBA,1,1,P,0,e.RGBA,e.UNSIGNED_BYTE,W):e.texImage2D(nt+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,W);return ft}let Dt={};Dt[e.TEXTURE_2D]=St(e.TEXTURE_2D,e.TEXTURE_2D,1),Dt[e.TEXTURE_CUBE_MAP]=St(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[e.TEXTURE_2D_ARRAY]=St(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Dt[e.TEXTURE_3D]=St(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Lt(e.DEPTH_TEST),l.setFunc(Hu),Bt(!1),Rt(C_),Lt(e.CULL_FACE),Ut(Xs);function Lt(L){f[L]!==!0&&(e.enable(L),f[L]=!0)}function wt(L){f[L]!==!1&&(e.disable(L),f[L]=!1)}function Tt(L,nt){return p[L]!==nt?(e.bindFramebuffer(L,nt),p[L]=nt,i&&(L===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=nt),L===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=nt)),!0):!1}function z(L,nt){let q=_,P=!1;if(L)if(q=v.get(nt),q===void 0&&(q=[],v.set(nt,q)),L.isWebGLMultipleRenderTargets){let W=L.texture;if(q.length!==W.length||q[0]!==e.COLOR_ATTACHMENT0){for(let ft=0,gt=W.length;ft<gt;ft++)q[ft]=e.COLOR_ATTACHMENT0+ft;q.length=W.length,P=!0}}else q[0]!==e.COLOR_ATTACHMENT0&&(q[0]=e.COLOR_ATTACHMENT0,P=!0);else q[0]!==e.BACK&&(q[0]=e.BACK,P=!0);P&&(n.isWebGL2?e.drawBuffers(q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function fe(L){return m!==L?(e.useProgram(L),m=L,!0):!1}let Mt={[Ta]:e.FUNC_ADD,[q1]:e.FUNC_SUBTRACT,[Y1]:e.FUNC_REVERSE_SUBTRACT};if(i)Mt[N_]=e.MIN,Mt[O_]=e.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(Mt[N_]=L.MIN_EXT,Mt[O_]=L.MAX_EXT)}let Ht={[Z1]:e.ZERO,[j1]:e.ONE,[J1]:e.SRC_COLOR,[Vp]:e.SRC_ALPHA,[nE]:e.SRC_ALPHA_SATURATE,[tE]:e.DST_COLOR,[Q1]:e.DST_ALPHA,[K1]:e.ONE_MINUS_SRC_COLOR,[Gp]:e.ONE_MINUS_SRC_ALPHA,[eE]:e.ONE_MINUS_DST_COLOR,[$1]:e.ONE_MINUS_DST_ALPHA,[iE]:e.CONSTANT_COLOR,[sE]:e.ONE_MINUS_CONSTANT_COLOR,[aE]:e.CONSTANT_ALPHA,[rE]:e.ONE_MINUS_CONSTANT_ALPHA};function Ut(L,nt,q,P,W,ft,gt,jt,ne,Vt){if(L===Xs){h===!0&&(wt(e.BLEND),h=!1);return}if(h===!1&&(Lt(e.BLEND),h=!0),L!==X1){if(L!==y||Vt!==k){if((g!==Ta||R!==Ta)&&(e.blendEquation(e.FUNC_ADD),g=Ta,R=Ta),Vt)switch(L){case Jr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case L_:e.blendFunc(e.ONE,e.ONE);break;case U_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case D_:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case L_:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case U_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case D_:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,E=null,T=null,O=null,b.set(0,0,0),w=0,y=L,k=Vt}return}W=W||nt,ft=ft||q,gt=gt||P,(nt!==g||W!==R)&&(e.blendEquationSeparate(Mt[nt],Mt[W]),g=nt,R=W),(q!==x||P!==E||ft!==T||gt!==O)&&(e.blendFuncSeparate(Ht[q],Ht[P],Ht[ft],Ht[gt]),x=q,E=P,T=ft,O=gt),(jt.equals(b)===!1||ne!==w)&&(e.blendColor(jt.r,jt.g,jt.b,ne),b.copy(jt),w=ne),y=L,k=!1}function oe(L,nt){L.side===ui?wt(e.CULL_FACE):Lt(e.CULL_FACE);let q=L.side===hn;nt&&(q=!q),Bt(q),L.blending===Jr&&L.transparent===!1?Ut(Xs):Ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let P=L.stencilWrite;c.setTest(P),P&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),we(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Lt(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){K!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),K=L)}function Rt(L){L!==G1?(Lt(e.CULL_FACE),L!==st&&(L===C_?e.cullFace(e.BACK):L===k1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),st=L}function Qt(L){L!==D&&(at&&e.lineWidth(L),D=L)}function we(L,nt,q){L?(Lt(e.POLYGON_OFFSET_FILL),(B!==nt||$!==q)&&(e.polygonOffset(nt,q),B=nt,$=q)):wt(e.POLYGON_OFFSET_FILL)}function Te(L){L?Lt(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function A(L){L===void 0&&(L=e.TEXTURE0+Z-1),rt!==L&&(e.activeTexture(L),rt=L)}function S(L,nt,q){q===void 0&&(rt===null?q=e.TEXTURE0+Z-1:q=rt);let P=yt[q];P===void 0&&(P={type:void 0,texture:void 0},yt[q]=P),(P.type!==L||P.texture!==nt)&&(rt!==q&&(e.activeTexture(q),rt=q),e.bindTexture(L,nt||Dt[L]),P.type=L,P.texture=nt)}function F(){let L=yt[rt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ot(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(L){mt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function At(L){bt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),bt.copy(L))}function I(L,nt){let q=d.get(nt);q===void 0&&(q=new WeakMap,d.set(nt,q));let P=q.get(L);P===void 0&&(P=e.getUniformBlockIndex(nt,L.name),q.set(L,P))}function Y(L,nt){let P=d.get(nt).get(L);u.get(nt)!==P&&(e.uniformBlockBinding(nt,P,L.__bindingPointIndex),u.set(nt,P))}function ut(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},rt=null,yt={},p={},v=new WeakMap,_=[],m=null,h=!1,y=null,g=null,x=null,E=null,R=null,T=null,O=null,b=new ee(0,0,0),w=0,k=!1,K=null,st=null,D=null,B=null,$=null,mt.set(0,0,e.canvas.width,e.canvas.height),bt.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Lt,disable:wt,bindFramebuffer:Tt,drawBuffers:z,useProgram:fe,setBlending:Ut,setMaterial:oe,setFlipSided:Bt,setCullFace:Rt,setLineWidth:Qt,setPolygonOffset:we,setScissorTest:Te,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:ot,compressedTexImage3D:it,texImage2D:Q,texImage3D:Ct,updateUBOMapping:I,uniformBlockBinding:Y,texStorage2D:C,texStorage3D:ct,texSubImage2D:lt,texSubImage3D:_t,compressedTexSubImage2D:ht,compressedTexSubImage3D:pt,scissor:xt,viewport:At,reset:ut}}function F2(e,t,n,i,s,a,r){let o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,d=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap,_,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return h?new OffscreenCanvas(A,S):Zu("canvas")}function g(A,S,F,ot){let it=1;if((A.width>ot||A.height>ot)&&(it=ot/Math.max(A.width,A.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let lt=S?Yu:Math.floor,_t=lt(it*A.width),ht=lt(it*A.height);_===void 0&&(_=y(_t,ht));let pt=F?y(_t,ht):_;return pt.width=_t,pt.height=ht,pt.getContext("2d").drawImage(A,0,0,_t,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_t+"x"+ht+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Zp(A.width)&&Zp(A.height)}function E(A){return o?!1:A.wrapS!==hi||A.wrapT!==hi||A.minFilter!==sn&&A.minFilter!==$n}function R(A,S){return A.generateMipmaps&&S&&A.minFilter!==sn&&A.minFilter!==$n}function T(A){e.generateMipmap(A)}function O(A,S,F,ot,it=!1){if(o===!1)return S;if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt=S;if(S===e.RED&&(F===e.FLOAT&&(lt=e.R32F),F===e.HALF_FLOAT&&(lt=e.R16F),F===e.UNSIGNED_BYTE&&(lt=e.R8)),S===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(lt=e.R8UI),F===e.UNSIGNED_SHORT&&(lt=e.R16UI),F===e.UNSIGNED_INT&&(lt=e.R32UI),F===e.BYTE&&(lt=e.R8I),F===e.SHORT&&(lt=e.R16I),F===e.INT&&(lt=e.R32I)),S===e.RG&&(F===e.FLOAT&&(lt=e.RG32F),F===e.HALF_FLOAT&&(lt=e.RG16F),F===e.UNSIGNED_BYTE&&(lt=e.RG8)),S===e.RGBA){let _t=it?ku:ue.getTransfer(ot);F===e.FLOAT&&(lt=e.RGBA32F),F===e.HALF_FLOAT&&(lt=e.RGBA16F),F===e.UNSIGNED_BYTE&&(lt=_t===_e?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(lt=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(lt=e.RGB5_A1)}return(lt===e.R16F||lt===e.R32F||lt===e.RG16F||lt===e.RG32F||lt===e.RGBA16F||lt===e.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function b(A,S,F){return R(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==$n?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===sn||A===P_||A===up?e.NEAREST:e.LINEAR}function k(A){let S=A.target;S.removeEventListener("dispose",k),st(S),S.isVideoTexture&&v.delete(S)}function K(A){let S=A.target;S.removeEventListener("dispose",K),B(S)}function st(A){let S=i.get(A);if(S.__webglInit===void 0)return;let F=A.source,ot=m.get(F);if(ot){let it=ot[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&D(A),Object.keys(ot).length===0&&m.delete(F)}i.remove(A)}function D(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let F=A.source,ot=m.get(F);delete ot[S.__cacheKey],r.memory.textures--}function B(A){let S=A.texture,F=i.get(A),ot=i.get(S);if(ot.__webglTexture!==void 0&&(e.deleteTexture(ot.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(F.__webglFramebuffer[it]))for(let lt=0;lt<F.__webglFramebuffer[it].length;lt++)e.deleteFramebuffer(F.__webglFramebuffer[it][lt]);else e.deleteFramebuffer(F.__webglFramebuffer[it]);F.__webglDepthbuffer&&e.deleteRenderbuffer(F.__webglDepthbuffer[it])}else{if(Array.isArray(F.__webglFramebuffer))for(let it=0;it<F.__webglFramebuffer.length;it++)e.deleteFramebuffer(F.__webglFramebuffer[it]);else e.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&e.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&e.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let it=0;it<F.__webglColorRenderbuffer.length;it++)F.__webglColorRenderbuffer[it]&&e.deleteRenderbuffer(F.__webglColorRenderbuffer[it]);F.__webglDepthRenderbuffer&&e.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,lt=S.length;it<lt;it++){let _t=i.get(S[it]);_t.__webglTexture&&(e.deleteTexture(_t.__webglTexture),r.memory.textures--),i.remove(S[it])}i.remove(S),i.remove(A)}let $=0;function Z(){$=0}function at(){let A=$;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),$+=1,A}function J(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function et(A,S){let F=i.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let ot=A.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(F,A,S);return}}n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+S)}function rt(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){Lt(F,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+S)}function yt(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){Lt(F,A,S);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+S)}function X(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){wt(F,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+S)}let tt={[Xp]:e.REPEAT,[hi]:e.CLAMP_TO_EDGE,[qp]:e.MIRRORED_REPEAT},mt={[sn]:e.NEAREST,[P_]:e.NEAREST_MIPMAP_NEAREST,[up]:e.NEAREST_MIPMAP_LINEAR,[$n]:e.LINEAR,[xE]:e.LINEAR_MIPMAP_NEAREST,[wl]:e.LINEAR_MIPMAP_LINEAR},bt={[DE]:e.NEVER,[BE]:e.ALWAYS,[NE]:e.LESS,[gb]:e.LEQUAL,[OE]:e.EQUAL,[IE]:e.GEQUAL,[PE]:e.GREATER,[zE]:e.NOTEQUAL};function St(A,S,F){if(F?(e.texParameteri(A,e.TEXTURE_WRAP_S,tt[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,tt[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,tt[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,mt[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,mt[S.minFilter])):(e.texParameteri(A,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(A,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(S.wrapS!==hi||S.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(A,e.TEXTURE_MAG_FILTER,w(S.magFilter)),e.texParameteri(A,e.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==sn&&S.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ot=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==up&&S.minFilter!==wl||S.type===Ti&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Rl&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(e.texParameterf(A,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Dt(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",k));let ot=S.source,it=m.get(ot);it===void 0&&(it={},m.set(ot,it));let lt=J(S);if(lt!==A.__cacheKey){it[lt]===void 0&&(it[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),it[lt].usedTimes++;let _t=it[A.__cacheKey];_t!==void 0&&(it[A.__cacheKey].usedTimes--,_t.usedTimes===0&&D(S)),A.__cacheKey=lt,A.__webglTexture=it[lt].texture}return F}function Lt(A,S,F){let ot=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=e.TEXTURE_3D);let it=Dt(A,S),lt=S.source;n.bindTexture(ot,A.__webglTexture,e.TEXTURE0+F);let _t=i.get(lt);if(lt.version!==_t.__version||it===!0){n.activeTexture(e.TEXTURE0+F);let ht=ue.getPrimaries(ue.workingColorSpace),pt=S.colorSpace===ti?null:ue.getPrimaries(S.colorSpace),C=S.colorSpace===ti||ht===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let ct=E(S)&&x(S.image)===!1,Q=g(S.image,ct,!1,u);Q=Te(S,Q);let Ct=x(Q)||o,xt=a.convert(S.format,S.colorSpace),At=a.convert(S.type),I=O(S.internalFormat,xt,At,S.colorSpace,S.isVideoTexture);St(ot,S,Ct);let Y,ut=S.mipmaps,L=o&&S.isVideoTexture!==!0&&I!==db,nt=_t.__version===void 0||it===!0,q=b(S,Q,Ct);if(S.isDepthTexture)I=e.DEPTH_COMPONENT,o?S.type===Ti?I=e.DEPTH_COMPONENT32F:S.type===Ws?I=e.DEPTH_COMPONENT24:S.type===wa?I=e.DEPTH24_STENCIL8:I=e.DEPTH_COMPONENT16:S.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ra&&I===e.DEPTH_COMPONENT&&S.type!==Am&&S.type!==Ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ws,At=a.convert(S.type)),S.format===eo&&I===e.DEPTH_COMPONENT&&(I=e.DEPTH_STENCIL,S.type!==wa&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wa,At=a.convert(S.type))),nt&&(L?n.texStorage2D(e.TEXTURE_2D,1,I,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,I,Q.width,Q.height,0,xt,At,null));else if(S.isDataTexture)if(ut.length>0&&Ct){L&&nt&&n.texStorage2D(e.TEXTURE_2D,q,I,ut[0].width,ut[0].height);for(let P=0,W=ut.length;P<W;P++)Y=ut[P],L?n.texSubImage2D(e.TEXTURE_2D,P,0,0,Y.width,Y.height,xt,At,Y.data):n.texImage2D(e.TEXTURE_2D,P,I,Y.width,Y.height,0,xt,At,Y.data);S.generateMipmaps=!1}else L?(nt&&n.texStorage2D(e.TEXTURE_2D,q,I,Q.width,Q.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Q.width,Q.height,xt,At,Q.data)):n.texImage2D(e.TEXTURE_2D,0,I,Q.width,Q.height,0,xt,At,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,q,I,ut[0].width,ut[0].height,Q.depth);for(let P=0,W=ut.length;P<W;P++)Y=ut[P],S.format!==Bn?xt!==null?L?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,Y.width,Y.height,Q.depth,xt,Y.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,P,I,Y.width,Y.height,Q.depth,0,Y.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?n.texSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,Y.width,Y.height,Q.depth,xt,At,Y.data):n.texImage3D(e.TEXTURE_2D_ARRAY,P,I,Y.width,Y.height,Q.depth,0,xt,At,Y.data)}else{L&&nt&&n.texStorage2D(e.TEXTURE_2D,q,I,ut[0].width,ut[0].height);for(let P=0,W=ut.length;P<W;P++)Y=ut[P],S.format!==Bn?xt!==null?L?n.compressedTexSubImage2D(e.TEXTURE_2D,P,0,0,Y.width,Y.height,xt,Y.data):n.compressedTexImage2D(e.TEXTURE_2D,P,I,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?n.texSubImage2D(e.TEXTURE_2D,P,0,0,Y.width,Y.height,xt,At,Y.data):n.texImage2D(e.TEXTURE_2D,P,I,Y.width,Y.height,0,xt,At,Y.data)}else if(S.isDataArrayTexture)L?(nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,q,I,Q.width,Q.height,Q.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xt,At,Q.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,I,Q.width,Q.height,Q.depth,0,xt,At,Q.data);else if(S.isData3DTexture)L?(nt&&n.texStorage3D(e.TEXTURE_3D,q,I,Q.width,Q.height,Q.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xt,At,Q.data)):n.texImage3D(e.TEXTURE_3D,0,I,Q.width,Q.height,Q.depth,0,xt,At,Q.data);else if(S.isFramebufferTexture){if(nt)if(L)n.texStorage2D(e.TEXTURE_2D,q,I,Q.width,Q.height);else{let P=Q.width,W=Q.height;for(let ft=0;ft<q;ft++)n.texImage2D(e.TEXTURE_2D,ft,I,P,W,0,xt,At,null),P>>=1,W>>=1}}else if(ut.length>0&&Ct){L&&nt&&n.texStorage2D(e.TEXTURE_2D,q,I,ut[0].width,ut[0].height);for(let P=0,W=ut.length;P<W;P++)Y=ut[P],L?n.texSubImage2D(e.TEXTURE_2D,P,0,0,xt,At,Y):n.texImage2D(e.TEXTURE_2D,P,I,xt,At,Y);S.generateMipmaps=!1}else L?(nt&&n.texStorage2D(e.TEXTURE_2D,q,I,Q.width,Q.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,xt,At,Q)):n.texImage2D(e.TEXTURE_2D,0,I,xt,At,Q);R(S,Ct)&&T(ot),_t.__version=lt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function wt(A,S,F){if(S.image.length!==6)return;let ot=Dt(A,S),it=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let lt=i.get(it);if(it.version!==lt.__version||ot===!0){n.activeTexture(e.TEXTURE0+F);let _t=ue.getPrimaries(ue.workingColorSpace),ht=S.colorSpace===ti?null:ue.getPrimaries(S.colorSpace),pt=S.colorSpace===ti||_t===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let C=S.isCompressedTexture||S.image[0].isCompressedTexture,ct=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let P=0;P<6;P++)!C&&!ct?Q[P]=g(S.image[P],!1,!0,c):Q[P]=ct?S.image[P].image:S.image[P],Q[P]=Te(S,Q[P]);let Ct=Q[0],xt=x(Ct)||o,At=a.convert(S.format,S.colorSpace),I=a.convert(S.type),Y=O(S.internalFormat,At,I,S.colorSpace),ut=o&&S.isVideoTexture!==!0,L=lt.__version===void 0||ot===!0,nt=b(S,Ct,xt);St(e.TEXTURE_CUBE_MAP,S,xt);let q;if(C){ut&&L&&n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Y,Ct.width,Ct.height);for(let P=0;P<6;P++){q=Q[P].mipmaps;for(let W=0;W<q.length;W++){let ft=q[W];S.format!==Bn?At!==null?ut?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W,0,0,ft.width,ft.height,At,ft.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W,Y,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W,0,0,ft.width,ft.height,At,I,ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W,Y,ft.width,ft.height,0,At,I,ft.data)}}}else{q=S.mipmaps,ut&&L&&(q.length>0&&nt++,n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Y,Q[0].width,Q[0].height));for(let P=0;P<6;P++)if(ct){ut?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Q[P].width,Q[P].height,At,I,Q[P].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Y,Q[P].width,Q[P].height,0,At,I,Q[P].data);for(let W=0;W<q.length;W++){let gt=q[W].image[P].image;ut?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W+1,0,0,gt.width,gt.height,At,I,gt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W+1,Y,gt.width,gt.height,0,At,I,gt.data)}}else{ut?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,At,I,Q[P]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Y,At,I,Q[P]);for(let W=0;W<q.length;W++){let ft=q[W];ut?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W+1,0,0,At,I,ft.image[P]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,W+1,Y,At,I,ft.image[P])}}}R(S,xt)&&T(e.TEXTURE_CUBE_MAP),lt.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Tt(A,S,F,ot,it,lt){let _t=a.convert(F.format,F.colorSpace),ht=a.convert(F.type),pt=O(F.internalFormat,_t,ht,F.colorSpace);if(!i.get(S).__hasExternalTextures){let ct=Math.max(1,S.width>>lt),Q=Math.max(1,S.height>>lt);it===e.TEXTURE_3D||it===e.TEXTURE_2D_ARRAY?n.texImage3D(it,lt,pt,ct,Q,S.depth,0,_t,ht,null):n.texImage2D(it,lt,pt,ct,Q,0,_t,ht,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Qt(S)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,it,i.get(F).__webglTexture,0,Rt(S)):(it===e.TEXTURE_2D||it>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ot,it,i.get(F).__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function z(A,S,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ot=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(F||Qt(S)){let it=S.depthTexture;it&&it.isDepthTexture&&(it.type===Ti?ot=e.DEPTH_COMPONENT32F:it.type===Ws&&(ot=e.DEPTH_COMPONENT24));let lt=Rt(S);Qt(S)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt,ot,S.width,S.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,ot,S.width,S.height)}else e.renderbufferStorage(e.RENDERBUFFER,ot,S.width,S.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let ot=Rt(S);F&&Qt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,e.DEPTH24_STENCIL8,S.width,S.height):Qt(S)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,e.DEPTH24_STENCIL8,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,A)}else{let ot=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<ot.length;it++){let lt=ot[it],_t=a.convert(lt.format,lt.colorSpace),ht=a.convert(lt.type),pt=O(lt.internalFormat,_t,ht,lt.colorSpace),C=Rt(S);F&&Qt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,C,pt,S.width,S.height):Qt(S)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,C,pt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,pt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function fe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),et(S.depthTexture,0);let ot=i.get(S.depthTexture).__webglTexture,it=Rt(S);if(S.depthTexture.format===Ra)Qt(S)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ot,0,it):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ot,0);else if(S.depthTexture.format===eo)Qt(S)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ot,0,it):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Mt(A){let S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");fe(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]=e.createRenderbuffer(),z(S.__webglDepthbuffer[ot],A,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=e.createRenderbuffer(),z(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(A,S,F){let ot=i.get(A);S!==void 0&&Tt(ot.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Mt(A)}function Ut(A){let S=A.texture,F=i.get(A),ot=i.get(S);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture()),ot.__version=S.version,r.memory.textures++);let it=A.isWebGLCubeRenderTarget===!0,lt=A.isWebGLMultipleRenderTargets===!0,_t=x(A)||o;if(it){F.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ht]=[];for(let pt=0;pt<S.mipmaps.length;pt++)F.__webglFramebuffer[ht][pt]=e.createFramebuffer()}else F.__webglFramebuffer[ht]=e.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)F.__webglFramebuffer[ht]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(lt)if(s.drawBuffers){let ht=A.texture;for(let pt=0,C=ht.length;pt<C;pt++){let ct=i.get(ht[pt]);ct.__webglTexture===void 0&&(ct.__webglTexture=e.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Qt(A)===!1){let ht=lt?S:[S];F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pt=0;pt<ht.length;pt++){let C=ht[pt];F.__webglColorRenderbuffer[pt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[pt]);let ct=a.convert(C.format,C.colorSpace),Q=a.convert(C.type),Ct=O(C.internalFormat,ct,Q,C.colorSpace,A.isXRRenderTarget===!0),xt=Rt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,Ct,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,F.__webglColorRenderbuffer[pt])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),z(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(it){n.bindTexture(e.TEXTURE_CUBE_MAP,ot.__webglTexture),St(e.TEXTURE_CUBE_MAP,S,_t);for(let ht=0;ht<6;ht++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)Tt(F.__webglFramebuffer[ht][pt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else Tt(F.__webglFramebuffer[ht],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);R(S,_t)&&T(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(lt){let ht=A.texture;for(let pt=0,C=ht.length;pt<C;pt++){let ct=ht[pt],Q=i.get(ct);n.bindTexture(e.TEXTURE_2D,Q.__webglTexture),St(e.TEXTURE_2D,ct,_t),Tt(F.__webglFramebuffer,A,ct,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,0),R(ct,_t)&&T(e.TEXTURE_2D)}n.unbindTexture()}else{let ht=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ht=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ht,ot.__webglTexture),St(ht,S,_t),o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)Tt(F.__webglFramebuffer[pt],A,S,e.COLOR_ATTACHMENT0,ht,pt);else Tt(F.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ht,0);R(S,_t)&&T(ht),n.unbindTexture()}A.depthBuffer&&Mt(A)}function oe(A){let S=x(A)||o,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ot=0,it=F.length;ot<it;ot++){let lt=F[ot];if(R(lt,S)){let _t=A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,ht=i.get(lt).__webglTexture;n.bindTexture(_t,ht),T(_t),n.unbindTexture()}}}function Bt(A){if(o&&A.samples>0&&Qt(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,ot=A.height,it=e.COLOR_BUFFER_BIT,lt=[],_t=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(A),pt=A.isWebGLMultipleRenderTargets===!0;if(pt)for(let C=0;C<S.length;C++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let C=0;C<S.length;C++){lt.push(e.COLOR_ATTACHMENT0+C),A.depthBuffer&&lt.push(_t);let ct=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(ct===!1&&(A.depthBuffer&&(it|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=e.STENCIL_BUFFER_BIT)),pt&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[C]),ct===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[_t]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_t])),pt){let Q=i.get(S[C]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Q,0)}e.blitFramebuffer(0,0,F,ot,0,0,F,ot,it,e.NEAREST),p&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),pt)for(let C=0;C<S.length;C++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,ht.__webglColorRenderbuffer[C]);let ct=i.get(S[C]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.TEXTURE_2D,ct,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Rt(A){return Math.min(d,A.samples)}function Qt(A){let S=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function we(A){let S=r.render.frame;v.get(A)!==S&&(v.set(A,S),A.update())}function Te(A,S){let F=A.colorSpace,ot=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Yp||F!==as&&F!==ti&&(ue.getTransfer(F)===_e?o===!1?t.has("EXT_sRGB")===!0&&ot===Bn?(A.format=Yp,A.minFilter=$n,A.generateMipmaps=!1):S=ju.sRGBToLinear(S):(ot!==Bn||it!==Ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=at,this.resetTextureUnits=Z,this.setTexture2D=et,this.setTexture2DArray=rt,this.setTexture3D=yt,this.setTextureCube=X,this.rebindTextures=Ht,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Qt}function H2(e,t,n){let i=n.isWebGL2;function s(a,r=ti){let o,l=ue.getTransfer(r);if(a===Ys)return e.UNSIGNED_BYTE;if(a===lb)return e.UNSIGNED_SHORT_4_4_4_4;if(a===cb)return e.UNSIGNED_SHORT_5_5_5_1;if(a===bE)return e.BYTE;if(a===SE)return e.SHORT;if(a===Am)return e.UNSIGNED_SHORT;if(a===ob)return e.INT;if(a===Ws)return e.UNSIGNED_INT;if(a===Ti)return e.FLOAT;if(a===Rl)return i?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===ME)return e.ALPHA;if(a===Bn)return e.RGBA;if(a===EE)return e.LUMINANCE;if(a===TE)return e.LUMINANCE_ALPHA;if(a===Ra)return e.DEPTH_COMPONENT;if(a===eo)return e.DEPTH_STENCIL;if(a===Yp)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===AE)return e.RED;if(a===ub)return e.RED_INTEGER;if(a===wE)return e.RG;if(a===hb)return e.RG_INTEGER;if(a===fb)return e.RGBA_INTEGER;if(a===hp||a===fp||a===dp||a===pp)if(l===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===hp)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===fp)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===dp)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===pp)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===hp)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===fp)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===dp)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===pp)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===z_||a===I_||a===B_||a===F_)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===z_)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===I_)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===B_)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===F_)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===db)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===H_||a===V_)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===H_)return l===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===V_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===G_||a===k_||a===W_||a===X_||a===q_||a===Y_||a===Z_||a===j_||a===J_||a===K_||a===Q_||a===$_||a===tx||a===ex)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===G_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===k_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===W_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===X_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===q_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Y_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Z_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===j_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===J_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===K_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Q_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===$_)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===tx)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ex)return l===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===mp||a===nx||a===ix)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===mp)return l===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===nx)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ix)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===RE||a===sx||a===ax||a===rx)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===mp)return o.COMPRESSED_RED_RGTC1_EXT;if(a===sx)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ax)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===rx)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wa?i?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):e[a]!==void 0?e[a]:null}return{convert:s}}var lm=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jr=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},V2={type:"move"},Al=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let _ of t.hand.values()){let m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},cm=class extends wi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null,_=n.getContextAttributes(),m=null,h=null,y=[],g=[],x=new Pt,E=null,R=new un;R.layers.enable(1),R.viewport=new Ee;let T=new un;T.layers.enable(2),T.viewport=new Ee;let O=[R,T],b=new lm;b.layers.enable(1),b.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=y[X];return tt===void 0&&(tt=new Al,y[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=y[X];return tt===void 0&&(tt=new Al,y[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=y[X];return tt===void 0&&(tt=new Al,y[X]=tt),tt.getHandSpace()};function K(X){let tt=g.indexOf(X.inputSource);if(tt===-1)return;let mt=y[tt];mt!==void 0&&(mt.update(X.inputSource,X.frame,c||r),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function st(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){let tt=g[X];tt!==null&&(g[X]=null,y[X].disconnect(tt))}w=null,k=null,t.setRenderTarget(m),p=null,f=null,d=null,s=null,h=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",st),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new rs(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Ys,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,mt=null,bt=null;_.depth&&(bt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=_.stencil?eo:Ra,mt=_.stencil?wa:Ws);let St={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:a};d=new XRWebGLBinding(s,n),f=d.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),h=new rs(f.textureWidth,f.textureHeight,{format:Bn,type:Ys,depthTexture:new sh(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Dt=t.properties.get(h);Dt.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(X){for(let tt=0;tt<X.removed.length;tt++){let mt=X.removed[tt],bt=g.indexOf(mt);bt>=0&&(g[bt]=null,y[bt].disconnect(mt))}for(let tt=0;tt<X.added.length;tt++){let mt=X.added[tt],bt=g.indexOf(mt);if(bt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=g.length){g.push(mt),bt=Dt;break}else if(g[Dt]===null){g[Dt]=mt,bt=Dt;break}if(bt===-1)break}let St=y[bt];St&&St.connect(mt)}}let B=new U,$=new U;function Z(X,tt,mt){B.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);let bt=B.distanceTo($),St=tt.projectionMatrix.elements,Dt=mt.projectionMatrix.elements,Lt=St[14]/(St[10]-1),wt=St[14]/(St[10]+1),Tt=(St[9]+1)/St[5],z=(St[9]-1)/St[5],fe=(St[8]-1)/St[0],Mt=(Dt[8]+1)/Dt[0],Ht=Lt*fe,Ut=Lt*Mt,oe=bt/(-fe+Mt),Bt=oe*-fe;tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Bt),X.translateZ(oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let Rt=Lt+oe,Qt=wt+oe,we=Ht-Bt,Te=Ut+(bt-Bt),A=Tt*wt/Qt*Rt,S=z*wt/Qt*Rt;X.projectionMatrix.makePerspective(we,Te,A,S,Rt,Qt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function at(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;b.near=T.near=R.near=X.near,b.far=T.far=R.far=X.far,(w!==b.near||k!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,k=b.far);let tt=X.parent,mt=b.cameras;at(b,tt);for(let bt=0;bt<mt.length;bt++)at(mt[bt],tt);mt.length===2?Z(b,R,T):b.projectionMatrix.copy(R.projectionMatrix),J(X,b,tt)};function J(X,tt,mt){mt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let et=null;function rt(X,tt){if(u=tt.getViewerPose(c||r),v=tt,u!==null){let mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(h,p.framebuffer),t.setRenderTarget(h));let bt=!1;mt.length!==b.cameras.length&&(b.cameras.length=0,bt=!0);for(let St=0;St<mt.length;St++){let Dt=mt[St],Lt=null;if(p!==null)Lt=p.getViewport(Dt);else{let Tt=d.getViewSubImage(f,Dt);Lt=Tt.viewport,St===0&&(t.setRenderTargetTextures(h,Tt.colorTexture,f.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(h))}let wt=O[St];wt===void 0&&(wt=new un,wt.layers.enable(St),wt.viewport=new Ee,O[St]=wt),wt.matrix.fromArray(Dt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Dt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),St===0&&(b.matrix.copy(wt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),bt===!0&&b.cameras.push(wt)}}for(let mt=0;mt<y.length;mt++){let bt=g[mt],St=y[mt];bt!==null&&St!==void 0&&St.update(bt,tt,c||r)}et&&et(X,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}let yt=new xb;yt.setAnimationLoop(rt),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}};function G2(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,_b(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,y,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),d(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(a(m,h),v(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),_(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,y,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===hn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===hn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let y=t.get(h).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;let g=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),t.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let y=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k2(e,t,n,i){let s={},a={},r=[],o=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){let x=g.program;i.uniformBlockBinding(y,x)}function c(y,g){let x=s[y.id];x===void 0&&(v(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));let E=g.program;i.updateUBOMapping(y,E);let R=t.render.frame;a[y.id]!==R&&(f(y),a[y.id]=R)}function u(y){let g=d();y.__bindingPointIndex=g;let x=e.createBuffer(),E=y.__size,R=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,E,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,x),x}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let g=s[y.id],x=y.uniforms,E=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let R=0,T=x.length;R<T;R++){let O=x[R];if(p(O,R,E)===!0){let b=O.__offset,w=Array.isArray(O.value)?O.value:[O.value],k=0;for(let K=0;K<w.length;K++){let st=w[K],D=_(st);typeof st=="number"?(O.__data[0]=st,e.bufferSubData(e.UNIFORM_BUFFER,b+k,O.__data)):st.isMatrix3?(O.__data[0]=st.elements[0],O.__data[1]=st.elements[1],O.__data[2]=st.elements[2],O.__data[3]=st.elements[0],O.__data[4]=st.elements[3],O.__data[5]=st.elements[4],O.__data[6]=st.elements[5],O.__data[7]=st.elements[0],O.__data[8]=st.elements[6],O.__data[9]=st.elements[7],O.__data[10]=st.elements[8],O.__data[11]=st.elements[0]):(st.toArray(O.__data,k),k+=D.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,b,O.__data)}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,g,x){let E=y.value;if(x[g]===void 0){if(typeof E=="number")x[g]=E;else{let R=Array.isArray(E)?E:[E],T=[];for(let O=0;O<R.length;O++)T.push(R[O].clone());x[g]=T}return!0}else if(typeof E=="number"){if(x[g]!==E)return x[g]=E,!0}else{let R=Array.isArray(x[g])?x[g]:[x[g]],T=Array.isArray(E)?E:[E];for(let O=0;O<R.length;O++){let b=R[O];if(b.equals(T[O])===!1)return b.copy(T[O]),!0}}return!1}function v(y){let g=y.uniforms,x=0,E=16,R=0;for(let T=0,O=g.length;T<O;T++){let b=g[T],w={boundary:0,storage:0},k=Array.isArray(b.value)?b.value:[b.value];for(let K=0,st=k.length;K<st;K++){let D=k[K],B=_(D);w.boundary+=B.boundary,w.storage+=B.storage}if(b.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=x,T>0){R=x%E;let K=E-R;R!==0&&K-w.boundary<0&&(x+=E-R,b.__offset=x)}x+=w.storage}return R=x%E,R>0&&(x+=E-R),y.__size=x,y.__cache={},this}function _(y){let g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function m(y){let g=y.target;g.removeEventListener("dispose",m);let x=r.indexOf(g.__bindingPointIndex);r.splice(x,1),e.deleteBuffer(s[g.id]),delete s[g.id],delete a[g.id]}function h(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var Dl=class{constructor(t={}){let{canvas:n=$E(),context:i=null,depth:s=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;let p=new Uint32Array(4),v=new Int32Array(4),_=null,m=null,h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=qs,this.toneMappingExposure=1;let g=this,x=!1,E=0,R=0,T=null,O=-1,b=null,w=new Ee,k=new Ee,K=null,st=new ee(0),D=0,B=n.width,$=n.height,Z=1,at=null,J=null,et=new Ee(0,0,B,$),rt=new Ee(0,0,B,$),yt=!1,X=new Ul,tt=!1,mt=!1,bt=null,St=new Fe,Dt=new Pt,Lt=new U,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return T===null?Z:1}let z=i;function fe(M,N){for(let V=0;V<M.length;V++){let G=M[V],H=n.getContext(G,N);if(H!==null)return H}return null}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r159"),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",nt,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),z=fe(N,M),z===null)throw fe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Mt,Ht,Ut,oe,Bt,Rt,Qt,we,Te,A,S,F,ot,it,lt,_t,ht,pt,C,ct,Q,Ct,xt,At;function I(){Mt=new cR(z),Ht=new iR(z,Mt,t),Mt.init(Ht),Ct=new H2(z,Mt,Ht),Ut=new B2(z,Mt,Ht),oe=new fR(z),Bt=new A2,Rt=new F2(z,Mt,Ut,Bt,Ht,Ct,oe),Qt=new aR(g),we=new lR(g),Te=new xT(z,Ht),xt=new eR(z,Mt,Te,Ht),A=new uR(z,Te,oe,xt),S=new gR(z,A,Te,oe),C=new mR(z,Ht,Rt),_t=new sR(Bt),F=new T2(g,Qt,we,Mt,Ht,xt,_t),ot=new G2(g,Bt),it=new R2,lt=new O2(Mt,Ht),pt=new tR(g,Qt,we,Ut,S,f,l),ht=new I2(g,S,Ht),At=new k2(z,oe,Ht,Ut),ct=new nR(z,Mt,oe,Ht),Q=new hR(z,Mt,oe,Ht),oe.programs=F.programs,g.capabilities=Ht,g.extensions=Mt,g.properties=Bt,g.renderLists=it,g.shadowMap=ht,g.state=Ut,g.info=oe}I();let Y=new cm(g,z);this.xr=Y,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=Mt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Mt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(B,$,!1))},this.getSize=function(M){return M.set(B,$)},this.setSize=function(M,N,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,$=N,n.width=Math.floor(M*Z),n.height=Math.floor(N*Z),V===!0&&(n.style.width=M+"px",n.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(B*Z,$*Z).floor()},this.setDrawingBufferSize=function(M,N,V){B=M,$=N,Z=V,n.width=Math.floor(M*V),n.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(et)},this.setViewport=function(M,N,V,G){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,N,V,G),Ut.viewport(w.copy(et).multiplyScalar(Z).floor())},this.getScissor=function(M){return M.copy(rt)},this.setScissor=function(M,N,V,G){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,N,V,G),Ut.scissor(k.copy(rt).multiplyScalar(Z).floor())},this.getScissorTest=function(){return yt},this.setScissorTest=function(M){Ut.setScissorTest(yt=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(M=!0,N=!0,V=!0){let G=0;if(M){let H=!1;if(T!==null){let vt=T.texture.format;H=vt===fb||vt===hb||vt===ub}if(H){let vt=T.texture.type,Et=vt===Ys||vt===Ws||vt===Am||vt===wa||vt===lb||vt===cb,Nt=pt.getClearColor(),It=pt.getClearAlpha(),qt=Nt.r,Gt=Nt.g,Wt=Nt.b;Et?(p[0]=qt,p[1]=Gt,p[2]=Wt,p[3]=It,z.clearBufferuiv(z.COLOR,0,p)):(v[0]=qt,v[1]=Gt,v[2]=Wt,v[3]=It,z.clearBufferiv(z.COLOR,0,v))}else G|=z.COLOR_BUFFER_BIT}N&&(G|=z.DEPTH_BUFFER_BIT),V&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),it.dispose(),lt.dispose(),Bt.dispose(),Qt.dispose(),we.dispose(),S.dispose(),xt.dispose(),At.dispose(),F.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ne),Y.removeEventListener("sessionend",Vt),bt&&(bt.dispose(),bt=null),xe.stop()};function ut(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let M=oe.autoReset,N=ht.enabled,V=ht.autoUpdate,G=ht.needsUpdate,H=ht.type;I(),oe.autoReset=M,ht.enabled=N,ht.autoUpdate=V,ht.needsUpdate=G,ht.type=H}function nt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function q(M){let N=M.target;N.removeEventListener("dispose",q),P(N)}function P(M){W(M),Bt.remove(M)}function W(M){let N=Bt.get(M).programs;N!==void 0&&(N.forEach(function(V){F.releaseProgram(V)}),M.isShaderMaterial&&F.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,G,H,vt){N===null&&(N=wt);let Et=H.isMesh&&H.matrixWorld.determinant()<0,Nt=Vb(M,N,V,G,H);Ut.setMaterial(G,Et);let It=V.index,qt=1;if(G.wireframe===!0){if(It=A.getWireframeAttribute(V),It===void 0)return;qt=2}let Gt=V.drawRange,Wt=V.attributes.position,Ue=Gt.start*qt,Tn=(Gt.start+Gt.count)*qt;vt!==null&&(Ue=Math.max(Ue,vt.start*qt),Tn=Math.min(Tn,(vt.start+vt.count)*qt)),It!==null?(Ue=Math.max(Ue,0),Tn=Math.min(Tn,It.count)):Wt!=null&&(Ue=Math.max(Ue,0),Tn=Math.min(Tn,Wt.count));let Ye=Tn-Ue;if(Ye<0||Ye===1/0)return;xt.setup(H,G,Nt,V,It);let Ui,Ae=ct;if(It!==null&&(Ui=Te.get(It),Ae=Q,Ae.setIndex(Ui)),H.isMesh)G.wireframe===!0?(Ut.setLineWidth(G.wireframeLinewidth*Tt()),Ae.setMode(z.LINES)):Ae.setMode(z.TRIANGLES);else if(H.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),Ut.setLineWidth(Yt*Tt()),H.isLineSegments?Ae.setMode(z.LINES):H.isLineLoop?Ae.setMode(z.LINE_LOOP):Ae.setMode(z.LINE_STRIP)}else H.isPoints?Ae.setMode(z.POINTS):H.isSprite&&Ae.setMode(z.TRIANGLES);if(H.isBatchedMesh)Ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Ae.renderInstances(Ue,Ye,H.count);else if(V.isInstancedBufferGeometry){let Yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xh=Math.min(V.instanceCount,Yt);Ae.renderInstances(Ue,Ye,xh)}else Ae.render(Ue,Ye)};function ft(M,N,V){M.transparent===!0&&M.side===ui&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,Js(M,N,V),M.side=Zs,M.needsUpdate=!0,Js(M,N,V),M.side=ui):Js(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),m=lt.get(V),m.init(),y.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),M!==V&&M.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(g._useLegacyLights);let G=new Set;return M.traverse(function(H){let vt=H.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let Nt=vt[Et];ft(Nt,V,H),G.add(Nt)}else ft(vt,V,H),G.add(vt)}),y.pop(),m=null,G},this.compileAsync=function(M,N,V=null){let G=this.compile(M,N,V);return new Promise(H=>{function vt(){if(G.forEach(function(Et){Bt.get(Et).currentProgram.isReady()&&G.delete(Et)}),G.size===0){H(M);return}setTimeout(vt,10)}Mt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let gt=null;function jt(M){gt&&gt(M)}function ne(){xe.stop()}function Vt(){xe.start()}let xe=new xb;xe.setAnimationLoop(jt),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(M){gt=M,Y.setAnimationLoop(M),M===null?xe.stop():xe.start()},Y.addEventListener("sessionstart",ne),Y.addEventListener("sessionend",Vt),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,N,T),m=lt.get(M,y.length),m.init(),y.push(m),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(St),mt=this.localClippingEnabled,tt=_t.init(this.clippingPlanes,mt),_=it.get(M,h.length),_.init(),h.push(_),Ve(M,N,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(at,J),this.info.render.frame++,tt===!0&&_t.beginShadows();let V=m.state.shadowsArray;if(ht.render(V,M,N),tt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(_,M),m.setupLights(g._useLegacyLights),N.isArrayCamera){let G=N.cameras;for(let H=0,vt=G.length;H<vt;H++){let Et=G[H];cs(_,M,Et,Et.viewport)}}else cs(_,M,N);T!==null&&(Rt.updateMultisampleRenderTarget(T),Rt.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,N),xt.resetDefaultState(),O=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Ve(M,N,V,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){G&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(St);let Et=S.update(M),Nt=M.material;Nt.visible&&_.push(M,Et,Nt,V,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){let Et=S.update(M),Nt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Lt.copy(Et.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(St)),Array.isArray(Nt)){let It=Et.groups;for(let qt=0,Gt=It.length;qt<Gt;qt++){let Wt=It[qt],Ue=Nt[Wt.materialIndex];Ue&&Ue.visible&&_.push(M,Et,Ue,V,Lt.z,Wt)}}else Nt.visible&&_.push(M,Et,Nt,V,Lt.z,null)}}let vt=M.children;for(let Et=0,Nt=vt.length;Et<Nt;Et++)Ve(vt[Et],N,V,G)}function cs(M,N,V,G){let H=M.opaque,vt=M.transmissive,Et=M.transparent;m.setupLightsView(V),tt===!0&&_t.setGlobalState(g.clippingPlanes,V),vt.length>0&&fo(H,vt,N,V),G&&Ut.viewport(w.copy(G)),H.length>0&&Li(H,N,V),vt.length>0&&Li(vt,N,V),Et.length>0&&Li(Et,N,V),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function fo(M,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let vt=Ht.isWebGL2;bt===null&&(bt=new rs(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Rl:Ys,minFilter:wl,samples:vt?4:0})),g.getDrawingBufferSize(Dt),vt?bt.setSize(Dt.x,Dt.y):bt.setSize(Yu(Dt.x),Yu(Dt.y));let Et=g.getRenderTarget();g.setRenderTarget(bt),g.getClearColor(st),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();let Nt=g.toneMapping;g.toneMapping=qs,Li(M,V,G),Rt.updateMultisampleRenderTarget(bt),Rt.updateRenderTargetMipmap(bt);let It=!1;for(let qt=0,Gt=N.length;qt<Gt;qt++){let Wt=N[qt],Ue=Wt.object,Tn=Wt.geometry,Ye=Wt.material,Ui=Wt.group;if(Ye.side===ui&&Ue.layers.test(G.layers)){let Ae=Ye.side;Ye.side=hn,Ye.needsUpdate=!0,mi(Ue,V,G,Tn,Ye,Ui),Ye.side=Ae,Ye.needsUpdate=!0,It=!0}}It===!0&&(Rt.updateMultisampleRenderTarget(bt),Rt.updateRenderTargetMipmap(bt)),g.setRenderTarget(Et),g.setClearColor(st,D),g.toneMapping=Nt}function Li(M,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,vt=M.length;H<vt;H++){let Et=M[H],Nt=Et.object,It=Et.geometry,qt=G===null?Et.material:G,Gt=Et.group;Nt.layers.test(V.layers)&&mi(Nt,N,V,It,qt,Gt)}}function mi(M,N,V,G,H,vt){M.onBeforeRender(g,N,V,G,H,vt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(g,N,V,G,M,vt),H.transparent===!0&&H.side===ui&&H.forceSinglePass===!1?(H.side=hn,H.needsUpdate=!0,g.renderBufferDirect(V,N,G,H,M,vt),H.side=Zs,H.needsUpdate=!0,g.renderBufferDirect(V,N,G,H,M,vt),H.side=ui):g.renderBufferDirect(V,N,G,H,M,vt),M.onAfterRender(g,N,V,G,H,vt)}function Js(M,N,V){N.isScene!==!0&&(N=wt);let G=Bt.get(M),H=m.state.lights,vt=m.state.shadowsArray,Et=H.state.version,Nt=F.getParameters(M,H.state,vt,N,V),It=F.getProgramCacheKey(Nt),qt=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?we:Qt).get(M.envMap||G.environment),qt===void 0&&(M.addEventListener("dispose",q),qt=new Map,G.programs=qt);let Gt=qt.get(It);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===Et)return Ia(M,Nt),Gt}else Nt.uniforms=F.getUniforms(M),M.onBuild(V,Nt,g),M.onBeforeCompile(Nt,g),Gt=F.acquireProgram(Nt,It),qt.set(It,Gt),G.uniforms=Nt.uniforms;let Wt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Wt.clippingPlanes=_t.uniform),Ia(M,Nt),G.needsLights=kb(M),G.lightsStateVersion=Et,G.needsLights&&(Wt.ambientLightColor.value=H.state.ambient,Wt.lightProbe.value=H.state.probe,Wt.directionalLights.value=H.state.directional,Wt.directionalLightShadows.value=H.state.directionalShadow,Wt.spotLights.value=H.state.spot,Wt.spotLightShadows.value=H.state.spotShadow,Wt.rectAreaLights.value=H.state.rectArea,Wt.ltc_1.value=H.state.rectAreaLTC1,Wt.ltc_2.value=H.state.rectAreaLTC2,Wt.pointLights.value=H.state.point,Wt.pointLightShadows.value=H.state.pointShadow,Wt.hemisphereLights.value=H.state.hemi,Wt.directionalShadowMap.value=H.state.directionalShadowMap,Wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Wt.spotShadowMap.value=H.state.spotShadowMap,Wt.spotLightMatrix.value=H.state.spotLightMatrix,Wt.spotLightMap.value=H.state.spotLightMap,Wt.pointShadowMap.value=H.state.pointShadowMap,Wt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function us(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Qr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Ia(M,N){let V=Bt.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Vb(M,N,V,G,H){N.isScene!==!0&&(N=wt),Rt.resetTextureUnits();let vt=N.fog,Et=G.isMeshStandardMaterial?N.environment:null,Nt=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:as,It=(G.isMeshStandardMaterial?we:Qt).get(G.envMap||Et),qt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Wt=!!V.morphAttributes.position,Ue=!!V.morphAttributes.normal,Tn=!!V.morphAttributes.color,Ye=qs;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ye=g.toneMapping);let Ui=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ae=Ui!==void 0?Ui.length:0,Yt=Bt.get(G),xh=m.state.lights;if(tt===!0&&(mt===!0||M!==b)){let Hn=M===b&&G.id===O;_t.setState(G,M,Hn)}let Re=!1;G.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==xh.state.version||Yt.outputColorSpace!==Nt||H.isBatchedMesh&&Yt.batching===!1||!H.isBatchedMesh&&Yt.batching===!0||H.isInstancedMesh&&Yt.instancing===!1||!H.isInstancedMesh&&Yt.instancing===!0||H.isSkinnedMesh&&Yt.skinning===!1||!H.isSkinnedMesh&&Yt.skinning===!0||H.isInstancedMesh&&Yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Yt.instancingColor===!1&&H.instanceColor!==null||Yt.envMap!==It||G.fog===!0&&Yt.fog!==vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==_t.numPlanes||Yt.numIntersection!==_t.numIntersection)||Yt.vertexAlphas!==qt||Yt.vertexTangents!==Gt||Yt.morphTargets!==Wt||Yt.morphNormals!==Ue||Yt.morphColors!==Tn||Yt.toneMapping!==Ye||Ht.isWebGL2===!0&&Yt.morphTargetsCount!==Ae)&&(Re=!0):(Re=!0,Yt.__version=G.version);let Ks=Yt.currentProgram;Re===!0&&(Ks=Js(G,N,H));let zm=!1,po=!1,bh=!1,an=Ks.getUniforms(),Qs=Yt.uniforms;if(Ut.useProgram(Ks.program)&&(zm=!0,po=!0,bh=!0),G.id!==O&&(O=G.id,po=!0),zm||b!==M){an.setValue(z,"projectionMatrix",M.projectionMatrix),an.setValue(z,"viewMatrix",M.matrixWorldInverse);let Hn=an.map.cameraPosition;Hn!==void 0&&Hn.setValue(z,Lt.setFromMatrixPosition(M.matrixWorld)),Ht.logarithmicDepthBuffer&&an.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&an.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,po=!0,bh=!0)}if(H.isSkinnedMesh){an.setOptional(z,H,"bindMatrix"),an.setOptional(z,H,"bindMatrixInverse");let Hn=H.skeleton;Hn&&(Ht.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),an.setValue(z,"boneTexture",Hn.boneTexture,Rt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(an.setOptional(z,H,"batchingTexture"),an.setValue(z,"batchingTexture",H._matricesTexture,Rt));let Sh=V.morphAttributes;if((Sh.position!==void 0||Sh.normal!==void 0||Sh.color!==void 0&&Ht.isWebGL2===!0)&&C.update(H,V,Ks),(po||Yt.receiveShadow!==H.receiveShadow)&&(Yt.receiveShadow=H.receiveShadow,an.setValue(z,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Qs.envMap.value=It,Qs.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),po&&(an.setValue(z,"toneMappingExposure",g.toneMappingExposure),Yt.needsLights&&Gb(Qs,bh),vt&&G.fog===!0&&ot.refreshFogUniforms(Qs,vt),ot.refreshMaterialUniforms(Qs,G,Z,$,bt),Qr.upload(z,us(Yt),Qs,Rt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qr.upload(z,us(Yt),Qs,Rt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&an.setValue(z,"center",H.center),an.setValue(z,"modelViewMatrix",H.modelViewMatrix),an.setValue(z,"normalMatrix",H.normalMatrix),an.setValue(z,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Hn=G.uniformsGroups;for(let Mh=0,Wb=Hn.length;Mh<Wb;Mh++)if(Ht.isWebGL2){let Im=Hn[Mh];At.update(Im,Ks),At.bind(Im,Ks)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ks}function Gb(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function kb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,N,V){Bt.get(M.texture).__webglTexture=N,Bt.get(M.depthTexture).__webglTexture=V;let G=Bt.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){let V=Bt.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){T=M,E=N,R=V;let G=!0,H=null,vt=!1,Et=!1;if(M){let It=Bt.get(M);It.__useDefaultFramebuffer!==void 0?(Ut.bindFramebuffer(z.FRAMEBUFFER,null),G=!1):It.__webglFramebuffer===void 0?Rt.setupRenderTarget(M):It.__hasExternalTextures&&Rt.rebindTextures(M,Bt.get(M.texture).__webglTexture,Bt.get(M.depthTexture).__webglTexture);let qt=M.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Et=!0);let Gt=Bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?H=Gt[N][V]:H=Gt[N],vt=!0):Ht.isWebGL2&&M.samples>0&&Rt.useMultisampledRTT(M)===!1?H=Bt.get(M).__webglMultisampledFramebuffer:Array.isArray(Gt)?H=Gt[V]:H=Gt,w.copy(M.viewport),k.copy(M.scissor),K=M.scissorTest}else w.copy(et).multiplyScalar(Z).floor(),k.copy(rt).multiplyScalar(Z).floor(),K=yt;if(Ut.bindFramebuffer(z.FRAMEBUFFER,H)&&Ht.drawBuffers&&G&&Ut.drawBuffers(M,H),Ut.viewport(w),Ut.scissor(k),Ut.setScissorTest(K),vt){let It=Bt.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,V)}else if(Et){let It=Bt.get(M.texture),qt=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.__webglTexture,V||0,qt)}O=-1},this.readRenderTargetPixels=function(M,N,V,G,H,vt,Et){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Nt=Nt[Et]),Nt){Ut.bindFramebuffer(z.FRAMEBUFFER,Nt);try{let It=M.texture,qt=It.format,Gt=It.type;if(qt!==Bn&&Ct.convert(qt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Gt===Rl&&(Mt.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Gt!==Ys&&Ct.convert(Gt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===Ti&&(Ht.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&V>=0&&V<=M.height-H&&z.readPixels(N,V,G,H,Ct.convert(qt),Ct.convert(Gt),vt)}finally{let It=T!==null?Bt.get(T).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(M,N,V=0){let G=Math.pow(2,-V),H=Math.floor(N.image.width*G),vt=Math.floor(N.image.height*G);Rt.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,M.x,M.y,H,vt),Ut.unbindTexture()},this.copyTextureToTexture=function(M,N,V,G=0){let H=N.image.width,vt=N.image.height,Et=Ct.convert(V.format),Nt=Ct.convert(V.type);Rt.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,M.x,M.y,H,vt,Et,Nt,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,Et,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,G,M.x,M.y,Et,Nt,N.image),G===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(M,N,V,G,H=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=M.max.x-M.min.x+1,Et=M.max.y-M.min.y+1,Nt=M.max.z-M.min.z+1,It=Ct.convert(G.format),qt=Ct.convert(G.type),Gt;if(G.isData3DTexture)Rt.setTexture3D(G,0),Gt=z.TEXTURE_3D;else if(G.isDataArrayTexture)Rt.setTexture2DArray(G,0),Gt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let Wt=z.getParameter(z.UNPACK_ROW_LENGTH),Ue=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Tn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ye=z.getParameter(z.UNPACK_SKIP_ROWS),Ui=z.getParameter(z.UNPACK_SKIP_IMAGES),Ae=V.isCompressedTexture?V.mipmaps[0]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,M.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,M.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,M.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(Gt,H,N.x,N.y,N.z,vt,Et,Nt,It,qt,Ae.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Gt,H,N.x,N.y,N.z,vt,Et,Nt,It,Ae.data)):z.texSubImage3D(Gt,H,N.x,N.y,N.z,vt,Et,Nt,It,qt,Ae),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Tn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ye),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ui),H===0&&G.generateMipmaps&&z.generateMipmap(Gt),Ut.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Rt.setTextureCube(M,0):M.isData3DTexture?Rt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Rt.setTexture2DArray(M,0):Rt.setTexture2D(M,0),Ut.unbindTexture()},this.resetState=function(){E=0,R=0,T=null,Ut.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=t===wm?"display-p3":"srgb",n.unpackColorSpace=ue.workingColorSpace===fh?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?Ca:pb}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ca?We:as}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},um=class extends Dl{};um.prototype.isWebGL1Renderer=!0;var ro=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};var Nl=class extends ei{constructor(t=null,n=1,i=1,s,a,r,o,l,c=sn,u=sn,d,f){super(null,r,o,l,c,u,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ol=class extends js{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kx=new Fe,hm=new La,Iu=new no,Bu=new U,ah=class extends fn{constructor(t=new Fn,n=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Iu.copy(i.boundingSphere),Iu.applyMatrix4(s),Iu.radius+=a,t.ray.intersectsSphere(Iu)===!1)return;Kx.copy(s).invert(),hm.copy(t.ray).applyMatrix4(Kx);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let v=f,_=p;v<_;v++){let m=c.getX(v);Bu.fromBufferAttribute(d,m),Qx(Bu,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=f,_=p;v<_;v++)Bu.fromBufferAttribute(d,v),Qx(Bu,v,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Qx(e,t,n,i,s,a,r){let o=hm.distanceSqToPoint(e);if(o<n){let l=new U;hm.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}var Da=class extends js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mb,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Fu(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function W2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var oo=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fm=class extends oo{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ox,endingEnd:ox}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case lx:a=t,o=2*n-i;break;case cx:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lx:r=t,l=2*i-n;break;case cx:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(i-n)/(s-n),_=v*v,m=_*v,h=-f*m+2*f*_-f*v,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*v+1,g=(-1-p)*m+(1.5+p)*_+.5*v,x=p*m-p*_;for(let E=0;E!==o;++E)a[E]=h*r[u+E]+y*r[c+E]+g*r[l+E]+x*r[d+E];return a}},dm=class extends oo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*u;return a}},pm=class extends oo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fu(n,this.TimeBufferType),this.values=Fu(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Fu(t.times,Array),values:Fu(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Vu:n=this.InterpolantFactoryMethodDiscrete;break;case Gu:n=this.InterpolantFactoryMethodLinear;break;case gp:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vu;case this.InterpolantFactoryMethodLinear:return Gu;case this.InterpolantFactoryMethodSmooth:return gp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&W2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gp,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let v=0;v!==i;++v){let _=n[d+v];if(_!==n[f+v]||_!==n[p+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Gu;var Na=class extends pi{};Na.prototype.ValueTypeName="bool";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Vu;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var mm=class extends pi{};mm.prototype.ValueTypeName="color";var gm=class extends pi{};gm.prototype.ValueTypeName="number";var ym=class extends oo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)fi.slerpFlat(a,0,r,c-o,r,c,l);return a}},Pl=class extends pi{InterpolantFactoryMethodLinear(t){return new ym(this.times,this.values,this.getValueSize(),t)}};Pl.prototype.ValueTypeName="quaternion";Pl.prototype.DefaultInterpolation=Gu;Pl.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends pi{};Oa.prototype.ValueTypeName="string";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=Vu;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var vm=class extends pi{};vm.prototype.ValueTypeName="vector";var _m=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}},X2=new _m,xm=class{constructor(t){this.manager=t!==void 0?t:X2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xm.DEFAULT_MATERIAL_NAME="__DEFAULT";var zl=class extends fn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}},rh=class extends zl{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Fp=new Fe,$x=new U,tb=new U,oh=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;$x.setFromMatrixPosition(t.matrixWorld),n.position.copy($x),tb.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(tb),n.updateMatrixWorld(),Fp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var eb=new Fe,bl=new U,Hp=new U,bm=class extends oh{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),bl.setFromMatrixPosition(t.matrixWorld),i.position.copy(bl),Hp.copy(i.position),Hp.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Hp),i.updateMatrixWorld(),s.makeTranslation(-bl.x,-bl.y,-bl.z),eb.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eb)}},lh=class extends zl{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Sm=class extends oh{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Il=class extends zl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ch=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nb(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=nb();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};function nb(){return(typeof performance>"u"?Date:performance).now()}var Lm="\\[\\]\\.:\\/",q2=new RegExp("["+Lm+"]","g"),Um="[^"+Lm+"]",Y2="[^"+Lm.replace("\\.","")+"]",Z2=/((?:WC+[\/:])*)/.source.replace("WC",Um),j2=/(WCOD+)?/.source.replace("WCOD",Y2),J2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Um),K2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Um),Q2=new RegExp("^"+Z2+j2+J2+K2+"$"),$2=["material","materials","bones","map"],Mm=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q2,"")}static parseTrackName(t){let n=Q2.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);$2.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Mm;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xC=new Float32Array(1);var uh=class{constructor(t,n,i=0,s=1/0){this.ray=new La(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(t,n=!0,i=[]){return Em(t,this,i,n),i.sort(ib),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Em(t[s],this,i,n);return i.sort(ib),i}};function ib(e,t){return e.distance-t.distance}function Em(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){let s=e.children;for(let a=0,r=s.length;a<r;a++)Em(s[a],t,n,!0)}}var Pa=class{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(cn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"159"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="159");var Ab={type:"change"},Dm={type:"start"},wb={type:"end"},ph=new La,Rb=new ci,eC=Math.cos(70*ni.DEG2RAD),mh=class extends wi{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",S),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ab),i.update(),a=s.NONE},this.update=(function(){let C=new U,ct=new fi().setFromUnitVectors(t.up,new U(0,1,0)),Q=ct.clone().invert(),Ct=new U,xt=new fi,At=new U,I=2*Math.PI;return function(ut=null){let L=i.object.position;C.copy(L).sub(i.target),C.applyQuaternion(ct),o.setFromVector3(C),i.autoRotate&&a===s.NONE&&k(b(ut)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let nt=i.minAzimuthAngle,q=i.maxAzimuthAngle;isFinite(nt)&&isFinite(q)&&(nt<-Math.PI?nt+=I:nt>Math.PI&&(nt-=I),q<-Math.PI?q+=I:q>Math.PI&&(q-=I),nt<=q?o.theta=Math.max(nt,Math.min(q,o.theta)):o.theta=o.theta>(nt+q)/2?Math.max(nt,o.theta):Math.min(q,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=J(o.radius):o.radius=J(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(Q),L.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let P=!1;if(i.zoomToCursor&&R){let W=null;if(i.object.isPerspectiveCamera){let ft=C.length();W=J(ft*c);let gt=ft-W;i.object.position.addScaledVector(x,gt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let ft=new U(E.x,E.y,0);ft.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),P=!0;let gt=new U(E.x,E.y,0);gt.unproject(i.object),i.object.position.sub(gt).add(ft),i.object.updateMatrixWorld(),W=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;W!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(W).add(i.object.position):(ph.origin.copy(i.object.position),ph.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ph.direction))<eC?t.lookAt(i.target):(Rb.setFromNormalAndCoplanarPoint(i.object.up,i.target),ph.intersectPlane(Rb,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),P=!0);return c=1,R=!1,P||Ct.distanceToSquared(i.object.position)>r||8*(1-xt.dot(i.object.quaternion))>r||At.distanceToSquared(i.target)>0?(i.dispatchEvent(Ab),Ct.copy(i.object.position),xt.copy(i.object.quaternion),At.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",it),i.domElement.removeEventListener("pointerdown",Bt),i.domElement.removeEventListener("pointercancel",Qt),i.domElement.removeEventListener("wheel",A),i.domElement.removeEventListener("pointermove",Rt),i.domElement.removeEventListener("pointerup",Qt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",S),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=s.NONE,r=1e-6,o=new Pa,l=new Pa,c=1,u=new U,d=new Pt,f=new Pt,p=new Pt,v=new Pt,_=new Pt,m=new Pt,h=new Pt,y=new Pt,g=new Pt,x=new U,E=new Pt,R=!1,T=[],O={};function b(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function k(C){l.theta-=C}function K(C){l.phi-=C}let st=(function(){let C=new U;return function(Q,Ct){C.setFromMatrixColumn(Ct,0),C.multiplyScalar(-Q),u.add(C)}})(),D=(function(){let C=new U;return function(Q,Ct){i.screenSpacePanning===!0?C.setFromMatrixColumn(Ct,1):(C.setFromMatrixColumn(Ct,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Q),u.add(C)}})(),B=(function(){let C=new U;return function(Q,Ct){let xt=i.domElement;if(i.object.isPerspectiveCamera){let At=i.object.position;C.copy(At).sub(i.target);let I=C.length();I*=Math.tan(i.object.fov/2*Math.PI/180),st(2*Q*I/xt.clientHeight,i.object.matrix),D(2*Ct*I/xt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(st(Q*(i.object.right-i.object.left)/i.object.zoom/xt.clientWidth,i.object.matrix),D(Ct*(i.object.top-i.object.bottom)/i.object.zoom/xt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function $(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function at(C){if(!i.zoomToCursor)return;R=!0;let ct=i.domElement.getBoundingClientRect(),Q=C.clientX-ct.left,Ct=C.clientY-ct.top,xt=ct.width,At=ct.height;E.x=Q/xt*2-1,E.y=-(Ct/At)*2+1,x.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function et(C){d.set(C.clientX,C.clientY)}function rt(C){at(C),h.set(C.clientX,C.clientY)}function yt(C){v.set(C.clientX,C.clientY)}function X(C){f.set(C.clientX,C.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let ct=i.domElement;k(2*Math.PI*p.x/ct.clientHeight),K(2*Math.PI*p.y/ct.clientHeight),d.copy(f),i.update()}function tt(C){y.set(C.clientX,C.clientY),g.subVectors(y,h),g.y>0?$(w()):g.y<0&&Z(w()),h.copy(y),i.update()}function mt(C){_.set(C.clientX,C.clientY),m.subVectors(_,v).multiplyScalar(i.panSpeed),B(m.x,m.y),v.copy(_),i.update()}function bt(C){at(C),C.deltaY<0?Z(w()):C.deltaY>0&&$(w()),i.update()}function St(C){let ct=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),ct=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),ct=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),ct=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),ct=!0;break}ct&&(C.preventDefault(),i.update())}function Dt(){if(T.length===1)d.set(T[0].pageX,T[0].pageY);else{let C=.5*(T[0].pageX+T[1].pageX),ct=.5*(T[0].pageY+T[1].pageY);d.set(C,ct)}}function Lt(){if(T.length===1)v.set(T[0].pageX,T[0].pageY);else{let C=.5*(T[0].pageX+T[1].pageX),ct=.5*(T[0].pageY+T[1].pageY);v.set(C,ct)}}function wt(){let C=T[0].pageX-T[1].pageX,ct=T[0].pageY-T[1].pageY,Q=Math.sqrt(C*C+ct*ct);h.set(0,Q)}function Tt(){i.enableZoom&&wt(),i.enablePan&&Lt()}function z(){i.enableZoom&&wt(),i.enableRotate&&Dt()}function fe(C){if(T.length==1)f.set(C.pageX,C.pageY);else{let Q=pt(C),Ct=.5*(C.pageX+Q.x),xt=.5*(C.pageY+Q.y);f.set(Ct,xt)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let ct=i.domElement;k(2*Math.PI*p.x/ct.clientHeight),K(2*Math.PI*p.y/ct.clientHeight),d.copy(f)}function Mt(C){if(T.length===1)_.set(C.pageX,C.pageY);else{let ct=pt(C),Q=.5*(C.pageX+ct.x),Ct=.5*(C.pageY+ct.y);_.set(Q,Ct)}m.subVectors(_,v).multiplyScalar(i.panSpeed),B(m.x,m.y),v.copy(_)}function Ht(C){let ct=pt(C),Q=C.pageX-ct.x,Ct=C.pageY-ct.y,xt=Math.sqrt(Q*Q+Ct*Ct);y.set(0,xt),g.set(0,Math.pow(y.y/h.y,i.zoomSpeed)),$(g.y),h.copy(y)}function Ut(C){i.enableZoom&&Ht(C),i.enablePan&&Mt(C)}function oe(C){i.enableZoom&&Ht(C),i.enableRotate&&fe(C)}function Bt(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Rt),i.domElement.addEventListener("pointerup",Qt)),lt(C),C.pointerType==="touch"?F(C):we(C))}function Rt(C){i.enabled!==!1&&(C.pointerType==="touch"?ot(C):Te(C))}function Qt(C){_t(C),T.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Rt),i.domElement.removeEventListener("pointerup",Qt)),i.dispatchEvent(wb),a=s.NONE}function we(C){let ct;switch(C.button){case 0:ct=i.mouseButtons.LEFT;break;case 1:ct=i.mouseButtons.MIDDLE;break;case 2:ct=i.mouseButtons.RIGHT;break;default:ct=-1}switch(ct){case Ri.DOLLY:if(i.enableZoom===!1)return;rt(C),a=s.DOLLY;break;case Ri.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;yt(C),a=s.PAN}else{if(i.enableRotate===!1)return;et(C),a=s.ROTATE}break;case Ri.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;et(C),a=s.ROTATE}else{if(i.enablePan===!1)return;yt(C),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(Dm)}function Te(C){switch(a){case s.ROTATE:if(i.enableRotate===!1)return;X(C);break;case s.DOLLY:if(i.enableZoom===!1)return;tt(C);break;case s.PAN:if(i.enablePan===!1)return;mt(C);break}}function A(C){i.enabled===!1||i.enableZoom===!1||a!==s.NONE||(C.preventDefault(),i.dispatchEvent(Dm),bt(C),i.dispatchEvent(wb))}function S(C){i.enabled===!1||i.enablePan===!1||St(C)}function F(C){switch(ht(C),T.length){case 1:switch(i.touches.ONE){case Ci.ROTATE:if(i.enableRotate===!1)return;Dt(),a=s.TOUCH_ROTATE;break;case Ci.PAN:if(i.enablePan===!1)return;Lt(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(i.touches.TWO){case Ci.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Tt(),a=s.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(Dm)}function ot(C){switch(ht(C),a){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;fe(C),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;Mt(C),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ut(C),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(C),i.update();break;default:a=s.NONE}}function it(C){i.enabled!==!1&&C.preventDefault()}function lt(C){T.push(C)}function _t(C){delete O[C.pointerId];for(let ct=0;ct<T.length;ct++)if(T[ct].pointerId==C.pointerId){T.splice(ct,1);return}}function ht(C){let ct=O[C.pointerId];ct===void 0&&(ct=new Pt,O[C.pointerId]=ct),ct.set(C.pageX,C.pageY)}function pt(C){let ct=C.pointerId===T[0].pointerId?T[1]:T[0];return O[ct.pointerId]}i.domElement.addEventListener("contextmenu",it),i.domElement.addEventListener("pointerdown",Bt),i.domElement.addEventListener("pointercancel",Qt),i.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}};var gh=class extends ro{constructor(t=null){super();let n=new Ua;n.deleteAttribute("uv");let i=new Da({side:hn}),s=new Da,a=5;t!==null&&t._useLegacyLights===!1&&(a=900);let r=new lh(16777215,a,28,2);r.position.set(.418,16.199,.3),this.add(r);let o=new he(n,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new he(n,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new he(n,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new he(n,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let d=new he(n,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let f=new he(n,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let p=new he(n,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let v=new he(n,uo(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);let _=new he(n,uo(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new he(n,uo(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let h=new he(n,uo(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let y=new he(n,uo(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let g=new he(n,uo(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function uo(e){let t=new io;return t.color.setScalar(e),t}function Lb(e,t=!1){let n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),a={},r={},o=e[0].morphTargetsRelative,l=new Fn,c=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p])}if(t){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(n){let u=0,d=[];for(let f=0;f<e.length;++f){let p=e[f].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+u);u+=e[f].attributes.position.count}l.setIndex(d)}for(let u in a){let d=Cb(a[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in r){let d=r[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let p=[];for(let _=0;_<r[u].length;++_)p.push(r[u][_][f]);let v=Cb(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function Cb(e){let t,n,i,s=-1,a=0;for(let c=0;c<e.length;++c){let u=e[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.array.length}let r=new t(a),o=0;for(let c=0;c<e.length;++c)r.set(e[c].array,o),o+=e[c].array.length;let l=new He(r,n,i);return s!==void 0&&(l.gpuType=s),l}function Ub(e,t=1){let n=e.map(f=>({id:f.id,system:f.system,width:Math.max(.035,f.bounds[1][0]-f.bounds[0][0])+.04,height:Math.max(.035,f.bounds[1][1]-f.bounds[0][1])+.04})),i=n.reduce((f,p)=>f+p.width*p.height,0),s=Math.max(.3,...n.map(f=>f.width)),a=Math.max(s,Math.sqrt(i*Math.max(.5,Math.min(1.5,t)))*1.18);n.sort((f,p)=>p.height-f.height||f.id.localeCompare(p.id));let r=new Map,o=0,l=0,c=0,u=0;for(let f of n)o>0&&o+f.width>a&&(o=0,l+=c,c=0),r.set(f.id,{x:o+f.width/2,y:-l-f.height/2,width:f.width,height:f.height}),o+=f.width,u=Math.max(u,o),c=Math.max(c,f.height);let d=l+c;return r.forEach(f=>{f.x-=u/2,f.y+=d/2}),{cells:r,width:u,height:d}}async function Db(e,t,n){if(!e.ok)throw new Error("An anatomy file could not be loaded.");let i=await e.arrayBuffer(),s=new Uint8Array(i,0,Math.min(2,i.byteLength)),r=n&&s[0]===31&&s[1]===139?await new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():i;if(r.byteLength!==t)throw new Error("An anatomy file was incomplete. Please reload the viewer.");return r}var yh=class{active=new Map;blocked=!1;down(t,n,i,s){this.active.size===0&&(this.blocked=!1),this.active.set(t,{x:n,y:i,threshold:s}),this.active.size>1&&(this.blocked=!0)}move(t,n,i){let s=this.active.get(t);s&&Math.hypot(n-s.x,i-s.y)>s.threshold&&(this.blocked=!0)}up(t,n,i){this.move(t,n,i);let s=this.active.has(t)&&this.active.size===1&&!this.blocked;return this.active.delete(t),s}cancel(t){this.active.delete(t),this.blocked=!0}};var za=[{id:"skeletal",name:"Skeleton",color:"#e2d9ba",description:"Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles. Their internal tissue also stores minerals and produces blood cells."},{id:"muscular",name:"Muscles",color:"#a85b50",description:"Skeletal muscles generate movement by pulling on their attachments. Together with tendons, they move joints, stabilize posture, and produce heat."},{id:"cardiac",name:"Heart",color:"#b96760",description:"The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circuits."},{id:"sensory",name:"Sensory organs",color:"#b0c8ce",description:"These structures contribute to special senses, including sight, hearing, and balance. Their specialized tissues detect stimuli and work with the nervous system to convey information."},{id:"arterial",name:"Arteries",color:"#c05245",description:"The heart drives blood through the circulation. Arteries carry blood away from the heart to supply tissues or, in the pulmonary circuit, to the lungs."},{id:"venous",name:"Veins",color:"#527c9f",description:"Veins return blood toward the heart. Superficial and deep networks collect blood from the tissues; the pulmonary veins bring oxygenated blood back from the lungs."},{id:"nervous",name:"Nervous system",color:"#d8b565",description:"The brain, spinal cord, and peripheral nerves carry and process signals. They support sensation, movement, coordination, and automatic regulation of body functions."},{id:"respiratory",name:"Respiratory",color:"#b98991",description:"The airways conduct air to the lungs, where oxygen and carbon dioxide move between air and blood. Breathing depends on pressure changes produced by respiratory muscles."},{id:"digestive",name:"Digestive",color:"#b8916b",description:"The digestive tract breaks down food, absorbs nutrients and water, and moves waste onward. Accessory organs contribute bile and digestive enzymes."},{id:"urinary",name:"Urinary",color:"#b47961",description:"The kidneys filter blood and regulate fluid, electrolyte, and acid\u2013base balance. Urine travels through the ureters to the bladder and exits through the urethra."},{id:"lymphatic",name:"Lymphatic",color:"#879f7c",description:"Lymphatic vessels return excess tissue fluid to the circulation. Lymph nodes and other lymphoid organs support immune surveillance and responses."},{id:"endocrine",name:"Endocrine",color:"#c5a09a",description:"Endocrine organs release hormones into the blood to coordinate processes such as metabolism, growth, stress responses, and reproduction."},{id:"reproductive",name:"Reproductive",color:"#bda098",description:"The male reproductive structures represented here contribute to sperm production, maturation, transport, and the production of sex hormones."},{id:"integumentary",name:"Body surface",color:"#ba9b7d",description:"The body surface provides an outer anatomical reference. The integumentary system forms a protective barrier and contributes to sensation and temperature regulation."},{id:"connective",name:"Connective tissue",color:"#aec3bb",description:"Cartilage, ligaments, and other connective tissues support, connect, and separate structures. Their roles include stabilizing joints and distributing mechanical loads."}];var zb=$s(Bl(),1);function Nm({atlas:e,state:t,onSelect:n,onProgress:i,onError:s}){let a=(0,ho.useRef)(null),r=(0,ho.useRef)(t),o=(0,ho.useRef)(n);return r.current=t,o.current=n,(0,ho.useEffect)(()=>{let l=a.current,c=!1,u=0,d=!0,f=!1,p="",v=-1,_="",m="",h=0,y=null,g=new AbortController,x;try{x=new Dl({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{s("This browser could not start the 3D viewer. Please try a browser with WebGL enabled.");return}x.setPixelRatio(Math.min(devicePixelRatio,innerWidth<768?1.5:2)),x.setClearColor("#f1e9db"),x.outputColorSpace=We,x.toneMapping=Tm,x.toneMappingExposure=1.12,l.appendChild(x.domElement),x.domElement.setAttribute("aria-label","Corpo humano 3D. Arraste para girar e toque para selecionar. Use as setas para girar, mais e menos para zoom, e Home para restaurar."),x.domElement.tabIndex=0;let E=new ro,R=new un(34,1,.005,100),T=new mh(R,x.domElement);R.position.set(1.4,1.05,3.6),T.target.set(0,.85,0),T.enableDamping=!0,T.dampingFactor=.085,T.minDistance=.07,T.maxDistance=40,T.maxPolarAngle=Math.PI*.96,T.addEventListener("change",()=>{d=!0});let O=I=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","=","-","Home"].includes(I.key))return;I.preventDefault();let Y=R.position.clone().sub(T.target),ut=new Pa().setFromVector3(Y);I.key==="ArrowLeft"&&(ut.theta-=.12),I.key==="ArrowRight"&&(ut.theta+=.12),I.key==="ArrowUp"&&(ut.phi=Math.max(.05,ut.phi-.12)),I.key==="ArrowDown"&&(ut.phi=Math.min(Math.PI-.05,ut.phi+.12)),(I.key==="+"||I.key==="=")&&(ut.radius=Math.max(.07,ut.radius*.9)),I.key==="-"&&(ut.radius=Math.min(40,ut.radius*1.1)),R.position.copy(T.target).add(new U().setFromSpherical(ut)),I.key==="Home"&&Rt(r.current.view,h),T.update(),d=!0};x.domElement.addEventListener("keydown",O);let b=new ao(x),w=new gh,k=b.fromScene(w,.04);E.environment=k.texture,w.dispose(),b.dispose(),E.add(new rh(16777215,10988722,1.05));let K=new Il(16775924,2.3);K.position.set(-2,4,3),E.add(K);let st=new Il(15331583,1.8);st.position.set(2,2,-3),E.add(st);let D=ni.ceilPowerOfTwo(e.parts.length),B=new Float32Array(D*4),$=new Nl(B,D,1,Bn,Ti);$.needsUpdate=!0;let Z=new Uint8Array(D*4),at=new Nl(Z,D,1);at.needsUpdate=!0;let J=[],et=[],rt=[],yt=e.parts.map(I=>new U().fromArray(I.bounds[0]).add(new U().fromArray(I.bounds[1])).multiplyScalar(.5)),X=[],tt=e.parts.map(I=>new di(new U().fromArray(I.bounds[0]),new U().fromArray(I.bounds[1]))),mt=1,bt=1,St=new Float32Array(e.parts.length*3),Dt=new Fn;Dt.setAttribute("position",new He(St,3));let Lt=new Ol({color:6583435,size:5,sizeAttenuation:!1,transparent:!0,opacity:.72,depthTest:!1});Lt.onBeforeCompile=I=>{I.fragmentShader=I.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (distance(gl_PointCoord, vec2(0.5)) > 0.5) discard;`)};let wt=new ah(Dt,Lt);wt.frustumCulled=!1,wt.renderOrder=10,wt.visible=!1,E.add(wt);let Tt=document.createElement("div");Tt.className="hbe-hover",Tt.setAttribute("role","tooltip"),Tt.hidden=!0,l.appendChild(Tt);let z=[],fe=new U,Mt=(I,Y,ut)=>{let L=-1,nt=1/0;for(let q of z){let P=Math.max(q.left-I,0,I-q.right),W=Math.max(q.top-Y,0,Y-q.bottom),ft=Math.hypot(P,W);if(ft>ut)continue;let gt=ft+Math.hypot(q.x-I,q.y-Y)*.025;gt<nt&&(nt=gt,L=q.index)}return L},Ht=I=>{let Y=new Da({color:za.find(ut=>ut.id===I)?.color??"#aebbb8",metalness:.08,roughness:.53,side:ui,transparent:I==="integumentary",opacity:I==="integumentary"?.1:1,depthWrite:I!=="integumentary"});return Y.onBeforeCompile=ut=>{ut.uniforms.partState={value:$},ut.uniforms.selectionState={value:at},ut.uniforms.stateWidth={value:D},ut.vertexShader=`attribute float partIndex; uniform sampler2D partState; uniform sampler2D selectionState; uniform float stateWidth; varying float partVisible; varying float partSelected;
`+ut.vertexShader,ut.vertexShader=ut.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec2 stateUv = vec2((partIndex + 0.5) / stateWidth, 0.5); vec4 state = texture2D(partState, stateUv); transformed += state.xyz; partVisible = state.w; partSelected = texture2D(selectionState, stateUv).r;`),ut.fragmentShader=`varying float partVisible; varying float partSelected;
`+ut.fragmentShader,ut.fragmentShader=ut.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (partVisible < 0.5) discard;`),ut.fragmentShader=ut.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.85, 0.78), partSelected * 0.75);`)},J.push(Y),Y},Ut=new Map(za.map(I=>[I.id,Ht(I.id)])),oe=0,Bt=async I=>{let Y=e.chunks[I],ut=!!Y.gzip&&typeof DecompressionStream<"u",L=await fetch(ut?Y.gzip:Y.url,{signal:g.signal}),nt=await Db(L,Y.bytes,ut);if(c)return;let q=new Map;e.parts.forEach((P,W)=>{if(P.chunk!==I)return;let ft=new Fn;ft.setAttribute("position",new He(new Float32Array(nt,P.positions,P.vertexCount*3),3)),ft.setAttribute("normal",new He(new Int16Array(nt,P.normals,P.vertexCount*3),3,!0)),ft.setIndex(new He(new Uint32Array(nt,P.indices,P.indexCount),1)),ft.boundingBox=tt[W].clone(),ft.computeBoundingSphere();let gt=new he(ft);gt.matrixAutoUpdate=!1,rt[W]=gt,et.push(ft),ft.setAttribute("partIndex",new He(new Float32Array(P.vertexCount).fill(W),1));let jt=q.get(P.system)??[];jt.push(ft),q.set(P.system,jt)}),q.forEach((P,W)=>{let ft=Lb(P,!1);if(!ft)throw new Error("Could not assemble anatomy geometry.");et.push(ft);let gt=new he(ft,Ut.get(W));gt.frustumCulled=!1,E.add(gt)}),y=null,oe++,i(Math.round(oe/e.chunks.length*100)),d=!0};(async()=>{try{let I=0;await Promise.all(Array.from({length:3},async()=>{for(;I<e.chunks.length;){let Y=I++;await Bt(Y)}})),c||(f=!0,d=!0)}catch(I){c||s(I instanceof Error?I.message:"Could not load the anatomy.")}})();let Rt=(I,Y=0)=>{R.clearViewOffset();let ut=Math.max(2.6,1.95/(2*Math.tan(ni.degToRad(R.fov/2)))*Math.max(1,.7/R.aspect)),L=Math.max(bt,mt/R.aspect)/(2*Math.tan(ni.degToRad(R.fov/2)))*1.15,nt=ni.lerp(ut,Math.max(.2,L),Y);Y>.8&&(I="front");let q=I==="front"?new U(0,.02,1):I==="back"?new U(0,.02,-1):I==="side"?new U(1,.02,0):new U(.35,.06,1).normalize();T.target.set(0,.85,0),R.position.copy(T.target).addScaledVector(q,nt),T.update(),d=!0},Qt=()=>{m="",y=null,x.setPixelRatio(Math.min(devicePixelRatio,l.clientWidth<768||l.clientHeight<600?1.5:2)),R.aspect=l.clientWidth/l.clientHeight,R.updateProjectionMatrix(),x.setSize(l.clientWidth,l.clientHeight),Rt(r.current.view,h)},we=new ResizeObserver(Qt);we.observe(l);let Te=new uh,A=new Pt,S=new yh,F=new di,ot=new U,it=I=>{Tt.hidden=!0,S.down(I.pointerId,I.clientX,I.clientY,I.pointerType==="touch"?12:5)},lt=I=>{if(S.move(I.pointerId,I.clientX,I.clientY),I.buttons||h<.5||I.pointerType==="touch"){Tt.hidden=!0;return}let Y=l.getBoundingClientRect(),ut=I.clientX-Y.left,L=I.clientY-Y.top,nt=Mt(ut,L,12);Tt.hidden=nt<0,x.domElement.style.cursor=nt<0?"grab":"pointer",nt>=0&&(Tt.textContent=e.parts[nt].name,Tt.style.left=`${Math.max(8,Math.min(ut+14,l.clientWidth-260))}px`,Tt.style.top=`${Math.max(8,Math.min(L+18,l.clientHeight-55))}px`)},_t=I=>S.cancel(I.pointerId),ht=I=>{if(!S.up(I.pointerId,I.clientX,I.clientY)||!f)return;let ut=x.domElement.getBoundingClientRect();A.set((I.clientX-ut.left)/ut.width*2-1,-(I.clientY-ut.top)/ut.height*2+1),Te.setFromCamera(A,R);let L=1/0,nt=-1,q=e.parts.some((P,W)=>P.system!=="integumentary"&&B[W*4+3]>.5);rt.forEach((P,W)=>{if(!P||B[W*4+3]<.5||q&&e.parts[W].system==="integumentary"||(F.copy(tt[W]).translate(P.position),!Te.ray.intersectBox(F,ot)))return;let ft=Te.intersectObject(P,!1);ft[0]&&ft[0].distance<L&&(L=ft[0].distance,nt=W)}),nt<0&&h>.45&&(nt=Mt(I.clientX-ut.left,I.clientY-ut.top,I.pointerType==="touch"?24:16)),nt>=0&&(Tt.hidden=!0,o.current(e.parts[nt].id))};x.domElement.addEventListener("pointerdown",it),x.domElement.addEventListener("pointermove",lt),x.domElement.addEventListener("pointerup",ht),x.domElement.addEventListener("pointercancel",_t);let pt=matchMedia("(prefers-reduced-motion: reduce)"),C=!0,ct=new IntersectionObserver(I=>{C=I[0].isIntersecting,C&&(d=!0)});ct.observe(l);let Q=new ch,Ct=-1,xt=()=>{if(c)return;u=requestAnimationFrame(xt);let I=Math.min(Q.getDelta(),.05),Y=r.current;if(!C||document.hidden)return;let ut=y?.visible!==Y.visible||y?.selected!==Y.selected||y?.isolate!==Y.isolate,L=Math.abs(h-Y.explode)>1e-4;if(L&&(h=pt.matches?Y.explode:ni.damp(h,Y.explode,8,I),d=!0),ut||L||Ct<0){let q=new Set(Y.visible),P=new Set(Y.selected),W=e.parts.filter(gt=>Y.isolate?P.has(gt.id):q.has(gt.system)||P.has(gt.id)),ft=W.map(gt=>gt.id).join(",")+":"+R.aspect.toFixed(3);if(ft!==m){let gt=Ub(W,R.aspect);mt=gt.width,bt=gt.height,e.parts.forEach((jt,ne)=>{let Vt=gt.cells.get(jt.id);X[ne]=Vt?new U(Vt.x,Vt.y+.85,0):yt[ne].clone()}),m=ft,h>.05&&!Y.isolate&&Rt(Y.view,Math.max(0,(h-.3)/.7))}e.parts.forEach((gt,jt)=>{let ne=yt[jt],Vt=X[jt],xe=0,Ve=0,cs=0;if(h<=.45){let mi=h/.45,us=za.findIndex(Ia=>Ia.id===gt.system)/za.length*Math.PI*2;xe=Math.sin(us)*mi*.48,Ve=(ne.y-.85)*mi*.28,cs=Math.cos(us)*mi*.48}else{let mi=(h-.45)/.55,Js=za.findIndex(Ia=>Ia.id===gt.system),us=Js/za.length*Math.PI*2;xe=ni.lerp(Math.sin(us)*.48,Vt.x-ne.x,mi),Ve=ni.lerp((ne.y-.85)*.28,Vt.y-ne.y,mi),cs=ni.lerp(Math.cos(us)*.48,-ne.z,mi)}let fo=P.has(gt.id);B.set([xe,Ve,cs,(Y.isolate?fo:q.has(gt.system)||fo)?1:0],jt*4),Z[jt*4]=fo?255:0,St.set(B[jt*4+3]>.5?[ne.x+xe,ne.y+Ve,ne.z+cs]:[1e4,1e4,1e4],jt*3);let Li=rt[jt];Li&&(Li.position.set(xe,Ve,cs),Li.updateMatrix(),Li.updateMatrixWorld(!0))}),$.needsUpdate=!0,at.needsUpdate=!0,Dt.attributes.position.needsUpdate=!0,y=Y,Ct=h,d=!0}(Y.view!==p||Y.reset!==v)&&(Rt(Y.view,h),p=Y.view,v=Y.reset),L&&!Y.isolate&&Rt(h>.5?"front":Y.view,Math.max(0,(h-.3)/.7));let nt=Y.isolate?Y.selected.join(",")+":"+Y.reset+":"+Y.inspectorOpen+":"+R.aspect:"";if(nt!==_||Y.isolate&&L){if(Y.isolate){let q=new di;if(e.parts.forEach((P,W)=>{Y.selected.includes(P.id)&&q.union(tt[W].clone().translate(new U(B[W*4],B[W*4+1],B[W*4+2])))}),!q.isEmpty()){let P=q.getCenter(new U),W=q.getSize(new U),ft=l.clientWidth,gt=l.clientHeight,jt=ft*.88,ne=gt*.88;R.clearViewOffset();let Vt=Math.max(.07,Math.max(W.y*gt/ne,W.x*ft/jt/R.aspect,W.z)/(2*Math.tan(ni.degToRad(R.fov/2)))*1.35);T.maxDistance=Math.max(40,Vt*2),T.target.copy(P),R.position.copy(P).add(new U(.2,.1,1).normalize().multiplyScalar(Vt)),T.update(),d=!0}}else _&&(R.clearViewOffset(),Rt(Y.view,h));_=nt}if(T.enableRotate=h<.8,T.mouseButtons.LEFT=h<.8?Ri.ROTATE:Ri.PAN,T.touches.ONE=h<.8?Ci.ROTATE:Ci.PAN,wt.visible=h>.75,T.autoRotate=Y.rotate&&!pt.matches&&!Y.isolate&&h<.4,T.autoRotateSpeed=.65,T.update(),T.autoRotate&&(d=!0),d){if(x.render(E,R),z=[],h>.45){let q=e.parts.some((P,W)=>P.system!=="integumentary"&&B[W*4+3]>.5);e.parts.forEach((P,W)=>{if(B[W*4+3]<.5||q&&P.system==="integumentary")return;let ft=1/0,gt=-1/0,jt=1/0,ne=-1/0;for(let Vt=0;Vt<8;Vt++){fe.set(P.bounds[Vt&1?1:0][0]+B[W*4],P.bounds[Vt&2?1:0][1]+B[W*4+1],P.bounds[Vt&4?1:0][2]+B[W*4+2]).project(R);let xe=(fe.x+1)*l.clientWidth/2,Ve=(1-fe.y)*l.clientHeight/2;ft=Math.min(ft,xe),gt=Math.max(gt,xe),jt=Math.min(jt,Ve),ne=Math.max(ne,Ve)}fe.copy(yt[W]).add(new U(B[W*4],B[W*4+1],B[W*4+2])).project(R),!(fe.z<-1||fe.z>1)&&z.push({index:W,x:(fe.x+1)*l.clientWidth/2,y:(1-fe.y)*l.clientHeight/2,left:ft,right:gt,top:jt,bottom:ne})})}d=!1}};xt();let At=I=>{I.preventDefault(),s("The 3D session was paused by your device. Reload to continue.")};return x.domElement.addEventListener("webglcontextlost",At),()=>{c=!0,g.abort(),cancelAnimationFrame(u),we.disconnect(),ct.disconnect(),x.domElement.removeEventListener("keydown",O),T.dispose(),et.forEach(I=>I.dispose()),J.forEach(I=>I.dispose()),E.traverse(I=>{I instanceof he&&!et.includes(I.geometry)&&(I.geometry.dispose(),(Array.isArray(I.material)?I.material:[I.material]).forEach(ut=>ut.dispose()))}),k.dispose(),$.dispose(),at.dispose(),Dt.dispose(),Lt.dispose(),Tt.remove(),x.dispose(),x.domElement.remove()}},[e]),(0,zb.jsx)("div",{className:"hbe-scene",ref:a})}var zt=$s(Bl(),1),Ib=()=>({explode:0,visible:["skeletal","muscular","connective"],selected:[],isolate:!1,view:"front",rotate:!1,reset:0}),sC={skeletal:"Ossos",muscular:"M\xFAsculos",connective:"Tecido conjuntivo"},aC={"gingiva of upper jaw":"Gengiva da maxila","gingiva of lower jaw":"Gengiva da mand\xEDbula","intervertebral disk":"Disco intervertebral","iliotibial tract":"Trato iliotibial","external anal sphincter":"Esf\xEDncter anal externo","superficial perineal muscle":"M\xFAsculo perineal superficial","external intercostal muscle":"M\xFAsculo intercostal externo","internal intercostal muscle":"M\xFAsculo intercostal interno","innermost intercostal muscle":"M\xFAsculo intercostal \xEDntimo","levator palpebrae superioris":"Levantador da p\xE1lpebra superior","pectoralis major":"Peitoral maior","pectoralis minor":"Peitoral menor","biceps brachii":"B\xEDceps braquial","triceps brachii":"Tr\xEDceps braquial","biceps femoris":"B\xEDceps femoral","rectus femoris":"Reto femoral","gluteus maximus":"Gl\xFAteo m\xE1ximo","gluteus medius":"Gl\xFAteo m\xE9dio","gluteus minimus":"Gl\xFAteo m\xEDnimo","serratus anterior":"Serr\xE1til anterior","tibialis anterior":"Tibial anterior","tibialis posterior":"Tibial posterior","flexor digitorum":"Flexor dos dedos","extensor digitorum":"Extensor dos dedos","flexor hallucis":"Flexor do h\xE1lux","extensor hallucis":"Extensor do h\xE1lux","adductor hallucis":"Adutor do h\xE1lux","abductor hallucis":"Abdutor do h\xE1lux","flexor pollicis":"Flexor do polegar","extensor pollicis":"Extensor do polegar","adductor pollicis":"Adutor do polegar","abductor pollicis":"Abdutor do polegar","opponens digiti minimi":"Oponente do dedo m\xEDnimo","abductor digiti minimi":"Abdutor do dedo m\xEDnimo","flexor digiti minimi":"Flexor do dedo m\xEDnimo","quadratus femoris":"Quadrado femoral","quadratus lumborum":"Quadrado lombar",gastrocnemius:"Gastrocn\xEAmio",sternocleidomastoid:"Esternocleidomast\xF3ideo","levator scapulae":"Levantador da esc\xE1pula","transversus thoracis":"Transverso do t\xF3rax","pronator teres":"Pronador redondo","flexor carpi ulnaris":"Flexor ulnar do carpo","extensor carpi ulnaris":"Extensor ulnar do carpo","extensor carpi radialis":"Extensor radial do carpo","flexor carpi radialis":"Flexor radial do carpo","palmaris longus":"Palmar longo","teres major":"Redondo maior","teres minor":"Redondo menor",femur:"F\xEAmur",tibia:"T\xEDbia",fibula:"F\xEDbula",patella:"Patela",humerus:"\xDAmero",radius:"R\xE1dio",ulna:"Ulna",scapula:"Esc\xE1pula",clavicle:"Clav\xEDcula",sternum:"Esterno",sacrum:"Sacro",coccyx:"C\xF3ccix",mandible:"Mand\xEDbula",maxilla:"Maxila","hyoid bone":"Osso hioide","hip bone":"Osso do quadril","frontal bone":"Osso frontal","parietal bone":"Osso parietal","temporal bone":"Osso temporal","occipital bone":"Osso occipital","sphenoid bone":"Osso esfenoide","ethmoid bone":"Osso etmoide","nasal bone":"Osso nasal","lacrimal bone":"Osso lacrimal","zygomatic bone":"Osso zigom\xE1tico","palatine bone":"Osso palatino",vomer:"V\xF4mer",rib:"Costela",vertebra:"V\xE9rtebra",cartilage:"Cartilagem",phalanx:"Falange",metacarpal:"Metacarpo",metatarsal:"Metatarso",cuneiform:"Cuneiforme",tooth:"Dente",molar:"Molar",premolar:"Pr\xE9-molar",incisor:"Incisivo",canine:"Canino"},_h={left:"esquerdo",right:"direito",upper:"superior",lower:"inferior",first:"primeiro",second:"segundo",third:"terceiro",fourth:"quarto",fifth:"quinto",sixth:"sexto",seventh:"s\xE9timo",eighth:"oitavo",ninth:"nono",tenth:"d\xE9cimo",eleventh:"d\xE9cimo primeiro",twelfth:"d\xE9cimo segundo",secondary:"permanente",central:"central",lateral:"lateral",medial:"medial",anterior:"anterior",posterior:"posterior",superior:"superior",inferior:"inferior",proximal:"proximal",distal:"distal",long:"longo",short:"curto",longus:"longo",brevis:"curto",major:"maior",minor:"menor",maximus:"m\xE1ximo",minimus:"m\xEDnimo",medius:"m\xE9dio",intermedius:"interm\xE9dio",externus:"externo",internus:"interno",external:"externo",internal:"interno",superficial:"superficial",deep:"profundo",head:"cabe\xE7a",part:"por\xE7\xE3o",set:"conjunto",muscle:"m\xFAsculo",bone:"osso",disk:"disco",joint:"articula\xE7\xE3o",ligament:"ligamento",tendon:"tend\xE3o",foot:"p\xE9",hand:"m\xE3o",finger:"dedo",toe:"dedo do p\xE9",thumb:"polegar",little:"m\xEDnimo",index:"indicador",ring:"anelar",thoracic:"tor\xE1cico",lumbar:"lombar",cervical:"cervical",costal:"costal",plantar:"plantar",dorsal:"dorsal",palmar:"palmar",transverse:"transverso",oblique:"obl\xEDquo",rectus:"reto",flexor:"flexor",extensor:"extensor",adductor:"adutor",abductor:"abdutor",levator:"levantador",rotator:"rotador",sphincter:"esf\xEDncter",papillary:"papilar",ventricle:"ventr\xEDculo",jaw:"maxilar",gingiva:"gengiva",cartilage:"cartilagem",vertebra:"v\xE9rtebra",phalanx:"falange",rib:"costela",tooth:"dente",of:"do"},Bb={atlas:"Atlas",axis:"\xC1xis","body of sternum":"Corpo do esterno",manubrium:"Man\xFAbrio","xiphoid process":"Processo xifoide",ethmoid:"Etmoide","cricoid cartilage":"Cartilagem cricoide","thyroid cartilage":"Cartilagem tireoide","left arytenoid cartilage":"Cartilagem aritenoide esquerda","right arytenoid cartilage":"Cartilagem aritenoide direita","left corniculate cartilage":"Cartilagem corniculada esquerda","right corniculate cartilage":"Cartilagem corniculada direita","left cuneiform cartilage":"Cartilagem cuneiforme esquerda","right cuneiform cartilage":"Cartilagem cuneiforme direita","left major alar cartilage":"Cartilagem alar maior esquerda","right major alar cartilage":"Cartilagem alar maior direita"},rC={femur:"F\xEAmur",tibia:"T\xEDbia",fibula:"F\xEDbula",patella:"Patela",humerus:"\xDAmero",radius:"R\xE1dio",ulna:"Ulna",scapula:"Esc\xE1pula",clavicle:"Clav\xEDcula",sternum:"Esterno",sacrum:"Sacro",coccyx:"C\xF3ccix",mandible:"Mand\xEDbula",maxilla:"Maxila","hyoid bone":"Osso hioide","hip bone":"Osso do quadril","frontal bone":"Osso frontal","parietal bone":"Osso parietal","temporal bone":"Osso temporal","occipital bone":"Osso occipital","sphenoid bone":"Osso esfenoide","nasal bone":"Osso nasal","lacrimal bone":"Osso lacrimal","zygomatic bone":"Osso zigom\xE1tico","palatine bone":"Osso palatino",vomer:"V\xF4mer",calcaneus:"Calc\xE2neo",capitate:"Capitato",hamate:"Hamato",lunate:"Semilunar",pisiform:"Pisiforme",scaphoid:"Escafoide",talus:"T\xE1lus",trapezium:"Trap\xE9zio",trapezoid:"Trapezoide",triquetral:"Triquetro","cuboid bone":"Cuboide","intermediate cuneiform bone":"Cuneiforme interm\xE9dio","lateral cuneiform bone":"Cuneiforme lateral","medial cuneiform bone":"Cuneiforme medial","navicular bone":"Navicular","sesamoid bone":"Sesamoide"},Om={first:"primeira",second:"segunda",third:"terceira",fourth:"quarta",fifth:"quinta",sixth:"sexta",seventh:"s\xE9tima",eighth:"oitava",ninth:"nona",tenth:"d\xE9cima",eleventh:"d\xE9cima primeira",twelfth:"d\xE9cima segunda"},oC={first:"primeiro",second:"segundo",third:"terceiro",fourth:"quarto",fifth:"quinto"};function Hb(e){let t=e.toLowerCase(),n=/\bleft\b/.test(t)?"esquerda":/\bright\b/.test(t)?"direita":"",i=t.replace(/\b(left|right)\b/g,"").replace(/\s+/g," ").trim();if(Bb[t])return Bb[t];let s=i.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) (cervical|thoracic|lumbar) vertebra$/);if(s)return`${Om[s[1]]} v\xE9rtebra ${s[2]==="thoracic"?"tor\xE1cica":s[2]==="lumbar"?"lombar":"cervical"}`;if(s=i.match(/^intervertebral disk(?: of (.+))?$/),s)return s[1]?`Disco intervertebral da ${Hb(s[1])}`:"Disco intervertebral";if(s=i.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) rib$/),s)return`${Om[s[1]]} costela${n?" "+n:""}`;if(s=i.match(/^(first|second|third|fourth|fifth) (metacarpal|metatarsal) bone$/),s)return`${oC[s[1]]} ${s[2]==="metacarpal"?"metacarpo":"metatarso"}${n?" "+n:""}`.replace(/^./,l=>l.toUpperCase());if(s=i.match(/^(first|second|third|fourth|fifth|sixth|seventh) costal cartilage$/),s)return`Cartilagem costal ${Om[s[1]]}${n?" "+n:""}`;if(s=i.match(/^(upper|lower) (first|second) secondary (molar|premolar|central incisor|lateral incisor|canine) tooth$/),s)return`Dente ${s[3]==="molar"?"molar":s[3]==="premolar"?"pr\xE9-molar":s[3]==="central incisor"?"incisivo central":s[3]==="lateral incisor"?"incisivo lateral":"canino"} permanente ${s[1]==="upper"?"superior":"inferior"}${n?" "+n:""}`;if(s=i.match(/^(distal|middle|proximal) phalanx of (.+)$/),s){let l=s[2].replace(/\b(big|second|third|fourth|little) toe\b/,(c,u)=>u==="big"?"h\xE1lux":`${_h[u]??u} dedo do p\xE9`).replace(/\b(index|middle|ring|little) finger\b/,(c,u)=>`${u==="middle"?"m\xE9dio":_h[u]} dedo`).replace(/\bthumb\b/,"polegar");return`${s[1]==="middle"?"Falange m\xE9dia":s[1]==="distal"?"Falange distal":"Falange proximal"} do ${l}${n?" "+n:""}`}if(i==="gingiva of upper jaw")return"Gengiva da maxila";if(i==="gingiva of lower jaw")return"Gengiva da mand\xEDbula";let a=rC[i];if(a)return a+(n?" "+n:"");let o={"fibularis brevis":"Fibular curto","fibularis longus":"Fibular longo","fibularis tertius":"Fibular terceiro","iliotibial tract":"Trato iliotibial","tibialis anterior":"Tibial anterior","tibialis posterior":"Tibial posterior",subscapularis:"Subescapular","levator scapulae":"Levantador da esc\xE1pula"}[i]??i.split(/\s+/).map(l=>_h[l]??l).join(" ");return o.charAt(0).toUpperCase()+o.slice(1)+(n?" "+n:"")}function lC(e,t){if(t==="skeletal")return Hb(e);let n=e.toLowerCase(),i=/\bleft\b/.test(n)?"esquerdo":/\bright\b/.test(n)?"direito":"";return n=n.replace(/\b(left|right)\b/g,"").replace(/\s+/g," ").trim(),Object.entries(aC).sort((s,a)=>a[0].length-s[0].length).forEach(([s,a])=>{n=n.replace(new RegExp(`\\b${s}\\b`,"g"),a.toLowerCase())}),n=n.split(/(\s+|[-,])/).map(s=>_h[s]??s).join("").replace(/\s+/g," ").trim(),i&&(n=`${n} ${i}`),n=n.charAt(0).toUpperCase()+n.slice(1),t==="muscular"&&!/músculo|cabeça|porção|conjunto/i.test(n)&&(n=`M\xFAsculo ${n}`),t==="muscular"&&/[a-z]{3,} of [a-z]{3,}/i.test(n)?`Estrutura muscular ${e.match(/left/i)?"esquerda":e.match(/right/i)?"direita":""}`.trim():n}function cC(e){return lC(e.name,e.system)}var Pm=class extends ls.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?(0,zt.jsxs)("div",{className:"hbe-message",role:"alert",children:[(0,zt.jsx)("h3",{children:"A visualiza\xE7\xE3o foi interrompida."}),(0,zt.jsx)("p",{children:"Voc\xEA pode tentar abrir o corpo novamente."}),(0,zt.jsx)("button",{onClick:this.props.retry,children:"Tentar novamente"})]}):this.props.children}};function uC({assetBase:e,retry:t}){let[n,i]=(0,ls.useState)(null),[s,a]=(0,ls.useState)(Ib),[r,o]=(0,ls.useState)(0),[l,c]=(0,ls.useState)("");(0,ls.useEffect)(()=>{let _=new AbortController;return fetch(new URL("atlas.json",e),{signal:_.signal}).then(m=>{if(!m.ok)throw Error();return m.json()}).then(m=>{if(!Array.isArray(m.parts)||!m.chunks?.length)throw Error();i({...m,chunks:m.chunks.map(h=>({...h,url:new URL(h.url.split("/").pop(),e).href,gzip:h.gzip?new URL(h.gzip.split("/").pop(),e).href:void 0}))})}).catch(m=>{m.name!=="AbortError"&&c("N\xE3o foi poss\xEDvel carregar os dados do corpo. Confira sua conex\xE3o e tente novamente.")}),()=>_.abort()},[e]);let u=r===100&&!l,d=n?.parts.find(_=>_.id===s.selected[0]);function f(_){a(m=>({...m,visible:_,selected:[],isolate:!1,reset:m.reset+1}))}function p(_){a(m=>({...m,selected:[_]}))}let v=()=>c("N\xE3o foi poss\xEDvel manter a visualiza\xE7\xE3o 3D neste dispositivo. Confira sua conex\xE3o e tente novamente.");return(0,zt.jsxs)(zt.Fragment,{children:[(0,zt.jsx)("div",{className:"hbe-toolbar",children:(0,zt.jsxs)("div",{className:"hbe-tabs",role:"group","aria-label":"Camadas do corpo",children:[(0,zt.jsx)("button",{disabled:!u,"aria-pressed":s.visible.includes("muscular"),onClick:()=>f(["skeletal","muscular","connective"]),children:"M\xFAsculos"}),(0,zt.jsx)("button",{disabled:!u,"aria-pressed":!s.visible.includes("muscular"),onClick:()=>f(["skeletal"]),children:"Ossos"})]})}),(0,zt.jsxs)("div",{className:"hbe-layout",children:[(0,zt.jsxs)("div",{className:"hbe-stage","aria-busy":!u&&!l,children:[n&&!l&&(0,zt.jsx)(Nm,{atlas:n,state:s,onSelect:p,onProgress:o,onError:v}),!u&&!l&&(0,zt.jsxs)("div",{className:"hbe-message",role:"status",children:[(0,zt.jsx)("span",{className:"hbe-kicker",children:"PREPARANDO SEU NOVO OLHAR"}),(0,zt.jsx)("h3",{children:"O corpo, por inteiro."}),(0,zt.jsx)("progress",{max:"100",value:r,"aria-label":"Carregamento dos modelos"}),(0,zt.jsx)("p",{children:r===0?"Carregando a anatomia\u2026":`${r}% carregado`}),(0,zt.jsx)("p",{className:"hbe-small",children:"Na primeira visita, o carregamento pode levar alguns instantes."})]}),l&&(0,zt.jsxs)("div",{className:"hbe-message",role:"alert",children:[(0,zt.jsx)("h3",{children:"Vamos tentar de novo?"}),(0,zt.jsx)("p",{children:l}),(0,zt.jsx)("button",{onClick:t,children:"Tentar novamente"})]}),u&&(0,zt.jsx)("span",{className:"hbe-stage-note",children:"Arraste para girar \xB7 Toque para selecionar"})]}),(0,zt.jsxs)("aside",{className:"hbe-panel","aria-label":"Controles e estrutura selecionada",children:[(0,zt.jsxs)("div",{className:"hbe-explode",children:[(0,zt.jsxs)("label",{htmlFor:"hbe-explode",children:["Separar as estruturas ",(0,zt.jsxs)("output",{children:[Math.round(s.explode*100),"%"]})]}),(0,zt.jsx)("input",{id:"hbe-explode",type:"range",min:"0",max:"100",step:"1",value:Math.round(s.explode*100),disabled:!u||s.isolate,onChange:_=>a(m=>({...m,explode:Number(_.target.value)/100}))}),(0,zt.jsxs)("div",{className:"hbe-range-labels",children:[(0,zt.jsx)("span",{children:"Corpo inteiro"}),(0,zt.jsx)("span",{children:"Explodido"})]})]}),(0,zt.jsx)("div",{className:"hbe-views",role:"group","aria-label":"Ponto de vista",children:[["front","Frente"],["back","Costas"],["side","Lado"]].map(([_,m])=>(0,zt.jsx)("button",{disabled:!u||s.isolate,"aria-pressed":s.view===_,onClick:()=>a(h=>({...h,view:_,reset:h.reset+1})),children:m},_))}),(0,zt.jsxs)("div",{className:"hbe-detail","aria-live":"polite",children:[(0,zt.jsx)("span",{className:"hbe-kicker",children:d?"ESTRUTURA SELECIONADA":"CADA PARTE IMPORTA"}),(0,zt.jsx)("h3",{children:d?cC(d):"Toque em uma estrutura"}),(0,zt.jsx)("p",{children:d?`${sC[d.system]??"Estrutura anat\xF4mica"} \xB7 ${d.id}`:"Gire o corpo e toque diretamente em um m\xFAsculo ou osso para conhecer seu nome."}),(0,zt.jsx)("button",{disabled:!u||!d,onClick:()=>a(_=>({..._,isolate:!_.isolate,explode:0,reset:_.reset+1})),children:s.isolate?"Mostrar o corpo":"Isolar estrutura"})]}),(0,zt.jsx)("button",{className:"hbe-reset",disabled:!u,onClick:()=>a(_=>({...Ib(),reset:_.reset+1})),children:"Voltar ao corpo inteiro"}),(0,zt.jsx)("p",{className:"hbe-small",children:"No modelo: setas giram; + e \u2212 aproximam e afastam. Toque diretamente na anatomia para selecionar."})]})]})]})}function ZC(e,{assetBase:t}){let n=(0,Fb.createRoot)(e),i=0,s=()=>n.render((0,zt.jsx)(Pm,{retry:s,children:(0,zt.jsx)(uC,{assetBase:t,retry:s})},i++));return s(),{destroy(){n.unmount()}}}export{ZC as mount};
/*! For license information please see explorer.js.LEGAL.txt */
