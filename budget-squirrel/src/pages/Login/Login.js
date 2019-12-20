import React from 'react'
import './Login.scss'
import BasicForm from '../../components/generic/BasicForm/BasicForm';
import PasswordInput from '../../controls/PasswordInput/PasswordInput';

export default function Login() {

    const title = "Login";
    const description = "Login in your account to view your budget details";

    function LoginInput() {
        return (
            <>
                <input class="input" type="text" placeholder="Username" />
                <PasswordInput />                
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
            <BasicForm title={title} description={description}>
                <LoginInput key="inputs" />
                <LoginButton key="buttons" />
            </BasicForm>
        </div>
    )
}