__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t={copy:r(d[0]).default,delete:r(d[1]).default,embed:r(d[2]).default,options:r(d[3]).default,report:r(d[4]).default,share:r(d[5]).default,unfollow:r(d[6]).default};e.default=function({onClose:o,openModal:l,postId:u}){const n=t[l];return a(d[7]).createElement(n,{onClose:o,postId:u})}},17694720,[17694721,13631490,17694722,17694723,17694724,17694725,17694726,3]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){const n=r(d[0]).usePost(t,r(d[1]).getCopyUrl);return a(d[2]).createElement(i(d[3]),{onClose:o,postUrl:n})}},17694721,[16318475,16318476,3,16318471]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(3203);e.default=function({onClose:o,postId:l}){const c=r(d[1]).useDispatch();return a(d[3]).createElement(r(d[4]).Dialog,{body:r(d[0])(3068),title:t},a(d[3]).createElement(r(d[4]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{c(r(d[2]).deletePost(l)),o()}},r(d[5]).DELETE_TEXT),a(d[3]).createElement(r(d[4]).DialogItem,{onClick:o},r(d[5]).CANCEL_TEXT))},e.DELETE_POST_PROMPT=t},13631490,[9699332,5,9961664,3,9699357,9699347]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var o=function({onClose:o,postId:s}){const t=i(d[0])(),u=r(d[1]).usePost(s,o=>o.code)||'',n=r(d[1]).usePost(s,o=>o.productType===r(d[2]).PRODUCT_TYPE_CLIPS),P=r(d[1]).usePost(s,o=>o.productType===r(d[2]).PRODUCT_TYPE_IGTV),c=r(d[1]).usePost(s,o=>!!o.isVideo),l=r(d[1]).usePost(s,o=>{var s;return i(d[3])(null===(s=o.owner)||void 0===s?void 0:s.id)});return a(d[4]).createElement(i(d[5]),{analyticsContext:t,code:u,id:s,isClipsPost:n,isGuide:!1,isIGTVPost:P,isVideo:c,onClose:o,ownerId:l})};e.default=o},17694722,[9961996,16318475,9961489,9699335,3,16318472]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){return a(d[0]).createElement(r(d[1]).Dialog,{onModalClose:o},a(d[0]).createElement(i(d[2]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[3]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[4]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[5]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[6]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[7]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[8]),{onClose:o,postId:t}),a(d[0]).createElement(r(d[1]).DialogItem,{onClick:o},r(d[9]).CANCEL_TEXT))}},17694723,[3,9699357,17694727,17694728,17694729,17694730,17694731,16318474,17694732,9699347]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){const s=r(d[0]).usePost(t,r(d[1]).getPostOwnedByViewer),l=r(d[0]).usePost(t,r(d[2]).getPostType),u=i(d[3])(),c=r(d[0]).usePost(t,t=>t.productType===r(d[4]).PRODUCT_TYPE_IGTV),n=r(d[5]).useSetPostModal(),P=r(d[6]).isMobile()||c;return s&&P?a(d[8]).createElement(r(d[9]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[7]).logAction_DEPRECATED('delete_post_click',{source:u,type:l}),n('delete')}},r(d[10])(2253)):null}},17694727,[16318475,17694733,16318477,9961996,9961489,13107216,9699340,9699365,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.getPostOwnedByViewer=function(t){var n;return(null===(n=t.owner)||void 0===n?void 0:n.id)===r(d[0]).getViewerId()}},17694733,[9699343]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const o=r(d[0])(396);e.default=function({onClose:t,postId:n}){const s=r(d[1]).usePost(n,r(d[2]).getPostOwnedByViewer),c=r(d[3]).useSetPostModal();return s?null:a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[4]).isUserLoggedIn()?c('report'):r(d[5]).redirect(r(d[6]).buildLoginLink(window.location.href,{source:'logged_out_post_report_redirect'}))}},o)}},17694728,[9699332,16318475,17694733,13107216,9961565,9699333,9699353,3,9699357]);
__d(function(g,r,i,a,m,e,d){"use strict";function o(o,t){const n=r(d[1]).getPostById(o,t),{owner:l}=n;if(!l)return!1;const u=r(d[2]).getRelationship(o.relationships,l.id);return r(d[2]).followedByViewer(u)}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(1688);e.default=function({postId:n,onClose:l}){const u=r(d[3]).useSelector(t=>o(t,n)),s=r(d[4]).useSetPostModal(),c=r(d[5]).usePost(n,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id}),f=i(d[6])();return u?a(d[8]).createElement(r(d[9]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[7]).logConnectionAction({eventName:'unfollow_button_tapped',containerModule:f,targetId:c}),s('unfollow')}},t):null}},17694729,[9699332,9961658,9961480,5,13107216,16318475,9961996,9961611,3,9699357]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const n=r(d[0]).useSelector(r(d[1]).selectPageIdentifier),l=r(d[2]).usePost(o,t=>{var o;return!!(null===(o=t.code)||void 0===o?void 0:o.length)})&&n!==i(d[3]).postPage,s=r(d[2]).usePost(o,r(d[4]).getShareURL);return l?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{i(d[5]).push(s)}},r(d[8])(779)):null}},17694730,[5,9699364,16318475,9699345,16318476,9699333,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const o=r(d[0]).usePostAndOwner(t,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal();return o?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>s('share')},r(d[5])(1197)):null}},17694731,[16318475,16318476,13107216,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(2872),o=r(d[0])(2476);e.default=function({onClose:s,postId:n}){const c=r(d[1]).usePostAndOwner(n,r(d[2]).getIsShareable),u=r(d[3]).useSetPostModal(),l=i(d[4])(),p=i(d[5])(),P=r(d[1]).usePost(n,r(d[6]).getPostType),y=r(d[1]).usePost(n,r(d[2]).getCopyUrl);return c?a(d[9]).createElement(r(d[10]).DialogItem,{onClick:()=>{if(!r(d[7]).canCopy())return void u('copy');const o=r(d[7]).copy(y);r(d[8]).logAction_DEPRECATED('postLinkCopy',{source:p,type:P}),o?(l({text:t}),s()):u('copy')}},o):null},e.LINK_COPIED_PROMPT=t,e.COPY_LINK_TEXT=o},16318474,[9699332,16318475,16318476,13107216,12582920,9961996,16318477,9961865,9699365,3,9699357]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(){const t=r(d[0]).useDispatch();return s=>{t(r(d[1]).showToast(s))}}},12582920,[5,9961704]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:o,onClose:t}){const n=r(d[0]).usePostAndOwner(o,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal(),l=i(d[3])(),u=r(d[0]).usePost(o,r(d[4]).getPostType),c=r(d[0]).usePost(o,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id});return n?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{r(d[5]).logAction_DEPRECATED('embedCodeClick',{mediaId:o,ownerId:c,source:l,type:u}),s('embed')}},r(d[8])(812)):null}},17694732,[16318475,16318476,13107216,9961996,16318477,9699365,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:n,postId:o}){const t=r(d[0]).usePostAndOwner(o,(n,o)=>o.id),s=r(d[0]).usePostAndOwner(o,(n,o)=>o.username),u=r(d[0]).usePostAndOwner(o,(n,o)=>o.profilePictureUrl),l=i(d[1])();return a(d[2]).createElement(i(d[3]),{analyticsContext:l,onClose:n,ownerID:t,ownerProfilePicURL:u,ownerUsername:s,postID:o})}},17694724,[16318475,9961996,3,17694734]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const s=r(d[0]).useDispatch(),o=i(d[1])(),u=r(d[2]).usePost(t,r(d[3]).getPostType),l=r(d[2]).usePost(t,t=>{var n;const s=(null===(n=t.owner)||void 0===n?void 0:n.username)||'';return r(d[4]).getShareDescription(s,u)}),c=r(d[2]).usePostAndOwner(t,r(d[5]).getIsShareable),_=r(d[2]).usePost(t,t=>t.shareIds),E=r(d[2]).usePost(t,r(d[5]).getShareURL);return r(d[6]).useEffect(()=>{r(d[7]).startFunnel(),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_BUTTON_CLICK),r(d[8]).logAction_DEPRECATED('shareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_SHARE_SHEET),s(r(d[9]).loadPostShareIds(t))},[o,s,t,u]),a(d[6]).createElement(i(d[10]),{analyticsContext:o,description:l,onClose:()=>{r(d[7]).endFunnel(),n()},onNativeShare:()=>{r(d[8]).logAction_DEPRECATED('nativeShareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_NATIVE),n(),r(d[4]).shareWithNative(l,E,'ig_web_button_native_share').then(r(d[7]).endFunnel)},postId:t,postType:u,shareEnabled:c,shareIds:_,url:E,utmSource:"ig_web_button_share_sheet"})}},17694725,[5,9961996,16318475,16318477,14811144,16318476,3,14811145,9699365,9961664,14811148]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const o=i(d[0])(),s=r(d[1]).usePost(t,t=>{var n;return null===(n=t.owner)||void 0===n?void 0:n.id});return a(d[2]).createElement(i(d[3]),{analyticsContext:o,analyticsExtra:{},onClose:n,userId:s})}},17694726,[9961996,16318475,3,9962003]);