(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(68)},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(41),o=n.n(s),l=n(18),i=n(25),u=n(3),c={authUser:null},m=function(e,t){return Object(u.a)({},e,{authUser:t.authUser})};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_USER_SET":return m(e,t);default:return e}},d=n(16),p={users:null},f=function(e,t){return Object(u.a)({},e,{users:t.users})},b=function(e,t){return Object(u.a)({},e,{users:Object(u.a)({},e.users,Object(d.a)({},t.uid,t.user))})};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_SET":return f(e,t);case"USER_SET":return b(e,t);default:return e}},g={messages:null,limit:5},v=function(e,t){return Object(u.a)({},e,{messages:t.messages})},O=function(e,t){return Object(u.a)({},e,{limit:t.limit})};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES_SET":return v(e,t);case"MESSAGES_LIMIT_SET":return O(e,t);default:return e}},j=Object(i.b)({sessionState:h,userState:E,messageState:S}),w=Object(i.c)(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(80),C=n(79),U=n(70),k=r.a.createContext(null),P=n(4),x=n(6),M=n(8),I=n(7),A=n(9),T=r.a.createContext(null),D=function(e){return function(t){return r.a.createElement(T.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},R=T,W=n(19),L=n.n(W),F=(n(59),n(61),n(69),{apiKey:"AIzaSyBEANmdfHVYIIGn8c-Oo6Azl716hPZEEJ0",authDomain:"auth-react-app-d37e7.firebaseapp.com",databaseURL:"https://auth-react-app-d37e7.firebaseio.com",projectId:"auth-react-app-d37e7",storageBucket:"auth-react-app-d37e7.appspot.com",messagingSenderId:"60593339260",appId:"1:60593339260:web:e4e8138c1dd416ed"}),N=function e(){var t=this;Object(P.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(a){a?t.user(a.uid).once("value").then(function(t){var n=t.val();n.roles||(n.roles=[]),a=Object(u.a)({uid:a.uid,email:a.email,emailVerified:a.emailVerified,providerData:a.providerData},n),e(a)}):n()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},this.image=function(e){return t.storage.ref("images/".concat(e))},this.images=function(){return t.storage.ref("images")},L.a.initializeApp(F),this.serverValue=L.a.database.ServerValue,this.emailAuthProvider=L.a.auth.EmailAuthProvider,this.auth=L.a.auth(),this.db=L.a.database(),this.storage=L.a.storage(),this.googleProvider=new L.a.auth.GoogleAuthProvider,this.facebookProvider=new L.a.auth.FacebookAuthProvider},_=function(e){var t=function(t){function n(e){var t;return Object(P.a)(this,n),(t=Object(M.a)(this,Object(I.a)(n).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(A.a)(n,t),Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return D(t)},G=n(82),V=n(12),B="/home",H=function(e){return function(t){var n=function(n){function a(){return Object(P.a)(this,a),Object(M.a)(this,Object(I.a)(a).apply(this,arguments))}return Object(A.a)(a,n),Object(x.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(n){e(n)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(k.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(V.a)(G.a,D)(n)}},J=D(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),z="ADMIN",K=function(e){var t=e.authUser;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(U.a,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(U.a,{to:B},"Home")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/account"},"Account")),t.roles.includes(z)&&r.a.createElement("li",null,r.a.createElement(U.a,{to:"/admin"},"Admin")),r.a.createElement("li",null,r.a.createElement(J,null)))},Y=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(U.a,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/signin"},"Sign In")))},Z=function(){return r.a.createElement(k.Consumer,null,function(e){return e?r.a.createElement(K,{authUser:e}):r.a.createElement(Y,null)})},$=n(71),q=n(72),Q=n(73),X=Object(V.a)(Object(l.b)(function(e){return{authUser:e.sessionState.authUser}}),H(function(e){return!!e}))(function(){return r.a.createElement(k.Consumer,null,function(e){return r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(Q.a,null,r.a.createElement("h1",null,"LandingPages"),r.a.createElement("h3",null,"Welecome ",e.username),r.a.createElement("h3",null,"email: ",e.email))))})}),ee={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},te=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,s=t.passwordOne,o=t.isAdmin,l=[];o&&l.push(z),n.props.firebase.doCreateUserWithEmailAndPassword(r,s).then(function(e){n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:l}).then(function(){n.setState(Object(u.a)({},ee)),n.props.history.push(B)}).catch(function(e){n.setState({error:e})})}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(d.a)({},e.target.name,e.target.checked))},n.state=Object(u.a)({},ee),n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,s=e.passwordTwo,o=e.isAdmin,l=e.error,i=a!==s||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:s,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("label",null,"Admin:",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:o,onChange:this.onChangeCheckbox})),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),l&&r.a.createElement("p",null,l.message))}}]),t}(a.Component),ne=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(U.a,{to:"/signup"},"Sign Up"))},ae=Object(G.a)(D(te)),re=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(ae,null))},se=n(74),oe=n(75),le=n(76),ie=n(77),ue=n(78),ce={email:"",error:null},me=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(u.a)({},ce))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},ce),n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),he=function(){return r.a.createElement("p",null,r.a.createElement(U.a,{to:"/pw-forget"},"Forgot Password?"))},de=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(pe,null))},pe=D(me),fe={email:"",password:"",error:null},be=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(u.a)({},fe)),n.props.history.push(B)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},fe),n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,s=""===n||""===t;return r.a.createElement(se.a,{onSubmit:this.onSubmit},r.a.createElement(oe.a,null,r.a.createElement(le.a,{for:"signInEmail"},"Email Address :"),r.a.createElement(ie.a,{type:"email",name:"email",id:"signInEmail",placeholder:"Email Address",value:t,onChange:this.onChange})),r.a.createElement(oe.a,null,r.a.createElement(le.a,{for:"signInPassword"},"Password"),r.a.createElement(ie.a,{name:"password",id:"signInPassword",value:n,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement(ue.a,{disabled:s,type:"submit",outline:!0,color:"primary"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),Ee=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then(function(e){n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:[]}).then(function(){n.setState({error:null}),n.props.history.push(B)}).catch(function(e){n.setState({error:e})})}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement(se.a,{onSubmit:this.onSubmit},r.a.createElement(ue.a,{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),ge=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then(function(e){n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:[]}).then(function(){n.setState({error:null}),n.props.history.push(B)}).catch(function(e){n.setState({error:e})})}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement(se.a,{onSubmit:this.onSubmit},r.a.createElement(ue.a,{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),ve=Object(V.a)(G.a,D)(be),Oe=Object(V.a)(G.a,D)(Ee),Se=Object(V.a)(G.a,D)(ge),je=function(){return r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(Q.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("h1",null,"SignIn"),r.a.createElement(ve,null),r.a.createElement(Oe,null),r.a.createElement(Se,null),r.a.createElement(he,null),r.a.createElement(ne,null))))},we=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onToggleEditMode=function(){n.setState(function(e){return{editMode:!e.editMode,editText:n.props.message.text}})},n.onChangeEditText=function(e){n.setState({editText:e.target.value})},n.onSaveEditText=function(){n.props.onEditMessage(n.props.message,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.message.text},n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.onRemoveMessage,a=this.state,s=a.editMode,o=a.editText;return r.a.createElement("li",null,s?r.a.createElement("input",{type:"text",value:o,onChange:this.onChangeEditText}):r.a.createElement("span",null,r.a.createElement("strong",null,t.user.username||t.user.userId)," ",t.text," ",t.editedAt&&r.a.createElement("span",null,"(Edited)")),s?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditText},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!s&&r.a.createElement("button",{type:"button",onClick:function(){return n(t.uid)}},"Delete"))}}]),t}(a.Component),ye=function(e){var t=e.messages,n=e.onEditMessage,a=e.onRemoveMessage;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(we,{key:e.uid,message:e,onEditMessage:n,onRemoveMessage:a})}))},Ce=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onListenForMessages=function(){n.setState({loading:!0}),n.props.firebase.messages().orderByChild("createdAt").limitToLast(n.state.limit).on("value",function(e){var t=e.val();if(t){var a=Object.keys(t).map(function(e){return Object(u.a)({},t[e],{uid:e})});n.setState({messages:a,loading:!1})}else n.setState({messages:null,loading:!1})})},n.onChangeText=function(e){n.setState({text:e.target.value})},n.onCreateMessage=function(e,t){n.props.firebase.messages().push({text:n.state.text,userId:t.uid,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),e.preventDefault()},n.onEditMessage=function(e,t){n.props.firebase.message(e.uid).set(Object(u.a)({},e,{text:t,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveMessage=function(e){n.props.firebase.message(e).remove()},n.onNextPage=function(){n.setState(function(e){return{limit:e.limit+5}},n.onListenForMessages)},n.state={text:"",loading:!1,messages:[],limit:5},n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this,t=this.props.users,n=this.state,a=n.text,s=n.messages,o=n.loading;return r.a.createElement(k.Consumer,null,function(n){return r.a.createElement("div",null,!o&&s&&r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"),o&&r.a.createElement("div",null,"Loading ..."),s&&r.a.createElement(ye,{messages:s.map(function(e){return Object(u.a)({},e,{user:t?t[e.userId]:{userId:e.userId}})}),onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!s&&r.a.createElement("div",null,"There are no messages ..."),r.a.createElement("form",{onSubmit:function(t){return e.onCreateMessage(t,n)}},r.a.createElement("input",{type:"text",value:a,onChange:e.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")))})}}]),t}(a.Component),Ue=D(Ce),ke=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).state={users:null},n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.users().on("value",function(t){e.setState({users:t.val()})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this;return r.a.createElement(k.Consumer,null,function(t){return r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(Q.a,null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("h3",null,"Welecome ",t.username),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."))),r.a.createElement(Ue,{users:e.state.users}))})}}]),t}(a.Component),Pe=Object(V.a)(Object(l.b)(function(e){return{authUser:e.sessionState.authUser}}),H(function(e){return!!e}))(ke),xe={passwordOne:"",passwordTwo:"",error:null},Me=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(u.a)({},xe))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},xe),n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,s=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),Ie=D(Me),Ae=n(24),Te=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).handleChange=function(e){n.setState({file:e.target.files[0]}),n.setState({name:e.target.files[0].name})},n.state={uploading:!1,percent:0,file:"",error:"",name:"",url:""},n.handleChange=n.handleChange.bind(Object(Ae.a)(Object(Ae.a)(n))),n.uploadToFirebase=n.uploadToFirebase.bind(Object(Ae.a)(Object(Ae.a)(n))),n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"uploadToFirebase",value:function(e,t){var n=this;this.setState({uploading:!0});var a=this.props.firebase.images();console.log(this.state),a.child(this.state.name).put(this.state.file).then(function(e){n.setState({uploading:!1}),console.log("Uploaded a blob or file!"),console.log(e.metadata.fullPath),a.getDownloadURL().then(function(e){console.log(e),n.setState({url:e})}),n.props.firebase.users().child("url").push({url:n.state.url})}).catch(function(e){return n.setState({error:e.message})}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(k.Consumer,null,function(t){return r.a.createElement("div",null,r.a.createElement("h1",null,"Firebase Upload Example"),r.a.createElement("input",{type:"file",onChange:e.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.uploadToFirebase},"Upload"),r.a.createElement("br",null),r.a.createElement("img",{src:e.state.url||"http://via.placeholder.com/400x300",alt:"upload images",height:"300",width:"400"}))})}}]),t}(a.Component),De=D(Te),Re=Object(V.a)(Object(l.b)(function(e){return{authUser:e.sessionState.authUser}}),H(function(e){return!!e}))(function(){return r.a.createElement(k.Consumer,null,function(e){return r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(Q.a,null,r.a.createElement("h3",null,"Welecome: ",e.username),r.a.createElement("h3",null,"email: ",e.email),r.a.createElement(pe,null),r.a.createElement(Ie,null),r.a.createElement(De,null))))})}),We=n(81),Le=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).state={loading:!1},n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.users.length||this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){e.props.onSetUsers(t.val()),e.setState({loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.props.users,t=this.state.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),t&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement(U.a,{to:"".concat("/admin","/").concat(e.uid)},"Details")))})))}}]),t}(a.Component),Fe=Object(V.a)(D,Object(l.b)(function(e){return{users:Object.keys(e.userState.users||{}).map(function(t){return Object(u.a)({},e.userState.users[t],{uid:t})})}},function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}}))(Le),Ne=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(I.a)(t).call(this,e))).onSendPasswordResetEmail=function(){n.props.firebase.doPasswordReset(n.props.user.email)},n.state={loading:!1},n}return Object(A.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.props.onSetUser(t.val(),e.props.match.params.id),e.setState({loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.props.user,t=this.state.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),t&&r.a.createElement("div",null,"Loading ..."),e&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(a.Component),_e=Object(V.a)(D,Object(l.b)(function(e,t){return{user:(e.userState.users||{})[t.match.params.id]}},function(e){return{onSetUser:function(t,n){return e({type:"USER_SET",user:t,uid:n})}}}))(Ne),Ge=Object(V.a)(H(function(e){return e&&e.roles.includes(z)}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(We.a,null,r.a.createElement(C.a,{exact:!0,path:"/admin/:id",component:_e}),r.a.createElement(C.a,{exact:!0,path:"/admin",component:Fe})))}),Ve=_(function(){return r.a.createElement(y.a,null,r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement("hr",null),r.a.createElement(C.a,{exact:!0,path:"/",component:X}),r.a.createElement(C.a,{exact:!0,path:"/signup",component:re}),r.a.createElement(C.a,{exact:!0,path:"/signin",component:je}),r.a.createElement(C.a,{exact:!0,path:"/pw-forget",component:de}),r.a.createElement(C.a,{exact:!0,path:B,component:Pe}),r.a.createElement(C.a,{exact:!0,path:"/account",component:Re}),r.a.createElement(C.a,{exact:!0,path:"/admin",component:Ge})))});n(66);o.a.render(r.a.createElement(l.a,{store:w},r.a.createElement(R.Provider,{value:new N},r.a.createElement(Ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,2,1]]]);
//# sourceMappingURL=main.c07d0b82.chunk.js.map