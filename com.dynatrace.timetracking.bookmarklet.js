!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var i,o,r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function c(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((i=i.apply(t,e||[])).next())}))};i=[n,e,n(1)],void 0===(o=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n="com_kamilsarelo_dynatrace_timetracking_css",i="com_kamilsarelo_dynatrace_timetracking_html",o="com_kamilsarelo_dynatrace_timetracking_input",a="com_kamilsarelo_dynatrace_timetracking_select_type",c="com_kamilsarelo_dynatrace_timetracking_action_book",s="com_kamilsarelo_dynatrace_timetracking_action_clear",d="com_kamilsarelo_dynatrace_timetracking_action_close",u="com_kamilsarelo_dynatrace_timetracking_loader",l=new Map;let m;function f(t){return isNaN(+t.charAt(0))||isNaN(+t.charAt(1))||isNaN(+t.charAt(3))||isNaN(+t.charAt(4))}function _(t){return isNaN(t)||t<0||t>23}function y(t){return isNaN(t)||t<0||t>59}function P(t){if(t.length<=23||isNaN(+t.charAt(0))||"|"!==t.charAt(10)||"|"!==t.charAt(16)||"|"!==t.charAt(22))return;const e=t.substr(0,10),n=t.substr(11,5),i=t.substr(17,5),o=t.indexOf("|",23);if(-1===o)return;const r=t.substring(23,o);if(""===r)return;const a=t.substr(o+1);if(""===a)return;if("-"!==e.charAt(4)||"-"!==e.charAt(7))return;if(isNaN(+e.charAt(0))||isNaN(+e.charAt(1))||isNaN(+e.charAt(2))||isNaN(+e.charAt(3))||isNaN(+e.charAt(5))||isNaN(+e.charAt(6))||isNaN(+e.charAt(8))||isNaN(+e.charAt(9)))return;const c=(new Date).getFullYear(),s=parseInt(e.substr(0,4),10);if(isNaN(s)||s<c||s>c)return;const d=parseInt(e.substr(5,2),10);if(isNaN(s)||d<1||d>12)return;const u=parseInt(e.substr(8,2),10);if(isNaN(s)||u<1||u>31)return;if(!function(t,e,n){const i=new Date;return i.setFullYear(t,e-1,n),i.getFullYear()===t&&i.getMonth()===e-1&&i.getDate()===n}(s,d,u))return;if(":"!==n.charAt(2)||":"!==i.charAt(2))return;if(f(n)||f(i))return;const l=parseInt(n.substr(0,2),10),m=parseInt(i.substr(0,2),10);if(_(l)||_(m))return;const P=parseInt(n.substr(3,2),10),h=parseInt(i.substr(3,2),10);return y(P)||y(h)||l>m||l===m&&P>=h?void 0:{jiraKey:r,APP_BeginTime:e+"T"+n+":00",APP_EndTime:e+"T"+i+":00",APP_Description:a}}function h(t,e){[c,s,d].forEach(t=>{document.getElementById(t).disabled=!e}),t.contentEditable="true",t.focus(),document.getElementById(u).style.visibility=e?"hidden":"visible"}function p(){[i,n].forEach(t=>{document.querySelectorAll("#"+t).forEach(t=>{t.parentNode.removeChild(t)})})}function v(){return r(this,void 0,void 0,(function*(){const t=document.getElementById(o);t.querySelectorAll("span").forEach(e=>{t.removeChild(e)});const e=t.innerText;if(0===e.trim().length)return;h(t,!1);const n=document.getElementById(a),i=n.options[n.selectedIndex].value;let c;t.innerHTML="";const s=e.split(/\r\n|\r|\n/g);setTimeout((function e(n){return r(this,void 0,void 0,(function*(){if(c&&(t.innerHTML=(t.innerHTML?t.innerHTML+"<br/>":"")+(n?`<span class="pill" style="background-color:${"done"===n?"green":"red"};">s${n}</span>`:"")+c,t.scrollTop=t.scrollHeight),s.length>0)c=s.shift(),yield function(t,e,n){return r(this,void 0,void 0,(function*(){if(t=t.trim()){const i=P(t);void 0!==i?(i.USR_TimesheetTypeUuid=e,yield function(t,e){return r(this,void 0,void 0,(function*(){function n(){return r(this,void 0,void 0,(function*(){t.APP_UserDetailUuid=m,yield function(t,e){return r(this,void 0,void 0,(function*(){try{const n=`(APP_BeginTime eq datetime'${t.APP_BeginTime}' or APP_EndTime eq datetime'${t.APP_EndTime}') and APP_UserDetailUuid eq guid'${t.APP_UserDetailUuid}'`,i=yield g("/odata/APP_Timesheet?$filter="+n),o=JSON.parse(i);if(null==o?void 0:o.value)return o.value.length>0?(console.log("ERROR: APP_Timesheet entity with equal start- ("+t.APP_BeginTime+") and/or end-time ("+t.APP_EndTime+") exists"),void e("exists")):void(yield function(t,e){return r(this,void 0,void 0,(function*(){function n(){return r(this,void 0,void 0,(function*(){const n=l.get(t.jiraKey);t.APP_TaskUuid=n.APP_TaskUuid,t.APP_ProjectUuid=n.APP_ProjectUuid,yield function(t,e){return r(this,void 0,void 0,(function*(){const n=JSON.stringify({APP_BeginTime:t.APP_BeginTime,APP_EndTime:t.APP_EndTime,APP_Description:t.APP_Description,APP_TaskUuid:t.APP_TaskUuid,APP_ProjectUuid:t.APP_ProjectUuid,APP_UserDetailUuid:t.APP_UserDetailUuid,USR_TimesheetTypeUuid:t.USR_TimesheetTypeUuid});try{yield function(t,e){return r(this,void 0,void 0,(function*(){return T(t,"POST",e)}))}("/odata/APP_Timesheet",n),e("done")}catch(t){console.error("ERROR: in createEntity()",t),e(t.status||"error")}}))}(t,e)}))}if(l.has(t.jiraKey))yield n();else try{const i=JSON.parse(yield g(`/odata/APP_Task?$filter=APP_Code eq '${t.jiraKey}'&$select=APP_TaskUuid,APP_ProjectUuid`));if(i&&i.value){if(i.value.length>0)return l.set(t.jiraKey,{APP_TaskUuid:i.value[0].APP_TaskUuid,APP_ProjectUuid:i.value[0].APP_ProjectUuid}),void(yield n());console.log("ERROR: no APP_Task entity for specified Jira key ("+t.jiraKey+") available")}else console.log("ERROR: on JSON.parse() in queryTaskIdAndProjectIdForJiraKey()");e("error")}catch(t){console.error("ERROR: in queryTaskIdAndProjectIdForJiraKey()",t),e(t.status||"error")}}))}(t,e));console.log("ERROR: on JSON.parse() in checkIfEntityWithEqualBeginOrEndTimeAlreadyExists()"),e("error")}catch(t){console.log("ERROR: in checkIfEntityWithEqualBeginOrEndTimeAlreadyExists()",t),e(t.status||"error")}}))}(t,e)}))}if(m)yield n();else try{const t=JSON.parse(yield g("/shell/user"));if(t){if(t.useruuid)return m=t.useruuid,void(yield n());console.log("ERROR: no useruuid available")}else console.log("ERROR: on JSON.parse() in queryUserId()");e("error")}catch(t){console.log("ERROR: in queryUserId()",t),e(t.status||"error")}}))}(i,n)):n("invalid")}else n()}))}(c,i,e);else{h(t,!0);const e=document.querySelector('button[ng-click="refresh()"]');e&&e.click()}}))}),0)}))}function A(){return r(this,void 0,void 0,(function*(){p(),yield function(){return r(this,void 0,void 0,(function*(){return new Promise(t=>{const e=document.createElement("link");e.id=n,e.rel="stylesheet",e.type="text/css",e.href="https://christian-fischer.github.io/com.dynatrace.timetracking.bookmarklet.css?q="+Date.now(),e.media="all",e.onload=()=>{t()},document.head.appendChild(e)})}))}();const t=document.createElement("dummy");t.innerHTML=`\n\t\t\t\t\t<div id="${i}">\n\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_content">\n\t\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_header">\n\t\t\t\t\t\t\t\t<select id="${a}" class="filament-select-css">\n\t\t\t\t\t\t\t\t\t<option value="cd4f750b-85f8-41f8-b193-9c82e23f82eb" selected="selected">Office</option>\n\t\t\t\t\t\t\t\t\t<option value="0ad94cf7-955c-45dc-b49e-20be0f449b75">Home Office</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_main">\n\t\t\t\t\t\t\t\t<div id="${o}" contenteditable="true">\n\t\t\t\t\t\t\t\t\t&#xfeff;\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id="${u}">\n\t\t\t\t\t\t\t\t\t<div class="spin-wrapper">\n\t\t\t\t\t\t\t\t\t\t<div class="spinner">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_footer">\n\t\t\t\t\t\t\t\t<button id="${c}" class="pure-material-button-contained">Book</button>\n\t\t\t\t\t\t\t\t<button id="${s}" class="pure-material-button-outlined">Clear</button>\n\t\t\t\t\t\t\t\t<button id="${d}" class="pure-material-button-outlined">Close</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>`,document.body.appendChild(t.querySelector("div")),setTimeout(()=>{document.getElementById(o).focus()},0),document.getElementById(o).addEventListener("paste",t=>{var e;t.preventDefault(),document.execCommand("insertText",!1,null===(e=t.clipboardData)||void 0===e?void 0:e.getData("text/plain"))}),document.getElementById(c).onclick=()=>{v()},document.getElementById(s).onclick=()=>{const t=document.getElementById(o);t.innerHTML="",t.focus()},document.getElementById(d).onclick=()=>{p()},document.onkeydown=t=>{"Escape"===t.code&&(p(),document.onkeydown=t=>{})},window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING=!1}))}function g(t){return r(this,void 0,void 0,(function*(){return T(t)}))}function T(t,e,n){return r(this,void 0,void 0,(function*(){const i=new XMLHttpRequest;return new Promise((o,r)=>{i.onreadystatechange=()=>{4===i.readyState&&(i.status>=200&&i.status<300?o(i.responseText):r({status:i.status,statusText:i.statusText}))},i.open(e||"GET",t,!0),i.setRequestHeader("cache-control","no-cache"),i.setRequestHeader("cache-control","max-age=0"),i.setRequestHeader("pragma","no-cache"),"POST"===e?(i.setRequestHeader("Content-Type","application/json; charset=utf-8"),i.send(n)):i.send()})}))}r(void 0,void 0,void 0,(function*(){if(window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING)console.log("ERROR: bookmarklet is already running");else if(window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING=!0,console.log("bookmarklet called"),"https://dynatrace.timecockpit.com"!==window.location.origin){const t=document.createElement("dummy");t.innerHTML="\n\t\t\t<div style=\"position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 999; background-color: rgba(0, 0, 0, 0.66); display: grid;\">\n\t\t\t\t<div style=\"margin: auto; padding: 24px; box-sizing: border-box; font-size: 24px; background-color: yellow; border-radius: 4px; font-family: Roboto, 'Segoe UI', BlinkMacSystemFont, system-ui, -apple-system, Arial, Helvetica, sans-serif;\">\n\t\t\t\t\t...redirecting to ' + url + '. Run the bookmarklet again after the site loaded.\n\t\t\t\t</div>\n\t\t\t</div>",document.body.appendChild(t.querySelector("div")),window.setTimeout(()=>{window.location.href="https://dynatrace.timecockpit.com"},1e3)}else document.readyState&&"complete"===document.readyState?yield A():window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING=!1}))}.apply(e,i))||(t.exports=o)},function(t,e,n){}]);
//# sourceMappingURL=com.dynatrace.timetracking.bookmarklet.js.map