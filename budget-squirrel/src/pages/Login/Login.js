import React from 'react'
import './Login.scss'
import BasicForm from '../../components/generic/BasicForm/BasicForm';
import PasswordInput from '../../controls/PasswordInput/PasswordInput';
import BasicCheckbox from '../../components/generic/BasicCheckbox/BasicCheckbox';

export default function Login() {

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