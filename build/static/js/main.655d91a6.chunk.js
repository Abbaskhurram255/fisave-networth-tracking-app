(this["webpackJsonpnetworth-app"]=this["webpackJsonpnetworth-app"]||[]).push([[0],{103:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),o=a.n(l),c=a(50),s=a.n(c),i=(a(103),a(1)),u=a(2),m=a(3),h=a(4),d=(a(46),a(9)),p=a(6),v=a(15),f="https://vast-temple-28454.herokuapp.com",E="128e7372-844f-11ea-bc55-0242ac130003",b=a(51),g=a.n(b),y={saveAuthToken:function(e){window.sessionStorage.setItem(E,e)},getAuthToken:function(){return window.sessionStorage.getItem(E)},clearAuthToken:function(){window.sessionStorage.removeItem(E)},hasAuthToken:function(){return!!y.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))},parseJwt:function(e){return g()(e)},readJwtToken:function(){return y.parseJwt(y.getAuthToken())},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=y._getMsUntilExpiry(y.readJwtToken());n=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(n)}},k=y,w=null,_=["mousedown","mousemove","keypress","scroll","touchstart"],N={setIdleCallback:function(e){w=e},resetIdleTimer:function(e){clearTimeout(r),r=setTimeout(w,3e5)},regiserIdleTimerResets:function(){_.forEach((function(e){return document.addEventListener(e,N.resetIdleTimer,!0)}))},unRegisterIdleResets:function(){clearTimeout(r),_.forEach((function(e){return document.removeEventListener(e,N.resetIdleTimer,!0)}))}},j=N,O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleDropDown=function(){n.state.showDropDown?n.setState({showDropDown:!1}):n.setState({showDropDown:!0})},n.handleUnDrop=function(){n.setState({showDropDown:!1})},n.state={showDropDown:!1},n}return Object(u.a)(a,[{key:"handleLogoutClick",value:function(){Promise.all([k.clearAuthToken(),k.clearCallbackBeforeExpiry(),j.unRegisterIdleResets()]).catch((function(e){console.error({error:e})}))}},{key:"render",value:function(){var e=this,t=[{id:1,name:"About",path:"/about"},{id:2,name:"Create an Account",path:"/register"},{id:3,name:"Log In",path:"/login"}];return k.hasAuthToken()?(t=[{id:1,name:"About",path:"/about"},{id:3,name:"Networth",path:"/networth"}],o.a.createElement("div",{className:"Menu",onMouseEnter:this.handleDropDown,onMouseLeave:this.handleUnDrop},o.a.createElement(v.a,{className:"burgerIcon",onClick:this.handleDropDown,icon:p.a}),this.state.showDropDown?o.a.createElement("ul",{id:"nav-leader",onClick:this.handleUnDrop},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(d.Link,{className:"menuLink",to:e.path},o.a.createElement("h3",null,e.name)))})),o.a.createElement("li",{className:"Header__logged-in"},o.a.createElement(d.Link,{className:"menuLink",onClick:this.handleLogoutClick,to:"/"}," ",o.a.createElement("h3",null,"Logout")," "))):null)):o.a.createElement("div",{className:"Menu",onMouseEnter:this.handleDropDown,onMouseLeave:this.handleUnDrop},o.a.createElement(v.a,{className:"burgerIcon",onClick:this.handleDropDown,icon:p.a}),this.state.showDropDown?o.a.createElement("ul",{id:"nav-leader"},t.map((function(t){return o.a.createElement("li",{key:t.id,onClick:e.handleUnDrop},o.a.createElement(d.Link,{className:"menuLink",to:t.path},o.a.createElement("h3",null,t.name)))}))):null)}}]),a}(l.Component),S=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Nav"},o.a.createElement("div",{id:"topLeftNav"}),o.a.createElement("div",{id:"topRightNav"},o.a.createElement(O,null)),o.a.createElement("div",{id:"mainTitle"},o.a.createElement(d.Link,{to:"/"},"Fisave")))}}]),a}(l.Component),C=a(11),D=a(17);a(113);D.b.add(p.b,p.c,p.e,p.d,p.h,p.i);var F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleNetworth=function(e){e.preventDefault();var t,a=e.target.name.replace(/[\s()/]/g,""),r=e.target.value;(r<0||r.includes("-")?n.setState(Object(C.a)({error:"No negative values"},"".concat(a,"_disabled"),!0)):""===r&&(r=0),r>=0)&&n.setState((t={},Object(C.a)(t,"".concat(a),r),Object(C.a)(t,"total",""),Object(C.a)(t,"".concat(a,"_disabled"),!1),t))},n.handleHelpIcon=function(){!1===n.state.showDescription&&n.setState({showDescription:!0})},n.handleHelpIconRemove=function(){n.state.showDescription&&n.setState({showDescription:!1})},n.state={CreditCard:0,Investments:0,Loans:0,Savings:0,total:"",showDescription:!1,wallet:[{id:1,categories:"Credit Card",icons:p.c},{id:2,categories:"Investments",icons:p.e},{id:3,categories:"Loans",icons:p.d},{id:4,categories:"Savings",icons:p.h}],CreditCard_disabled:!1,Investments_disabled:!1,Loans_disabled:!1,Savings_disabled:!1},n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),a=parseFloat(this.state.CreditCard),n=parseFloat(this.state.Investments)-a+parseFloat(this.state.Savings)-parseFloat(this.state.Loans);n=t.format(n),this.setState({total:n})}},{key:"render",value:function(){var e=this,t=this.state.wallet;if(t.length>0)return o.a.createElement("div",{className:"Calculator"},o.a.createElement("div",{className:"background"},o.a.createElement("form",{className:"CalculatorForm"},o.a.createElement("p",{className:"preview"},"Try out the net-worth-calculator:"),t?o.a.createElement("div",{className:"preview-form"},t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("br",null),o.a.createElement("label",{htmlFor:t.categories},o.a.createElement(v.a,{className:"icon",icon:t.icons})," ",t.categories," $:"," "),o.a.createElement("input",{type:"number",className:"input",name:t.categories,onChange:function(t){return e.handleNetworth(t)}}))})),o.a.createElement("br",null)):null,o.a.createElement("br",null),!1===this.state.CreditCard_disabled&&!1===this.state.Investments_disabled&&!1===this.state.Loans_disabled&&!1===this.state.Savings_disabled?o.a.createElement("button",{type:"submit",className:"submitButton",onClick:function(t){return e.handleSubmit(t)}},"Submit"):o.a.createElement("span",null,o.a.createElement("p",{className:"disabled_submitButton"},"Submit"),o.a.createElement("p",null,this.state.error)),o.a.createElement("p",null,o.a.createElement(v.a,{onMouseEnter:this.handleHelpIcon,onMouseLeave:this.handleHelpIconRemove,className:"HelpIcon",icon:p.i})," ","Total Net Worth: ",this.state.total)),this.state.showDescription?o.a.createElement("i",{className:"description"},"Networth is the total of your saved assests, minus any debts you are still paying off. Create an account to learn more!"):null))}}]),a}(l.Component),x=(a(114),a(12)),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=[{value:30,name:"Debts"},{value:70,name:" ".concat("Assets")}],t=x.c()(e.map((function(e){return e.value}))),a=x.a().innerRadius(0).outerRadius(100),n=x.b("#152950","#738683");return o.a.createElement("div",{className:"Preview"},o.a.createElement("section",{className:"Preview-total"},o.a.createElement("section",{className:"Preview-text"},o.a.createElement("h1",null,o.a.createElement(d.Link,{className:"mainLink",to:"register"},"Create")," ","an account or"," ",o.a.createElement(d.Link,{className:"mainLink",to:"/login"},"log in")," ","to track your net worth & see your full report!"),o.a.createElement("br",null),o.a.createElement("h2",{className:"secondDescription"},"Add goals and learn more about how you can save.")),o.a.createElement("svg",{className:"Pie"},o.a.createElement("g",{transform:"translate(".concat(200,",").concat(200,")")},t.map((function(e,r){var l=n(r/(t.length-1));return o.a.createElement("path",{key:e.index,d:a(e),fill:l})})),o.a.createElement("text",{textAnchor:"middle",x:"1",y:"-8",fontSize:"14",fill:"white"},e.map((function(e){return"  ".concat(e.name,": ").concat(Math.round(e.value),"%","  "," ")})))))))}}]),a}(l.Component);a(48),a(115);var T=function(){return o.a.createElement("div",{className:"Testamonials"},o.a.createElement("br",null),o.a.createElement("h3",null,'"Fisave helped me reach my goal of purchasing a home, by helping me keep track of my monthly net worth." --Fisave user',o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),'"Fisave makes tracking your finances simple & easy! ',o.a.createElement("br",null),' After using Fisave, I am no longer intimidated by managing my money." --Fisave user'),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null))},A=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Main"},o.a.createElement(F,null),o.a.createElement(L,null),o.a.createElement("br",null),o.a.createElement(T,null))}}]),a}(l.Component),R=a(16),I=(a(116),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"About"},o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement("b",null,"Fisave is a simple tool for helping you track your net worth and meet your financial goals."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),"Our platform is designed to ",o.a.createElement("b",null,"make tracking your net worth easy")," ","because you can track your",o.a.createElement("br",null),o.a.createElement("br",null),"investment accounts, credit card payments, student loans, savings accounts, & more all in one place.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"Why is it important to track your net worth overtime?"),o.a.createElement("br",null),o.a.createElement("br",null),"Tracking your net worth helps you to plan for the long term. It is motivating to see your net worth grow,",o.a.createElement("br",null),o.a.createElement("br",null),"but it is also important to be realistic and strategic in order to meet your financial goals."))}}]),a}(l.Component)),P={postUser:function(e){return fetch("".concat(f,"/api/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postLogin:function(e){var t=e.user_name,a=e.password;return fetch("".concat(f,"/api/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user_name:t,password:a})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return k.saveAuthToken(e.authToken),j.regiserIdleTimerResets(),k.queueCallbackBeforeExpiry((function(){P.postRefreshToken()})),e}))},postRefreshToken:function(){return fetch("".concat(f,"/api/auth/refresh"),{method:"POST",headers:{authorization:"Bearer ".concat(k.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return k.saveAuthToken(e.authToken),k.queueCallbackBeforeExpiry((function(){P.postRefreshToken()})),e})).catch((function(e){console.error(e)}))}},G=P,B=(a(117),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={error:null},e.handleRegistrationSuccess=function(t){e.props.history.push("/login")},e.handleSubmit=function(t){t.preventDefault();var a=t.target,n=a.full_name,r=a.nick_name,l=a.user_name,o=a.password;e.setState({error:null}),G.postUser({user_name:l.value.toLowerCase(),password:o.value,full_name:n.value,nickname:r.value}).then((function(t){n.value="",r.value="",l.value="",o.value="",e.props.onRegistrationSuccess(),e.handleRegistrationSuccess()})).catch((function(t){e.setState({error:t.error})}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.error;return o.a.createElement("div",{id:"registrationComponent"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{role:"alert"},e&&o.a.createElement("p",{className:"red"},e)),o.a.createElement("form",{className:"RegistrationForm",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"full_name"},o.a.createElement("label",{htmlFor:"RegistrationForm__full_name"},"Full name: "),o.a.createElement("input",{name:"full_name",type:"text",required:!0,id:"RegistrationForm__full_name"})),o.a.createElement("div",{className:"user_name"},o.a.createElement("label",{htmlFor:"RegistrationForm__user_name"},"User name: "),o.a.createElement("input",{name:"user_name",autoComplete:"username",type:"text",required:!0,id:"RegistrationForm__user_name"})),o.a.createElement("div",{className:"password"},o.a.createElement("label",{htmlFor:"RegistrationForm__password"},"Password*: "),o.a.createElement("input",{autoComplete:"newpassword",name:"password",type:"password",required:!0,id:"RegistrationForm__password"}),o.a.createElement("label",{htmlFor:"RegistrationForm__passwordnotes",className:"RegistrationForm__notes"},o.a.createElement("br",null),"*Password must have at least 1 upper case letter, 1 lower case letter, 1 number, and 1 special character.")),o.a.createElement("div",{className:"nick_name"},o.a.createElement("label",{htmlFor:"RegistrationForm__nick_name"},"Nickname: "),o.a.createElement("input",{name:"nick_name",type:"text",required:!0,id:"RegistrationForm__nick_name"})),o.a.createElement("button",{className:"submitButton",type:"submit"}," ","Register")))}}]),a}(l.Component));B.defaultProps={onRegistrationSuccess:function(){},history:{push:function(){}}};a(118);var U=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleRedirect=function(){n.setState({error:"You have been logged out due to inactivity"})},n.handleLoginSuccess=function(){n.props.history.push("/networth")},n.handleSubmitJwtAuth=function(e){e.preventDefault(),n.setState({error:null,loader:!0});var t=e.target,a=t.user_name,r=t.password;G.postLogin({user_name:a.value.toLowerCase(),password:r.value}).then((function(e){a.value="",r.value="",n.props.onLoginSuccess(),n.handleLoginSuccess()})).catch((function(e){n.setState({error:e.error,loader:!1})}))},n.state={error:null,loader:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.error;return o.a.createElement("div",{className:"Login"},o.a.createElement("h1",null,"Welcome back!"),o.a.createElement("form",{className:"LoginForm",onSubmit:this.handleSubmitJwtAuth},o.a.createElement("div",{role:"alert"},o.a.createElement("p",{className:"red"},e)),o.a.createElement("div",{className:"user_name"},o.a.createElement("label",{htmlFor:"LoginForm__user_name"},"User name: "),o.a.createElement("input",{required:!0,autoComplete:"username",name:"user_name",id:"LoginForm__user_name"})),o.a.createElement("div",{className:"password"},o.a.createElement("label",{htmlFor:"LoginForm__password"},"Password: "),o.a.createElement("input",{required:!0,autoComplete:"current-password",name:"password",type:"password",id:"LoginForm__password"})),o.a.createElement("button",{className:"submitButton",type:"submit"},this.state.loader?o.a.createElement("div",{className:"small-loader"}):"Login")))}}]),a}(l.Component);U.defaultProps={onLoginSuccess:function(){},location:{},history:{push:function(){}}};a(49);var M=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"KeyMenu"},o.a.createElement("p",null,"Key:"),o.a.createElement("ul",{className:"Key"},o.a.createElement("li",null,o.a.createElement("p",{className:"Debt"}," ")),o.a.createElement("li",null,o.a.createElement("p",null," Debts")),o.a.createElement("li",null,o.a.createElement("p",{className:"Asset"}," ")),o.a.createElement("li",null,o.a.createElement("p",null," Assets"))))}}]),a}(l.Component),W=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=parseInt(this.props.credit)+parseInt(this.props.loans)+parseInt(this.props.otherDebt),t=parseInt(this.props.investments)+parseInt(this.props.savings)+parseInt(this.props.otherAssets),a=t+e,n=[{value:e/a*100,name:"Debts "},{value:t/a*100,name:" Assets"}],r=x.c()(n.map((function(e){return e.value}))),l=x.a().innerRadius(0).outerRadius(100),c=x.b("#152950","#738683");return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Portfolio Allocation"),0===a?o.a.createElement("div",{className:"report"},o.a.createElement("br",null),o.a.createElement("i",null,"Add values below to see a breakdown")):o.a.createElement("div",null," ",o.a.createElement("svg",{className:"report"},o.a.createElement("g",{transform:"translate(".concat(100,",").concat(100,")")},r.map((function(e,t){var a=c(t/(r.length-1));return o.a.createElement("path",{key:e.index,d:l(e),fill:a})})),o.a.createElement("text",{textAnchor:"middle",x:"0",y:"125",fill:"black"},n.map((function(e){return"".concat(e.name,": ").concat(Math.round(e.value),"%")}))))),o.a.createElement(M,null)),o.a.createElement("br",null),o.a.createElement("br",null))}}]),a}(l.Component),z=(a(119),o.a.createContext({entries:[{}],handleDeleteEntry:function(){},goals:[{}],handleDeleteGoal:function(){},advice:[{}],delete_loader:Boolean})),H=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.context.goals,a=0,n=null,r=null;null!=this.context.entries[0]&&this.context.entries[0].length>0&&(n=this.context.entries[0].length,r=this.context.entries[0][n-1]);var l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return null!=r&&(a=r.networth_total,a=Number(a.replace(/[^0-9.-]+/g,""))),o.a.createElement("div",{className:"goalsList"},o.a.createElement("h3",{className:"goalsLabel"},"Saved Goals List:"),null!=t[0]&&t[0].length>0?o.a.createElement("ul",null,t[0].map((function(t){return o.a.createElement("li",{className:"goalsListItem",key:t.id},t.goal_name,": ",l.format(t.goal_value),o.a.createElement("br",null),"Percent to Goal:"," ",a<t.goal_value&&a>=0?"".concat((a/parseFloat(t.goal_value)*100).toFixed(2),"%"," ","\n                    "):null,a<0?"0%".concat(" "):null,a>t.goal_value||a===t.goal_value?"$100%".concat(" "):null,o.a.createElement("button",{id:t.id,className:"deleteButton",onClick:function(t){return e.context.handleDeleteGoal(t)}},e.props.loader?o.a.createElement("div",{className:"small-loader"}):"Delete"))}))):o.a.createElement("i",null,"Add a goal to track your progress"))}}]),a}(l.Component);H.contextType=z;var q=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.context.goals[0],t=0,a=null,n=null;null!=this.context.entries[0]&&this.context.entries[0].length>0&&(a=this.context.entries[0].length,n=this.context.entries[0][a-1]),null!=n&&(t=n.networth_total,t=Number(t.replace(/[^0-9.-]+/g,"")));var r=0;if(null!=e)for(var l=0;l<e.length;l++)r=parseFloat(e[l].goal_value)+r;var c=[0];c=r>0&&t<0?[0,100]:r>0&&t<r?[t/parseFloat(r)*100,100-t/parseFloat(r)*100]:r>0&&t===r||r>0&&t>r?[100,0]:[0,100];var s=x.c()(c),i=x.a().innerRadius(70).outerRadius(100),u=x.b("#152950","#eeee");return o.a.createElement("div",{className:"wheel"},o.a.createElement("h3",{className:"goalsLabel"},"Percent to All Goals:"),o.a.createElement("svg",{className:"report"},o.a.createElement("g",{transform:"translate(".concat(100,",").concat(100,")")},s.map((function(e,t){var a=u(t/(s.length-1));return o.a.createElement("g",{key:e.data},o.a.createElement("path",{key:e.index,d:i(e),fill:a}),o.a.createElement("text",{textAnchor:"middle",x:"0",y:"0",fill:"black"},c[0].toFixed(2),"%"))})))))}}]),a}(l.Component);q.contextType=z;var J={getGoals:function(){return fetch("".concat(f,"/api/goals"),{headers:{"content-type":"application/json",authorization:"bearer ".concat(k.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postGoals:function(e,t){return fetch("".concat(f,"/api/goals"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(k.getAuthToken())},body:JSON.stringify({goal_name:e,goal_value:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteGoals:function(e){return fetch("".concat(f,"/api/goals/").concat(e),{method:"DELETE",headers:{authorization:"bearer ".concat(k.getAuthToken())}}).then((function(e){if(!e.ok)return e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){console.error({error:e})}))}},Y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleDeleteGoal=function(e){var t=e.target;n.setState({deleteloader:!0}),J.deleteGoals(t.id)},n.handleGoal=function(e){e.preventDefault();var t=e.target.name;n.setState(Object(C.a)({},"".concat(t),e.target.value))},n.handleSubmitGoals=function(e){e.preventDefault();var t=null,a=null,r=n.state.goal_name,l=n.state.goal_value;n.setState({loader:!0}),null!=n.context.entries[0]&&n.context.entries[0].length>0&&(t=n.context.entries[0].length,a=n.context.entries[0][t-1]);var o=0;null!=a&&(o=a.networth_total,o=Number(o.replace(/[^0-9.-]+/g,""))),null!=n.state.goals[0]&&n.state.goals[0].length<=2?J.postGoals(r,l).then((function(e){n.setState({goal_name:"",goal_value:""})})).catch((function(e){n.setState({error:e.error})})):n.setState({error:"Limit to 3 goals"})},n.state={goals:[{}],goal_name:"",goal_value:"",error:"",id:0,loader:!1,deleteloader:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._mounted=!0,J.getGoals().then((function(t){e._mounted&&e.setState({goals:[t]})}))}},{key:"componentDidUpdate",value:function(){var e=this;this._mounted=!0,J.getGoals().then((function(t){e._mounted&&e.setState({goals:[t],loader:!1,deleteloader:!1})}))}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var e=this,t=this.state.goals;return o.a.createElement(z.Provider,{value:{goals:this.state.goals,handleDeleteGoal:this.handleDeleteGoal,entries:this.context.entries}},o.a.createElement("div",{id:"GoalsForm"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",{className:"sectionTitle"},"Your Financial Goals:"),o.a.createElement("div",{className:"Goals"},o.a.createElement("div",{className:"GoalsForm"},o.a.createElement("h3",{className:"goalsLabel"},"Save New Goals:"),o.a.createElement("form",{className:"Gaols-form",onSubmit:function(t){return e.handleSubmitGoals(t)}},o.a.createElement("div",{className:"inputs"},o.a.createElement("label",{htmlFor:"GoalsForm__goal_title"},"Goal: "),o.a.createElement("input",{required:!0,name:"goal_name",size:"30",value:this.state.goal_name,onChange:function(t){return e.handleGoal(t)},id:"GoalsForm__goal_title"}),o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("label",{className:"inputs",htmlFor:"GoalsForm__goal_title"},"Goal Value: $"),o.a.createElement("input",{required:!0,name:"goal_value",type:"number",value:this.state.goal_value,onChange:function(t){return e.handleGoal(t)},id:"GoalsForm__goal_value"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"submitButton",type:"submit"},this.state.loader?o.a.createElement("div",{className:"small-loader"}):"Add Goal"),o.a.createElement("div",null,t[0].length<=2?null:o.a.createElement("p",null,this.state.error)))),o.a.createElement(H,{loader:this.state.deleteloader}),o.a.createElement(q,null))),o.a.createElement("br",null),o.a.createElement("br",null))}}]),a}(l.Component);Y.contextType=z;var $={getCalculations:function(){return fetch("".concat(f,"/api/calculations"),{headers:{"content-type":"application/json",authorization:"bearer ".concat(k.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postCalculations:function(e,t,a,n,r,l){return fetch("".concat(f,"/api/calculations"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(k.getAuthToken())},body:JSON.stringify({networth_total:e,networth_total_value:t,networth_investments:a,networth_loans:n,networth_credits:r,networth_savings:l})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteCalculations:function(e){return fetch("".concat(f,"/api/calculations/").concat(e),{method:"DELETE",headers:{authorization:"bearer ".concat(k.getAuthToken())}}).then((function(e){if(!e.ok)return e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){console.error({error:e})}))}},K=(a(120),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClickDelete=function(t){t.preventDefault();var a=t.target.id;$.deleteCalculations(a).then(e.context.handleDeleteEntry())},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.context.entries[0],a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});if(null!=t&&t.length>0)for(var n=0;n<t.length;n++)t[n].networth_total.includes("-")?t[n].color="red":t[n].color="green";return o.a.createElement("div",{id:"Overtime",className:"Overtime"},this.context.entries.length>0?o.a.createElement("h2",{className:"Overtime-title"},"Historical Networth Data:"):null,null!=t&&t.length>0?o.a.createElement("div",{className:"Overtime-list"},t.map((function(t){return o.a.createElement("p",{style:{color:"".concat(t.color)},key:t.id},t.date_created.slice(5,7),"/",t.date_created.slice(0,4),": ",t.networth_total," ",o.a.createElement("button",{id:t.id,className:"deleteButton",onClick:e.handleClickDelete},"Delete"))}))):o.a.createElement("i",null,"Add your personal finance information to track your networth over time"),null!=t&&t.length>1?o.a.createElement("p",null,"Over your two most recent entries, your net worth has changed by"," ",a.format(t[t.length-1].networth_total_value-t[t.length-2].networth_total_value)):null,o.a.createElement("br",null),o.a.createElement("br",null))}}]),a}(l.Component));K.contextType=z;a(121);var V=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.context.advice[0],t=e[1],a=e[0],n=0;null!==this.context.entries[0]&&(n=this.context.entries[0].length);var r=0;return n>0&&(r=this.context.entries[0][n-1]),o.a.createElement("div",{id:"Advice",className:"Resources"},0===n?o.a.createElement("div",null,o.a.createElement("h2",null,"Financial Planning Resources:"),o.a.createElement("i",null,"Submit your most recent networth data to get the most accurate information")):null,r.networth_total_value<0?o.a.createElement("ul",{className:"list",id:"debtList"}," ",o.a.createElement("h2",null,"Financial Planning Resources:"),o.a.createElement("li",{key:a.id},"We see that you are working on paying off some debt, great work! You may want to check out ",o.a.createElement("br",null)," money saving sites like:"," ",a.content),o.a.createElement("br",null)):null,r.networth_total_value>=0?o.a.createElement("ul",{className:"list",id:"assetList"}," ",o.a.createElement("h2",null,"Financial Planning Resources:"),o.a.createElement("li",{key:t.id},"We see that you are saving money, which is great! You may want to consider ",o.a.createElement("br",null),"an investment account like ",t.content," to continue saving."," "),o.a.createElement("br",null)):null,o.a.createElement("br",null),o.a.createElement("br",null))}}]),a}(l.Component);V.contextType=z;var Q={getAdvice:function(){return fetch("".concat(f,"/api/advice"),{headers:{authorization:"bearer ".concat(k.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},X={getWallets:function(){return fetch("".concat(f,"/api/wallets"),{headers:{authorization:"bearer ".concat(k.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},Z=(a(122),a(20)),ee=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Guide"},o.a.createElement("h1",null,"Your personalized financial planning dashboard:"),o.a.createElement("div",{className:"Guide-title"},o.a.createElement("h3",null,"Dashboard Contents:")),o.a.createElement("ul",{className:"Guide-ul"},o.a.createElement("li",{className:"Guide-List"},o.a.createElement(Z.HashLink,{to:"#Portfolio"},o.a.createElement("b",null,"Portfolio"))),o.a.createElement("li",{className:"spacing"},o.a.createElement("b",null,"|")),o.a.createElement("li",{className:"Guide-List"},o.a.createElement(Z.HashLink,{to:"#Overtime"},o.a.createElement("b",null,"Historical Data"))),o.a.createElement("li",{className:"spacing"},o.a.createElement("b",null,"|")),o.a.createElement("li",{className:"Guide-List"},o.a.createElement(Z.HashLink,{to:"#Advice"},o.a.createElement("b",null,"Resources"))),o.a.createElement("li",{className:"spacing"},o.a.createElement("b",null,"|")),o.a.createElement("li",{className:"Guide-List"},o.a.createElement(Z.HashLink,{to:"#GoalsForm"},o.a.createElement("b",null,"Goals")))))}}]),a}(l.Component);D.b.add(p.b,p.c,p.e,p.d,p.h,p.f,p.g,p.i);var te=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleDeleteEntry=function(){$.getCalculations().then((function(e){return n.setState({entries:[e],error:"",total:""})})).then((function(e){null!=n.state.entries[0]&&n.state.entries[0].length<12&&n.setState({total_disabled:!1})}))},n.handleNetworth=function(e){e.preventDefault();var t,a=e.target.name.replace(/[\s()/]/g,""),r=e.target.value;(n.setState({error:""}),r<0||r.includes("-")?n.setState(Object(C.a)({error:"No negative values"},"".concat(a,"_disabled"),!0)):""===r&&(r=0),r>=0)&&n.setState((t={networth:!1},Object(C.a)(t,"".concat(a),r),Object(C.a)(t,"total",""),Object(C.a)(t,"".concat(a,"_disabled"),!1),t))},n.icons=function(e){return"faCreditCard"===e?p.c:"faLandmark"===e?p.e:"faHandHoldingUsd"===e?p.d:"faPiggyBank"===e?p.h:"faMoneyCheck"===e?p.g:"faMoneyBillAlt"===e?p.f:void 0},n.state={CreditCardDebt:0,InvestmentsStocksBonds:0,Loans:0,Savings:0,otherDebt:0,otherAssets:0,total:"",entries:[{}],networth:!1,error:"",id:0,showDescription:!1,advice:[{}],calculations:[],wallet:[],CreditCardDebt_disabled:!1,InvestmentsStocksBonds_disabled:!1,Loans_disabled:!1,Savings_disabled:!1,total_disabled:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._mounted=!0,Promise.all([Q.getAdvice(),$.getCalculations(),X.getWallets()]).then((function(t){if(e._mounted)return Promise.all([e.interval=setTimeout((function(){return e.setState({entries:[t[1]],wallet:t[2],advice:[t[0]]})}),2400)])})).catch((function(e){console.error({error:e})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),n=parseFloat(this.state.CreditCardDebt),r=parseFloat(this.state.InvestmentsStocksBonds),l=parseFloat(this.state.Savings),o=parseFloat(this.state.Loans),c=r-n+l-o;c=a.format(c);var s=Number(c.replace(/[^0-9.-]+/g,"")),i=c,u=r,m=o,h=n,d=l;null!=this.state.entries[0]&&this.state.entries[0].length>=12?this.setState({error:"The maximum historical networth is 12. Please delete some of your past entries below",total_disabled:!0,total:""}):Promise.all([$.postCalculations(i,s,u,m,h,d)]).then(this.setState({add_loader:!0})).then((function(e){return Promise.all([setTimeout((function(){return t.setState({add_loader:!1,total:c})}),1e3)])})).catch((function(e){t.setState({error:e.error})}))}},{key:"componentDidUpdate",value:function(){var e=this;this._mounted=!0,$.getCalculations().then((function(t){e._mounted&&e.setState({entries:[t]})})).catch((function(t){e.setState({error:t.error})}))}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var e=this,t=this.state.wallet;return t.length>0?o.a.createElement(z.Provider,{value:{entries:this.state.entries,handleDeleteEntry:this.handleDeleteEntry,advice:this.state.advice}},o.a.createElement("div",{className:"Networth"},o.a.createElement(ee,null),o.a.createElement("div",{id:"Portfolio",className:"profile"},o.a.createElement("div",{className:"wallet"},o.a.createElement("h2",null,"Portfolio: ")),o.a.createElement("div",{className:"test"},o.a.createElement("div",{className:"WalletTitle"},o.a.createElement(W,{credit:this.state.CreditCardDebt,loans:this.state.Loans,savings:this.state.Savings,investments:this.state.InvestmentsStocksBonds,otherAssets:this.state.otherAssets,otherDebt:this.state.otherDebt})),o.a.createElement("form",{className:"WalletEntries"},o.a.createElement("div",{className:"WalletForm"},t.length>0?o.a.createElement("div",{className:"WalletList"},t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("label",{htmlFor:t.wallet_categories},o.a.createElement(v.a,{className:"icon",icon:e.icons(t.icon)})," ",t.wallet_categories," $:"," "),o.a.createElement("input",{type:"number",size:"50",className:"input",name:t.wallet_categories,onChange:function(t){return e.handleNetworth(t)}}),o.a.createElement("br",null),o.a.createElement("br",null))}))):null,o.a.createElement("br",null),o.a.createElement("br",null),this.state.showDescription?o.a.createElement("div",{id:"description"},"Assets indicate that they earn value over time, while debts lose value OR need to be paid back over time."):null,!1===this.state.CreditCardDebt_disabled&&!1===this.state.InvestmentsStocksBonds_disabled&&!1===this.state.Loans_disabled&&!1===this.state.Savings_disabled&&!1===this.state.total_disabled?o.a.createElement("button",{type:"submit",className:"submitButton",onClick:function(t){return e.handleSubmit(t)}},"Submit"):o.a.createElement("span",null,o.a.createElement("p",{className:"disabled_submitButton"},"Submit")),this.state.add_loader?o.a.createElement("div",{className:"small-loader"}):o.a.createElement("p",null,"Total Net Worth: ",this.state.total),""!==this.state.error?o.a.createElement("p",null,this.state.error):null)))),o.a.createElement("div",{className:"chart"},o.a.createElement(K,null)),o.a.createElement(V,null),o.a.createElement("div",{className:"goalsSection"},o.a.createElement(Y,null)))):o.a.createElement("div",{className:"loadingpage"},o.a.createElement("br",null),o.a.createElement("p",null,"Prepping your personalized financial planning dashboard..."),o.a.createElement("div",{className:"loader"}))}}]),a}(l.Component);te.contextType=z;var ae=a(25);function ne(e){var t=e.component,a=Object(ae.a)(e,["component"]),n=t;return o.a.createElement(R.d,Object.assign({},a,{render:function(e){return k.hasAuthToken()?o.a.createElement(n,e):o.a.createElement(R.c,{to:{pathname:"/main",state:{from:e.location}}})}}))}function re(e){var t=e.component,a=Object(ae.a)(e,["component"]),n=t;return o.a.createElement(R.d,Object.assign({},a,{render:function(e){return k.hasAuthToken()?o.a.createElement(R.c,{to:"/networth"}):o.a.createElement(n,e)}}))}var le=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).logoutFromIdle=function(){k.clearAuthToken(),k.clearCallbackBeforeExpiry(),j.unRegisterIdleResets(),n.forceUpdate()},n.state={},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){j.setIdleCallback(this.logoutFromIdle),k.hasAuthToken()&&(j.regiserIdleTimerResets(),k.queueCallbackBeforeExpiry((function(){G.postRefreshToken()})))}},{key:"componentWillUnmount",value:function(){j.unRegisterIdleResets(),k.clearCallbackBeforeExpiry()}},{key:"renderMainRoutes",value:function(){return o.a.createElement(R.g,null,o.a.createElement(R.d,{exact:!0,path:"/about",component:I}),o.a.createElement(ne,{exact:!0,path:"/networth",component:te}),o.a.createElement(ne,{exact:!0,path:"/",component:te}),o.a.createElement(re,{exact:!0,path:"/main",component:A}),o.a.createElement(re,{exact:!0,path:"/",component:A}),o.a.createElement(re,{exact:!0,path:"/register",component:B}),o.a.createElement(re,{exact:!0,path:"/login",component:U}),o.a.createElement(re,{component:A}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S,null),o.a.createElement("main",null,o.a.createElement("span",null,this.renderMainRoutes())))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.BrowserRouter,null,o.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},98:function(e,t,a){e.exports=a(123)}},[[98,1,2]]]);
//# sourceMappingURL=main.655d91a6.chunk.js.map