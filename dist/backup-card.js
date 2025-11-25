function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,$=f.trustedTypes,m=$?$.emptyScript:"",_=f.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,e)=>!c(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??b)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[g("elementProperties")]=new Map,A[g("finalized")]=new Map,_?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.1.1");const E=globalThis,w=E.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+x,P=`<${C}>`,U=document,O=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,j=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,F=U.createTreeWalker(U,129);function J(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,l=0;for(;l<s.length&&(o.lastIndex=l,c=o.exec(s),null!==c);)l=o.lastIndex,o===H?"!--"===c[1]?o=R:void 0!==c[1]?o=j:void 0!==c[2]?(B.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=D):void 0!==c[3]&&(o=D):o===D?">"===c[0]?(o=r??H,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?D:'"'===c[3]?I:z):o===I||o===z?o=D:o===R||o===j?o=H:(o=D,r=void 0);const d=o===D&&t[e+1].startsWith("/>")?" ":"";n+=o===H?s+P:h>=0?(i.push(a),s.slice(0,h)+S+s.slice(h)+x+d):s+x+(-2===h?e:d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,h]=K(t,e);if(this.el=Z.createElement(c,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=h[n++],s=i.getAttribute(t).split(x),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){if(e===q)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=M(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=F.nextNode(),n++)}return F.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Z(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new X(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=G(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=G(this,i[s+o],e,o),a===q&&(a=this._$AH[o]),n||=!M(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends Y{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===q)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=E.litHtmlPolyfillSupport;rt?.(Z,X),(E.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;class ot extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new X(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.1");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},lt=(t=ht,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function dt(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return dt({...t,state:!0,attribute:!1})}const ut=o`
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
`,ft=o`
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
`,$t=o`
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
`;function mt(t){if(!t||"string"!=typeof t)return!1;const e=new Date(t);return!isNaN(e.getTime())}function _t(t){return"number"==typeof t&&!isNaN(t)&&t>=0}function gt(t){if("string"==typeof t){const e=t.toLowerCase();if("success"===e||"ok"===e||"completed"===e)return"success";if("partial"===e||"warning"===e||"warn"===e)return"partial";if("failed"===e||"fail"===e||"error"===e)return"failed"}return console.warn(`Invalid outcome value: ${t}, defaulting to 'failed'`),"failed"}const yt={show_header:!0,title:"Backup Status",show_errors:!1};function bt(t,e){const s=[];t.name&&"string"==typeof t.name||s.push(`Entry ${e}: Missing or invalid 'name'`),t.start&&"string"==typeof t.start?mt(t.start)||s.push(`Entry ${e}: Invalid date format for 'start'`):s.push(`Entry ${e}: Missing or invalid 'start'`);const i="number"==typeof t.duration?t.duration:0;if(_t(i)||s.push(`Entry ${e}: Invalid duration`),s.length>0)return{entry:null,error:s.join("; ")};try{return{entry:{name:t.name.trim(),start:t.start,duration:Math.max(0,i),outcome:gt(t.outcome),notes:"string"==typeof t.notes?t.notes.trim():""},error:null}}catch(t){return{entry:null,error:`Entry ${e}: ${t}`}}}function vt(t){const e={entries:[],errors:[]};if(!t)return e.errors.push("Entity state is undefined"),e;if(!t.attributes)return e.errors.push("Entity has no attributes"),e;if(t.attributes.backups&&Array.isArray(t.attributes.backups))return t.attributes.backups.forEach((t,s)=>{const{entry:i,error:r}=bt(t,s);i?e.entries.push(i):r&&e.errors.push(r)}),e;if(t.attributes.name||t.attributes.start){const{entry:s,error:i}=bt(t.attributes,0);return s?e.entries.push(s):i&&e.errors.push(i),e}return e.errors.push("No backup data found in entity attributes"),e}let At=class extends ot{constructor(){super(...arguments),this.outcome="success"}render(){return L`
      <div class="badge badge-${this.outcome}">
        <ha-icon icon="${function(t){switch(t){case"success":return"mdi:check-circle";case"partial":return"mdi:alert";case"failed":return"mdi:close-circle";default:return"mdi:help-circle"}}(this.outcome)}"></ha-icon>
        <span>${this.outcome}</span>
      </div>
    `}};At.styles=$t,t([dt({type:String})],At.prototype,"outcome",void 0),At=t([ct("outcome-badge")],At),customElements.get("outcome-badge")||customElements.define("outcome-badge",At);let Et=class extends ot{render(){if(!this.backup)return L``;const t=this.hass?.locale?.language||"en-US",e=this.hass?.locale?.time_format||"24";return L`
      <div class="backup-item">
        <div class="backup-header">
          <span class="backup-name">${this.backup.name}</span>
          <outcome-badge .outcome=${this.backup.outcome}></outcome-badge>
        </div>
        <div class="backup-details">
          <div class="backup-detail">
            <span>${function(t,e="en-US",s="24"){if(!mt(t))return"Invalid date";try{const i=new Date(t),r="12"===s,n=new Intl.DateTimeFormat(e,{year:"numeric",month:"short",day:"numeric"}),o=new Intl.DateTimeFormat(e,{hour:"numeric",minute:"2-digit",hour12:r});return`${n.format(i)} ${o.format(i)}`}catch(t){return console.warn("Error formatting date:",t),"Invalid date"}}(this.backup.start,t,e)}</span>
          </div>
          <div class="backup-detail">
            <span>Duration: ${function(t){if(!_t(t))return"Invalid duration";if(0===t)return"0s";const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),r=[];return e>0&&r.push(`${e}h`),s>0&&r.push(`${s}m`),(i>0||0===r.length)&&r.push(`${i}s`),r.join(" ")}(this.backup.duration)}</span>
          </div>
        </div>
        ${this.backup.notes?L`
          <div class="backup-notes">${this.backup.notes}</div>
        `:""}
      </div>
    `}};Et.styles=ft,t([dt({type:Object})],Et.prototype,"backup",void 0),t([dt({type:Object})],Et.prototype,"hass",void 0),Et=t([ct("backup-item")],Et),customElements.get("backup-item")||customElements.define("backup-item",Et);let wt=class extends ot{constructor(){super(...arguments),this._backups=[],this._errors=[]}setConfig(t){this._config=function(t){if(!t)throw new Error("Configuration is required");const e=t.entity&&"string"==typeof t.entity,s=t.entities&&Array.isArray(t.entities)&&t.entities.length>0;if(!e&&!s)throw new Error('Either "entity" (string) or "entities" (array) is required');if(e&&s)throw new Error('Cannot specify both "entity" and "entities". Use only one.');if(s){const e=t.entities.filter(t=>"string"!=typeof t);if(e.length>0)throw new Error("All entities must be strings")}return{...yt,...t,type:t.type||"custom:backup-card"}}(t)}getCardSize(){return 2+this._backups.length}updated(t){super.updated(t),t.has("hass")&&this._config&&this._updateBackups()}_updateBackups(){if(!this.hass||!this._config)return;const t=[],e=[],s=this._config.entities?this._config.entities:this._config.entity?[this._config.entity]:[];for(const i of s){const s=this.hass.states[i];if(!s){e.push(`Entity "${i}" not found`);continue}const r=vt(s);t.push(...r.entries);const n=r.errors.map(t=>`${i}: ${t}`);e.push(...n)}this._backups=t,this._errors=e,this._errors.length>0&&!this._config.show_errors&&this._errors.forEach(t=>console.warn(`[backup-card] ${t}`))}render(){return this._config&&this.hass?L`
      <ha-card>
        ${this._renderHeader()}
        <div class="backup-card-content">
          ${this._renderErrors()}
          ${this._renderBackups()}
        </div>
      </ha-card>
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
      ${this._backups.map(t=>L`
        <backup-item .backup=${t} .hass=${this.hass}></backup-item>
      `)}
    `}static getStubConfig(){return{type:"custom:backup-card",entities:["sensor.backup_pihole","sensor.backup_database","sensor.backup_home_assistant"],title:"Backup Status",show_header:!0,show_errors:!1}}};wt.styles=ut,t([dt({attribute:!1})],wt.prototype,"hass",void 0),t([pt()],wt.prototype,"_config",void 0),t([pt()],wt.prototype,"_backups",void 0),t([pt()],wt.prototype,"_errors",void 0),wt=t([ct("backup-card")],wt),customElements.get("backup-card")||customElements.define("backup-card",wt),window.customCards=window.customCards||[],window.customCards.push({type:"custom:backup-card",name:"Backup Card",description:"Shows Pi-hole backup status",preview:!0});export{wt as BackupCard};
