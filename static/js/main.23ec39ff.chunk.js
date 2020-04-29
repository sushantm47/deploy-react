(this["webpackJsonpc19-tracker-app"]=this["webpackJsonpc19-tracker-app"]||[]).push([[0],{203:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(69),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(70),d=a(71),m=a(79),p=a(78),f=(a(88),a(220)),v=a(224),h=a(221),b=a(222),E=a(31),y=a.n(E),g=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:"cards_container"},n.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:"card infected"},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of active Cases"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:"card recovered"},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of recovery Cases"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:"card deaths"},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Death"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of death Cases"))))):n.a.createElement("h3",null,"Loading..")},x=a(30),C=a(43),w=a(32),j=a.n(w),k="https://covid19.mathdro.id/api",O=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,l=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:a.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(r.useState)({}),d=Object(x.a)(i,2),m=d[0],p=d[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?n.a.createElement(C.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.7)","rgba(0, 255, 0, 0.7)","rgba(255, 0, 0, 0.7)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=m[0]?n.a.createElement(C.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.7)",fill:!0}]}}):null;return n.a.createElement("div",{className:"chart_container"},u?f:v)},I=a(225),B=a(223),P=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(x.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement("div",{className:"countryPicker",style:{marginTop:"1.5rem"}},n.a.createElement("p",null,"Select Country : "),n.a.createElement(I.a,{className:"countryPicker_formControl"},n.a.createElement(B.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)})))))},U=a(77),_=a.n(U),J=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:"container"},n.a.createElement("img",{className:"image",src:_.a,alt:"COVID-19"}),n.a.createElement(P,{handleCountryChange:this.handleCountryChange}),n.a.createElement(g,{data:t}),n.a.createElement(N,{data:t,country:a}))}}]),a}(n.a.Component);o.a.render(n.a.createElement(J,null),document.getElementById("root"))},77:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},82:function(e,t,a){e.exports=a(203)},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.23ec39ff.chunk.js.map