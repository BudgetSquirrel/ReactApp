import React, { useContext } from 'react'
import './Login.scss'
import BasicForm from '../../components/generic/BasicForm/BasicForm';
import PasswordInput from '../../controls/PasswordInput/PasswordInput';
import BasicCheckbox from '../../components/generic/BasicCheckbox/BasicCheckbox';
import axios from 'axios';
import BudgetService from '../../services/budget-service';
import BackendClient from '../../infrastructure/backend-client';
import { ServiceContext } from '../../dependency-injection/service-context';

export default function Login() {
    const services = useContext(ServiceContext);
    const backendClient = services.backendClient;
    const budgetService = services.budgetService;

    function login() {
        backendClient.authenticate("user1", "user1234").then(() => {
            let budgets = budgetService.getRootBudgets().then(bs => {
                console.log(bs);
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