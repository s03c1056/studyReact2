(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(51),c=n.n(o),i=n(3),l=n(2),s=n(169),u=n(65),m=n(145),f=n(245),g=n(246),p=n(37),v=n.n(p),b=n(8),d=n.n(b),h=n(60),E=n(49),y=n(23),w=n(35),x=n(77),k=i.a.create({itemContainer:{height:150,width:"100%",borderColor:"gray",borderWidth:1,flexDirection:"row",padding:10,backgroundColor:"rgba(255, 255, 255, 0.1)"},leftContainer:{width:100},rightContainer:{flex:1,padding:10,justifyContent:"space-around"},text:{fontSize:24,fontWeight:"bold"},subText:{fontSize:20,fontWeight:"bold",color:"dimgray"}});var O=function(e){if(e.imageUrl){var t=e.imageUrl.thumbnail;if(t.indexOf("http:")>=0){var n=t.replace("http:","https:");t=n}}return console.log(t),r.a.createElement(x.a,{style:k.itemContainer,onPress:e.onPress},r.a.createElement(l.a,{style:k.leftContainer},!!e.imageUrl&&r.a.createElement(w.a,{style:{width:100,height:130},source:t})),r.a.createElement(l.a,{style:k.rightContainer},r.a.createElement(y.a,{numberOfLines:2,style:k.text},e.title),r.a.createElement(y.a,{numberOfLines:1,style:k.subText},e.author)))},j=n(68),S=n.n(j),C=n(160),I=i.a.create({container:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,0.5)",alignItems:"center",justifyContent:"center"}});var P=function(){return r.a.createElement(l.a,{style:I.container},r.a.createElement(C.a,{size:"large"}))},A=i.a.create({container:{flex:1,backgroundColor:"rgba(0,0,0,0)"}});function z(e){var t=Object(a.useState)([]),n=d()(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=d()(i,2),s=l[0],u=l[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,v.a.awrap(S.a.get("https://www.googleapis.com/books/v1/volumes?maxResults=20&q=intitle:react"));case 4:e=t.sent,c(e.data.items),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:u(!1);case 12:case"end":return t.stop()}}),null,null,[[1,8]],Promise)};return r.a.createElement(E.a,{style:A.container},r.a.createElement(h.a,{data:o,renderItem:function(t){var n=t.item;return r.a.createElement(O,{imageUrl:n.volumeInfo.imageLinks,title:n.volumeInfo.title,author:n.volumeInfo.authors,onPress:function(){return e.navigation.navigate("Article",{article:n})}})},keyExtractor:function(e,t){return t.toString()}}),s&&r.a.createElement(P,null))}var D=i.a.create({container:{flex:1,backgroundColor:"rgba(0,0,0,0)"}});function L(e){var t=Object(a.useState)([]),n=d()(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=d()(i,2),s=l[0],u=l[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,v.a.awrap(S.a.get("https://www.googleapis.com/books/v1/volumes?maxResults=20&q=intitle:Vue"));case 4:e=t.sent,c(e.data.items),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:u(!1);case 12:case"end":return t.stop()}}),null,null,[[1,8]],Promise)};return r.a.createElement(E.a,{style:D.container},r.a.createElement(h.a,{data:o,renderItem:function(t){var n=t.item;return r.a.createElement(O,{imageUrl:n.volumeInfo.imageLinks,title:n.volumeInfo.title,author:n.volumeInfo.authors,onPress:function(){return e.navigation.navigate("Article",{article:n})}})},keyExtractor:function(e,t){return t.toString()}}),s&&r.a.createElement(P,null))}var U=i.a.create({container:{flex:1,backgroundColor:"rgba(0,0,0,0)"}});function W(e){var t=Object(a.useState)([]),n=d()(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=d()(i,2),s=l[0],u=l[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,v.a.awrap(S.a.get("https://www.googleapis.com/books/v1/volumes?maxResults=20&q=intitle:Angular"));case 4:e=t.sent,c(e.data.items),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:u(!1);case 12:case"end":return t.stop()}}),null,null,[[1,8]],Promise)};return r.a.createElement(E.a,{style:U.container},r.a.createElement(h.a,{data:o,renderItem:function(t){var n=t.item;return r.a.createElement(O,{imageUrl:n.volumeInfo.imageLinks,title:n.volumeInfo.title,author:n.volumeInfo.authors,onPress:function(){return e.navigation.navigate("Article",{article:n})}})},keyExtractor:function(e,t){return t.toString()}}),s&&r.a.createElement(P,null))}var R=n(61),N=i.a.create({articleContainer:{backgroundColor:"rgba(255,255,255,0.7)",margin:20,padding:40},thumbnail:{height:400,width:"100%",paddingHorizontal:30},details:{marginTop:10,fontSize:24,color:"gray"},Content:{fontSize:24,fontWeight:"bold",paddingHorizontal:20}});function T(e){var t=e.route.params.article;if(console.log(t),t.imageUrl){var n=t.volumeInfo.imageLinks.thumbnail;if(n.indexOf("http:")>=0){var a=n.replace("http:","https:");n=a}console.log("url="+n)}return r.a.createElement(R.a,{showsVerticalScrollIndicator:!1},r.a.createElement(l.a,{style:N.articleContainer},r.a.createElement(l.a,{style:N.thumbnail},!!t.volumeInfo.imageLinks&&r.a.createElement(w.a,{style:{width:300,height:400},source:n})),r.a.createElement(y.a,{style:N.details},""),r.a.createElement(y.a,{style:N.details},"Title:"),r.a.createElement(y.a,{style:N.Content},t.volumeInfo.title),r.a.createElement(y.a,{style:N.details},"Authors:"),r.a.createElement(y.a,{style:N.Content},t.volumeInfo.authors),r.a.createElement(y.a,{style:N.details},"Publisher:"),r.a.createElement(y.a,{style:N.Content},t.volumeInfo.publisher),r.a.createElement(y.a,{style:N.details}," ","PublishedDate:"),r.a.createElement(y.a,{style:N.Content},t.volumeInfo.publishedDate)))}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=i.a.create({container:{flex:1,flexDirection:"column"},background:{flex:1},image:{flex:1,resizeMode:"cover",justifyContent:"center"}}),H=Object(g.a)(),J=Object(f.a)();function F(){return r.a.createElement(J.Navigator,null,r.a.createElement(J.Screen,{name:"Books about 'React'",component:z}),r.a.createElement(J.Screen,{name:"Article",component:T}))}function M(){return r.a.createElement(J.Navigator,null,r.a.createElement(J.Screen,{name:"Books about 'Vue'",component:L}),r.a.createElement(J.Screen,{name:"Article",component:T}))}function G(){return r.a.createElement(J.Navigator,null,r.a.createElement(J.Screen,{name:"Books about 'Angular'",component:W}),r.a.createElement(J.Screen,{name:"Article",component:T}))}var K=q(q({},u.a),{},{colors:q(q({},u.a.colors),{},{primary:"rgb(255,255,255)",card:"rgb(0, 0, 128)",text:"ghostwhite",border:"rgb(199, 199, 204)",background:"rgba(255,255,255,0.6)"})});function Q(){return r.a.createElement(l.a,{style:B.container},r.a.createElement(s.a,{source:n(232),style:B.image},r.a.createElement(m.a,{theme:K},r.a.createElement(H.Navigator,null,r.a.createElement(H.Screen,{name:"React",component:F}),r.a.createElement(H.Screen,{name:"Vue",component:M}),r.a.createElement(H.Screen,{name:"Angular",component:G})))))}function X(){return r.a.createElement(Q,null)}n.d(t,"a",(function(){return X}))},173:function(e,t,n){n(174),e.exports=n(233)},174:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},232:function(e,t,n){e.exports=n.p+"static/media/Apple.08b580b6.png"}},[[173,1,2]]]);
//# sourceMappingURL=app.c2a4a253.chunk.js.map