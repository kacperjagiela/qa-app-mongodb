(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,n){e.exports=n(463)},461:function(e,t,n){},463:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=n(28),c=n(106),s=n(12),u=n(13),p=n(16),m=n(14),h=n(15),d=n(464),f=n(53),g=n(23),b=n(474),v=n(473),y=n(10),E=n(24),w=new c.a,x=function(e){return w.get(e)},O=function(e,t){return w.set(e,t)};function j(){var e=Object(g.a)(["\n\theight:5vh;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tz-index: 3;\n\tposition: absolute;\n\tpadding:4px;\n\tpadding-top:6px;\n\tbadding-bottom:1px;\n\tleft:14px;\n"]);return j=function(){return e},e}function k(){var e=Object(g.a)(["\n\twidth: 40px;\n\theight: 5px;\n\tbackground-color: black;\n\tmargin: 6px 0;\n\ttransition: 0.4s;\n"]);return k=function(){return e},e}var S=E.a.div(k()),C=E.a.div(j()),q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,width:0},n.updateWindowDimensions=function(){n.setState({width:window.innerWidth})},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.Mobile=function(){return a.createElement(b.a,{closable:!0,title:"Menu",placement:"left",onClose:n.onClose,visible:n.state.visible,width:n.state.width>767?300:"100%",height:"100%"},a.createElement(v.b,{theme:"light",mode:"inline",defaultSelectedKeys:n.props.selected.split(" "),style:{height:"100%"}},a.createElement(v.b.Item,{key:"home"},a.createElement(l.b,{to:"/qa-app-mongodb/home"},a.createElement(y.a,{type:"home"}),a.createElement("span",{className:"nav-text"},"Home"))),a.createElement(v.b.Item,{key:"profile"},a.createElement(l.b,{to:"/qa-app-mongodb/profile/".concat(x("login"))},a.createElement(y.a,{type:"profile"}),a.createElement("span",{className:"nav-text"},"Your profile"))),a.createElement(v.b.Item,{key:"settings"},a.createElement(l.b,{to:"/qa-app-mongodb/settings"},a.createElement(y.a,{type:"setting"}),a.createElement("span",{className:"nav-text"},"Settings"))),a.createElement(v.b.Item,{key:"logout"},a.createElement(l.b,{to:"/qa-app-mongodb/logout"},a.createElement(y.a,{type:"logout"}),a.createElement("span",{className:"nav-text"},"Log out")))))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this,t=this.state.visible;return a.createElement(a.Fragment,null,a.createElement(function(){return a.createElement(C,{onClick:e.showDrawer,onKeyPress:e.showDrawer,role:"button",tabIndex:"0",style:{background:"rgb(0,0,0,0.0)",opacity:t?0:1}},a.createElement(S,null),a.createElement(S,null),a.createElement(S,null))},null),this.Mobile())}}]),t}(a.Component),D=n(102),I=n(471),T=n(475),A=n(132),F="https://aqueous-retreat-97205.herokuapp.com/",P=function(e){return A.get("".concat(F,"/profile/").concat(e))},L=function(){return A.get("".concat(F,"/search"))},z=function(e){return A.get("".concat(F,"/questions/").concat(e))},U=function(){return A.get("".concat(F,"/home"))},_=function(e){return A.get("".concat(F,"/checkAvatar/").concat(e))},R=function(e){return A.post("".concat(F,"/register"),e)},N=function(e){return A.post("".concat(F,"/login"),e,{withCredentials:!0})},J=function(e,t){return A.post("".concat(F,"/answer/").concat(e),{answer:t})},H=function(e,t,n){return A.post("".concat(F,"/ask/").concat(e),{question:t,asked:n})},W=function(e,t){return A.post("".concat(F,"/changeDetails/").concat(t),{details:e})},K=function(e,t){return A.post("".concat(F,"/changePassword"),{user:e,email:t})},M=function(e){return A.post("".concat(F,"/deleteQuestion/").concat(e),{id:e})},B=function(e,t){return A.post("".concat(F,"/updatePicture/").concat(t),e,{headers:{"Content-Type":"multipart/form-data"}})},V=n(71);function Q(){var e=Object(g.a)(["",""]);return Q=function(){return e},e}function Y(){var e=Object(g.a)(["\nfont-family: 'Roboto', sans-serif;\nwidth:100vw;\nheight:100vh;\ndisplay:flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nanimation: 1.3s ",";\n"]);return Y=function(){return e},e}function G(){var e=Object(g.a)(["",""]);return G=function(){return e},e}function X(){var e=Object(g.a)(["\nwidth:100%;\nmargin-top:20px;\nborder-top: 1px solid #1890ff;\nanimation: 1.2s ",";\n\n@media screen and (max-width:768px){\n\tmargin-top:80px;\n}\n"]);return X=function(){return e},e}function Z(){var e=Object(g.a)(["\nwidth:100%;\npadding:10px;\nmargin-top:2vh;\nmin-height:3vh;\nborder-bottom: 1px solid #1890ff;\noverflow:auto;\n\n@media screen and (max-width:768px){\n\twidth:100%;\n}\n"]);return Z=function(){return e},e}function $(){var e=Object(g.a)(["\nwidth:80%;\nmargin-left:10%;\n"]);return $=function(){return e},e}function ee(){var e=Object(g.a)(["\nwidth:80%;\nmargin-left:10%;\n"]);return ee=function(){return e},e}function te(){var e=Object(g.a)(["\n\twidth:30px;\n\theight:45px;\n\tposition:absolute;\n\ttop:50px;\n\tleft:0px;\n\tz-index: 3001;\n\n\t@media screen and (max-width:767){\n\t\tright:0px;\n\t}\n"]);return te=function(){return e},e}function ne(){var e=Object(g.a)(["",""]);return ne=function(){return e},e}function ae(){var e=Object(g.a)(["\nfont-family: 'Roboto', sans-serif;\nwidth:100%;\nheight:100vh;\npadding-left:20%;\npadding-right:20%;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nanimation: 1.2s ",";\n\n@media screen and (max-width:480px){\n\tpadding-top:5vh;\n\tdisplay:block;\n\tpadding-left:10%;\n\tpadding-right:10%;\n\tmargin-left: 0;\n}\n"]);return ae=function(){return e},e}function re(){var e=Object(g.a)(["\nwidth:150px;\nheight:150px;\nborder-radius:50%;\n\n@media screen and (max-width:768px){\n\twidth:100px;\n\theight:100px;\n}"]);return re=function(){return e},e}function oe(){var e=Object(g.a)(["",""]);return oe=function(){return e},e}function ie(){var e=Object(g.a)(["\nfont-family: 'Roboto', sans-serif;\nwidth:100vw;\nheight: 100vh;\nbackground-color:transparent;\ntext-align:center;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nanimation: 1.2s ",";\n"]);return ie=function(){return e},e}function le(){var e=Object(g.a)(["",""]);return le=function(){return e},e}function ce(){var e=Object(g.a)(["\nwidth:100%;\nheigth:100%;\nborder-radius:10px;\ntext-align:center;\npadding-top:5vh;\npaddint-bottom:5vh;\nanimation: 1.5s ",";\n"]);return ce=function(){return e},e}var se=E.a.div(ce(),Object(E.b)(le(),V.fadeInRight)),ue=E.a.div(ie(),Object(E.b)(oe(),V.zoomIn)),pe=E.a.img(re()),me=E.a.div(ae(),Object(E.b)(ne(),V.fadeIn)),he=(E.a.div(te()),E.a.div(ee())),de=E.a.div($()),fe=E.a.div(Z()),ge=E.a.div(X(),Object(E.b)(G(),V.fadeIn)),be=E.a.div(Y(),Object(E.b)(Q(),V.slideInDown)),ve=n(470),ye=n(467),Ee=n(196),we=n(109),xe=ve.a.Title,Oe=ye.a.Item,je=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.nextStep,o=t.saveInput;a.validateFields(function(t,n){t||(o({email:n.email}),r(e))})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form;return a.createElement(se,null,a.createElement(ye.a,{onSubmit:this.handleSubmit},a.createElement(xe,null,"Sweet! You decided to join!"),a.createElement(xe,{level:3},"Please enter your email."),a.createElement(Oe,{label:"E-mail",hasFeedback:!0},e.getFieldDecorator("email",{rules:[{required:!0,message:"Please enter your E-mail!"},{type:"email",message:"The input is not valid E-mail!"}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"mail"}),style:{width:"50%"},placeholder:"Email",allowClear:!0}))),a.createElement(we.a,{type:"primary",htmlType:"submit"},"Next")))}}]),t}(a.Component),ke=ye.a.create()(je),Se=ve.a.Title,Ce=ye.a.Item,qe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).checkPassword=function(e,t,a){var r=n.props.form,o=n.state.confirmDirty;t&&o&&t.length>=8&&r.validateFields(["confirm"],{force:!0}),a()},n.checkConfirm=function(e,t,a){var r=n.props.form;t&&t!==r.getFieldValue("password")&&a("Two passwords that you enter is inconsistent!"),a()},n.handleConfirmBlur=function(e){var t=e.target.value.value,a=n.state.confirmDirty;n.setState({confirmDirty:a||!!t})},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.nextStep,o=t.saveInput;a.validateFields(function(t,n){t||(o({username:n.username,password:n.password}),r(e))})},n.state={confirmDirty:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,n=e.prevStep;return a.createElement(se,null,a.createElement(ye.a,{onSubmit:this.handleSubmit},a.createElement(Se,null,"Just a little bit more!"),a.createElement(Se,{level:3},"Please enter your username and password."),a.createElement(Ce,{label:"Username",hasFeedback:!0},t.getFieldDecorator("username",{rules:[{required:!0,message:"Please enter your username!"}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"user"}),style:{width:"50%"},placeholder:"Username",allowClear:!0}))),a.createElement(Ce,{label:"Password",hasFeedback:!0},t.getFieldDecorator("password",{rules:[{required:!0,message:"Please enter your password! (at least 8 characters)",min:8},{validator:this.checkPassword}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"lock"}),type:"password",style:{width:"50%"},placeholder:"Password",allowClear:!0}))),a.createElement(Ce,{label:"Confirm Password",hasFeedback:!0},t.getFieldDecorator("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.checkConfirm}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"lock"}),type:"password",style:{width:"50%"},placeholder:"Confirm password",onBlur:this.handleConfirmBlur,allowClear:!0}))),a.createElement(we.a,{onClick:n},"Previous"),a.createElement(we.a,{type:"primary",htmlType:"submit"},"Next")))}}]),t}(a.Component),De=ye.a.create()(qe),Ie=n(468),Te=n(132),Ae=n.n(Te),Fe=ve.a.Title,Pe=ve.a.Paragraph,Le=ye.a.Item,ze=Ee.a.TextArea,Ue=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleUpload=function(e){var t=e.file,a=e.onSuccess,r=n.props.username,o=new FormData;o.append("username",r),o.append("file",t),Ae.a.post("".concat(F,"/add-file"),o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){a("ok")}).catch(function(e){console.error(e)})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onSubmit,n=e.prevStep;return a.createElement(se,null,a.createElement(ye.a,{onSubmit:t},a.createElement(Fe,null,"Last step!"),a.createElement(Fe,{level:3},"Add something from yourself!"),a.createElement(Pe,null,"(optional, can be changed later)"),a.createElement(Le,{label:"Description",hasFeedback:!0},a.createElement(ze,{prefix:a.createElement(y.a,{type:"idcard"}),style:{width:"50%"},placeholder:"Description",autosize:!0})),a.createElement(Le,{label:"Add profile picture"},a.createElement("div",{className:"dropbox",style:{width:"50%",margin:"auto"}},a.createElement(Ie.a,{customRequest:this.handleUpload},a.createElement(we.a,null,a.createElement(y.a,{type:"upload"}),"Select File")))),a.createElement(we.a,{onClick:n},"Previous"),a.createElement(we.a,{type:"primary",htmlType:"submit"},"Done")))}}]),t}(a.Component),_e=ye.a.create()(Ue),Re=I.a.Step,Ne=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={step:0,username:"",visible:!1,valid:!0},n.saveInput=function(e){n.setState(e)},n.nextStep=function(e){e.preventDefault();var t=n.state.step;t<2&&n.setState({step:t+1})},n.prevStep=function(e){e.preventDefault();var t=n.state.step;t>0&&n.setState({step:t-1})},n.handleSubmit=function(e){e.preventDefault();var t=Object(D.a)(n).state;R(t).then(function(e){e.data?n.setState({visible:!0}):n.setState({valid:!1})}).catch(function(e){return e})},n.handleClose=function(){n.props.history.push("/qa-app-mongodb/login")},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.visible,r=t.valid,o=t.step,i=t.username,l=this.props.history,c=[{title:"Email",content:a.createElement(ke,{saveInput:this.saveInput,nextStep:this.nextStep})},{title:"Username and Password",content:a.createElement(De,{saveInput:this.saveInput,prevStep:this.prevStep,nextStep:this.nextStep})},{title:"Description",content:a.createElement(_e,{saveInput:this.saveInput,prevStep:this.prevStep,username:i,onSubmit:function(t){return e.handleSubmit(t)}})}];return x("login")?a.createElement(function(){return l.push("/qa-app-mongodb/home",{refresh:!0}),null},null):a.createElement(function(){return a.createElement(me,null,n?a.createElement(T.a,{message:"User created succesfully!",type:"success",closable:!0,afterClose:e.handleClose,style:{zIndex:3e3,position:"absolute",top:"40vh",width:"60%",textAlign:"center",left:"20%"}}):null,r?null:a.createElement(T.a,{message:"User already exists!",type:"error",closable:!0,afterClose:l.push("/qa-app-mongodb/register"),style:{zIndex:3e3,position:"absolute",top:"40vh",width:"60%",textAlign:"center",left:"20%"}}),a.createElement(I.a,{current:o},c.map(function(e){return a.createElement(Re,{key:e.title,title:e.title})})),a.createElement("div",{className:"steps-content"},c[o].content))},null)}}]),t}(a.Component),Je=n(472),He=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.history;a.validateFields(function(e,t){e||N(t).then(function(e){"Logged in"===e.data?n.setState({status:"success"},function(){O("login",t.username),r.push("/qa-app-mongodb/home",{refresh:!0})}):n.setState({status:"error"})}).catch(function(e){return e})})},n.state={logged:x("login"),status:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.logged,n=e.status,r=this.props,o=r.form,i=r.history;return t?(i.push("/",{refresh:!0}),null):a.createElement(ue,null,a.createElement(ye.a,{onSubmit:this.handleSubmit},a.createElement(ve.a.Title,{type:2},"Welcome back!"),a.createElement(ye.a.Item,{validateStatus:n},o.getFieldDecorator("username",{rules:[{required:!0,message:"Please enter your username!"}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"user"}),placeholder:"Username",allowClear:!0}))),a.createElement(ye.a.Item,{validateStatus:n},o.getFieldDecorator("password",{rules:[{required:!0,message:"Please enter your password!"}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"lock"}),type:"password",placeholder:"Password",allowClear:!0}))),a.createElement(ye.a.Item,null,o.getFieldDecorator("remember",{valuePropName:"checked",initialValue:!0})(a.createElement(Je.a,null,"Remember me")),a.createElement("a",{className:"login-form-forgot",href:"/forgot"},"Forgot password"),a.createElement("br",null),a.createElement(we.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"Log in"),"Or",a.createElement("a",{href:"/register"}," register now!"))))}}]),t}(a.Component),We=Object(f.f)(ye.a.create({name:"normal_login"})(He)),Ke=n(61),Me=n.n(Ke),Be=n(108),Ve=n(469),Qe=n(465),Ye=n(466),Ge=d.a.Content,Xe=d.a.Footer,Ze=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).latestQuestions=Object(Be.a)(Me.a.mark(function e(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U().then(function(e){n.setState({questions:e.data.questions,users:e.data.users})});case 2:case"end":return e.stop()}},e)})),n.loadAllUsers=Object(Be.a)(Me.a.mark(function e(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().then(function(){var e=Object(Be.a)(Me.a.mark(function e(t){var a,r;return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],r=new Promise(function(e){a=t.data.usernames.map(function(e){return e.username}),e("ok")}),e.next=4,r.then(function(e){e&&n.setState({allUsers:a})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e)})),n.onSelect=function(e){n.props.history.push("/qa-app-mongodb/profile/".concat(e))},n.onChange=function(e){n.setState({searchPhrease:e})},n.handleSearch=function(){var e=n.props.history,t=n.state.searchPhrease;e.push("/qa-app-mongodb/search/".concat(t))},n.state={questions:[],users:[],allUsers:[],searchPhrease:""},n.latestQuestions(),n.loadAllUsers(),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.history,t=this.state,n=t.questions,r=t.users,o=t.allUsers;return a.createElement(d.a,{style:{minHeight:"100vh",width:"100%",paddingLeft:"20%",paddingRight:"20%",overflow:"auto"}},a.createElement(Ge,{style:{width:"100%",height:"95vh",paddingTop:"5vh"}},a.createElement(ve.a.Title,{level:3,style:{marginTop:"10%",textAlign:"center"}},"Search for anyone!"),a.createElement(Ve.a,{className:"global-search",size:"large",style:{width:"60%",marginLeft:"20%"},dataSource:o,onSelect:this.onSelect,onSearch:this.onChange,placeholder:"Search for user...",filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())}},a.createElement(Ee.a,{suffix:a.createElement(we.a,{className:"search-btn",style:{marginRight:-12},size:"large",type:"primary",onClick:this.handleSearch},a.createElement(y.a,{type:"search"}))})),a.createElement(ve.a.Title,{level:3,style:{marginTop:"10vh",textAlign:"center"}},"Some random QA's"),a.createElement(ge,null,n.map(function(t){if(t){var n="";return r.forEach(function(e){e._id===t.user_id&&(n=e.username)}),a.createElement(fe,{key:t._id},a.createElement(Qe.a,{avatar:a.createElement("a",{href:"#",onClick:function(){return e.push("/qa-app-mongodb/profile/".concat(t.asked_by))}},a.createElement(Ye.a,{icon:"user",size:"large",src:"".concat(F,"/public/").concat(t.asked_by)})),author:a.createElement("a",{href:"#",onClick:function(){return e.push("/qa-app-mongodb/profile/".concat(t.asked_by))}},t.asked_by),content:t.content,key:t._id},a.createElement(Qe.a,{avatar:a.createElement("a",{href:"#",onClick:function(){return e.push("/qa-app-mongodb/profile/".concat(n))}},a.createElement(Ye.a,{icon:"user",size:"large",src:"".concat(F,"/public/").concat(n)})),author:a.createElement("a",{href:"#",onClick:function(){return e.push("/qa-app-mongodb/profile/".concat(n))}},n),content:t.answer})))}return null})),a.createElement(Xe,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a")))}}]),t}(a.Component),$e=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(be,null,a.createElement(ve.a.Title,{level:2},"Let's know each other!"),a.createElement(ve.a.Paragraph,{style:{fontFamily:"Roboto",fontWeight:"bold"}},"Enter the best Question and Answers site"),a.createElement(l.b,{to:"/qa-app-mongodb/register"},a.createElement(we.a,{type:"primary",size:"large",shape:"round"},"Join now")),a.createElement("h4",null,"or",a.createElement(l.b,{to:"/qa-app-mongodb/login"}," log in")))}}]),t}(a.Component),et=Object(f.f)(function(e){var t=e.history;return x("login")?a.createElement(function(){return a.createElement(Ze,{history:t})},null):a.createElement(function(){return a.createElement($e,{history:t})},null)}),tt=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){n.setState({answer:e.target.value})},n.handleAnswer=function(e){e.preventDefault();var t=n.props,a=t.question,r=t.refresh,o=n.state.answer;J(a._id,o),r()},n.handleDelete=function(){var e=n.props,t=e.question,a=e.refresh;M(t._id),a()};var a=n.props.question;return n.state={answer:a.answer},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,r=t.username,o=this.state.answer;return a.createElement(fe,{style:{position:"relative"}},a.createElement(ye.a,{onSubmit:this.handleAnswer},a.createElement(Qe.a,{avatar:a.createElement("a",{href:"/qa-app-mongodb/profile/".concat(n.asked_by)},a.createElement(Ye.a,{icon:"user",size:"large",src:"".concat(F,"/public/").concat(n.asked_by)})),author:a.createElement("a",{href:"/qa-app-mongodb/profile/".concat(n.asked_by)},n.asked_by),content:n.content},n.answer?a.createElement(Qe.a,{avatar:a.createElement("a",{href:"/qa-app-mongodb/profile/".concat(r)},a.createElement(Ye.a,{icon:"user",size:"large",src:"".concat(F,"/public/").concat(r)})),author:a.createElement("a",{href:"/qa-app-mongodb/profile/".concat(r)},r),content:a.createElement(ve.a.Paragraph,null,n.answer)}):a.createElement("div",null,r===x("login")?a.createElement(Ee.a,{onChange:function(t){return e.onChange(t)},placeholder:"Answer"}):null),o&&!n.answer?a.createElement(we.a,{type:"primary",htmlType:"submit",style:{float:"right"}},"Answer!"):null,r===x("login")?a.createElement(we.a,{style:{position:"absolute",top:"5px",right:"10px",cursor:"pointer",zIndex:1},type:"primary",onClick:function(){return e.handleDelete()}},"Delete"):null)))}}]),t}(a.Component),nt=d.a.Content,at=d.a.Footer,rt=ve.a.Title,ot=ve.a.Paragraph,it=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[]},n.refresh=function(){var e=n.props.match;P(e.params.username).then(function(e){n.setState({username:e.data.username,description:e.data.description}),z(e.data._id).then(function(e){n.setState({questions:e.data})}),_(e.data.username).then(function(e){n.setState({avatar:e.data})})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this,t=this.props,n=t.history,r=t.match,o=this.state,i=o.avatar,l=o.username,c=o.description,s=o.questions;return x("login")?a.createElement(function(){return a.createElement(d.a,{style:{minHeight:"100vh",width:"100%",paddingLeft:"20%",paddingRight:"20%",overflow:"auto"}},a.createElement(nt,{style:{width:"100%",height:"95vh",paddingTop:"5vh"}},a.createElement("div",{style:{marginBottom:"100px"}},a.createElement("a",{href:"#",onClick:function(){return n.push("/qa-app-mongodb/profile/".concat(l))},style:{float:"left",marginRight:"10px"}},i?a.createElement(pe,{src:"".concat(F,"/public/").concat(l),alt:"100x100",style:{zIndex:2}}):a.createElement(Ye.a,{icon:"user",size:80,style:{zIndex:2}})),a.createElement(rt,{level:2},l),"undefined"!==c?a.createElement(ot,{strong:!0},c):null),x("login")===r.params.username?null:a.createElement(we.a,{onClick:function(){return n.push("/qa-app-mongodb/ask/".concat(l))},type:"primary"},"Ask this user"),a.createElement(ge,null,s.reverse().map(function(t){return a.createElement(tt,{question:t,refresh:e.refresh,username:l,key:t._id})})),a.createElement(at,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a")))},null):a.createElement(function(){return n.push("/qa-app-mongodb/home"),null},null)}}]),t}(a.Component),lt=n(197),ct=d.a.Content,st=d.a.Footer,ut=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={logged:x("login"),fileList:[],uploading:!1,previousDescription:"",visible:!1},n.handleUpload=function(){var e=n.state,t=e.fileList,a=e.logged,r=new FormData;r.append("username",a),r.append("file",t[t.length-1]),n.setState({uploading:!0}),B(r,a).then(function(e){e.data?n.setState({fileList:[],uploading:!1}):n.setState({uploading:!1})})},n.onClose=function(){var e=n.props.history,t=n.state.logged;e.push("/qa-app-mongodb/profile/".concat(t))},n.handleSubmit=function(e){e.preventDefault();var t=n.props.form,a=n.state.logged;t.validateFields(function(e,t){t&&W(t,a).then(function(e){n.setState({visible:e})})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.logged;P(t).then(function(t){"undefined"!==t.data.description&&e.setState({previousDescription:t.data.description})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.logged,r=t.uploading,o=t.fileList,i=t.previousDescription,l=t.visible,c=this.props,s=c.form,u=c.history,p={onRemove:function(t){e.setState(function(e){var n=e.fileList.indexOf(t),a=e.fileList.slice();return a.splice(n,1),{fileList:a}})},beforeUpload:function(t){return e.setState(function(e){return{fileList:[].concat(Object(lt.a)(e.fileList),[t])}}),!1},fileList:o};return n?a.createElement(d.a,{style:{minHeight:"100vh",width:"100%",paddingLeft:"20%",paddingRight:"20%",overflow:"auto"}},a.createElement(ct,{style:{paddingTop:"10vh"}},a.createElement(ve.a.Title,{level:2,style:{paddingTop:"5vh",textAlign:"center",marginBottom:"12px"}},"Settings"," ",a.createElement(y.a,{type:"setting"})),a.createElement(T.a,{message:"Description saved!",type:"success",onClose:this.onClose,style:l?{visibility:"visible",position:"relative",top:"20%",left:"20%",zIndex:2,width:"60%"}:{visibility:"hidden",position:"relative",top:"20%",left:"20%",zIndex:2,width:"60%"},showIcon:!0,closable:!0}),a.createElement(ye.a,{onSubmit:this.handleSubmit},a.createElement(ve.a.Paragraph,null,"Change your description:"),a.createElement(ye.a.Item,null,s.getFieldDecorator("description",{initialValue:i})(a.createElement(Ee.a.TextArea,{placeholder:"Update description"}))),a.createElement(ve.a.Paragraph,null,"Change your profile picture:"),a.createElement(ye.a.Item,null,a.createElement(Ie.a,p,a.createElement(we.a,null,a.createElement(y.a,{type:"upload"}),"Choose image")),a.createElement(we.a,{type:"primary",onClick:this.handleUpload,disabled:0===o.length,loading:r,style:{marginTop:16}},r?"Uploading":"Change profile picture")),a.createElement(we.a,{style:{width:"60%",marginLeft:"20%",marginTop:"5%"},type:"primary",htmlType:"submit"},"Save description")),a.createElement(st,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a"))):(u.push("/qa-app-mongodb/home"),null)}}]),t}(a.Component),pt=Object(f.f)(ye.a.create({name:"settings"})(ut)),mt=function(e){var t,n=e.history;return t="login",w.remove(t,{path:"/qa-app-mongodb/"}),n.push("/qa-app-mongodb/",{refresh:!0}),null},ht=d.a.Content,dt=d.a.Footer,ft=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={logged:x("login")},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.history,o=t.match,i=n.state.logged;a.validateFields(function(e,t){e||H(o.params.username,t.questionContent,i).then(function(e){e.data&&r.push("/qa-app-mongodb/profile/".concat(o.params.username))}).catch(function(e){return e})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,n=e.history,r=n.location.pathname,o=this.state.logged,i=r.substring(r.lastIndexOf("/")+1,r.length);return o?a.createElement(d.a,null,a.createElement(ht,null,a.createElement(ue,{style:{width:"80%",height:"90%",marginLeft:"20%"}},a.createElement(ve.a.Title,{level:2,style:{textAlign:"center"}},"You can ask",a.createElement("a",{href:"#",onClick:function(){return n.push("/qa-app-mongodb/profile/".concat(i))}}," ".concat(i," ")),"anything!"),a.createElement(ye.a,{onSubmit:this.handleSubmit,style:{width:"100%"}},a.createElement(ye.a.Item,null,t.getFieldDecorator("questionContent")(a.createElement(Ee.a.TextArea,{placeholder:"Your question here"})),a.createElement(we.a,{type:"primary",htmlType:"submit",style:{marginRight:-12}},"Ask question")))),a.createElement(dt,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a"))):(n.push("/qa-app-mongodb/home"),null)}}]),t}(a.Component),gt=Object(f.f)(ye.a.create({name:"ask_form"})(ft)),bt=function(e){var t=e.user;return a.createElement(he,null,a.createElement(Ye.a,{size:"large",src:"".concat(F,"/public/").concat(t.username)}),a.createElement("a",{href:"/qa-app-mongodb/profile/".concat(t.username)},t.username))},vt=d.a.Content,yt=d.a.Footer,Et=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,n=this.props.match.params.search;(e=n,A.get("".concat(F,"/search/").concat(e))).then(function(e){t.setState({users:e.data})})}},{key:"render",value:function(){var e=this.state.users,t=this.props,n=t.match,r=t.history,o=n.params.search,i=e.map(function(e){return a.createElement(bt,{user:e,key:e._id})});return x("login")?a.createElement(function(){return a.createElement(d.a,null,a.createElement(vt,null,a.createElement(de,null,a.createElement(ve.a.Title,{level:4,style:{marginTop:"3vh",textAlign:"center"}},"Results for '",a.createElement("b",{style:{color:"#1890ff"}},o),"'"),a.createElement("div",{style:{marginTop:"3vh"}},i)),a.createElement(yt,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a")))},null):a.createElement(function(){return r.push("/qa-app-mongodb/",{refresh:!0}),null},null)}}]),t}(a.Component),wt=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={logged:x("login"),alertVisible:!1},n.handleSubmit=function(e){var t=n.props.form;e.preventDefault(),t.validateFields(function(e,t){K(t.username,t.email).then(function(e){e&&n.setState({alertVisible:!0})})})},n.onClose=function(){n.props.history.push("/qa-app-mongodb/login")},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.logged,n=e.alertVisible,r=this.props,o=r.form,i=r.history;return t?(i.push("/qa-app-mongodb/"),null):a.createElement(ue,null,a.createElement(ve.a.Title,{level:2},"Forgot your password?"),a.createElement(T.a,{message:"Email send!",description:"If user with such username and email exist we send you an email.",type:"info",closable:!0,onClose:this.onClose,style:n?{visibility:"visible",position:"absolute",top:"40vh",width:"60%",maringLeft:"20%",zIndex:3}:{visibility:"hidden",position:"absolute",top:"40vh",width:"60%",maringLeft:"20%",zIndex:3}}),a.createElement(ve.a.Title,{level:4},"Generate a new one!"),a.createElement(ye.a,{onSubmit:this.handleSubmit},a.createElement(ye.a.Item,null,o.getFieldDecorator("email",{rules:[{required:!0,message:"Please enter your email"},{type:"email",message:"The input is not valid E-mail!"}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"mail"}),placeholder:"Email",allowClear:!0}))),a.createElement(ye.a.Item,null,o.getFieldDecorator("username",{rules:[{required:!0,message:"Please enter your username"}]})(a.createElement(Ee.a,{prefix:a.createElement(y.a,{type:"user"}),placeholder:"Username",allowClear:!0}))),a.createElement(we.a,{type:"primary",htmlType:"submit"},"Generate new password")))}}]),t}(a.Component),xt=Object(f.f)(ye.a.create({name:"forgot"})(wt)),Ot=function(){return a.createElement(f.c,null,a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/ask/:username",component:gt}),a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/forgot",component:xt}),a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/settings",component:pt}),a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/profile/:username",component:Object(f.f)(it)}),a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/register",component:Object(f.f)(Ne)}),a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/login",component:We}),a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/logout",component:Object(f.f)(mt)}),a.createElement(f.a,{exact:!0,path:"/qa-app-mongodb/search/:search",component:Object(f.f)(Et)}),a.createElement(f.a,{path:"/qa-app-mongodb/",component:Object(f.f)(et)}))},jt=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.history.location.pathname,n="";n=t.indexOf("/qa-app-mongodb/")===t.lastIndexOf("/")?t.replace("/qa-app-mongodb/",""):t.substring(t.indexOf("/qa-app-mongodb/")+1,t.lastIndexOf("/qa-app-mongodb/"));return x("login")?a.createElement(function(){return a.createElement(d.a,{style:{minHeight:"100vh",maxHeight:"100vh"}},a.createElement(q,{selected:n}),a.createElement(Ot,{refresh:e.refresh}))},null):a.createElement(function(){return a.createElement(d.a,{style:{minHeight:"100vh",maxHeight:"100vh"}},a.createElement(Ot,{refresh:e.refresh}))},null)}}]),t}(a.Component),kt=Object(f.f)(jt);n(461),n(462);i.a.render(r.a.createElement(c.b,null,r.a.createElement(l.a,null,r.a.createElement(kt,null))),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.47af14e7.chunk.js.map