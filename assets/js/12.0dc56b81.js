(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{124:function(t,e,i){"use strict";i.r(e);var n={name:"GiftBox",props:{gift:{type:Object,default:{}},network:{type:Object,default:{}}},computed:{image:function(){return"assets/images/"+(this.gift.style?"styles/".concat(this.gift.style,".jpg"):"cryptogift-header.jpg")},formattedDate:function(){return new Date(this.gift.date).toLocaleString()},tokenExplorerLink:function(){return this.network.etherscanLink+"/token/0x970E90Db5bFd3E4dEa453fb061E1146eE3e23Df8?a="+this.gift.id},beneficiaryLink:function(){return this.network.etherscanLink+"/address/"+this.gift.beneficiary+"#internaltx"}}},a=i(4),r=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",{staticClass:"shadow-lg border-0 rounded-0",attrs:{"no-body":"","img-src":t.$withBase(t.image)}},[i("b-card-body",[i("h5",[t._v("Dear "+t._s(t.gift.content.receiver)+",  "),t.gift.id?i("b-badge",{staticClass:"float-right",attrs:{href:t.tokenExplorerLink,target:"_blank",variant:"secondary"}},[t._v("#"+t._s(t.gift.id))]):t._e()],1),t._v(" "),i("p",{staticClass:"card-text pt-4 pb-3"},[t._v(t._s(t.gift.content.message))]),t._v(" "),i("h6",[t._v(t._s(t.gift.content.sender))]),t._v(" "),i("small",[t._v(t._s(t.formattedDate))])]),t._v(" "),t.gift.amount>0?i("b-card-footer",[i("small",{staticClass:"text-muted"},[t._v("\n            You received "),i("strong",[t._v(t._s(t.gift.amount)+" ETH")]),t._v(" at "),i("b-link",{attrs:{href:t.beneficiaryLink,target:"_blank"}},[t._v(t._s(t.gift.beneficiary))])],1)]):t._e()],1)},[],!1,null,null,null);r.options.__file="GiftBox.vue";e.default=r.exports}}]);