import React from 'react';
import './Register.scss';
import PasswordInput from '../../controls/PasswordInput/PasswordInput';

export default function Register() {
    return (
        <div class="register form">
            <div>
                <h2>Register your account</h2>
                <p class="register__promo">
                    Registering your account allows you to track
                    your budget accross multiple platforms.
                </p>
            </div>

            <div class="form__inputs register__inputs">
                <input class="input" type="text" placeholder="Name" />
                <input class="input" type="text" placeholder="Email" />
                <PasswordInput />
                <p class="input__explain">Password must be at least 12 characters or longer.</p>
            </div>

            <div class="form__actions">
                <button class="button button--wide">Register</button>
            </div>
        </div>
    )
}
