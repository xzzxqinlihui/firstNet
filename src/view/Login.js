import React, { Component } from 'react';
import "../sass/Login.scss";

class Login extends Component {
    loginClick=()=>{
        //直接吧用户校验的信息加入到 sessionStorage
        sessionStorage.setItem("APP_LOGIN_USER",JSON.stringify({ Name:"aicoder.com",pwd:"123" }));
        //判断用户之前有没有输入之前的地址
        let lastLocation = JSON.parse(sessionStorage.getItem("APP_LAST_URL"));
        if(lastLocation){
            sessionStorage.removeItem("APP_LAST_URL");
            this.props.history.push(lastLocation);
        }else{
            this.props.history.push("/app")
        }
        window.location.reload();
    }

     render() {
        return (
            <div id="loginWrap">
                <hr/>
                <button id="btnLogin"
                onClick = {this.loginClick}
                className="button is-info">登录首页</button>
            </div>
        );
    }
}

export default Login;
