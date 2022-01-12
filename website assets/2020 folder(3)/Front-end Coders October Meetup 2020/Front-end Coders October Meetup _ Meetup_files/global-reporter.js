(()=>{"use strict";var n,e,r,t;!function(n){n.Lax="lax",n.None="none",n.Strict="strict"}(n||(n={})),function(n){n.NO_WINDOW="NO_WINDOW"}(e||(e={}));class i extends Error{constructor(n,e){var r,t;super(n),this.name=null!==(r=null==e?void 0:e.name)&&void 0!==r?r:this.name,this.code=null==e?void 0:e.code,this.additionalInformation=null==e?void 0:e.additionalInformation,this.handled=null!==(t=null==e?void 0:e.handled)&&void 0!==t&&t}}(t=r||(r={})).UNHANDLED_EXCEPTION="UNHANDLED_EXCEPTION",t.ERROR_LIMIT_EXCEEDED="ERROR_LIMIT_EXCEEDED",t.WARNING_LIMIT_EXCEEDED="WARNING_LIMIT_EXCEEDED";var o,a=0,E=!1;!function(n){n.REQUEST_TIMEOUT_ERROR="REQUEST_TIMEOUT_ERROR",n.REQUEST_FORMAT_ERROR="REQUEST_FORMAT_ERROR",n.RESPONSE_ALREADY_SENT="RESPONSE_ALREADY_SENT"}(o||(o={}));class s{constructor(){this._subscribers=[]}add(n){this._subscribers.push(n)}unsubscribe(){this._subscribers.forEach((n=>n.unsubscribe()))}}var d,_=()=>{};class R{constructor(n){this._setupFn=n}subscribe(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,i=!0,o={next:n=>{i&&e(n)},complete:()=>{i&&(n&&n(),t(),i=!1)},error:n=>{i&&(r(n),i=!1)}};n=this._setupFn(o),i||n&&n();var a=new s;return a.add({unsubscribe:()=>{n&&n(),i=!1}}),a}}!function(n){n.LAUNCHER_READY="LAUNCHER_READY",n.CONTROLLER_READY="CONTROLLER_READY",n.PLUGIN_RUNTIME_READY="PLUGIN_RUNTIME_READY",n.PLUGIN_READY="PLUGIN_READY"}(d||(d={}));var L,c,N,I,T,u,l,C,O,S,A,v,P,p,m,g,h,D=n=>new R((e=>{var r;return new Promise((n=>{window.rokt_wsdk_debug&&n(window.rokt_wsdk_debug);var e=r=>{var t,i;"ROKT_WSDK_DEBUG"===(null===(t=r.data)||void 0===t?void 0:t.from)&&"READY"===(null===(i=r.data)||void 0===i?void 0:i.type)&&n(window.rokt_wsdk_debug),window.removeEventListener("message",e)};window.addEventListener("message",e)})).then((t=>{r=t[n].subscribe((n=>e.next(n)))})),()=>r&&r.unsubscribe()}));D("controller$"),D("launcher$"),function(n){n.HandlerExists="HandlerExists"}(L||(L={})),(N=c||(c={})).PUT_METRIC_EVENT="[C] PUT_METRIC_EVENT",N.LOG="[C] LOG",N.LOG_METRIC="[C] LOG_METRIC",N.PUT_INFO="[C] PUT_INFO",N.CONTROLLER_INIT="[C] CONTROLLER_INIT",N.SELECT_PLACEMENTS="[C] SELECT_PLACEMENTS",N.CLOSE_PLACEMENT="[C] CLOSE_PLACEMENT",N.GET_PLACEMENT_DETAILS="[C] GET_PLACEMENT_DETAILS",N.ISSUE_SIGNAL="[C] ISSUE_SIGNAL",N.ERROR="[C] ERROR",N.PLACEMENT_PLACED="[C] PLACEMENT_PLACED",N.FRAME_LOAD_END="[C] FRAME_LOAD_END",N.CREATE_PLUGIN="[C] CREATE_PLUGIN",N.PLUGIN_TO_PLUGIN_OUTBOUND="[C] PLUGIN_TO_PLUGIN_OUTBOUND",N.PLUGIN_REMOVED="[C] PLUGIN_REMOVED",N.SET_ATTRIBUTES="[C] SET_ATTRIBUTES",function(n){n.EVENT_RESPONSE="EVENT_RESPONSE",n.PLACEMENTS_RESPONSE="PLACEMENTS_RESPONSE",n.SESSION_ERROR="SESSION_RESPONSE",n.CREATE_CHILD_PLUGIN="CREATE_CHILD_PLUGIN",n.PLUGIN_CONTAINER_LOAD="PLUGIN_CONTAINER_LOAD",n.CONTROLLER_CONFIGURATION="CONTROLLER_CONFIGURATION"}(I||(I={})),function(n){n.SelectPlacement="SelectPlacement",n.ValidationErrorNoURL="ValidationErrorNoURL",n.ValidationErrorNoTagId="ValidationErrorNoTagId"}(T||(T={})),function(n){n.ValidationErrorNoInitTimestamp="ValidationErrorNoInitTimestamp",n.ValidationErrorInvalidInitTimestamp="ValidationErrorInvalidInitTimestamp",n.ValidationErrorNoTagID="ValidationErrorNoTagID"}(u||(u={})),function(n){n.ControllerFrameName="name",n.InitTimestamp="initTimestamp",n.LauncherInstanceId="launcherInstanceId",n.NoDeviceId="noDeviceId",n.Sandbox="sandbox",n.SessionId="sessionId",n.TagId="tagId",n.UserAgent="userAgent",n.CustomHeaders="customHeaders",n.IntegrationType="integrationType",n.Integration="integration",n.URL="url",n.SessionRecogniser="sessionRecogniser",n.ServiceURLOverride="serviceUrlOverride",n.LauncherVersion="launcherVersion"}(l||(l={})),function(n){n.LAUNCHER_VERSION="LAUNCHER_VERSION"}(C||(C={})),function(n){n.CTRL_LOAD_COMPLETE="CTRL_LOAD_COMPLETE",n.CONTROLLER_START="CONTROLLER_START",n.SELECT_PLACEMENTS_START="SELECT_PLACEMENTS_START",n.SELECT_PLACEMENTS_END="SELECT_PLACEMENTS_END"}(O||(O={})),function(n){n.LAUNCHER="LAUNCHER",n.PLUGIN="PLUGIN",n.WIDGET="WIDGET",n.CALENDAR="CALENDAR"}(S||(S={})),(p=A||(A={})).Plugin="plugin",p.Standalone="standalone",p.Preload="preload",(P=v||(v={})).InitTimestamp="init_timestamp",P.PluginInstanceId="plugin_instance_id",P.SelectionInstanceId="selection_instance_id",P.LauncherInstanceId="launcher_instance_id",P.Sandbox="sandbox",P.IntegrationType="integration_type",P.ChildPlugin="child_plugin",P.RoktTagId="rokt_tag_id",P.RoktSessionId="rokt_session_id",P.ParentInstanceId="parent_instance_id",P.PageInstanceId="page_instance_id",P.Language="language",function(n){n.PLUGIN_LOAD="PLUGIN_LOAD",n.PARSE_PLUGIN_URL="PARSE_PLUGIN_URL"}(m||(m={}));class U{constructor(n){this._window=n,this._errorLimit=5,this._errorCount=0,this._errorReporter=this._defaultReporter,this._window.addEventListener("error",(n=>{var{error:e}=n;this._reportError(e)})),this._window.addEventListener("unhandledrejection",(n=>{var{reason:e}=n;this._reportError(e)}))}set(n){this._errorReporter=n}_reportError(n){var e=n;n&&(n instanceof Error||n.code)||(e=new i(JSON.stringify(n))),this._errorCount<this._errorLimit?(e.code||(e.code=r.UNHANDLED_EXCEPTION),this._errorReporter(e)):this._errorCount===this._errorLimit&&(e.code=r.WARNING_LIMIT_EXCEEDED,this._errorReporter(e)),this._errorCount++}_defaultReporter(n){var e,t,i=new URLSearchParams(this._window.name),o=null!==(t=null!==(e=i.get(l.TagId))&&void 0!==e?e:i.get(v.RoktTagId))&&void 0!==t?t:"",s="true"===i.get(l.Sandbox);(n=>{var e,t,{useSandbox:i=!1,name:o,code:s,message:d,stack:_,tagId:R,additionalInformation:L={},bypassErrorLimit:c}=n;t=function*(){var n;if(!c&&a>=10){if(E)return;s=r.ERROR_LIMIT_EXCEEDED,E=!0}a++;var e=(1e7*Math.random()).toFixed(0).toString(),t=new URLSearchParams;t.append("use_sandbox",i.toString()),t.append("error_id",e),t.append("name",o),t.append("message",d),t.append("rokt_tag_id",R),t.append("partner_url",window.location.href),s&&t.append("code",s),_&&(_.length>400&&(_=_.substring(0,400)),t.append("stack",_)),L.userAgent=L.userAgent||window.navigator.userAgent,t.append("additional_information",JSON.stringify(L));var N=document.createElement("iframe");N.src="".concat("https://apps.rokt.com/wsdk","/reporter/index.html?").concat(t.toString()),N.style.display="none";var I=new Promise((n=>{var r=t=>{var i,o,a;"Rokt.Reporter.Close"!==(null===(i=t.data)||void 0===i?void 0:i.action)&&(null===(a=null===(o=t.data)||void 0===o?void 0:o.payload)||void 0===a?void 0:a.errorId)!==e||(n(),window.removeEventListener("message",r))};window.addEventListener("message",r)}));(window.document.body||window.document.head).appendChild(N),yield I,null===(n=N.parentElement)||void 0===n||n.removeChild(N)},new((e=void 0)||(e=Promise))((function(n,r){function i(n){try{a(t.next(n))}catch(n){r(n)}}function o(n){try{a(t.throw(n))}catch(n){r(n)}}function a(r){var t;r.done?n(r.value):(t=r.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,o)}a((t=t.apply(void 0,[])).next())}))})(Object.assign(Object.assign({},n),{message:n.message,name:n.name,stack:n.stack,tagId:o,useSandbox:s}))}}h=function*(){var n=(()=>{if("undefined"==typeof window)throw new Error(e.NO_WINDOW);return window})();n.roktReporter=new U(n)},new((g=void 0)||(g=Promise))((function(n,e){function r(n){try{i(h.next(n))}catch(n){e(n)}}function t(n){try{i(h.throw(n))}catch(n){e(n)}}function i(e){var i;e.done?n(e.value):(i=e.value,i instanceof g?i:new g((function(n){n(i)}))).then(r,t)}i((h=h.apply(void 0,[])).next())}))})();
//# sourceMappingURL=global-reporter.js.map