/*
Copyright (c) 2008-2015 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
jasmineRequire.html=function(n){n.ResultsNode=jasmineRequire.ResultsNode();n.HtmlReporter=jasmineRequire.HtmlReporter(n);n.QueryString=jasmineRequire.QueryString();n.HtmlSpecFilter=jasmineRequire.HtmlSpecFilter()};jasmineRequire.HtmlReporter=function(n){function i(i){function u(n){return h().querySelector(".jasmine_html-reporter "+n)}function ot(){var n=u("");n&&h().removeChild(n)}function r(n,t){for(var u,i,r=it(n),f=2;f<arguments.length;f++)u=arguments[f],typeof u=="string"?r.appendChild(rt(u)):u&&r.appendChild(u);for(i in t)i=="className"?r[i]=t[i]:r.setAttribute(i,t[i]);return r}function p(n,t){var i=t==1?n:n+"s";return""+t+" "+i}function w(n){return et("spec",n.fullName)}function st(n,t){return"?"+n+"="+t}function b(n){a.setAttribute("class","jasmine_html-reporter "+n)}function k(n){return n.failedExpectations.length+n.passedExpectations.length===0&&n.status==="passed"}var d=i.env||{},h=i.getContainer,it=i.createElement,rt=i.createTextNode,ut=i.onRaiseExceptionsClick||function(){},ft=i.onThrowExpectationsClick||function(){},et=i.addToExistingQueryString||st,g=i.timer||t,o=0,c=0,l=0,a,nt,v=[],s,e;this.initialize=function(){ot();a=r("div",{className:"jasmine_html-reporter"},r("div",{className:"banner"},r("a",{className:"title",href:"http://jasmine.github.io/",target:"_blank"}),r("span",{className:"version"},n.version)),r("ul",{className:"symbol-summary"}),r("div",{className:"alert"}),r("div",{className:"results"},r("div",{className:"failures"})));h().appendChild(a);nt=u(".symbol-summary")};this.jasmineStarted=function(n){s=n.totalSpecsDefined||0;g.start()};var tt=r("div",{className:"summary"}),y=new n.ResultsNode({},"",null),f=y;return this.suiteStarted=function(n){f.addChild(n,"suite");f=f.last()},this.suiteDone=function(n){(n.status=="failed"&&v.push(n),f!=y)&&(f=f.parent)},this.specStarted=function(n){f.addChild(n,"spec")},e=[],this.specDone=function(n){var i,u,t,f;if(k(n)&&typeof console!="undefined"&&typeof console.error!="undefined"&&console.error("Spec '"+n.fullName+"' has no expectations."),n.status!="disabled"&&o++,nt.appendChild(r("li",{className:k(n)?"empty":n.status,id:"spec_"+n.id,title:n.fullName})),n.status=="failed"){for(c++,i=r("div",{className:"spec-detail failed"},r("div",{className:"description"},r("a",{title:n.fullName,href:w(n)},n.fullName)),r("div",{className:"messages"})),u=i.childNodes[1],t=0;t<n.failedExpectations.length;t++)f=n.failedExpectations[t],u.appendChild(r("div",{className:"result-message"},f.message)),u.appendChild(r("div",{className:"stack-trace"},f.stack));e.push(i)}n.status=="pending"&&l++},this.jasmineDone=function(){function at(n,t){for(var i,o,u,f,e=0;e<n.children.length;e++)i=n.children[e],i.type=="suite"&&(o=r("ul",{className:"suite",id:"suite-"+i.result.id},r("li",{className:"suite-detail"},r("a",{href:w(i.result)},i.result.description))),at(i,o),t.appendChild(o)),i.type=="spec"&&(t.getAttribute("class")!="specs"&&(f=r("ul",{className:"specs"}),t.appendChild(f)),u=i.result.description,k(i.result)&&(u="SPEC HAS NO EXPECTATIONS "+u),i.result.status==="pending"&&i.result.pendingReason!==""&&(u=u+" PENDING WITH MESSAGE: "+i.result.pendingReason),f.appendChild(r("li",{className:i.result.status,id:"spec-"+i.result.id},r("a",{href:w(i.result)},u))))}var yt=u(".banner"),t=u(".alert"),nt,it,st,i,h,rt,a,ht,ct,lt,vt,n;t.appendChild(r("span",{className:"duration"},"finished in "+g.elapsed()/1e3+"s"));yt.appendChild(r("div",{className:"run-options"},r("span",{className:"trigger"},"Options"),r("div",{className:"payload"},r("div",{className:"exceptions"},r("input",{className:"raise",id:"raise-exceptions",type:"checkbox"}),r("label",{className:"label","for":"raise-exceptions"},"raise exceptions")),r("div",{className:"throw-failures"},r("input",{className:"throw",id:"throw-failures",type:"checkbox"}),r("label",{className:"label","for":"throw-failures"},"stop spec on expectation failure")))));nt=u("#raise-exceptions");nt.checked=!d.catchingExceptions();nt.onclick=ut;it=u("#throw-failures");it.checked=d.throwingExpectationFailures();it.onclick=ft;var et=u(".run-options"),pt=et.querySelector(".trigger"),f=et.querySelector(".payload"),ot=/\bopen\b/;for(pt.onclick=function(){ot.test(f.className)?f.className=f.className.replace(ot,""):f.className+=" open"},o<s&&(st="Ran "+o+" of "+s+" specs - run all",t.appendChild(r("span",{className:"bar skipped"},r("a",{href:"?",title:"Run all specs"},st)))),i="",h="bar ",s>0?(i+=p("spec",o)+", "+p("failure",c),l&&(i+=", "+p("pending spec",l)),h+=c>0?"failed":"passed"):(h+="skipped",i+="No specs found"),t.appendChild(r("span",{className:h},i)),n=0;n<v.length;n++)for(rt=v[n],a=0;a<rt.failedExpectations.length;a++)ht="AfterAll "+rt.failedExpectations[a].message,ct="bar errored",t.appendChild(r("span",{className:ct},ht));if(lt=u(".results"),lt.appendChild(tt),at(y,tt),e.length)for(t.appendChild(r("span",{className:"menu bar spec-list"},r("span",{},"Spec List | "),r("a",{className:"failures-menu",href:"#"},"Failures"))),t.appendChild(r("span",{className:"menu bar failure-list"},r("a",{className:"spec-list-menu",href:"#"},"Spec List"),r("span",{}," | Failures "))),u(".failures-menu").onclick=function(){b("failure-list")},u(".spec-list-menu").onclick=function(){b("spec-list")},b("failure-list"),vt=u(".failures"),n=0;n<e.length;n++)vt.appendChild(e[n])},this}var t={start:function(){},elapsed:function(){return 0}};return i};jasmineRequire.HtmlSpecFilter=function(){function n(n){var t=n&&n.filterString()&&n.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(t);this.matches=function(n){return i.test(n)}}return n};jasmineRequire.ResultsNode=function(){function n(t,i,r){this.result=t;this.type=i;this.parent=r;this.children=[];this.addChild=function(t,i){this.children.push(new n(t,i,this))};this.last=function(){return this.children[this.children.length-1]}}return n};jasmineRequire.QueryString=function(){function n(n){function i(n){var t=[];for(var i in n)t.push(encodeURIComponent(i)+"="+encodeURIComponent(n[i]));return"?"+t.join("&")}function t(){var f=n.getWindowLocation().search.substring(1),r=[],e={},i,u,t;if(f.length>0)for(r=f.split("&"),i=0;i<r.length;i++)u=r[i].split("="),t=decodeURIComponent(u[1]),(t==="true"||t==="false")&&(t=JSON.parse(t)),e[decodeURIComponent(u[0])]=t;return e}return this.navigateWithNewParam=function(t,i){n.getWindowLocation().search=this.fullStringWithNewParam(t,i)},this.fullStringWithNewParam=function(n,r){var u=t();return u[n]=r,i(u)},this.getParam=function(n){return t()[n]},this}return n};