const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}};S();function a(){}function N(e){return e()}function E(){return Object.create(null)}function m(e){e.forEach(N)}function M(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function C(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode.removeChild(e)}function I(e){return document.createElement(e)}function q(e){return Array.from(e.childNodes)}let $;function d(e){$=e}const f=[],O=[],p=[],L=[],F=Promise.resolve();let y=!1;function H(){y||(y=!0,F.then(A))}function b(e){p.push(e)}const g=new Set;let h=0;function A(){const e=$;do{for(;h<f.length;){const t=f[h];h++,d(t),K(t.$$)}for(d(null),f.length=0,h=0;O.length;)O.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];g.has(n)||(g.add(n),n())}p.length=0}while(f.length);for(;L.length;)L.pop()();y=!1,g.clear(),d(e)}function K(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const T=new Set;function z(e,t){e&&e.i&&(T.delete(e),e.i(t))}function D(e,t,n,i){const{fragment:r,on_mount:c,on_destroy:l,after_update:_}=e.$$;r&&r.m(t,n),i||b(()=>{const u=c.map(N).filter(M);l?l.push(...u):m(u),e.$$.on_mount=[]}),_.forEach(b)}function G(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(f.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,i,r,c,l,_=[-1]){const u=$;d(e);const o=e.$$={fragment:null,ctx:null,props:c,update:a,not_equal:r,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:E(),dirty:_,skip_bound:!1,root:t.target||u.$$.root};l&&l(o.root);let x=!1;if(o.ctx=n?n(e,t.props||{},(s,v,...k)=>{const w=k.length?k[0]:v;return o.ctx&&r(o.ctx[s],o.ctx[s]=w)&&(!o.skip_bound&&o.bound[s]&&o.bound[s](w),x&&J(e,s)),v}):[],o.update(),x=!0,m(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const s=q(t.target);o.fragment&&o.fragment.l(s),s.forEach(j)}else o.fragment&&o.fragment.c();t.intro&&z(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),A()}d(u)}class R{$destroy(){G(this,1),this.$destroy=a}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=I("main"),t.innerHTML='<div><div class="line svelte-1pp0l8k"></div></div>'},m(n,i){C(n,t,i)},p:a,i:a,o:a,d(n){n&&j(t)}}}class V extends R{constructor(t){super(),Q(this,t,null,U,P,{})}}new V({target:document.getElementById("app")});
