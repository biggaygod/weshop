(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{XYyX:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),s=n(a("o0o1")),d=a("dCQc"),u={namespace:"address",state:{data:{list:[],pagination:{}}},effects:{list:s.default.mark(function e(t,a){var n,r,u,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(d.queryAddress,n);case 4:return c=e.sent,e.next=7,u({type:"queryList",payload:c});case 7:case"end":return e.stop()}},e,this)})},reducers:{queryList:function(e,t){return(0,r.default)({},e,{data:t.payload.data})}}};t.default=u}}]);