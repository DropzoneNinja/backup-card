function t(t,e,r,s){var i,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(o<3?i(n):o>3?i(e,r,n):i(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let o=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&i.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new o(r,t,s)},a=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",b=f.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>!c(t,e),_={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);i?.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(r)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of s){const s=document.createElement("style"),i=e.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(void 0!==s&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:v).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,s=r._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=r.getPropertyOptions(s),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const o=i.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){const s=this.constructor,i=this[t];if(r??=s.getPropertyOptions(t),!((r.hasChanged??y)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==i||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,r,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,b?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,A=w.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,P=`<${C}>`,O=document,M=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,N="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,D=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,J=O.createTreeWalker(O,129);function F(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const r=t.length-1,s=[];let i,o=2===e?"<svg>":3===e?"<math>":"",n=T;for(let e=0;e<r;e++){const r=t[e];let a,c,l=-1,d=0;for(;d<r.length&&(n.lastIndex=d,c=n.exec(r),null!==c);)d=n.lastIndex,n===T?"!--"===c[1]?n=H:void 0!==c[1]?n=R:void 0!==c[2]?(I.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=D):void 0!==c[3]&&(n=D):n===D?">"===c[0]?(n=i??T,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?D:'"'===c[3]?B:j):n===B||n===j?n=D:n===H||n===R?n=T:(n=D,i=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===T?r+P:l>=0?(s.push(a),r.slice(0,l)+E+r.slice(l)+S+h):r+S+(-2===l?e:h)}return[F(t,o+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,o=0;const n=t.length-1,a=this.parts,[c,l]=K(t,e);if(this.el=Z.createElement(c,r),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[o++],r=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:r,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?rt:Y}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:i}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let r=0;r<e;r++)s.append(t[r],M()),J.nextNode(),a.push({type:2,index:++i});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const r=O.createElement("template");return r.innerHTML=t,r}}function G(t,e,r=t,s){if(e===q)return e;let i=void 0!==s?r._$Co?.[s]:r._$Cl;const o=U(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,r,s)),void 0!==s?(r._$Co??=[])[s]=i:r._$Cl=i),void 0!==i&&(e=G(t,i._$AS(t,e.values),i,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);J.currentNode=s;let i=J.nextNode(),o=0,n=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new st(i,this,t)),this._$AV.push(e),a=r[++n]}o!==a?.index&&(i=J.nextNode(),o++)}return J.currentNode=O,s}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Z.createElement(F(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new X(this.O(M()),this.O(M()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=V}_$AI(t,e=this,r,s){const i=this.strings;let o=!1;if(void 0===i)t=G(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const s=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=G(this,s[r+n],e,n),a===q&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class rt extends Y{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===q)return;const r=this._$AH,s=t===V&&r!==V||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==V&&(r===V||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const it=w.litHtmlPolyfillSupport;it?.(Z,X),(w.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;class nt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const s=r?.renderBefore??e;let i=s._$litPart$;if(void 0===i){const t=r?.renderBefore??null;s._$litPart$=i=new X(e.insertBefore(M(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.1");const ct=t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},dt=(t=lt,e,r)=>{const{kind:s,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),"accessor"===s){const{name:s}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(s,i,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=r;return function(r){const i=this[s];e.call(this,r),this.requestUpdate(s,i,t)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,r)=>"object"==typeof r?dt(t,e,r):((t,e,r)=>{const s=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),s?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}function pt(t){return ht({...t,state:!0,attribute:!1})}const ut=n`
  :host {
    display: block;
  }

  ha-card {
    height: 100%;
  }

  .card-header {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color);
  }

  .card-header .name {
    font-size: 20px;
    font-weight: 500;
    color: var(--text-primary-color);
  }

  .backup-card-content {
    padding: 16px;
  }

  ha-alert {
    margin: 0;
  }

  .error-alert {
    margin-bottom: 16px;
  }
`;n`
  .backup-item {
    padding: 12px;
    border-bottom: 1px solid var(--divider-color);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .backup-item:last-child {
    border-bottom: none;
  }

  .backup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .backup-name {
    font-weight: 500;
    color: var(--text-primary-color);
    font-size: 16px;
    flex: 1;
  }

  .backup-details {
    display: flex;
    gap: 16px;
    color: var(--text-secondary-color);
    font-size: 14px;
    flex-wrap: wrap;
  }

  .backup-detail {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .backup-notes {
    color: var(--text-secondary-color);
    font-size: 14px;
    font-style: italic;
    word-wrap: break-word;
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    .backup-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .backup-details {
      flex-direction: column;
      gap: 4px;
    }
  }
`;const ft=n`
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .badge-success {
    background: var(--success-color, #4caf50);
    color: white;
  }

  .badge-failed {
    background: var(--error-color, #f44336);
    color: white;
  }

  .badge-partial {
    background: var(--warning-color, #ff9800);
    color: white;
  }

  ha-icon {
    --mdc-icon-size: 16px;
  }
`,mt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function gt(t){if(!t||"string"!=typeof t)return!1;const e=new Date(t);return!isNaN(e.getTime())}function bt(t){if(!gt(t))return"Invalid date";const e=new Date(t);return`${e.getDate()} ${mt[e.getMonth()]}`}function $t(t){return"number"==typeof t&&!isNaN(t)&&t>=0}function vt(t){if("string"==typeof t){const e=t.toLowerCase();if("success"===e||"ok"===e||"completed"===e)return"success";if("partial"===e||"warning"===e||"warn"===e)return"partial";if("failed"===e||"fail"===e||"error"===e)return"failed"}return console.warn(`Invalid outcome value: ${t}, defaulting to 'failed'`),"failed"}const yt={show_header:!0,title:"Backup Status",show_errors:!1};function _t(t,e){const r=[];t.name&&"string"==typeof t.name||r.push(`Entry ${e}: Missing or invalid 'name'`),t.start&&"string"==typeof t.start?gt(t.start)||r.push(`Entry ${e}: Invalid date format for 'start'`):r.push(`Entry ${e}: Missing or invalid 'start'`);const s="number"==typeof t.duration?t.duration:0;if($t(s)||r.push(`Entry ${e}: Invalid duration`),r.length>0)return{entry:null,error:r.join("; ")};try{return{entry:{name:t.name.trim(),start:t.start,duration:Math.max(0,s),outcome:vt(t.outcome),notes:"string"==typeof t.notes?t.notes.trim():"",size:"string"==typeof t.size?t.size.trim():void 0},error:null}}catch(t){return{entry:null,error:`Entry ${e}: ${t}`}}}function xt(t){const e={entries:[],errors:[]};if(!t)return e.errors.push("Entity state is undefined"),e;if(!t.attributes)return e.errors.push("Entity has no attributes"),e;if(t.attributes.backups&&Array.isArray(t.attributes.backups))return t.attributes.backups.forEach((t,r)=>{const{entry:s,error:i}=_t(t,r);s?e.entries.push(s):i&&e.errors.push(i)}),e;if(t.attributes.name||t.attributes.start){const{entry:r,error:s}=_t(t.attributes,0);return r?e.entries.push(r):s&&e.errors.push(s),e}return e.errors.push("No backup data found in entity attributes"),e}let wt=class extends nt{constructor(){super(...arguments),this.outcome="success"}render(){return L`
      <div class="badge badge-${this.outcome}">
        <ha-icon icon="${function(t){switch(t){case"success":return"mdi:check-circle";case"partial":return"mdi:alert";case"failed":return"mdi:close-circle";default:return"mdi:help-circle"}}(this.outcome)}"></ha-icon>
        <span>${this.outcome}</span>
      </div>
    `}};wt.styles=ft,t([ht({type:String})],wt.prototype,"outcome",void 0),wt=t([ct("outcome-badge")],wt),customElements.get("outcome-badge")||customElements.define("outcome-badge",wt);let At=class extends nt{constructor(){super(...arguments),this.backups=[]}_handleRowClick(t){this.dispatchEvent(new CustomEvent("row-click",{detail:{backup:t},bubbles:!0,composed:!0}))}render(){return L`
      <div class="table-header">
        <div>Name</div>
        <div>Date</div>
        <div>Status</div>
      </div>
      ${this.backups.map(t=>L`
        <div
          class="table-row"
          @click=${()=>this._handleRowClick(t)}
          role="button"
          tabindex="0"
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._handleRowClick(t))}}
          aria-label="View backup details for ${t.name}">
          <div class="cell-name">${t.name}</div>
          <div class="cell-date">${bt(t.start)}</div>
          <div class="cell-outcome">
            <outcome-badge .outcome=${t.outcome}></outcome-badge>
          </div>
        </div>
      `)}
    `}};At.styles=n`
    :host {
      display: block;
    }

    .table-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color);
      font-weight: 500;
      color: var(--text-primary-color);
      font-size: 14px;
    }

    .table-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color);
      cursor: pointer;
      transition: background-color 0.2s;
      min-height: 44px;
      align-items: center;
    }

    .table-row:last-child {
      border-bottom: none;
    }

    .table-row:hover {
      background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    }

    .cell-name {
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary-color);
    }

    .cell-date {
      color: var(--text-secondary-color);
      font-size: 14px;
    }

    .cell-outcome {
      display: flex;
      justify-content: flex-start;
    }

    @media (max-width: 600px) {
      .table-header,
      .table-row {
        grid-template-columns: 1.5fr 1fr 1fr;
      }

      .cell-name {
        font-size: 14px;
      }

      .cell-date {
        font-size: 13px;
      }
    }
  `,t([ht({type:Array})],At.prototype,"backups",void 0),t([ht({type:Object})],At.prototype,"hass",void 0),At=t([ct("backup-table")],At);let kt=class extends nt{constructor(){super(...arguments),this.open=!1,this.backups=[]}_close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._close()}render(){return this.open?L`
      <div class="modal-backdrop" @click=${this._handleBackdropClick}>
        <div class="modal-container" @click=${t=>t.stopPropagation()}>
          <div class="modal-header">
            <h2>Backup Details</h2>
            <button
              class="close-button"
              @click=${this._close}
              aria-label="Close">
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="modal-content">
            <div class="table-header">
              <div>Name</div>
              <div>Date/Time</div>
              <div>Size</div>
              <div>Duration</div>
              <div>Status</div>
            </div>
            ${this.backups.map(t=>L`
              <div class="backup-row">
                <div class="table-row">
                  <div class="cell-name">${t.name}</div>
                  <div class="cell-datetime">${function(t){if(!gt(t))return"Invalid date";const e=new Date(t),r=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return`${bt(t)} ${r}:${s}`}(t.start)}</div>
                  <div class="cell-size">${t.size||"-"}</div>
                  <div class="cell-duration">${function(t){if(!$t(t))return"Invalid duration";if(0===t)return"0s";const e=Math.floor(t/3600),r=Math.floor(t%3600/60),s=Math.floor(t%60),i=[];return e>0&&i.push(`${e}h`),r>0&&i.push(`${r}m`),(s>0||0===i.length)&&i.push(`${s}s`),i.join(" ")}(t.duration)}</div>
                  <div class="cell-outcome">
                    <outcome-badge .outcome=${t.outcome}></outcome-badge>
                  </div>
                </div>
                ${t.notes?L`
                  <div class="table-row-notes">${t.notes}</div>
                `:""}
              </div>
            `)}
          </div>
        </div>
      </div>
    `:L``}};kt.styles=n`
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(2px);
    }

    .modal-container {
      background: var(--card-background-color, #fff);
      max-width: 90vw;
      max-height: 90vh;
      width: 1200px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                  0 24px 38px 3px rgba(0, 0, 0, 0.14),
                  0 9px 46px 8px rgba(0, 0, 0, 0.12);
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      border-bottom: 1px solid var(--divider-color);
    }

    .modal-header h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      color: var(--text-primary-color);
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      color: var(--text-primary-color);
    }

    .close-button:hover {
      background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    }

    .modal-content {
      overflow-y: auto;
      padding: 16px;
    }

    .table-header {
      display: grid;
      grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
      font-weight: 500;
      color: var(--text-primary-color);
      font-size: 14px;
      position: sticky;
      top: 0;
      background: var(--card-background-color, #fff);
      z-index: 1;
    }

    .backup-row {
      border-bottom: 1px solid var(--divider-color);
    }

    .backup-row:last-child {
      border-bottom: none;
    }

    .table-row {
      display: grid;
      grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr;
      gap: 12px;
      padding: 12px 16px;
      align-items: center;
    }

    .table-row-notes {
      grid-column: 1 / -1;
      padding: 0 16px 12px 40px;
      color: var(--text-secondary-color);
      font-style: italic;
      font-size: 14px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .cell-name {
      font-size: 15px;
      font-weight: 500;
      color: var(--text-primary-color);
    }

    .cell-datetime,
    .cell-size,
    .cell-duration {
      color: var(--text-secondary-color);
      font-size: 14px;
    }

    .cell-outcome {
      display: flex;
      justify-content: flex-start;
    }

    @media (max-width: 768px) {
      .modal-container {
        max-width: 95vw;
        max-height: 95vh;
      }

      .table-header {
        display: none;
      }

      .backup-row {
        padding: 16px;
        border-bottom: 2px solid var(--divider-color);
      }

      .table-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0;
      }

      .table-row > div {
        display: flex;
        gap: 8px;
      }

      .cell-name {
        font-size: 16px;
        margin-bottom: 8px;
      }

      .cell-datetime::before {
        content: "Date/Time:";
        font-weight: 500;
        color: var(--text-primary-color);
      }

      .cell-size::before {
        content: "Size:";
        font-weight: 500;
        color: var(--text-primary-color);
      }

      .cell-duration::before {
        content: "Duration:";
        font-weight: 500;
        color: var(--text-primary-color);
      }

      .cell-outcome::before {
        content: "Status:";
        font-weight: 500;
        color: var(--text-primary-color);
      }

      .table-row-notes {
        padding: 8px 0 0 0;
        margin-top: 8px;
        border-top: 1px solid var(--divider-color);
      }
    }
  `,t([ht({type:Boolean})],kt.prototype,"open",void 0),t([ht({type:Array})],kt.prototype,"backups",void 0),t([ht({type:Object})],kt.prototype,"hass",void 0),kt=t([ct("backup-modal")],kt);let Et=class extends nt{constructor(){super(...arguments),this._backups=[],this._errors=[],this._modalOpen=!1}setConfig(t){this._config=function(t){if(!t)throw new Error("Configuration is required");const e=t.entity&&"string"==typeof t.entity,r=t.entities&&Array.isArray(t.entities)&&t.entities.length>0;if(!e&&!r)throw new Error('Either "entity" (string) or "entities" (array) is required');if(e&&r)throw new Error('Cannot specify both "entity" and "entities". Use only one.');if(r){const e=t.entities.filter(t=>"string"!=typeof t);if(e.length>0)throw new Error("All entities must be strings")}return{...yt,...t,type:t.type||"custom:backup-card"}}(t)}getCardSize(){return 2+this._backups.length}updated(t){super.updated(t),t.has("hass")&&this._config&&this._updateBackups()}_updateBackups(){if(!this.hass||!this._config)return;const t=[],e=[],r=this._config.entities?this._config.entities:this._config.entity?[this._config.entity]:[];for(const s of r){const r=this.hass.states[s];if(!r){e.push(`Entity "${s}" not found`);continue}const i=xt(r);t.push(...i.entries);const o=i.errors.map(t=>`${s}: ${t}`);e.push(...o)}this._backups=t,this._errors=e,this._errors.length>0&&!this._config.show_errors&&this._errors.forEach(t=>console.warn(`[backup-card] ${t}`))}render(){return this._config&&this.hass?L`
      <ha-card>
        ${this._renderHeader()}
        <div class="backup-card-content">
          ${this._renderErrors()}
          ${this._renderBackups()}
        </div>
      </ha-card>
      ${this._modalOpen?L`
        <backup-modal
          .open=${this._modalOpen}
          .backups=${this._backups}
          .hass=${this.hass}
          @close-modal=${this._closeModal}>
        </backup-modal>
      `:""}
    `:L``}_renderHeader(){return this._config.show_header?L`
      <div class="card-header">
        <div class="name">${this._config.title||"Backup Status"}</div>
      </div>
    `:""}_renderErrors(){return this._config.show_errors&&0!==this._errors.length?L`
      <div class="error-alert">
        <ha-alert alert-type="warning">
          <strong>Data validation errors:</strong>
          <ul>
            ${this._errors.map(t=>L`<li>${t}</li>`)}
          </ul>
        </ha-alert>
      </div>
    `:""}_renderBackups(){return 0===this._backups.length?L`
        <ha-alert alert-type="info">No backup data available</ha-alert>
      `:L`
      <backup-table
        .backups=${this._backups}
        .hass=${this.hass}
        @row-click=${this._handleRowClick}>
      </backup-table>
    `}_handleRowClick(){this._modalOpen=!0}_closeModal(){this._modalOpen=!1}static getStubConfig(){return{type:"custom:backup-card",entities:["sensor.backup_pihole","sensor.backup_database","sensor.backup_home_assistant"],title:"Backup Status",show_header:!0,show_errors:!1}}};Et.styles=ut,t([ht({attribute:!1})],Et.prototype,"hass",void 0),t([pt()],Et.prototype,"_config",void 0),t([pt()],Et.prototype,"_backups",void 0),t([pt()],Et.prototype,"_errors",void 0),t([pt()],Et.prototype,"_modalOpen",void 0),Et=t([ct("backup-card")],Et),customElements.get("backup-card")||customElements.define("backup-card",Et),window.customCards=window.customCards||[],window.customCards.push({type:"custom:backup-card",name:"Backup Card",description:"Shows Pi-hole backup status",preview:!0});export{Et as BackupCard};
