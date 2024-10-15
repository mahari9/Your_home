import{r as u,G as v,e as j,u as b,j as o,S as g}from"./index-d279e8cb.js";import{c as x,l as C,a as M,M as y,T as L,b as m,L as f}from"./TileLayer-c207dc73.js";import{u as _}from"./useGetPosts-47d41259.js";import"./posts-91e32ef6.js";const P=x(function(i,s){const t=new C.Popup(i,s.overlayContainer);return M(t,s)},function(i,s,{position:t},c){u.useEffect(function(){const{instance:e}=i;function l(p){p.popup===e&&(e.update(),c(!0))}function d(p){p.popup===e&&c(!1)}return s.map.on({popupopen:l,popupclose:d}),s.overlayContainer==null?(t!=null&&e.setLatLng(t),e.openOn(s.map)):s.overlayContainer.bindPopup(e),function(){var h;s.map.off({popupopen:l,popupclose:d}),(h=s.overlayContainer)==null||h.unbindPopup(),s.map.removeLayer(e)}},[i,s,c,t])}),N="_dashboardBody_15jet_1",A="_mapContainer_15jet_6",B="_buildingModal_15jet_12",S="_showModal_15jet_49",w="_generalInfo_15jet_53",k="_info_15jet_71",D="_price_15jet_88",I="_buttonAdvanced_15jet_97",E="_closeModal_15jet_112",z="_iconClose_15jet_129",$="_headerDashboard_15jet_133",F="_description_15jet_152",G="_subtitle_15jet_156",n={dashboardBody:N,mapContainer:A,buildingModal:B,showModal:S,generalInfo:w,info:k,price:D,buttonAdvanced:I,closeModal:E,iconClose:z,headerDashboard:$,description:F,subtitle:G};function H(a){return v({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"}}]})(a)}function U(){const{activeBuilding:a,setActiveBuilding:i}=j(),{data:s,isLoading:t}=_(),c=a&&a.join(","),r=b();if(t)return o.jsx(g,{});const e=a&&(s==null?void 0:s.posts.find(l=>l.coords[0]===c));return o.jsx("div",{className:`${n.buildingModal} ${a?n.showModal:""}`,children:e&&o.jsxs(o.Fragment,{children:[o.jsx("button",{className:n.closeModal,onClick:()=>i(null),children:o.jsx(H,{className:n.iconClose})}),o.jsx("img",{src:`/${e.imgs[0]}`}),o.jsxs("div",{className:n.generalInfo,children:[o.jsx("span",{children:e.typeProperty}),o.jsx("span",{children:e.listingPurpose}),o.jsxs("span",{children:[o.jsx("img",{src:"/location.svg"}),e.location]})]}),o.jsxs("div",{className:n.info,children:[o.jsx("h2",{children:e.title}),o.jsx("span",{className:n.subtitle,children:[e.subtitle]}),o.jsxs("span",{className:n.price,children:[e.price.toLocaleString("en-US")," Birr"]}),o.jsx("span",{className:n.description,children:e.description})]}),o.jsx("button",{className:n.buttonAdvanced,onClick:()=>r(`/app/post/${e._id}`),children:"Details"})]})})}const Z=new f.icon({iconUrl:"/building.svg",iconSize:[32,32]}),O=new f.icon({iconUrl:"/location.svg",iconSize:[32,32]});function q(){const[a,i]=u.useState([9.02497,38.74689]),{data:s,isLoading:t}=_(),{setActiveBuilding:c}=j();if(u.useEffect(()=>{navigator.geolocation.getCurrentPosition(e=>{const l=e.coords.latitude,d=e.coords.longitude;i([l,d])})},[]),t)return o.jsx(g,{});const r=s.posts.map(e=>e.coords[0].split(",").map(parseFloat));return o.jsxs("div",{className:n.mapContainer,children:[o.jsxs("div",{className:n.headerDashboard,children:[o.jsx("h1",{children:"Your Home"}),o.jsx("span",{children:"Click the building icon on the map to see details"})]}),o.jsx("div",{id:"map",children:o.jsxs(y,{center:a,zoom:14,zoomControl:!1,scrollWheelZoom:!0,style:{height:"100dvh",width:"100%",position:"absolute",left:0},children:[o.jsx(L,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"}),o.jsx(m,{position:a,icon:O,eventHandlers:{click:e=>{console.log("marker clicked",e)}},children:o.jsx(P,{children:"You are here!"})}),r.map(e=>o.jsx(m,{position:e,icon:Z,eventHandlers:{click:()=>c(e)}},e))]})}),o.jsx(U,{})]})}export{q as default};
