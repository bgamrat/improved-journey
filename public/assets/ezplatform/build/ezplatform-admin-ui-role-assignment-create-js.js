(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-role-assignment-create-js"],{15:function(e,t,n){e.exports=n("nNO4")},nNO4:function(e,t){function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e,t,n,o,c){var a=this,i=t.getElementById("react-udw"),u=t.querySelectorAll(".ez-limitations__radio"),l=function(){return c.unmountComponentAtNode(i)},s=function(e){var n=e.reduce((function(e,t){return"".concat(e,"<li>").concat(t.ContentInfo.Content.TranslatedName,"</li>")}),"");t.querySelector("#role_assignment_create_locations").value=e.map((function(e){return e.id})).join(),t.querySelector(".ez-limitations__selected-subtree").innerHTML=n,l()},d=function(){u.forEach((function(e){var n=t.querySelector(e.dataset.disableSelector),r=e.checked?"removeAttribute":"setAttribute";n&&n[r]("disabled","disabled")}))};t.querySelector(".ez-btn--select-subtree").addEventListener("click",(function(e){e.preventDefault();var u=JSON.parse(e.currentTarget.dataset.udwConfig),d=e.currentTarget.dataset.inputSelector,f=t.querySelector(d).value,p=f?f.split(","):[];c.render(o.createElement(n.modules.UniversalDiscovery,r({onConfirm:s.bind(a),onCancel:l,multiple:!0,selectedLocations:p},u)),i)}),!1),u.forEach((function(e){return e.addEventListener("change",d,!1)}));var f=function(e,n){!function(e,n){var r=t.querySelector(e.dataset.inputSelector),o=r.value.split(",").filter((function(e){return e!==n}));r.value=o.join(",")}(e,n.dataset.contentId),n.remove()},p=function(e,t){t.querySelector(".ez-tag__remove-btn").addEventListener("click",(function(){return f(e,t)}),!1)},m=function(e,n){n.length&&(!function(e,n){var r=t.querySelector(e.dataset.inputSelector),o=n.map((function(e){return e.ContentInfo.Content._id})).join(",");r.value=o}(e,n),function(e,n){var r=t.querySelector(e.dataset.selectedContentListSelector),o=e.dataset.tagTemplate,c=t.createDocumentFragment();n.forEach((function(n){var r=n.ContentInfo.Content,a=r._id,i=r.Name,u=t.createElement("ul"),l=o.replace("{{ content_id }}",a).replace("{{ content_name }}",i);u.insertAdjacentHTML("beforeend",l);var s=u.querySelector("li"),d=s.querySelector(".ez-tag");p(e,d),c.append(s)})),r.innerHTML="",r.append(c)}(e,n),e.setAttribute("data-selected-locations",n.map((function(e){return e.id})).join())),l()},v=function(e){e.preventDefault();var t=e.currentTarget,u=t.dataset.selectedLocations,l=u?u.split(","):[],s=JSON.parse(t.dataset.udwConfig);c.render(o.createElement(n.modules.UniversalDiscovery,r({onConfirm:m.bind(a,t),onCancel:function(){return c.unmountComponentAtNode(i)},title:t.dataset.universaldiscoveryTitle,multiple:!0,selectedLocations:l},s)),i)};[t.querySelector("#role_assignment_create_users__btn"),t.querySelector("#role_assignment_create_groups__btn")].forEach((function(e){e.addEventListener("click",v,!1),t.querySelector(e.dataset.selectedContentListSelector).querySelectorAll(".ez-tag").forEach((function(t){p(e,t)}))}))}(window,window.document,window.eZ,window.React,window.ReactDOM)}},[[15,"runtime"]]]);