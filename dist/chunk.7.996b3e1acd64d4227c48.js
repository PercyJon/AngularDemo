(("undefined"!==typeof window&&window||"undefined"!==typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp=("undefined"!==typeof window&&window||"undefined"!==typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp||[]).push([[7],{"./src/my-react-router-test/feed.iplaysoft.com.xml":function(e,t,n){e.exports=n.p+"feed.iplaysoft.com.790f8a4184aae5f189d9f1fbb1f4a5ec.xml"},"./src/my-react-router-test/ifanr.com.feed.xml":function(e,t,n){e.exports=n.p+"ifanr.com.feed.c91c5aed5721ee9eaa3580f47e9f32ab.xml"},"./src/my-react-router-test/landiannews.com.feed.xml":function(e,t,n){e.exports=n.p+"landiannews.com.feed.f91b36986dcd849ed8da9fd8cb586c8b.xml"},"./src/my-react-router-test/pingwest.com.feed.xml":function(e,t,n){e.exports=n.p+"pingwest.com.feed.23f41b7fa2bb97b5c1a985547736c4eb.xml"},"./src/my-react-router-test/react-module-rssreader.js":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return N});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./node_modules/react/index.js"),c=n.n(s),o=n("./node_modules/fast-xml-parser/src/parser.js"),i=n.n(o),l=n("./src/my-react-router-test/www.tmtpost.com.rss.xml"),m=n.n(l),u=n("./src/my-react-router-test/feed.iplaysoft.com.xml"),d=n.n(u),p=n("./src/my-react-router-test/landiannews.com.feed.xml"),f=n.n(p),b=n("./src/my-react-router-test/www.ithome.com.rss.xml"),x=n.n(b),w=n("./src/my-react-router-test/ifanr.com.feed.xml"),y=n.n(w),g=n("./src/my-react-router-test/pingwest.com.feed.xml"),h=n.n(g),E=n("./node_modules/jquery/dist/jquery.js"),v=n.n(E),k=n("./src/mui.min.js"),j=n.n(k),S=v.a,_=[],C=[],A=c.a.useState,G=c.a.useEffect,J=c.a.useRef;function N(){var e=A(C),t=Object(a.a)(e,2),n=t[0],s=t[1],o=J(),l=J(),u=J(),p=J(),b=J(),w=J();function g(e,t){j()(t).button("loading");var n=[];console.log("\u5f00\u59cb\u52a0\u8f7d\u5916\u90e8\u5185\u5bb9",e),"undefined"==typeof e||fetch(e).then(function(e){return e.text()}).then(function(e){var a=e;_.push(a);var c=i.a.parse(a);console.log("rssjson",c),n.title=c.rss.channel.title,n.description=c.rss.channel.description,n.push.apply(n,Object(r.a)(JSON.parse(JSON.stringify(c.rss.channel.item)).map(function(e){try{e.description=v()("<div/>").append(e.description).text()||e.description}catch(t){}return e}))),console.log("rsscontent",n),j()(t).button("reset"),function(e){var t;switch(e){case"success":t="\u6210\u529f";break;case"primary":t="\u9996\u9009";break;case"danger":t="\u5931\u8d25";break;case"warning":t="\u8b66\u544a";break;default:return}var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)});S("#my\u5bfc\u822a\u680f").append(S('<div id="'.concat(n,'" class="alert alert-').concat(e,' alert-dismissible fade show">\n  <button type="button" class="close" data-dismiss="alert">&times;</button>\n  <strong>').concat(t,"!</strong> \u64cd\u4f5c").concat(t,"\u63d0\u793a\u4fe1\u606f\u3002\n  </div>")).fadeTo(5e3,.5,function(){console.log(S("#"+n)),S("#"+n).remove()}))}("success"),s(n)})}return G(function(){return document.title="React router App-rssreader",function(){C=n}}),c.a.createElement("div",{className:""},c.a.createElement("h2",null,"\u5f02\u6b65fetch\u52a0\u8f7drss\u9605\u8bfb\u5668\u6f14\u793a"),c.a.createElement("p",null,"\u4f7f\u7528fast-xml-parser\u628axml\u8f6c\u6362\u6210json"),c.a.createElement("nav",{class:"navbar navbar-expand-sm bg-light navbar-light "},c.a.createElement("ul",{class:"demo"},c.a.createElement("button",{ref:o,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-royal mui-btn-outlined btn-lg",onClick:function(){g(m.a,o.current)}},"\u52a0\u8f7dtmtpost"),c.a.createElement("button",{ref:l,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary mui-btn-outlined btn-lg",onClick:function(){g(d.a,l.current)}},"\u52a0\u8f7diplaysoft"),c.a.createElement("button",{ref:u,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-warning mui-btn-outlined btn-lg",onClick:function(){g(f.a,u.current)}},"\u52a0\u8f7dlandiannews"),c.a.createElement("button",{ref:p,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-danger mui-btn-outlined btn-lg",onClick:function(){g(x.a,p.current)}},"\u52a0\u8f7dithome"),c.a.createElement("button",{ref:b,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-success mui-btn-outlined btn-lg",onClick:function(){g(y.a,b.current)}},"\u52a0\u8f7difanr"),c.a.createElement("button",{ref:w,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary mui-btn-outlined btn-lg",onClick:function(){g(h.a,w.current)}},"\u52a0\u8f7dpingwest"))),c.a.createElement("header",{className:"App-header"},c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement("b",null,n.title)),c.a.createElement("p",null,n.description),c.a.createElement("ul",{class:"mui-table-view"},n.map(function(e,t){return c.a.createElement("li",{class:"mui-table-view-cell mui-media",key:t,style:{width:" 100%"}},c.a.createElement("div",{class:"mui-media-body"},c.a.createElement("b",null," ",e.title),c.a.createElement("a",{href:e.link,target:"_blank"},c.a.createElement("p",{class:"mui-ellipsis"},e.link)),c.a.createElement("p",{class:"mui-ellipsis"},e.description)))})))))}},"./src/my-react-router-test/www.ithome.com.rss.xml":function(e,t,n){e.exports=n.p+"www.ithome.com.rss.6962638eebbbb0e36f73af9b3c4e53b9.xml"},"./src/my-react-router-test/www.tmtpost.com.rss.xml":function(e,t,n){e.exports=n.p+"www.tmtpost.com.rss.e9640596922db9c9657396d4eec012c1.xml"}}]);