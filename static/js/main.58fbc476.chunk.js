(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,n){e.exports=n(463)},461:function(e,t,n){},463:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),l=n(12),c=n(108),s=n(13),u=n(14),m=n(16),p=n(15),h=n(17),d=n(464),f=n(53),g=n(24),b=n(476),v=n(474),y=n(10),E=n(25),w=new c.a,O=function(e){return w.get(e)},j=function(e,t){return w.set(e,t,{path:"/qa-app-mongodb/"})};function x(){var e=Object(g.a)(["\n\theight:5vh;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tz-index: 3;\n\tposition: absolute;\n\tpadding:4px;\n\tpadding-top:6px;\n\tbadding-bottom:1px;\n\tleft:14px;\n"]);return x=function(){return e},e}function S(){var e=Object(g.a)(["\n\twidth: 40px;\n\theight: 5px;\n\tbackground-color: black;\n\tmargin: 6px 0;\n\ttransition: 0.4s;\n"]);return S=function(){return e},e}var k=E.a.div(S()),C=E.a.div(x()),D=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={visible:!1,width:0},n.updateWindowDimensions=function(){n.setState({width:window.innerWidth})},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.Mobile=function(){return a.createElement(b.a,{closable:!0,title:"Menu",placement:"left",onClose:n.onClose,visible:n.state.visible,width:n.state.width>767?300:"100%",height:"100%"},a.createElement(v.b,{theme:"light",mode:"inline",defaultSelectedKeys:n.props.selected.split(" "),style:{height:"100%"}},a.createElement(v.b.Item,{key:"home"},a.createElement(l.b,{to:"/home"},a.createElement(y.a,{type:"home"}),a.createElement("span",{className:"nav-text"},"Home"))),a.createElement(v.b.Item,{key:"profile"},a.createElement(l.b,{to:"/profile/".concat(O("login"))},a.createElement(y.a,{type:"profile"}),a.createElement("span",{className:"nav-text"},"Your profile"))),a.createElement(v.b.Item,{key:"settings"},a.createElement(l.b,{to:"/settings"},a.createElement(y.a,{type:"setting"}),a.createElement("span",{className:"nav-text"},"Settings"))),a.createElement(v.b.Item,{key:"logout"},a.createElement(l.b,{to:"/logout"},a.createElement(y.a,{type:"logout"}),a.createElement("span",{className:"nav-text"},"Log out")))))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this,t=this.state.visible;return a.createElement(a.Fragment,null,a.createElement(function(){return a.createElement(C,{onClick:e.showDrawer,onKeyPress:e.showDrawer,role:"button",tabIndex:"0",style:{background:"rgb(0,0,0,0.0)",opacity:t?0:1}},a.createElement(k,null),a.createElement(k,null),a.createElement(k,null))},null),this.Mobile())}}]),t}(a.Component),T=n(102),I=n(473),F=n(475),A=n(134),P="https://aqueous-retreat-97205.herokuapp.com",q=function(e){return A.get("".concat(P,"/profile/").concat(e))},z=function(){return A.get("".concat(P,"/search"))},L=function(e){return A.get("".concat(P,"/questions/").concat(e))},U=function(){return A.get("".concat(P,"/home"))},_=function(e){return A.get("".concat(P,"/checkAvatar/").concat(e))},R=function(e){return A.post("".concat(P,"/register"),e)},N=function(e){return A.post("".concat(P,"/login"),e,{withCredentials:!0})},J=function(e,t){return A.post("".concat(P,"/answer/").concat(e),{answer:t})},M=function(e,t,n){return A.post("".concat(P,"/ask/").concat(e),{question:t,asked:n})},W=function(e,t){return A.post("".concat(P,"/changeDetails/").concat(t),{details:e})},K=function(e,t){return A.post("".concat(P,"/changePassword"),{user:e,email:t})},B=function(e){return A.post("".concat(P,"/deleteQuestion/").concat(e),{id:e})},V=function(e,t){return A.post("".concat(P,"/updatePicture/").concat(t),e,{headers:{"Content-Type":"multipart/form-data"}})},H=n(61);function Q(){var e=Object(g.a)(["",""]);return Q=function(){return e},e}function Y(){var e=Object(g.a)(["\n\tfont-family: 'Roboto',\n\t\tsans-serif;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tanimation: 1.3s\n\t\t",";\n"]);return Y=function(){return e},e}function G(){var e=Object(g.a)(["",""]);return G=function(){return e},e}function X(){var e=Object(g.a)(["\n\twidth: 100%;\n\tmargin-top: 20px;\n\tborder-top: 1px\n\t\tsolid\n\t\t#1890ff;\n\tanimation: 1.2s\n\t\t",";\n\n\t@media screen and (max-width: 768px) {\n\t\tmargin-top: 80px;\n\t}\n"]);return X=function(){return e},e}function Z(){var e=Object(g.a)(["\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-top: 2vh;\n\tmin-height: 3vh;\n\tborder-bottom: 1px\n\t\tsolid\n\t\t#1890ff;\n\toverflow: auto;\n\n\t@media screen and (max-width: 768px) {\n\t\twidth: 100%;\n\t}\n"]);return Z=function(){return e},e}function $(){var e=Object(g.a)(["\n\twidth: 80%;\n\tmargin-left: 10%;\n"]);return $=function(){return e},e}function ee(){var e=Object(g.a)(["\n\twidth: 80%;\n\tmargin-left: 10%;\n"]);return ee=function(){return e},e}function te(){var e=Object(g.a)(["\n\twidth: 30px;\n\theight: 45px;\n\tposition: absolute;\n\ttop: 50px;\n\tleft: 0px;\n\tz-index: 3001;\n\n\t@media screen and (max-width: 767) {\n\t\tright: 0px;\n\t}\n"]);return te=function(){return e},e}function ne(){var e=Object(g.a)(["",""]);return ne=function(){return e},e}function ae(){var e=Object(g.a)(["\n\tfont-family: 'Roboto',\n\t\tsans-serif;\n\twidth: 100%;\n\theight: 100vh;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tanimation: 1.2s\n\t\t",";\n\n\t@media screen and (max-width: 480px) {\n\t\tpadding-top: 5vh;\n\t\tdisplay: block;\n\t\tpadding-left: 10%;\n\t\tpadding-right: 10%;\n\t\tmargin-left: 0;\n\t}\n"]);return ae=function(){return e},e}function re(){var e=Object(g.a)(["\n\twidth: 150px;\n\theight: 150px;\n\tborder-radius: 50%;\n\n\t@media screen and (max-width: 768px) {\n\t\twidth: 100px;\n\t\theight: 100px;\n\t}\n"]);return re=function(){return e},e}function ie(){var e=Object(g.a)(["",""]);return ie=function(){return e},e}function oe(){var e=Object(g.a)(["\n\tfont-family: 'Roboto',\n\t\tsans-serif;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: transparent;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tanimation: 1.2s\n\t\t",";\n"]);return oe=function(){return e},e}function le(){var e=Object(g.a)(["",""]);return le=function(){return e},e}function ce(){var e=Object(g.a)(["\n\tmin-height: 100vh;\n\twidth: 100%;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n\toverflow: auto;\n\tanimation: 0.5s\n\t\t",";\n"]);return ce=function(){return e},e}function se(){var e=Object(g.a)(["",""]);return se=function(){return e},e}function ue(){var e=Object(g.a)(["\n\twidth: 100%;\n\theigth: 100%;\n\tborder-radius: 10px;\n\ttext-align: center;\n\tpadding-top: 5vh;\n\tpaddint-bottom: 5vh;\n\tanimation: 1.5s\n\t\t",";\n"]);return ue=function(){return e},e}var me=E.a.div(ue(),Object(E.b)(se(),H.fadeInRight)),pe=Object(E.a)(d.a)(ce(),Object(E.b)(le(),H.fadeIn)),he=E.a.div(oe(),Object(E.b)(ie(),H.zoomIn)),de=E.a.img(re()),fe=E.a.div(ae(),Object(E.b)(ne(),H.fadeIn)),ge=(E.a.div(te()),E.a.div(ee())),be=E.a.div($()),ve=E.a.div(Z()),ye=E.a.div(X(),Object(E.b)(G(),H.fadeIn)),Ee=E.a.div(Y(),Object(E.b)(Q(),H.slideInDown)),we=n(471),Oe=n(468),je=n(196),xe=n(111),Se=we.a.Title,ke=Oe.a.Item,Ce=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.nextStep,i=t.saveInput;a.validateFields(function(t,n){t||(i({email:n.email}),r(e))})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form;return a.createElement(me,null,a.createElement(Oe.a,{onSubmit:this.handleSubmit},a.createElement(Se,null,"Sweet! You decided to join!"),a.createElement(Se,{level:3},"Please enter your email."),a.createElement(ke,{label:"E-mail",hasFeedback:!0},e.getFieldDecorator("email",{rules:[{required:!0,message:"Please enter your E-mail!"},{type:"email",message:"The input is not valid E-mail!"}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"mail"}),style:{width:"50%"},placeholder:"Email",allowClear:!0}))),a.createElement(xe.a,{type:"primary",htmlType:"submit"},"Next")))}}]),t}(a.Component),De=Oe.a.create()(Ce),Te=we.a.Title,Ie=Oe.a.Item,Fe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).checkPassword=function(e,t,a){var r=n.props.form,i=n.state.confirmDirty;t&&i&&t.length>=8&&r.validateFields(["confirm"],{force:!0}),a()},n.checkConfirm=function(e,t,a){var r=n.props.form;t&&t!==r.getFieldValue("password")&&a("Two passwords that you enter is inconsistent!"),a()},n.handleConfirmBlur=function(e){var t=e.target.value.value,a=n.state.confirmDirty;n.setState({confirmDirty:a||!!t})},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.nextStep,i=t.saveInput;a.validateFields(function(t,n){t||(i({username:n.username,password:n.password}),r(e))})},n.state={confirmDirty:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,n=e.prevStep;return a.createElement(me,null,a.createElement(Oe.a,{onSubmit:this.handleSubmit},a.createElement(Te,null,"Just a little bit more!"),a.createElement(Te,{level:3},"Please enter your username and password."),a.createElement(Ie,{label:"Username",hasFeedback:!0},t.getFieldDecorator("username",{rules:[{required:!0,message:"Please enter your username!"}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"user"}),style:{width:"50%"},placeholder:"Username",allowClear:!0}))),a.createElement(Ie,{label:"Password",hasFeedback:!0},t.getFieldDecorator("password",{rules:[{required:!0,message:"Please enter your password! (at least 8 characters)",min:8},{validator:this.checkPassword}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"lock"}),type:"password",style:{width:"50%"},placeholder:"Password",allowClear:!0}))),a.createElement(Ie,{label:"Confirm Password",hasFeedback:!0},t.getFieldDecorator("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.checkConfirm}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"lock"}),type:"password",style:{width:"50%"},placeholder:"Confirm password",onBlur:this.handleConfirmBlur,allowClear:!0}))),a.createElement(xe.a,{onClick:n},"Previous"),a.createElement(xe.a,{type:"primary",htmlType:"submit"},"Next")))}}]),t}(a.Component),Ae=Oe.a.create()(Fe),Pe=n(469),qe=n(134),ze=n.n(qe),Le=we.a.Title,Ue=we.a.Paragraph,_e=Oe.a.Item,Re=je.a.TextArea,Ne=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleUpload=function(e){var t=e.file,a=e.onSuccess,r=n.props.username,i=new FormData;i.append("username",r),i.append("file",t),ze.a.post("".concat(P,"/add-file"),i,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){a("ok")}).catch(function(e){console.error(e)})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onSubmit,n=e.prevStep;return a.createElement(me,null,a.createElement(Oe.a,{onSubmit:t},a.createElement(Le,null,"Last step!"),a.createElement(Le,{level:3},"Add something from yourself!"),a.createElement(Ue,null,"(optional, can be changed later)"),a.createElement(_e,{label:"Description",hasFeedback:!0},a.createElement(Re,{prefix:a.createElement(y.a,{type:"idcard"}),style:{width:"50%"},placeholder:"Description",autosize:!0})),a.createElement(_e,{label:"Add profile picture"},a.createElement("div",{className:"dropbox",style:{width:"50%",margin:"auto"}},a.createElement(Pe.a,{customRequest:this.handleUpload},a.createElement(xe.a,null,a.createElement(y.a,{type:"upload"}),"Select File")))),a.createElement(xe.a,{onClick:n},"Previous"),a.createElement(xe.a,{type:"primary",htmlType:"submit"},"Done")))}}]),t}(a.Component),Je=Oe.a.create()(Ne),Me=I.a.Step,We=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={step:0,username:""},n.saveInput=function(e){n.setState(e)},n.nextStep=function(e){e.preventDefault();var t=n.state.step;t<2&&n.setState({step:t+1})},n.prevStep=function(e){e.preventDefault();var t=n.state.step;t>0&&n.setState({step:t-1})},n.handleSubmit=function(e){e.preventDefault();var t=Object(T.a)(n).state,a=n.props.history;R(t).then(function(e){e.data?F.a.success("Created successfully!",2,n.handleClose):F.a.error("Email or username taken!",2,function(){return a.push("/register")})}).catch(function(e){return e})},n.handleClose=function(){n.props.history.push("/login")},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.step,r=t.username,i=this.props.history,o=[{title:"Email",content:a.createElement(De,{saveInput:this.saveInput,nextStep:this.nextStep})},{title:"Username and Password",content:a.createElement(Ae,{saveInput:this.saveInput,prevStep:this.prevStep,nextStep:this.nextStep})},{title:"Description",content:a.createElement(Je,{saveInput:this.saveInput,prevStep:this.prevStep,username:r,onSubmit:function(t){return e.handleSubmit(t)}})}];return O("login")?a.createElement(function(){return i.push("/home",{refresh:!0}),null},null):a.createElement(function(){return a.createElement(fe,null,a.createElement(I.a,{current:n},o.map(function(e){return a.createElement(Me,{key:e.title,title:e.title})})),a.createElement("div",{className:"steps-content"},o[n].content))},null)}}]),t}(a.Component),Ke=n(472),Be=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.setState({loading:!0});var t=n.props,a=t.form,r=t.history;a.validateFields(function(e,t){e||N(t).then(function(e){"Logged in"===e.data?n.setState({status:"success"},function(){j("login",t.username),r.push("/home",{refresh:!0})}):n.setState({status:"error"})}).catch(function(e){return e})})},n.state={logged:O("login"),status:"",loading:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.logged,n=e.status,r=e.loading,i=this.props,o=i.form,c=i.history;return t?(c.push("/",{refresh:!0}),null):a.createElement(he,null,a.createElement(Oe.a,{onSubmit:this.handleSubmit},a.createElement(we.a.Title,{type:2},"Welcome back!"),a.createElement(Oe.a.Item,{validateStatus:n},o.getFieldDecorator("username",{rules:[{required:!0,message:"Please enter your username!"}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"user"}),placeholder:"Username",allowClear:!0}))),a.createElement(Oe.a.Item,{validateStatus:n},o.getFieldDecorator("password",{rules:[{required:!0,message:"Please enter your password!"}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"lock"}),type:"password",placeholder:"Password",allowClear:!0}))),a.createElement(Oe.a.Item,null,o.getFieldDecorator("remember",{valuePropName:"checked",initialValue:!0})(a.createElement(Ke.a,null,"Remember me")),a.createElement(l.b,{className:"login-form-forgot",to:"/forgot"},"Forgot password"),a.createElement("br",null),a.createElement(xe.a,{type:"primary",loading:r,htmlType:"submit",style:{width:"100%"}},"Log in"),"Or",a.createElement(l.b,{to:"/register"}," register now!"))))}}]),t}(a.Component),Ve=Object(f.f)(Oe.a.create({name:"normal_login"})(Be)),He=n(62),Qe=n.n(He),Ye=n(110),Ge=n(470),Xe=n(466),Ze=n(467),$e=n(465),et=function(){return a.createElement($e.a,{indicator:a.createElement(y.a,{type:"loading",style:{fontSize:"4rem"}}),style:{position:"absolute",top:"40%",left:"50%",transform:"translate(-40%, -50%)"}})},tt=d.a.Content,nt=d.a.Footer,at=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).latestQuestions=Object(Ye.a)(Qe.a.mark(function e(){return Qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U().then(function(e){setTimeout(function(){return n.setState({questions:e.data.questions,users:e.data.users,ready:!0})},500)});case 2:case"end":return e.stop()}},e)})),n.loadAllUsers=Object(Ye.a)(Qe.a.mark(function e(){return Qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().then(function(){var e=Object(Ye.a)(Qe.a.mark(function e(t){var a,r;return Qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],r=new Promise(function(e){a=t.data.usernames.map(function(e){return e.username}),e("ok")}),e.next=4,r.then(function(e){e&&n.setState({allUsers:a})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e)})),n.onSelect=function(e){n.props.history.push("/profile/".concat(e))},n.onChange=function(e){n.setState({searchPhrease:e})},n.handleSearch=function(){var e=n.props.history,t=n.state.searchPhrease;e.push("/search/".concat(t))},n.state={ready:!1,questions:[],users:[],allUsers:[],searchPhrease:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadAllUsers().then(function(){e.latestQuestions()})}},{key:"render",value:function(){var e=this.state,t=e.questions,n=e.users,r=e.allUsers;return e.ready?a.createElement(pe,null,a.createElement(tt,{style:{width:"100%",height:"95vh",paddingTop:"5vh"}},a.createElement(we.a.Title,{level:3,style:{marginTop:"10%",textAlign:"center"}},"Search for anyone!"),a.createElement(Ge.a,{className:"global-search",size:"large",style:{width:"100%"},dataSource:r,onSelect:this.onSelect,onSearch:this.onChange,placeholder:"Search for user...",filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())}},a.createElement(je.a,{suffix:a.createElement(xe.a,{className:"search-btn",style:{marginRight:-12},size:"large",type:"primary",onClick:this.handleSearch},a.createElement(y.a,{type:"search"}))})),a.createElement(we.a.Title,{level:3,style:{marginTop:"10vh",textAlign:"center"}},"Some random QA's"),a.createElement(ye,null,t.map(function(e){if(e){var t="";return n.forEach(function(n){n._id===e.user_id&&(t=n.username)}),a.createElement(ve,{key:e._id},a.createElement(Xe.a,{avatar:a.createElement(l.b,{to:"/profile/".concat(e.asked_by)},a.createElement(Ze.a,{icon:"user",size:"large",src:"".concat(P,"/public/").concat(e.asked_by)})),author:a.createElement(l.b,{to:"/profile/".concat(e.asked_by)},e.asked_by),content:e.content},a.createElement(Xe.a,{avatar:a.createElement(l.b,{to:"/profile/".concat(t)},a.createElement(Ze.a,{icon:"user",size:"large",src:"".concat(P,"/public/").concat(t)})),author:a.createElement(l.b,{to:"/profile/".concat(t)},t),content:e.answer})))}return null})),a.createElement(nt,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a"))):a.createElement(et,null)}}]),t}(a.Component),rt=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(Ee,null,a.createElement(we.a.Title,{level:2},"Let's know each other!"),a.createElement(we.a.Paragraph,{style:{fontFamily:"Roboto",fontWeight:"bold"}},"Enter the best Question and Answers site"),a.createElement(l.b,{to:"/register"},a.createElement(xe.a,{type:"primary",size:"large",shape:"round"},"Join now")),a.createElement("h4",null,"or",a.createElement(l.b,{to:"/login"}," log in")))}}]),t}(a.Component),it=Object(f.f)(function(e){var t=e.history;return O("login")?a.createElement(function(){return a.createElement(at,{history:t})},null):a.createElement(function(){return a.createElement(rt,{history:t})},null)}),ot=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onChange=function(e){n.setState({answer:e.target.value})},n.handleAnswer=function(e){e.preventDefault();var t=n.props,a=t.question,r=t.refresh,i=n.state.answer;J(a._id,i),r()},n.handleDelete=function(){var e=n.props,t=e.question,a=e.refresh;B(t._id),a()};var a=n.props.question;return n.state={answer:a.answer},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,r=t.username,i=this.state.answer;return a.createElement(ve,{style:{position:"relative"}},a.createElement(Oe.a,{onSubmit:this.handleAnswer},a.createElement(Xe.a,{avatar:a.createElement(l.b,{to:"/profile/".concat(n.asked_by)},a.createElement(Ze.a,{icon:"user",size:"large",src:"".concat(P,"/public/").concat(n.asked_by)})),author:a.createElement(l.b,{to:"/profile/".concat(n.asked_by)},n.asked_by),content:n.content},n.answer?a.createElement(Xe.a,{avatar:a.createElement(l.b,{to:"/profile/".concat(r)},a.createElement(Ze.a,{icon:"user",size:"large",src:"".concat(P,"/public/").concat(r)})),author:a.createElement(l.b,{to:"/profile/".concat(r)},r),content:a.createElement(we.a.Paragraph,null,n.answer)}):a.createElement("div",null,r===O("login")?a.createElement(je.a,{onChange:function(t){return e.onChange(t)},placeholder:"Answer"}):null),i&&!n.answer?a.createElement(xe.a,{type:"primary",htmlType:"submit",style:{float:"right",marginTop:"5px"}},"Answer!"):null,r===O("login")?a.createElement(xe.a,{style:{position:"absolute",top:"5px",right:"10px",cursor:"pointer",zIndex:1},type:"primary",onClick:function(){return e.handleDelete()}},"Delete"):null)))}}]),t}(a.Component),lt=d.a.Content,ct=d.a.Footer,st=we.a.Title,ut=we.a.Paragraph,mt=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[],ready:!1},n.refresh=function(){var e=n.props.match;q(e.params.username).then(function(e){L(e.data._id).then(function(t){_(e.data.username).then(function(a){setTimeout(function(){return n.setState({username:e.data.username,description:e.data.description,questions:t.data,avatar:a.data,ready:!0})},1e3)})})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this,t=this.props,n=t.history,r=t.match,i=this.state,o=i.avatar,c=i.username,s=i.description,u=i.questions,m=i.ready;return O("login")?a.createElement(function(){return m?a.createElement(pe,null,a.createElement(lt,{style:{width:"100%",height:"95vh",paddingTop:"5vh"}},a.createElement("div",{style:{marginBottom:"100px"}},a.createElement(l.b,{to:"/profile/".concat(c),style:{float:"left",marginRight:"10px"}},o?a.createElement(de,{src:"".concat(P,"/public/").concat(c),alt:"100x100",style:{zIndex:2}}):a.createElement(Ze.a,{icon:"user",size:80,style:{zIndex:2}})),a.createElement(st,{level:2},c),"undefined"!==s?a.createElement(ut,{strong:!0},s):null),O("login")===r.params.username?null:a.createElement(l.b,{to:"/ask/".concat(c)},a.createElement(xe.a,{type:"primary"},"Ask this user")),a.createElement(ye,null,u.reverse().map(function(t){return a.createElement(ot,{question:t,refresh:e.refresh,username:c,key:t._id})})),a.createElement(ct,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a"))):a.createElement(et,null)},null):a.createElement(function(){return n.push("/home"),null},null)}}]),t}(a.Component),pt=n(197),ht=d.a.Content,dt=d.a.Footer,ft=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={logged:O("login"),fileList:[],uploading:!1,previousDescription:"",ready:!1},n.handleUpload=function(){var e=n.state,t=e.fileList,a=e.logged,r=new FormData;r.append("username",a),r.append("file",t[t.length-1]),n.setState({uploading:!0}),V(r,a).then(function(e){e.data?n.setState({fileList:[],uploading:!1}):n.setState({uploading:!1})})},n.onClose=function(){var e=n.props.history,t=n.state.logged;e.push("/profile/".concat(t))},n.handleSubmit=function(e){e.preventDefault();var t=n.props.form,a=n.state.logged;t.validateFields(function(e,t){t&&W(t,a).then(function(e){e?F.a.success("Changed successfully!",2,n.onClose):F.a.error("Something went wrong, try again!",2)})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.logged;q(t).then(function(t){"undefined"!==t.data.description&&setTimeout(function(){return e.setState({previousDescription:t.data.description,ready:!0})},1e3)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.logged,r=t.uploading,i=t.fileList,o=t.previousDescription,l=t.ready,c=this.props,s=c.form,u=c.history,m={onRemove:function(t){e.setState(function(e){var n=e.fileList.indexOf(t),a=e.fileList.slice();return a.splice(n,1),{fileList:a}})},beforeUpload:function(t){return e.setState(function(e){return{fileList:[].concat(Object(pt.a)(e.fileList),[t])}}),!1},fileList:i};return n?l?a.createElement(pe,null,a.createElement(ht,{style:{paddingTop:"10vh"}},a.createElement(we.a.Title,{level:2,style:{paddingTop:"5vh",textAlign:"center",marginBottom:"12px"}},"Settings"," ",a.createElement(y.a,{type:"setting"})),a.createElement(Oe.a,{onSubmit:this.handleSubmit},a.createElement(we.a.Paragraph,null,"Change your description:"),a.createElement(Oe.a.Item,null,s.getFieldDecorator("description",{initialValue:o})(a.createElement(je.a.TextArea,{placeholder:"Update description"}))),a.createElement(we.a.Paragraph,null,"Change your profile picture:"),a.createElement(Oe.a.Item,null,a.createElement(Pe.a,m,a.createElement(xe.a,null,a.createElement(y.a,{type:"upload"}),"Choose image")),a.createElement(xe.a,{type:"primary",onClick:this.handleUpload,disabled:0===i.length,loading:r,style:{marginTop:16}},r?"Uploading":"Change profile picture")),a.createElement(xe.a,{style:{width:"60%",marginLeft:"20%",marginTop:"5%"},type:"primary",htmlType:"submit"},"Save description")),a.createElement(dt,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a"))):a.createElement(et,null):(u.push("/home"),null)}}]),t}(a.Component),gt=Object(f.f)(Oe.a.create({name:"settings"})(ft)),bt=function(e){var t,n=e.history;(t="login",new Promise(function(e){w.remove(t,{path:"/qa-app-mongodb/"}),e("ok")})).then(function(e){return e?(n.push("/",{refresh:!0}),null):null})},vt=d.a.Content,yt=d.a.Footer,Et=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={logged:O("login"),loading:!1},n.handleSubmit=function(e){e.preventDefault(),n.setState({loading:!0});var t=n.props,a=t.form,r=t.history,i=t.match,o=n.state.logged;a.validateFields(function(e,t){e||M(i.params.username,t.questionContent,o).then(function(e){e.data&&r.push("/profile/".concat(i.params.username))}).catch(function(e){return e})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,n=e.history,r=n.location.pathname,i=this.state,o=i.logged,c=i.loading,s=r.substring(r.lastIndexOf("/")+1,r.length);return o?a.createElement(d.a,null,a.createElement(vt,null,a.createElement(he,{style:{width:"100%",height:"90%",paddingLeft:"25%",paddingRight:"25%"}},a.createElement(we.a.Title,{level:2,style:{textAlign:"center"}},"You can ask",a.createElement(l.b,{to:"/profile/".concat(s)}," ".concat(s," ")),"anything!"),a.createElement(Oe.a,{onSubmit:this.handleSubmit,style:{width:"100%"}},a.createElement(Oe.a.Item,null,t.getFieldDecorator("questionContent")(a.createElement(je.a.TextArea,{placeholder:"Your question here"})),a.createElement(xe.a,{type:"primary",loading:c,htmlType:"submit",style:{marginRight:-12}},"Ask question")))),a.createElement(yt,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a"))):(n.push("/home"),null)}}]),t}(a.Component),wt=Object(f.f)(Oe.a.create({name:"ask_form"})(Et)),Ot=function(e){var t=e.user;return a.createElement(ge,null,a.createElement(Ze.a,{size:"large",src:"".concat(P,"/public/").concat(t.username)}),a.createElement(l.b,{to:"/profile/".concat(t.username)},t.username))},jt=d.a.Content,xt=d.a.Footer,St=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],ready:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,n=this.props.match.params.search;(e=n,A.get("".concat(P,"/search/").concat(e))).then(function(e){setTimeout(function(){return t.setState({users:e.data,ready:!0})},1e3)})}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.ready,r=this.props,i=r.match,o=r.history,l=i.params.search,c=t.map(function(e){return a.createElement(Ot,{user:e})});return O("login")?a.createElement(function(){return n?a.createElement(pe,null,a.createElement(jt,null,a.createElement(be,null,a.createElement(we.a.Title,{level:4,style:{marginTop:"3vh",textAlign:"center"}},"Results for '",a.createElement("b",{style:{color:"#1890ff"}},l),"'"),a.createElement("div",{style:{marginTop:"3vh"}},c)),a.createElement(xt,{style:{width:"100%",textAlign:"center"}},"Created by Kacper Jagie\u0142a"))):a.createElement(et,null)},null):a.createElement(function(){return o.push("/",{refresh:!0}),null},null)}}]),t}(a.Component),kt=n(477),Ct=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={logged:O("login"),alertVisible:!1},n.handleSubmit=function(e){var t=n.props.form;e.preventDefault(),t.validateFields(function(e,t){K(t.username,t.email).then(function(e){e&&n.setState({alertVisible:!0})})})},n.onClose=function(){n.props.history.push("/login")},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.logged,n=e.alertVisible,r=this.props,i=r.form,o=r.history;return t?(o.push("/"),null):a.createElement(he,null,a.createElement(we.a.Title,{level:2},"Forgot your password?"),a.createElement(kt.a,{message:"Email send!",description:"If user with such username and email exist we send you an email.",type:"info",closable:!0,onClose:this.onClose,style:n?{visibility:"visible",position:"absolute",top:"40vh",width:"60%",maringLeft:"20%",zIndex:3}:{visibility:"hidden",position:"absolute",top:"40vh",width:"60%",maringLeft:"20%",zIndex:3}}),a.createElement(we.a.Title,{level:4},"Generate a new one!"),a.createElement(Oe.a,{onSubmit:this.handleSubmit},a.createElement(Oe.a.Item,null,i.getFieldDecorator("email",{rules:[{required:!0,message:"Please enter your email"},{type:"email",message:"The input is not valid E-mail!"}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"mail"}),placeholder:"Email",allowClear:!0}))),a.createElement(Oe.a.Item,null,i.getFieldDecorator("username",{rules:[{required:!0,message:"Please enter your username"}]})(a.createElement(je.a,{prefix:a.createElement(y.a,{type:"user"}),placeholder:"Username",allowClear:!0}))),a.createElement(xe.a,{type:"primary",htmlType:"submit"},"Generate new password")))}}]),t}(a.Component),Dt=Object(f.f)(Oe.a.create({name:"forgot"})(Ct)),Tt=function(){return a.createElement(f.c,null,a.createElement(f.a,{exact:!0,path:"/ask/:username",component:wt}),a.createElement(f.a,{exact:!0,path:"/forgot",component:Dt}),a.createElement(f.a,{exact:!0,path:"/settings",component:gt}),a.createElement(f.a,{exact:!0,path:"/profile/:username",component:Object(f.f)(mt)}),a.createElement(f.a,{exact:!0,path:"/register",component:Object(f.f)(We)}),a.createElement(f.a,{exact:!0,path:"/login",component:Ve}),a.createElement(f.a,{exact:!0,path:"/logout",component:Object(f.f)(bt)}),a.createElement(f.a,{exact:!0,path:"/search/:search",component:Object(f.f)(St)}),a.createElement(f.a,{path:"/",component:Object(f.f)(it)}))},It=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.history.location.pathname,n="";n=t.indexOf("/")===t.lastIndexOf("/")?t.replace("/",""):t.substring(t.indexOf("/")+1,t.lastIndexOf("/"));return O("login")?a.createElement(function(){return a.createElement(d.a,{style:{minHeight:"100vh",maxHeight:"100vh"}},a.createElement(D,{selected:n}),a.createElement(Tt,{refresh:e.refresh}))},null):a.createElement(function(){return a.createElement(d.a,{style:{minHeight:"100vh",maxHeight:"100vh"}},a.createElement(Tt,{refresh:e.refresh}))},null)}}]),t}(a.Component),Ft=Object(f.f)(It);n(461),n(462);o.a.render(r.a.createElement(c.b,null,r.a.createElement(l.a,{basename:"/"},r.a.createElement(Ft,null))),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.58fbc476.chunk.js.map