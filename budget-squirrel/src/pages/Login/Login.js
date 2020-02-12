import React from 'react'
import './Login.scss'
import BasicForm from '../../components/generic/BasicForm/BasicForm';
import PasswordInput from '../../controls/PasswordInput/PasswordInput';
import BasicCheckbox from '../../components/generic/BasicCheckbox/BasicCheckbox';
import axios from 'axios';

export default function Login() {

    function login() {
        axios({
            method: "post",
            url: "/api/auth/authenticate",
            data: {
                username: "user1",
                password: "user1234"
            }
        }).then(function(response) {
            console.log(response);
            let jwtToken = response.data;
            axios({
                method: "post",
                url: "/api/budget/roots",
                data: {},
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            }).then(function(response2) {
                console.log("Hi!");
                console.log(response2);
                
            });
        });
    }
    login();

    const title = "Login";

    function LoginInput() {
        return (
            <>
                <input class="input" type="text" placeholder="Username" />
                <PasswordInput />                
                <BasicCheckbox title="Remember Me"/>            
            </>
        )
    }

    function LoginButton() {
        return (
            <>
                <button class="button button--wide">Login</button>
            </>
        )
    }

    return (
        <div class="login">
            <BasicForm title={title}>
                <LoginInput key="inputs" />
                <LoginButton key="buttons" />
            </BasicForm>
            <a class="login__forgot-password" href="TBD">
                I forgot my Password
            </a>
        </div>
    )
}