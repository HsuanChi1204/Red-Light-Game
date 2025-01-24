var Xf=Object.defineProperty;var $f=(n,e,t)=>e in n?Xf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var qf=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var oe=(n,e,t)=>$f(n,typeof e!="symbol"?e+"":e,t);var DT=qf(Gt=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="171",jf=0,Vl=1,Yf=2,uh=1,Kf=2,On=3,Vn=0,Xt=1,Sn=2,ri=0,nr=1,Gl=2,Wl=3,Xl=4,Zf=5,wi=100,Jf=101,Qf=102,ep=103,tp=104,np=200,ip=201,rp=202,sp=203,Ea=204,Sa=205,op=206,ap=207,cp=208,lp=209,up=210,dp=211,hp=212,fp=213,pp=214,Ma=0,ba=1,wa=2,ur=3,Ta=4,Aa=5,Ra=6,Ca=7,dh=0,mp=1,gp=2,si=0,_p=1,yp=2,xp=3,vp=4,Ep=5,Sp=6,Mp=7,$l="attached",bp="detached",hh=300,dr=301,hr=302,Pa=303,Ia=304,ho=306,Li=1e3,ei=1001,Js=1002,kt=1003,fh=1004,Hr=1005,Kt=1006,Gs=1007,Bn=1008,Gn=1009,ph=1010,mh=1011,Zr=1012,Ec=1013,Di=1014,_n=1015,rs=1016,Sc=1017,Mc=1018,fr=1020,gh=35902,_h=1021,yh=1022,an=1023,xh=1024,vh=1025,ir=1026,pr=1027,bc=1028,wc=1029,Eh=1030,Tc=1031,Ac=1033,Ws=33776,Xs=33777,$s=33778,qs=33779,La=35840,Da=35841,Na=35842,Ua=35843,Oa=36196,Fa=37492,Ba=37496,ka=37808,za=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,$a=37815,qa=37816,ja=37817,Ya=37818,Ka=37819,Za=37820,Ja=37821,js=36492,Qa=36494,ec=36495,Sh=36283,tc=36284,nc=36285,ic=36286,Jr=2300,Qr=2301,Mo=2302,ql=2400,jl=2401,Yl=2402,wp=2500,Tp=0,Mh=1,rc=2,Ap=3200,Rp=3201,bh=0,Cp=1,Qn="",Rt="srgb",zt="srgb-linear",Qs="linear",ct="srgb",Oi=7680,Kl=519,Pp=512,Ip=513,Lp=514,wh=515,Dp=516,Np=517,Up=518,Op=519,sc=35044,Zl="300 es",kn=2e3,eo=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const Wr=Math.PI/180,mr=180/Math.PI;function yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Rc(n,e){return(n%e+e)%e}function Fp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Bp(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function kp(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function zp(n,e=1){return e-Math.abs(Rc(n,e*2)-e)}function Hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wp(n,e){return n+Math.random()*(e-n)}function Xp(n){return n*(.5-Math.random())}function $p(n){n!==void 0&&(Jl=n);let e=Jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(n){return n*Wr}function jp(n){return n*mr}function Yp(n){return(n&n-1)===0&&n!==0}function Kp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jp(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qp={DEG2RAD:Wr,RAD2DEG:mr,generateUUID:yn,clamp:Ge,euclideanModulo:Rc,mapLinear:Fp,inverseLerp:Bp,lerp:Xr,damp:kp,pingpong:zp,smoothstep:Hp,smootherstep:Vp,randInt:Gp,randFloat:Wp,randFloatSpread:Xp,seededRandom:$p,degToRad:qp,radToDeg:jp,isPowerOfTwo:Yp,ceilPowerOfTwo:Kp,floorPowerOfTwo:Zp,setQuaternionFromProperEuler:Jp,normalize:ot,denormalize:mn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,r,s,o,a,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],w=r[4],v=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*_+a*M+c*P,s[3]=o*m+a*w+c*A,s[6]=o*p+a*v+c*T,s[1]=l*_+u*M+d*P,s[4]=l*m+u*w+d*A,s[7]=l*p+u*v+d*T,s[2]=h*_+f*M+g*P,s[5]=h*m+f*w+g*A,s[8]=h*p+f*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bo.makeScale(e,t)),this}rotate(e){return this.premultiply(bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new Ue;function Th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function em(){const n=es("canvas");return n.style.display="block",n}const Ql={};function Qi(n){n in Ql||(Ql[n]=!0,console.warn(n))}function tm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function nm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function im(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const eu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){const n={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Qs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zt]:{primaries:e,whitePoint:i,transfer:Qs,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const Je=rm();function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fi;class sm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=es("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class Ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wo(r[o].image)):s.push(wo(r[o]))}else s=wo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;class wt extends Mr{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=ei,r=ei,s=Kt,o=Bn,a=an,c=Gn,l=wt.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=yn(),this.name="",this.source=new Ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=hh;wt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,v=(f+1)/2,P=(p+1)/2,A=(u+h)/4,T=(d+_)/4,O=(g+m)/4;return w>v&&w>P?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=T/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=O/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends Mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lm extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*_,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const P=Math.sqrt(w),A=Math.atan2(P,p*M);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const v=a*M;if(c=c*m+h*v,l=l*m+f*v,u=u*m+g*v,d=d*m+_*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new D,nu=new hi;class Wt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ls.copy(i.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),us.subVectors(this.max,Ir),Bi.subVectors(e.a,Ir),ki.subVectors(e.b,Ir),zi.subVectors(e.c,Ir),Wn.subVectors(ki,Bi),Xn.subVectors(zi,ki),mi.subVectors(Bi,zi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-mi.z,mi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,mi.z,0,-mi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-mi.y,mi.x,0];return!Ao(t,Bi,ki,zi,us)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Bi,ki,zi,us))?!1:(ds.crossVectors(Wn,Xn),t=[ds.x,ds.y,ds.z],Ao(t,Bi,ki,zi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,ls=new Wt,Bi=new D,ki=new D,zi=new D,Wn=new D,Xn=new D,mi=new D,Ir=new D,us=new D,ds=new D,gi=new D;function Ao(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gi.fromArray(n,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const um=new Wt,Lr=new D,Ro=new D;class Tn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):um.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ro)),this.expandByPoint(Lr.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new D,Co=new D,hs=new D,$n=new D,Po=new D,fs=new D,Io=new D;class fo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Co.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Co);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hs),a=$n.dot(this.direction),c=-$n.dot(hs),l=$n.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Co).addScaledVector(hs,h),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){Po.subVectors(t,e),fs.subVectors(i,e),Io.crossVectors(Po,fs);let o=this.direction.dot(Io),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const c=a*this.direction.dot(fs.crossVectors($n,fs));if(c<0)return null;const l=a*this.direction.dot(Po.cross($n));if(l<0||c+l>o)return null;const u=-a*$n.dot(Io);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,hm)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),qn.crossVectors(i,qt),qn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),qn.crossVectors(i,qt)),qn.normalize(),ps.crossVectors(qt,qn),r[0]=qn.x,r[4]=ps.x,r[8]=qt.x,r[1]=qn.y,r[5]=ps.y,r[9]=qt.y,r[2]=qn.z,r[6]=ps.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],w=i[7],v=i[11],P=i[15],A=r[0],T=r[4],O=r[8],b=r[12],E=r[1],C=r[5],q=r[9],z=r[13],J=r[2],Z=r[6],X=r[10],ee=r[14],V=r[3],ce=r[7],fe=r[11],Se=r[15];return s[0]=o*A+a*E+c*J+l*V,s[4]=o*T+a*C+c*Z+l*ce,s[8]=o*O+a*q+c*X+l*fe,s[12]=o*b+a*z+c*ee+l*Se,s[1]=u*A+d*E+h*J+f*V,s[5]=u*T+d*C+h*Z+f*ce,s[9]=u*O+d*q+h*X+f*fe,s[13]=u*b+d*z+h*ee+f*Se,s[2]=g*A+_*E+m*J+p*V,s[6]=g*T+_*C+m*Z+p*ce,s[10]=g*O+_*q+m*X+p*fe,s[14]=g*b+_*z+m*ee+p*Se,s[3]=M*A+w*E+v*J+P*V,s[7]=M*T+w*C+v*Z+P*ce,s[11]=M*O+w*q+v*X+P*fe,s[15]=M*b+w*z+v*ee+P*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+_*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=d*m*l-_*h*l+_*c*f-a*m*f-d*c*p+a*h*p,w=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,v=u*_*l-g*d*l+g*a*f-o*_*f-u*a*p+o*d*p,P=g*d*c-u*_*c-g*a*h+o*_*h+u*a*m-o*d*m,A=t*M+i*w+r*v+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(_*h*s-d*m*s-_*r*f+i*m*f+d*r*p-i*h*p)*T,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*p+i*c*p)*T,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*T,e[4]=w*T,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*T,e[8]=v*T,e[9]=(g*d*s-u*_*s-g*i*f+t*_*f+u*i*p-t*d*p)*T,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*T,e[12]=P*T,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,_=o*u,m=o*d,p=a*d,M=c*l,w=c*u,v=c*d,P=i.x,A=i.y,T=i.z;return r[0]=(1-(_+p))*P,r[1]=(f+v)*P,r[2]=(g-w)*P,r[3]=0,r[4]=(f-v)*A,r[5]=(1-(h+p))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+w)*T,r[9]=(m-M)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),a=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const l=1/s,u=1/o,d=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,g;if(a===kn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===eo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kn){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u;let g,_;if(a===kn)g=(o+s)*d,_=-2*d;else if(a===eo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hi=new D,hn=new De,dm=new D(0,0,0),hm=new D(1,1,1),qn=new D,ps=new D,qt=new D,iu=new De,ru=new hi;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const su=new D,Vi=new hi,Ln=new De,ms=new D,Dr=new D,pm=new D,mm=new hi,ou=new D(1,0,0),au=new D(0,1,0),cu=new D(0,0,1),lu={type:"added"},gm={type:"removed"},Gi={type:"childadded",child:null},Lo={type:"childremoved",child:null};class mt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new D,t=new bn,i=new hi,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new Ue}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ms.copy(e):ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Dr,ms,this.up):Ln.lookAt(ms,Dr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new D,Dn=new D,Do=new D,Nn=new D,Wi=new D,Xi=new D,uu=new D,No=new D,Uo=new D,Oo=new D,Fo=new nt,Bo=new nt,ko=new nt;class gn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Dn.subVectors(i,t),Do.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Dn),c=fn.dot(Do),l=Dn.dot(Dn),u=Dn.dot(Do),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Fo.setScalar(0),Bo.setScalar(0),ko.setScalar(0),Fo.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,i),ko.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fo,s.x),o.addScaledVector(Bo,s.y),o.addScaledVector(ko,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Dn.subVectors(e,t),fn.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),fn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Wi.subVectors(r,i),Xi.subVectors(s,i),No.subVectors(e,i);const c=Wi.dot(No),l=Xi.dot(No);if(c<=0&&l<=0)return t.copy(i);Uo.subVectors(e,r);const u=Wi.dot(Uo),d=Xi.dot(Uo);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Wi,o);Oo.subVectors(e,s);const f=Wi.dot(Oo),g=Xi.dot(Oo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Xi,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return uu.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(uu,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Rc(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zo(o,s,e+1/3),this.g=zo(o,s,e),this.b=zo(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Je.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ge(Dt.r*255,0,255))*65536+Math.round(Ge(Dt.g*255,0,255))*256+Math.round(Ge(Dt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Rt){Je.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(gs);const i=Xr(jn.h,gs.h,t),r=Xr(jn.s,gs.s,t),s=Xr(jn.l,gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Le;Le.NAMES=Ph;let _m=0;class Mn extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=nr,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Sa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ea&&(i.blendSrc=this.blendSrc),this.blendDst!==Sa&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ti extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new D,_s=new $e;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}}class Ih extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lh extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ym=0;const rn=new De,Ho=new mt,$i=new D,jt=new Wt,Nr=new Wt,bt=new D;class en extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Lh:Ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(jt.min,Nr.min),jt.expandByPoint(bt),bt.addVectors(jt.max,Nr.max),jt.expandByPoint(bt)):(jt.expandByPoint(Nr.min),jt.expandByPoint(Nr.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)bt.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(e,l),bt.add($i)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new D,c[O]=new D;const l=new D,u=new D,d=new D,h=new $e,f=new $e,g=new $e,_=new D,m=new D;function p(O,b,E){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),h.fromBufferAttribute(s,O),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,E),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[O].add(_),a[b].add(_),a[E].add(_),c[O].add(m),c[b].add(m),c[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,b=M.length;O<b;++O){const E=M[O],C=E.start,q=E.count;for(let z=C,J=C+q;z<J;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new D,v=new D,P=new D,A=new D;function T(O){P.fromBufferAttribute(r,O),A.copy(P);const b=a[O];w.copy(b),w.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(A,b);const C=v.dot(c[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,C)}for(let O=0,b=M.length;O<b;++O){const E=M[O],C=E.start,q=E.count;for(let z=C,J=C+q;z<J;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Pt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new De,_i=new fo,ys=new Tn,hu=new D,xs=new D,vs=new D,Es=new D,Vo=new D,Ss=new D,fu=new D,Ms=new D;class Ct extends mt{constructor(e=new en,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ss.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Vo.fromBufferAttribute(d,e),o?Ss.addScaledVector(Vo,u):Ss.addScaledVector(Vo.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(ys.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ys,hu)===null||_i.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(du.copy(s).invert(),_i.copy(e.ray).applyMatrix4(du),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,P=w;v<P;v+=3){const A=a.getX(v),T=a.getX(v+1),O=a.getX(v+2);r=bs(this,p,e,i,l,u,d,A,T,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);r=bs(this,o,e,i,l,u,d,M,w,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,P=w;v<P;v+=3){const A=v,T=v+1,O=v+2;r=bs(this,p,e,i,l,u,d,A,T,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,w=m+1,v=m+2;r=bs(this,o,e,i,l,u,d,M,w,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function xm(n,e,t,i,r,s,o,a){let c;if(e.side===Xt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Vn,a),c===null)return null;Ms.copy(a),Ms.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ms);return l<t.near||l>t.far?null:{distance:l,point:Ms.clone(),object:n}}function bs(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,xs),n.getVertexPosition(c,vs),n.getVertexPosition(l,Es);const u=xm(n,e,t,i,xs,vs,Es,fu);if(u){const d=new D;gn.getBarycoord(fu,xs,vs,Es,d),r&&(u.uv=gn.getInterpolatedAttribute(r,a,c,l,d,new $e)),s&&(u.uv1=gn.getInterpolatedAttribute(s,a,c,l,d,new $e)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,c,l,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};gn.getNormal(xs,vs,Es,h.normal),u.face=h,u.barycoord=d}return u}class br extends en{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function g(_,m,p,M,w,v,P,A,T,O,b){const E=v/T,C=P/O,q=v/2,z=P/2,J=A/2,Z=T+1,X=O+1;let ee=0,V=0;const ce=new D;for(let fe=0;fe<X;fe++){const Se=fe*C-z;for(let Ie=0;Ie<Z;Ie++){const Qe=Ie*E-q;ce[_]=Qe*M,ce[m]=Se*w,ce[p]=J,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(Ie/T),d.push(1-fe/O),ee+=1}}for(let fe=0;fe<O;fe++)for(let Se=0;Se<T;Se++){const Ie=h+Se+Z*fe,Qe=h+Se+Z*(fe+1),$=h+(Se+1)+Z*(fe+1),ie=h+(Se+1)+Z*fe;c.push(Ie,Qe,ie),c.push(Qe,$,ie),V+=6}a.addGroup(f,V,b),f+=V,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const r in i)e[r]=i[r]}return e}function vm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Em={clone:gr,merge:Bt};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nh extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new D,pu=new $e,mu=new $e;class Nt extends Nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,ji=1;class bm extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(qi,ji,e,t);r.layers=this.layers,this.add(r);const s=new Nt(qi,ji,e,t);s.layers=this.layers,this.add(s);const o=new Nt(qi,ji,e,t);o.layers=this.layers,this.add(o);const a=new Nt(qi,ji,e,t);a.layers=this.layers,this.add(a);const c=new Nt(qi,ji,e,t);c.layers=this.layers,this.add(c);const l=new Nt(qi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uh extends wt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new br(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ri});s.uniforms.tEquirect.value=t;const o=new Ct(r,s),a=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Kt),new bm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Oh extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new D;class Cc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gu=new D,_u=new nt,yu=new nt,Am=new D,xu=new De,ws=new D,Go=new Tn,vu=new De,Wo=new fo;class Rm extends Ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$l,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ws),this.boundingBox.expandByPoint(ws)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ws),this.boundingSphere.expandByPoint(ws)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(r),e.ray.intersectsSphere(Go)!==!1&&(vu.copy(r).invert(),Wo.copy(e.ray).applyMatrix4(vu),!(this.boundingBox!==null&&Wo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;_u.fromBufferAttribute(r.attributes.skinIndex,e),yu.fromBufferAttribute(r.attributes.skinWeight,e),gu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=yu.getComponent(s);if(o!==0){const a=_u.getComponent(s);xu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Am.copy(gu).applyMatrix4(xu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fh extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bh extends wt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=kt,u=kt,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=new De,Cm=new De;class Pc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Cm;Eu.multiplyMatrices(a,t[s]),Eu.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Bh(t,e,e,an,_n);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Fh),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class oc extends Pt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new De,Su=new De,Ts=[],Mu=new Wt,Pm=new De,Ur=new Ct,Or=new Tn;class Im extends Ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Pm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yi),Mu.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Mu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yi),Or.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(i),e.ray.intersectsSphere(Or)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yi),Su.multiplyMatrices(i,Yi),Ur.matrixWorld=Su,Ur.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){const c=Ts[o];c.instanceId=s,c.object=this,t.push(c)}Ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bh(new Float32Array(r*this.count),r,this.count,bc,_n));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Xo=new D,Lm=new D,Dm=new Ue;class Mi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xo.subVectors(i,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dm.getNormalMatrix(e),r=this.coplanarPoint(Xo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Tn,As=new D;class Ic{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],w=r[14],v=r[15];if(i[0].setComponents(c-s,h-l,m-f,v-p).normalize(),i[1].setComponents(c+s,h+l,m+f,v+p).normalize(),i[2].setComponents(c+o,h+u,m+g,v+M).normalize(),i[3].setComponents(c-o,h-u,m-g,v-M).normalize(),i[4].setComponents(c-a,h-d,m-_,v-w).normalize(),t===kn)i[5].setComponents(c+a,h+d,m+_,v+w).normalize();else if(t===eo)i[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class po extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new D,no=new D,bu=new De,Fr=new fo,Rs=new Tn,$o=new D,wu=new D;class mo extends mt{constructor(e=new en,t=new po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)to.fromBufferAttribute(t,r-1),no.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=to.distanceTo(no);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(r),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;bu.copy(r).invert(),Fr.copy(e.ray).applyMatrix4(bu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),w=Cs(this,e,Fr,c,p,M);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Cs(this,e,Fr,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Cs(this,e,Fr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Cs(this,e,Fr,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cs(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(to.fromBufferAttribute(o,r),no.fromBufferAttribute(o,s),t.distanceSqToSegment(to,no,$o,wu)>i)return;$o.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($o);if(!(c<e.near||c>e.far))return{distance:c,point:wu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Tu=new D,Au=new D;class kh extends mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Tu.fromBufferAttribute(t,r),Au.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tu.distanceTo(Au);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nm extends mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zh extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ru=new De,ac=new fo,Ps=new Tn,Is=new D;class Um extends mt{constructor(e=new en,t=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Ps.radius+=s,e.ray.intersectsSphere(Ps)===!1)return;Ru.copy(r).invert(),ac.copy(e.ray).applyMatrix4(Ru);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=l.getX(g);Is.fromBufferAttribute(d,m),Cu(Is,m,c,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)Is.fromBufferAttribute(d,g),Cu(Is,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cu(n,e,t,i,r,s,o){const a=ac.distanceSqToPoint(n);if(a<t){const c=new D;ac.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}let Ai=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}};class Hh extends wt{constructor(e,t,i,r,s,o,a,c,l,u=ir){if(u!==ir&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ir&&(i=Di),i===void 0&&u===pr&&(i=fr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lc extends en{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new D,u=new $e;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _r extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let w=0;w<l;w++){const v=w*d-s;g.push(v,-M,0),_.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const w=M+l*p,v=M+l*(p+1),P=M+1+l*(p+1),A=M+1+l*p;f.push(w,v,A),f.push(v,P,A)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class sr extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends sr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Om extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fm extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ls(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Bm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function km(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Pu(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function Vh(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ss{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zm extends ss{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jl:s=e,a=2*t-i;break;case Yl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case jl:o=e,c=2*i-t;break;case Yl:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+M*o[l+P]+w*o[c+P]+v*o[d+P];return s}}class Hm extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}}class Vm extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Qr:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Bm(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Mo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Qr;class wr extends Rn{constructor(e,t,i){super(e,t,i)}}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Jr;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gh extends Rn{}Gh.prototype.ValueTypeName="color";class yr extends Rn{}yr.prototype.ValueTypeName="number";class Gm extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)hi.slerpFlat(s,0,o,l-a,o,l,c);return s}}class xr extends Rn{InterpolantFactoryMethodLinear(e){return new Gm(this.times,this.values,this.getValueSize(),e)}}xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends Rn{constructor(e,t,i){super(e,t,i)}}Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Jr;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends Rn{}vr.prototype.ValueTypeName="vector";class Wm{constructor(e="",t=-1,i=[],r=wp){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push($m(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Rn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=km(c);c=Pu(c,1,u),l=Pu(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new yr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];Vh(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==h[g].morphTargets.length;++M){const w=h[g];m.push(w.time),p.push(w.morphTarget===_?1:0)}r.push(new yr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[d].name+"]";i(vr,f+".position",h,"pos",r),i(xr,f+".quaternion",h,"rot",r),i(vr,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xm(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yr;case"vector":case"vector2":case"vector3":case"vector4":return vr;case"color":return Gh;case"quaternion":return xr;case"bool":case"boolean":return wr;case"string":return Tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function $m(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xm(n.type);if(n.times===void 0){const t=[],i=[];Vh(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ni={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qm{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const jm=new qm;class Ar{constructor(e){this.manager=e!==void 0?e:jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Ym extends Error{constructor(e,t){super(e),this.response=t}}class Wh extends Ar{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ni.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:i,onError:r});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Un[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:w,value:v})=>{if(w)p.close();else{_+=v.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=u.length;A<T;A++){const O=u[A];O.onProgress&&O.onProgress(P)}p.enqueue(v),M()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Ym(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ni.add(e,l);const u=Un[e];delete Un[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),l;delete Un[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Km extends Ar{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ni.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=es("img");function c(){u(),ni.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class cc extends Ar{constructor(e){super(e)}load(e,t,i,r){const s=new wt,o=new Km(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class go extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const qo=new De,Iu=new D,Lu=new D;class Dc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zm extends Dc{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=mr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jm extends go{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Zm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Du=new De,Br=new D,jo=new D;class Qm extends Dc{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),i.position.copy(Br),jo.copy(i.position),jo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jo),i.updateMatrixWorld(),r.makeTranslation(-Br.x,-Br.y,-Br.z),Du.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du)}}class eg extends go{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Qm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nc extends Nh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tg extends Dc{constructor(){super(new Nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uc extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xh extends go{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $r{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ng extends Ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ni.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ni.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),ni.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ni.add(e,c),s.manager.itemStart(e)}}class ig extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Oc="\\[\\]\\.:\\/",rg=new RegExp("["+Oc+"]","g"),Fc="[^"+Oc+"]",sg="[^"+Oc.replace("\\.","")+"]",og=/((?:WC+[\/:])*)/.source.replace("WC",Fc),ag=/(WCOD+)?/.source.replace("WCOD",sg),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),ug=new RegExp("^"+og+ag+cg+lg+"$"),dg=["material","materials","bones","map"];class hg{constructor(e,t,i){const r=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rg,"")}static parseTrackName(e){const t=ug.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);dg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=hg;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fg extends kh{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new en;s.setIndex(new Pt(i,1)),s.setAttribute("position",new Zt(r,3)),super(s,new po({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nu(n,e,t,i){const r=pg(i);switch(t){case _h:return n*e;case xh:return n*e;case vh:return n*e*2;case bc:return n*e/r.components*r.byteLength;case wc:return n*e/r.components*r.byteLength;case Eh:return n*e*2/r.components*r.byteLength;case Tc:return n*e*2/r.components*r.byteLength;case yh:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case Ac:return n*e*4/r.components*r.byteLength;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $s:case qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(n,16)*Math.max(e,8)/4;case La:case Na:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case js:case Qa:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sh:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pg(n){switch(n){case Gn:case ph:return{byteLength:1,components:1};case Zr:case mh:case rs:return{byteLength:2,components:1};case Sc:case Mc:return{byteLength:2,components:4};case Di:case Ec:case _n:return{byteLength:4,components:1};case gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $h(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mg(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Pg=`#ifdef USE_BUMPMAP
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kg=`#define PI 3.141592653589793
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
} // validated`,zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
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
}`,r_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,c_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,p_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,m_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uy=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Sy=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,My=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,by=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Py=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Iy=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Ly=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Dy=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Ny=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Uy=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Oy=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fy=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,By=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ky=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,zy=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hy=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Vy=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Gy=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Wy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,$y=`uniform vec3 color;
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
}`,qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,jy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Be={alphahash_fragment:gg,alphahash_pars_fragment:_g,alphamap_fragment:yg,alphamap_pars_fragment:xg,alphatest_fragment:vg,alphatest_pars_fragment:Eg,aomap_fragment:Sg,aomap_pars_fragment:Mg,batching_pars_vertex:bg,batching_vertex:wg,begin_vertex:Tg,beginnormal_vertex:Ag,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Ng,color_fragment:Ug,color_pars_fragment:Og,color_pars_vertex:Fg,color_vertex:Bg,common:kg,cube_uv_reflection_fragment:zg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Gg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:$g,colorspace_pars_fragment:qg,envmap_fragment:jg,envmap_common_pars_fragment:Yg,envmap_pars_fragment:Kg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:c_,envmap_vertex:Jg,fog_vertex:Qg,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:r_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:l_,lights_toon_pars_fragment:u_,lights_phong_fragment:d_,lights_phong_pars_fragment:h_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:__,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:E_,map_fragment:S_,map_pars_fragment:M_,map_particle_fragment:b_,map_particle_pars_fragment:w_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:A_,morphinstance_vertex:R_,morphcolor_vertex:C_,morphnormal_vertex:P_,morphtarget_pars_vertex:I_,morphtarget_vertex:L_,normal_fragment_begin:D_,normal_fragment_maps:N_,normal_pars_fragment:U_,normal_pars_vertex:O_,normal_vertex:F_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:V_,opaque_fragment:G_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:$_,dithering_fragment:q_,dithering_pars_fragment:j_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:J_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:ry,specularmap_fragment:sy,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:cy,transmission_fragment:ly,transmission_pars_fragment:uy,uv_pars_fragment:dy,uv_pars_vertex:hy,uv_vertex:fy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:_y,backgroundCube_frag:yy,cube_vert:xy,cube_frag:vy,depth_vert:Ey,depth_frag:Sy,distanceRGBA_vert:My,distanceRGBA_frag:by,equirect_vert:wy,equirect_frag:Ty,linedashed_vert:Ay,linedashed_frag:Ry,meshbasic_vert:Cy,meshbasic_frag:Py,meshlambert_vert:Iy,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Ny,meshnormal_vert:Uy,meshnormal_frag:Oy,meshphong_vert:Fy,meshphong_frag:By,meshphysical_vert:ky,meshphysical_frag:zy,meshtoon_vert:Hy,meshtoon_frag:Vy,points_vert:Gy,points_frag:Wy,shadow_vert:Xy,shadow_frag:$y,sprite_vert:qy,sprite_frag:jy},ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},En={basic:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Bt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Bt([ae.lights,ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};En.physical={uniforms:Bt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ds={r:0,b:0,g:0},xi=new bn,Yy=new De;function Ky(n,e,t,i,r,s,o){const a=new Le(0);let c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function _(w){let v=!1;const P=g(w);P===null?p(a,c):P&&P.isColor&&(p(P,1),v=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,v){const P=g(v);P&&(P.isCubeTexture||P.mapping===ho)?(u===void 0&&(u=new Ct(new br(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:gr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(xi)),u.material.toneMapped=Je.getTransfer(P.colorSpace)!==ct,(d!==P||h!==P.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,h=P.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Ct(new _r(2,2),new li({name:"BackgroundMaterial",uniforms:gr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Je.getTransfer(P.colorSpace)!==ct,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||h!==P.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,h=P.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,v){w.getRGB(Ds,Dh(n)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:m,dispose:M}}function Zy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,C,q,z,J){let Z=!1;const X=d(z,q,C);s!==X&&(s=X,l(s.object)),Z=f(E,z,q,J),Z&&g(E,z,q,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(E,C,q,z),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,C,q){const z=q.wireframe===!0;let J=i[E.id];J===void 0&&(J={},i[E.id]=J);let Z=J[C.id];Z===void 0&&(Z={},J[C.id]=Z);let X=Z[z];return X===void 0&&(X=h(c()),Z[z]=X),X}function h(E){const C=[],q=[],z=[];for(let J=0;J<t;J++)C[J]=0,q[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:q,attributeDivisors:z,object:E,attributes:{},index:null}}function f(E,C,q,z){const J=s.attributes,Z=C.attributes;let X=0;const ee=q.getAttributes();for(const V in ee)if(ee[V].location>=0){const fe=J[V];let Se=Z[V];if(Se===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function g(E,C,q,z){const J={},Z=C.attributes;let X=0;const ee=q.getAttributes();for(const V in ee)if(ee[V].location>=0){let fe=Z[V];fe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),J[V]=Se,X++}s.attributes=J,s.attributesNum=X,s.index=z}function _(){const E=s.newAttributes;for(let C=0,q=E.length;C<q;C++)E[C]=0}function m(E){p(E,0)}function p(E,C){const q=s.newAttributes,z=s.enabledAttributes,J=s.attributeDivisors;q[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),J[E]!==C&&(n.vertexAttribDivisor(E,C),J[E]=C)}function M(){const E=s.newAttributes,C=s.enabledAttributes;for(let q=0,z=C.length;q<z;q++)C[q]!==E[q]&&(n.disableVertexAttribArray(q),C[q]=0)}function w(E,C,q,z,J,Z,X){X===!0?n.vertexAttribIPointer(E,C,q,J,Z):n.vertexAttribPointer(E,C,q,z,J,Z)}function v(E,C,q,z){_();const J=z.attributes,Z=q.getAttributes(),X=C.defaultAttributeValues;for(const ee in Z){const V=Z[ee];if(V.location>=0){let ce=J[ee];if(ce===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){const fe=ce.normalized,Se=ce.itemSize,Ie=e.get(ce);if(Ie===void 0)continue;const Qe=Ie.buffer,$=Ie.type,ie=Ie.bytesPerElement,ve=$===n.INT||$===n.UNSIGNED_INT||ce.gpuType===Ec;if(ce.isInterleavedBufferAttribute){const le=ce.data,be=le.stride,Ae=ce.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)p(V.location+ke,le.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ke=0;ke<V.locationSize;ke++)w(V.location+ke,Se/V.locationSize,$,fe,be*ie,(Ae+Se/V.locationSize*ke)*ie,ve)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)p(V.location+le,ce.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let le=0;le<V.locationSize;le++)w(V.location+le,Se/V.locationSize,$,fe,Se*ie,Se/V.locationSize*le*ie,ve)}}else if(X!==void 0){const fe=X[ee];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(V.location,fe);break;case 3:n.vertexAttrib3fv(V.location,fe);break;case 4:n.vertexAttrib4fv(V.location,fe);break;default:n.vertexAttrib1fv(V.location,fe)}}}}M()}function P(){O();for(const E in i){const C=i[E];for(const q in C){const z=C[q];for(const J in z)u(z[J].object),delete z[J];delete C[q]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const C=i[E.id];for(const q in C){const z=C[q];for(const J in z)u(z[J].object),delete z[J];delete C[q]}delete i[E.id]}function T(E){for(const C in i){const q=i[C];if(q[E.id]===void 0)continue;const z=q[E.id];for(const J in z)u(z[J].object),delete z[J];delete q[E.id]}}function O(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Jy(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==an&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const O=T===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Gn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==_n&&!O)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function ex(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mi,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,w=M*4;let v=p.clippingState||null;c.value=v,v=u(g,h,w,f);for(let P=0;P!==w;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==_;++w,v+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tx(n){let e=new WeakMap;function t(o,a){return a===Pa?o.mapping=dr:a===Ia&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===Ia)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const er=4,Uu=[.125,.215,.35,.446,.526,.582],Ti=20,Yo=new Nc,Ou=new Le;let Ko=null,Zo=0,Jo=0,Qo=!1;const bi=(1+Math.sqrt(5))/2,Ki=1/bi,Fu=[new D(-bi,Ki,0),new D(bi,Ki,0),new D(-Ki,0,bi),new D(Ki,0,bi),new D(0,bi,-Ki),new D(0,bi,Ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Zo,Jo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:rs,format:an,colorSpace:zt,depthBuffer:!1},r=ku(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nx(s)),this._blurMaterial=ix(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,i,r){const a=new Nt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ou),u.toneMapping=si,u.autoClear=!1;const f=new ti({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Ct(new br,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Ou),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const w=this._cubeSize;Ns(r,M*w,p>2?w:0,w,w),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ns(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fu[(r-s-1)%Fu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ct(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let M=0;for(let T=0;T<Ti;++T){const O=T/_,b=Math.exp(-O*O/2);p.push(b),T===0?M+=b:T<m&&(M+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const v=this._sizeLods[r],P=3*v*(r>w-er?r-w+er:0),A=4*(this._cubeSize-v);Ns(t,P,A,3*v,2*v),c.setRenderTarget(t),c.render(d,Yo)}}function nx(n){const e=[],t=[],i=[];let r=n;const s=n-er+1+Uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-er?c=Uu[o-n+er-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),w=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,O=A>2?0:-1,b=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];M.set(b,_*g*A),w.set(h,m*g*A);const E=[A,A,A,A,A,A];v.set(E,p*g*A)}const P=new en;P.setAttribute("position",new Pt(M,_)),P.setAttribute("uv",new Pt(w,m)),P.setAttribute("faceIndex",new Pt(v,p)),e.push(P),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ku(n,e,t){const i=new Ni(n,e,t);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ix(n,e,t){const i=new Float32Array(Ti),r=new D(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function zu(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Hu(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function rx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pa||c===Ia,u=c===dr||c===hr;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Bu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Bu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ox(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let w=0,v=M.length;w<v;w+=3){const P=M[w+0],A=M[w+1],T=M[w+2];h.push(P,A,A,T,T,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let w=0,v=M.length/3-1;w<v;w+=3){const P=w+0,A=w+1,T=w+2;h.push(P,A,A,T,T,P)}}else return;const m=new(Th(h)?Lh:Ih)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function ax(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lx(n,e,t){const i=new WeakMap,r=new nt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var f=E;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*d),O=new Rh(T,P,A,d);O.type=_n,O.needsUpdate=!0;const b=v*4;for(let C=0;C<d;C++){const q=p[C],z=M[C],J=w[C],Z=P*A*4*C;for(let X=0;X<q.count;X++){const ee=X*b;g===!0&&(r.fromBufferAttribute(q,X),T[Z+ee+0]=r.x,T[Z+ee+1]=r.y,T[Z+ee+2]=r.z,T[Z+ee+3]=0),_===!0&&(r.fromBufferAttribute(z,X),T[Z+ee+4]=r.x,T[Z+ee+5]=r.y,T[Z+ee+6]=r.z,T[Z+ee+7]=0),m===!0&&(r.fromBufferAttribute(J,X),T[Z+ee+8]=r.x,T[Z+ee+9]=r.y,T[Z+ee+10]=r.z,T[Z+ee+11]=J.itemSize===4?r.w:1)}}h={count:d,texture:O,size:new $e(P,A)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ux(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const qh=new wt,Vu=new Hh(1,1),jh=new Rh,Yh=new lm,Kh=new Uh,Gu=[],Wu=[],Xu=new Float32Array(16),$u=new Float32Array(9),qu=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _o(n,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),Mt(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Mt(t,i)}}function _x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),Mt(t,i)}}function yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vu.compareFunction=wh,s=Vu):s=qh,t.setTexture2D(e||s,r)}function Ax(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yh,r)}function Rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kh,r)}function Cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jh,r)}function Px(n){switch(n){case 5126:return dx;case 35664:return hx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return _x;case 5124:case 35670:return yx;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return Ex;case 5125:return Sx;case 36294:return Mx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Ix(n,e){n.uniform1fv(this.addr,e)}function Lx(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dx(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Nx(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ux(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ox(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fx(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bx(n,e){n.uniform1iv(this.addr,e)}function kx(n,e){n.uniform2iv(this.addr,e)}function zx(n,e){n.uniform3iv(this.addr,e)}function Hx(n,e){n.uniform4iv(this.addr,e)}function Vx(n,e){n.uniform1uiv(this.addr,e)}function Gx(n,e){n.uniform2uiv(this.addr,e)}function Wx(n,e){n.uniform3uiv(this.addr,e)}function Xx(n,e){n.uniform4uiv(this.addr,e)}function $x(n,e,t){const i=this.cache,r=e.length,s=_o(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qh,s[o])}function qx(n,e,t){const i=this.cache,r=e.length,s=_o(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yh,s[o])}function jx(n,e,t){const i=this.cache,r=e.length,s=_o(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Kh,s[o])}function Yx(n,e,t){const i=this.cache,r=e.length,s=_o(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||jh,s[o])}function Kx(n){switch(n){case 5126:return Ix;case 35664:return Lx;case 35665:return Dx;case 35666:return Nx;case 35674:return Ux;case 35675:return Ox;case 35676:return Fx;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Yx}}class Zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Px(t.type)}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}}class Qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function ju(n,e){n.seq.push(e),n.map[e.id]=e}function e0(n,e,t){const i=n.name,r=i.length;for(ea.lastIndex=0;;){const s=ea.exec(i),o=ea.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ju(t,l===void 0?new Zx(a,n,e):new Jx(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Qx(a),ju(t,d)),t=d}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);e0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const t0=37297;let n0=0;function i0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ku=new Ue;function r0(n){Je._getMatrix(Ku,Je.workingColorSpace,n);const e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Qs:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+i0(n.getShaderSource(e),o)}else return r}function s0(n,e){const t=r0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o0(n,e){let t;switch(e){case _p:t="Linear";break;case yp:t="Reinhard";break;case xp:t="Cineon";break;case vp:t="ACESFilmic";break;case Sp:t="AgX";break;case Mp:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new D;function a0(){Je.getLuminanceCoefficients(Us);const n=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function l0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function u0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function Ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(d0,f0)}const h0=new Map;function f0(n,e){let t=Be[e];if(t===void 0){const i=h0.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(n){return n.replace(p0,m0)}function m0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function td(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function _0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case hr:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function x0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case mp:e="ENVMAP_BLENDING_MIX";break;case gp:e="ENVMAP_BLENDING_ADD";break}return e}function v0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function E0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=g0(t),l=_0(t),u=y0(t),d=x0(t),h=v0(t),f=c0(t),g=l0(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Be.tonemapping_pars_fragment:"",t.toneMapping!==si?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,s0("linearToOutputTexel",t.outputColorSpace),a0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=lc(o),o=Ju(o,t),o=Qu(o,t),a=lc(a),a=Ju(a,t),a=Qu(a,t),o=ed(o),a=ed(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+o,v=M+p+a,P=Yu(r,r.VERTEX_SHADER,w),A=Yu(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(C){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(P).trim(),J=r.getShaderInfoLog(A).trim();let Z=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{const ee=Zu(r,P,"vertex"),V=Zu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+ee+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||J==="")&&(X=!1);X&&(C.diagnostics={runnable:Z,programLog:q,vertexShader:{log:z,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(P),r.deleteShader(A),O=new Ys(r,_),b=u0(r,_)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,t0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let S0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new b0(e),t.set(e,i)),i}}class b0{constructor(e){this.id=S0++,this.code=e,this.usedTimes=0}}function w0(n,e,t,i,r,s,o){const a=new Ch,c=new M0,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,E,C,q,z){const J=q.fog,Z=z.geometry,X=b.isMeshStandardMaterial?q.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),V=ee&&ee.mapping===ho?ee.image.height:null,ce=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Se=fe!==void 0?fe.length:0;let Ie=0;Z.morphAttributes.position!==void 0&&(Ie=1),Z.morphAttributes.normal!==void 0&&(Ie=2),Z.morphAttributes.color!==void 0&&(Ie=3);let Qe,$,ie,ve;if(ce){const st=En[ce];Qe=st.vertexShader,$=st.fragmentShader}else Qe=b.vertexShader,$=b.fragmentShader,c.update(b),ie=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);const le=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,ke=z.isBatchedMesh===!0,dt=!!b.map,qe=!!b.matcap,gt=!!ee,R=!!b.aoMap,Ht=!!b.lightMap,Oe=!!b.bumpMap,He=!!b.normalMap,Ee=!!b.displacementMap,Q=!!b.emissiveMap,j=!!b.metalnessMap,S=!!b.roughnessMap,y=b.anisotropy>0,L=b.clearcoat>0,k=b.dispersion>0,W=b.iridescence>0,H=b.sheen>0,me=b.transmission>0,re=y&&!!b.anisotropyMap,se=L&&!!b.clearcoatMap,Ve=L&&!!b.clearcoatNormalMap,te=L&&!!b.clearcoatRoughnessMap,ge=W&&!!b.iridescenceMap,Te=W&&!!b.iridescenceThicknessMap,Re=H&&!!b.sheenColorMap,ye=H&&!!b.sheenRoughnessMap,Ke=!!b.specularMap,Fe=!!b.specularColorMap,ut=!!b.specularIntensityMap,I=me&&!!b.transmissionMap,ue=me&&!!b.thicknessMap,G=!!b.gradientMap,K=!!b.alphaMap,pe=b.alphaTest>0,he=!!b.alphaHash,Ne=!!b.extensions;let _t=si;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(_t=n.toneMapping);const It={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:$,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ke,batchingColor:ke&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:zt,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:qe,envMap:gt,envMapMode:gt&&ee.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:Ht,bumpMap:Oe,normalMap:He,displacementMap:h&&Ee,emissiveMap:Q,normalMapObjectSpace:He&&b.normalMapType===Cp,normalMapTangentSpace:He&&b.normalMapType===bh,metalnessMap:j,roughnessMap:S,anisotropy:y,anisotropyMap:re,clearcoat:L,clearcoatMap:se,clearcoatNormalMap:Ve,clearcoatRoughnessMap:te,dispersion:k,iridescence:W,iridescenceMap:ge,iridescenceThicknessMap:Te,sheen:H,sheenColorMap:Re,sheenRoughnessMap:ye,specularMap:Ke,specularColorMap:Fe,specularIntensityMap:ut,transmission:me,transmissionMap:I,thicknessMap:ue,gradientMap:G,opaque:b.transparent===!1&&b.blending===nr&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:pe,alphaHash:he,combine:b.combine,mapUv:dt&&_(b.map.channel),aoMapUv:R&&_(b.aoMap.channel),lightMapUv:Ht&&_(b.lightMap.channel),bumpMapUv:Oe&&_(b.bumpMap.channel),normalMapUv:He&&_(b.normalMap.channel),displacementMapUv:Ee&&_(b.displacementMap.channel),emissiveMapUv:Q&&_(b.emissiveMap.channel),metalnessMapUv:j&&_(b.metalnessMap.channel),roughnessMapUv:S&&_(b.roughnessMap.channel),anisotropyMapUv:re&&_(b.anisotropyMap.channel),clearcoatMapUv:se&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(b.sheenRoughnessMap.channel),specularMapUv:Ke&&_(b.specularMap.channel),specularColorMapUv:Fe&&_(b.specularColorMap.channel),specularIntensityMapUv:ut&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:ue&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(He||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(dt||K),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:Q&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Sn,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)E.push(C),E.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(E,b),w(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function M(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function w(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const E=g[b.type];let C;if(E){const q=En[E];C=Em.clone(q.uniforms)}else C=b.uniforms;return C}function P(b,E){let C;for(let q=0,z=u.length;q<z;q++){const J=u[q];if(J.cacheKey===E){C=J,++C.usedTimes;break}}return C===void 0&&(C=new E0(n,E,b,s),u.push(C)),C}function A(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:O}}function T0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function A0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function id(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||A0),i.length>1&&i.sort(h||nd),r.length>1&&r.sort(h||nd)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function R0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new id,n.set(i,[o])):r>=s.length?(o=new id,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function C0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function P0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I0=0;function L0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function D0(n){const e=new C0,t=P0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new De,o=new De;function a(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,w=0,v=0,P=0,A=0,T=0;l.sort(L0);for(let b=0,E=l.length;b<E;b++){const C=l[b],q=C.color,z=C.intensity,J=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=q.r*z,d+=q.g*z,h+=q.b*z;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],z);T++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=C.shadow.matrix,M++}i.directional[f]=X,f++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(q).multiplyScalar(z),X.distance=J,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[_]=X;const ee=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,ee.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=ee.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=Z,v++}_++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(q).multiplyScalar(z),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=X,m++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(z),X.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==M||O.numPointShadows!==w||O.numSpotShadows!==v||O.numSpotMaps!==P||O.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=M,O.numPointShadows=w,O.numSpotShadows=v,O.numSpotMaps=P,O.numLightProbes=T,i.version=I0++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const w=l[p];if(w.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(w.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function rd(n){const e=new D0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function N0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rd(n),e.set(r,[a])):s>=o.length?(a=new rd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`;function F0(n,e,t){let i=new Ic;const r=new $e,s=new $e,o=new nt,a=new Om({depthPacking:Rp}),c=new Fm,l={},u=t.maxTextureSize,d={[Vn]:Xt,[Xt]:Vn,[Sn]:Sn},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:U0,fragmentShader:O0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ct(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(A,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),E=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),q=n.state;q.setBlending(ri),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const z=p!==On&&this.type===On,J=p===On&&this.type!==On;for(let Z=0,X=A.length;Z<X;Z++){const ee=A[Z],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||z===!0||J===!0){const Se=this.type!==On?{minFilter:kt,magFilter:kt}:{};V.map!==null&&V.map.dispose(),V.map=new Ni(r.x,r.y,Se),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const fe=V.getViewportCount();for(let Se=0;Se<fe;Se++){const Ie=V.getViewport(Se);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),q.viewport(o),V.updateMatrices(ee,Se),i=V.getFrustum(),v(T,O,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===On&&M(V,O),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,E,C)};function M(A,T){const O=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ni(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,O,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,O,f,_,null)}function w(A,T,O,b){let E=null;const C=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)E=C;else if(E=O.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=E.uuid,z=T.uuid;let J=l[q];J===void 0&&(J={},l[q]=J);let Z=J[z];Z===void 0&&(Z=E.clone(),J[z]=Z,T.addEventListener("dispose",P)),E=Z}if(E.visible=T.visible,E.wireframe=T.wireframe,b===On?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const q=n.properties.get(E);q.light=O}return E}function v(A,T,O,b,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===On)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const z=e.update(A),J=A.material;if(Array.isArray(J)){const Z=z.groups;for(let X=0,ee=Z.length;X<ee;X++){const V=Z[X],ce=J[V.materialIndex];if(ce&&ce.visible){const fe=w(A,ce,b,E);A.onBeforeShadow(n,A,T,O,z,fe,V),n.renderBufferDirect(O,null,z,fe,A,V),A.onAfterShadow(n,A,T,O,z,fe,V)}}}else if(J.visible){const Z=w(A,J,b,E);A.onBeforeShadow(n,A,T,O,z,Z,null),n.renderBufferDirect(O,null,z,Z,A,null),A.onAfterShadow(n,A,T,O,z,Z,null)}}const q=A.children;for(let z=0,J=q.length;z<J;z++)v(q[z],T,O,b,E)}function P(A){A.target.removeEventListener("dispose",P);for(const O in l){const b=l[O],E=A.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const B0={[Ma]:ba,[wa]:Ra,[Ta]:Ca,[ur]:Aa,[ba]:Ma,[Ra]:wa,[Ca]:Ta,[Aa]:ur};function k0(n,e){function t(){let I=!1;const ue=new nt;let G=null;const K=new nt(0,0,0,0);return{setMask:function(pe){G!==pe&&!I&&(n.colorMask(pe,pe,pe,pe),G=pe)},setLocked:function(pe){I=pe},setClear:function(pe,he,Ne,_t,It){It===!0&&(pe*=_t,he*=_t,Ne*=_t),ue.set(pe,he,Ne,_t),K.equals(ue)===!1&&(n.clearColor(pe,he,Ne,_t),K.copy(ue))},reset:function(){I=!1,G=null,K.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,G=null,K=null,pe=null;return{setReversed:function(he){if(ue!==he){const Ne=e.get("EXT_clip_control");ue?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const _t=pe;pe=null,this.setClear(_t)}ue=he},getReversed:function(){return ue},setTest:function(he){he?le(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(he){G!==he&&!I&&(n.depthMask(he),G=he)},setFunc:function(he){if(ue&&(he=B0[he]),K!==he){switch(he){case Ma:n.depthFunc(n.NEVER);break;case ba:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Ta:n.depthFunc(n.EQUAL);break;case Aa:n.depthFunc(n.GEQUAL);break;case Ra:n.depthFunc(n.GREATER);break;case Ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=he}},setLocked:function(he){I=he},setClear:function(he){pe!==he&&(ue&&(he=1-he),n.clearDepth(he),pe=he)},reset:function(){I=!1,G=null,K=null,pe=null,ue=!1}}}function r(){let I=!1,ue=null,G=null,K=null,pe=null,he=null,Ne=null,_t=null,It=null;return{setTest:function(st){I||(st?le(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(st){ue!==st&&!I&&(n.stencilMask(st),ue=st)},setFunc:function(st,ln,Cn){(G!==st||K!==ln||pe!==Cn)&&(n.stencilFunc(st,ln,Cn),G=st,K=ln,pe=Cn)},setOp:function(st,ln,Cn){(he!==st||Ne!==ln||_t!==Cn)&&(n.stencilOp(st,ln,Cn),he=st,Ne=ln,_t=Cn)},setLocked:function(st){I=st},setClear:function(st){It!==st&&(n.clearStencil(st),It=st)},reset:function(){I=!1,ue=null,G=null,K=null,pe=null,he=null,Ne=null,_t=null,It=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,w=null,v=null,P=null,A=null,T=new Le(0,0,0),O=0,b=!1,E=null,C=null,q=null,z=null,J=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=ee>=2);let ce=null,fe={};const Se=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Qe=new nt().fromArray(Se),$=new nt().fromArray(Ie);function ie(I,ue,G,K){const pe=new Uint8Array(4),he=n.createTexture();n.bindTexture(I,he),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<G;Ne++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ue+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return he}const ve={};ve[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(ur),Oe(!1),He(Vl),le(n.CULL_FACE),R(ri);function le(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function be(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ae(I,ue){return d[I]!==ue?(n.bindFramebuffer(I,ue),d[I]=ue,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ke(I,ue){let G=f,K=!1;if(I){G=h.get(ue),G===void 0&&(G=[],h.set(ue,G));const pe=I.textures;if(G.length!==pe.length||G[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ne=pe.length;he<Ne;he++)G[he]=n.COLOR_ATTACHMENT0+he;G.length=pe.length,K=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,K=!0);K&&n.drawBuffers(G)}function dt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const qe={[wi]:n.FUNC_ADD,[Jf]:n.FUNC_SUBTRACT,[Qf]:n.FUNC_REVERSE_SUBTRACT};qe[ep]=n.MIN,qe[tp]=n.MAX;const gt={[np]:n.ZERO,[ip]:n.ONE,[rp]:n.SRC_COLOR,[Ea]:n.SRC_ALPHA,[up]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[op]:n.DST_ALPHA,[sp]:n.ONE_MINUS_SRC_COLOR,[Sa]:n.ONE_MINUS_SRC_ALPHA,[lp]:n.ONE_MINUS_DST_COLOR,[ap]:n.ONE_MINUS_DST_ALPHA,[dp]:n.CONSTANT_COLOR,[hp]:n.ONE_MINUS_CONSTANT_COLOR,[fp]:n.CONSTANT_ALPHA,[pp]:n.ONE_MINUS_CONSTANT_ALPHA};function R(I,ue,G,K,pe,he,Ne,_t,It,st){if(I===ri){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),I!==Zf){if(I!==m||st!==b){if((p!==wi||v!==wi)&&(n.blendEquation(n.FUNC_ADD),p=wi,v=wi),st)switch(I){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,w=null,P=null,A=null,T.set(0,0,0),O=0,m=I,b=st}return}pe=pe||ue,he=he||G,Ne=Ne||K,(ue!==p||pe!==v)&&(n.blendEquationSeparate(qe[ue],qe[pe]),p=ue,v=pe),(G!==M||K!==w||he!==P||Ne!==A)&&(n.blendFuncSeparate(gt[G],gt[K],gt[he],gt[Ne]),M=G,w=K,P=he,A=Ne),(_t.equals(T)===!1||It!==O)&&(n.blendColor(_t.r,_t.g,_t.b,It),T.copy(_t),O=It),m=I,b=!1}function Ht(I,ue){I.side===Sn?be(n.CULL_FACE):le(n.CULL_FACE);let G=I.side===Xt;ue&&(G=!G),Oe(G),I.blending===nr&&I.transparent===!1?R(ri):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Q(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function He(I){I!==jf?(le(n.CULL_FACE),I!==C&&(I===Vl?n.cullFace(n.BACK):I===Yf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),C=I}function Ee(I){I!==q&&(X&&n.lineWidth(I),q=I)}function Q(I,ue,G){I?(le(n.POLYGON_OFFSET_FILL),(z!==ue||J!==G)&&(n.polygonOffset(ue,G),z=ue,J=G)):be(n.POLYGON_OFFSET_FILL)}function j(I){I?le(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+Z-1),ce!==I&&(n.activeTexture(I),ce=I)}function y(I,ue,G){G===void 0&&(ce===null?G=n.TEXTURE0+Z-1:G=ce);let K=fe[G];K===void 0&&(K={type:void 0,texture:void 0},fe[G]=K),(K.type!==I||K.texture!==ue)&&(ce!==G&&(n.activeTexture(G),ce=G),n.bindTexture(I,ue||ve[I]),K.type=I,K.texture=ue)}function L(){const I=fe[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Qe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Qe.copy(I))}function ye(I){$.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Ke(I,ue){let G=l.get(ue);G===void 0&&(G=new WeakMap,l.set(ue,G));let K=G.get(I);K===void 0&&(K=n.getUniformBlockIndex(ue,I.name),G.set(I,K))}function Fe(I,ue){const K=l.get(ue).get(I);c.get(ue)!==K&&(n.uniformBlockBinding(ue,K,I.__bindingPointIndex),c.set(ue,K))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,fe={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,w=null,v=null,P=null,A=null,T=new Le(0,0,0),O=0,b=!1,E=null,C=null,q=null,z=null,J=null,Qe.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:Ae,drawBuffers:ke,useProgram:dt,setBlending:R,setMaterial:Ht,setFlipSided:Oe,setCullFace:He,setLineWidth:Ee,setPolygonOffset:Q,setScissorTest:j,activeTexture:S,bindTexture:y,unbindTexture:L,compressedTexImage2D:k,compressedTexImage3D:W,texImage2D:ge,texImage3D:Te,updateUBOMapping:Ke,uniformBlockBinding:Fe,texStorage2D:Ve,texStorage3D:te,texSubImage2D:H,texSubImage3D:me,compressedTexSubImage2D:re,compressedTexSubImage3D:se,scissor:Re,viewport:ye,reset:ut}}function z0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):es("canvas")}function _(S,y,L){let k=1;const W=j(S);if((W.width>L||W.height>L)&&(k=L/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const H=Math.floor(k*W.width),me=Math.floor(k*W.height);d===void 0&&(d=g(H,me));const re=y?g(H,me):d;return re.width=H,re.height=me,re.getContext("2d").drawImage(S,0,0,H,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+H+"x"+me+")."),re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,y,L,k,W=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=y;if(y===n.RED&&(L===n.FLOAT&&(H=n.R32F),L===n.HALF_FLOAT&&(H=n.R16F),L===n.UNSIGNED_BYTE&&(H=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.R8UI),L===n.UNSIGNED_SHORT&&(H=n.R16UI),L===n.UNSIGNED_INT&&(H=n.R32UI),L===n.BYTE&&(H=n.R8I),L===n.SHORT&&(H=n.R16I),L===n.INT&&(H=n.R32I)),y===n.RG&&(L===n.FLOAT&&(H=n.RG32F),L===n.HALF_FLOAT&&(H=n.RG16F),L===n.UNSIGNED_BYTE&&(H=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RG8UI),L===n.UNSIGNED_SHORT&&(H=n.RG16UI),L===n.UNSIGNED_INT&&(H=n.RG32UI),L===n.BYTE&&(H=n.RG8I),L===n.SHORT&&(H=n.RG16I),L===n.INT&&(H=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGB8UI),L===n.UNSIGNED_SHORT&&(H=n.RGB16UI),L===n.UNSIGNED_INT&&(H=n.RGB32UI),L===n.BYTE&&(H=n.RGB8I),L===n.SHORT&&(H=n.RGB16I),L===n.INT&&(H=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),L===n.UNSIGNED_INT&&(H=n.RGBA32UI),L===n.BYTE&&(H=n.RGBA8I),L===n.SHORT&&(H=n.RGBA16I),L===n.INT&&(H=n.RGBA32I)),y===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),y===n.RGBA){const me=W?Qs:Je.getTransfer(k);L===n.FLOAT&&(H=n.RGBA32F),L===n.HALF_FLOAT&&(H=n.RGBA16F),L===n.UNSIGNED_BYTE&&(H=me===ct?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function v(S,y){let L;return S?y===null||y===Di||y===fr?L=n.DEPTH24_STENCIL8:y===_n?L=n.DEPTH32F_STENCIL8:y===Zr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===fr?L=n.DEPTH_COMPONENT24:y===_n?L=n.DEPTH_COMPONENT32F:y===Zr&&(L=n.DEPTH_COMPONENT16),L}function P(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==kt&&S.minFilter!==Kt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function A(S){const y=S.target;y.removeEventListener("dispose",A),O(y),y.isVideoTexture&&u.delete(y)}function T(S){const y=S.target;y.removeEventListener("dispose",T),E(y)}function O(S){const y=i.get(S);if(y.__webglInit===void 0)return;const L=S.source,k=h.get(L);if(k){const W=k[y.__cacheKey];W.usedTimes--,W.usedTimes===0&&b(S),Object.keys(k).length===0&&h.delete(L)}i.remove(S)}function b(S){const y=i.get(S);n.deleteTexture(y.__webglTexture);const L=S.source,k=h.get(L);delete k[y.__cacheKey],o.memory.textures--}function E(S){const y=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let W=0;W<y.__webglFramebuffer[k].length;W++)n.deleteFramebuffer(y.__webglFramebuffer[k][W]);else n.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)n.deleteFramebuffer(y.__webglFramebuffer[k]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const L=S.textures;for(let k=0,W=L.length;k<W;k++){const H=i.get(L[k]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(L[k])}i.remove(S)}let C=0;function q(){C=0}function z(){const S=C;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),C+=1,S}function J(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function Z(S,y){const L=i.get(S);if(S.isVideoTexture&&Ee(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const k=S.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,S,y);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function X(S,y){const L=i.get(S);if(S.version>0&&L.__version!==S.version){$(L,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function ee(S,y){const L=i.get(S);if(S.version>0&&L.__version!==S.version){$(L,S,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function V(S,y){const L=i.get(S);if(S.version>0&&L.__version!==S.version){ie(L,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}const ce={[Li]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[Js]:n.MIRRORED_REPEAT},fe={[kt]:n.NEAREST,[fh]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Gs]:n.LINEAR_MIPMAP_NEAREST,[Bn]:n.LINEAR_MIPMAP_LINEAR},Se={[Pp]:n.NEVER,[Op]:n.ALWAYS,[Ip]:n.LESS,[wh]:n.LEQUAL,[Lp]:n.EQUAL,[Up]:n.GEQUAL,[Dp]:n.GREATER,[Np]:n.NOTEQUAL};function Ie(S,y){if(y.type===_n&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Kt||y.magFilter===Gs||y.magFilter===Hr||y.magFilter===Bn||y.minFilter===Kt||y.minFilter===Gs||y.minFilter===Hr||y.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ce[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ce[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ce[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,fe[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===kt||y.minFilter!==Hr&&y.minFilter!==Bn||y.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(S,y){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",A));const k=y.source;let W=h.get(k);W===void 0&&(W={},h.set(k,W));const H=J(y);if(H!==S.__cacheKey){W[H]===void 0&&(W[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),W[H].usedTimes++;const me=W[S.__cacheKey];me!==void 0&&(W[S.__cacheKey].usedTimes--,me.usedTimes===0&&b(y)),S.__cacheKey=H,S.__webglTexture=W[H].texture}return L}function $(S,y,L){let k=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=n.TEXTURE_3D);const W=Qe(S,y),H=y.source;t.bindTexture(k,S.__webglTexture,n.TEXTURE0+L);const me=i.get(H);if(H.version!==me.__version||W===!0){t.activeTexture(n.TEXTURE0+L);const re=Je.getPrimaries(Je.workingColorSpace),se=y.colorSpace===Qn?null:Je.getPrimaries(y.colorSpace),Ve=y.colorSpace===Qn||re===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let te=_(y.image,!1,r.maxTextureSize);te=Q(y,te);const ge=s.convert(y.format,y.colorSpace),Te=s.convert(y.type);let Re=w(y.internalFormat,ge,Te,y.colorSpace,y.isVideoTexture);Ie(k,y);let ye;const Ke=y.mipmaps,Fe=y.isVideoTexture!==!0,ut=me.__version===void 0||W===!0,I=H.dataReady,ue=P(y,te);if(y.isDepthTexture)Re=v(y.format===pr,y.type),ut&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Re,te.width,te.height,0,ge,Te,null));else if(y.isDataTexture)if(Ke.length>0){Fe&&ut&&t.texStorage2D(n.TEXTURE_2D,ue,Re,Ke[0].width,Ke[0].height);for(let G=0,K=Ke.length;G<K;G++)ye=Ke[G],Fe?I&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ye.width,ye.height,ge,Te,ye.data):t.texImage2D(n.TEXTURE_2D,G,Re,ye.width,ye.height,0,ge,Te,ye.data);y.generateMipmaps=!1}else Fe?(ut&&t.texStorage2D(n.TEXTURE_2D,ue,Re,te.width,te.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ge,Te,te.data)):t.texImage2D(n.TEXTURE_2D,0,Re,te.width,te.height,0,ge,Te,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Re,Ke[0].width,Ke[0].height,te.depth);for(let G=0,K=Ke.length;G<K;G++)if(ye=Ke[G],y.format!==an)if(ge!==null)if(Fe){if(I)if(y.layerUpdates.size>0){const pe=Nu(ye.width,ye.height,y.format,y.type);for(const he of y.layerUpdates){const Ne=ye.data.subarray(he*pe/ye.data.BYTES_PER_ELEMENT,(he+1)*pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,he,ye.width,ye.height,1,ge,Ne)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,te.depth,ge,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Re,ye.width,ye.height,te.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,te.depth,ge,Te,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Re,ye.width,ye.height,te.depth,0,ge,Te,ye.data)}else{Fe&&ut&&t.texStorage2D(n.TEXTURE_2D,ue,Re,Ke[0].width,Ke[0].height);for(let G=0,K=Ke.length;G<K;G++)ye=Ke[G],y.format!==an?ge!==null?Fe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Re,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ye.width,ye.height,ge,Te,ye.data):t.texImage2D(n.TEXTURE_2D,G,Re,ye.width,ye.height,0,ge,Te,ye.data)}else if(y.isDataArrayTexture)if(Fe){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Re,te.width,te.height,te.depth),I)if(y.layerUpdates.size>0){const G=Nu(te.width,te.height,y.format,y.type);for(const K of y.layerUpdates){const pe=te.data.subarray(K*G/te.data.BYTES_PER_ELEMENT,(K+1)*G/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ge,Te,pe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Te,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,ge,Te,te.data);else if(y.isData3DTexture)Fe?(ut&&t.texStorage3D(n.TEXTURE_3D,ue,Re,te.width,te.height,te.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Te,te.data)):t.texImage3D(n.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,ge,Te,te.data);else if(y.isFramebufferTexture){if(ut)if(Fe)t.texStorage2D(n.TEXTURE_2D,ue,Re,te.width,te.height);else{let G=te.width,K=te.height;for(let pe=0;pe<ue;pe++)t.texImage2D(n.TEXTURE_2D,pe,Re,G,K,0,ge,Te,null),G>>=1,K>>=1}}else if(Ke.length>0){if(Fe&&ut){const G=j(Ke[0]);t.texStorage2D(n.TEXTURE_2D,ue,Re,G.width,G.height)}for(let G=0,K=Ke.length;G<K;G++)ye=Ke[G],Fe?I&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge,Te,ye):t.texImage2D(n.TEXTURE_2D,G,Re,ge,Te,ye);y.generateMipmaps=!1}else if(Fe){if(ut){const G=j(te);t.texStorage2D(n.TEXTURE_2D,ue,Re,G.width,G.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Te,te)}else t.texImage2D(n.TEXTURE_2D,0,Re,ge,Te,te);m(y)&&p(k),me.__version=H.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ie(S,y,L){if(y.image.length!==6)return;const k=Qe(S,y),W=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const H=i.get(W);if(W.version!==H.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const me=Je.getPrimaries(Je.workingColorSpace),re=y.colorSpace===Qn?null:Je.getPrimaries(y.colorSpace),se=y.colorSpace===Qn||me===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Ve=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!Ve&&!te?ge[K]=_(y.image[K],!0,r.maxCubemapSize):ge[K]=te?y.image[K].image:y.image[K],ge[K]=Q(y,ge[K]);const Te=ge[0],Re=s.convert(y.format,y.colorSpace),ye=s.convert(y.type),Ke=w(y.internalFormat,Re,ye,y.colorSpace),Fe=y.isVideoTexture!==!0,ut=H.__version===void 0||k===!0,I=W.dataReady;let ue=P(y,Te);Ie(n.TEXTURE_CUBE_MAP,y);let G;if(Ve){Fe&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ke,Te.width,Te.height);for(let K=0;K<6;K++){G=ge[K].mipmaps;for(let pe=0;pe<G.length;pe++){const he=G[pe];y.format!==an?Re!==null?Fe?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,he.width,he.height,Re,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,he.width,he.height,Re,ye,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ke,he.width,he.height,0,Re,ye,he.data)}}}else{if(G=y.mipmaps,Fe&&ut){G.length>0&&ue++;const K=j(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ke,K.width,K.height)}for(let K=0;K<6;K++)if(te){Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,Re,ye,ge[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ke,ge[K].width,ge[K].height,0,Re,ye,ge[K].data);for(let pe=0;pe<G.length;pe++){const Ne=G[pe].image[K].image;Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Ne.width,Ne.height,Re,ye,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ke,Ne.width,Ne.height,0,Re,ye,Ne.data)}}else{Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,ye,ge[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ke,Re,ye,ge[K]);for(let pe=0;pe<G.length;pe++){const he=G[pe];Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Re,ye,he.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ke,Re,ye,he.image[K])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),H.__version=W.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ve(S,y,L,k,W,H){const me=s.convert(L.format,L.colorSpace),re=s.convert(L.type),se=w(L.internalFormat,me,re,L.colorSpace),Ve=i.get(y),te=i.get(L);if(te.__renderTarget=y,!Ve.__hasExternalTextures){const ge=Math.max(1,y.width>>H),Te=Math.max(1,y.height>>H);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,H,se,ge,Te,y.depth,0,me,re,null):t.texImage2D(W,H,se,ge,Te,0,me,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),He(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,W,te.__webglTexture,0,Oe(y)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,W,te.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(S,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){const k=y.depthTexture,W=k&&k.isDepthTexture?k.type:null,H=v(y.stencilBuffer,W),me=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Oe(y);He(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,H,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,H,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,H,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,S)}else{const k=y.textures;for(let W=0;W<k.length;W++){const H=k[W],me=s.convert(H.format,H.colorSpace),re=s.convert(H.type),se=w(H.internalFormat,me,re,H.colorSpace),Ve=Oe(y);L&&He(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,se,y.width,y.height):He(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(y.depthTexture);k.__renderTarget=y,(!k.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const W=k.__webglTexture,H=Oe(y);if(y.depthTexture.format===ir)He(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(y.depthTexture.format===pr)He(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ae(S){const y=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){const k=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),k){const W=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),y.__depthDisposeCallback=W}y.__boundDepthTexture=k}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");be(y.__webglFramebuffer,S)}else if(L){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=n.createRenderbuffer(),le(y.__webglDepthbuffer[k],S,!1);else{const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),le(y.__webglDepthbuffer,S,!1);else{const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(S,y,L){const k=i.get(S);y!==void 0&&ve(k.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ae(S)}function dt(S){const y=S.texture,L=i.get(S),k=i.get(y);S.addEventListener("dispose",T);const W=S.textures,H=S.isWebGLCubeRenderTarget===!0,me=W.length>1;if(me||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=y.version,o.memory.textures++),H){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let se=0;se<y.mipmaps.length;se++)L.__webglFramebuffer[re][se]=n.createFramebuffer()}else L.__webglFramebuffer[re]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)L.__webglFramebuffer[re]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(me)for(let re=0,se=W.length;re<se;re++){const Ve=i.get(W[re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&He(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let re=0;re<W.length;re++){const se=W[re];L.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[re]);const Ve=s.convert(se.format,se.colorSpace),te=s.convert(se.type),ge=w(se.internalFormat,Ve,te,se.colorSpace,S.isXRRenderTarget===!0),Te=Oe(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,L.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),le(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)ve(L.__webglFramebuffer[re][se],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,se);else ve(L.__webglFramebuffer[re],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let re=0,se=W.length;re<se;re++){const Ve=W[re],te=i.get(Ve);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Ie(n.TEXTURE_2D,Ve),ve(L.__webglFramebuffer,S,Ve,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Ve)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,k.__webglTexture),Ie(re,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)ve(L.__webglFramebuffer[se],S,y,n.COLOR_ATTACHMENT0,re,se);else ve(L.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,re,0);m(y)&&p(re),t.unbindTexture()}S.depthBuffer&&Ae(S)}function qe(S){const y=S.textures;for(let L=0,k=y.length;L<k;L++){const W=y[L];if(m(W)){const H=M(S),me=i.get(W).__webglTexture;t.bindTexture(H,me),p(H),t.unbindTexture()}}}const gt=[],R=[];function Ht(S){if(S.samples>0){if(He(S)===!1){const y=S.textures,L=S.width,k=S.height;let W=n.COLOR_BUFFER_BIT;const H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(S),re=y.length>1;if(re)for(let se=0;se<y.length;se++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let se=0;se<y.length;se++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[se]);const Ve=i.get(y[se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,L,k,0,0,L,k,W,n.NEAREST),c===!0&&(gt.length=0,R.length=0,gt.push(n.COLOR_ATTACHMENT0+se),S.depthBuffer&&S.resolveDepthBuffer===!1&&(gt.push(H),R.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let se=0;se<y.length;se++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,me.__webglColorRenderbuffer[se]);const Ve=i.get(y[se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Oe(S){return Math.min(r.maxSamples,S.samples)}function He(S){const y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ee(S){const y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function Q(S,y){const L=S.colorSpace,k=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==zt&&L!==Qn&&(Je.getTransfer(L)===ct?(k!==an||W!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=He}function H0(n,e){function t(i,r=Qn){let s;const o=Je.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===rs)return n.HALF_FLOAT;if(i===_h)return n.ALPHA;if(i===yh)return n.RGB;if(i===an)return n.RGBA;if(i===xh)return n.LUMINANCE;if(i===vh)return n.LUMINANCE_ALPHA;if(i===ir)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===bc)return n.RED;if(i===wc)return n.RED_INTEGER;if(i===Eh)return n.RG;if(i===Tc)return n.RG_INTEGER;if(i===Ac)return n.RGBA_INTEGER;if(i===Ws||i===Xs||i===$s||i===qs)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===Da||i===Na||i===Ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===La)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Fa||i===Ba)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oa||i===Fa)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ba)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ka||i===za||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===$a||i===qa||i===ja||i===Ya||i===Ka||i===Za||i===Ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ka)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===za)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Va)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ga)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$a)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ja)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Za)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ja)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===js||i===Qa||i===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===js)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sh||i===tc||i===nc||i===ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===js)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const V0={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:G0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=new X0,m=t.getContextAttributes();let p=null,M=null;const w=[],v=[],P=new $e;let A=null;const T=new Nt;T.viewport=new nt;const O=new Nt;O.viewport=new nt;const b=[T,O],E=new ig;let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=w[$];return ie===void 0&&(ie=new ta,w[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=w[$];return ie===void 0&&(ie=new ta,w[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=w[$];return ie===void 0&&(ie=new ta,w[$]=ie),ie.getHandSpace()};function z($){const ie=v.indexOf($.inputSource);if(ie===-1)return;const ve=w[ie];ve!==void 0&&(ve.update($.inputSource,$.frame,l||o),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function J(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Z);for(let $=0;$<w.length;$++){const ie=v[$];ie!==null&&(v[$]=null,w[$].disconnect(ie))}C=null,q=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,M=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ni(f.framebufferWidth,f.framebufferHeight,{format:an,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ve=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?pr:ir,ve=m.stencil?fr:Di);const be={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Ni(h.textureWidth,h.textureHeight,{format:an,type:Gn,depthTexture:new Hh(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z($){for(let ie=0;ie<$.removed.length;ie++){const ve=$.removed[ie],le=v.indexOf(ve);le>=0&&(v[le]=null,w[le].disconnect(ve))}for(let ie=0;ie<$.added.length;ie++){const ve=$.added[ie];let le=v.indexOf(ve);if(le===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=v.length){v.push(ve),le=Ae;break}else if(v[Ae]===null){v[Ae]=ve,le=Ae;break}if(le===-1)break}const be=w[le];be&&be.connect(ve)}}const X=new D,ee=new D;function V($,ie,ve){X.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const le=X.distanceTo(ee),be=ie.projectionMatrix.elements,Ae=ve.projectionMatrix.elements,ke=be[14]/(be[10]-1),dt=be[14]/(be[10]+1),qe=(be[9]+1)/be[5],gt=(be[9]-1)/be[5],R=(be[8]-1)/be[0],Ht=(Ae[8]+1)/Ae[0],Oe=ke*R,He=ke*Ht,Ee=le/(-R+Ht),Q=Ee*-R;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Q),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const j=ke+Ee,S=dt+Ee,y=Oe-Q,L=He+(le-Q),k=qe*dt/S*j,W=gt*dt/S*j;$.projectionMatrix.makePerspective(y,L,k,W,j,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,ve=$.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),E.near=O.near=T.near=ie,E.far=O.far=T.far=ve,(C!==E.near||q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,q=E.far),T.layers.mask=$.layers.mask|2,O.layers.mask=$.layers.mask|4,E.layers.mask=T.layers.mask|O.layers.mask;const le=$.parent,be=E.cameras;ce(E,le);for(let Ae=0;Ae<be.length;Ae++)ce(be[Ae],le);be.length===2?V(E,T,O):E.projectionMatrix.copy(T.projectionMatrix),fe($,E,le)};function fe($,ie,ve){ve===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=mr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Se=null;function Ie($,ie){if(u=ie.getViewerPose(l||o),g=ie,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,le=!0);for(let Ae=0;Ae<ve.length;Ae++){const ke=ve[Ae];let dt=null;if(f!==null)dt=f.getViewport(ke);else{const gt=d.getViewSubImage(h,ke);dt=gt.viewport,Ae===0&&(e.setRenderTargetTextures(M,gt.colorTexture,h.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(M))}let qe=b[Ae];qe===void 0&&(qe=new Nt,qe.layers.enable(Ae),qe.viewport=new nt,b[Ae]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(dt.x,dt.y,dt.width,dt.height),Ae===0&&(E.matrix.copy(qe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),le===!0&&E.cameras.push(qe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ae=d.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let ve=0;ve<w.length;ve++){const le=v[ve],be=w[ve];le!==null&&be!==void 0&&be.update(le,ie,l||o)}Se&&Se($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Qe=new $h;Qe.setAnimationLoop(Ie),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}}const vi=new bn,q0=new De;function j0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,w,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,vi.copy(v),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(q0.makeRotationFromEuler(vi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Y0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const v=w.program;i.uniformBlockBinding(M,v)}function l(M,w){let v=r[M.id];v===void 0&&(g(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",m));const P=w.program;i.updateUBOMapping(M,P);const A=e.render.frame;s[M.id]!==A&&(h(M),s[M.id]=A)}function u(M){const w=d();M.__bindingPointIndex=w;const v=n.createBuffer(),P=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=r[M.id],v=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,T=v.length;A<T;A++){const O=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,E=O.length;b<E;b++){const C=O[b];if(f(C,A,b,P)===!0){const q=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let J=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],ee=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,q+J,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,J),J+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,w,v,P){const A=M.value,T=w+"_"+v;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const O=P[T];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return P[T]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(M){const w=M.uniforms;let v=0;const P=16;for(let T=0,O=w.length;T<O;T++){const b=Array.isArray(w[T])?w[T]:[w[T]];for(let E=0,C=b.length;E<C;E++){const q=b[E],z=Array.isArray(q.value)?q.value:[q.value];for(let J=0,Z=z.length;J<Z;J++){const X=z[J],ee=_(X),V=v%P,ce=V%ee.boundary,fe=V+ce;v+=ce,fe!==0&&P-fe<ee.storage&&(v+=P-fe),q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=ee.storage}}}const A=v%P;return A>0&&(v+=P-A),M.__size=v,M.__cache={},this}function _(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){const w=M.target;w.removeEventListener("dispose",m);const v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Zh{constructor(e={}){const{canvas:t=em(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let P=!1,A=0,T=0,O=null,b=-1,E=null;const C=new nt,q=new nt;let z=null;const J=new Le(0);let Z=0,X=t.width,ee=t.height,V=1,ce=null,fe=null;const Se=new nt(0,0,X,ee),Ie=new nt(0,0,X,ee);let Qe=!1;const $=new Ic;let ie=!1,ve=!1;const le=new De,be=new De,Ae=new D,ke=new nt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function gt(){return O===null?V:1}let R=i;function Ht(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",he,!1),R===null){const N="webgl2";if(R=Ht(N,x),R===null)throw Ht(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Oe,He,Ee,Q,j,S,y,L,k,W,H,me,re,se,Ve,te,ge,Te,Re,ye,Ke,Fe,ut,I;function ue(){Oe=new sx(R),Oe.init(),Fe=new H0(R,Oe),He=new Qy(R,Oe,e,Fe),Ee=new k0(R,Oe),He.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),Q=new cx(R),j=new T0,S=new z0(R,Oe,Ee,j,He,Fe,Q),y=new tx(v),L=new rx(v),k=new mg(R),ut=new Zy(R,k),W=new ox(R,k,Q,ut),H=new ux(R,W,k,Q),Re=new lx(R,He,S),te=new ex(j),me=new w0(v,y,L,Oe,He,ut,te),re=new j0(v,j),se=new R0,Ve=new N0(Oe),Te=new Ky(v,y,L,Ee,H,f,c),ge=new F0(v,H,He),I=new Y0(R,Q,He,Ee),ye=new Jy(R,Oe,Q),Ke=new ax(R,Oe,Q),Q.programs=me.programs,v.capabilities=He,v.extensions=Oe,v.properties=j,v.renderLists=se,v.shadowMap=ge,v.state=Ee,v.info=Q}ue();const G=new $0(v,R);this.xr=G,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=Oe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Oe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(X,ee,!1))},this.getSize=function(x){return x.set(X,ee)},this.setSize=function(x,N,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,ee=N,t.width=Math.floor(x*V),t.height=Math.floor(N*V),F===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(X*V,ee*V).floor()},this.setDrawingBufferSize=function(x,N,F){X=x,ee=N,V=F,t.width=Math.floor(x*F),t.height=Math.floor(N*F),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,N,F,B){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,N,F,B),Ee.viewport(C.copy(Se).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Ie)},this.setScissor=function(x,N,F,B){x.isVector4?Ie.set(x.x,x.y,x.z,x.w):Ie.set(x,N,F,B),Ee.scissor(q.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(x){Ee.setScissorTest(Qe=x)},this.setOpaqueSort=function(x){ce=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(x=!0,N=!0,F=!0){let B=0;if(x){let U=!1;if(O!==null){const ne=O.texture.format;U=ne===Ac||ne===Tc||ne===wc}if(U){const ne=O.texture.type,de=ne===Gn||ne===Di||ne===Zr||ne===fr||ne===Sc||ne===Mc,_e=Te.getClearColor(),xe=Te.getClearAlpha(),Ce=_e.r,Pe=_e.g,Me=_e.b;de?(g[0]=Ce,g[1]=Pe,g[2]=Me,g[3]=xe,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ce,_[1]=Pe,_[2]=Me,_[3]=xe,R.clearBufferiv(R.COLOR,0,_))}else B|=R.COLOR_BUFFER_BIT}N&&(B|=R.DEPTH_BUFFER_BIT),F&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Te.dispose(),se.dispose(),Ve.dispose(),j.dispose(),y.dispose(),L.dispose(),H.dispose(),ut.dispose(),I.dispose(),me.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ul),G.removeEventListener("sessionend",Ol),fi.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const x=Q.autoReset,N=ge.enabled,F=ge.autoUpdate,B=ge.needsUpdate,U=ge.type;ue(),Q.autoReset=x,ge.enabled=N,ge.autoUpdate=F,ge.needsUpdate=B,ge.type=U}function he(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ne(x){const N=x.target;N.removeEventListener("dispose",Ne),_t(N)}function _t(x){It(x),j.remove(x)}function It(x){const N=j.get(x).programs;N!==void 0&&(N.forEach(function(F){me.releaseProgram(F)}),x.isShaderMaterial&&me.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,F,B,U,ne){N===null&&(N=dt);const de=U.isMesh&&U.matrixWorld.determinant()<0,_e=zf(x,N,F,B,U);Ee.setMaterial(B,de);let xe=F.index,Ce=1;if(B.wireframe===!0){if(xe=W.getWireframeAttribute(F),xe===void 0)return;Ce=2}const Pe=F.drawRange,Me=F.attributes.position;let et=Pe.start*Ce,it=(Pe.start+Pe.count)*Ce;ne!==null&&(et=Math.max(et,ne.start*Ce),it=Math.min(it,(ne.start+ne.count)*Ce)),xe!==null?(et=Math.max(et,0),it=Math.min(it,xe.count)):Me!=null&&(et=Math.max(et,0),it=Math.min(it,Me.count));const vt=it-et;if(vt<0||vt===1/0)return;ut.setup(U,B,_e,F,xe);let yt,tt=ye;if(xe!==null&&(yt=k.get(xe),tt=Ke,tt.setIndex(yt)),U.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*gt()),tt.setMode(R.LINES)):tt.setMode(R.TRIANGLES);else if(U.isLine){let we=B.linewidth;we===void 0&&(we=1),Ee.setLineWidth(we*gt()),U.isLineSegments?tt.setMode(R.LINES):U.isLineLoop?tt.setMode(R.LINE_LOOP):tt.setMode(R.LINE_STRIP)}else U.isPoints?tt.setMode(R.POINTS):U.isSprite&&tt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,Tt=U._multiDrawCounts,rt=U._multiDrawCount,un=xe?k.get(xe).bytesPerElement:1,Ui=j.get(B).currentProgram.getUniforms();for(let $t=0;$t<rt;$t++)Ui.setValue(R,"_gl_DrawID",$t),tt.render(we[$t]/un,Tt[$t])}else if(U.isInstancedMesh)tt.renderInstances(et,vt,U.count);else if(F.isInstancedBufferGeometry){const we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Tt=Math.min(F.instanceCount,we);tt.renderInstances(et,vt,Tt)}else tt.render(et,vt)};function st(x,N,F){x.transparent===!0&&x.side===Sn&&x.forceSinglePass===!1?(x.side=Xt,x.needsUpdate=!0,cs(x,N,F),x.side=Vn,x.needsUpdate=!0,cs(x,N,F),x.side=Sn):cs(x,N,F)}this.compile=function(x,N,F=null){F===null&&(F=x),p=Ve.get(F),p.init(N),w.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),x!==F&&x.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const B=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const _e=ne[de];st(_e,F,U),B.add(_e)}else st(ne,F,U),B.add(ne)}),w.pop(),p=null,B},this.compileAsync=function(x,N,F=null){const B=this.compile(x,N,F);return new Promise(U=>{function ne(){if(B.forEach(function(de){j.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){U(x);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let ln=null;function Cn(x){ln&&ln(x)}function Ul(){fi.stop()}function Ol(){fi.start()}const fi=new $h;fi.setAnimationLoop(Cn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(x){ln=x,G.setAnimationLoop(x),x===null?fi.stop():fi.start()},G.addEventListener("sessionstart",Ul),G.addEventListener("sessionend",Ol),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,N,O),p=Ve.get(x,w.length),p.init(N),w.push(p),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(be),ve=this.localClippingEnabled,ie=te.init(this.clippingPlanes,ve),m=se.get(x,M.length),m.init(),M.push(m),G.enabled===!0&&G.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&Eo(ne,N,-1/0,v.sortObjects)}Eo(x,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ce,fe),qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,qe&&Te.addToRenderList(m,x),this.info.render.frame++,ie===!0&&te.beginShadows();const F=p.state.shadowsArray;ge.render(F,x,N),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ne=N.cameras;if(U.length>0)for(let de=0,_e=ne.length;de<_e;de++){const xe=ne[de];Bl(B,U,x,xe)}qe&&Te.render(x);for(let de=0,_e=ne.length;de<_e;de++){const xe=ne[de];Fl(m,x,xe,xe.viewport)}}else U.length>0&&Bl(B,U,x,N),qe&&Te.render(x),Fl(m,x,N);O!==null&&(S.updateMultisampleRenderTarget(O),S.updateRenderTargetMipmap(O)),x.isScene===!0&&x.onAfterRender(v,x,N),ut.resetDefaultState(),b=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],ie===!0&&te.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Eo(x,N,F,B){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){B&&ke.setFromMatrixPosition(x.matrixWorld).applyMatrix4(be);const de=H.update(x),_e=x.material;_e.visible&&m.push(x,de,_e,F,ke.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$.intersectsObject(x))){const de=H.update(x),_e=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ke.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ke.copy(de.boundingSphere.center)),ke.applyMatrix4(x.matrixWorld).applyMatrix4(be)),Array.isArray(_e)){const xe=de.groups;for(let Ce=0,Pe=xe.length;Ce<Pe;Ce++){const Me=xe[Ce],et=_e[Me.materialIndex];et&&et.visible&&m.push(x,de,et,F,ke.z,Me)}}else _e.visible&&m.push(x,de,_e,F,ke.z,null)}}const ne=x.children;for(let de=0,_e=ne.length;de<_e;de++)Eo(ne[de],N,F,B)}function Fl(x,N,F,B){const U=x.opaque,ne=x.transmissive,de=x.transparent;p.setupLightsView(F),ie===!0&&te.setGlobalState(v.clippingPlanes,F),B&&Ee.viewport(C.copy(B)),U.length>0&&as(U,N,F),ne.length>0&&as(ne,N,F),de.length>0&&as(de,N,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Bl(x,N,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ni(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?rs:Gn,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ne=p.state.transmissionRenderTarget[B.id],de=B.viewport||C;ne.setSize(de.z,de.w);const _e=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(J),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),qe&&Te.render(F);const xe=v.toneMapping;v.toneMapping=si;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),ie===!0&&te.setGlobalState(v.clippingPlanes,B),as(x,F,B),S.updateMultisampleRenderTarget(ne),S.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Me=0,et=N.length;Me<et;Me++){const it=N[Me],vt=it.object,yt=it.geometry,tt=it.material,we=it.group;if(tt.side===Sn&&vt.layers.test(B.layers)){const Tt=tt.side;tt.side=Xt,tt.needsUpdate=!0,kl(vt,F,B,yt,tt,we),tt.side=Tt,tt.needsUpdate=!0,Pe=!0}}Pe===!0&&(S.updateMultisampleRenderTarget(ne),S.updateRenderTargetMipmap(ne))}v.setRenderTarget(_e),v.setClearColor(J,Z),Ce!==void 0&&(B.viewport=Ce),v.toneMapping=xe}function as(x,N,F){const B=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=x.length;U<ne;U++){const de=x[U],_e=de.object,xe=de.geometry,Ce=B===null?de.material:B,Pe=de.group;_e.layers.test(F.layers)&&kl(_e,N,F,xe,Ce,Pe)}}function kl(x,N,F,B,U,ne){x.onBeforeRender(v,N,F,B,U,ne),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(v,N,F,B,x,ne),U.transparent===!0&&U.side===Sn&&U.forceSinglePass===!1?(U.side=Xt,U.needsUpdate=!0,v.renderBufferDirect(F,N,B,U,x,ne),U.side=Vn,U.needsUpdate=!0,v.renderBufferDirect(F,N,B,U,x,ne),U.side=Sn):v.renderBufferDirect(F,N,B,U,x,ne),x.onAfterRender(v,N,F,B,U,ne)}function cs(x,N,F){N.isScene!==!0&&(N=dt);const B=j.get(x),U=p.state.lights,ne=p.state.shadowsArray,de=U.state.version,_e=me.getParameters(x,U.state,ne,N,F),xe=me.getProgramCacheKey(_e);let Ce=B.programs;B.environment=x.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(x.isMeshStandardMaterial?L:y).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",Ne),Ce=new Map,B.programs=Ce);let Pe=Ce.get(xe);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===de)return Hl(x,_e),Pe}else _e.uniforms=me.getUniforms(x),x.onBeforeCompile(_e,v),Pe=me.acquireProgram(_e,xe),Ce.set(xe,Pe),B.uniforms=_e.uniforms;const Me=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=te.uniform),Hl(x,_e),B.needsLights=Vf(x),B.lightsStateVersion=de,B.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function zl(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Ys.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function Hl(x,N){const F=j.get(x);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function zf(x,N,F,B,U){N.isScene!==!0&&(N=dt),S.resetTextureUnits();const ne=N.fog,de=B.isMeshStandardMaterial?N.environment:null,_e=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:zt,xe=(B.isMeshStandardMaterial?L:y).get(B.envMap||de),Ce=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!F.morphAttributes.position,et=!!F.morphAttributes.normal,it=!!F.morphAttributes.color;let vt=si;B.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(vt=v.toneMapping);const yt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=yt!==void 0?yt.length:0,we=j.get(B),Tt=p.state.lights;if(ie===!0&&(ve===!0||x!==E)){const Ut=x===E&&B.id===b;te.setState(B,x,Ut)}let rt=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Tt.state.version||we.outputColorSpace!==_e||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==xe||B.fog===!0&&we.fog!==ne||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Pe||we.morphTargets!==Me||we.morphNormals!==et||we.morphColors!==it||we.toneMapping!==vt||we.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,we.__version=B.version);let un=we.currentProgram;rt===!0&&(un=cs(B,N,U));let Ui=!1,$t=!1,Pr=!1;const ht=un.getUniforms(),tn=we.uniforms;if(Ee.useProgram(un.program)&&(Ui=!0,$t=!0,Pr=!0),B.id!==b&&(b=B.id,$t=!0),Ui||E!==x){Ee.buffers.depth.getReversed()?(le.copy(x.projectionMatrix),nm(le),im(le),ht.setValue(R,"projectionMatrix",le)):ht.setValue(R,"projectionMatrix",x.projectionMatrix),ht.setValue(R,"viewMatrix",x.matrixWorldInverse);const Vt=ht.map.cameraPosition;Vt!==void 0&&Vt.setValue(R,Ae.setFromMatrixPosition(x.matrixWorld)),He.logarithmicDepthBuffer&&ht.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,$t=!0,Pr=!0)}if(U.isSkinnedMesh){ht.setOptional(R,U,"bindMatrix"),ht.setOptional(R,U,"bindMatrixInverse");const Ut=U.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ht.setValue(R,"boneTexture",Ut.boneTexture,S))}U.isBatchedMesh&&(ht.setOptional(R,U,"batchingTexture"),ht.setValue(R,"batchingTexture",U._matricesTexture,S),ht.setOptional(R,U,"batchingIdTexture"),ht.setValue(R,"batchingIdTexture",U._indirectTexture,S),ht.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(R,"batchingColorTexture",U._colorsTexture,S));const nn=F.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Re.update(U,F,un),($t||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,ht.setValue(R,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(tn.envMap.value=xe,tn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),$t&&(ht.setValue(R,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Hf(tn,Pr),ne&&B.fog===!0&&re.refreshFogUniforms(tn,ne),re.refreshMaterialUniforms(tn,B,V,ee,p.state.transmissionRenderTarget[x.id]),Ys.upload(R,zl(we),tn,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ys.upload(R,zl(we),tn,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(R,"center",U.center),ht.setValue(R,"modelViewMatrix",U.modelViewMatrix),ht.setValue(R,"normalMatrix",U.normalMatrix),ht.setValue(R,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ut=B.uniformsGroups;for(let Vt=0,So=Ut.length;Vt<So;Vt++){const pi=Ut[Vt];I.update(pi,un),I.bind(pi,un)}}return un}function Hf(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Vf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,N,F){j.get(x.texture).__webglTexture=N,j.get(x.depthTexture).__webglTexture=F;const B=j.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,N){const F=j.get(x);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,F=0){O=x,A=N,T=F;let B=!0,U=null,ne=!1,de=!1;if(x){const xe=j.get(x);if(xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(xe.__webglFramebuffer===void 0)S.setupRenderTarget(x);else if(xe.__hasExternalTextures)S.rebindTextures(x,j.get(x.texture).__webglTexture,j.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Me=x.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&j.has(Me)&&(x.width!==Me.image.width||x.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(x)}}const Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Pe=j.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?U=Pe[N][F]:U=Pe[N],ne=!0):x.samples>0&&S.useMultisampledRTT(x)===!1?U=j.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[F]:U=Pe,C.copy(x.viewport),q.copy(x.scissor),z=x.scissorTest}else C.copy(Se).multiplyScalar(V).floor(),q.copy(Ie).multiplyScalar(V).floor(),z=Qe;if(Ee.bindFramebuffer(R.FRAMEBUFFER,U)&&B&&Ee.drawBuffers(x,U),Ee.viewport(C),Ee.scissor(q),Ee.setScissorTest(z),ne){const xe=j.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,F)}else if(de){const xe=j.get(x.texture),Ce=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.__webglTexture,F||0,Ce)}b=-1},this.readRenderTargetPixels=function(x,N,F,B,U,ne,de){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=j.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Ee.bindFramebuffer(R.FRAMEBUFFER,_e);try{const xe=x.texture,Ce=xe.format,Pe=xe.type;if(!He.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-B&&F>=0&&F<=x.height-U&&R.readPixels(N,F,B,U,Fe.convert(Ce),Fe.convert(Pe),ne)}finally{const xe=O!==null?j.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(x,N,F,B,U,ne,de){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=j.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const xe=x.texture,Ce=xe.format,Pe=xe.type;if(!He.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=x.width-B&&F>=0&&F<=x.height-U){Ee.bindFramebuffer(R.FRAMEBUFFER,_e);const Me=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.bufferData(R.PIXEL_PACK_BUFFER,ne.byteLength,R.STREAM_READ),R.readPixels(N,F,B,U,Fe.convert(Ce),Fe.convert(Pe),0);const et=O!==null?j.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,et);const it=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await tm(R,it,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Me),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ne),R.deleteBuffer(Me),R.deleteSync(it),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,N=null,F=0){x.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-F),U=Math.floor(x.image.width*B),ne=Math.floor(x.image.height*B),de=N!==null?N.x:0,_e=N!==null?N.y:0;S.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,de,_e,U,ne),Ee.unbindTexture()};const Gf=R.createFramebuffer(),Wf=R.createFramebuffer();this.copyTextureToTexture=function(x,N,F=null,B=null,U=0,ne=null){x.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],N=arguments[2],ne=arguments[3]||0,F=null),ne===null&&(U!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let de,_e,xe,Ce,Pe,Me,et,it,vt;const yt=x.isCompressedTexture?x.mipmaps[ne]:x.image;if(F!==null)de=F.max.x-F.min.x,_e=F.max.y-F.min.y,xe=F.isBox3?F.max.z-F.min.z:1,Ce=F.min.x,Pe=F.min.y,Me=F.isBox3?F.min.z:0;else{const nn=Math.pow(2,-U);de=Math.floor(yt.width*nn),_e=Math.floor(yt.height*nn),x.isDataArrayTexture?xe=yt.depth:x.isData3DTexture?xe=Math.floor(yt.depth*nn):xe=1,Ce=0,Pe=0,Me=0}B!==null?(et=B.x,it=B.y,vt=B.z):(et=0,it=0,vt=0);const tt=Fe.convert(N.format),we=Fe.convert(N.type);let Tt;N.isData3DTexture?(S.setTexture3D(N,0),Tt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(S.setTexture2DArray(N,0),Tt=R.TEXTURE_2D_ARRAY):(S.setTexture2D(N,0),Tt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const rt=R.getParameter(R.UNPACK_ROW_LENGTH),un=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ui=R.getParameter(R.UNPACK_SKIP_PIXELS),$t=R.getParameter(R.UNPACK_SKIP_ROWS),Pr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,yt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Me);const ht=x.isDataArrayTexture||x.isData3DTexture,tn=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const nn=j.get(x),Ut=j.get(N),Vt=j.get(nn.__renderTarget),So=j.get(Ut.__renderTarget);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,So.__webglFramebuffer);for(let pi=0;pi<xe;pi++)ht&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,j.get(x).__webglTexture,U,Me+pi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,j.get(N).__webglTexture,ne,vt+pi)),R.blitFramebuffer(Ce,Pe,de,_e,et,it,de,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||j.has(x)){const nn=j.get(x),Ut=j.get(N);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,Gf),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,Wf);for(let Vt=0;Vt<xe;Vt++)ht?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,nn.__webglTexture,U,Me+Vt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,nn.__webglTexture,U),tn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ut.__webglTexture,ne,vt+Vt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ut.__webglTexture,ne),U!==0?R.blitFramebuffer(Ce,Pe,de,_e,et,it,de,_e,R.COLOR_BUFFER_BIT,R.NEAREST):tn?R.copyTexSubImage3D(Tt,ne,et,it,vt+Vt,Ce,Pe,de,_e):R.copyTexSubImage2D(Tt,ne,et,it,Ce,Pe,de,_e);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else tn?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(Tt,ne,et,it,vt,de,_e,xe,tt,we,yt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Tt,ne,et,it,vt,de,_e,xe,tt,yt.data):R.texSubImage3D(Tt,ne,et,it,vt,de,_e,xe,tt,we,yt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ne,et,it,de,_e,tt,we,yt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ne,et,it,yt.width,yt.height,tt,yt.data):R.texSubImage2D(R.TEXTURE_2D,ne,et,it,de,_e,tt,we,yt);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,un),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ui),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pr),ne===0&&N.generateMipmaps&&R.generateMipmap(Tt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,N,F=null,B=null,U=0){return x.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,x=arguments[2],N=arguments[3],U=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,N,F,B,U)},this.initRenderTarget=function(x){j.get(x).__webglFramebuffer===void 0&&S.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){A=0,T=0,O=null,Ee.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function sd(n,e){if(e===Tp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===rc||e===Mh){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===rc)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Jh extends Ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new pv(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=$r.extractUrlBase(e);o=$r.resolveURL(l,this.path)}else o=$r.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Wh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qh){try{o[We.KHR_BINARY_GLTF]=new mv(e)}catch(d){r&&r(d);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Rv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:o[d]=new J0;break;case We.KHR_DRACO_MESH_COMPRESSION:o[d]=new gv(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[d]=new _v;break;case We.KHR_MESH_QUANTIZATION:o[d]=new yv;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function K0(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Z0{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Le(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],zt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Uc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new eg(u),l.distance=d;break;case"spot":l=new Jm(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class J0{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,i){const r=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(r)}}class Q0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ev{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(s)}}class tv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class nv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class iv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class rv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class sv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],zt),Promise.all(s)}}class ov{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class av{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(s)}}class cv{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class lv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class uv{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class dv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fv{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}}class pv{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==sn.TRIANGLES&&l.mode!==sn.TRIANGLE_STRIP&&l.mode!==sn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(const g of d){const _=new De,m=new D,p=new hi,M=new D(1,1,1),w=new Im(g.geometry,g.material,h);for(let v=0;v<h;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),w.setMatrixAt(v,_.compose(m,p,M));for(const v in c)if(v==="_COLOR_0"){const P=c[v];w.instanceColor=new oc(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);mt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Qh="glTF",kr=12,od={JSON:1313821514,BIN:5130562};class mv{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-kr,s=new DataView(e,kr);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===od.JSON){const l=new Uint8Array(e,kr+o,a);this.content=i.decode(l)}else if(c===od.BIN){const l=kr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const d=uc[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=uc[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],f=or[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(f)},a,l,zt,h)})})}}class _v{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yv{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class ef extends ss{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,h=d*d,f=h*d,g=e*l,_=g-l,m=-2*f+3*h,p=f-h,M=1-m,w=p-h+d;for(let v=0;v!==a;v++){const P=o[_+v+a],A=o[_+v+c]*u,T=o[g+v+a],O=o[g+v]*u;s[v]=M*P+w*A+m*T+p*O}return s}}const xv=new hi;class vv extends ef{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return xv.fromArray(s).normalize().toArray(s),s}}const sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ad={9728:kt,9729:Kt,9984:fh,9985:Gs,9986:Hr,9987:Bn},cd={33071:ei,33648:Js,10497:Li},na={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ev={CUBICSPLINE:void 0,LINEAR:Qr,STEP:Jr},ia={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sv(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new sr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),n.DefaultMaterial}function Ei(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Fn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mv(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function bv(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wv(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ra(t.attributes):e=n.indices+":"+ra(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+ra(n.targets[i]);return e}function ra(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function dc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tv(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Av=new De;class Rv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new K0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new cc(this.options.manager):this.textureLoader=new ng(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ei(s,a,r),Fn(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load($r.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=na[r.type],a=or[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Pt(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=na[r.type],l=or[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let w=t.cache.get(M);w||(_=new l(a,p*f,r.count*f/u),w=new Tm(_,f/u),t.cache.add(M,w)),m=new Cc(w,c,h%f/u,g)}else a===null?_=new l(r.count*c):_=new l(a,h,r.count*c),m=new Pt(_,c,g);if(r.sparse!==void 0){const p=na.SCALAR,M=or[r.sparse.indices.componentType],w=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,P=new M(o[1],w,r.sparse.count*p),A=new l(o[2],v,r.sparse.count*c);a!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,O=P.length;T<O;T++){const b=P[T];if(m.setX(b,A[T*c]),c>=2&&m.setY(b,A[T*c+1]),c>=3&&m.setZ(b,A[T*c+2]),c>=4&&m.setW(b,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=ad[h.magFilter]||Kt,u.minFilter=ad[h.minFilter]||Bn,u.wrapS=cd[h.wrapS]||Li,u.wrapT=cd[h.wrapT]||Li,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==kt&&u.minFilter!==Kt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new wt(_);m.needsUpdate=!0,h(m)}),t.load($r.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Fn(d,o),d.userData.mimeType=o.mimeType||Tv(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new zh,Mn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new po,Mn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return sr}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){const d=r[We.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],zt),a.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Rt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Sn);const u=s.alphaMode||ia.OPAQUE;if(u===ia.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ia.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ti&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==ti&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ti){const d=s.emissiveFactor;a.emissive=new Le().setRGB(d[0],d[1],d[2],zt)}return s.emissiveTexture!==void 0&&o!==ti&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(l).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Fn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ei(r,d,s),d})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ld(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=wv(l),d=r[u];if(d)o.push(d.promise);else{let h;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=ld(new en,l,t),r[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Sv(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const M=l[f];if(m.mode===sn.TRIANGLES||m.mode===sn.TRIANGLE_STRIP||m.mode===sn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Rm(_,M):new Ct(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===sn.TRIANGLE_STRIP?p.geometry=sd(p.geometry,Mh):m.mode===sn.TRIANGLE_FAN&&(p.geometry=sd(p.geometry,rc));else if(m.mode===sn.LINES)p=new kh(_,M);else if(m.mode===sn.LINE_STRIP)p=new mo(_,M);else if(m.mode===sn.LINE_LOOP)p=new Nm(_,M);else if(m.mode===sn.POINTS)p=new Um(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&bv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Fn(p,s),m.extensions&&Ei(r,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Ei(r,d[0],s),d[0];const h=new Ai;s.extensions&&Ei(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Nt(Qp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Nc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Fn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d){a.push(d);const h=new De;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pc(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let M=0,w=h.length;M<w;M++){const v=h[M],P=f[M],A=g[M],T=_[M],O=m[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=i._createAnimationTracks(v,P,A,T,O);if(b)for(let E=0;E<b.length;E++)p.push(b[E])}return new Wm(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Av)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Fh:l.length>1?u=new Ai:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Fn(u,s),s.extensions&&Ei(i,u,s),s.matrix!==void 0){const d=new De;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Ai;i.name&&(s.name=r.createUniqueName(i.name)),Fn(s,i),i.extensions&&Ei(t,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)s.add(c[u]);const l=u=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof Mn||h instanceof wt)&&d.set(h,f);return u.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];Kn[s.path]===Kn.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(a);let l;switch(Kn[s.path]){case Kn.weights:l=yr;break;case Kn.rotation:l=xr;break;case Kn.position:case Kn.scale:l=vr;break;default:switch(i.itemSize){case 1:l=yr;break;case 2:case 3:default:l=vr;break}break}const u=r.interpolation!==void 0?Ev[r.interpolation]:Qr,d=this._getArrayFromAccessor(i);for(let h=0,f=c.length;h<f;h++){const g=new l(c[h]+"."+Kn[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=dc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof xr?vv:ef;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Cv(n,e,t){const i=e.attributes,r=new Wt;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const u=dc(or[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,c=new D;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=dc(or[h.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Tn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function ld(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=uc[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Je.workingColorSpace!==zt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Fn(n,e),Cv(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Mv(n,e.targets,t):n})}var ar=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-ar.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?ar.Bounce.In(n*2)*.5:ar.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),tr=function(){return performance.now()},kc=function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r=0,s=t;r<s.length;r++){var o=s[r];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},n.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,r=e;i<r.length;i++){var s=r[i];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},n.prototype.update=function(e,t){e===void 0&&(e=tr()),t===void 0&&(t=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&this.remove(s)}i=Object.keys(this._tweensAddedDuringUpdate)}},n}(),Ri={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Ri.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Ri.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Ri.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Ri.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*t+s+o)*c+(-3*e+3*t-2*s-o)*a+s*r+e}}},zc=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),hc=new kc,Pv=function(){function n(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ar.Linear.None,this._interpolationFunction=Ri.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=zc.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=hc,hc.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=tr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var o in i){var a=e[o],c=Array.isArray(a),l=c?"array":typeof a,u=!c&&Array.isArray(i[o]);if(!(l==="undefined"||l==="function")){if(u){var d=i[o];if(d.length===0)continue;for(var h=[a],f=0,g=d.length;f<g;f+=1){var _=this._handleRelativeValue(a,d[f]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(_)}u&&(i[o]=h)}if((l==="object"||c)&&a&&!u){t[o]=c?[]:{};var m=a;for(var p in m)t[o][p]=m[p];r[o]=c?[]:{};var d=i[o];if(!this._isDynamic){var M={};for(var p in d)M[p]=d[p];i[o]=d=M}this._setupProperties(m,t[o],d,r[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),c||(t[o]*=1),u?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(e){return e===void 0&&(e=tr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},n.prototype.resume=function(e){return e===void 0&&(e=tr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=ar.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Ri.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=tr()),t===void 0&&(t=n.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),c=this._duration+this._repeat*a,l=function(){if(i._duration===0||o>c)return 1;var _=Math.trunc(o/a),m=o-_*a,p=Math.min(m/i._duration,1);return p===0&&o===i._duration?1:p},u=l(),d=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||o>=this._duration)if(this._repeat>0){var h=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=h);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*h,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var f=0,g=this._chainedTweens.length;f<g;f++)this._chainedTweens[f].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],c=Array.isArray(e[s]),l=Array.isArray(a),u=!c&&l;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n.autoStartOnUpdate=!1,n}(),Iv="25.0.0",Lv=zc.nextId,wn=hc,Dv=wn.getAll.bind(wn),Nv=wn.removeAll.bind(wn),Uv=wn.add.bind(wn),Ov=wn.remove.bind(wn),Fv=wn.update.bind(wn),Gt={Easing:ar,Group:kc,Interpolation:Ri,now:tr,Sequence:zc,nextId:Lv,Tween:Pv,VERSION:Iv,getAll:Dv,removeAll:Nv,add:Uv,remove:Ov,update:Fv};class Bv extends mt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new $e(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Zi=new D,ud=new De,dd=new De,hd=new D,fd=new D;class kv{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:i,height:r}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),ud.copy(_.matrixWorldInverse),dd.multiplyMatrices(_.projectionMatrix,ud),u(g,g,_),f(g)},this.setSize=function(g,_){i=g,r=_,s=i/2,o=r/2,c.style.width=g+"px",c.style.height=_+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)l(g.children[_])}function u(g,_,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){Zi.setFromMatrixPosition(g.matrixWorld),Zi.applyMatrix4(dd);const p=Zi.z>=-1&&Zi.z<=1&&g.layers.test(m.layers)===!0,M=g.element;M.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,_,m),M.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Zi.x*s+s)+"px,"+(-Zi.y*o+o)+"px)",M.parentNode!==c&&c.appendChild(M),g.onAfterRender(t,_,m));const w={distanceToCameraSquared:d(m,g)};a.objects.set(g,w)}for(let p=0,M=g.children.length;p<M;p++)u(g.children[p],_,m)}function d(g,_){return hd.setFromMatrixPosition(g.matrixWorld),fd.setFromMatrixPosition(_.matrixWorld),hd.distanceToSquared(fd)}function h(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function f(g){const _=h(g).sort(function(p,M){if(p.renderOrder!==M.renderOrder)return M.renderOrder-p.renderOrder;const w=a.objects.get(p).distanceToCameraSquared,v=a.objects.get(M).distanceToCameraSquared;return w-v}),m=_.length;for(let p=0,M=_.length;p<M;p++)_[p].element.style.zIndex=m-p}}}var pd;(function(n){n.HEADER="header",n.QUERY="query"})(pd||(pd={}));var md;(function(n){n.HEADER="header",n.QUERY="query"})(md||(md={}));var ts;(function(n){n.HTTP="http",n.HTTPS="https"})(ts||(ts={}));var io;(function(n){n.MD5="md5",n.CRC32="crc32",n.CRC32C="crc32c",n.SHA1="sha1",n.SHA256="sha256"})(io||(io={}));var gd;(function(n){n[n.HEADER=0]="HEADER",n[n.TRAILER=1]="TRAILER"})(gd||(gd={}));const fc="__smithy_context";var _d;(function(n){n.PROFILE="profile",n.SSO_SESSION="sso-session",n.SERVICES="services"})(_d||(_d={}));var yd;(function(n){n.HTTP_0_9="http/0.9",n.HTTP_1_0="http/1.0",n.TDS_8_0="tds/8.0"})(yd||(yd={}));const yo=n=>n[fc]||(n[fc]={}),Hn=n=>{if(typeof n=="function")return n;const e=Promise.resolve(n);return()=>e},tf="preferred",zv=["disabled","preferred","required"];function Hv(n){return zv.includes(n)}const Vv=n=>{const e=Hn(n.accountIdEndpointMode??tf);return{...n,accountIdEndpointMode:async()=>{const t=await e();if(!Hv(t))throw new Error(`Invalid value for accountIdEndpointMode: ${t}. Valid values are: "required", "preferred", "disabled".`);return t}}},Gv=n=>{let e=n.httpHandler;return{setHttpHandler(t){e=t},httpHandler(){return e},updateHttpClientConfig(t,i){e.updateHttpClientConfig(t,i)},httpHandlerConfigs(){return e.httpHandlerConfigs()}}},Wv=n=>({httpHandler:n.httpHandler()});class Jt{constructor(e){this.method=e.method||"GET",this.hostname=e.hostname||"localhost",this.port=e.port,this.query=e.query||{},this.headers=e.headers||{},this.body=e.body,this.protocol=e.protocol?e.protocol.slice(-1)!==":"?`${e.protocol}:`:e.protocol:"https:",this.path=e.path?e.path.charAt(0)!=="/"?`/${e.path}`:e.path:"/",this.username=e.username,this.password=e.password,this.fragment=e.fragment}static clone(e){const t=new Jt({...e,headers:{...e.headers}});return t.query&&(t.query=Xv(t.query)),t}static isInstance(e){if(!e)return!1;const t=e;return"method"in t&&"protocol"in t&&"hostname"in t&&"path"in t&&typeof t.query=="object"&&typeof t.headers=="object"}clone(){return Jt.clone(this)}}function Xv(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return{...e,[t]:Array.isArray(i)?[...i]:i}},{})}class ro{constructor(e){this.statusCode=e.statusCode,this.reason=e.reason,this.headers=e.headers||{},this.body=e.body}static isInstance(e){if(!e)return!1;const t=e;return typeof t.statusCode=="number"&&typeof t.headers=="object"}}function $v(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sa,xd;function qv(){if(xd)return sa;xd=1;function n(e){Object.defineProperty(this,"_next",{writable:!1,enumerable:!1,value:e}),this.done=!1}return n.prototype.next=function(){if(this.done)return{done:!0};var e=this._next();return e.done&&(this.done=!0),e},typeof Symbol<"u"&&(n.prototype[Symbol.iterator]=function(){return this}),n.of=function(){var e=arguments,t=e.length,i=0;return new n(function(){return i>=t?{done:!0}:{done:!1,value:e[i++]}})},n.empty=function(){var e=new n(null);return e.done=!0,e},n.is=function(e){return e instanceof n?!0:typeof e=="object"&&e!==null&&typeof e.next=="function"},sa=n,sa}var oa,vd;function nf(){if(vd)return oa;vd=1;var n=typeof ArrayBuffer<"u",e=typeof Symbol<"u";function t(i,r){var s,o,a,c,l;if(!i)throw new Error("obliterator/forEach: invalid iterable.");if(typeof r!="function")throw new Error("obliterator/forEach: expecting a callback.");if(Array.isArray(i)||n&&ArrayBuffer.isView(i)||typeof i=="string"||i.toString()==="[object Arguments]"){for(a=0,c=i.length;a<c;a++)r(i[a],a);return}if(typeof i.forEach=="function"){i.forEach(r);return}if(e&&Symbol.iterator in i&&typeof i.next!="function"&&(i=i[Symbol.iterator]()),typeof i.next=="function"){for(s=i,a=0;l=s.next(),l.done!==!0;)r(l.value,a),a++;return}for(o in i)i.hasOwnProperty(o)&&r(i[o],o)}return t.forEachWithNullKeys=function(i,r){var s,o,a,c,l;if(!i)throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");if(typeof r!="function")throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");if(Array.isArray(i)||n&&ArrayBuffer.isView(i)||typeof i=="string"||i.toString()==="[object Arguments]"){for(a=0,c=i.length;a<c;a++)r(i[a],null);return}if(i instanceof Set){i.forEach(function(u){r(u,null)});return}if(typeof i.forEach=="function"){i.forEach(r);return}if(e&&Symbol.iterator in i&&typeof i.next!="function"&&(i=i[Symbol.iterator]()),typeof i.next=="function"){for(s=i,a=0;l=s.next(),l.done!==!0;)r(l.value,null),a++;return}for(o in i)i.hasOwnProperty(o)&&r(i[o],o)},oa=t,oa}var aa={},Ed;function rf(){return Ed||(Ed=1,function(n){var e=Math.pow(2,8)-1,t=Math.pow(2,16)-1,i=Math.pow(2,32)-1,r=Math.pow(2,7)-1,s=Math.pow(2,15)-1,o=Math.pow(2,31)-1;n.getPointerArray=function(c){var l=c-1;return l<=e?Uint8Array:l<=t?Uint16Array:l<=i?Uint32Array:Float64Array},n.getSignedPointerArray=function(c){var l=c-1;return l<=r?Int8Array:l<=s?Int16Array:l<=o?Int32Array:Float64Array},n.getNumberType=function(c){return c===(c|0)?Math.sign(c)===-1?c<=127&&c>=-128?Int8Array:c<=32767&&c>=-32768?Int16Array:Int32Array:c<=255?Uint8Array:c<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};n.getMinimalRepresentation=function(c,l){var u=null,d=0,h,f,g,_,m;for(_=0,m=c.length;_<m;_++)g=l?l(c[_]):c[_],f=n.getNumberType(g),h=a[f.name],h>d&&(d=h,u=f);return u},n.isTypedArray=function(c){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(c)},n.concat=function(){var c=0,l,u,d;for(l=0,d=arguments.length;l<d;l++)c+=arguments[l].length;var h=new arguments[0].constructor(c);for(l=0,u=0;l<d;l++)h.set(arguments[l],u),u+=arguments[l].length;return h},n.indices=function(c){for(var l=n.getPointerArray(c),u=new l(c),d=0;d<c;d++)u[d]=d;return u}}(aa)),aa}var Ji={},Sd;function jv(){if(Sd)return Ji;Sd=1;var n=nf(),e=rf();function t(o){return Array.isArray(o)||e.isTypedArray(o)}function i(o){if(typeof o.length=="number")return o.length;if(typeof o.size=="number")return o.size}function r(o){var a=i(o),c=typeof a=="number"?new Array(a):[],l=0;return n(o,function(u){c[l++]=u}),c}function s(o){var a=i(o),c=typeof a=="number"?e.getPointerArray(a):Array,l=typeof a=="number"?new Array(a):[],u=typeof a=="number"?new c(a):[],d=0;return n(o,function(h){l[d]=h,u[d]=d++}),[l,u]}return Ji.isArrayLike=t,Ji.guessLength=i,Ji.toArray=r,Ji.toArrayWithIndices=s,Ji}var ca,Md;function Yv(){if(Md)return ca;Md=1;var n=qv(),e=nf(),t=rf(),i=jv();function r(s,o,a){if(arguments.length<2&&(a=s,s=null,o=null),this.capacity=a,typeof this.capacity!="number"||this.capacity<=0)throw new Error("mnemonist/lru-cache: capacity should be positive number.");var c=t.getPointerArray(a);this.forward=new c(a),this.backward=new c(a),this.K=typeof s=="function"?new s(a):new Array(a),this.V=typeof o=="function"?new o(a):new Array(a),this.size=0,this.head=0,this.tail=0,this.items={}}return r.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}},r.prototype.splayOnTop=function(s){var o=this.head;if(this.head===s)return this;var a=this.backward[s],c=this.forward[s];return this.tail===s?this.tail=a:this.backward[c]=a,this.forward[a]=c,this.backward[o]=s,this.head=s,this.forward[s]=o,this},r.prototype.set=function(s,o){var a=this.items[s];if(typeof a<"u"){this.splayOnTop(a),this.V[a]=o;return}this.size<this.capacity?a=this.size++:(a=this.tail,this.tail=this.backward[a],delete this.items[this.K[a]]),this.items[s]=a,this.K[a]=s,this.V[a]=o,this.forward[a]=this.head,this.backward[this.head]=a,this.head=a},r.prototype.setpop=function(s,o){var a=null,c=null,l=this.items[s];return typeof l<"u"?(this.splayOnTop(l),a=this.V[l],this.V[l]=o,{evicted:!1,key:s,value:a}):(this.size<this.capacity?l=this.size++:(l=this.tail,this.tail=this.backward[l],a=this.V[l],c=this.K[l],delete this.items[this.K[l]]),this.items[s]=l,this.K[l]=s,this.V[l]=o,this.forward[l]=this.head,this.backward[this.head]=l,this.head=l,c?{evicted:!0,key:c,value:a}:null)},r.prototype.has=function(s){return s in this.items},r.prototype.get=function(s){var o=this.items[s];if(!(typeof o>"u"))return this.splayOnTop(o),this.V[o]},r.prototype.peek=function(s){var o=this.items[s];if(!(typeof o>"u"))return this.V[o]},r.prototype.forEach=function(s,o){o=arguments.length>1?o:this;for(var a=0,c=this.size,l=this.head,u=this.K,d=this.V,h=this.forward;a<c;)s.call(o,d[l],u[l],this),l=h[l],a++},r.prototype.keys=function(){var s=0,o=this.size,a=this.head,c=this.K,l=this.forward;return new n(function(){if(s>=o)return{done:!0};var u=c[a];return s++,s<o&&(a=l[a]),{done:!1,value:u}})},r.prototype.values=function(){var s=0,o=this.size,a=this.head,c=this.V,l=this.forward;return new n(function(){if(s>=o)return{done:!0};var u=c[a];return s++,s<o&&(a=l[a]),{done:!1,value:u}})},r.prototype.entries=function(){var s=0,o=this.size,a=this.head,c=this.K,l=this.V,u=this.forward;return new n(function(){if(s>=o)return{done:!0};var d=c[a],h=l[a];return s++,s<o&&(a=u[a]),{done:!1,value:[d,h]}})},typeof Symbol<"u"&&(r.prototype[Symbol.iterator]=r.prototype.entries),r.prototype.inspect=function(){for(var s=new Map,o=this.entries(),a;a=o.next(),!a.done;)s.set(a.value[0],a.value[1]);return Object.defineProperty(s,"constructor",{value:r,enumerable:!1}),s},typeof Symbol<"u"&&(r.prototype[Symbol.for("nodejs.util.inspect.custom")]=r.prototype.inspect),r.from=function(s,o,a,c){if(arguments.length<2){if(c=i.guessLength(s),typeof c!="number")throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(c=o,o=null,a=null);var l=new r(o,a,c);return e(s,function(u,d){l.set(d,u)}),l},ca=r,ca}var Kv=Yv();const Zv=$v(Kv);let Jv=class{constructor(e){oe(this,"cache");this.cache=new Zv(e)}getEndpoint(e){const t=this.get(e);if(!t||t.length===0)return;const i=t.map(r=>r.Address);return i[Math.floor(Math.random()*i.length)]}get(e){if(!this.has(e))return;const t=this.cache.get(e);if(!t)return;const i=Date.now(),r=t.filter(s=>i<s.Expires);if(r.length===0){this.delete(e);return}return r}set(e,t){const i=Date.now();this.cache.set(e,t.map(({Address:r,CachePeriodInMinutes:s})=>({Address:r,Expires:i+s*60*1e3})))}delete(e){this.cache.set(e,[])}has(e){if(!this.cache.has(e))return!1;const t=this.cache.peek(e);return t?t.length>0:!1}clear(){this.cache.clear()}};const Qv=(n,{endpointDiscoveryCommandCtor:e})=>({...n,endpointDiscoveryCommandCtor:e,endpointCache:new Jv(n.endpointCacheSize??1e3),endpointDiscoveryEnabled:n.endpointDiscoveryEnabled!==void 0?()=>Promise.resolve(n.endpointDiscoveryEnabled):n.endpointDiscoveryEnabledProvider,isClientEndpointDiscoveryEnabled:n.endpointDiscoveryEnabled!==void 0}),eE=n=>e=>async t=>{if(!Jt.isInstance(t.request))return e(t);const{request:i}=t,{handlerProtocol:r=""}=n.requestHandler.metadata||{};if(r.indexOf("h2")>=0&&!i.headers[":authority"])delete i.headers.host,i.headers[":authority"]=i.hostname+(i.port?":"+i.port:"");else if(!i.headers.host){let s=i.hostname;i.port!=null&&(s+=`:${i.port}`),i.headers.host=s}return e(t)},tE={name:"hostHeaderMiddleware",step:"build",priority:"low",tags:["HOST"],override:!0},nE=n=>({applyToStack:e=>{e.add(eE(n),tE)}}),iE=()=>(n,e)=>async t=>{var i,r;try{const s=await n(t),{clientName:o,commandName:a,logger:c,dynamoDbDocumentClientOptions:l={}}=e,{overrideInputFilterSensitiveLog:u,overrideOutputFilterSensitiveLog:d}=l,h=u??e.inputFilterSensitiveLog,f=d??e.outputFilterSensitiveLog,{$metadata:g,..._}=s.output;return(i=c==null?void 0:c.info)==null||i.call(c,{clientName:o,commandName:a,input:h(t.input),output:f(_),metadata:g}),s}catch(s){const{clientName:o,commandName:a,logger:c,dynamoDbDocumentClientOptions:l={}}=e,{overrideInputFilterSensitiveLog:u}=l,d=u??e.inputFilterSensitiveLog;throw(r=c==null?void 0:c.error)==null||r.call(c,{clientName:o,commandName:a,input:d(t.input),error:s,metadata:s.$metadata}),s}},rE={name:"loggerMiddleware",tags:["LOGGER"],step:"initialize",override:!0},sE=n=>({applyToStack:e=>{e.add(iE(),rE)}});var bd={};const wd="X-Amzn-Trace-Id",oE="AWS_LAMBDA_FUNCTION_NAME",aE="_X_AMZN_TRACE_ID",cE=n=>e=>async t=>{const{request:i}=t;if(!Jt.isInstance(i)||n.runtime!=="node"||i.headers.hasOwnProperty(wd))return e(t);const r=bd[oE],s=bd[aE],o=a=>typeof a=="string"&&a.length>0;return o(r)&&o(s)&&(i.headers[wd]=s),e({...t,request:i})},lE={step:"build",tags:["RECURSION_DETECTION"],name:"recursionDetectionMiddleware",override:!0,priority:"low"},uE=n=>({applyToStack:e=>{e.add(cE(n),lE)}});function dE(n){const e=new Map;for(const t of n)e.set(t.schemeId,t);return e}const hE=(n,e)=>(t,i)=>async r=>{var l;const s=n.httpAuthSchemeProvider(await e.httpAuthSchemeParametersProvider(n,i,r.input)),o=dE(n.httpAuthSchemes),a=yo(i),c=[];for(const u of s){const d=o.get(u.schemeId);if(!d){c.push(`HttpAuthScheme \`${u.schemeId}\` was not enabled for this service.`);continue}const h=d.identityProvider(await e.identityProviderConfigProvider(n));if(!h){c.push(`HttpAuthScheme \`${u.schemeId}\` did not have an IdentityProvider configured.`);continue}const{identityProperties:f={},signingProperties:g={}}=((l=u.propertiesExtractor)==null?void 0:l.call(u,n,i))||{};u.identityProperties=Object.assign(u.identityProperties||{},f),u.signingProperties=Object.assign(u.signingProperties||{},g),a.selectedHttpAuthScheme={httpAuthOption:u,identity:await h(u.identityProperties),signer:d.signer};break}if(!a.selectedHttpAuthScheme)throw new Error(c.join(`
`));return t(r)},fE={step:"serialize",tags:["HTTP_AUTH_SCHEME"],name:"httpAuthSchemeMiddleware",override:!0,relation:"before",toMiddleware:"endpointV2Middleware"},pE=(n,{httpAuthSchemeParametersProvider:e,identityProviderConfigProvider:t})=>({applyToStack:i=>{i.addRelativeTo(hE(n,{httpAuthSchemeParametersProvider:e,identityProviderConfigProvider:t}),fE)}}),mE=(n,e)=>t=>async i=>{const{response:r}=await t(i);try{const s=await e(r,n);return{response:r,output:s}}catch(s){if(Object.defineProperty(s,"$response",{value:r}),!("$metadata"in s)){const o="Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";s.message+=`
  `+o,typeof s.$responseBodyText<"u"&&s.$response&&(s.$response.body=s.$responseBodyText)}throw s}},gE=(n,e)=>(t,i)=>async r=>{var a;const s=(a=i.endpointV2)!=null&&a.url&&n.urlParser?async()=>n.urlParser(i.endpointV2.url):n.endpoint;if(!s)throw new Error("No valid endpoint provider available.");const o=await e(r.input,{...n,endpoint:s});return t({...r,request:o})},_E={name:"deserializerMiddleware",step:"deserialize",tags:["DESERIALIZER"],override:!0},Hc={name:"serializerMiddleware",step:"serialize",tags:["SERIALIZER"],override:!0};function yE(n,e,t){return{applyToStack:i=>{i.add(mE(n,t),_E),i.add(gE(n,e),Hc)}}}Hc.name;const xE=n=>e=>{throw e},vE=(n,e)=>{},EE=n=>(e,t)=>async i=>{if(!Jt.isInstance(i.request))return e(i);const s=yo(t).selectedHttpAuthScheme;if(!s)throw new Error("No HttpAuthScheme was selected: unable to sign request");const{httpAuthOption:{signingProperties:o={}},identity:a,signer:c}=s,l=await e({...i,request:await c.sign(i.request,a,o)}).catch((c.errorHandler||xE)(o));return(c.successHandler||vE)(l.response,o),l},SE={step:"finalizeRequest",tags:["HTTP_SIGNING"],name:"httpSigningMiddleware",aliases:["apiKeyMiddleware","tokenMiddleware","awsAuthMiddleware"],override:!0,relation:"after",toMiddleware:"retryMiddleware"},ME=n=>({applyToStack:e=>{e.addRelativeTo(EE(),SE)}}),Gr=n=>{if(typeof n=="function")return n;const e=Promise.resolve(n);return()=>e},ui={},Cr=new Array(64);for(let n=0,e=65,t=90;n+e<=t;n++){const i=String.fromCharCode(n+e);ui[i]=n,Cr[n]=i}for(let n=0,e=97,t=122;n+e<=t;n++){const i=String.fromCharCode(n+e),r=n+26;ui[i]=r,Cr[r]=i}for(let n=0;n<10;n++){ui[n.toString(10)]=n+52;const e=n.toString(10),t=n+52;ui[e]=t,Cr[t]=e}ui["+"]=62;Cr[62]="+";ui["/"]=63;Cr[63]="/";const cr=6,qr=8,bE=63,Vc=n=>{let e=n.length/4*3;n.slice(-2)==="=="?e-=2:n.slice(-1)==="="&&e--;const t=new ArrayBuffer(e),i=new DataView(t);for(let r=0;r<n.length;r+=4){let s=0,o=0;for(let l=r,u=r+3;l<=u;l++)if(n[l]!=="="){if(!(n[l]in ui))throw new TypeError(`Invalid character ${n[l]} in base64 string.`);s|=ui[n[l]]<<(u-l)*cr,o+=cr}else s>>=cr;const a=r/4*3;s>>=o%qr;const c=Math.floor(o/qr);for(let l=0;l<c;l++){const u=(c-l-1)*qr;i.setUint8(a+l,(s&255<<u)>>u)}}return new Uint8Array(t)},Er=n=>new TextEncoder().encode(n),jr=n=>typeof n=="string"?Er(n):ArrayBuffer.isView(n)?new Uint8Array(n.buffer,n.byteOffset,n.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(n),sf=n=>{if(typeof n=="string")return n;if(typeof n!="object"||typeof n.byteOffset!="number"||typeof n.byteLength!="number")throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");return new TextDecoder("utf-8").decode(n)};function of(n){let e;typeof n=="string"?e=Er(n):e=n;const t=typeof e=="object"&&typeof e.length=="number",i=typeof e=="object"&&typeof e.byteOffset=="number"&&typeof e.byteLength=="number";if(!t&&!i)throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");let r="";for(let s=0;s<e.length;s+=3){let o=0,a=0;for(let l=s,u=Math.min(s+3,e.length);l<u;l++)o|=e[l]<<(u-l-1)*qr,a+=qr;const c=Math.ceil(a/cr);o<<=c*cr-a;for(let l=1;l<=c;l++){const u=(c-l)*cr;r+=Cr[(o&bE<<u)>>u]}r+="==".slice(0,4-c)}return r}function wE(n,e="utf-8"){return e==="base64"?of(n):sf(n)}function TE(n,e){return e==="base64"?Pi.mutate(Vc(n)):Pi.mutate(Er(n))}class Pi extends Uint8Array{static fromString(e,t="utf-8"){switch(typeof e){case"string":return TE(e,t);default:throw new Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`)}}static mutate(e){return Object.setPrototypeOf(e,Pi.prototype),e}transformToString(e="utf-8"){return wE(this,e)}}const Ii=n=>encodeURIComponent(n).replace(/[!'()*]/g,AE),AE=n=>`%${n.charCodeAt(0).toString(16).toUpperCase()}`;function RE(n){const e=[];for(let t of Object.keys(n).sort()){const i=n[t];if(t=Ii(t),Array.isArray(i))for(let r=0,s=i.length;r<s;r++)e.push(`${t}=${Ii(i[r])}`);else{let r=t;(i||typeof i=="string")&&(r+=`=${Ii(i)}`),e.push(r)}}return e.join("&")}function Td(n,e){return new Request(n,e)}function CE(n=0){return new Promise((e,t)=>{n&&setTimeout(()=>{const i=new Error(`Request did not complete within ${n} ms`);i.name="TimeoutError",t(i)},n)})}const la={supported:void 0};class Gc{static create(e){return typeof(e==null?void 0:e.handle)=="function"?e:new Gc(e)}constructor(e){typeof e=="function"?this.configProvider=e().then(t=>t||{}):(this.config=e??{},this.configProvider=Promise.resolve(this.config)),la.supported===void 0&&(la.supported=typeof Request<"u"&&"keepalive"in Td("https://[::1]"))}destroy(){}async handle(e,{abortSignal:t}={}){var p;this.config||(this.config=await this.configProvider);const i=this.config.requestTimeout,r=this.config.keepAlive===!0,s=this.config.credentials;if(t!=null&&t.aborted){const M=new Error("Request aborted");return M.name="AbortError",Promise.reject(M)}let o=e.path;const a=RE(e.query||{});a&&(o+=`?${a}`),e.fragment&&(o+=`#${e.fragment}`);let c="";if(e.username!=null||e.password!=null){const M=e.username??"",w=e.password??"";c=`${M}:${w}@`}const{port:l,method:u}=e,d=`${e.protocol}//${c}${e.hostname}${l?`:${l}`:""}${o}`,h=u==="GET"||u==="HEAD"?void 0:e.body,f={body:h,headers:new Headers(e.headers),method:u,credentials:s};(p=this.config)!=null&&p.cache&&(f.cache=this.config.cache),h&&(f.duplex="half"),typeof AbortController<"u"&&(f.signal=t),la.supported&&(f.keepalive=r),typeof this.config.requestInit=="function"&&Object.assign(f,this.config.requestInit(e));let g=()=>{};const _=Td(d,f),m=[fetch(_).then(M=>{const w=M.headers,v={};for(const A of w.entries())v[A[0]]=A[1];return M.body!=null?{response:new ro({headers:v,reason:M.statusText,statusCode:M.status,body:M.body})}:M.blob().then(A=>({response:new ro({headers:v,reason:M.statusText,statusCode:M.status,body:A})}))}),CE(i)];return t&&m.push(new Promise((M,w)=>{const v=()=>{const P=new Error("Request aborted");P.name="AbortError",w(P)};if(typeof t.addEventListener=="function"){const P=t;P.addEventListener("abort",v,{once:!0}),g=()=>P.removeEventListener("abort",v)}else t.onabort=v})),Promise.race(m).finally(g)}updateHttpClientConfig(e,t){this.config=void 0,this.configProvider=this.configProvider.then(i=>(i[e]=t,i))}httpHandlerConfigs(){return this.config??{}}}const PE=async n=>{var e;return typeof Blob=="function"&&n instanceof Blob||((e=n.constructor)==null?void 0:e.name)==="Blob"?Blob.prototype.arrayBuffer!==void 0?new Uint8Array(await n.arrayBuffer()):IE(n):LE(n)};async function IE(n){const e=await DE(n),t=Vc(e);return new Uint8Array(t)}async function LE(n){const e=[],t=n.getReader();let i=!1,r=0;for(;!i;){const{done:a,value:c}=await t.read();c&&(e.push(c),r+=c.length),i=a}const s=new Uint8Array(r);let o=0;for(const a of e)s.set(a,o),o+=a.length;return s}function DE(n){return new Promise((e,t)=>{const i=new FileReader;i.onloadend=()=>{if(i.readyState!==2)return t(new Error("Reader aborted too early"));const r=i.result??"",s=r.indexOf(","),o=s>-1?s+1:r.length;e(r.substring(o))},i.onabort=()=>t(new Error("Read aborted")),i.onerror=()=>t(i.error),i.readAsDataURL(n)})}const af={},pc={};for(let n=0;n<256;n++){let e=n.toString(16).toLowerCase();e.length===1&&(e=`0${e}`),af[n]=e,pc[e]=n}function NE(n){if(n.length%2!==0)throw new Error("Hex encoded strings must have an even number length");const e=new Uint8Array(n.length/2);for(let t=0;t<n.length;t+=2){const i=n.slice(t,t+2).toLowerCase();if(i in pc)e[t/2]=pc[i];else throw new Error(`Cannot decode unrecognized sequence ${i} as hexadecimal`)}return e}function Ci(n){let e="";for(let t=0;t<n.byteLength;t++)e+=af[n[t]];return e}const UE=async(n=new Uint8Array,e)=>{if(n instanceof Uint8Array)return Pi.mutate(n);if(!n)return Pi.mutate(new Uint8Array);const t=e.streamCollector(n);return Pi.mutate(await t)};function OE(n,e,t){n.__smithy_context?n.__smithy_context.features||(n.__smithy_context.features={}):n.__smithy_context={features:{}},n.__smithy_context.features[e]=t}class FE{constructor(e){this.authSchemes=new Map;for(const[t,i]of Object.entries(e))i!==void 0&&this.authSchemes.set(t,i)}getIdentityProvider(e){return this.authSchemes.get(e)}}const BE=n=>e=>cf(e)&&e.expiration.getTime()-Date.now()<n,kE=3e5,zE=BE(kE),cf=n=>n.expiration!==void 0,HE=(n,e,t)=>{if(n===void 0)return;const i=typeof n!="function"?async()=>Promise.resolve(n):n;let r,s,o,a=!1;const c=async l=>{s||(s=i(l));try{r=await s,o=!0,a=!1}finally{s=void 0}return r};return e===void 0?async l=>((!o||l!=null&&l.forceRefresh)&&(r=await c(l)),r):async l=>((!o||l!=null&&l.forceRefresh)&&(r=await c(l)),a?r:t(r)?(e(r)&&await c(l),r):(a=!0,r))},VE=void 0;function GE(n){return n===void 0?!0:typeof n=="string"&&n.length<=50}function WE(n){const e=Gr(n.userAgentAppId??VE);return{...n,customUserAgent:typeof n.customUserAgent=="string"?[[n.customUserAgent]]:n.customUserAgent,userAgentAppId:async()=>{var i,r;const t=await e();if(!GE(t)){const s=((r=(i=n.logger)==null?void 0:i.constructor)==null?void 0:r.name)==="NoOpLogger"||!n.logger?console:n.logger;typeof t!="string"?s==null||s.warn("userAgentAppId must be a string or undefined."):t.length>50&&(s==null||s.warn("The provided userAgentAppId exceeds the maximum length of 50 characters."))}return t}}}class XE{constructor({size:e,params:t}){this.data=new Map,this.parameters=[],this.capacity=e??50,t&&(this.parameters=t)}get(e,t){const i=this.hash(e);if(i===!1)return t();if(!this.data.has(i)){if(this.data.size>this.capacity+10){const r=this.data.keys();let s=0;for(;;){const{value:o,done:a}=r.next();if(this.data.delete(o),a||++s>10)break}}this.data.set(i,t())}return this.data.get(i)}size(){return this.data.size}hash(e){let t="";const{parameters:i}=this;if(i.length===0)return!1;for(const r of i){const s=String(e[r]??"");if(s.includes("|;"))return!1;t+=s+"|;"}return t}}const $E=new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),lf=n=>$E.test(n)||n.startsWith("[")&&n.endsWith("]"),qE=new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),Wc=(n,e=!1)=>{if(!e)return qE.test(n);const t=n.split(".");for(const i of t)if(!Wc(i))return!1;return!0},so={},ns="endpoints";function di(n){return typeof n!="object"||n==null?n:"ref"in n?`$${di(n.ref)}`:"fn"in n?`${n.fn}(${(n.argv||[]).map(di).join(", ")})`:JSON.stringify(n,null,2)}class Qt extends Error{constructor(e){super(e),this.name="EndpointError"}}const jE=(n,e)=>n===e,YE=n=>{const e=n.split("."),t=[];for(const i of e){const r=i.indexOf("[");if(r!==-1){if(i.indexOf("]")!==i.length-1)throw new Qt(`Path: '${n}' does not end with ']'`);const s=i.slice(r+1,-1);if(Number.isNaN(parseInt(s)))throw new Qt(`Invalid array index: '${s}' in path: '${n}'`);r!==0&&t.push(i.slice(0,r)),t.push(s)}else t.push(i)}return t},uf=(n,e)=>YE(e).reduce((t,i)=>{if(typeof t!="object")throw new Qt(`Index '${i}' in '${e}' not found in '${JSON.stringify(n)}'`);return Array.isArray(t)?t[parseInt(i)]:t[i]},n),KE=n=>n!=null,ZE=n=>!n,ua={[ts.HTTP]:80,[ts.HTTPS]:443},JE=n=>{const e=(()=>{try{if(n instanceof URL)return n;if(typeof n=="object"&&"hostname"in n){const{hostname:h,port:f,protocol:g="",path:_="",query:m={}}=n,p=new URL(`${g}//${h}${f?`:${f}`:""}${_}`);return p.search=Object.entries(m).map(([M,w])=>`${M}=${w}`).join("&"),p}return new URL(n)}catch{return null}})();if(!e)return console.error(`Unable to parse ${JSON.stringify(n)} as a whatwg URL.`),null;const t=e.href,{host:i,hostname:r,pathname:s,protocol:o,search:a}=e;if(a)return null;const c=o.slice(0,-1);if(!Object.values(ts).includes(c))return null;const l=lf(r),u=t.includes(`${i}:${ua[c]}`)||typeof n=="string"&&n.includes(`${i}:${ua[c]}`),d=`${i}${u?`:${ua[c]}`:""}`;return{scheme:c,authority:d,path:s,normalizedPath:s.endsWith("/")?s:`${s}/`,isIp:l}},QE=(n,e)=>n===e,eS=(n,e,t,i)=>e>=t||n.length<t?null:i?n.substring(n.length-t,n.length-e):n.substring(e,t),tS=n=>encodeURIComponent(n).replace(/[!*'()]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),nS={booleanEquals:jE,getAttr:uf,isSet:KE,isValidHostLabel:Wc,not:ZE,parseURL:JE,stringEquals:QE,substring:eS,uriEncode:tS},df=(n,e)=>{const t=[],i={...e.endpointParams,...e.referenceRecord};let r=0;for(;r<n.length;){const s=n.indexOf("{",r);if(s===-1){t.push(n.slice(r));break}t.push(n.slice(r,s));const o=n.indexOf("}",s);if(o===-1){t.push(n.slice(s));break}n[s+1]==="{"&&n[o+1]==="}"&&(t.push(n.slice(s+1,o)),r=o+2);const a=n.substring(s+1,o);if(a.includes("#")){const[c,l]=a.split("#");t.push(uf(i[c],l))}else t.push(i[a]);r=o+1}return t.join("")},iS=({ref:n},e)=>({...e.endpointParams,...e.referenceRecord})[n],xo=(n,e,t)=>{if(typeof n=="string")return df(n,t);if(n.fn)return hf(n,t);if(n.ref)return iS(n,t);throw new Qt(`'${e}': ${String(n)} is not a string, function or reference.`)},hf=({fn:n,argv:e},t)=>{const i=e.map(s=>["boolean","number"].includes(typeof s)?s:xo(s,"arg",t)),r=n.split(".");return r[0]in so&&r[1]!=null?so[r[0]][r[1]](...i):nS[n](...i)},rS=({assign:n,...e},t)=>{var r,s;if(n&&n in t.referenceRecord)throw new Qt(`'${n}' is already defined in Reference Record.`);const i=hf(e,t);return(s=(r=t.logger)==null?void 0:r.debug)==null||s.call(r,`${ns} evaluateCondition: ${di(e)} = ${di(i)}`),{result:i===""?!0:!!i,...n!=null&&{toAssign:{name:n,value:i}}}},Xc=(n=[],e)=>{var i,r;const t={};for(const s of n){const{result:o,toAssign:a}=rS(s,{...e,referenceRecord:{...e.referenceRecord,...t}});if(!o)return{result:o};a&&(t[a.name]=a.value,(r=(i=e.logger)==null?void 0:i.debug)==null||r.call(i,`${ns} assign: ${a.name} := ${di(a.value)}`))}return{result:!0,referenceRecord:t}},sS=(n,e)=>Object.entries(n).reduce((t,[i,r])=>({...t,[i]:r.map(s=>{const o=xo(s,"Header value entry",e);if(typeof o!="string")throw new Qt(`Header '${i}' value '${o}' is not a string`);return o})}),{}),ff=(n,e)=>{if(Array.isArray(n))return n.map(t=>ff(t,e));switch(typeof n){case"string":return df(n,e);case"object":if(n===null)throw new Qt(`Unexpected endpoint property: ${n}`);return pf(n,e);case"boolean":return n;default:throw new Qt(`Unexpected endpoint property type: ${typeof n}`)}},pf=(n,e)=>Object.entries(n).reduce((t,[i,r])=>({...t,[i]:ff(r,e)}),{}),oS=(n,e)=>{const t=xo(n,"Endpoint URL",e);if(typeof t=="string")try{return new URL(t)}catch(i){throw console.error(`Failed to construct URL with ${t}`,i),i}throw new Qt(`Endpoint URL must be a string, got ${typeof t}`)},aS=(n,e)=>{var u,d;const{conditions:t,endpoint:i}=n,{result:r,referenceRecord:s}=Xc(t,e);if(!r)return;const o={...e,referenceRecord:{...e.referenceRecord,...s}},{url:a,properties:c,headers:l}=i;return(d=(u=e.logger)==null?void 0:u.debug)==null||d.call(u,`${ns} Resolving endpoint from template: ${di(i)}`),{...l!=null&&{headers:sS(l,o)},...c!=null&&{properties:pf(c,o)},url:oS(a,o)}},cS=(n,e)=>{const{conditions:t,error:i}=n,{result:r,referenceRecord:s}=Xc(t,e);if(r)throw new Qt(xo(i,"Error",{...e,referenceRecord:{...e.referenceRecord,...s}}))},lS=(n,e)=>{const{conditions:t,rules:i}=n,{result:r,referenceRecord:s}=Xc(t,e);if(r)return mf(i,{...e,referenceRecord:{...e.referenceRecord,...s}})},mf=(n,e)=>{for(const t of n)if(t.type==="endpoint"){const i=aS(t,e);if(i)return i}else if(t.type==="error")cS(t,e);else if(t.type==="tree"){const i=lS(t,e);if(i)return i}else throw new Qt(`Unknown endpoint rule: ${t}`);throw new Qt("Rules evaluation failed")},uS=(n,e)=>{var l,u,d,h;const{endpointParams:t,logger:i}=e,{parameters:r,rules:s}=n;(u=(l=e.logger)==null?void 0:l.debug)==null||u.call(l,`${ns} Initial EndpointParams: ${di(t)}`);const o=Object.entries(r).filter(([,f])=>f.default!=null).map(([f,g])=>[f,g.default]);if(o.length>0)for(const[f,g]of o)t[f]=t[f]??g;const a=Object.entries(r).filter(([,f])=>f.required).map(([f])=>f);for(const f of a)if(t[f]==null)throw new Qt(`Missing required parameter: '${f}'`);const c=mf(s,{endpointParams:t,logger:i,referenceRecord:{}});return(h=(d=e.logger)==null?void 0:d.debug)==null||h.call(d,`${ns} Resolved endpoint: ${di(c)}`),c},gf=(n,e=!1)=>{if(e){for(const t of n.split("."))if(!gf(t))return!1;return!0}return!(!Wc(n)||n.length<3||n.length>63||n!==n.toLowerCase()||lf(n))},Ad=":",dS="/",hS=n=>{const e=n.split(Ad);if(e.length<6)return null;const[t,i,r,s,o,...a]=e;if(t!=="arn"||i===""||r===""||a.join(Ad)==="")return null;const c=a.map(l=>l.split(dS)).flat();return{partition:i,service:r,region:s,accountId:o,resourceId:c}},fS=[{id:"aws",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-east-1",name:"aws",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",regions:{"af-south-1":{description:"Africa (Cape Town)"},"ap-east-1":{description:"Asia Pacific (Hong Kong)"},"ap-northeast-1":{description:"Asia Pacific (Tokyo)"},"ap-northeast-2":{description:"Asia Pacific (Seoul)"},"ap-northeast-3":{description:"Asia Pacific (Osaka)"},"ap-south-1":{description:"Asia Pacific (Mumbai)"},"ap-south-2":{description:"Asia Pacific (Hyderabad)"},"ap-southeast-1":{description:"Asia Pacific (Singapore)"},"ap-southeast-2":{description:"Asia Pacific (Sydney)"},"ap-southeast-3":{description:"Asia Pacific (Jakarta)"},"ap-southeast-4":{description:"Asia Pacific (Melbourne)"},"ap-southeast-5":{description:"Asia Pacific (Malaysia)"},"ap-southeast-7":{description:"Asia Pacific (Thailand)"},"aws-global":{description:"AWS Standard global region"},"ca-central-1":{description:"Canada (Central)"},"ca-west-1":{description:"Canada West (Calgary)"},"eu-central-1":{description:"Europe (Frankfurt)"},"eu-central-2":{description:"Europe (Zurich)"},"eu-north-1":{description:"Europe (Stockholm)"},"eu-south-1":{description:"Europe (Milan)"},"eu-south-2":{description:"Europe (Spain)"},"eu-west-1":{description:"Europe (Ireland)"},"eu-west-2":{description:"Europe (London)"},"eu-west-3":{description:"Europe (Paris)"},"il-central-1":{description:"Israel (Tel Aviv)"},"me-central-1":{description:"Middle East (UAE)"},"me-south-1":{description:"Middle East (Bahrain)"},"sa-east-1":{description:"South America (Sao Paulo)"},"us-east-1":{description:"US East (N. Virginia)"},"us-east-2":{description:"US East (Ohio)"},"us-west-1":{description:"US West (N. California)"},"us-west-2":{description:"US West (Oregon)"}}},{id:"aws-cn",outputs:{dnsSuffix:"amazonaws.com.cn",dualStackDnsSuffix:"api.amazonwebservices.com.cn",implicitGlobalRegion:"cn-northwest-1",name:"aws-cn",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^cn\\-\\w+\\-\\d+$",regions:{"aws-cn-global":{description:"AWS China global region"},"cn-north-1":{description:"China (Beijing)"},"cn-northwest-1":{description:"China (Ningxia)"}}},{id:"aws-us-gov",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-gov-west-1",name:"aws-us-gov",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^us\\-gov\\-\\w+\\-\\d+$",regions:{"aws-us-gov-global":{description:"AWS GovCloud (US) global region"},"us-gov-east-1":{description:"AWS GovCloud (US-East)"},"us-gov-west-1":{description:"AWS GovCloud (US-West)"}}},{id:"aws-iso",outputs:{dnsSuffix:"c2s.ic.gov",dualStackDnsSuffix:"c2s.ic.gov",implicitGlobalRegion:"us-iso-east-1",name:"aws-iso",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-iso\\-\\w+\\-\\d+$",regions:{"aws-iso-global":{description:"AWS ISO (US) global region"},"us-iso-east-1":{description:"US ISO East"},"us-iso-west-1":{description:"US ISO WEST"}}},{id:"aws-iso-b",outputs:{dnsSuffix:"sc2s.sgov.gov",dualStackDnsSuffix:"sc2s.sgov.gov",implicitGlobalRegion:"us-isob-east-1",name:"aws-iso-b",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isob\\-\\w+\\-\\d+$",regions:{"aws-iso-b-global":{description:"AWS ISOB (US) global region"},"us-isob-east-1":{description:"US ISOB East (Ohio)"}}},{id:"aws-iso-e",outputs:{dnsSuffix:"cloud.adc-e.uk",dualStackDnsSuffix:"cloud.adc-e.uk",implicitGlobalRegion:"eu-isoe-west-1",name:"aws-iso-e",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^eu\\-isoe\\-\\w+\\-\\d+$",regions:{"eu-isoe-west-1":{description:"EU ISOE West"}}},{id:"aws-iso-f",outputs:{dnsSuffix:"csp.hci.ic.gov",dualStackDnsSuffix:"csp.hci.ic.gov",implicitGlobalRegion:"us-isof-south-1",name:"aws-iso-f",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isof\\-\\w+\\-\\d+$",regions:{}}],pS="1.1",mS={partitions:fS,version:pS};let gS=mS;const _S=n=>{const{partitions:e}=gS;for(const i of e){const{regions:r,outputs:s}=i;for(const[o,a]of Object.entries(r))if(o===n)return{...s,...a}}for(const i of e){const{regionRegex:r,outputs:s}=i;if(new RegExp(r).test(n))return{...s}}const t=e.find(i=>i.id==="aws");if(!t)throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");return{...t.outputs}},_f={isVirtualHostableS3Bucket:gf,parseArn:hS,partition:_S};so.aws=_f;function yS(n,e,t){return n.$source||(n.$source={}),n.$source[e]=t,n}function xn(n,e,t){n.__aws_sdk_context?n.__aws_sdk_context.features||(n.__aws_sdk_context.features={}):n.__aws_sdk_context={features:{}},n.__aws_sdk_context.features[e]=t}const Rd=n=>{var e,t;return ro.isInstance(n)?((e=n.headers)==null?void 0:e.date)??((t=n.headers)==null?void 0:t.Date):void 0},yf=n=>new Date(Date.now()+n),xS=(n,e)=>Math.abs(yf(e).getTime()-n)>=3e5,Cd=(n,e)=>{const t=Date.parse(n);return xS(t,e)?t-Date.now():e},Yr=(n,e)=>{if(!e)throw new Error(`Property \`${n}\` is not resolved for AWS SDK SigV4Auth`);return e},vS=async n=>{var l,u,d;const e=Yr("context",n.context),t=Yr("config",n.config),i=(d=(u=(l=e.endpointV2)==null?void 0:l.properties)==null?void 0:u.authSchemes)==null?void 0:d[0],s=await Yr("signer",t.signer)(i),o=n==null?void 0:n.signingRegion,a=n==null?void 0:n.signingRegionSet,c=n==null?void 0:n.signingName;return{config:t,signer:s,signingRegion:o,signingRegionSet:a,signingName:c}};class ES{async sign(e,t,i){var d;if(!Jt.isInstance(e))throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");const r=await vS(i),{config:s,signer:o}=r;let{signingRegion:a,signingName:c}=r;const l=i.context;if(((d=l==null?void 0:l.authSchemes)==null?void 0:d.length)??!1){const[h,f]=l.authSchemes;(h==null?void 0:h.name)==="sigv4a"&&(f==null?void 0:f.name)==="sigv4"&&(a=(f==null?void 0:f.signingRegion)??a,c=(f==null?void 0:f.signingName)??c)}return await o.sign(e,{signingDate:yf(s.systemClockOffset),signingRegion:a,signingService:c})}errorHandler(e){return t=>{const i=t.ServerTime??Rd(t.$response);if(i){const r=Yr("config",e.config),s=r.systemClockOffset;r.systemClockOffset=Cd(i,r.systemClockOffset),r.systemClockOffset!==s&&t.$metadata&&(t.$metadata.clockSkewCorrected=!0)}throw t}}successHandler(e,t){const i=Rd(e);if(i){const r=Yr("config",t.config);r.systemClockOffset=Cd(i,r.systemClockOffset)}}}const SS=(n,e,t)=>{let i,r,s,o=!1;const a=async()=>{r||(r=n());try{i=await r,s=!0,o=!1}finally{r=void 0}return i};return async c=>((!s||c!=null&&c.forceRefresh)&&(i=await a()),i)},MS="X-Amz-Algorithm",bS="X-Amz-Credential",xf="X-Amz-Date",wS="X-Amz-SignedHeaders",TS="X-Amz-Expires",vf="X-Amz-Signature",Ef="X-Amz-Security-Token",Sf="authorization",Mf=xf.toLowerCase(),AS="date",RS=[Sf,Mf,AS],CS=vf.toLowerCase(),mc="x-amz-content-sha256",PS=Ef.toLowerCase(),IS={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},LS=/^proxy-/,DS=/^sec-/,da="AWS4-HMAC-SHA256",NS="AWS4-HMAC-SHA256-PAYLOAD",US="UNSIGNED-PAYLOAD",OS=50,bf="aws4_request",FS=60*60*24*7,Os={},ha=[],fa=(n,e,t)=>`${n}/${e}/${t}/${bf}`,BS=async(n,e,t,i,r)=>{const s=await Pd(n,e.secretAccessKey,e.accessKeyId),o=`${t}:${i}:${r}:${Ci(s)}:${e.sessionToken}`;if(o in Os)return Os[o];for(ha.push(o);ha.length>OS;)delete Os[ha.shift()];let a=`AWS4${e.secretAccessKey}`;for(const c of[t,i,r,bf])a=await Pd(n,a,c);return Os[o]=a},Pd=(n,e,t)=>{const i=new n(e);return i.update(jr(t)),i.digest()},Id=({headers:n},e,t)=>{const i={};for(const r of Object.keys(n).sort()){if(n[r]==null)continue;const s=r.toLowerCase();(s in IS||e!=null&&e.has(s)||LS.test(s)||DS.test(s))&&(!t||t&&!t.has(s))||(i[s]=n[r].trim().replace(/\s+/g," "))}return i},kS=({query:n={}})=>{const e=[],t={};for(const i of Object.keys(n)){if(i.toLowerCase()===CS)continue;const r=Ii(i);e.push(r);const s=n[i];typeof s=="string"?t[r]=`${r}=${Ii(s)}`:Array.isArray(s)&&(t[r]=s.slice(0).reduce((o,a)=>o.concat([`${r}=${Ii(a)}`]),[]).sort().join("&"))}return e.sort().map(i=>t[i]).filter(i=>i).join("&")},zS=n=>typeof ArrayBuffer=="function"&&n instanceof ArrayBuffer||Object.prototype.toString.call(n)==="[object ArrayBuffer]",pa=async({headers:n,body:e},t)=>{for(const i of Object.keys(n))if(i.toLowerCase()===mc)return n[i];if(e==null)return"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";if(typeof e=="string"||ArrayBuffer.isView(e)||zS(e)){const i=new t;return i.update(jr(e)),Ci(await i.digest())}return US};class HS{format(e){const t=[];for(const s of Object.keys(e)){const o=Er(s);t.push(Uint8Array.from([o.byteLength]),o,this.formatHeaderValue(e[s]))}const i=new Uint8Array(t.reduce((s,o)=>s+o.byteLength,0));let r=0;for(const s of t)i.set(s,r),r+=s.byteLength;return i}formatHeaderValue(e){switch(e.type){case"boolean":return Uint8Array.from([e.value?0:1]);case"byte":return Uint8Array.from([2,e.value]);case"short":const t=new DataView(new ArrayBuffer(3));return t.setUint8(0,3),t.setInt16(1,e.value,!1),new Uint8Array(t.buffer);case"integer":const i=new DataView(new ArrayBuffer(5));return i.setUint8(0,4),i.setInt32(1,e.value,!1),new Uint8Array(i.buffer);case"long":const r=new Uint8Array(9);return r[0]=5,r.set(e.value.bytes,1),r;case"binary":const s=new DataView(new ArrayBuffer(3+e.value.byteLength));s.setUint8(0,6),s.setUint16(1,e.value.byteLength,!1);const o=new Uint8Array(s.buffer);return o.set(e.value,3),o;case"string":const a=Er(e.value),c=new DataView(new ArrayBuffer(3+a.byteLength));c.setUint8(0,7),c.setUint16(1,a.byteLength,!1);const l=new Uint8Array(c.buffer);return l.set(a,3),l;case"timestamp":const u=new Uint8Array(9);return u[0]=8,u.set($c.fromNumber(e.value.valueOf()).bytes,1),u;case"uuid":if(!VS.test(e.value))throw new Error(`Invalid UUID received: ${e.value}`);const d=new Uint8Array(17);return d[0]=9,d.set(NE(e.value.replace(/\-/g,"")),1),d}}}var Ld;(function(n){n[n.boolTrue=0]="boolTrue",n[n.boolFalse=1]="boolFalse",n[n.byte=2]="byte",n[n.short=3]="short",n[n.integer=4]="integer",n[n.long=5]="long",n[n.byteArray=6]="byteArray",n[n.string=7]="string",n[n.timestamp=8]="timestamp",n[n.uuid=9]="uuid"})(Ld||(Ld={}));const VS=/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;class $c{constructor(e){if(this.bytes=e,e.byteLength!==8)throw new Error("Int64 buffers must be exactly 8 bytes")}static fromNumber(e){if(e>9223372036854776e3||e<-9223372036854776e3)throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);const t=new Uint8Array(8);for(let i=7,r=Math.abs(Math.round(e));i>-1&&r>0;i--,r/=256)t[i]=r;return e<0&&Dd(t),new $c(t)}valueOf(){const e=this.bytes.slice(0),t=e[0]&128;return t&&Dd(e),parseInt(Ci(e),16)*(t?-1:1)}toString(){return String(this.valueOf())}}function Dd(n){for(let e=0;e<8;e++)n[e]^=255;for(let e=7;e>-1&&(n[e]++,n[e]===0);e--);}const GS=(n,e)=>{n=n.toLowerCase();for(const t of Object.keys(e))if(n===t.toLowerCase())return!0;return!1},WS=(n,e={})=>{var r,s;const{headers:t,query:i={}}=Jt.clone(n);for(const o of Object.keys(t)){const a=o.toLowerCase();(a.slice(0,6)==="x-amz-"&&!((r=e.unhoistableHeaders)!=null&&r.has(a))||(s=e.hoistableHeaders)!=null&&s.has(a))&&(i[o]=t[o],delete t[o])}return{...n,headers:t,query:i}},Nd=n=>{n=Jt.clone(n);for(const e of Object.keys(n.headers))RS.indexOf(e.toLowerCase())>-1&&delete n.headers[e];return n},XS=n=>$S(n).toISOString().replace(/\.\d{3}Z$/,"Z"),$S=n=>typeof n=="number"?new Date(n*1e3):typeof n=="string"?Number(n)?new Date(Number(n)*1e3):new Date(n):n;class Ud{constructor({applyChecksum:e,credentials:t,region:i,service:r,sha256:s,uriEscapePath:o=!0}){this.headerFormatter=new HS,this.service=r,this.sha256=s,this.uriEscapePath=o,this.applyChecksum=typeof e=="boolean"?e:!0,this.regionProvider=Hn(i),this.credentialProvider=Hn(t)}async presign(e,t={}){const{signingDate:i=new Date,expiresIn:r=3600,unsignableHeaders:s,unhoistableHeaders:o,signableHeaders:a,hoistableHeaders:c,signingRegion:l,signingService:u}=t,d=await this.credentialProvider();this.validateResolvedCredentials(d);const h=l??await this.regionProvider(),{longDate:f,shortDate:g}=Fs(i);if(r>FS)return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");const _=fa(g,h,u??this.service),m=WS(Nd(e),{unhoistableHeaders:o,hoistableHeaders:c});d.sessionToken&&(m.query[Ef]=d.sessionToken),m.query[MS]=da,m.query[bS]=`${d.accessKeyId}/${_}`,m.query[xf]=f,m.query[TS]=r.toString(10);const p=Id(m,s,a);return m.query[wS]=Od(p),m.query[vf]=await this.getSignature(f,_,this.getSigningKey(d,h,g,u),this.createCanonicalRequest(m,p,await pa(e,this.sha256))),m}async sign(e,t){return typeof e=="string"?this.signString(e,t):e.headers&&e.payload?this.signEvent(e,t):e.message?this.signMessage(e,t):this.signRequest(e,t)}async signEvent({headers:e,payload:t},{signingDate:i=new Date,priorSignature:r,signingRegion:s,signingService:o}){const a=s??await this.regionProvider(),{shortDate:c,longDate:l}=Fs(i),u=fa(c,a,o??this.service),d=await pa({headers:{},body:t},this.sha256),h=new this.sha256;h.update(e);const f=Ci(await h.digest()),g=[NS,l,u,r,f,d].join(`
`);return this.signString(g,{signingDate:i,signingRegion:a,signingService:o})}async signMessage(e,{signingDate:t=new Date,signingRegion:i,signingService:r}){return this.signEvent({headers:this.headerFormatter.format(e.message.headers),payload:e.message.body},{signingDate:t,signingRegion:i,signingService:r,priorSignature:e.priorSignature}).then(o=>({message:e.message,signature:o}))}async signString(e,{signingDate:t=new Date,signingRegion:i,signingService:r}={}){const s=await this.credentialProvider();this.validateResolvedCredentials(s);const o=i??await this.regionProvider(),{shortDate:a}=Fs(t),c=new this.sha256(await this.getSigningKey(s,o,a,r));return c.update(jr(e)),Ci(await c.digest())}async signRequest(e,{signingDate:t=new Date,signableHeaders:i,unsignableHeaders:r,signingRegion:s,signingService:o}={}){const a=await this.credentialProvider();this.validateResolvedCredentials(a);const c=s??await this.regionProvider(),l=Nd(e),{longDate:u,shortDate:d}=Fs(t),h=fa(d,c,o??this.service);l.headers[Mf]=u,a.sessionToken&&(l.headers[PS]=a.sessionToken);const f=await pa(l,this.sha256);!GS(mc,l.headers)&&this.applyChecksum&&(l.headers[mc]=f);const g=Id(l,r,i),_=await this.getSignature(u,h,this.getSigningKey(a,c,d,o),this.createCanonicalRequest(l,g,f));return l.headers[Sf]=`${da} Credential=${a.accessKeyId}/${h}, SignedHeaders=${Od(g)}, Signature=${_}`,l}createCanonicalRequest(e,t,i){const r=Object.keys(t).sort();return`${e.method}
${this.getCanonicalPath(e)}
${kS(e)}
${r.map(s=>`${s}:${t[s]}`).join(`
`)}

${r.join(";")}
${i}`}async createStringToSign(e,t,i){const r=new this.sha256;r.update(jr(i));const s=await r.digest();return`${da}
${e}
${t}
${Ci(s)}`}getCanonicalPath({path:e}){if(this.uriEscapePath){const t=[];for(const s of e.split("/"))(s==null?void 0:s.length)!==0&&s!=="."&&(s===".."?t.pop():t.push(s));const i=`${e!=null&&e.startsWith("/")?"/":""}${t.join("/")}${t.length>0&&(e!=null&&e.endsWith("/"))?"/":""}`;return Ii(i).replace(/%2F/g,"/")}return e}async getSignature(e,t,i,r){const s=await this.createStringToSign(e,t,r),o=new this.sha256(await i);return o.update(jr(s)),Ci(await o.digest())}getSigningKey(e,t,i,r){return BS(this.sha256,e,i,t,r||this.service)}validateResolvedCredentials(e){if(typeof e!="object"||typeof e.accessKeyId!="string"||typeof e.secretAccessKey!="string")throw new Error("Resolved credential object is not valid")}}const Fs=n=>{const e=XS(n).replace(/[\-:]/g,"");return{longDate:e,shortDate:e.slice(0,8)}},Od=n=>Object.keys(n).sort().join(";"),qS=n=>{let e=!1,t;n.credentials&&(e=!0,t=HE(n.credentials,zE,cf)),t||(n.credentialDefaultProvider?t=Gr(n.credentialDefaultProvider(Object.assign({},n,{parentClientConfig:n}))):t=async()=>{throw new Error("`credentials` is missing")});const i=async()=>t({callerClientConfig:n}),{signingEscapePath:r=!0,systemClockOffset:s=n.systemClockOffset||0,sha256:o}=n;let a;return n.signer?a=Gr(n.signer):n.regionInfoProvider?a=()=>Gr(n.region)().then(async c=>[await n.regionInfoProvider(c,{useFipsEndpoint:await n.useFipsEndpoint(),useDualstackEndpoint:await n.useDualstackEndpoint()})||{},c]).then(([c,l])=>{const{signingRegion:u,signingService:d}=c;n.signingRegion=n.signingRegion||u||l,n.signingName=n.signingName||d||n.serviceId;const h={...n,credentials:i,region:n.signingRegion,service:n.signingName,sha256:o,uriEscapePath:r},f=n.signerConstructor||Ud;return new f(h)}):a=async c=>{c=Object.assign({},{name:"sigv4",signingName:n.signingName||n.defaultSigningName,signingRegion:await Gr(n.region)(),properties:{}},c);const l=c.signingRegion,u=c.signingName;n.signingRegion=n.signingRegion||l,n.signingName=n.signingName||u||n.serviceId;const d={...n,credentials:i,region:n.signingRegion,service:n.signingName,sha256:o,uriEscapePath:r},h=n.signerConstructor||Ud;return new h(d)},{...n,systemClockOffset:s,signingEscapePath:r,credentials:e?async()=>i().then(c=>yS(c,"CREDENTIALS_CODE","e")):i,signer:a}},Si=(n,e)=>{const t=[];if(n&&t.push(n),e)for(const i of e)t.push(i);return t},Zn=(n,e)=>`${n||"anonymous"}${e&&e.length>0?` (a.k.a. ${e.join(",")})`:""}`,oo=()=>{let n=[],e=[],t=!1;const i=new Set,r=d=>d.sort((h,f)=>Fd[f.step]-Fd[h.step]||Bd[f.priority||"normal"]-Bd[h.priority||"normal"]),s=d=>{let h=!1;const f=g=>{const _=Si(g.name,g.aliases);if(_.includes(d)){h=!0;for(const m of _)i.delete(m);return!1}return!0};return n=n.filter(f),e=e.filter(f),h},o=d=>{let h=!1;const f=g=>{if(g.middleware===d){h=!0;for(const _ of Si(g.name,g.aliases))i.delete(_);return!1}return!0};return n=n.filter(f),e=e.filter(f),h},a=d=>{var h;return n.forEach(f=>{d.add(f.middleware,{...f})}),e.forEach(f=>{d.addRelativeTo(f.middleware,{...f})}),(h=d.identifyOnResolve)==null||h.call(d,u.identifyOnResolve()),d},c=d=>{const h=[];return d.before.forEach(f=>{f.before.length===0&&f.after.length===0?h.push(f):h.push(...c(f))}),h.push(d),d.after.reverse().forEach(f=>{f.before.length===0&&f.after.length===0?h.push(f):h.push(...c(f))}),h},l=(d=!1)=>{const h=[],f=[],g={};return n.forEach(m=>{const p={...m,before:[],after:[]};for(const M of Si(p.name,p.aliases))g[M]=p;h.push(p)}),e.forEach(m=>{const p={...m,before:[],after:[]};for(const M of Si(p.name,p.aliases))g[M]=p;f.push(p)}),f.forEach(m=>{if(m.toMiddleware){const p=g[m.toMiddleware];if(p===void 0){if(d)return;throw new Error(`${m.toMiddleware} is not found when adding ${Zn(m.name,m.aliases)} middleware ${m.relation} ${m.toMiddleware}`)}m.relation==="after"&&p.after.push(m),m.relation==="before"&&p.before.push(m)}}),r(h).map(c).reduce((m,p)=>(m.push(...p),m),[])},u={add:(d,h={})=>{const{name:f,override:g,aliases:_}=h,m={step:"initialize",priority:"normal",middleware:d,...h},p=Si(f,_);if(p.length>0){if(p.some(M=>i.has(M))){if(!g)throw new Error(`Duplicate middleware name '${Zn(f,_)}'`);for(const M of p){const w=n.findIndex(P=>{var A;return P.name===M||((A=P.aliases)==null?void 0:A.some(T=>T===M))});if(w===-1)continue;const v=n[w];if(v.step!==m.step||m.priority!==v.priority)throw new Error(`"${Zn(v.name,v.aliases)}" middleware with ${v.priority} priority in ${v.step} step cannot be overridden by "${Zn(f,_)}" middleware with ${m.priority} priority in ${m.step} step.`);n.splice(w,1)}}for(const M of p)i.add(M)}n.push(m)},addRelativeTo:(d,h)=>{const{name:f,override:g,aliases:_}=h,m={middleware:d,...h},p=Si(f,_);if(p.length>0){if(p.some(M=>i.has(M))){if(!g)throw new Error(`Duplicate middleware name '${Zn(f,_)}'`);for(const M of p){const w=e.findIndex(P=>{var A;return P.name===M||((A=P.aliases)==null?void 0:A.some(T=>T===M))});if(w===-1)continue;const v=e[w];if(v.toMiddleware!==m.toMiddleware||v.relation!==m.relation)throw new Error(`"${Zn(v.name,v.aliases)}" middleware ${v.relation} "${v.toMiddleware}" middleware cannot be overridden by "${Zn(f,_)}" middleware ${m.relation} "${m.toMiddleware}" middleware.`);e.splice(w,1)}}for(const M of p)i.add(M)}e.push(m)},clone:()=>a(oo()),use:d=>{d.applyToStack(u)},remove:d=>typeof d=="string"?s(d):o(d),removeByTag:d=>{let h=!1;const f=g=>{const{tags:_,name:m,aliases:p}=g;if(_&&_.includes(d)){const M=Si(m,p);for(const w of M)i.delete(w);return h=!0,!1}return!0};return n=n.filter(f),e=e.filter(f),h},concat:d=>{var f;const h=a(oo());return h.use(d),h.identifyOnResolve(t||h.identifyOnResolve()||(((f=d.identifyOnResolve)==null?void 0:f.call(d))??!1)),h},applyToStack:a,identify:()=>l(!0).map(d=>{const h=d.step??d.relation+" "+d.toMiddleware;return Zn(d.name,d.aliases)+" - "+h}),identifyOnResolve(d){return typeof d=="boolean"&&(t=d),t},resolve:(d,h)=>{for(const f of l().map(g=>g.middleware).reverse())d=f(d,h);return t&&console.log(u.identify()),d}};return u},Fd={initialize:5,serialize:4,build:3,finalizeRequest:2,deserialize:1},Bd={high:3,normal:2,low:1};class jS{constructor(e){this.config=e,this.middlewareStack=oo()}send(e,t,i){const r=typeof t!="function"?t:void 0,s=typeof t=="function"?t:i,o=r===void 0&&this.config.cacheMiddleware===!0;let a;if(o){this.handlers||(this.handlers=new WeakMap);const c=this.handlers;c.has(e.constructor)?a=c.get(e.constructor):(a=e.resolveMiddleware(this.middlewareStack,this.config,r),c.set(e.constructor,a))}else delete this.handlers,a=e.resolveMiddleware(this.middlewareStack,this.config,r);if(s)a(e).then(c=>s(null,c.output),c=>s(c)).catch(()=>{});else return a(e).then(c=>c.output)}destroy(){var e,t,i;(i=(t=(e=this.config)==null?void 0:e.requestHandler)==null?void 0:t.destroy)==null||i.call(t),delete this.handlers}}class wf{constructor(){this.middlewareStack=oo()}static classBuilder(){return new YS}resolveMiddlewareWithContext(e,t,i,{middlewareFn:r,clientName:s,commandName:o,inputFilterSensitiveLog:a,outputFilterSensitiveLog:c,smithyContext:l,additionalContext:u,CommandCtor:d}){for(const m of r.bind(this)(d,e,t,i))this.middlewareStack.use(m);const h=e.concat(this.middlewareStack),{logger:f}=t,g={logger:f,clientName:s,commandName:o,inputFilterSensitiveLog:a,outputFilterSensitiveLog:c,[fc]:{commandInstance:this,...l},...u},{requestHandler:_}=t;return h.resolve(m=>_.handle(m.request,i||{}),g)}}class YS{constructor(){this._init=()=>{},this._ep={},this._middlewareFn=()=>[],this._commandName="",this._clientName="",this._additionalContext={},this._smithyContext={},this._inputFilterSensitiveLog=e=>e,this._outputFilterSensitiveLog=e=>e,this._serializer=null,this._deserializer=null}init(e){this._init=e}ep(e){return this._ep=e,this}m(e){return this._middlewareFn=e,this}s(e,t,i={}){return this._smithyContext={service:e,operation:t,...i},this}c(e={}){return this._additionalContext=e,this}n(e,t){return this._clientName=e,this._commandName=t,this}f(e=i=>i,t=i=>i){return this._inputFilterSensitiveLog=e,this._outputFilterSensitiveLog=t,this}ser(e){return this._serializer=e,this}de(e){return this._deserializer=e,this}build(){const e=this;let t;return t=class extends wf{static getEndpointParameterInstructions(){return e._ep}constructor(...[i]){super(),this.serialize=e._serializer,this.deserialize=e._deserializer,this.input=i??{},e._init(this)}resolveMiddleware(i,r,s){return this.resolveMiddlewareWithContext(i,r,s,{CommandCtor:t,middlewareFn:e._middlewareFn,clientName:e._clientName,commandName:e._commandName,inputFilterSensitiveLog:e._inputFilterSensitiveLog,outputFilterSensitiveLog:e._outputFilterSensitiveLog,smithyContext:e._smithyContext,additionalContext:e._additionalContext})}}}}const Bs=n=>{if(n!=null){if(typeof n=="number"){if((n===0||n===1)&&_c.warn(gc(`Expected boolean, got ${typeof n}: ${n}`)),n===0)return!1;if(n===1)return!0}if(typeof n=="string"){const e=n.toLowerCase();if((e==="false"||e==="true")&&_c.warn(gc(`Expected boolean, got ${typeof n}: ${n}`)),e==="false")return!1;if(e==="true")return!0}if(typeof n=="boolean")return n;throw new TypeError(`Expected boolean, got ${typeof n}: ${n}`)}},KS=n=>{if(n==null)return;if(typeof n=="object"&&!Array.isArray(n))return n;const e=Array.isArray(n)?"array":typeof n;throw new TypeError(`Expected object, got ${e}: ${n}`)},ii=n=>{if(n!=null){if(typeof n=="string")return n;if(["boolean","number","bigint"].includes(typeof n))return _c.warn(gc(`Expected string, got ${typeof n}: ${n}`)),String(n);throw new TypeError(`Expected string, got ${typeof n}: ${n}`)}},ZS=n=>{if(n==null)return;const e=KS(n),t=Object.entries(e).filter(([,i])=>i!=null).map(([i])=>i);if(t.length===0)throw new TypeError("Unions must have exactly one non-null member. None were found.");if(t.length>1)throw new TypeError(`Unions must have exactly one non-null member. Keys ${t} were not null.`);return e},gc=n=>String(new TypeError(n).stack||n).split(`
`).slice(0,5).filter(e=>!e.includes("stackTraceWarning")).join(`
`),_c={warn:console.warn};class Kr extends Error{constructor(e){super(e.message),Object.setPrototypeOf(this,Object.getPrototypeOf(this).constructor.prototype),this.name=e.name,this.$fault=e.$fault,this.$metadata=e.$metadata}static isInstance(e){if(!e)return!1;const t=e;return!!t.$fault&&!!t.$metadata&&(t.$fault==="client"||t.$fault==="server")}static[Symbol.hasInstance](e){if(!e)return!1;const t=e;return this===Kr?Kr.isInstance(e):Kr.isInstance(e)?t.name&&this.name?this.prototype.isPrototypeOf(e)||t.name===this.name:this.prototype.isPrototypeOf(e):!1}}const je=(n,e={})=>{Object.entries(e).filter(([,i])=>i!==void 0).forEach(([i,r])=>{(n[i]==null||n[i]==="")&&(n[i]=r)});const t=n.message||n.Message||"UnknownError";return n.message=t,delete n.Message,n},JS=({output:n,parsedBody:e,exceptionCtor:t,errorCode:i})=>{const r=eM(n),s=r.httpStatusCode?r.httpStatusCode+"":void 0,o=new t({name:(e==null?void 0:e.code)||(e==null?void 0:e.Code)||i||s||"UnknownError",$fault:"client",$metadata:r});throw je(o,e)},QS=n=>({output:e,parsedBody:t,errorCode:i})=>{JS({output:e,parsedBody:t,exceptionCtor:n,errorCode:i})},eM=n=>({httpStatusCode:n.statusCode,requestId:n.headers["x-amzn-requestid"]??n.headers["x-amzn-request-id"]??n.headers["x-amz-request-id"],extendedRequestId:n.headers["x-amz-id-2"],cfId:n.headers["x-amz-cf-id"]}),tM=n=>{switch(n){case"standard":return{retryMode:"standard",connectionTimeout:3100};case"in-region":return{retryMode:"standard",connectionTimeout:1100};case"cross-region":return{retryMode:"standard",connectionTimeout:3100};case"mobile":return{retryMode:"standard",connectionTimeout:3e4};default:return{}}},nM=n=>{const e=[];for(const t in io){const i=io[t];n[i]!==void 0&&e.push({algorithmId:()=>i,checksumConstructor:()=>n[i]})}return{_checksumAlgorithms:e,addChecksumAlgorithm(t){this._checksumAlgorithms.push(t)},checksumAlgorithms(){return this._checksumAlgorithms}}},iM=n=>{const e={};return n.checksumAlgorithms().forEach(t=>{e[t.algorithmId()]=t.checksumConstructor()}),e},rM=n=>{let e=n.retryStrategy;return{setRetryStrategy(t){e=t},retryStrategy(){return e}}},sM=n=>{const e={};return e.retryStrategy=n.retryStrategy(),e},oM=n=>({...nM(n),...rM(n)}),aM=n=>({...iM(n),...sM(n)});class Tf{trace(){}debug(){}info(){}warn(){}error(){}}const qc=(n,e)=>{const t={};for(const i in e)cM(t,n,e,i);return t},cM=(n,e,t,i)=>{if(e!==null){let o=t[i];typeof o=="function"&&(o=[,o]);const[a=lM,c=uM,l=i]=o;(typeof a=="function"&&a(e[l])||typeof a!="function"&&a)&&(n[i]=c(e[l]));return}let[r,s]=t[i];if(typeof s=="function"){let o;const a=r===void 0&&(o=s())!=null,c=typeof r=="function"&&!!r(void 0)||typeof r!="function"&&!!r;a?n[i]=o:c&&(n[i]=s())}else{const o=r===void 0&&s!=null,a=typeof r=="function"&&!!r(s)||typeof r!="function"&&!!r;(o||a)&&(n[i]=s)}},lM=n=>n!=null,uM=n=>n,ze=n=>{if(n==null)return{};if(Array.isArray(n))return n.filter(e=>e!=null).map(ze);if(typeof n=="object"){const e={};for(const t of Object.keys(n))n[t]!=null&&(e[t]=ze(n[t]));return e}return n},jc=n=>{if(n!=null)return typeof n=="object"&&"__type"in n&&delete n.__type,ZS(n)},dM=(n,e)=>UE(n,e).then(t=>e.utf8Encoder(t)),Af=(n,e)=>dM(n,e).then(t=>{if(t.length)try{return JSON.parse(t)}catch(i){throw(i==null?void 0:i.name)==="SyntaxError"&&Object.defineProperty(i,"$responseBodyText",{value:t}),i}return{}}),hM=async(n,e)=>{const t=await Af(n,e);return t.message=t.message??t.Message,t},fM=(n,e)=>{const t=(s,o)=>Object.keys(s).find(a=>a.toLowerCase()===o.toLowerCase()),i=s=>{let o=s;return typeof o=="number"&&(o=o.toString()),o.indexOf(",")>=0&&(o=o.split(",")[0]),o.indexOf(":")>=0&&(o=o.split(":")[0]),o.indexOf("#")>=0&&(o=o.split("#")[1]),o},r=t(n.headers,"x-amzn-errortype");if(r!==void 0)return i(n.headers[r]);if(e.code!==void 0)return i(e.code);if(e.__type!==void 0)return i(e.__type)},pM=/\d{12}\.ddb/;async function mM(n,e,t){var s,o,a,c,l,u,d;const i=t.request;if(((s=i==null?void 0:i.headers)==null?void 0:s["smithy-protocol"])==="rpc-v2-cbor"&&xn(n,"PROTOCOL_RPC_V2_CBOR","M"),typeof e.retryStrategy=="function"){const h=await e.retryStrategy();typeof h.acquireInitialRetryToken=="function"?(a=(o=h.constructor)==null?void 0:o.name)!=null&&a.includes("Adaptive")?xn(n,"RETRY_MODE_ADAPTIVE","F"):xn(n,"RETRY_MODE_STANDARD","E"):xn(n,"RETRY_MODE_LEGACY","D")}if(typeof e.accountIdEndpointMode=="function"){const h=n.endpointV2;switch(String((c=h==null?void 0:h.url)==null?void 0:c.hostname).match(pM)&&xn(n,"ACCOUNT_ID_ENDPOINT","O"),await((l=e.accountIdEndpointMode)==null?void 0:l.call(e))){case"disabled":xn(n,"ACCOUNT_ID_MODE_DISABLED","Q");break;case"preferred":xn(n,"ACCOUNT_ID_MODE_PREFERRED","P");break;case"required":xn(n,"ACCOUNT_ID_MODE_REQUIRED","R");break}}const r=(d=(u=n.__smithy_context)==null?void 0:u.selectedHttpAuthScheme)==null?void 0:d.identity;if(r!=null&&r.$source){const h=r;h.accountId&&xn(n,"RESOLVED_ACCOUNT_ID","T");for(const[f,g]of Object.entries(h.$source??{}))xn(n,f,g)}}const kd="user-agent",ma="x-amz-user-agent",zd=" ",ga="/",gM=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,_M=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,Hd="-",yM=1024;function xM(n){let e="";for(const t in n){const i=n[t];if(e.length+i.length+1<=yM){e.length?e+=","+i:e+=i;continue}break}return e}const vM=n=>(e,t)=>async i=>{var f,g,_,m;const{request:r}=i;if(!Jt.isInstance(r))return e(i);const{headers:s}=r,o=((f=t==null?void 0:t.userAgent)==null?void 0:f.map(ks))||[],a=(await n.defaultUserAgentProvider()).map(ks);await mM(t,n,i);const c=t;a.push(`m/${xM(Object.assign({},(g=t.__smithy_context)==null?void 0:g.features,(_=c.__aws_sdk_context)==null?void 0:_.features))}`);const l=((m=n==null?void 0:n.customUserAgent)==null?void 0:m.map(ks))||[],u=await n.userAgentAppId();u&&a.push(ks([`app/${u}`]));const d=[].concat([...a,...o,...l]).join(zd),h=[...a.filter(p=>p.startsWith("aws-sdk-")),...l].join(zd);return n.runtime!=="browser"?(h&&(s[ma]=s[ma]?`${s[kd]} ${h}`:h),s[kd]=d):s[ma]=d,e({...i,request:r})},ks=n=>{var o;const e=n[0].split(ga).map(a=>a.replace(gM,Hd)).join(ga),t=(o=n[1])==null?void 0:o.replace(_M,Hd),i=e.indexOf(ga),r=e.substring(0,i);let s=e.substring(i+1);return r==="api"&&(s=s.toLowerCase()),[r,s,t].filter(a=>a&&a.length>0).reduce((a,c,l)=>{switch(l){case 0:return c;case 1:return`${a}/${c}`;default:return`${a}#${c}`}},"")},EM={name:"getUserAgentMiddleware",step:"build",priority:"low",tags:["SET_USER_AGENT","USER_AGENT"],override:!0},SM=n=>({applyToStack:e=>{e.add(vM(n),EM)}});var Vd;(function(n){n.ENV="env",n.CONFIG="shared config entry"})(Vd||(Vd={}));const MM=!1,bM=!1,Rf=n=>typeof n=="string"&&(n.startsWith("fips-")||n.endsWith("-fips")),Gd=n=>Rf(n)?["fips-aws-global","aws-fips"].includes(n)?"us-east-1":n.replace(/fips-(dkr-|prod-)?|-fips/,""):n,wM=n=>{const{region:e,useFipsEndpoint:t}=n;if(!e)throw new Error("Region is missing");return{...n,region:async()=>{if(typeof e=="string")return Gd(e);const i=await e();return Gd(i)},useFipsEndpoint:async()=>{const i=typeof e=="string"?e:await e();return Rf(i)?!0:typeof t!="function"?Promise.resolve(!!t):t()}}},Wd="content-length";function TM(n){return e=>async t=>{const i=t.request;if(Jt.isInstance(i)){const{body:r,headers:s}=i;if(r&&Object.keys(s).map(o=>o.toLowerCase()).indexOf(Wd)===-1)try{const o=n(r);i.headers={...i.headers,[Wd]:String(o)}}catch{}}return e({...t,request:i})}}const AM={step:"build",tags:["SET_CONTENT_LENGTH","CONTENT_LENGTH"],name:"contentLengthMiddleware",override:!0},RM=n=>({applyToStack:e=>{e.add(TM(n.bodyLengthChecker),AM)}}),CM=async n=>{const e=(n==null?void 0:n.Bucket)||"";if(typeof n.Bucket=="string"&&(n.Bucket=e.replace(/#/g,encodeURIComponent("#")).replace(/\?/g,encodeURIComponent("?"))),NM(e)){if(n.ForcePathStyle===!0)throw new Error("Path-style addressing cannot be used with ARN buckets")}else(!DM(e)||e.indexOf(".")!==-1&&!String(n.Endpoint).startsWith("http:")||e.toLowerCase()!==e||e.length<3)&&(n.ForcePathStyle=!0);return n.DisableMultiRegionAccessPoints&&(n.disableMultiRegionAccessPoints=!0,n.DisableMRAP=!0),n},PM=/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,IM=/(\d+\.){3}\d+/,LM=/\.\./,DM=n=>PM.test(n)&&!IM.test(n)&&!LM.test(n),NM=n=>{const[e,t,i,,,r]=n.split(":"),s=e==="arn"&&n.split(":").length>=6,o=!!(s&&t&&i&&r);if(s&&!o)throw new Error(`Invalid ARN: ${n} was an invalid ARN.`);return o},UM=(n,e,t)=>{const i=async()=>{const r=t[n]??t[e];return typeof r=="function"?r():r};return n==="credentialScope"||e==="CredentialScope"?async()=>{const r=typeof t.credentials=="function"?await t.credentials():t.credentials;return(r==null?void 0:r.credentialScope)??(r==null?void 0:r.CredentialScope)}:n==="accountId"||e==="AccountId"?async()=>{const r=typeof t.credentials=="function"?await t.credentials():t.credentials;return(r==null?void 0:r.accountId)??(r==null?void 0:r.AccountId)}:n==="endpoint"||e==="endpoint"?async()=>{const r=await i();if(r&&typeof r=="object"){if("url"in r)return r.url.href;if("hostname"in r){const{protocol:s,hostname:o,port:a,path:c}=r;return`${s}//${o}${a?":"+a:""}${c}`}}return r}:i},Cf=async n=>{};function OM(n){const e={};if(n=n.replace(/^\?/,""),n)for(const t of n.split("&")){let[i,r=null]=t.split("=");i=decodeURIComponent(i),r&&(r=decodeURIComponent(r)),i in e?Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]:e[i]=r}return e}const ao=n=>{if(typeof n=="string")return ao(new URL(n));const{hostname:e,pathname:t,port:i,protocol:r,search:s}=n;let o;return s&&(o=OM(s)),{hostname:e,port:i?parseInt(i):void 0,protocol:r,path:t,query:o}},Pf=n=>typeof n=="object"?"url"in n?ao(n.url):n:ao(n),FM=async(n,e,t,i)=>{if(!t.endpoint){let o;t.serviceConfiguredEndpoint?o=await t.serviceConfiguredEndpoint():o=await Cf(t.serviceId),o&&(t.endpoint=()=>Promise.resolve(Pf(o)))}const r=await BM(n,e,t);if(typeof t.endpointProvider!="function")throw new Error("config.endpointProvider is not set.");return t.endpointProvider(r,i)},BM=async(n,e,t)=>{var s;const i={},r=((s=e==null?void 0:e.getEndpointParameterInstructions)==null?void 0:s.call(e))||{};for(const[o,a]of Object.entries(r))switch(a.type){case"staticContextParams":i[o]=a.value;break;case"contextParams":i[o]=n[a.name];break;case"clientContextParams":case"builtInParams":i[o]=await UM(a.name,o,t)();break;case"operationContextParams":i[o]=a.get(n);break;default:throw new Error("Unrecognized endpoint parameter instruction: "+JSON.stringify(a))}return Object.keys(r).length===0&&Object.assign(i,t),String(t.serviceId).toLowerCase()==="s3"&&await CM(i),i},kM=({config:n,instructions:e})=>(t,i)=>async r=>{var a,c,l;n.endpoint&&OE(i,"ENDPOINT_OVERRIDE","N");const s=await FM(r.input,{getEndpointParameterInstructions(){return e}},{...n},i);i.endpointV2=s,i.authSchemes=(a=s.properties)==null?void 0:a.authSchemes;const o=(c=i.authSchemes)==null?void 0:c[0];if(o){i.signing_region=o.signingRegion,i.signing_service=o.signingName;const u=yo(i),d=(l=u==null?void 0:u.selectedHttpAuthScheme)==null?void 0:l.httpAuthOption;d&&(d.signingProperties=Object.assign(d.signingProperties||{},{signing_region:o.signingRegion,signingRegion:o.signingRegion,signing_service:o.signingName,signingName:o.signingName,signingRegionSet:o.signingRegionSet},o.properties))}return t({...r})},zM={step:"serialize",tags:["ENDPOINT_PARAMETERS","ENDPOINT_V2","ENDPOINT"],name:"endpointV2Middleware",override:!0,relation:"before",toMiddleware:Hc.name},HM=(n,e)=>({applyToStack:t=>{t.addRelativeTo(kM({config:n,instructions:e}),zM)}}),VM=n=>{const e=n.tls??!0,{endpoint:t}=n,i=t!=null?async()=>Pf(await Hn(t)()):void 0,s={...n,endpoint:i,tls:e,isCustomEndpoint:!!t,useDualstackEndpoint:Hn(n.useDualstackEndpoint??!1),useFipsEndpoint:Hn(n.useFipsEndpoint??!1)};let o;return s.serviceConfiguredEndpoint=async()=>(n.serviceId&&!o&&(o=Cf(n.serviceId)),o),s};var Sr;(function(n){n.STANDARD="standard",n.ADAPTIVE="adaptive"})(Sr||(Sr={}));const co=3,GM=Sr.STANDARD,WM=["BandwidthLimitExceeded","EC2ThrottledException","LimitExceededException","PriorRequestNotComplete","ProvisionedThroughputExceededException","RequestLimitExceeded","RequestThrottled","RequestThrottledException","SlowDown","ThrottledException","Throttling","ThrottlingException","TooManyRequestsException","TransactionInProgressException"],XM=["TimeoutError","RequestTimeout","RequestTimeoutException"],$M=[500,502,503,504],qM=["ECONNRESET","ECONNREFUSED","EPIPE","ETIMEDOUT"],jM=n=>{var e;return(e=n.$metadata)==null?void 0:e.clockSkewCorrected},If=n=>{var e,t;return((e=n.$metadata)==null?void 0:e.httpStatusCode)===429||WM.includes(n.name)||((t=n.$retryable)==null?void 0:t.throttling)==!0},Yc=(n,e=0)=>{var t;return jM(n)||XM.includes(n.name)||qM.includes((n==null?void 0:n.code)||"")||$M.includes(((t=n.$metadata)==null?void 0:t.httpStatusCode)||0)||n.cause!==void 0&&e<=10&&Yc(n.cause,e+1)},YM=n=>{var e;if(((e=n.$metadata)==null?void 0:e.httpStatusCode)!==void 0){const t=n.$metadata.httpStatusCode;return 500<=t&&t<=599&&!Yc(n)}return!1};class vo{constructor(e){this.currentCapacity=0,this.enabled=!1,this.lastMaxRate=0,this.measuredTxRate=0,this.requestCount=0,this.lastTimestamp=0,this.timeWindow=0,this.beta=(e==null?void 0:e.beta)??.7,this.minCapacity=(e==null?void 0:e.minCapacity)??1,this.minFillRate=(e==null?void 0:e.minFillRate)??.5,this.scaleConstant=(e==null?void 0:e.scaleConstant)??.4,this.smooth=(e==null?void 0:e.smooth)??.8;const t=this.getCurrentTimeInSeconds();this.lastThrottleTime=t,this.lastTxRateBucket=Math.floor(this.getCurrentTimeInSeconds()),this.fillRate=this.minFillRate,this.maxCapacity=this.minCapacity}getCurrentTimeInSeconds(){return Date.now()/1e3}async getSendToken(){return this.acquireTokenBucket(1)}async acquireTokenBucket(e){if(this.enabled){if(this.refillTokenBucket(),e>this.currentCapacity){const t=(e-this.currentCapacity)/this.fillRate*1e3;await new Promise(i=>vo.setTimeoutFn(i,t))}this.currentCapacity=this.currentCapacity-e}}refillTokenBucket(){const e=this.getCurrentTimeInSeconds();if(!this.lastTimestamp){this.lastTimestamp=e;return}const t=(e-this.lastTimestamp)*this.fillRate;this.currentCapacity=Math.min(this.maxCapacity,this.currentCapacity+t),this.lastTimestamp=e}updateClientSendingRate(e){let t;if(this.updateMeasuredRate(),If(e)){const r=this.enabled?Math.min(this.measuredTxRate,this.fillRate):this.measuredTxRate;this.lastMaxRate=r,this.calculateTimeWindow(),this.lastThrottleTime=this.getCurrentTimeInSeconds(),t=this.cubicThrottle(r),this.enableTokenBucket()}else this.calculateTimeWindow(),t=this.cubicSuccess(this.getCurrentTimeInSeconds());const i=Math.min(t,2*this.measuredTxRate);this.updateTokenBucketRate(i)}calculateTimeWindow(){this.timeWindow=this.getPrecise(Math.pow(this.lastMaxRate*(1-this.beta)/this.scaleConstant,1/3))}cubicThrottle(e){return this.getPrecise(e*this.beta)}cubicSuccess(e){return this.getPrecise(this.scaleConstant*Math.pow(e-this.lastThrottleTime-this.timeWindow,3)+this.lastMaxRate)}enableTokenBucket(){this.enabled=!0}updateTokenBucketRate(e){this.refillTokenBucket(),this.fillRate=Math.max(e,this.minFillRate),this.maxCapacity=Math.max(e,this.minCapacity),this.currentCapacity=Math.min(this.currentCapacity,this.maxCapacity)}updateMeasuredRate(){const e=this.getCurrentTimeInSeconds(),t=Math.floor(e*2)/2;if(this.requestCount++,t>this.lastTxRateBucket){const i=this.requestCount/(t-this.lastTxRateBucket);this.measuredTxRate=this.getPrecise(i*this.smooth+this.measuredTxRate*(1-this.smooth)),this.requestCount=0,this.lastTxRateBucket=t}}getPrecise(e){return parseFloat(e.toFixed(8))}}vo.setTimeoutFn=setTimeout;const yc=100,Lf=20*1e3,KM=500,Xd=500,ZM=5,JM=10,QM=1,eb="amz-sdk-invocation-id",tb="amz-sdk-request",nb=()=>{let n=yc;return{computeNextBackoffDelay:i=>Math.floor(Math.min(Lf,Math.random()*2**i*n)),setDelayBase:i=>{n=i}}},$d=({retryDelay:n,retryCount:e,retryCost:t})=>({getRetryCount:()=>e,getRetryDelay:()=>Math.min(Lf,n),getRetryCost:()=>t});class Df{constructor(e){this.maxAttempts=e,this.mode=Sr.STANDARD,this.capacity=Xd,this.retryBackoffStrategy=nb(),this.maxAttemptsProvider=typeof e=="function"?e:async()=>e}async acquireInitialRetryToken(e){return $d({retryDelay:yc,retryCount:0})}async refreshRetryTokenForRetry(e,t){const i=await this.getMaxAttempts();if(this.shouldRetry(e,t,i)){const r=t.errorType;this.retryBackoffStrategy.setDelayBase(r==="THROTTLING"?KM:yc);const s=this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),o=t.retryAfterHint?Math.max(t.retryAfterHint.getTime()-Date.now()||0,s):s,a=this.getCapacityCost(r);return this.capacity-=a,$d({retryDelay:o,retryCount:e.getRetryCount()+1,retryCost:a})}throw new Error("No retry token available")}recordSuccess(e){this.capacity=Math.max(Xd,this.capacity+(e.getRetryCost()??QM))}getCapacity(){return this.capacity}async getMaxAttempts(){try{return await this.maxAttemptsProvider()}catch{return console.warn(`Max attempts provider could not resolve. Using default of ${co}`),co}}shouldRetry(e,t,i){return e.getRetryCount()+1<i&&this.capacity>=this.getCapacityCost(t.errorType)&&this.isRetryableError(t.errorType)}getCapacityCost(e){return e==="TRANSIENT"?JM:ZM}isRetryableError(e){return e==="THROTTLING"||e==="TRANSIENT"}}class ib{constructor(e,t){this.maxAttemptsProvider=e,this.mode=Sr.ADAPTIVE;const{rateLimiter:i}=t??{};this.rateLimiter=i??new vo,this.standardRetryStrategy=new Df(e)}async acquireInitialRetryToken(e){return await this.rateLimiter.getSendToken(),this.standardRetryStrategy.acquireInitialRetryToken(e)}async refreshRetryTokenForRetry(e,t){return this.rateLimiter.updateClientSendingRate(t),this.standardRetryStrategy.refreshRetryTokenForRetry(e,t)}recordSuccess(e){this.rateLimiter.updateClientSendingRate({}),this.standardRetryStrategy.recordSuccess(e)}}let zs;const rb=new Uint8Array(16);function sb(){if(!zs&&(zs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!zs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return zs(rb)}const At=[];for(let n=0;n<256;++n)At.push((n+256).toString(16).slice(1));function ob(n,e=0){return At[n[e+0]]+At[n[e+1]]+At[n[e+2]]+At[n[e+3]]+"-"+At[n[e+4]]+At[n[e+5]]+"-"+At[n[e+6]]+At[n[e+7]]+"-"+At[n[e+8]]+At[n[e+9]]+"-"+At[n[e+10]]+At[n[e+11]]+At[n[e+12]]+At[n[e+13]]+At[n[e+14]]+At[n[e+15]]}const ab=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),qd={randomUUID:ab};function cb(n,e,t){if(qd.randomUUID&&!n)return qd.randomUUID();n=n||{};const i=n.random||(n.rng||sb)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,ob(i)}const lb=n=>n instanceof Error?n:n instanceof Object?Object.assign(new Error,n):typeof n=="string"?new Error(n):new Error(`AWS SDK error wrapper for ${n}`),ub=n=>{const{retryStrategy:e}=n,t=Hn(n.maxAttempts??co);return{...n,maxAttempts:t,retryStrategy:async()=>e||(await Hn(n.retryMode)()===Sr.ADAPTIVE?new ib(t):new Df(t))}},db=n=>(n==null?void 0:n.body)instanceof ReadableStream,hb=n=>(e,t)=>async i=>{var o;let r=await n.retryStrategy();const s=await n.maxAttempts();if(fb(r)){r=r;let a=await r.acquireInitialRetryToken(t.partition_id),c=new Error,l=0,u=0;const{request:d}=i,h=Jt.isInstance(d);for(h&&(d.headers[eb]=cb());;)try{h&&(d.headers[tb]=`attempt=${l+1}; max=${s}`);const{response:f,output:g}=await e(i);return r.recordSuccess(a),g.$metadata.attempts=l+1,g.$metadata.totalRetryDelay=u,{response:f,output:g}}catch(f){const g=pb(f);if(c=lb(f),h&&db(d))throw(o=t.logger instanceof Tf?console:t.logger)==null||o.warn("An error was encountered in a non-retryable streaming request."),c;try{a=await r.refreshRetryTokenForRetry(a,g)}catch{throw c.$metadata||(c.$metadata={}),c.$metadata.attempts=l+1,c.$metadata.totalRetryDelay=u,c}l=a.getRetryCount();const _=a.getRetryDelay();u+=_,await new Promise(m=>setTimeout(m,_))}}else return r=r,r!=null&&r.mode&&(t.userAgent=[...t.userAgent||[],["cfg/retry-mode",r.mode]]),r.retry(e,i)},fb=n=>typeof n.acquireInitialRetryToken<"u"&&typeof n.refreshRetryTokenForRetry<"u"&&typeof n.recordSuccess<"u",pb=n=>{const e={error:n,errorType:mb(n)},t=yb(n.$response);return t&&(e.retryAfterHint=t),e},mb=n=>If(n)?"THROTTLING":Yc(n)?"TRANSIENT":YM(n)?"SERVER_ERROR":"CLIENT_ERROR",gb={name:"retryMiddleware",tags:["RETRY"],step:"finalizeRequest",priority:"high",override:!0},_b=n=>({applyToStack:e=>{e.add(hb(n),gb)}}),yb=n=>{if(!ro.isInstance(n))return;const e=Object.keys(n.headers).find(s=>s.toLowerCase()==="retry-after");if(!e)return;const t=n.headers[e],i=Number(t);return Number.isNaN(i)?new Date(t):new Date(i*1e3)},xb=async(n,e,t)=>({operation:yo(e).operation,region:await Hn(n.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});function vb(n){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"dynamodb",region:n.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}const Eb=n=>{const e=[];switch(n.operation){default:e.push(vb(n))}return e},Sb=n=>({...qS(n)}),Mb=n=>({...n,useDualstackEndpoint:n.useDualstackEndpoint??!1,useFipsEndpoint:n.useFipsEndpoint??!1,defaultSigningName:"dynamodb"}),bb={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},AccountId:{type:"builtInParams",name:"accountId"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"},AccountIdEndpointMode:{type:"builtInParams",name:"accountIdEndpointMode"}};class Xe extends Kr{constructor(e){super(e),Object.setPrototypeOf(this,Xe.prototype)}}class Kc extends Xe{constructor(t){super({name:"BackupInUseException",$fault:"client",...t});oe(this,"name","BackupInUseException");oe(this,"$fault","client");Object.setPrototypeOf(this,Kc.prototype)}}class Zc extends Xe{constructor(t){super({name:"BackupNotFoundException",$fault:"client",...t});oe(this,"name","BackupNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,Zc.prototype)}}class Jc extends Xe{constructor(t){super({name:"InternalServerError",$fault:"server",...t});oe(this,"name","InternalServerError");oe(this,"$fault","server");Object.setPrototypeOf(this,Jc.prototype)}}class Qc extends Xe{constructor(t){super({name:"RequestLimitExceeded",$fault:"client",...t});oe(this,"name","RequestLimitExceeded");oe(this,"$fault","client");Object.setPrototypeOf(this,Qc.prototype)}}class el extends Xe{constructor(t){super({name:"InvalidEndpointException",$fault:"client",...t});oe(this,"name","InvalidEndpointException");oe(this,"$fault","client");oe(this,"Message");Object.setPrototypeOf(this,el.prototype),this.Message=t.Message}}class tl extends Xe{constructor(t){super({name:"ProvisionedThroughputExceededException",$fault:"client",...t});oe(this,"name","ProvisionedThroughputExceededException");oe(this,"$fault","client");Object.setPrototypeOf(this,tl.prototype)}}class nl extends Xe{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t});oe(this,"name","ResourceNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,nl.prototype)}}class il extends Xe{constructor(t){super({name:"ItemCollectionSizeLimitExceededException",$fault:"client",...t});oe(this,"name","ItemCollectionSizeLimitExceededException");oe(this,"$fault","client");Object.setPrototypeOf(this,il.prototype)}}class rl extends Xe{constructor(t){super({name:"ContinuousBackupsUnavailableException",$fault:"client",...t});oe(this,"name","ContinuousBackupsUnavailableException");oe(this,"$fault","client");Object.setPrototypeOf(this,rl.prototype)}}class sl extends Xe{constructor(t){super({name:"LimitExceededException",$fault:"client",...t});oe(this,"name","LimitExceededException");oe(this,"$fault","client");Object.setPrototypeOf(this,sl.prototype)}}class ol extends Xe{constructor(t){super({name:"TableInUseException",$fault:"client",...t});oe(this,"name","TableInUseException");oe(this,"$fault","client");Object.setPrototypeOf(this,ol.prototype)}}class al extends Xe{constructor(t){super({name:"TableNotFoundException",$fault:"client",...t});oe(this,"name","TableNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,al.prototype)}}class cl extends Xe{constructor(t){super({name:"GlobalTableAlreadyExistsException",$fault:"client",...t});oe(this,"name","GlobalTableAlreadyExistsException");oe(this,"$fault","client");Object.setPrototypeOf(this,cl.prototype)}}class ll extends Xe{constructor(t){super({name:"ResourceInUseException",$fault:"client",...t});oe(this,"name","ResourceInUseException");oe(this,"$fault","client");Object.setPrototypeOf(this,ll.prototype)}}class ul extends Xe{constructor(t){super({name:"ReplicatedWriteConflictException",$fault:"client",...t});oe(this,"name","ReplicatedWriteConflictException");oe(this,"$fault","client");Object.setPrototypeOf(this,ul.prototype)}}class dl extends Xe{constructor(t){super({name:"TransactionConflictException",$fault:"client",...t});oe(this,"name","TransactionConflictException");oe(this,"$fault","client");Object.setPrototypeOf(this,dl.prototype)}}class hl extends Xe{constructor(t){super({name:"PolicyNotFoundException",$fault:"client",...t});oe(this,"name","PolicyNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,hl.prototype)}}class fl extends Xe{constructor(t){super({name:"ExportNotFoundException",$fault:"client",...t});oe(this,"name","ExportNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,fl.prototype)}}class pl extends Xe{constructor(t){super({name:"GlobalTableNotFoundException",$fault:"client",...t});oe(this,"name","GlobalTableNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,pl.prototype)}}class ml extends Xe{constructor(t){super({name:"ImportNotFoundException",$fault:"client",...t});oe(this,"name","ImportNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,ml.prototype)}}class gl extends Xe{constructor(t){super({name:"DuplicateItemException",$fault:"client",...t});oe(this,"name","DuplicateItemException");oe(this,"$fault","client");Object.setPrototypeOf(this,gl.prototype)}}class _l extends Xe{constructor(t){super({name:"IdempotentParameterMismatchException",$fault:"client",...t});oe(this,"name","IdempotentParameterMismatchException");oe(this,"$fault","client");oe(this,"Message");Object.setPrototypeOf(this,_l.prototype),this.Message=t.Message}}class yl extends Xe{constructor(t){super({name:"TransactionInProgressException",$fault:"client",...t});oe(this,"name","TransactionInProgressException");oe(this,"$fault","client");oe(this,"Message");Object.setPrototypeOf(this,yl.prototype),this.Message=t.Message}}class xl extends Xe{constructor(t){super({name:"ExportConflictException",$fault:"client",...t});oe(this,"name","ExportConflictException");oe(this,"$fault","client");Object.setPrototypeOf(this,xl.prototype)}}class vl extends Xe{constructor(t){super({name:"InvalidExportTimeException",$fault:"client",...t});oe(this,"name","InvalidExportTimeException");oe(this,"$fault","client");Object.setPrototypeOf(this,vl.prototype)}}class El extends Xe{constructor(t){super({name:"PointInTimeRecoveryUnavailableException",$fault:"client",...t});oe(this,"name","PointInTimeRecoveryUnavailableException");oe(this,"$fault","client");Object.setPrototypeOf(this,El.prototype)}}class Sl extends Xe{constructor(t){super({name:"ImportConflictException",$fault:"client",...t});oe(this,"name","ImportConflictException");oe(this,"$fault","client");Object.setPrototypeOf(this,Sl.prototype)}}class Ml extends Xe{constructor(t){super({name:"TableAlreadyExistsException",$fault:"client",...t});oe(this,"name","TableAlreadyExistsException");oe(this,"$fault","client");Object.setPrototypeOf(this,Ml.prototype)}}class bl extends Xe{constructor(t){super({name:"InvalidRestoreTimeException",$fault:"client",...t});oe(this,"name","InvalidRestoreTimeException");oe(this,"$fault","client");Object.setPrototypeOf(this,bl.prototype)}}class wl extends Xe{constructor(t){super({name:"ReplicaAlreadyExistsException",$fault:"client",...t});oe(this,"name","ReplicaAlreadyExistsException");oe(this,"$fault","client");Object.setPrototypeOf(this,wl.prototype)}}class Tl extends Xe{constructor(t){super({name:"ReplicaNotFoundException",$fault:"client",...t});oe(this,"name","ReplicaNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,Tl.prototype)}}class Al extends Xe{constructor(t){super({name:"IndexNotFoundException",$fault:"client",...t});oe(this,"name","IndexNotFoundException");oe(this,"$fault","client");Object.setPrototypeOf(this,Al.prototype)}}var jd;(function(n){n.visit=(e,t)=>e.S!==void 0?t.S(e.S):e.N!==void 0?t.N(e.N):e.B!==void 0?t.B(e.B):e.SS!==void 0?t.SS(e.SS):e.NS!==void 0?t.NS(e.NS):e.BS!==void 0?t.BS(e.BS):e.M!==void 0?t.M(e.M):e.L!==void 0?t.L(e.L):e.NULL!==void 0?t.NULL(e.NULL):e.BOOL!==void 0?t.BOOL(e.BOOL):t._(e.$unknown[0],e.$unknown[1])})(jd||(jd={}));class Rl extends Xe{constructor(t){super({name:"ConditionalCheckFailedException",$fault:"client",...t});oe(this,"name","ConditionalCheckFailedException");oe(this,"$fault","client");oe(this,"Item");Object.setPrototypeOf(this,Rl.prototype),this.Item=t.Item}}class Cl extends Xe{constructor(t){super({name:"TransactionCanceledException",$fault:"client",...t});oe(this,"name","TransactionCanceledException");oe(this,"$fault","client");oe(this,"Message");oe(this,"CancellationReasons");Object.setPrototypeOf(this,Cl.prototype),this.Message=t.Message,this.CancellationReasons=t.CancellationReasons}}const wb=async(n,e)=>{const t=_w("DescribeEndpoints");let i;return i=JSON.stringify(ze(n)),gw(e,t,"/",void 0,i)},Tb=async(n,e)=>{if(n.statusCode>=300)return Ab(n,e);const t=await Af(n.body,e);let i={};return i=ze(t),{$metadata:Ye(n),...i}},Ab=async(n,e)=>{const t={...n,body:await hM(n.body,e)},i=fM(n,t.body);switch(i){case"InternalServerError":case"com.amazonaws.dynamodb#InternalServerError":throw await Hb(t);case"RequestLimitExceeded":case"com.amazonaws.dynamodb#RequestLimitExceeded":throw await Qb(t);case"InvalidEndpointException":case"com.amazonaws.dynamodb#InvalidEndpointException":throw await Vb(t);case"ProvisionedThroughputExceededException":case"com.amazonaws.dynamodb#ProvisionedThroughputExceededException":throw await Yb(t);case"ResourceNotFoundException":case"com.amazonaws.dynamodb#ResourceNotFoundException":throw await tw(t);case"ItemCollectionSizeLimitExceededException":case"com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":throw await Xb(t);case"BackupInUseException":case"com.amazonaws.dynamodb#BackupInUseException":throw await Rb(t);case"ContinuousBackupsUnavailableException":case"com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":throw await Ib(t);case"LimitExceededException":case"com.amazonaws.dynamodb#LimitExceededException":throw await $b(t);case"TableInUseException":case"com.amazonaws.dynamodb#TableInUseException":throw await iw(t);case"TableNotFoundException":case"com.amazonaws.dynamodb#TableNotFoundException":throw await rw(t);case"GlobalTableAlreadyExistsException":case"com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":throw await Ub(t);case"ResourceInUseException":case"com.amazonaws.dynamodb#ResourceInUseException":throw await ew(t);case"BackupNotFoundException":case"com.amazonaws.dynamodb#BackupNotFoundException":throw await Cb(t);case"ConditionalCheckFailedException":case"com.amazonaws.dynamodb#ConditionalCheckFailedException":throw await Pb(t,e);case"ReplicatedWriteConflictException":case"com.amazonaws.dynamodb#ReplicatedWriteConflictException":throw await Jb(t);case"TransactionConflictException":case"com.amazonaws.dynamodb#TransactionConflictException":throw await ow(t);case"PolicyNotFoundException":case"com.amazonaws.dynamodb#PolicyNotFoundException":throw await jb(t);case"ExportNotFoundException":case"com.amazonaws.dynamodb#ExportNotFoundException":throw await Nb(t);case"GlobalTableNotFoundException":case"com.amazonaws.dynamodb#GlobalTableNotFoundException":throw await Ob(t);case"ImportNotFoundException":case"com.amazonaws.dynamodb#ImportNotFoundException":throw await kb(t);case"DuplicateItemException":case"com.amazonaws.dynamodb#DuplicateItemException":throw await Lb(t);case"IdempotentParameterMismatchException":case"com.amazonaws.dynamodb#IdempotentParameterMismatchException":throw await Fb(t);case"TransactionCanceledException":case"com.amazonaws.dynamodb#TransactionCanceledException":throw await sw(t,e);case"TransactionInProgressException":case"com.amazonaws.dynamodb#TransactionInProgressException":throw await aw(t);case"ExportConflictException":case"com.amazonaws.dynamodb#ExportConflictException":throw await Db(t);case"InvalidExportTimeException":case"com.amazonaws.dynamodb#InvalidExportTimeException":throw await Gb(t);case"PointInTimeRecoveryUnavailableException":case"com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":throw await qb(t);case"ImportConflictException":case"com.amazonaws.dynamodb#ImportConflictException":throw await Bb(t);case"TableAlreadyExistsException":case"com.amazonaws.dynamodb#TableAlreadyExistsException":throw await nw(t);case"InvalidRestoreTimeException":case"com.amazonaws.dynamodb#InvalidRestoreTimeException":throw await Wb(t);case"ReplicaAlreadyExistsException":case"com.amazonaws.dynamodb#ReplicaAlreadyExistsException":throw await Kb(t);case"ReplicaNotFoundException":case"com.amazonaws.dynamodb#ReplicaNotFoundException":throw await Zb(t);case"IndexNotFoundException":case"com.amazonaws.dynamodb#IndexNotFoundException":throw await zb(t);default:const r=t.body;return mw({output:n,parsedBody:r,errorCode:i})}},Rb=async(n,e)=>{const t=n.body,i=ze(t),r=new Kc({$metadata:Ye(n),...i});return je(r,t)},Cb=async(n,e)=>{const t=n.body,i=ze(t),r=new Zc({$metadata:Ye(n),...i});return je(r,t)},Pb=async(n,e)=>{const t=n.body,i=dw(t,e),r=new Rl({$metadata:Ye(n),...i});return je(r,t)},Ib=async(n,e)=>{const t=n.body,i=ze(t),r=new rl({$metadata:Ye(n),...i});return je(r,t)},Lb=async(n,e)=>{const t=n.body,i=ze(t),r=new gl({$metadata:Ye(n),...i});return je(r,t)},Db=async(n,e)=>{const t=n.body,i=ze(t),r=new xl({$metadata:Ye(n),...i});return je(r,t)},Nb=async(n,e)=>{const t=n.body,i=ze(t),r=new fl({$metadata:Ye(n),...i});return je(r,t)},Ub=async(n,e)=>{const t=n.body,i=ze(t),r=new cl({$metadata:Ye(n),...i});return je(r,t)},Ob=async(n,e)=>{const t=n.body,i=ze(t),r=new pl({$metadata:Ye(n),...i});return je(r,t)},Fb=async(n,e)=>{const t=n.body,i=ze(t),r=new _l({$metadata:Ye(n),...i});return je(r,t)},Bb=async(n,e)=>{const t=n.body,i=ze(t),r=new Sl({$metadata:Ye(n),...i});return je(r,t)},kb=async(n,e)=>{const t=n.body,i=ze(t),r=new ml({$metadata:Ye(n),...i});return je(r,t)},zb=async(n,e)=>{const t=n.body,i=ze(t),r=new Al({$metadata:Ye(n),...i});return je(r,t)},Hb=async(n,e)=>{const t=n.body,i=ze(t),r=new Jc({$metadata:Ye(n),...i});return je(r,t)},Vb=async(n,e)=>{const t=n.body,i=ze(t),r=new el({$metadata:Ye(n),...i});return je(r,t)},Gb=async(n,e)=>{const t=n.body,i=ze(t),r=new vl({$metadata:Ye(n),...i});return je(r,t)},Wb=async(n,e)=>{const t=n.body,i=ze(t),r=new bl({$metadata:Ye(n),...i});return je(r,t)},Xb=async(n,e)=>{const t=n.body,i=ze(t),r=new il({$metadata:Ye(n),...i});return je(r,t)},$b=async(n,e)=>{const t=n.body,i=ze(t),r=new sl({$metadata:Ye(n),...i});return je(r,t)},qb=async(n,e)=>{const t=n.body,i=ze(t),r=new El({$metadata:Ye(n),...i});return je(r,t)},jb=async(n,e)=>{const t=n.body,i=ze(t),r=new hl({$metadata:Ye(n),...i});return je(r,t)},Yb=async(n,e)=>{const t=n.body,i=ze(t),r=new tl({$metadata:Ye(n),...i});return je(r,t)},Kb=async(n,e)=>{const t=n.body,i=ze(t),r=new wl({$metadata:Ye(n),...i});return je(r,t)},Zb=async(n,e)=>{const t=n.body,i=ze(t),r=new Tl({$metadata:Ye(n),...i});return je(r,t)},Jb=async(n,e)=>{const t=n.body,i=ze(t),r=new ul({$metadata:Ye(n),...i});return je(r,t)},Qb=async(n,e)=>{const t=n.body,i=ze(t),r=new Qc({$metadata:Ye(n),...i});return je(r,t)},ew=async(n,e)=>{const t=n.body,i=ze(t),r=new ll({$metadata:Ye(n),...i});return je(r,t)},tw=async(n,e)=>{const t=n.body,i=ze(t),r=new nl({$metadata:Ye(n),...i});return je(r,t)},nw=async(n,e)=>{const t=n.body,i=ze(t),r=new Ml({$metadata:Ye(n),...i});return je(r,t)},iw=async(n,e)=>{const t=n.body,i=ze(t),r=new ol({$metadata:Ye(n),...i});return je(r,t)},rw=async(n,e)=>{const t=n.body,i=ze(t),r=new al({$metadata:Ye(n),...i});return je(r,t)},sw=async(n,e)=>{const t=n.body,i=pw(t,e),r=new Cl({$metadata:Ye(n),...i});return je(r,t)},ow=async(n,e)=>{const t=n.body,i=ze(t),r=new dl({$metadata:Ye(n),...i});return je(r,t)},aw=async(n,e)=>{const t=n.body,i=ze(t),r=new yl({$metadata:Ye(n),...i});return je(r,t)},Nf=(n,e)=>Object.entries(n).reduce((t,[i,r])=>(r===null||(t[i]=Pl(jc(r),e)),t),{}),Pl=(n,e)=>n.B!=null?{B:e.base64Decoder(n.B)}:Bs(n.BOOL)!==void 0?{BOOL:Bs(n.BOOL)}:n.BS!=null?{BS:cw(n.BS,e)}:n.L!=null?{L:hw(n.L,e)}:n.M!=null?{M:fw(n.M,e)}:ii(n.N)!==void 0?{N:ii(n.N)}:n.NS!=null?{NS:ze(n.NS)}:Bs(n.NULL)!==void 0?{NULL:Bs(n.NULL)}:ii(n.S)!==void 0?{S:ii(n.S)}:n.SS!=null?{SS:ze(n.SS)}:{$unknown:Object.entries(n)[0]},cw=(n,e)=>(n||[]).filter(i=>i!=null).map(i=>e.base64Decoder(i)),lw=(n,e)=>qc(n,{Code:ii,Item:t=>Nf(t,e),Message:ii}),uw=(n,e)=>(n||[]).filter(i=>i!=null).map(i=>lw(i,e)),dw=(n,e)=>qc(n,{Item:t=>Nf(t,e),message:ii}),hw=(n,e)=>(n||[]).filter(i=>i!=null).map(i=>Pl(jc(i),e)),fw=(n,e)=>Object.entries(n).reduce((t,[i,r])=>(r===null||(t[i]=Pl(jc(r),e)),t),{}),pw=(n,e)=>qc(n,{CancellationReasons:t=>uw(t,e),Message:ii}),Ye=n=>({httpStatusCode:n.statusCode,requestId:n.headers["x-amzn-requestid"]??n.headers["x-amzn-request-id"]??n.headers["x-amz-request-id"],extendedRequestId:n.headers["x-amz-id-2"],cfId:n.headers["x-amz-cf-id"]}),mw=QS(Xe),gw=async(n,e,t,i,r)=>{const{hostname:s,protocol:o="https",port:a,path:c}=await n.endpoint(),l={protocol:o,hostname:s,port:a,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+t:c+t,headers:e};return r!==void 0&&(l.body=r),new Jt(l)};function _w(n){return{"content-type":"application/x-amz-json-1.0","x-amz-target":`DynamoDB_20120810.${n}`}}class yw extends wf.classBuilder().ep(bb).m(function(e,t,i,r){return[yE(i,this.serialize,this.deserialize),HM(i,e.getEndpointParameterInstructions())]}).s("DynamoDB_20120810","DescribeEndpoints",{}).n("DynamoDBClient","DescribeEndpointsCommand").f(void 0,void 0).ser(wb).de(Tb).build(){}const xw="@aws-sdk/client-dynamodb",vw="AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",Ew="3.726.1",Sw={build:"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-dynamodb","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4",clean:"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo dynamodb"},Mw="./dist-cjs/index.js",bw="./dist-types/index.d.ts",ww="./dist-es/index.js",Tw=!1,Aw={"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/client-sso-oidc":"3.726.0","@aws-sdk/client-sts":"3.726.1","@aws-sdk/core":"3.723.0","@aws-sdk/credential-provider-node":"3.726.0","@aws-sdk/middleware-endpoint-discovery":"3.723.0","@aws-sdk/middleware-host-header":"3.723.0","@aws-sdk/middleware-logger":"3.723.0","@aws-sdk/middleware-recursion-detection":"3.723.0","@aws-sdk/middleware-user-agent":"3.726.0","@aws-sdk/region-config-resolver":"3.723.0","@aws-sdk/types":"3.723.0","@aws-sdk/util-endpoints":"3.726.0","@aws-sdk/util-user-agent-browser":"3.723.0","@aws-sdk/util-user-agent-node":"3.726.0","@smithy/config-resolver":"^4.0.0","@smithy/core":"^3.0.0","@smithy/fetch-http-handler":"^5.0.0","@smithy/hash-node":"^4.0.0","@smithy/invalid-dependency":"^4.0.0","@smithy/middleware-content-length":"^4.0.0","@smithy/middleware-endpoint":"^4.0.0","@smithy/middleware-retry":"^4.0.0","@smithy/middleware-serde":"^4.0.0","@smithy/middleware-stack":"^4.0.0","@smithy/node-config-provider":"^4.0.0","@smithy/node-http-handler":"^4.0.0","@smithy/protocol-http":"^5.0.0","@smithy/smithy-client":"^4.0.0","@smithy/types":"^4.0.0","@smithy/url-parser":"^4.0.0","@smithy/util-base64":"^4.0.0","@smithy/util-body-length-browser":"^4.0.0","@smithy/util-body-length-node":"^4.0.0","@smithy/util-defaults-mode-browser":"^4.0.0","@smithy/util-defaults-mode-node":"^4.0.0","@smithy/util-endpoints":"^3.0.0","@smithy/util-middleware":"^4.0.0","@smithy/util-retry":"^4.0.0","@smithy/util-utf8":"^4.0.0","@smithy/util-waiter":"^4.0.0","@types/uuid":"^9.0.1",tslib:"^2.6.2",uuid:"^9.0.1"},Rw={"@tsconfig/node18":"18.2.4","@types/node":"^18.19.69",concurrently:"7.0.0","downlevel-dts":"0.10.1",rimraf:"3.0.2",typescript:"~5.2.2"},Cw={node:">=18.0.0"},Pw={"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},Iw=["dist-*/**"],Lw={name:"AWS SDK for JavaScript Team",url:"https://aws.amazon.com/javascript/"},Dw="Apache-2.0",Nw={"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},Uw="https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb",Ow={type:"git",url:"https://github.com/aws/aws-sdk-js-v3.git",directory:"clients/client-dynamodb"},Fw={name:xw,description:vw,version:Ew,scripts:Sw,main:Mw,types:bw,module:ww,sideEffects:Tw,dependencies:Aw,devDependencies:Rw,engines:Cw,typesVersions:Pw,files:Iw,author:Lw,license:Dw,browser:Nw,"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},homepage:Uw,repository:Ow},Bw=n=>new TextEncoder().encode(n);var kw=typeof Buffer<"u"&&Buffer.from?function(n){return Buffer.from(n,"utf8")}:Bw;function is(n){return n instanceof Uint8Array?n:typeof n=="string"?kw(n):ArrayBuffer.isView(n)?new Uint8Array(n.buffer,n.byteOffset,n.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(n)}function xc(n){return typeof n=="string"?n.length===0:n.byteLength===0}var Uf={name:"SHA-256"},Yd={name:"HMAC",hash:Uf},zw=new Uint8Array([227,176,196,66,152,252,28,20,154,251,244,200,153,111,185,36,39,174,65,228,100,155,147,76,164,149,153,27,120,82,184,85]);const Hw={};function Ks(){return typeof window<"u"?window:typeof self<"u"?self:Hw}var Vw=function(){function n(e){this.toHash=new Uint8Array(0),this.secret=e,this.reset()}return n.prototype.update=function(e){if(!xc(e)){var t=is(e),i=new Uint8Array(this.toHash.byteLength+t.byteLength);i.set(this.toHash,0),i.set(t,this.toHash.byteLength),this.toHash=i}},n.prototype.digest=function(){var e=this;return this.key?this.key.then(function(t){return Ks().crypto.subtle.sign(Yd,t,e.toHash).then(function(i){return new Uint8Array(i)})}):xc(this.toHash)?Promise.resolve(zw):Promise.resolve().then(function(){return Ks().crypto.subtle.digest(Uf,e.toHash)}).then(function(t){return Promise.resolve(new Uint8Array(t))})},n.prototype.reset=function(){var e=this;this.toHash=new Uint8Array(0),this.secret&&this.secret!==void 0&&(this.key=new Promise(function(t,i){Ks().crypto.subtle.importKey("raw",is(e.secret),Yd,!1,["sign"]).then(t,i)}),this.key.catch(function(){}))},n}();function Gw(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Ww(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(u){l=[6,u],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var on=64,Xw=32,$w=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),qw=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],jw=Math.pow(2,53)-1,Zs=function(){function n(){this.state=Int32Array.from(qw),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}return n.prototype.update=function(e){if(this.finished)throw new Error("Attempted to update an already finished hash.");var t=0,i=e.byteLength;if(this.bytesHashed+=i,this.bytesHashed*8>jw)throw new Error("Cannot hash more than 2^53 - 1 bits");for(;i>0;)this.buffer[this.bufferLength++]=e[t++],i--,this.bufferLength===on&&(this.hashBuffer(),this.bufferLength=0)},n.prototype.digest=function(){if(!this.finished){var e=this.bytesHashed*8,t=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),i=this.bufferLength;if(t.setUint8(this.bufferLength++,128),i%on>=on-8){for(var r=this.bufferLength;r<on;r++)t.setUint8(r,0);this.hashBuffer(),this.bufferLength=0}for(var r=this.bufferLength;r<on-8;r++)t.setUint8(r,0);t.setUint32(on-8,Math.floor(e/4294967296),!0),t.setUint32(on-4,e),this.hashBuffer(),this.finished=!0}for(var s=new Uint8Array(Xw),r=0;r<8;r++)s[r*4]=this.state[r]>>>24&255,s[r*4+1]=this.state[r]>>>16&255,s[r*4+2]=this.state[r]>>>8&255,s[r*4+3]=this.state[r]>>>0&255;return s},n.prototype.hashBuffer=function(){for(var e=this,t=e.buffer,i=e.state,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],d=i[7],h=0;h<on;h++){if(h<16)this.temp[h]=(t[h*4]&255)<<24|(t[h*4+1]&255)<<16|(t[h*4+2]&255)<<8|t[h*4+3]&255;else{var f=this.temp[h-2],g=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10;f=this.temp[h-15];var _=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3;this.temp[h]=(g+this.temp[h-7]|0)+(_+this.temp[h-16]|0)}var m=(((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))+(c&l^~c&u)|0)+(d+($w[h]+this.temp[h]|0)|0)|0,p=((r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10))+(r&s^r&o^s&o)|0;d=u,u=l,l=c,c=a+m|0,a=o,o=s,s=r,r=m+p|0}i[0]+=r,i[1]+=s,i[2]+=o,i[3]+=a,i[4]+=c,i[5]+=l,i[6]+=u,i[7]+=d},n}(),Yw=function(){function n(e){this.secret=e,this.hash=new Zs,this.reset()}return n.prototype.update=function(e){if(!(xc(e)||this.error))try{this.hash.update(is(e))}catch(t){this.error=t}},n.prototype.digestSync=function(){if(this.error)throw this.error;return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},n.prototype.digest=function(){return Gw(this,void 0,void 0,function(){return Ww(this,function(e){return[2,this.digestSync()]})})},n.prototype.reset=function(){if(this.hash=new Zs,this.secret){this.outer=new Zs;var e=Kw(this.secret),t=new Uint8Array(on);t.set(e);for(var i=0;i<on;i++)e[i]^=54,t[i]^=92;this.hash.update(e),this.outer.update(t);for(var i=0;i<e.byteLength;i++)e[i]=0}},n}();function Kw(n){var e=is(n);if(e.byteLength>on){var t=new Zs;t.update(e),e=t.digest()}var i=new Uint8Array(on);return i.set(e),i}var Zw=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];function Jw(n){if(Qw(n)&&typeof n.crypto.subtle=="object"){var e=n.crypto.subtle;return eT(e)}return!1}function Qw(n){if(typeof n=="object"&&typeof n.crypto=="object"){var e=n.crypto.getRandomValues;return typeof e=="function"}return!1}function eT(n){return n&&Zw.every(function(e){return typeof n[e]=="function"})}var tT=function(){function n(e){Jw(Ks())?this.hash=new Vw(e):this.hash=new Yw(e)}return n.prototype.update=function(e,t){this.hash.update(is(e))},n.prototype.digest=function(){return this.hash.digest()},n.prototype.reset=function(){this.hash.reset()},n}();const nT={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Of={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},xt={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},Ft={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Jn={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class Y{static getFirstMatch(e,t){const i=t.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,t){const i=t.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,t,i){if(e.test(t))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,i=!1){const r=Y.getVersionPrecision(e),s=Y.getVersionPrecision(t);let o=Math.max(r,s),a=0;const c=Y.map([e,t],l=>{const u=o-Y.getVersionPrecision(l),d=l+new Array(u+1).join(".0");return Y.map(d.split("."),h=>new Array(20-h.length).join("0")+h).reverse()});for(i&&(a=o-Math.min(r,s)),o-=1;o>=a;){if(c[0][o]>c[1][o])return 1;if(c[0][o]===c[1][o]){if(o===a)return 0;o-=1}else if(c[0][o]<c[1][o])return-1}}static map(e,t){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i}static find(e,t){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(t(s,i))return s}}static assign(e,...t){const i=e;let r,s;if(Object.assign)return Object.assign(e,...t);for(r=0,s=t.length;r<s;r+=1){const o=t[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(c=>{i[c]=o[c]})}return e}static getBrowserAlias(e){return nT[e]}static getBrowserTypeByAlias(e){return Of[e]||""}}const lt=/version\/(\d+(\.?_?\d+)+)/i,iT=[{test:[/googlebot/i],describe(n){const e={name:"Googlebot"},t=Y.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/opera/i],describe(n){const e={name:"Opera"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opr\/|opios/i],describe(n){const e={name:"Opera"},t=Y.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/SamsungBrowser/i],describe(n){const e={name:"Samsung Internet for Android"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Whale/i],describe(n){const e={name:"NAVER Whale Browser"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MZBrowser/i],describe(n){const e={name:"MZ Browser"},t=Y.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/focus/i],describe(n){const e={name:"Focus"},t=Y.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/swing/i],describe(n){const e={name:"Swing"},t=Y.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/coast/i],describe(n){const e={name:"Opera Coast"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(n){const e={name:"Opera Touch"},t=Y.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/yabrowser/i],describe(n){const e={name:"Yandex Browser"},t=Y.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/ucbrowser/i],describe(n){const e={name:"UC Browser"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Maxthon|mxios/i],describe(n){const e={name:"Maxthon"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/epiphany/i],describe(n){const e={name:"Epiphany"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/puffin/i],describe(n){const e={name:"Puffin"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sleipnir/i],describe(n){const e={name:"Sleipnir"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/k-meleon/i],describe(n){const e={name:"K-Meleon"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/micromessenger/i],describe(n){const e={name:"WeChat"},t=Y.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/qqbrowser/i],describe(n){const e={name:/qqbrowserlite/i.test(n)?"QQ Browser Lite":"QQ Browser"},t=Y.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/msie|trident/i],describe(n){const e={name:"Internet Explorer"},t=Y.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/\sedg\//i],describe(n){const e={name:"Microsoft Edge"},t=Y.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/edg([ea]|ios)/i],describe(n){const e={name:"Microsoft Edge"},t=Y.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/vivaldi/i],describe(n){const e={name:"Vivaldi"},t=Y.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/seamonkey/i],describe(n){const e={name:"SeaMonkey"},t=Y.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sailfish/i],describe(n){const e={name:"Sailfish"},t=Y.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,n);return t&&(e.version=t),e}},{test:[/silk/i],describe(n){const e={name:"Amazon Silk"},t=Y.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/phantom/i],describe(n){const e={name:"PhantomJS"},t=Y.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/slimerjs/i],describe(n){const e={name:"SlimerJS"},t=Y.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e={name:"BlackBerry"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(web|hpw)[o0]s/i],describe(n){const e={name:"WebOS Browser"},t=Y.getFirstMatch(lt,n)||Y.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/bada/i],describe(n){const e={name:"Bada"},t=Y.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/tizen/i],describe(n){const e={name:"Tizen"},t=Y.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/qupzilla/i],describe(n){const e={name:"QupZilla"},t=Y.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/firefox|iceweasel|fxios/i],describe(n){const e={name:"Firefox"},t=Y.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/electron/i],describe(n){const e={name:"Electron"},t=Y.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MiuiBrowser/i],describe(n){const e={name:"Miui"},t=Y.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/chromium/i],describe(n){const e={name:"Chromium"},t=Y.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,n)||Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/chrome|crios|crmo/i],describe(n){const e={name:"Chrome"},t=Y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/GSA/i],describe(n){const e={name:"Google Search"},t=Y.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e={name:"Android Browser"},t=Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/playstation 4/i],describe(n){const e={name:"PlayStation 4"},t=Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/safari|applewebkit/i],describe(n){const e={name:"Safari"},t=Y.getFirstMatch(lt,n);return t&&(e.version=t),e}},{test:[/.*/i],describe(n){const e=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,r=n.search("\\(")!==-1?t:e;return{name:Y.getFirstMatch(r,n),version:Y.getSecondMatch(r,n)}}}],rT=[{test:[/Roku\/DVP/],describe(n){const e=Y.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,n);return{name:Ft.Roku,version:e}}},{test:[/windows phone/i],describe(n){const e=Y.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,n);return{name:Ft.WindowsPhone,version:e}}},{test:[/windows /i],describe(n){const e=Y.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,n),t=Y.getWindowsVersionName(e);return{name:Ft.Windows,version:e,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(n){const e={name:Ft.iOS},t=Y.getSecondMatch(/(Version\/)(\d[\d.]+)/,n);return t&&(e.version=t),e}},{test:[/macintosh/i],describe(n){const e=Y.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,n).replace(/[_\s]/g,"."),t=Y.getMacOSVersionName(e),i={name:Ft.MacOS,version:e};return t&&(i.versionName=t),i}},{test:[/(ipod|iphone|ipad)/i],describe(n){const e=Y.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,n).replace(/[_\s]/g,".");return{name:Ft.iOS,version:e}}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e=Y.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,n),t=Y.getAndroidVersionName(e),i={name:Ft.Android,version:e};return t&&(i.versionName=t),i}},{test:[/(web|hpw)[o0]s/i],describe(n){const e=Y.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,n),t={name:Ft.WebOS};return e&&e.length&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e=Y.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,n)||Y.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,n)||Y.getFirstMatch(/\bbb(\d+)/i,n);return{name:Ft.BlackBerry,version:e}}},{test:[/bada/i],describe(n){const e=Y.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,n);return{name:Ft.Bada,version:e}}},{test:[/tizen/i],describe(n){const e=Y.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,n);return{name:Ft.Tizen,version:e}}},{test:[/linux/i],describe(){return{name:Ft.Linux}}},{test:[/CrOS/],describe(){return{name:Ft.ChromeOS}}},{test:[/PlayStation 4/],describe(n){const e=Y.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,n);return{name:Ft.PlayStation4,version:e}}}],sT=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(n){const e=Y.getFirstMatch(/(can-l01)/i,n)&&"Nova",t={type:xt.mobile,vendor:"Huawei"};return e&&(t.model=e),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:xt.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:xt.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:xt.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:xt.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:xt.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:xt.tablet}}},{test(n){const e=n.test(/ipod|iphone/i),t=n.test(/like (ipod|iphone)/i);return e&&!t},describe(n){const e=Y.getFirstMatch(/(ipod|iphone)/i,n);return{type:xt.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:xt.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:xt.mobile}}},{test(n){return n.getBrowserName(!0)==="blackberry"},describe(){return{type:xt.mobile,vendor:"BlackBerry"}}},{test(n){return n.getBrowserName(!0)==="bada"},describe(){return{type:xt.mobile}}},{test(n){return n.getBrowserName()==="windows phone"},describe(){return{type:xt.mobile,vendor:"Microsoft"}}},{test(n){const e=Number(String(n.getOSVersion()).split(".")[0]);return n.getOSName(!0)==="android"&&e>=3},describe(){return{type:xt.tablet}}},{test(n){return n.getOSName(!0)==="android"},describe(){return{type:xt.mobile}}},{test(n){return n.getOSName(!0)==="macos"},describe(){return{type:xt.desktop,vendor:"Apple"}}},{test(n){return n.getOSName(!0)==="windows"},describe(){return{type:xt.desktop}}},{test(n){return n.getOSName(!0)==="linux"},describe(){return{type:xt.desktop}}},{test(n){return n.getOSName(!0)==="playstation 4"},describe(){return{type:xt.tv}}},{test(n){return n.getOSName(!0)==="roku"},describe(){return{type:xt.tv}}}],oT=[{test(n){return n.getBrowserName(!0)==="microsoft edge"},describe(n){if(/\sedg\//i.test(n))return{name:Jn.Blink};const t=Y.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,n);return{name:Jn.EdgeHTML,version:t}}},{test:[/trident/i],describe(n){const e={name:Jn.Trident},t=Y.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){return n.test(/presto/i)},describe(n){const e={name:Jn.Presto},t=Y.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=n.test(/gecko/i),t=n.test(/like gecko/i);return e&&!t},describe(n){const e={name:Jn.Gecko},t=Y.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:Jn.Blink}}},{test:[/(apple)?webkit/i],describe(n){const e={name:Jn.WebKit},t=Y.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}}];class Kd{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=Y.find(iT,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=Y.find(rT,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=Y.find(sT,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=Y.find(oT,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return Y.assign({},this.parsedResult)}satisfies(e){const t={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(a=>{const c=e[a];typeof c=="string"?(r[a]=c,s+=1):typeof c=="object"&&(t[a]=c,i+=1)}),i>0){const a=Object.keys(t),c=Y.find(a,u=>this.isOS(u));if(c){const u=this.satisfies(t[c]);if(u!==void 0)return u}const l=Y.find(a,u=>this.isPlatform(u));if(l){const u=this.satisfies(t[l]);if(u!==void 0)return u}}if(s>0){const a=Object.keys(r),c=Y.find(a,l=>this.isBrowser(l,!0));if(c!==void 0)return this.compareVersion(r[c])}}isBrowser(e,t=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=Y.getBrowserTypeByAlias(r);return t&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let t=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),t.indexOf(Y.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class Ff{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new Kd(e,t)}static parse(e){return new Kd(e).getResult()}static get BROWSER_MAP(){return Of}static get ENGINE_MAP(){return Jn}static get OS_MAP(){return Ft}static get PLATFORMS_MAP(){return xt}}const aT=({serviceId:n,clientVersion:e})=>async t=>{var o,a,c,l,u,d;const i=typeof window<"u"&&((o=window==null?void 0:window.navigator)!=null&&o.userAgent)?Ff.parse(window.navigator.userAgent):void 0,r=[["aws-sdk-js",e],["ua","2.1"],[`os/${((a=i==null?void 0:i.os)==null?void 0:a.name)||"other"}`,(c=i==null?void 0:i.os)==null?void 0:c.version],["lang/js"],["md/browser",`${((l=i==null?void 0:i.browser)==null?void 0:l.name)??"unknown"}_${((u=i==null?void 0:i.browser)==null?void 0:u.version)??"unknown"}`]];n&&r.push([`api/${n}`,e]);const s=await((d=t==null?void 0:t.userAgentAppId)==null?void 0:d.call(t));return s&&r.push([`app/${s}`]),r},cT=n=>()=>Promise.reject(n),Zd=typeof TextEncoder=="function"?new TextEncoder:null,lT=n=>{if(typeof n=="string"){if(Zd)return Zd.encode(n).byteLength;let e=n.length;for(let t=e-1;t>=0;t--){const i=n.charCodeAt(t);i>127&&i<=2047?e++:i>2047&&i<=65535&&(e+=2),i>=56320&&i<=57343&&t--}return e}else{if(typeof n.byteLength=="number")return n.byteLength;if(typeof n.size=="number")return n.size}throw new Error(`Body Length computation failed for ${n}`)},Bf="required",Ze="type",ft="fn",pt="argv",cn="ref",oi="url",ai="properties",ci="headers",uT=!1,lo="isSet",vn="error",Yt="endpoint",pn="tree",os="PartitionResult",lr="stringEquals",uo="not",Hs={[Bf]:!1,[Ze]:"String"},Jd={[Bf]:!0,default:!1,[Ze]:"Boolean"},Il={[ft]:"booleanEquals",[pt]:[{[cn]:"UseFIPS"},!0]},Ll={[ft]:"booleanEquals",[pt]:[{[cn]:"UseDualStack"},!0]},zr={},kf={[cn]:"Region"},Dl={[ft]:lo,[pt]:[{[cn]:"AccountIdEndpointMode"}]},Nl={[cn]:"AccountIdEndpointMode"},_a={[ft]:lo,[pt]:[{[cn]:"AccountId"}]},dT={[cn]:"AccountId"},Qd={[ft]:lr,[pt]:[{[ft]:"getAttr",[pt]:[{[cn]:os},"name"]},"aws"]},hT={[ft]:"getAttr",[pt]:[{[cn]:os},"name"]},eh={[ft]:uo,[pt]:[Il]},th={[ft]:uo,[pt]:[Ll]},nh={[ft]:"booleanEquals",[pt]:[{[ft]:"getAttr",[pt]:[{[cn]:os},"supportsFIPS"]},!0]},ih={[ft]:"booleanEquals",[pt]:[{[ft]:"getAttr",[pt]:[{[cn]:os},"supportsDualStack"]},!0]},rh={[oi]:"https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[ai]:{},[ci]:{}},sh={conditions:[Dl,{[ft]:lr,[pt]:[Nl,"disabled"]}],[Yt]:{[oi]:"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",[ai]:{},[ci]:{}},[Ze]:Yt},oh={[Yt]:{[oi]:"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",[ai]:{},[ci]:{}},[Ze]:Yt},ah={[oi]:"https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",[ai]:{},[ci]:{}},ch={[oi]:"https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",[ai]:{},[ci]:{}},ya=[Il],xa=[Ll],lh=[kf],va=[Dl,{[ft]:lr,[pt]:[Nl,"disabled"]}],fT={version:"1.0",parameters:{Region:Hs,UseDualStack:Jd,UseFIPS:Jd,Endpoint:Hs,AccountId:Hs,AccountIdEndpointMode:Hs},rules:[{conditions:[{[ft]:lo,[pt]:[{[cn]:"Endpoint"}]}],rules:[{conditions:ya,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[Ze]:vn},{conditions:xa,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[Ze]:vn},{endpoint:{[oi]:"{Endpoint}",[ai]:zr,[ci]:zr},[Ze]:Yt}],[Ze]:pn},{conditions:[{[ft]:lo,[pt]:lh}],rules:[{conditions:[{[ft]:"aws.partition",[pt]:lh,assign:os}],rules:[{conditions:[{[ft]:lr,[pt]:[kf,"local"]}],rules:[{conditions:ya,error:"Invalid Configuration: FIPS and local endpoint are not supported",[Ze]:vn},{conditions:xa,error:"Invalid Configuration: Dualstack and local endpoint are not supported",[Ze]:vn},{endpoint:{[oi]:"http://localhost:8000",[ai]:{authSchemes:[{name:"sigv4",signingName:"dynamodb",signingRegion:"us-east-1"}]},[ci]:zr},[Ze]:Yt}],[Ze]:pn},{conditions:[Dl,{[ft]:lr,[pt]:[Nl,"required"]},{[ft]:uo,[pt]:[_a]}],error:"AccountIdEndpointMode is required but no AccountID was provided or able to be loaded.",[Ze]:vn},{conditions:[_a,Qd,eh,th,{[ft]:uo,[pt]:[{[ft]:"isValidHostLabel",[pt]:[dT,uT]}]}],error:"Credentials-sourced account ID parameter is invalid",[Ze]:vn},{conditions:[Il,Ll],rules:[{conditions:[nh,ih],rules:[{conditions:va,endpoint:rh,[Ze]:Yt},{endpoint:rh,[Ze]:Yt}],[Ze]:pn},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[Ze]:vn}],[Ze]:pn},{conditions:ya,rules:[{conditions:[nh],rules:[{conditions:[{[ft]:lr,[pt]:[hT,"aws-us-gov"]}],rules:[sh,oh],[Ze]:pn},{conditions:va,endpoint:ah,[Ze]:Yt},{endpoint:ah,[Ze]:Yt}],[Ze]:pn},{error:"FIPS is enabled but this partition does not support FIPS",[Ze]:vn}],[Ze]:pn},{conditions:xa,rules:[{conditions:[ih],rules:[{conditions:va,endpoint:ch,[Ze]:Yt},{endpoint:ch,[Ze]:Yt}],[Ze]:pn},{error:"DualStack is enabled but this partition does not support DualStack",[Ze]:vn}],[Ze]:pn},sh,{conditions:[_a,Qd,eh,th],endpoint:{[oi]:"https://{AccountId}.ddb.{Region}.{PartitionResult#dnsSuffix}",[ai]:zr,[ci]:zr},[Ze]:Yt},oh],[Ze]:pn}],[Ze]:pn},{error:"Invalid Configuration: Missing Region",[Ze]:vn}]},pT=fT,mT=new XE({size:50,params:["AccountId","AccountIdEndpointMode","Endpoint","Region","UseDualStack","UseFIPS"]}),gT=(n,e={})=>mT.get(n,()=>uS(pT,{endpointParams:n,logger:e.logger}));so.aws=_f;const _T=n=>({apiVersion:"2012-08-10",base64Decoder:(n==null?void 0:n.base64Decoder)??Vc,base64Encoder:(n==null?void 0:n.base64Encoder)??of,disableHostPrefix:(n==null?void 0:n.disableHostPrefix)??!1,endpointProvider:(n==null?void 0:n.endpointProvider)??gT,extensions:(n==null?void 0:n.extensions)??[],httpAuthSchemeProvider:(n==null?void 0:n.httpAuthSchemeProvider)??Eb,httpAuthSchemes:(n==null?void 0:n.httpAuthSchemes)??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new ES}],logger:(n==null?void 0:n.logger)??new Tf,serviceId:(n==null?void 0:n.serviceId)??"DynamoDB",urlParser:(n==null?void 0:n.urlParser)??ao,utf8Decoder:(n==null?void 0:n.utf8Decoder)??Er,utf8Encoder:(n==null?void 0:n.utf8Encoder)??sf}),yT=["in-region","cross-region","mobile","standard","legacy"],xT=({defaultsMode:n}={})=>SS(async()=>{const e=typeof n=="function"?await n():n;switch(e==null?void 0:e.toLowerCase()){case"auto":return Promise.resolve(vT()?"mobile":"standard");case"mobile":case"in-region":case"cross-region":case"standard":case"legacy":return Promise.resolve(e==null?void 0:e.toLocaleLowerCase());case void 0:return Promise.resolve("legacy");default:throw new Error(`Invalid parameter for "defaultsMode", expect ${yT.join(", ")}, got ${e}`)}}),vT=()=>{var t,i;const n=typeof window<"u"&&((t=window==null?void 0:window.navigator)!=null&&t.userAgent)?Ff.parse(window.navigator.userAgent):void 0,e=(i=n==null?void 0:n.platform)==null?void 0:i.type;return e==="tablet"||e==="mobile"},ET=n=>{const e=xT(n),t=()=>e().then(tM),i=_T(n);return{...i,...n,runtime:"browser",defaultsMode:e,accountIdEndpointMode:(n==null?void 0:n.accountIdEndpointMode)??(()=>Promise.resolve(tf)),bodyLengthChecker:(n==null?void 0:n.bodyLengthChecker)??lT,credentialDefaultProvider:(n==null?void 0:n.credentialDefaultProvider)??(r=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:(n==null?void 0:n.defaultUserAgentProvider)??aT({serviceId:i.serviceId,clientVersion:Fw.version}),endpointDiscoveryEnabledProvider:(n==null?void 0:n.endpointDiscoveryEnabledProvider)??(()=>Promise.resolve(void 0)),maxAttempts:(n==null?void 0:n.maxAttempts)??co,region:(n==null?void 0:n.region)??cT("Region is missing"),requestHandler:Gc.create((n==null?void 0:n.requestHandler)??t),retryMode:(n==null?void 0:n.retryMode)??(async()=>(await t()).retryMode||GM),sha256:(n==null?void 0:n.sha256)??tT,streamCollector:(n==null?void 0:n.streamCollector)??PE,useDualstackEndpoint:(n==null?void 0:n.useDualstackEndpoint)??(()=>Promise.resolve(MM)),useFipsEndpoint:(n==null?void 0:n.useFipsEndpoint)??(()=>Promise.resolve(bM))}},ST=n=>{let e=async()=>{if(n.region===void 0)throw new Error("Region is missing from runtimeConfig");const t=n.region;return typeof t=="string"?t:t()};return{setRegion(t){e=t},region(){return e}}},MT=n=>({region:n.region()}),bT=n=>{const e=n.httpAuthSchemes;let t=n.httpAuthSchemeProvider,i=n.credentials;return{setHttpAuthScheme(r){const s=e.findIndex(o=>o.schemeId===r.schemeId);s===-1?e.push(r):e.splice(s,1,r)},httpAuthSchemes(){return e},setHttpAuthSchemeProvider(r){t=r},httpAuthSchemeProvider(){return t},setCredentials(r){i=r},credentials(){return i}}},wT=n=>({httpAuthSchemes:n.httpAuthSchemes(),httpAuthSchemeProvider:n.httpAuthSchemeProvider(),credentials:n.credentials()}),Vs=n=>n,TT=(n,e)=>{const t={...Vs(ST(n)),...Vs(oM(n)),...Vs(Gv(n)),...Vs(bT(n))};return e.forEach(i=>i.configure(t)),{...n,...MT(t),...aM(t),...Wv(t),...wT(t)}};class AT extends jS{constructor(...[t]){const i=ET(t||{}),r=Mb(i),s=Vv(r),o=WE(s),a=ub(o),c=wM(a),l=c,u=VM(l),d=Sb(u),h=Qv(d,{endpointDiscoveryCommandCtor:yw}),f=TT(h,(t==null?void 0:t.extensions)||[]);super(f);oe(this,"config");this.config=f,this.middlewareStack.use(SM(this.config)),this.middlewareStack.use(_b(this.config)),this.middlewareStack.use(RM(this.config)),this.middlewareStack.use(nE(this.config)),this.middlewareStack.use(sE(this.config)),this.middlewareStack.use(uE(this.config)),this.middlewareStack.use(pE(this.config,{httpAuthSchemeParametersProvider:xb,identityProviderConfigProvider:async g=>new FE({"aws.auth#sigv4":g.credentials})})),this.middlewareStack.use(ME(this.config))}destroy(){super.destroy()}}new AT({region:"us-east-2"});function RT(){const n=document.createElement("div");n.id="home-page",document.body.appendChild(n),n.style.backgroundColor="#000",n.style.color="#fff",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.justifyContent="center",n.style.height="100vh";const e=document.createElement("div");e.id="image-container",n.appendChild(e);const t=document.createElement("img");t.src="/models/background.png",t.alt="Game Banner",t.style.width="100%",t.style.maxWidth="800px",t.style.marginBottom="20px",e.appendChild(t);const i=document.createElement("label");i.textContent="Your Name",i.className="name-label",i.style.marginBottom="15px",n.appendChild(i);const r=document.createElement("input");r.type="text",r.placeholder="Enter Your Name",r.className="name-input",r.style.marginBottom="40px",n.appendChild(r);const s=document.createElement("label");s.textContent="Choose a Character",s.className="role-label",s.style.marginBottom="20px",n.appendChild(s);const o=document.createElement("div");o.className="role-container",n.appendChild(o);const a=new Jh;for(let l=1;l<=3;l++){const u=document.createElement("div");u.className="role-box";const d=document.createElement("canvas");d.width=250,d.height=350,d.className="role-canvas",u.appendChild(d),o.appendChild(u);const h=new Zh({canvas:d,alpha:!0});h.setSize(d.width,d.height);const f=new Oh,g=new Nt(50,d.width/d.height,.1,1e3);g.position.z=5,g.position.x=0,g.position.y=1;const _=new Xh(16777215,.8);f.add(_);const m=new Uc(16777215,.5);m.position.set(1,1,2).normalize(),f.add(m),a.load(`/models/player${l}.glb`,p=>{const M=p.scene,w=new Wt().setFromObject(M),v=new D;w.getSize(v);const P=2/v.y;M.scale.set(P,P,P),M.rotation.y=Math.PI,f.add(M);let A=!1;u.addEventListener("mouseenter",()=>{A=!0}),u.addEventListener("mouseleave",()=>{A=!1,M.rotation.y=Math.PI});function T(){A&&(M.rotation.y+=.04),h.render(f,g),requestAnimationFrame(T)}T()}),u.addEventListener("click",()=>{document.querySelectorAll(".role-box").forEach(p=>{p.classList.remove("selected")}),u.classList.add("selected"),u.setAttribute("data-role",`player${l}.glb`)})}const c=document.createElement("button");c.textContent="Start",c.className="start-button",c.style.marginTop="10px",c.addEventListener("click",()=>{const l=r.value.trim(),u=document.querySelector(".role-box.selected");if(!l){alert("Please Enter Your Name");return}if(!u){alert("please Choose a Character");return}const d=u.getAttribute("data-role");document.body.removeChild(n),LT(l,d)}),n.appendChild(c)}async function CT(n,e,t){if(!n||e===void 0||t===void 0)return;const i={playerId:`${n}_${Date.now()}`,name:n,score:parseFloat(e),timestamp:new Date().toISOString(),global:"all"};try{const r=await fetch("https://za2bfpvm1l.execute-api.us-east-2.amazonaws.com/test/Leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!r.ok){const o=await r.text();throw new Error(`提交分數失敗：${r.statusText}`)}const s=await r.json()}catch{}}async function PT(){const n="https://za2bfpvm1l.execute-api.us-east-2.amazonaws.com/test/Leaderboard";try{const e=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();return(typeof t.body=="string"?JSON.parse(t.body):t.body).map(r=>({name:r.name,score:parseFloat(r.score),time:parseFloat(r.time)}))}catch{return[]}}function IT(n){document.body.innerHTML="";const e=document.createElement("div");e.id="leaderboard-page";const t=document.createElement("h2");t.className="leaderboard-title",t.textContent="Leader Board",e.appendChild(t);const i=document.createElement("div");i.className="leaderboard-list",n.forEach((s,o)=>{const a=document.createElement("div");a.className="leaderboard-entry";const c=document.createElement("span");c.className="entry-rank",c.textContent=`${o+1}.`;const l=document.createElement("span");l.className="entry-name",l.textContent=s.name;const u=document.createElement("span");u.className="entry-score",u.textContent=`${s.score} 分`,a.appendChild(c),a.appendChild(l),a.appendChild(u),i.appendChild(a)}),e.appendChild(i);const r=document.createElement("button");r.className="home-button",r.textContent="Return Home Page",r.addEventListener("click",()=>location.reload()),e.appendChild(r),document.body.appendChild(e)}function LT(n,e){console.log(`Player Name: ${n}`),ke();const t=new kv;t.setSize(window.innerWidth,window.innerHeight),t.domElement.style.position="absolute",t.domElement.style.top="0",document.body.appendChild(t.domElement);const i=new Oh,r=new Nt(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Zh({antialias:!0});s.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(s.domElement);const o=new cc().load("/textures/snow_background.jpg");i.background=o;const c=new cc().load("/textures/snow.jpg"),l=new sr({map:c});l.map.wrapS=l.map.wrapT=Li;const u=new _r(20,50),d=new Ct(u,l);d.rotation.x=-Math.PI/2,i.add(d);const h=new Xh(16777215,.5);i.add(h);const f=new Uc(16777215,1);f.position.set(10,20,10),i.add(f);let g,_,m,p=!1,M=!1,w=!1,v=!1,P=[],A,T,O,b={left:!1,right:!1,up:!1,down:!1};const E=new kc;let C;try{C=new Audio("/audio/background.mp3"),C.loop=!0,window.addEventListener("click",()=>{C.play().catch(Q=>console.error(Q))},{once:!0})}catch(Q){console.error("音樂無法載入: ",Q)}const q=new Jh;q.load(`/models/${e}`,Q=>{g=Q.scene;const j=new Wt().setFromObject(g),S=new D;j.getSize(S);const y=2/S.y;g.scale.set(y,y,y),g.position.set(0,.5,-20),g.traverse(me=>{me.isMesh&&(me.castShadow=!0)}),i.add(g);const L=document.createElement("div");L.className="player-name",L.style.color="white",L.style.backgroundColor="rgba(0, 0, 0, 0.5)",L.style.padding="2px 5px",L.style.borderRadius="3px",L.textContent=n,m=new Bv(L),m.position.set(0,2,0),g.add(m);const k=new Wt().setFromObject(g);O=new fg(k,255),A=performance.now();function W(){g&&(k.setFromObject(g),O.box.copy(k))}g.position.y=0,V(e);const H=Ee;Ee=function(){W(),H()}}),q.load("/models/ghost.glb",Q=>{_=Q.scene,_.position.set(0,0,20),_.scale.set(3,3,3),_.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),i.add(_);function j(){if(w||!_)return;p=!0;const S=_.rotation.y,y=(S+Math.PI)%(2*Math.PI),L=Math.random()*1e3+500;new Gt.Tween({angle:S},E).to({angle:y},L).easing(Gt.Easing.Quadratic.InOut).onUpdate(k=>{_.rotation.y=k.angle}).onComplete(()=>{M=!0,p=!1,setTimeout(()=>{w||new Gt.Tween({angle:y},E).to({angle:S},L).easing(Gt.Easing.Quadratic.InOut).onUpdate(k=>{_.rotation.y=k.angle}).onComplete(()=>{M=!1,j()}).start()},Math.random()*2e3+2e3)}).start()}j()});const z=new _r(20,.1),J=new ti({color:65280}),Z=new Ct(z,J);Z.rotation.x=-Math.PI/2,Z.position.set(0,.01,20),i.add(Z);const X=[];function ee(Q,j,S,y){const L=new br(y,y,y),k=new sr({color:9109504}),W=new Ct(L,k);W.position.set(Q,j,S),i.add(W),X.push(W)}function V(Q){const j={x:0,y:.5,z:-20};X.forEach(L=>i.remove(L)),X.length=0;let S;if(Q==="player1.glb")S={count:4,sizeRange:[1,2],positionRange:[-8,8]};else if(Q==="player2.glb")S={count:5,sizeRange:[1.5,3],positionRange:[-6,6]};else if(Q==="player3.glb")S={count:7,sizeRange:[.8,1.5],positionRange:[-10,10]};else{console.error("未知的角色類型：",Q);return}const y=2;for(let L=0;L<S.count;L++){let k=!1,W,H;for(;!k;){const me=Math.random()*(S.sizeRange[1]-S.sizeRange[0])+S.sizeRange[0];W=Math.random()*(S.positionRange[1]-S.positionRange[0])+S.positionRange[0],H=Math.random()*40-20;const re=W-j.x,se=H-j.z;Math.sqrt(re*re+se*se)>=y&&(k=!0,ee(W,.5,H,me))}}}function ce(){if(!g)return;g.updateMatrixWorld(),X.forEach(j=>j.updateMatrixWorld());const Q=new Wt().setFromObject(g);O.box.copy(Q);for(let j=0;j<X.length;j++){const S=X[j],y=new Wt().setFromObject(S);if(Q.intersectsBox(y)){w=!0,R("Game Over<br>Collided with obstacles"),C&&C.pause(),Oe();return}}}function fe(Q){const j=new Lc(.2,32),S=new sr({color:5592405}),y=new Ct(j,S);y.rotation.x=-Math.PI/2,y.position.set(Q.x,Q.y+.01,Q.z),P.push(y),i.add(y),setTimeout(()=>{i.remove(y),P=P.filter(L=>L!==y)},1500)}function Se(){g&&(g.position.x>10||g.position.x<-10)&&(w=!0,R("Game Over<br>You Fall Down!"),new Gt.Tween(g.position,E).to({y:-5},1e3).easing(Gt.Easing.Bounce.Out).onComplete(()=>{g.visible=!1}).start(),C&&C.pause(),Oe())}let Ie=!1,Qe=null,$=0;const ie=10,ve=.3;let le=2,be=0,Ae=0;function ke(){const Q=document.createElement("video");Q.autoplay=!0,Q.style.display="none",document.body.appendChild(Q);const j=document.createElement("canvas"),S=j.getContext("2d",{willReadFrequently:!0});navigator.mediaDevices.getUserMedia({video:!0}).then(y=>{Q.srcObject=y,Q.addEventListener("loadeddata",()=>{j.width=Q.videoWidth,j.height=Q.videoHeight;function L(){if(w)return;S.drawImage(Q,0,0,j.width,j.height);const k=S.getImageData(0,0,j.width,j.height);if(Qe){let W=0;const H=k.data.length;for(let se=0;se<H;se+=4){const Ve=Math.abs(k.data[se]-Qe.data[se]),te=Math.abs(k.data[se+1]-Qe.data[se+1]),ge=Math.abs(k.data[se+2]-Qe.data[se+2]);W+=Ve+te+ge}const me=W/(H/4);Ae<10?(Ae++,$=0):$=$*ve+me*(1-ve);const re=Ae>10?ie:ie*1.1;$>re?(be++,be>=le&&(Ie=!0)):(be=0,Ie=!1)}Qe=k,requestAnimationFrame(L)}L()})}).catch(y=>{console.error("Couldn't turn on camera：",y)})}function dt(){if(M&&!p&&Math.abs(_.rotation.y%(2*Math.PI)-Math.PI)<.01&&(b.up||b.left||b.right||b.down||v||Ie)){w=!0,R("Game Over<br>You Move!"),C&&C.pause(),Oe();const Q=new D;_.getWorldPosition(Q),Q.y+=7;const j=new D;g.getWorldPosition(j);const S=new en,y=new Float32Array([Q.x,Q.y,Q.z,j.x,j.y,j.z]);S.setAttribute("position",new Pt(y,3));const L=new po({color:16711680,linewidth:300,transparent:!0,opacity:.5}),k=new mo(S,L);i.add(k),new Audio("/audio/shot.mp3").play().catch(H=>console.error("音效播放失敗: ",H)),setTimeout(()=>{i.remove(k);const H=1e3,me=g.rotation.x,re=Math.PI/2,se=g.position.y;new Gt.Tween({rotation:me,y:se}).to({rotation:re,y:0},H).easing(Gt.Easing.Quadratic.Out).onUpdate(te=>{g.rotation.x=te.rotation,g.position.y=te.y}).onComplete(()=>{R("Game Over<br>>You Move!"),Oe(),C&&C.pause()}).start()},2e3)}}function qe(Q,j,S){j===void 0||S===void 0||He(Q,j,S)}function gt(){if(g&&g.position.z>=Z.position.z){if(w=!0,A){T=performance.now();const Q=((T-A)/1e3).toFixed(2),j=Math.max(0,1e3-Q*10).toFixed(2);R(`Congratulations! <br> ${n} <br> Total Time: ${Q} sec.`),qe(n,j,Q)}else R("Congratulations! <br> Too Fast!");He(n),C&&C.pause()}}function R(Q){const j=document.createElement("div");j.id="game-message",j.innerHTML=Q,j.style.position="absolute",j.style.top="40%",j.style.left="50%",j.style.transform="translate(-50%, -50%)",j.style.padding="20px",j.style.backgroundColor="rgba(0, 0, 0, 0.8)",j.style.color="white",j.style.fontSize="24px",j.style.zIndex="1000",document.body.appendChild(j)}function Ht(){location.reload()}function Oe(){const Q=document.createElement("button");Q.id="restart-button",Q.textContent="Restart",Q.style.position="absolute",Q.style.top="60%",Q.style.left="50%",Q.style.transform="translate(-50%, -50%)",Q.style.padding="10px 20px",Q.style.fontSize="20px",document.body.appendChild(Q),Q.addEventListener("click",Ht)}function He(Q,j,S){if(!Q||j===void 0||S===void 0)return;const y=document.createElement("div");y.style.position="absolute",y.style.top="60%",y.style.left="50%",y.style.transform="translate(-50%, -50%)",y.style.display="flex",y.style.gap="10px",document.body.appendChild(y);const L=document.createElement("button");L.id="restart-button",L.textContent="Restart",L.addEventListener("click",()=>location.reload()),y.appendChild(L);const k=document.createElement("button");k.id="submit-button",k.textContent="Submit";const W=Q,H=j,me=S;k.addEventListener("click",async()=>{await CT(W,H,me);const re=await PT();IT(re)}),y.appendChild(k)}window.addEventListener("keydown",Q=>{if(Q.key==="ArrowUp"&&(b.up=!0),Q.key==="ArrowRight"&&(b.left=!0),Q.key==="ArrowLeft"&&(b.right=!0),Q.key==="ArrowDown"&&(b.down=!0),Q.key===" "&&!v&&g){v=!0;const j=3,S=300,y=g.position.y;new Audio("/audio/jump_sound.mp3").play().catch(W=>console.error("跳躍音效播放失敗: ",W)),new Gt.Tween(g.position,E).to({y:y+j},S).easing(Gt.Easing.Quadratic.Out).onComplete(()=>{new Gt.Tween(g.position,E).to({y},S).easing(Gt.Easing.Quadratic.In).onComplete(()=>{v=!1}).start()}).start()}}),window.addEventListener("keyup",Q=>{Q.key==="ArrowUp"&&(b.up=!1),Q.key==="ArrowRight"&&(b.left=!1),Q.key==="ArrowLeft"&&(b.right=!1),Q.key==="ArrowDown"&&(b.down=!1)});function Ee(){if(!w){if(g){let Q=0;if(t.render(i,r),b.up){g.rotation.y=0,g.position.z+=.1,fe(g.position),Q+=.1;const j=Math.sin(Q)*.1;g.position.y=.5+j}b.left&&(g.rotation.y=-Math.PI/2,g.position.x-=.1,fe(g.position)),b.right&&(g.rotation.y=Math.PI/2,g.position.x+=.1,fe(g.position)),b.down&&(g.rotation.y=Math.PI,g.position.z-=.1,fe(g.position)),g.updateMatrixWorld(),X.forEach(j=>j.updateMatrixWorld()),ce(),Se(),gt(),dt(),r.position.set(g.position.x,g.position.y+5,g.position.z-10),r.lookAt(g.position)}Ie&&(w=!0,R("Game Over<br>You Move!"),C&&C.pause(),Oe()),E.update(),s.render(i,r),requestAnimationFrame(Ee)}}Ee()}RT()});export default DT();
