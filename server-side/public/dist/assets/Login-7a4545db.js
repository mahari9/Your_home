import{u as x,a as j,n as l,r as i,j as e,S as m,L as f}from"./index-fb896bb1.js";import{s as b,R as v}from"./ReturnButton-bc027639.js";import{u as L}from"./usePreventAccess-e0180405.js";const w="/";async function y(r){try{return await(await fetch(`${w}api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json()}catch(n){throw new Error(n)}}function S(){const r=x(),{mutate:n,isLoading:a}=j({mutationFn:s=>y(s),onSuccess:s=>{s.status==="success"&&(l.success(s.message),b(s.token),r("/app")),s.status==="fail"&&l.error(s.message)}});return{mutate:n,isLoggingIn:a}}const _="_interfaceWrapper_1mq9t_1",F="_loginForm_1mq9t_17",M="_rememberMe_1mq9t_56",o={interfaceWrapper:_,loginForm:F,rememberMe:M};function N(){const[r,n]=i.useState(""),[a,s]=i.useState(""),u=L(),{mutate:d,isLoggingIn:c}=S(),[p,h]=i.useState(!1);function g(t){t.preventDefault(),!(!a||!r)&&d({email:r,password:a})}return u?e.jsx(m,{}):e.jsxs("div",{className:o.interfaceWrapper,children:[e.jsx(v,{}),c&&e.jsx(m,{}),!c&&e.jsxs("form",{className:o.loginForm,onSubmit:t=>g(t),children:[e.jsxs("div",{className:o.headingWrapper,children:[e.jsx("h2",{children:"Login"}),e.jsx("h3",{children:"Fill in your personal information"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email adress"}),e.jsx("input",{type:"email",placeholder:"Your Email",value:r,onChange:t=>n(t.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",placeholder:"Your password",value:a,onChange:t=>s(t.target.value)})]}),e.jsxs("div",{className:o.rememberMe,children:[e.jsx("input",{type:"checkbox",id:"rememberMe",checked:p,onChange:t=>h(t.target.checked)}),e.jsx("label",{htmlFor:"rememberMe",children:"Remember me"})]}),e.jsxs("span",{children:["`You don't have an existing account?` ",e.jsx(f,{to:"/register",children:"Register"})]}),e.jsx("button",{children:"Login"})]})]})}export{N as default};