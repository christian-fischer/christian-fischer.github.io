!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var i,o;i=[n,e,n(1)],void 0===(o=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){const t={};let e;const n=new Map;function i(t){return o(t)}function o(t,e,n){const i=new XMLHttpRequest;return new Promise((function(o,r){i.onreadystatechange=function(){4===i.readyState&&(i.status>=200&&i.status<300?o(i.responseText):r({status:i.status,statusText:i.statusText}))},i.open(e||"GET",t,!0),i.setRequestHeader("cache-control","no-cache"),i.setRequestHeader("cache-control","max-age=0"),i.setRequestHeader("pragma","no-cache"),"POST"===e?(i.setRequestHeader("Content-Type","application/json; charset=utf-8"),i.send(n)):i.send()}))}return t.createContent=function(){const t="com_kamilsarelo_dynatrace_timetracking_css",r="com_kamilsarelo_dynatrace_timetracking_html";function a(){[r,t].forEach((function(t){document.querySelectorAll("#"+t).forEach((function(t){t.parentNode.removeChild(t)}))}))}a(),new Promise((function(e,n){const i=document.createElement("link");i.id=t,i.rel="stylesheet",i.type="text/css",i.href="https://christian-fischer.github.io/com.dynatrace.timetracking.bookmarklet.css?q="+(new Date).getTime(),i.media="all",i.onload=function(){e()},document.head.appendChild(i)})).then((function(){const t="com_kamilsarelo_dynatrace_timetracking_input",c="com_kamilsarelo_dynatrace_timetracking_select_type",s="com_kamilsarelo_dynatrace_timetracking_action_book",u="com_kamilsarelo_dynatrace_timetracking_action_clear",d="com_kamilsarelo_dynatrace_timetracking_action_close",l="com_kamilsarelo_dynatrace_timetracking_loader",f=document.createElement("dummy");f.innerHTML=`\n\t\t\t\t\t<div id="${r}">\n\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_content">\n\t\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_header">\n\t\t\t\t\t\t\t\t<select id="${c}" class="filament-select-css">\n\t\t\t\t\t\t\t\t\t<option value="cd4f750b-85f8-41f8-b193-9c82e23f82eb" selected="selected">Office</option>\n\t\t\t\t\t\t\t\t\t<option value="0ad94cf7-955c-45dc-b49e-20be0f449b75">Home Office</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_main">\n\t\t\t\t\t\t\t\t<div id="${t}" contenteditable="true">\n\t\t\t\t\t\t\t\t\t&#xfeff;\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id="${l}">\n\t\t\t\t\t\t\t\t\t<div class="spin-wrapper">\n\t\t\t\t\t\t\t\t\t\t<div class="spinner">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="com_kamilsarelo_dynatrace_timetracking_footer">\n\t\t\t\t\t\t\t\t<button id="${s}" class="pure-material-button-contained">Book</button>\n\t\t\t\t\t\t\t\t<button id="${u}" class="pure-material-button-outlined">Clear</button>\n\t\t\t\t\t\t\t\t<button id="${d}" class="pure-material-button-outlined">Close</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>`,document.body.appendChild(f.querySelector("div")),setTimeout((function(){document.getElementById(t).focus()}),0),document.getElementById(t).addEventListener("paste",(function(t){t.preventDefault();const e=(t.originalEvent||t).clipboardData.getData("text/plain");document.execCommand("insertText",!1,e)})),document.getElementById(s).onclick=function(){const r=document.getElementById(t);r.querySelectorAll("span").forEach((function(t){r.removeChild(t)}));const a=r.innerText;if(0===a.trim().length)return;function f(t){[s,u,d].forEach((function(e){document.getElementById(e).disabled=!t})),r.contentEditable=t,r.focus(),document.getElementById(l).style.visibility=t?"hidden":"visible"}f(!1);const m=document.getElementById(c),_=m.options[m.selectedIndex].value;let P;r.innerHTML="";const y=a.split(/\r\n|\r|\n/g),p=function(t){if(P&&(r.innerHTML=(r.innerHTML?r.innerHTML+"<br>":"")+(t?'<span class="pill" style="background-color: '+("done"===t?"green":"red")+';">'+t+"</span>":"")+P,r.scrollTop=r.scrollHeight),y.length>0)P=y.shift(),function(t,r,a){if(!(t=t.trim()))return void a();const c=function(){if(!t||t.length<=23||isNaN(t.charAt(0))||"|"!==t.charAt(10)||"|"!==t.charAt(16)||"|"!==t.charAt(22))return;const e=t.substr(0,10),n=t.substr(11,5),i=t.substr(17,5),o=t.indexOf("|",23);if(-1===o)return;const r=t.substring(23,o);if(""===r)return;const a=t.substr(o+1);if(""!==a){{if("-"!==e.charAt(4)||"-"!==e.charAt(7))return;if(isNaN(e.charAt(0))||isNaN(e.charAt(1))||isNaN(e.charAt(2))||isNaN(e.charAt(3))||isNaN(e.charAt(5))||isNaN(e.charAt(6))||isNaN(e.charAt(8))||isNaN(e.charAt(9)))return;const t=(new Date).getFullYear(),n=parseInt(e.substr(0,4),10);if(isNaN(n)||n<t||n>t)return;const i=parseInt(e.substr(5,2),10);if(isNaN(n)||i<1||i>12)return;const o=parseInt(e.substr(8,2),10);if(isNaN(n)||o<1||o>31)return;if(function(){const t=new Date;return t.setFullYear(n,i-1,o),t.getFullYear()!==n||t.getMonth()!==i-1||t.getDate()!==o}())return}{function c(t){return isNaN(t.charAt(0))||isNaN(t.charAt(1))||isNaN(t.charAt(3))||isNaN(t.charAt(4))}function s(t){return isNaN(t)||t<0||t>23}function u(t){return isNaN(t)||t<0||t>59}if(":"!==n.charAt(2)||":"!==i.charAt(2))return;if(c(n)||c(i))return;const t=parseInt(n.substr(0,2),10),e=parseInt(i.substr(0,2),10);if(s(t)||s(e))return;const o=parseInt(n.substr(3,2),10),r=parseInt(i.substr(3,2),10);if(u(o)||u(r))return;if(t>e||t===e&&o>=r)return}return{jiraKey:r,APP_BeginTime:e+"T"+n+":00",APP_EndTime:e+"T"+i+":00",APP_Description:a}}}();c?(c.USR_TimesheetTypeUuid=r,function(t,r){function a(){t.APP_UserDetailUuid=e,function(t,e){i("/odata/APP_Timesheet?$filter=(APP_BeginTime eq datetime'"+t.APP_BeginTime+"' or APP_EndTime eq datetime'"+t.APP_EndTime+"') and APP_UserDetailUuid eq guid'"+t.APP_UserDetailUuid+"'").then((function(r){const a=JSON.parse(r);if(a&&a.value)return a.value.length>0?(console.log("ERROR: APP_Timesheet entity with equal start- ("+t.APP_BeginTime+") and/or end-time ("+t.APP_EndTime+") exists"),void e("exists")):void function(t,e){function r(){const i=n.get(t.jiraKey);t.APP_TaskUuid=i.APP_TaskUuid,t.APP_ProjectUuid=i.APP_ProjectUuid,function(t,e){(function(t,e){return o(t,"POST",e)})("/odata/APP_Timesheet",JSON.stringify({APP_BeginTime:t.APP_BeginTime,APP_EndTime:t.APP_EndTime,APP_Description:t.APP_Description,APP_TaskUuid:t.APP_TaskUuid,APP_ProjectUuid:t.APP_ProjectUuid,APP_UserDetailUuid:t.APP_UserDetailUuid,USR_TimesheetTypeUuid:t.USR_TimesheetTypeUuid})).then((function(t){e("done")})).catch((function(t){console.log("ERROR: in createEntity()",t),e(t.status||"error")}))}(t,e)}if(n.has(t.jiraKey))return void r();i("/odata/APP_Task?$filter=APP_Code eq '"+t.jiraKey+"'&$select=APP_TaskUuid,APP_ProjectUuid").then((function(i){const o=JSON.parse(i);if(o&&o.value){if(o.value.length>0)return n.set(t.jiraKey,{APP_TaskUuid:o.value[0].APP_TaskUuid,APP_ProjectUuid:o.value[0].APP_ProjectUuid}),void r();console.log("ERROR: no APP_Task entity for specified Jira key ("+t.jiraKey+") available")}else console.log("ERROR: on JSON.parse() in queryTaskIdAndProjectIdForJiraKey()");e("error")})).catch((function(t){console.log("ERROR: in queryTaskIdAndProjectIdForJiraKey()",t),e(t.status||"error")}))}(t,e);console.log("ERROR: on JSON.parse() in checkIfEntityWithEqualBeginOrEndTimeAlreadyExists()"),e("error")})).catch((function(t){console.log("ERROR: in checkIfEntityWithEqualBeginOrEndTimeAlreadyExists()",t),e(t.status||"error")}))}(t,r)}if(e)return void a();i("/shell/user").then((function(t){const n=JSON.parse(t);if(n){if(n.useruuid)return e=n.useruuid,void a();console.log("ERROR: no useruuid available")}else console.log("ERROR: on JSON.parse() in queryUserId()");r("error")})).catch((function(t){console.log("ERROR: in queryUserId()",t),r(t.status||"error")}))}(c,a)):a("invalid")}(P,_,p);else{f(!0);const t=document.querySelector('button[ng-click="refresh()"]');t&&t.click()}};setTimeout((function(){p()}),0)},document.getElementById(u).onclick=function(){const e=document.getElementById(t);e.innerHTML="",e.focus()},document.getElementById(d).onclick=function(){a()},document.onkeydown=function(t){27==(t=t||window.event).keyCode&&(a(),document.onkeydown=void 0)},window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING=!1}))},t}();!function(){if(window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING)return void console.log("ERROR: bookmarklet is already running");window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING=!0,console.log("bookmarklet called");const t="https://dynatrace.timecockpit.com";if(window.location.origin!==t){const e=document.createElement("dummy");e.innerHTML="\n\t\t\t<div style=\"position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 999; background-color: rgba(0, 0, 0, 0.66); display: grid;\">\n\t\t\t\t<div style=\"margin: auto; padding: 24px; box-sizing: border-box; font-size: 24px; background-color: yellow; border-radius: 4px; font-family: Roboto, 'Segoe UI', BlinkMacSystemFont, system-ui, -apple-system, Arial, Helvetica, sans-serif;\">\n\t\t\t\t\t...redirecting to ' + url + '. Run the bookmarklet again after the site loaded.\n\t\t\t\t</div>\n\t\t\t</div>",document.body.appendChild(e.querySelector("div")),window.setTimeout((function(){window.location.href=t}),1e3)}else document.readyState&&"complete"===document.readyState?n.createContent():window.COM_KAMILSARELO_DYNATRACE_TIMETRACKING_FORK_RUNNING=!1}()}.apply(e,i))||(t.exports=o)},function(t,e,n){}]);
//# sourceMappingURL=com.dynatrace.timetracking.bookmarklet.js.map