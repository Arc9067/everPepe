(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4998],{61909:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/trade",function(){return r(40729)}])},68135:function(e,o,r){"use strict";var n,a;r.d(o,{q:function(){return n}}),(a=n||(n={})).SWAP_DISABLED="swapDisabled",a.SWAP_FROM_TOKEN_ADDRESS="swapFromTokenAddress",a.SWAP_TO_TOKEN_ADDRESS="swapToTokenAddress",a.SWAP_LOCK_TO_TOKEN="swapLockToToken",a.SWAP_FROM_TOKEN_AMOUNT="swapFromTokenAmount",a.SWAP_TO_TOKEN_AMOUNT="swapToTokenAmount",a.ON_RAMP_DISABLED="onRampDisabled",a.ON_RAMP_CURRENCY_ID="onRampCurrencyId",a.ON_RAMP_TOKEN_ADDRESS="onRampTokenAddress",a.ON_RAMP_LOCK_TOKEN="onRampLockToken",a.ON_RAMP_DEFAULT_AMOUNT="onRampDefaultAmount",a.ON_RAMP_AS_DEFAULT="onRampAsDefault",a.STAKE_DISABLED="stakeDisabled",a.REF_ID="refId",a.NETWORK="network",a.HIDE_CHART_LINK="hideChartLink",a.HIDE_REFER_LINK="hideReferLink",a.PRIMARY_COLOR="primaryColor",a.BACKGROUND_COLOR="backgroundColor",a.LIGHT_MODE="lightMode",a.ROUNDED_CORNERS="roundedCorners",a.PADDING="padding"},73318:function(e,o,r){"use strict";r.d(o,{u:function(){return i},q:function(){return A.q}});var n=r(85893),a=r(11163),t=r(67294),s=r(94176);let d=e=>{let{primaryColor:o="#824cf4",backgroundColor:r="#000000",modalOverlayBackgroundColor:n="rgba(0, 0, 0, 0.7)",containerSelector:a}=e;(0,t.useEffect)(()=>{let e=a&&document.querySelector(a)?document.querySelector(a):document.documentElement,t=document.documentElement.style.getPropertyValue("--sya-color-primary"),s=document.documentElement.style.getPropertyValue("--sya-color-primary-600"),d=document.documentElement.style.getPropertyValue("--sya-color-body-background"),l=document.documentElement.style.getPropertyValue("--sya-modal-container-overlay-background-color");return e.style.setProperty("--sya-color-primary",o),e.style.setProperty("--sya-color-primary-600",o),e.style.setProperty("--sya-modal-container-overlay-background-color",n),e.style.setProperty("--sya-color-body-background",r),()=>{e.style.setProperty("--sya-color-primary",t),e.style.setProperty("--sya-color-primary-600",s),e.style.setProperty("--sya-color-body-background",d),e.style.setProperty("--sya-modal-container-overlay-background-color",l)}},[o,r,n,a])};var l=r(41303),_=r(401),u=r(35089);let i=()=>{var e;let o=(0,a.useRouter)(),{networkParam:r}=(0,s.UV)(),t=new URLSearchParams(o.query),i=u.w.queryParametersToConfig(t,r),{onRampParams:A,brandingParams:m,swapParams:R,generalParams:c}=i,{onRampDisabled:O,onRampAsDefault:T}=A,{swapDisabled:p}=R,{network:P,hideChartLink:D,hideReferLink:E,refId:N}=c,{lightMode:y,primaryColor:S,backgroundColor:g,roundedCorners:k,padding:v}=m,C=!O&&(p||T)?_.J.ON_RAMP:_.J.SWAP,L={toTokenAddress:R.swapToTokenAddress,fromTokenAddress:R.swapFromTokenAddress,lockToToken:R.swapLockToToken,fromTokenAmount:R.swapFromTokenAmount,toTokenAmount:R.swapToTokenAmount,multiChainContracts:R.swapMultiChainContracts,network:P,refId:N,swapTokensContext:{hideChartLink:D,hideReferLink:E,isBuyCryptoDisabled:O,hideOffRampLink:!0}},q={network:P,tokenAddress:null!==(e=A.onRampTokenAddress)&&void 0!==e?e:R.swapToTokenAddress,currencyId:A.onRampCurrencyId,defaultAmount:A.onRampDefaultAmount,lockBuyToken:A.onRampLockToken,buyCryptoContext:{hideChartLink:D,hideReferLink:E,hideOffRampLink:!0}};return(0,l.d)(y),d({primaryColor:S,backgroundColor:g}),(0,n.jsx)("div",{className:"embedded-trade-page",style:{borderRadius:k?"".concat(k,"px"):void 0,paddingLeft:v?"".concat(v,"px"):void 0,paddingRight:v?"".concat(v,"px"):void 0},children:(0,n.jsx)(_.U,{swapDisabled:p,onRampDisabled:O,stakeDisabled:!0,initialSelectedTab:C,swapTokensParams:L,buyCryptoParams:q,renderFloozConnect:!0})})};var A=r(68135)},35089:function(e,o,r){"use strict";r.d(o,{w:function(){return t}});var n=r(99740),a=r(68135);let t=new class{constructor(){this.queryParametersToConfig=(e,o)=>{var r,t,s,d,l,_,u,i,A,m,R,c,O;let T=null!==(r=e.get(a.q.REF_ID))&&void 0!==r?r:void 0,p="true"===e.get(a.q.HIDE_CHART_LINK),P="true"===e.get(a.q.HIDE_REFER_LINK),D="true"===e.get(a.q.SWAP_DISABLED),E=null!==(t=e.get(a.q.SWAP_FROM_TOKEN_ADDRESS))&&void 0!==t?t:void 0,N=null!==(s=e.get(a.q.SWAP_TO_TOKEN_ADDRESS))&&void 0!==s?s:void 0,y="true"===e.get(a.q.SWAP_LOCK_TO_TOKEN),S=null!==(d=e.get(a.q.SWAP_FROM_TOKEN_AMOUNT))&&void 0!==d?d:void 0,g=null!==(l=e.get(a.q.SWAP_TO_TOKEN_AMOUNT))&&void 0!==l?l:void 0,k=n.si.reduce((o,r)=>({...o,[r]:null!==(_=e.get("swapContract".concat(r.toUpperCase())))&&void 0!==_?_:void 0}),{}),v="true"===e.get(a.q.ON_RAMP_DISABLED),C=null!==(u=e.get(a.q.ON_RAMP_CURRENCY_ID))&&void 0!==u?u:void 0,L=null!==(i=e.get(a.q.ON_RAMP_TOKEN_ADDRESS))&&void 0!==i?i:void 0,q=null!==(A=e.get(a.q.ON_RAMP_DEFAULT_AMOUNT))&&void 0!==A?A:void 0,f="true"===e.get(a.q.ON_RAMP_AS_DEFAULT),w="true"===e.get(a.q.ON_RAMP_LOCK_TOKEN),M="true"===e.get(a.q.STAKE_DISABLED),b=null!==(m=e.get(a.q.PRIMARY_COLOR))&&void 0!==m?m:void 0,I=null!==(R=e.get(a.q.BACKGROUND_COLOR))&&void 0!==R?R:void 0,K="true"===e.get(a.q.LIGHT_MODE),U=null!==(c=e.get(a.q.ROUNDED_CORNERS))&&void 0!==c?c:void 0,F=null!==(O=e.get(a.q.PADDING))&&void 0!==O?O:void 0;return{generalParams:{refId:T,network:o,hideChartLink:p,hideReferLink:P},swapParams:{swapDisabled:D,swapFromTokenAddress:E,swapToTokenAddress:N,swapLockToToken:y,swapMultiChainContracts:k,swapFromTokenAmount:S,swapToTokenAmount:g},onRampParams:{onRampDisabled:v,onRampCurrencyId:C,onRampTokenAddress:L,onRampDefaultAmount:q,onRampAsDefault:f,onRampLockToken:w},stakeParams:{stakeDisabled:M},brandingParams:{primaryColor:b,backgroundColor:I,lightMode:K,roundedCorners:U,padding:F}}},this.configToQueryParameters=e=>{var o,r,n,t,s;let d={[a.q.SWAP_DISABLED]:null===(o=e.swapParams.swapDisabled)||void 0===o?void 0:o.toString(),[a.q.SWAP_TO_TOKEN_ADDRESS]:e.swapParams.swapToTokenAddress,[a.q.SWAP_LOCK_TO_TOKEN]:null===(r=e.swapParams.swapLockToToken)||void 0===r?void 0:r.toString(),[a.q.ON_RAMP_DISABLED]:null===(n=e.onRampParams.onRampDisabled)||void 0===n?void 0:n.toString(),[a.q.ON_RAMP_AS_DEFAULT]:null===(t=e.onRampParams.onRampAsDefault)||void 0===t?void 0:t.toString(),[a.q.ON_RAMP_DEFAULT_AMOUNT]:e.onRampParams.onRampDefaultAmount,[a.q.ON_RAMP_TOKEN_ADDRESS]:e.onRampParams.onRampTokenAddress,[a.q.ON_RAMP_LOCK_TOKEN]:null===(s=e.onRampParams.onRampLockToken)||void 0===s?void 0:s.toString(),[a.q.STAKE_DISABLED]:e.stakeParams.stakeDisabled.toString(),[a.q.NETWORK]:e.generalParams.network,[a.q.LIGHT_MODE]:e.brandingParams.lightMode.toString(),[a.q.PRIMARY_COLOR]:e.brandingParams.primaryColor,[a.q.BACKGROUND_COLOR]:e.brandingParams.backgroundColor,[a.q.ROUNDED_CORNERS]:e.brandingParams.roundedCorners,[a.q.PADDING]:e.brandingParams.padding,[a.q.REF_ID]:e.generalParams.refId},l=new URLSearchParams;for(let[e,o]of Object.entries(d))null!=o&&l.append(e,o);return l}}}},40729:function(e,o,r){"use strict";r.r(o),r.d(o,{__N_SSP:function(){return a}});var n=r(73318),a=!0;o.default=n.u}},function(e){e.O(0,[1028,2580,8608,5229,6715,8006,2856,1672,544,180,9774,2888,179],function(){return e(e.s=61909)}),_N_E=e.O()}]);