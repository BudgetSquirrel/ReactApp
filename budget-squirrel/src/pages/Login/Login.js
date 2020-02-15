import React, { useContext, useRef, useState } from 'react'
import './Login.scss'
import { useHistory } from 'react-router-dom';
import BasicForm from '../../components/generic/BasicForm/BasicForm';
import PasswordInput from '../../controls/PasswordInput/PasswordInput';
import BasicCheckbox from '../../components/generic/BasicCheckbox/BasicCheckbox';
import { ServiceContext } from '../../dependency-injection/service-context';
import RouteConstants from '../../RouteConstants';
import Layout from '../../Layout/Layout';

export default function Login() {
    const services = useContext(ServiceContext);
    const authService = services.authService;

    const history = useHistory();

    const usernameRef = useRef();
    const passwordRef = useRef();

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function onLoginClicked() {
        const password = passwordRef.current.value
        const username = usernameRef.current.value
        authService.login(username, password).then(response => {
            history.push(RouteConstants.BUDGET);
        }).catch(e => {
            setUsernameError(false);
            setPasswordError(false);
            
            if (e.message === "USER_NOT_FOUND")
                setUsernameError(true);
            else if (e.message === "WRONG_PASSWORD")
                setPasswordError(true);
        });
    }

    function getUsernameInputClass() {
        let classNames = "input";
        if (usernameError)
            classNames = `${classNames} input--invalid`;
        return classNames;
    }

    const title = "Login";

    function LoginInput() {
        return (
            <>
                <input class={getUsernameInputClass()} type="text" ref={usernameRef} placeholder="Username" />
                <PasswordInput valueRef={passwordRef} isValid={!passwordError} />                
                <BasicCheckbox title="Remember Me"/>            
            </>
        )
    }

    function LoginButton() {
        return (
            <>
                <button onClick={onLoginClicked} class="button button--wide">Login</button>
            </>
        )
    }

    return (
        <Layout>
            <div class="login">
                <BasicForm title={title}>
                    <LoginInput key="inputs" />
                    <LoginButton key="buttons" />
                </BasicForm>
                <a class="login__forgot-password" href="TBD">
                    I forgot my Password
                </a>
            </div>
        </Layout>
    )
}